import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    currentLang?: string;

    constructor(public authService: AuthService , public translate: TranslateService) {
        this.currentLang = localStorage.getItem("currentLang") || "en";
        this.translate.use(this.currentLang)
     }

    ngOnInit(): void {
    }

    logout(): void {
        this.authService.logout();
    }

    changeLang(lang: string) {
        localStorage.setItem("currentLang", lang)
        this.translate.use(lang)
        this.currentLang = lang;
    }

}
