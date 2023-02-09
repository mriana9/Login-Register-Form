import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/interface';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    users: IUser[] = [];
    activeUser: any;
    constructor( public router: Router , public UserService: UserService ,public translate: TranslateService) { }

    ngOnInit(): void { 
        this.users = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('users'))));
        this.activeUser = JSON.parse(JSON.parse(JSON.stringify(this.UserService.getActiveUser())));
    }

    loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),

        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15)
        ]),
    })

    login() {
        const emailLogin = this.loginForm.value.email;
        const passwordLogin = this.loginForm.value.password;
         for (const item of this.users) {
            if (item.email === emailLogin && item.password === passwordLogin) {
                this.activeUser = item;
                console.log('user' , item);
                console.log('activeUser' , this.activeUser);
                localStorage.setItem('active_user', JSON.stringify(item));
                this.router.navigate(['/profile']);
            }
         }

    }
}
