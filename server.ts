import express from "express";
import path from "path";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.use((_req: Express.Request, res: any, _next: () => void) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
