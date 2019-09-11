import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './home-module/comp/nav-bar/nav-bar.component';
import { FooterComponent } from './home-module/comp/footer/footer.component';
import { BodyComponent } from './home-module/comp/body/body.component';
import { HeaderComponent } from './home-module/comp/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
