import { Component, OnInit } from "@angular/core";
import { IdeasService } from "../../services/ideas.service";
import { Router } from "@angular/router";
declare var jQuery: any;
declare var $: any;

@Component({
  selector: "app-ideas",
  templateUrl: "./ideas.component.html",
  styleUrls: ["./ideas.component.css"]
})
export class IdeasComponent implements OnInit {
  ideasList: Array<any>;

  constructor(private iS: IdeasService) {
    this.iS.getIdeaList().subscribe(list => (this.ideasList = list));
  }

  ngOnInit() {
    $(document).ready(function() {
      /* when a user clicks, toggle the 'is-animating' class */
      $(".fav").on("click touchstart", function() {
        $(this).toggleClass("is-animating");
      });

      /*when the animation is over, remove the class*/
      $(".fav").on("animationend", function() {
        $(this).toggleClass("is-animating");
      });
    });
  }
}
