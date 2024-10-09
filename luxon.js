import { DateTime } from "luxon";

const hour = 10; // 指定的小时
const minute = 5; // 指定的分钟
const timeZone = 'America/New_York'; // 指定的时区

// 使用 Luxon 创建这个指定时区的时间对象
const tmp = DateTime.now();
console.log(tmp);
const timeInSpecificZone = DateTime.now()
  .setZone(timeZone) // 设置为指定时区
  .set({ hour: hour, minute: minute, second: 0 }); // 设置为指定的小时和分钟

// 将这个时间转换为 UTC 时间
const timeInUtc = timeInSpecificZone.toUTC();

// 获取 UTC 的小时和分钟
const utcHours = timeInUtc.hour;
const utcMinutes = timeInUtc.minute;

// 输出转换后的 UTC 时间
console.log(`转换为UTC的时间：${utcHours}小时 ${utcMinutes}分钟`);

// 或者格式化输出
const utcTimeString = timeInUtc.toFormat('HH:mm');
console.log(`转换为UTC的时间（格式化）：${utcTimeString}`);