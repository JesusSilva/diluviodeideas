import { Component, OnInit } from '@angular/core';
import { IdeasService } from '../../services/ideas.service'

@Component({
  selector: "app-ideas",
  templateUrl: "./ideas.component.html",
  styleUrls: ["./ideas.component.css"]
})
export class IdeasComponent implements OnInit {
  ideasList: Array<any>;

  constructor(private iS:IdeasService) { 
    this.iS.getIdeaList().subscribe( list => this.ideasList = list );
  }

  ngOnInit() {}

}