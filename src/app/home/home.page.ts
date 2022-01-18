import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menu = false;
  mStore = [];
  handleToggle() {
    this.menu = !this.menu;
  }
  constructor(private route: Router, public service: MyserviceService, private route2: ActivatedRoute, private nativeStorage: NativeStorage) {
  }

  ngOnInit() {
    let id = this.route2.snapshot.paramMap.get('index');
    this.service.id=Number(id);
    setInterval(()=>{
      this.nativeStorage.getItem('store')
      .then(
        data => {
          this.mStore=JSON.parse(data);
          this.mStore[0].user[this.service.id].cart=this.service.cart;
          this.mStore[0].client=this.service.client;
          this.mStore[0].user[this.service.id].amount=this.service.amount;
          this.mStore[0].user[this.service.id].myCart=this.service.myCart;
          this.mStore[0].user[this.service.id].transaction=this.service.transaction;
          this.nativeStorage.setItem('store', JSON.stringify(this.mStore));
          setTimeout(() => {
            this.service.cart=this.mStore[0].user[this.service.id].cart;
            this.service.client=this.mStore[0].client;
            this.service.amount=this.mStore[0].user[this.service.id].amount;
            this.service.myCart=this.mStore[0].user[this.service.id].myCart;
            this.service.transaction=this.mStore[0].user[this.service.id].transaction;
          }, 10);
          
        },
        error => console.error(error)
      );
    }, 1000)
   }
}
