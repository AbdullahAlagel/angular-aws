import { Component, OnInit } from '@angular/core';
import { NavigationEnd, ResolveStart, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AuthenticationService } from './core/services/authentication.service';
import { filter, map } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-aws';
  public loading: boolean = true;

  lang: string = 'en';

  constructor(
    private router: Router,
    primengConfig: PrimeNGConfig,
    private authenticationService: AuthenticationService,
    translate: TranslateService
  ) {
    primengConfig.ripple = true;
    // primengConfig.setTranslation(util.locale);
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
    this.lang = sessionStorage.getItem('lang') || 'en';
    translate.use(this.lang);
  }

  ngOnInit() {
    this.authenticationService.autoLogin();

    this.router.events
      .pipe(
        filter((e) => e instanceof ResolveStart || e instanceof NavigationEnd),
        map((e) => e instanceof ResolveStart)
      )
      .subscribe((e) => (this.loading = e));
    this.loading = false;
  }
}
