import Parser from "rss-parser"
import dayjs from "../../utils/dayjs"

type CustomFeed = { id: string }
type CustomItem = { published: string; update: string }

const parser = new Parser<CustomFeed, CustomItem>({
  customFields: { feed: ["id"], item: ["published", "update"] },
})

enum MySite {
  blog = "https://js-banana.github.io/blog/atom.xml",
  me = "https://js-banana.github.io/me/atom.xml",
}

const myBlogFeed = async () => {
  const feed = await parser.parseURL(MySite.blog)
  const { title, id: domain, feedUrl, items } = feed

  return {
    title,
    domain,
    feedUrl,
    items: items.slice(0, 5),
  }
}

const myMeFeed = async () => {
  const feed = await parser.parseURL(MySite.me)
  const { title, id: domain, feedUrl, items } = feed

  return {
    title,
    domain,
    feedUrl,
    items: items
      .map(({ published, update, summary, ...rest }) => ({
        published: dayjs(published).format("YYYY-MM-DD"),
        update: dayjs(update).format("YYYY-MM-DD HH:mm"),
        ...rest,
      }))
      .slice(0, 5),
  }
}

// myMeFeed().then(console.log)

export default { myBlogFeed, myMeFeed }
