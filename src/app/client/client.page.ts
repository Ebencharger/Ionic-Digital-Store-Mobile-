import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  menu = false;
  detail=false;
   info=0;
  constructor(public service: MyserviceService) {
    setTimeout(() => {
      this.service.cart = this.service.cart;
    }, 1000);
  }

  ngOnInit() {
  }

  handleInfo(i:any){
    this.detail=true;
    this.info=i;
    }

  handleToggle() {
    this.menu = !this.menu;
  }

  handleCart(i: any) {
    this.service.cart.push(this.service.client[i]);
  }

  handleOkay(){
    this.detail=false;
  }

}
