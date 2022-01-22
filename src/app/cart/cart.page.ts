import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
   amount=0;
   cart=[];
   reference = '';
   userEmail="ajayioluwaseunebenezer@gmail.com"
   date=new Date();
   tranDate=`${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`
   success=false;
   mStore=[];
   wrong=false;
  constructor(public service:MyserviceService, private route:Router, private nativeStorage:NativeStorage) { }
   handleCheck(i:any){
    this.service.cart[i].date=this.tranDate;
    this.service.cart[i].status="not paid";
     this.cart.push(this.service.cart[i]);
     this.service.transaction.push(this.service.cart[i]);
     this.service.myCart=this.cart;
     this.amount=this.service.amount + this.service.cart[i].price;
     this.service.amount=this.amount;
     this.service.cart.splice(i, 1); 
   }
   handleRemove(i:any){
     this.service.cart.splice(i, 1);
   }
  ngOnInit() {
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
   this.success=true;
  }

  paymentCancel() {
    this.wrong=true;
  }

  handleSuccess(){
  for (let i = 0; i < this.service.cart.length; i++) {
    this.service.cart[i].status="paid";
  }
  for (let i = 0; i < this.service.transaction.length; i++) {
    this.service.transaction[i].status="paid";
  }
   this.route.navigate(['/home']);
   this.service.amount=0;
   this.service.myCart=[];
  }
  handleError(){
    this.wrong=false;
   this.route.navigate(['/cart']);
  }

}
