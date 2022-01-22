import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Platform } from '@ionic/angular';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  valid = "Validate this field!";
  mStore = [];
  seen = false;
  emailError = false;
  passwordError = false;
  constructor(private platform: Platform, private form: FormBuilder, private route: Router, public service: MyserviceService, private nativeStorage: NativeStorage) {
  }
  forms = this.form.group({ email: ["", [Validators.email, Validators.required]], password: ["", [Validators.required]] });
  get email() {
    return this.forms.get('email');
  }
  get password() {
    return this.forms.get('password');
  }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(10000, () => {
      navigator['app'].exitApp();
    });
    this.nativeStorage.getItem('store')
      .then(
        data => {
          this.mStore = JSON.parse(data);
          console.log(this.mStore);
        },
        error => {
         this.mStore=this.service.mStore;
        }
      );
  }
  handleSubmit() {
    let { email, password } = this.forms.value;
      for (let i = 0; i < this.mStore[0].user.length; i++) {
        console.log(email, this.mStore[0].user[i].email);
        console.log(password, this.mStore[0].user[i].password);
        if (email == this.mStore[0].user[i].email && password == this.mStore[0].user[i].password) {
          this.seen = true;
          this.route.navigate([`/home/${i}`]);
          setTimeout(() => {
            this.seen=false;
          }, 1000);
        }
        else if (email == this.mStore[0].user[i].email && password != this.mStore[0].user[i].password) {
          this.passwordError = true;
        }
        else if (email != this.mStore[0].user[i].email && password == this.mStore[0].user[i].password) {
          this.emailError = true;
        }
        // else if (email != this.mStore[0].user[i].email && password != this.mStore[0].user[i].password) {
       
        // }
        else if (i == this.mStore[0].user.length-1 && this.seen == false) {
          this.emailError = true;
          this.passwordError = true;
        }
      }
    if (this.mStore[0].user.length < 0 || this.mStore[0].user=="") {
      this.emailError = true;
      this.passwordError = true;
    }
  }
  handleInput() {
    this.emailError = false;
  }
  handleInput2() {
    this.passwordError = false;
  }
}
