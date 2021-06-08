import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params =>
      {this.user = this.router.getCurrentNavigation()?.extras.state as User})
   }

  ngOnInit() {

  }

}
