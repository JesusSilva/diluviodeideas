import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { IdeasService } from '../../services/ideas.service';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {

  constructor(private route:ActivatedRoute,public iS:IdeasService, private router:Router) { }
  idea:any;

  ngOnInit() {}

  newIdea(title,mensaje){
    this.idea = {title,mensaje}
    this.iS
    .newIdeaService(this.idea)
    .subscribe((idea) => {
      this.router.navigate(['/ideas']);
    });
  }

}
