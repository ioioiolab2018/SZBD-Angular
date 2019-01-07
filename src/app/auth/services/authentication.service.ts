import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Authentication } from 'src/app/shared/model/authentication';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<any> {
        return this.http
            .post<any>('api/authentication/generate-token', {
                username,
                password
            })
            .pipe(
                map((authentication: Authentication) => {
                    if (authentication && authentication.token) {
                        localStorage.setItem(
                            'authentication',
                            JSON.stringify(authentication)
                        );
                    }
                    return authentication;
                })
            );
    }

    logout(): void {
        localStorage.removeItem('authentication');
    }
}
