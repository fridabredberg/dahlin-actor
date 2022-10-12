import { Component, EventEmitter, Output } from "@angular/core";
import { MenuOption } from "../menu-option";
import { MenuOptions } from "../menu-options";

@Component({
    selector: 'menu',
    templateUrl: './menu-component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
    @Output()
    selected = new EventEmitter<MenuOption>();

    menuOptions = MenuOptions;

    setMenuOption(option: MenuOption) {
        this.menuOptions.map(x => x.selected = false);
        const selected = this.menuOptions.find(x => x.title === option.title);
        this.selected.emit(selected);
    }
}