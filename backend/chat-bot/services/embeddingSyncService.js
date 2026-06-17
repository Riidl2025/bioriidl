const fs = require('fs');
const path = require('path');
const { createEmbeddings } = require('./embeddingService');

async function generateEmbeddings() {
  console.log("Processing and Chunking text...");
  const knowledgePath = path.join(__dirname, '../data/knowledge_base.json');
  const rawData = JSON.parse(fs.readFileSync(knowledgePath, 'utf8'));

  // Split by sentence (or double newline) to keep context together
  const chunks = rawData.content.split(/\n\n+/).filter(c => c.length > 50);

  const processedData = [];
  for (const chunk of chunks) {
    // Generate embedding for each logical block
    const embedding = await createEmbeddings(chunk);
    processedData.push({ text: chunk, embedding });
  }

  const vectorPath = path.join(__dirname, '../data/vectors.json');
  fs.writeFileSync(vectorPath, JSON.stringify(processedData, null, 2));
  console.log(`Embeddings generated for ${processedData.length} segments.`);
}