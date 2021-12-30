/**
 * @description 导航栏头部
 */
import { NextPage } from "next"
import Image from "next/image"

const Header: NextPage = () => {
  return (
    <div className="bg-white">
      <nav className="max-w-6xl mx-auto min-h-[64px] flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/images/logo_a.png" width={40} height={35} alt="logo" />
          <Image src="/images/logo.png" width={40} height={35} alt="logo" />
          <Image src="/images/logo_a.png" width={40} height={35} alt="logo" />
        </div>
        {/* <ul className="flex">
          <li className="mx-3 px-2 py-1 hover:text-green-400 cursor-pointer">首页</li>
          <li className="mx-3 px-2 py-1 hover:text-green-400 cursor-pointer">博客</li>
          <li className="mx-3 px-2 py-1 hover:text-green-400 cursor-pointer">关于</li>
        </ul> */}
      </nav>
    </div>
  )
}
export default Header
