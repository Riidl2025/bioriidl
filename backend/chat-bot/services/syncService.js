const { performScrapeJob } = require('./scraperService');
const { createEmbeddings } = require('./embeddingService');
const { chunkPageText } = require('./chunkUtils');
const { replaceAllChunks } = require('./chromaService');
const { startChromaServer } = require('./chromaServer');

function agentLog(payload) {
  // #region agent log
  fetch('http://127.0.0.1:7788/ingest/333fa7c1-de84-45f4-9326-e086d2e5c393', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '0d705f' },
    body: JSON.stringify({ sessionId: '0d705f', timestamp: Date.now(), ...payload }),
  }).catch(() => {});
  // #endregion
}

async function runFullSync() {
  console.log(`[${new Date().toISOString()}] SYNC STARTED: scrape → embed → ChromaDB`);
  try {
    await startChromaServer();

    const pages = await performScrapeJob();
    // #region agent log
    agentLog({
      runId: 'chroma-sync',
      hypothesisId: 'D',
      location: 'syncService.js:runFullSync',
      message: 'Scrape complete',
      data: { pageCount: pages.length },
    });
    // #endregion

    const allChunks = [];
    for (const page of pages) {
      const chunks = chunkPageText(page.url, page.text);
      for (const chunk of chunks) {
        const embedding = await createEmbeddings(chunk.text);
        allChunks.push({ ...chunk, embedding });
      }
    }

    const indexed = await replaceAllChunks(allChunks);
    console.log(`[Sync] SUCCESS: ${indexed} chunks indexed in ChromaDB from ${pages.length} pages.`);
  } catch (err) {
    console.error('[Sync] FAILED:', err.message);
    // #region agent log
    agentLog({
      runId: 'chroma-sync',
      hypothesisId: 'E',
      location: 'syncService.js:runFullSync',
      message: 'Sync failed',
      data: { error: err.message },
    });
    // #endregion
    throw err;
  }
}

module.exports = { runFullSync };
