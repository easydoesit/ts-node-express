import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), "./.env") });

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + Typescript Server');
})

app.listen(port, () => {
  console.log(`[server]: Server os running at http://localhost:${port}`);
});

