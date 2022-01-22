import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  valid="Validate this field!";
  invalid=false;
  success=false;
  notReset=false;
  seen=false;
  mStore=[];
  constructor( private form:FormBuilder, private route:Router, private nativeStorage:NativeStorage) { }
  forms=this.form.group({email:["", [Validators.required, Validators.email]],password:["", [Validators.required, Validators.pattern('^[A-Za-z0-9]{8,30}$')]], cpassword:["", [Validators.required, Validators.pattern('^[A-Za-z0-9]{8,30}$')]]});
  get email(){
    return this.forms.get('email');
  }
  get password(){
    return this.forms.get('password');
  }
  get cpassword(){
    return this.forms.get('cpassword');
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
   let {email,password, cpassword}=this.forms.value;
   if (password==cpassword) {
    if (this.mStore[0].user!="") {
      for (let i = 0; i < this.mStore[0].user.length; i++) {
        if (email==this.mStore[0].user[i].email) {
          this.seen=true;
          this.mStore[0].user[i].password=password;
          this.nativeStorage.setItem('store', JSON.stringify(this.mStore));
          this.success=true;
          setTimeout(() => {
            this.seen=false;
          }, 10);
        }
        else if (i==this.mStore[0].user.length-1 && this.seen==false) {
          this.notReset=true;
        }
      }
    }else{
      this.notReset=true;
    }
   }else{
    this.invalid=true;
   }
  }
  handleSuccess(){
    this.route.navigate(['/login']);
  }
  handlemySet(){
    this.invalid=false;
    this.notReset=false;
  }
}
