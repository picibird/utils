import express from "express";
import shutdown from "./server/shutdown"
const app = express();
const port = 3000;

const server = app.listen(port, () => {});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

shutdown(server);
