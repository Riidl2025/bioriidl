// Standalone chat server (optional). The chat API is also mounted in ../index.js.

require('dotenv').config({ path: require('path').join(__dirname, '.env') });

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });



const express = require('express');

const cors = require('cors');

const app = express();

const { runFullSync } = require('./services/syncService');



app.use(cors());

app.use(express.json());

app.use('/api', require('./routes/chatRoutes'));



const PORT = process.env.CHAT_PORT || 5000;



app.listen(PORT, async () => {

  console.log(`Chat server online on port ${PORT}`);



  runFullSync()

    .then(() => console.log('Initial full sync (scrape + ChromaDB) complete'))

    .catch((err) => console.error('Initial full sync failed:', err.message));



  setInterval(() => {

    runFullSync().catch((err) =>

      console.error('Scheduled full sync failed:', err.message)

    );

  }, 3600000);

});

