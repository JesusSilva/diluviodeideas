import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdeasService } from '../../services/ideas.service'


@Component({
  selector: 'app-ideasingle',
  templateUrl: './ideasingle.component.html',
  styleUrls: ['./ideasingle.component.css']
})
export class IdeasingleComponent implements OnInit {
  idea:object;
  IdeasList: Array<any>;
  constructor(private iS:IdeasService,private route: ActivatedRoute) {
    this.iS.getSingleIdea(['id']).subscribe( idea => this.idea = idea ) 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getIdeaDetails(params['id']);
    })
  }

  getIdeaDetails(id) {
    this.iS.getSingleIdea(id)
    .subscribe((idea) => {
        this.idea = idea;
    })
  }

}