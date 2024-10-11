import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  
  pageDown(){
    document.getElementById("pageend")?.scrollIntoView(
      {behavior:"smooth", block:"end", inline:"nearest"}
    );
}
}
