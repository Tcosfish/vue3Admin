/*
 * @Author: tcosfish
 * @Date: 2022-05-09 23:30:05
 * @LastEditors: tcosfish
 * @LastEditTime: 2022-05-09 23:58:22
 * @FilePath: \vue3admin\src\components\MyTable\MyTable_interface.ts
 */

interface IFakerDateItem {
  cid: number;
  net_name: string;
  name: string;
  login_state: boolean;
  phone: number;
  login_time: string;
}

interface IFakerDate {
  page: number;
  faker_data: IFakerDateItem[];
}

export { IFakerDate };
