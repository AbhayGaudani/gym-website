import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hii there");
});

app.listen(PORT, () => {
  console.log(`server is listening to http://localhost:${PORT}`);
});
