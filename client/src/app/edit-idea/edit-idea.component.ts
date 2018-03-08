import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IdeasService } from '../../services/ideas.service';

@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.component.html',
  styleUrls: ['./edit-idea.component.css']
})
export class EditIdeaComponent implements OnInit {

  idea:object;
  constructor(private route:ActivatedRoute,public iS:IdeasService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.iS.getIdeaId(params['id']).subscribe( idea => {this.idea = idea})
    })
  }

  edit(idea){
    this.iS
    .editIdea(idea._id,idea)
    .subscribe((idea) => {
      console.log(idea);
      this.router.navigate(['/ideas']);
    });
  }

}
