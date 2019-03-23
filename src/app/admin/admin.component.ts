import {Component, OnInit, Input} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../common-service.service';
import {FlatpickrOptions} from 'ng2-flatpickr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  submitted = false;
  users: User[];
  userView = true;
  enteredUser: any = {};


  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUsers();
    const exampleOptions: FlatpickrOptions = {
      defaultDate: '2017-03-15'
    };
  }


  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  addUser() {
    this.submitted = true;
    const newUser = new User();
    newUser.id = Math.floor((1 + Math.random()) * 0x10000);
    newUser.name = this.enteredUser.name;
    newUser.email = this.enteredUser.email;
    newUser.phoneNumber = this.enteredUser.phoneNumber;
    if (newUser.name) {
      this.users.push(newUser);
    }
    console.log(this.users);
  }

  reset() {
    this.enteredUser.name = '';
    this.enteredUser.email = '';
    this.enteredUser.phoneNumber = '';
  }

  showAdminView() {
    this.userView = false;
  }

  HideAdminView() {
    this.userView = true;
    this.submitted = false;
  }


}
