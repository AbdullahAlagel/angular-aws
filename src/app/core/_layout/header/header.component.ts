import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { User } from 'src/app/shared/modules/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  items: MenuItem[] = [];
  item!: MenuItem;
  profileInfo: MenuItem[] | undefined;
  nestitem!: MenuItem;
  currentUser!: User;
  name: string | undefined;
  language: MenuItem[] | undefined;

  constructor(private authenticationService:AuthenticationService,private router: Router,
    private translateService:TranslateService) {
    this.authenticationService.user.subscribe(x=> this.currentUser = x)
    console.log(this.currentUser)
  }

  getUserName() {
    this.name = this.currentUser.name;

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  } 
  
  

  
  ngOnInit(): void {

    // this.items.push({ label: 'main.menu', icon: 'pi pi-home', expanded: false, routerLink: ['./main'] })
    this.authenticationService.userInfo.menuItem.map(o => {
        this.item = {
            label: this.translateService.instant(o.pageTage),
            icon: this.translateService.instant('icon.'+o.pageTage)
            , expanded: false,
            items: []
          }
          o.items.filter(o => o.url).map(m => {
            this.nestitem = { label: this.translateService.instant(m.permissionName!), icon: this.translateService.instant('icon.'+m.permissionName!), expanded: false, routerLink: m.url }
            this.item.items?.push(this.nestitem)
          })
          if (this.item.items && this.item.items.length != 0)
            this.items.push(this.item);
    });
    this.getUserName();

    
    
    this.language=[
      {
        label: 'EN',
        icon:'bi bi-alipay',
        command: () => {
          this.changeLang('en');
      }
      },
      {
        label: 'AR',
        icon:'bi bi-badge-ar',
        command: () => {
          this.changeLang('ar');
      }
      }
    ]

//     this.items = [
//       {
//         label: 'Home',
//         icon: 'pi pi-home',
//         routerLink:'/main',
//         // style:['color:red']
//       },
//       {
//           label: 'Student Menu',
//           icon: 'pi pi-user-minus',
//           items: [
//               {
//                   label: 'Add New Student',
//                   icon: 'pi pi-user-plus',
//                   routerLink : '/student/add-edit-student'
//                   // items: [
//                   //     {
//                   //         label: 'Bookmark',
//                   //         icon: 'pi pi-fw pi-bookmark'
//                   //     },
//                   //     {
//                   //         label: 'Video',
//                   //         icon: 'pi pi-fw pi-video'
//                   //     }
//                   // ]
//               },
//               {
//                   label: 'Find All Student',
//                   icon: 'pi pi-users',
//                   routerLink:'/student/find-students'
//               },
//               {
//                   separator: true
//               },
//               {
//                   label: 'Export',
//                   icon: 'pi pi-fw pi-external-link'
//               }
//           ]
//       },
//       {
//           label: 'Courses',
//           icon: 'bi bi-book-half',
//           items: [
//               {
//                   label: 'Add New Course',
//                   icon: 'bi bi-journal-plus',
//                   routerLink:'/course'
//               },
//               {
//                   label: 'Find All Courses',
//                   icon: 'bi bi-book',
//                   routerLink:'/find-courses'
//               },
//               {
//                   label: 'Center',
//                   icon: 'pi pi-fw pi-align-center'
//               },
//               {
//                   label: 'Justify',
//                   icon: 'pi pi-fw pi-align-justify'
//               }
//           ]
//       },
//       {
//           label: 'Users',
//           icon: 'pi pi-fw pi-user',
//           items: [
//               {
//                   label: 'Add New User',
//                   icon: 'bi bi-person-add',
//                   routerLink:'/admin-user'
//               },
//               {
//                   label: 'Find All Users',
//                   icon: 'bi bi-people-fill',
//                   routerLink:'/list-users'
//               },
//               {
//                   label: 'Search',
//                   icon: 'pi pi-fw pi-users',
//                   items: [
//                       {
//                           label: 'Filter',
//                           icon: 'pi pi-fw pi-filter',
//                           items: [
//                               {
//                                   label: 'Print',
//                                   icon: 'pi pi-fw pi-print'
//                               }
//                           ]
//                       },
//                       {
//                           icon: 'pi pi-fw pi-bars',
//                           label: 'List'
//                       }
//                   ]
//               }
//           ]
//       },
//       {
//           label: 'Events',
//           icon: 'pi pi-fw pi-calendar',
//           items: [
//               {
//                   label: 'Edit',
//                   icon: 'pi pi-fw pi-pencil',
//                   items: [
//                       {
//                           label: 'Save',
//                           icon: 'pi pi-fw pi-calendar-plus'
//                       },
//                       {
//                           label: 'Delete',
//                           icon: 'pi pi-fw pi-calendar-minus'
//                       }
//                   ]
//               },
//               {
//                   label: 'Archieve',
//                   icon: 'pi pi-fw pi-calendar-times',
//                   items: [
//                       {
//                           label: 'Remove',
//                           icon: 'pi pi-fw pi-calendar-minus'
//                       }
//                   ]
//               }
//           ]
//       },
//       {
//           label: 'Notifications',
//           icon: "bi bi-bell"
//       }
//   ];

  this.profileInfo = [
    {
      label: 'Edit Profile',
      icon: 'pi pi-home',
      routerLink:'/main',
      styleClass:'color:red'
    },]
  }
 
  changeLang(lang:string){
    this.translateService.use(lang);
    sessionStorage.setItem('lang',lang);
    window.location.reload();
  }
 
}
