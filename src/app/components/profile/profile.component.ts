import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    activeUser: any;
    constructor(public translate: TranslateService, public UserService: UserService,) { }

    ngOnInit(): void {
        this.activeUser = JSON.parse(JSON.parse(JSON.stringify(this.UserService.getActiveUser())));
    }

}
