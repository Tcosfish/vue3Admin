/*
 * @Author: tcosfish
 * @Date: 2022-06-07 20:54:31
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-07 21:02:20
 * @FilePath: \vue3admin\src\utils\formatTime.ts
 */

import dayjs from "dayjs";

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
const FUNCTION_ERROR = "Function not create!";

export default function formatTimeUTC(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs(utcString).format(format);
}

export function timestamp(
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) {
  return FUNCTION_ERROR;
}
