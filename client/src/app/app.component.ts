import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../services/session.service";
import { ProfileService } from "../services/profile.service";
declare var jQuery:any;
declare var $:any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Diluvio de Ideas";
  error: string;
  user: object;

  constructor(
    public session: SessionService,
    public profile: ProfileService,
    private router: Router
  ) {
    this.session.getUser();
  }

  ngOnInit() {
    $(document).ready(function() {
      $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
      })
      $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
      })
      $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
      });
    });
  }

  logout() {
    this.session
      .logout()
      .catch(e => (this.error = e))
      .subscribe();
  }
}
