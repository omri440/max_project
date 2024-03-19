import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-satrtingrecipe',
  templateUrl: './satrtingrecipe.component.html',
  styleUrls: ['./satrtingrecipe.component.css']
})
export class SatrtingrecipeComponent implements OnInit {
  id:number
   public editmode = false

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id = params['id'] ;
      this.editmode = params['id'] != null;
      console.log(this.editmode)
    })
  }

}
