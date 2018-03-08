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
  id:any;
  constructor(private iS:IdeasService,private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getIdeaDetails()
  }

  getIdeaDetails() {
    this.iS.getSingleIdea(this.id)
    .subscribe((idea) => {
      console.log(idea)
        this.getIdea(idea)
    })
  }

  getIdea(idea){
    return this.idea=idea;
  }
}