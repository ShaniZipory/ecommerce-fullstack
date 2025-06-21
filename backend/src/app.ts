import express, { Request, Response } from "express";
import config from './config/config';
const app = express();

app.use(express.json());
app.use()

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });