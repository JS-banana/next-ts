/**
 * @description 导航栏头部
 */
import { NextPage } from "next"

const Header: NextPage = () => {
  return (
    <div className="bg-white">
      <nav className="max-w-6xl mx-auto py-5 flex items-center justify-between">
        <div>logo</div>
        <ul className="flex">
          <li className="mx-3 px-2 py-1 hover:text-green-400 cursor-pointer">首页</li>
          <li className="mx-3 px-2 py-1 hover:text-green-400 cursor-pointer">博客</li>
          <li className="mx-3 px-2 py-1 hover:text-green-400 cursor-pointer">关于</li>
        </ul>
      </nav>
    </div>
  )
}
export default Header
