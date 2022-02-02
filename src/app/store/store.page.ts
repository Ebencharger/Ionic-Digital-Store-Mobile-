import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  menu=false;
  storeIndex=0;
  myIndex=0;
  store=[];
  mStore=[];
  info=0;
  detail=false;
  constructor(public service:MyserviceService, private route:Router, private route2:ActivatedRoute, private nativeStorage:NativeStorage) {
   }
  handleToggle(){
    this.menu=!this.menu;
    }

    handleRoute(i:any){
     this.route.navigate([`/store/${i}`]);
    }
    handleProduct(i:any){
     console.log(i);
     this.myIndex=i;
    }
    handleInfo(i:any){
    this.detail=true;
    this.info=i;
    }
    handleOkay(){
      this.detail=false;
    }
    handleCart(i:any){
    this.mStore[0].user[this.service.id].cart.push(this.store[this.myIndex].model[i]);
     this.nativeStorage.setItem('store', JSON.stringify(this.mStore))
    }
  ngOnInit() {
   let id=this.route2.snapshot.paramMap.get('index');
   this.storeIndex=Number(id);
   this.store=this.service.store[this.storeIndex];
   setInterval(()=>{
    this.mStore=this.service.mStore;
    this.service.cart=this.mStore[0].user[this.service.id].cart;
   }, 10)
  }

}
