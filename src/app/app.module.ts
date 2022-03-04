import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarsweatherComponent } from './marsweather/marsweather.component';
import { MarsphotosComponent } from './marsphotos/marsphotos.component';
import { MarsnumbersComponent } from './marsnumbers/marsnumbers.component';
import { SocialGesturesDirective } from './social-gestures.directive';
import { SwiperModule } from 'swiper/angular';
import { SwappingService } from './swapping.service';


@NgModule({
  declarations: [AppComponent, SocialGesturesDirective, MarsweatherComponent, MarsphotosComponent, MarsnumbersComponent ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SwiperModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SwappingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
