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
   userEmail=this.service.email;
   date=new Date();
   server:any;
   tranDate=`${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`
   success=false;
   mStore=[];
   wrong=false;
  constructor(public service:MyserviceService, private route:Router, private nativeStorage:NativeStorage) { }
   handleCheck(i:any){
    this.mStore[0].user[this.service.id].cart[i].date=this.tranDate;
    this.mStore[0].user[this.service.id].cart[i].status="not paid";
    this.cart.push(this.service.cart[i]);
    this.mStore[0].user[this.service.id].transaction.push(this.service.cart[i]);
    this.mStore[0].user[this.service.id].myCart.push(this.service.cart[i]);
    this.amount= this.amount +  Number( this.mStore[0].user[this.service.id].myCart[i].price);
    this.mStore[0].user[this.service.id].amount=this.amount;
     this.mStore[0].user[this.service.id].cart.splice(i, 1); 
    this.nativeStorage.setItem('store', JSON.stringify(this.mStore))
   }
   handleRemove(i:any){
    this.mStore[0].user[this.service.id].cart.splice(i, 1);
    this.mStore[0].user[this.service.id].transaction.splice(i, 1);
    this.nativeStorage.setItem('store', JSON.stringify(this.mStore))
   }
  ngOnInit() {
    setInterval(()=>{
      this.server=this.service.server;
     }, 1000)
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    setInterval(()=>{
      this.mStore=this.service.mStore;
      this.service.cart=this.mStore[0].user[this.service.id].cart;
      this.service.myCart=this.mStore[0].user[this.service.id].myCart;
      this.service.amount=this.mStore[0].user[this.service.id].amount;
      this.service.transaction=this.mStore[0].user[this.service.id].transaction;
      this.amount=this.service.amount;
     }, 10)
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
    this.mStore[0].user[this.service.id].cart[i].status="paid";
    this.nativeStorage.setItem('store', JSON.stringify(this.mStore))
  }
  for (let i = 0; i < this.service.transaction.length; i++) {
    this.mStore[0].user[this.service.id].transaction[i].status="paid";
    this.nativeStorage.setItem('store', JSON.stringify(this.mStore))

  }
   this.route.navigate(['/home']);
   this.mStore[0].user[this.service.id].amount=0;
   this.mStore[0].user[this.service.id].myCart=[];
   this.nativeStorage.setItem('store', JSON.stringify(this.mStore))
  }
  handleError(){
    this.wrong=false;
   this.route.navigate(['/cart']);
  }
  closeServer(){
    this.server=true;
  }
}
