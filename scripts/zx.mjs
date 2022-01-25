#!/usr/bin/env zx
import { $ } from "zx"

const name = await $`cat package.json | grep name`
await $`echo ${name}`

await Promise.all([$`sleep 1; echo 3`, $`sleep 2; echo 2`, $`sleep 3; echo 1`])
let tName = "google/zx"
await $`echo '/hello/${tName}'`
