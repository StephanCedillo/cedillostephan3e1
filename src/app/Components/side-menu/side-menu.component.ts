import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'] 
})
export class SideMenuComponent {
  userName: string = "Stephan Cedillo";
  theme: string = 'aliceblue'; 
  widthMenu: number = 25; 
  visibleMenu: boolean = true;
  marginLeft: number = 25;

  setVisibilityMenu(): void {
    this.visibleMenu = !this.visibleMenu;
  }

  setThemeColor(color: string): void {
    this.theme = color;
  }

  setWidth(): void {
    this.widthMenu += 10;
    this.marginLeft += 10;
    if (this.widthMenu > 100) {
      this.widthMenu = 25;
      this.marginLeft = 25;
    }
  }
}

