import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  valid="Validate this field!";
  success=false;
  mStore=[];
  seen=false;
  exist=false;
  constructor(private form:FormBuilder, private route:Router, private nativeStorage:NativeStorage, public service:MyserviceService) { }
  forms=this.form.group({name:["",[Validators.required]], email:["", [Validators.required, Validators.email]], phone:["", [Validators.required, Validators.pattern('^[0-9]{11}$')]], location:["", [Validators.required]], password:["", [Validators.required, Validators.pattern('^[A-Za-z0-9]{8,30}$')]]});
  get name(){
    return this.forms.get('name');
  }
  get email(){
    return this.forms.get('email');
  }
  get phone(){
    return this.forms.get('phone');
  }
  get location(){
    return this.forms.get('location');
  }
  get password(){
    return this.forms.get('password');
  }
  ngOnInit() {
    this.nativeStorage.getItem('store')
    .then(
      data =>{
        this.mStore=JSON.parse(data);
      } ,
      error => {
        this.mStore=this.mStore,
        error
      }
     
    );
  }
  handleSubmit(){
    let {name, email, phone, password, location}=this.forms.value;
    if (this.mStore[0].user!="") {
      for (let i = 0; i < this.mStore[0].user.length; i++) {
        if (email==this.mStore[0].user[i].email) {
           this.seen=true;
           this.exist=true;
          setTimeout(() => {
            this.seen=false;
          }, 10);
        }
        else if (i==this.mStore[0].user.length-1 && this.seen==false) {
          this.mStore[0].user.push({name:name, email:email,phone:phone, password:password, location:location, cart:[], myCart:[], amount:0, transaction:[]});
          this.nativeStorage.setItem('store', JSON.stringify(this.mStore))
        .then(
          () => console.log(this.mStore[0])
          ,
          error => console.error('Error storing item', error)
        );
          this.success=true;
        }
      }
    }else{
      this.mStore[0].user.push({name:name, email:email,phone:phone, password:password, location:location, cart:[], myCart:[], amount:0, transaction:[]});
          this.nativeStorage.setItem('store', JSON.stringify(this.mStore))
        .then(
          () => console.log(this.mStore[0])
          ,
          error => console.error('Error storing item', error)
        );
          this.success=true;
    }
      
  }
  handleSuccess(){
    this.route.navigate(['/login']);
  }
}
