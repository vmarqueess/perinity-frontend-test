import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perinity-test';
  
  // Method to open / close side menu
  sideMenuToggle(menu:any){
    menu.toggle();
  }
}

