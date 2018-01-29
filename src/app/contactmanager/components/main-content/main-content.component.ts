import { Component, OnInit } from '@angular/core';
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
    this._route.params.subscribe (params => {
      const id = params['id'];
      this.user = this._service.userById(id);
    });
  }

}
