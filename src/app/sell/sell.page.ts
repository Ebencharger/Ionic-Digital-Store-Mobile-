import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { MyserviceService } from '../myservice.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {
  valid="Validate this field!";
  confirmImage=false;
  image=false;
  success=false;
  img: any;
  mStore=[];
  public picture:any="";
  public folder:string;
  server:any;
  constructor( private form:FormBuilder, private route:Router,private camera: Camera, private domSanitize: DomSanitizer, public service:MyserviceService, private nativeStorage:NativeStorage) { }
  forms=this.form.group({productName:["", [Validators.required]], price:["", [Validators.required, Validators.pattern('^[0-9]{1,30}$')]]});
  get productName(){
    return this.forms.get('productName');
  }
  get price(){
    return this.forms.get('price');
  }

  ngOnInit() {
    setInterval(()=>{
      this.server=this.service.server
     }, 1000)
    setInterval(()=>{
      this.mStore=this.service.mStore;
     }, 10)
  }

  handleSubmit(){
    if (this.image==true) {
      this.success=true;
     }else{
       this.confirmImage=true;
     }
   }
   handleSuccess(){
     let {productName, price}=this.forms.value;
     this.mStore[0].client.push({phone:productName, img:this.picture, price:price});
     this.nativeStorage.setItem('store', JSON.stringify(this.mStore))
    this.route.navigate(['/client']);
   }

   handleCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.picture='data:image/jpeg;base64,' + imageData;
      this.image=true;

    }, (err) => {
      // Handle error
    });
  }
  sanatizeBase64Image(image){
    if(image){
      return this.domSanitize.bypassSecurityTrustResourceUrl(image);
    }
    }
    closeServer(){
      this.server=true;
    }
}
