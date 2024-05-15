import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DataStorgeService } from 'src/app/services/data-storge.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit,OnDestroy {

  constructor(private dSSerice:DataStorgeService, private authService:AuthService) { }
  isAuth:boolean = false;
  userSub: Subscription;

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(userRes => {
      this.isAuth = !userRes ? false : true;
    })
  }

  onSavePost(){
    this.dSSerice.storeReicpes() ; 
  }

  onfetchRecipes(){
    this.dSSerice.fetchRecipes()
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }

  onLogout(){
    this.authService.logout()
  }
}
