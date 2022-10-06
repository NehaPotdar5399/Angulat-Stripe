import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './core/component/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './feature/product/product.component';
import { ProductDetailsComponent } from './feature/product-details/product-details.component';
import {StripeModule} from 'stripe-angular';
import { PaymentComponent } from './feature/dynamic/payment/payment.component';
import { AuthGuard } from './shared/services/guards/auth.guard';
import { NgxStripeModule } from 'ngx-stripe';
import { NavbarComponent } from './shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductComponent,
    ProductDetailsComponent,
    PaymentComponent,
    NavbarComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStripeModule.forRoot("pk_test_51Leen4SHmDLVBwLpwcVyj1CsQe4Vdvdt9ivQYPohdyHbn1MKwtLLyEgZ3zRCp9nRizLED5lCWe1BA3GvMjf4kuvf00SA5cS4KA")
      ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
