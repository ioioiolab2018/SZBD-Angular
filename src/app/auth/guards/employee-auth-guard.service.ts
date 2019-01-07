import { Injectable } from '@angular/core';
import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate
} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class EmployeeAuthGuardService implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (
            localStorage.getItem('authentication') &&
            JSON.parse(localStorage.getItem('authentication')).role !== 'STUDENT'
        ) {
            return true;
        }

        this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url }
        });
        return false;
    }
}
