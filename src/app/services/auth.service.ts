import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(public router: Router, ) { }

    isLogin() {
        const loginUser = Boolean(localStorage.getItem('active_user'));
        return loginUser;
    }

    logout() {
        localStorage.removeItem('active_user');
        this.router.navigate(['']);
    }
}
