export interface LoginInfoOutput {
    id: number,
    username: string,
    // jobDescription: string,
    name: string,
    token: string,
    lastLogin: string,
    expirtionTime: string,
    // permissions: string[]
    menuItem?: MenuItem[];
    // roleLevel: number
    // roleName: string
  }
  export interface MenuItem {
    pageTage: string,
    items: Items[]
  
  }
  export interface Items {
    pageOrder?: number,
    pageTag?: string,
    permissionName?: string,
    permissionTag?: string,
    url?: string
  }
  