import axios, { AxiosRequestConfig } from "axios"

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

// http
const http = async (url: string, params: AxiosRequestConfig["params"]) => {
  try {
    const response = await axios({
      url: url,
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
      method: "GET",
      params,
      timeout: 30000,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return undefined
  }
}

/**
 * github 相关接口
 */
enum GITHUB {
  // 用户信息
  USER = "https://api.github.com/user",
}

class GithubAPI {
  user: string
  token: string | undefined
  constructor() {
    this.user = "JS-banana"
    this.token = GITHUB_TOKEN
  }

  async getGithubUser() {
    const res = await http(GITHUB.USER, { name: this.user })
    console.log("====", res)
    return res
  }
}

export default new GithubAPI()
