import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SessionService } from "../../services/session.service";
declare var jQuery:any;
declare var $:any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  error: string;

  constructor(public session: SessionService, private router: Router) {}

  ngOnInit() {
    // Prealoder
    function prealoader () {
      if ($('#loader').length) {
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow': 'visible'});
      }
    }
  }

  logout() {
    this.session
      .logout()
      .catch(e => (this.error = e))
      .subscribe();
  }
}
