module.exports = {
  apps: [
    {
      name: "server",
      script: "App.js",
      instances: 0,
      exec_mode: "cluster",
      max_memory_restart: "1G",
      autorestart: true,
      timestamp: "YYYY-MM-DD HH:mm Z",
    },
  ],
};
