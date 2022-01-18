import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  valid="Validate this field!";
  invalid=false;
  success=false;
  constructor( private form:FormBuilder, private route:Router) { }
  forms=this.form.group({password:["", [Validators.required, Validators.pattern('^[A-Za-z0-9]{8,30}$')]], cpassword:["", [Validators.required, Validators.pattern('^[A-Za-z0-9]{8,30}$')]]});
  get password(){
    return this.forms.get('password');
  }
  get cpassword(){
    return this.forms.get('cpassword');
  }
  ngOnInit() {
  }
  handleSubmit(){
   let {password, cpassword}=this.forms.value;
   if (password==cpassword) {
    this.success=true;
   }else{
    this.invalid=true;
   }
  }
  handleSuccess(){
    this.route.navigate(['/login']);
  }
  handlemySet(){
    this.invalid=false;
  }
}
