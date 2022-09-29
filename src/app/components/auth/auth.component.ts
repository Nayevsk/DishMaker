import { Component, ComponentFactoryResolver } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { AuthResponseData, AuthService } from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'

})

export class AuthComponent {
isLoginMode = true;
isLoading = false;
error: string = null;

  constructor(private auth:AuthService, private router:Router) {}

  onSwitchMode () {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form:NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email
    const password = form.value.password
    let authOps:Observable<AuthResponseData> // Created to avoid repetiton of code on If statement.
    this.isLoading = true

    if (this.isLoginMode) {
      authOps = this.auth.login(email,password);
    } else{
      authOps = this.auth.singUp(email,password);        
      form.reset(); 
    }
    
    authOps.subscribe(resData => {
      console.log(resData);
      this.isLoading = false
      this.router.navigate(['/recipes']);
    }, 
    errorMessage => {
      console.log (errorMessage);  // the logic of this error message is in auth service through a pipe.
      this.error = errorMessage
      this.isLoading = false;        
    }
    );
  }
}