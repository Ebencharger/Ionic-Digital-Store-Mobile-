import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private nativeStorage: NativeStorage, public service: MyserviceService) {
    
  }

  ngOnInit() {
    // this.nativeStorage.remove('store');
  }
}

