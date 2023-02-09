import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    constructor( public router: Router,public translate: TranslateService) { 
    }
    ngOnInit() {
    }

    registerURL(){
        this.router.navigate(['/register']);
    }

    loginURL(){
        this.router.navigate(['/login']);
    }
}
