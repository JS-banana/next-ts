# site-next-ts

next使用react技术栈，主要围绕网站建设作为底层框架使用，因此，性能优化和SEO是首要考虑因素，而next作为其中的佼佼者，各方面考虑和设计都完美符合要求，国内外也有很多很多的公司在使用，且官方也提供了超级丰富的模板示例，我们完全不用担心技术和兼容问题，只需要找到符合我们自身需求的即可，然后可以快速上手投入开发。

> 对于antd这种后台类比较重的UI框架应该直接舍弃，适合场景应该也不多

## 技术方案

应该主要是UI方面的开发和建设了，界面样式和动效需要重点考虑，部分模块考虑走API接口的形式，功能主要集中于query查询数据方面，相对简单

- [ ] TypeScript支持
- [ ] Tailwindcss支持

## 开发

```js
{
  "scripts": {
    "dev": "next", // 开发模式
    "build": "next build", // 构建
    "start": "next start" // 生产模式下启动，并生成一个服务
  }
}
```

## 模式

主要分为服务端渲染（SSR）和静态渲染（SSR）

### SSR

是在服务端有一个启动的服务，当前端请求路由时，在服务端完成数据和页面渲染再返回给浏览器

### SSG

不用在服务端多启动一个服务器，在构建的时候就已经完成数据的加载和编译，已生成相应的html页面

## next.config.js

```js
// https://www.nextjs.cn/docs/api-reference/next.config.js/introduction
const nextConfig = {
    /** 基础路径 */
    basePath: '', 
    /** 输出目录 */
    distDir: '', 
    /** 压缩 */
    compress: false, 
    /** 为静态资源添加路径前缀 */
    assetPrefix: isProd ? 'https://cdn.xx.com' : '',
    /** 图片 */
    images: {
        domains: ['assets.acme.com'],
        // ...
    },
    /** 环境变量 */
    env: {
        customKey: 'my-value', // process.env.customKey
    },
    /** 忽略eslint */
    eslint: {
        ignoreDuringBuilds: true
    },
    /** 忽略ts */
    typescript: {
        ignoreBuildErrors: true
    },
    /** 运行时配置 */
    // 默认使用 pages约定式路由，支持手动配置
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        //
        return {
            '/about': { page: '/about' }
        }
    },
    /** 运行时配置 */
    // import getConfig from 'next/config'
    // const { publicRuntimeConfig } = getConfig()
    serverRuntimeConfig: { // 只在服务端
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET,
    },
    publicRuntimeConfig: { // 服务端、客户端都可以
        staticFolder: '/static',
    },
    /** 自定义webpack配置 */
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        return config
    },
    /** 重写 */
    async rewrites() {
      return [
        {
          source: "/about",
          destination: "/",
        },
      ];
    },
    /** 重定向 */
    async redirects() {},
};
```
