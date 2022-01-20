// 需要先build，有.next目录

const { nextStart } = require("next/dist/cli/next-start")
nextStart(["--port", "9000", "--hostname", "0.0.0.0"])
