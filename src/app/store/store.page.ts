import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  info=0;
  detail=false;
  constructor(public service:MyserviceService, private route:Router, private route2:ActivatedRoute) {
    setTimeout(() => {
      this.service.cart=this.service.cart;
    }, 1000);
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
    this.service.cart.push(this.store[this.myIndex].model[i]);
    }
  ngOnInit() {
   let id=this.route2.snapshot.paramMap.get('index');
   this.storeIndex=Number(id);
   this.store=this.service.store[this.storeIndex];
  }

}
