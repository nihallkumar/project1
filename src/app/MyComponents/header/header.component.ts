import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // @Output() featureSelected = new EventEmitter<string>();

  // onSelect(feature:string){
  //   this.featureSelected.emit(feature);
  // }

  isAuthenticated = false;
  private userSubs: Subscription;

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubs = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  onLogout(){
    this.authService.logout();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe()
  }

}
