import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { SearchHistoryService } from '../../services/search-history.service';

@Component({
  selector: 'app-search-mail-input',
  templateUrl: './search-mail-input.component.html',
  styleUrls: ['./search-mail-input.component.scss'],
})
export class SearchMailInputComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('matExpansionPanel') matExpansionPanel: MatExpansionPanel;

  panelOpenState = false;
  searchValue = new FormControl('');

  constructor(private searchHistoryService: SearchHistoryService) {}

  ngOnInit(): void {}

  handleSetInputValue(value: string) {
    this.searchValue.setValue(value);
  }

  search() {    
    // this.matExpansionPanel
    this.searchHistoryService.addItemToHistory(this.searchValue.value);
  }
}
