import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-page',
  templateUrl: './open-page.component.html',
  styleUrls: ['./open-page.component.css'],
  animations: [
    trigger('divState', [
      state('start', style({
        backgroundColor: 'blue',
        transform: 'translateY(0)',
        opacity: '1'
      })),
      state('startButton', style({
        backgroundColor: 'black',
        transform: 'translateY(0)',
        opacity: '1'
      })),
      state('end1', style({
        backgroundColor: 'blue',
        transform: 'translateY(-100%)',
        opacity: '0'
      })),
      state('end2', style({
        backgroundColor: 'green',
        transform: 'translateY(100%)',
        opacity: '0'
      })),
      state('endButton', style({
        backgroundColor: 'red',
        transform: 'translateX(-100%)',
        opacity: '0'
      })),
      transition("start => end1", animate("4s")),
      transition("start => end2", animate("4s")),
      transition("startButton => endButton", animate("4s"))
    ])
  ]
  
})
export class OpenPageComponent implements OnInit {
  stateUp:string = 'start'
  stateDown:string = 'start'
  stateButton:string = 'startButton'
  isUp: boolean = false;
  isDown: boolean = false;
  isLeft: boolean = false;

  constructor(private router:Router) { }


  toggleClasses() {
    this.stateUp = 'end1'
    this.stateDown = 'end2'
    this.stateButton = "endButton"
    setTimeout(() => {
      this.router.navigate(['auth'])
    }, 4000);
  }


  ngOnInit(): void {
  }
 


}
