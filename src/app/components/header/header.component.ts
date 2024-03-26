import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorgeService } from 'src/app/services/data-storge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dSSerice:DataStorgeService) { }

  ngOnInit(): void {
  }

  onSavePost(){
    this.dSSerice.storeReicpes() ; 
  }

  onfetchRecipes(){
    this.dSSerice.fetchRecipes()
  }
}
