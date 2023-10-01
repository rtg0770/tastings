import { Component } from '@angular/core';

@Component({
  selector: 'mezcal-mystique-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isMobile(): boolean {
    return window.innerWidth < 776;
  }
}
