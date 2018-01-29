import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
  
  user: User;
  avatars = [
    "svg-1", "svg-2", "svg-3", "svg-4"
  ];

  constructor(private _dialogRef: MatDialogRef<NewContactDialogComponent>) { }

  ngOnInit() {
    this.user = new User();
  }

  save(){
    this._dialogRef.close(this.user);
  }

  dismiss(){
    this._dialogRef.close(null);
  }
}
