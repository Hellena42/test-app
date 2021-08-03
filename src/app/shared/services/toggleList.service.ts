import { Injectable } from '@angular/core';
import { Toggles } from '../classes/toggles';

@Injectable({
  providedIn: 'root'
})
export class ToggleList {
  toggleList:Toggles[];

  constructor() {
    this.toggleList = [
      {name: 'danger', state: false},
      {name: 'lima', state: false},
      {name: 'blue', state: false}
    ];
  }
}