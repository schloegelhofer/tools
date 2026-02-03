import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  userName = "";

    constructor(private authservice: AuthService){}

ngOnInit(): void {
    this.authservice.user$.subscribe(user => {
      console.log(user);

      this.userName = user?.firstName + " " + user?.lastName;
    })
}

}
