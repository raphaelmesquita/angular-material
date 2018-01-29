import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;

  constructor(private _route: ActivatedRoute, private _service: UserService) { }

  ngOnInit() {
    this._route
      .params
      .switchMap(params => {
        const id = params['id'];
        return this._service.users$
          .filter(users => users.length > 0)
          .map(_ => this._service.userById(id));
      })
      .subscribe(user => {
        this.user = user;
      });
  }

}
