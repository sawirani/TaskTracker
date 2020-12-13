import { Component, OnInit } from '@angular/core';
import { User } from '../app-state/models';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  public usName: string;

  constructor(private token: TokenStorageService, private user: User) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    this.user=this.currentUser.username;
  }
}
