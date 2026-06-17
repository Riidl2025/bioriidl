// A simple function to calculate similarity
function cosineSimilarity(vecA, vecB) {
  const dotProduct = vecA.reduce((sum, a, i) => sum + a * vecB[i], 0);
  const magA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const magB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return dotProduct / (magA * magB);
}

// Update your getRelevantChunks to loop through vectors.json
function getRelevantChunks(queryEmbedding, vectorData, limit = 3) {
  return vectorData
    .map(item => ({
      text: item.text,      // The LLM needs this to answer
      url: item.url,        // The LLM needs this to provide the link
      score: cosineSimilarity(queryEmbedding, item.embedding)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
module.exports = { getRelevantChunks };