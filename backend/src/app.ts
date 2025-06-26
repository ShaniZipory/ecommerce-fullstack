import express, { Request, Response } from "express";
import config from './config/config';
import { AppDataSource } from "./data-source";
import { userRouter } from "./routers/userRouter";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.get("/test", (req, res) => {
  res.send('Hello World!')
})
app.use(errorHandler);
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(config.port, () => console.log(`Server started on http://localhost:${config.port}`));
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
