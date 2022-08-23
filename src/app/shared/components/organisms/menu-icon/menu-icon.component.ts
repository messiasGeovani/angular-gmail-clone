import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss'],
})
export class MenuIconComponent implements OnInit {
  @Input() icon?: string;
  @Input() hideOnClick?: boolean;
  @Input() isLarge?: boolean;

  isVisible = true;

  constructor() {}

  ngOnInit(): void {}

  handleHideButton() {
    if (this.hideOnClick) {
      this.isVisible = !this.isVisible;
    }
  }
}
