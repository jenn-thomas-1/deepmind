import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `<input #searchInput type="text" placeholder="Search agents..." (input)="search(searchInput.value)" />`,
})
export class SearchComponent implements OnInit {
  @Output() setSearchValue: EventEmitter<string> = new EventEmitter();

  private _searchValue = new Subject<string>();

  search(value: string): void {
    this._searchValue.next(value);
  }

  ngOnInit(): void {
    this._searchValue.pipe(
      debounceTime(300)
    ).subscribe((searchValue: string) => {
      this.setSearchValue.emit(searchValue);
    });
  }

  ngOnDestroy() {
    this._searchValue.unsubscribe();
  }
}

