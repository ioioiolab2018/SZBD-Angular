import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (localStorage.getItem('authentication')) {
            if (JSON.parse(localStorage.getItem('authentication')).role === 'STUDENT') {
                this.router.navigate(['/student'], {
                    queryParams: { returnUrl: state.url }
                });
                return false;
            }
            this.router.navigate(['/employee'], {
                queryParams: { returnUrl: state.url }
            });
            return false;
        }
        return true;
    }
}
