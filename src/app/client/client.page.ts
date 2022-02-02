import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  menu = false;
  detail=false;
  mStore=[];
   info=0;
  constructor(public service: MyserviceService, private nativeStorage:NativeStorage) {
    // setTimeout(() => {
    //   this.service.cart = this.service.cart;
    // }, 1000);
  }

  ngOnInit() {
    setInterval(()=>{
      this.mStore=this.service.mStore;
      this.service.client=this.mStore[0].client;
     }, 10)
  }

  handleInfo(i:any){
    this.detail=true;
    this.info=i;
    }

  handleToggle() {
    this.menu = !this.menu;
  }

  handleCart(i: any) {
    this.mStore[0].user[this.service.id].cart.push(this.mStore[0].client[i]);
    this.nativeStorage.setItem('store', JSON.stringify(this.mStore))
  }

  handleOkay(){
    this.detail=false;
  }

}
