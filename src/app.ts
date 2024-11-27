import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';

dotenv.config({ path: path.join(process.cwd(), "./.env") });

const app:Express = express();

const port = process.env.PORT;
const jsonParser = bodyParser.json();

app.get('/', jsonParser, (req:Request, res:Response) => {
  res.send('Express + Typescript Server');

})

app.listen(port, () => {
  console.log(`[server]: Server os running at http://localhost:${port}`);
});

