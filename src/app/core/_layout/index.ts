import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

export const layout: any[] = [
     HeaderComponent, FooterComponent,ContentComponent
];

export * from './footer/footer.component';
export * from './header/header.component';
export * from './content/content.component';