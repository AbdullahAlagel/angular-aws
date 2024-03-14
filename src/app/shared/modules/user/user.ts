// import { MenuItem } from "primeng/api";

import { MenuItem } from "src/app/core/types/LoginInfoOutput";


export class User {
  constructor(
    public id: number,
    public username: string,
    public name: string,
    public token: string,
    public expirtionTime: Date,
    public lastLogin: Date,
    public menuItem: MenuItem[]
  ) { }



}