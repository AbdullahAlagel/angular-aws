

export class User {
  constructor(
    public id: number,
    public username: string,
    // public jobDescription: string,
    public name: string,
    public token: string,
    public expirtionTime: Date,
    public lastLogin: Date,
    // public permissions: string[],
    // public menuItem?: MenuItem[],
    // public roleLevel?: number,
    // public roleName?: string
  ) { }



}