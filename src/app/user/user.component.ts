import { Component, OnInit, Input } from '@angular/core';
import {User} from "../model/user";
import * as moment from 'moment'
import {UserService} from "../common-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() users: Array<User>;
  searchText: string = '';
  userViewEnabled = true;
  threeYearsAgo: string;
  tenHoursAgo: string;
  twoHoursAgo: string;
  thirtyEightSecondsAgo: string;

  ngOnInit() {
    this.getUsers();
  }


  getUsers(): void {
    this.UserService.getUsers()
      .subscribe(users => this.users = users);
  }
  
  constructor(private UserService: UserService) {
    this.tenHoursAgo = moment().subtract(600, 'minutes').from(moment());
    this.threeYearsAgo = moment(new Date('2016-01-01')).fromNow();
    this.twoHoursAgo = moment().subtract(120, 'minutes').from(moment());

    let startTime = moment("22:40:00", "HH:mm:ss");
    let endTime = moment("22:40:38", "HH:mm:ss");

    this.thirtyEightSecondsAgo = endTime.diff(startTime, 'seconds') + ' seconds ago';
  }





}
