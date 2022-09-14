import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-mail-input',
  templateUrl: './search-mail-input.component.html',
  styleUrls: ['./search-mail-input.component.scss']
})
export class SearchMailInputComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
