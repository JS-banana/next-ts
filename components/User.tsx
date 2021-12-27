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
        <Image className="rounded-full" height={96} width={96} src="/photo.png" />
      </div>
      <div className="min-h-full space-y-2">
        <div className="text-xl font-medium text-black">{user?.name}</div>
        <p>
          <a className="font-normal text-xs text-green-600" href={user.html_url}>
            我的github主页
          </a>
        </p>
        <p className="text-gray-500">{user?.bio}</p>
      </div>
    </div>
  )
}

export default User
