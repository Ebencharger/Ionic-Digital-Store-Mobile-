import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartPageRoutingModule } from './cart-routing.module';
import { CartPage } from './cart.page';
import { Angular4PaystackModule } from 'angular4-paystack';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule, Angular4PaystackModule.forRoot('pk_test_b151276bd6786f5c094f1c35d7ee0008f073fb2d'),
  ],
  declarations: [CartPage]
})
export class CartPageModule {}
