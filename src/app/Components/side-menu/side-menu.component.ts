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
  theme: string = "#9fa9be"; 
  widthMenu: number = 50; 
  visibleMenu: boolean = true;

  setVisibilityMenu(): void {
    this.visibleMenu = !this.visibleMenu;
  }

  setThemeColor(color: string): void {
    this.theme = color;
  }

  setWidth(): void {
    this.widthMenu += 10;
  }
}

