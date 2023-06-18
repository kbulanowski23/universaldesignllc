import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LightboxModule } from 'ngx-lightbox';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SuccessFormComponent } from './success-form/success-form.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FrontFacadeComponent } from './front-facade/front-facade.component';
import { InteriorComponent } from './interior/interior.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { OutdoorComponent } from './outdoor/outdoor.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    SuccessFormComponent,
    PortfolioComponent,
    FrontFacadeComponent,
    InteriorComponent,
    KitchenComponent,
    BathroomComponent,
    OutdoorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    LightboxModule,
    MaterialModule,
    RouterModule.forRoot([
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'success-form', component: SuccessFormComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'front-facade', component: FrontFacadeComponent},
      {path: 'interior', component: InteriorComponent},
      {path: 'kitchen', component: KitchenComponent},
      {path: 'bathroom', component: BathroomComponent},
      {path: 'outdoor', component: OutdoorComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
