import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataToggleService } from 'src/app/shared/services/data-toggle.service';

@Injectable({
  providedIn: 'root'
})
export class AuthBlueGuard implements CanActivate {
  constructor(private authBlue: DataToggleService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      const currentToggle = this.authBlue.blueValue.getValue();
      
      if(currentToggle) {
        return true;
      } else {
        return false;
      }
  }
  
}
