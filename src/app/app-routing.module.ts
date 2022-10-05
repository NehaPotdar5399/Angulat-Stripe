import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/component/homepage/homepage.component';
import { ProductComponent } from './feature/product/product.component';
// import { PaymentComponent } from './feature/dynamic/payment/payment.component';
import { AuthGuard } from './shared/services/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
  },
  // {
  //   path: 'success',
   
  // component:PaymentComponent,
  
  
    
  // },
  {
    path:'success', loadChildren:()=>import('../app/feature/dynamic/dynamic.module').then((m)=>m.DynamicModule),
    canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
