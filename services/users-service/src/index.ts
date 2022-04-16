import express from "express";
import rootRouter from "./routes/";

(async () => {
  const isProduction = process.env.NODE_ENV === "production";

  //Trying to load .env if in development
  if(!isProduction) {
    try {
      const dotenv = await import("dotenv");
      dotenv.config();
    } catch (e) {
      //Ignore
    }
  }

  const PORT = process.env.APP_PORT || 3000;

  const app = express();

  app.use(rootRouter);

  app.listen(PORT, () => {
    console.log("Application successfully started on port 3000");
  });
})().then(() => {});