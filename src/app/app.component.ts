import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'register-form';

    dir = 'lrt';
    constructor(public translateService: TranslateService) {

    }
    ngOnInit(): void {
        this.translateService.onLangChange.subscribe((data) => {
            if (data.lang === 'en') {
                this.dir = 'ltr';
            } else {
                this.dir = 'rtl';
            }
        })
    }
}
