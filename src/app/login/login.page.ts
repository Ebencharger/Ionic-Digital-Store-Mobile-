import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  valid="Validate this field!";
  mStore=[];
  seen=false;
  constructor(private form:FormBuilder, private route:Router, public service:MyserviceService, private nativeStorage:NativeStorage) {
   }
   forms=this.form.group({email:["ajayioluwaseunebenezer@gmail.com", [Validators.email, Validators.required]], password:["Ebencharger22", [Validators.required]]});
   get email(){
     return this.forms.get('email');
   }
   get password(){
     return this.forms.get('password');
   }
   
  ngOnInit() {
    this.nativeStorage.getItem('store')
    .then(
      data => 
      {
        this.mStore=JSON.parse(data);
        console.log(this.mStore);  
      },
      error => {
        
      }
    );
  }
  handleSubmit(){
    console.log("jdjdjdjd");
    let {email, password}=this.forms.value;
    if (this.mStore[0].user!="") {
      for (let i = 0; i < this.mStore[0].user.length; i++) {
        console.log(email, this.mStore[0].user[i].email);  
        console.log(password, this.mStore[0].user[i].password);  
       if (email==this.mStore[0].user[i].email && password==this.mStore[0].user[i].password) {
        this.seen=true;
        this.route.navigate([`/home/${i}`]);
       }
       else if(i==this.mStore[0].user.length && this.seen==false){
       console.log("error");
       } 
       else{
         console.log("error");
       }
      }
    }
   
  
  }
}
