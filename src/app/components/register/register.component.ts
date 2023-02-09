import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IUser } from 'src/app/interface';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    users: IUser[] = [];

    newUser: IUser = {
        first_name: '',
        last_name: '',
        age: 13,
        email: '',
        gender: '',
        password: '',
        confirm_password: '',
    };

    msgError={
        confirmPasswordMsgError: '',
        uniqueEmailMsgError: '',
    }

    constructor( public router: Router , public UserService: UserService ,public translate: TranslateService) { }

    ngOnInit(): void {
        this.users = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('users'))));
        if(!Array.isArray(this.users)){
            this.users = [];
        }
    }

    registerForm: FormGroup = new FormGroup({
        first_name: new FormControl('', [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(30)
        ]),

        last_name: new FormControl('', [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(30)
        ]),

        age: new FormControl('', [
            Validators.required,
            Validators.min(13),
            Validators.max(80)
        ]),

        gender: new FormControl('', []),

        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),

        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15)
        ]),

        confirm_password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(15)
        ]),
    })

    addUser():void {
        this.newUser = this.registerForm.value;
        this.users.push(this.newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        localStorage.setItem('active_user', JSON.stringify(this.registerForm.value));
    }

    confirmPasswordValidation(): void {
        if(this.registerForm.value.confirm_password === this.registerForm.value.password ){
            this.msgError.confirmPasswordMsgError = '';
        }
        else{
            this.msgError.confirmPasswordMsgError = 'Please enter a valid password';
            throw new Error('Please enter a valid password');
        }
    }

    uniqueEmailValidation(): void {
        for (const item of this.users) {
            if(item.email === this.registerForm.value.email) {
                this.msgError.uniqueEmailMsgError = 'this email already used';
                throw new Error('this email already used');
            }
            else{
                this.msgError.uniqueEmailMsgError = '';
            }
        }

    }


    register(): void {
        this.confirmPasswordValidation();
        this.uniqueEmailValidation();
        this.addUser();
        this.router.navigate(['/profile']);
    }

}
