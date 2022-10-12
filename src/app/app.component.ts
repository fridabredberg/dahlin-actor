import { Component } from '@angular/core';
import { MenuOption } from './menu-option';
import { MenuOptions } from './menu-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  menuContent: MenuOption = MenuOptions[0];

  showSelected(menuOption: MenuOption) {
    this.menuContent = menuOption;
  }
}
