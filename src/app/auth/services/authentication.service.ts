import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
                map(user => {
                    if (user && user.token) {
                        localStorage.setItem(
                            'currentUser',
                            JSON.stringify(user)
                        );
                    }
                    return user;
                })
            );
    }

    logout(): void {
        localStorage.removeItem('currentUser');
    }
}
