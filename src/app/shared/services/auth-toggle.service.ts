import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toggles } from '../classes/toggles';
import { ToggleList } from './toggleList.service';

@Injectable({providedIn: 'root'})

export class AuthToggleService {
  toggleList: Toggles[];

  toggleValue: BehaviorSubject<Array<any>> = new BehaviorSubject(['']);
  
  constructor(private toggles: ToggleList){
    this.toggleList = this.toggles.toggleList;
  }

  getValue(data){
      this.toggleValue.next(data);
  }
}