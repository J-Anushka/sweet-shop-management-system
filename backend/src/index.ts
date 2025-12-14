import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Sweet Shop API is running");
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
