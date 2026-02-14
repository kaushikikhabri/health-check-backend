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

// TEMP: Kill endpoint for testing UptimeRobot alert
app.get("/kill", (req, res) => {
  res.send("Shutting down Node process...");
  console.log("Node process killed via /kill endpoint!");
  process.exit(1); // stops the server immediately
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
