import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  searchHistory = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];

  constructor() { }

  removeItemFromHistory(index: number) {
    this.searchHistory.splice(index, 1);
  }
  
  reorganizeHistoryItems(itemToRealocate: string) {
    const itemIndex = this.searchHistory.indexOf(itemToRealocate);

    this.searchHistory.splice(itemIndex, 1);
    this.searchHistory.unshift(itemToRealocate);
  }

  addItemToHistory(value: string) {
    if (!value) {
      return
    }
    
    this.searchHistory.unshift(value)
  }
}
