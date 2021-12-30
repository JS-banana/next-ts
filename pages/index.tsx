import Header from "components/Header"
import User from "components/User"
import Head from "next/head"
import githubApi from "lib/api/github"
import Image from "next/image"

import type { NextPage } from "next"

export async function getStaticProps() {
  const res = await githubApi.getGithubUser()
  return {
    props: {
      user: res,
    },
  }
}

const Home: NextPage<HomeIndexProps> = ({ user }) => {
  return (
    <div>
      <Head>
        <title>小帅不太帅</title>
        <meta name="description" content="小帅不太帅的个人综合门户网站" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen bg-green-50">
        <Header />
        {/*  */}
        <div className="mx-auto mt-6 max-w-4xl max-h-40 px-6 rounded-xl shadow-lg text-gray-500 bg-orange-200 py-3">
          <p>本站为我的个人网站重构版</p>
          <p>
            这里提供快速预览和了解我的相关介绍、技术文章、生活记录、最新文章与相关动态的汇总，作为一级入口使用
          </p>
        </div>

        <User user={user} />
        {/*  */}
        <div className="mx-auto mt-6 max-w-4xl max-h-40 px-6 rounded-xl shadow-lg flex items-center space-x-6 bg-white hover:bg-yellow-50 py-3">
          <div className="flex-shrink-0">
            <Image className="rounded-full" height={96} width={96} src="/images/logo_blog.png" />
          </div>
          <div className="min-h-full space-y-2">
            <div className="text-xl font-medium text-black">小帅の技术博客</div>
            <p>
              <a
                target="_blank"
                className="font-normal text-md text-green-600"
                href="https://serverless-page-bucket-ybyz8f6i-1258454899.cos-website.ap-hongkong.myqcloud.com"
                rel="noreferrer"
              >
                ✅ 点击这里，访问我的技术博客
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
