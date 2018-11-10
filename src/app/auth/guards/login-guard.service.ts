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
        JSON.parse(localStorage.getItem('currentUser'));
        if (localStorage.getItem('currentUser')) {
            if (JSON.parse(localStorage.getItem('currentUser')).isEmployee) {
                this.router.navigate(['/employee'], {
                    queryParams: { returnUrl: state.url }
                });
            }
            this.router.navigate(['/student'], {
                queryParams: { returnUrl: state.url }
            });
            return false;
        }
        return true;
    }
}
