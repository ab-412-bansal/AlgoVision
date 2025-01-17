// import express from "express"

// // const fetch = require('node-fetch');

// const router = express.Router();



// const clientId = 'c4dcb87699de265367e8bef47690ee81';
// const clientSecret = 'fca559d1286865d1a110a3174411caeeee36c5012c91ee182b674ab82c191f18';

// let dailyAttempts = 20;

// router.post('/compile', async (req, res) => {
//   if (dailyAttempts <= 0) {
//     return res.status(429).json({ error: 'Daily limit reached. Try again tomorrow.' });
//   }

//   const { script, stdin, language, versionIndex } = req.body;

//   try {
//     const response = await fetch('https://api.jdoodle.com/v1/execute', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         clientId,
//         clientSecret,
//         script,
//         stdin,
//         language,
//         versionIndex,
//       }),
//     });

//     const data = await response.json();
//     if (data.statusCode === 200) {
//       dailyAttempts -= 1;
//       return res.json({ output: data.output, remainingAttempts: dailyAttempts });
//     } else {
//       return res.status(500).json({ error: data.error || 'Unknown error occurred' });
//     }
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// export default router;


import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

const clientId = 'c4dcb87699de265367e8bef47690ee81';
const clientSecret = 'fca559d1286865d1a110a3174411caeeee36c5012c91ee182b674ab82c191f18';

// File to store the daily attempts
const attemptsFilePath = path.resolve("./files/dailyAttempts.json");

// Initialize the attempts file if it doesn't exist

const getDailyAttempts = () => {
  const data = JSON.parse(fs.readFileSync(attemptsFilePath, "utf8"));
  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  // Reset attempts if the last update was not today
  if (data.lastUpdated.split("T")[0] !== today) {
    data.attempts = 20;
    data.lastUpdated = new Date().toISOString();
    fs.writeFileSync(attemptsFilePath, JSON.stringify(data));
  }

  return data;
};

const updateDailyAttempts = (attempts) => {
  const data = getDailyAttempts();
  data.attempts = attempts;
  fs.writeFileSync(attemptsFilePath, JSON.stringify(data));
};

router.post('/compile', async (req, res) => {
  const data = getDailyAttempts();

  if (data.attempts <= 0) {
    return res.status(429).json({ error: 'Daily limit reached. Try again tomorrow.' });
  }

  const { script, stdin, language, versionIndex } = req.body;

  try {
    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientId,
        clientSecret,
        script,
        stdin,
        language,
        versionIndex,
      }),
    });

    const result = await response.json();
    if (result.statusCode === 200) {
      const remainingAttempts = data.attempts - 1;
      updateDailyAttempts(remainingAttempts); // Update the attempts in the file
      return res.json({ output: result.output, remainingAttempts });
    } else {
      return res.status(500).json({ error: result.error || 'Unknown error occurred' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get('/attempts', (req, res) => {
    const data = getDailyAttempts();
    res.json({ remainingAttempts: data.attempts });
  });

export default router;
