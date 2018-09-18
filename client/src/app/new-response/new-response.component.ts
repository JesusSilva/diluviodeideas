import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ResponsesService} from '../../services/responses.service'
import { IdeasService } from '../../services/ideas.service';

@Component({
  selector: "app-new-response",
  templateUrl: "./new-response.component.html",
  styleUrls: ["./new-response.component.css"]
})
export class NewResponseComponent implements OnInit {
  constructor(private route:ActivatedRoute,public rS:ResponsesService, public iS:IdeasService, private router:Router) {}

  response:any;
  addResponseStatus = false;
  arrayResponses:Array<any>=[];
  idea:any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getIdeaDetails(params['id']);
    })
  }

  getIdeaDetails(id) {
    this.iS.getSingleIdea(id)
    .subscribe((idea) => {
        this.getIdea(idea)
    })
  }

  getIdea(idea){
    return this.idea=idea;
  }

  newResponse(response) {
    this.arrayResponses.push(response);
    this.response = { response };
    this.rS.newResponseService(this.response, this.idea._id).subscribe(response => {
      this.router.navigate(["/detail-idea",this.idea._id]);
    });
    //limpieza
    this.response = [response=""]
  }

  changeStatus () {
    this.addResponseStatus = !this.addResponseStatus;
  }
}
