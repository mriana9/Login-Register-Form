import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }

    getUsersData() {
        return localStorage.getItem('users');
    }

    getActiveUser() {
        return localStorage.getItem('active_user');
    }
}
