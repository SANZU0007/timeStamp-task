const express = require("express");
const Fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "timeStamp");

const app = express();
//app.use(express.json())

console.log(dirPath);

app.get("/timestamp", (req, res) => {
  let date = new Date();
  const timestampDate = `Last update  ${date.toUTCString().slice(0, -3)}`;
  Fs.writeFileSync(`${dirPath}/current-date-time.txt`, timestampDate, (err) => {
    if (err) {
      res.send({ message: "error writing timestamp" });
    }
  });
  res.sendFile(path.join(dirPath, "current-date-time.txt"));
});
