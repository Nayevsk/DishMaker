import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs";
import { throwError } from "rxjs";

interface AuthResponseData {
  kind:string;
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn: string;
  localId:string;   
}

@Injectable({providedIn:'root'})

export class AuthService {
  constructor(private http:HttpClient){}

  singUp(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAnYzhPLj0J1598UaTgQ589Hb1uSys0f4M', {
      email: email,
      password: password,
      returnSecureToken: true
    } // AuthResponseData is a interface hint of the POST response to be received
    ).pipe(catchError(errorRes =>{
      let errorMessage = 'An unknown error ocurred!';
      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This e-mail Already Exists!'; 
      }
      return throwError(errorMessage);
    })) 
  }

  loging(email:string, password:string){
    
  }
} 