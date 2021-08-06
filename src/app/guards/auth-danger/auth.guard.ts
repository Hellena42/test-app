import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataToggleService } from 'src/app/shared/services/data-toggle.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authDanger: DataToggleService
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      const currentToggle = this.authDanger.dangerValue.getValue();
      
      if(currentToggle) {
        return true;
      } else {
        return false;
      }
  }
}
