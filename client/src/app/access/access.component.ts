import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: "app-access",
  templateUrl: "./access.component.html",
  styleUrls: ["./access.component.css"]
})
export class AccessComponent implements OnInit {

  username:string;
  password:string;
  error:string;

  constructor(public session:SessionService, private router: Router) {}

  ngOnInit() {
    $(document).ready(function() {
      $(".toggle").on("click", function() {
        $("#pen").removeClass("fas")
        $(".container")
          .stop()
          .addClass("active");
      });

      $(".close").on("click", function() {
        $(".container")
          .stop()
          .removeClass("active");
      });
    });
  }

  login(username,password) {
    this.session.login(username,password)
      .subscribe(
      (user) => {
        this.router.navigate(['/']);
      },
      (err) => this.error = err
      );
  }

  signup(username,password,confirm_password) {
    this.session.signup(username,password,confirm_password)
      .subscribe(user => {
        this.router.navigate(["/user/access"]);
      }, err => (this.error = err));
  }

}
