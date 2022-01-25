import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)

dayjs.tz.setDefault("Asia/Shanghai")

const WEEKS: { [key: number]: string } = {
  1: "星期一",
  2: "星期二",
  3: "星期三",
  4: "星期四",
  5: "星期五",
  6: "星期六",
  0: "星期日",
}

export const weekToday = () => {
  const week = dayjs().get("days")
  return WEEKS[week]
}

export default dayjs
