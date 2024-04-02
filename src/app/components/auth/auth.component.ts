import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, authResponseData } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isWaitingRespone:boolean = false
  isLogin:boolean = true
  errorMessage: string


  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  
  onSwitchLogin(){
    this.isLogin = !this.isLogin
  }
onSubmit(authform:NgForm){
  this.isWaitingRespone = true
  let authObs:Observable<authResponseData>
  if (authform.invalid){
    return
  }
  else{
  const email = authform.value.email
  const password = authform.value.password
  if (this.isLogin){
    authObs = this.authService.login(email,password)
  }
  else{
    authObs = this.authService.sighUp(email,password)
  }
  
  authObs.subscribe(resdata => {
    this.isWaitingRespone =false;
    this.errorMessage =''
    console.log(resdata)
    this.router.navigate(['/recipes'])

  },
    errorMessage => {
      this.isWaitingRespone = false ;
      this.errorMessage =errorMessage
      console.log(errorMessage)
      
    }
  )}
  }
  

}


