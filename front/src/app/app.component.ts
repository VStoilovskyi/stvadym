import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  register;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      email: ''
    }  
  }
  userRegister() {
    this.userService.userRegister(this.register).subscribe(
      response => {
        alert('User ' + this.register.username + 'has been created!')
      },
      error => console.log('Error')
    );
  }
}
