import { Component, OnDestroy, OnInit} from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../Shared/data-storage.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})

export class HeaderComponent implements OnInit, OnDestroy{
  private userSub:Subscription;
  isAuthenticated = false;

  constructor(private data:DataStorageService, private authService:AuthService) {}

  ngOnInit() {    
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false: true;
      
    });
  }

  onSaveData(){
    this.data.storeRecipes()
  }

  onFetchData() {
    this.data.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
  
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}