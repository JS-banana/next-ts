module.exports = {
  apps: [
    {
      name: "next-website-app",
      script: "deploy.js",
      exec_mode: "cluster",
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
}
