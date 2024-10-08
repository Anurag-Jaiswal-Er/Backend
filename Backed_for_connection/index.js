import express from "express";
import cors from "cors";
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(cors());
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "first jokes",
      content: "this is the first jokes",
    },
    {
      id: 2,
      title: "second jokes",
      content: "this is the second jokes",
    },
    {
      id: 3,
      title: "third jokes",
      content: "this is the third jokes",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
