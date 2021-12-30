/**
 * @description 用户信息
 */

import { NextPage } from "next"
import Image from "next/image"

interface UserProps {
  user: HomeUserProps
}

const User: NextPage<UserProps> = ({ user }) => {
  return (
    <div className="mx-auto mt-6 max-w-4xl max-h-40 px-6 rounded-xl shadow-lg flex items-center space-x-6 bg-white hover:bg-yellow-50 py-3">
      <div className="flex-shrink-0">
        <Image className="rounded-full" height={96} width={96} src="/images/photo.png" />
      </div>
      <div className="min-h-full space-y-2">
        <div className="text-xl font-medium text-black">{user?.name}</div>
        <p className="text-gray-500">{user?.bio}</p>
        <p>
          <a
            className="font-normal text-md text-green-600"
            target="_blank"
            href={user?.html_url}
            rel="noreferrer"
          >
            ✅ 点击这里，访问我的github主页
          </a>
        </p>
      </div>
    </div>
  )
}

export default User
