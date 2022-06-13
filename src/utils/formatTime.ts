/*
 * @Author: tcosfish
 * @Date: 2022-06-07 20:54:31
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-06-13 13:03:44
 * @FilePath: \vue3admin\src\utils\formatTime.ts
 */

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
const FUNCTION_ERROR = "Function not create!";

export default function formatTimeUTC(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  // return dayjs.utc(utcString).utcOffset(8).format(format);
  return dayjs(utcString).format(format);
}

export function timestamp(
  timestamp: number,
  format: string = DATE_TIME_FORMAT
) {
  return FUNCTION_ERROR;
}
