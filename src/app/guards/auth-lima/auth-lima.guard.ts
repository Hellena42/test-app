import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataToggleService } from 'src/app/shared/services/data-toggle.service';


@Injectable({
  providedIn: 'root'
})
export class AuthLimaGuard implements CanActivate {

  constructor(private authLima: DataToggleService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      const currentToggle = this.authLima.limaValue.getValue();
      
      if(currentToggle) {
        return true;
      } else {
        return false;
      }
  }
  
}
