import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthToggleService } from '../services/auth-toggle.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthToggleService
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      const currentToggle = this.auth.toggleValue.getValue();
      console.log("currentToggle", currentToggle);

      if(currentToggle) {
        if(currentToggle[0] === '') {
          return false;
        } else {
          for(let i=0; i < currentToggle.length; i++) {
            if(currentToggle[i].state === true) {
              if(currentToggle[i].name === route.data.name){
                return true;
              }
            }
          }
        }
      } else {
        return false;
      }
  }
}
