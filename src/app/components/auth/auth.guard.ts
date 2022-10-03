import { Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable,map, take } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService, private router:Router) {}

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
    return this.authService.user.pipe(take(1),map(user => {
      const isAuth = !!user; // !! converters values that are true to boolean true || same for false.
      if (isAuth){
        return true
      }
      return this.router.createUrlTree(['/auth']);
    }));
  }
}