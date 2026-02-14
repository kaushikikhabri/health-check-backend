const express = require("express");
const app = express();

const port = process.env.PORT || 5000;

/*
LIVENESS CHECK
Used by monitoring tools like UptimeRobot
*/
app.get("/health/live", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "backend",
    check: "liveness",
    pid: process.pid,
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
