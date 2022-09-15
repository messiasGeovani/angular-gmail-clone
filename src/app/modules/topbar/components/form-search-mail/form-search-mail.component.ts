import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchHistoryService } from '../../services/search-history.service';

@Component({
  selector: 'app-form-search-mail',
  templateUrl: './form-search-mail.component.html',
  styleUrls: ['./form-search-mail.component.scss'],
})
export class FormSearchMailComponent implements OnInit {
  @Output() historyItemSelected: EventEmitter<string> = new EventEmitter();

  constructor(private searchHistoryService: SearchHistoryService) {}

  ngOnInit(): void {}

  selectItemFromHistory(historyItem: string) {
    this.searchHistoryService.reorganizeHistoryItems(historyItem);
    this.historyItemSelected.emit(historyItem);
  }
  
  handleRemoveItemFromHistory(itemIndex: number) {
    this.searchHistoryService.removeItemFromHistory(itemIndex);
  }

  get searchHistory(): string[] {
    return this.searchHistoryService.searchHistory;
  }
}
