import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class DataToggleService {
  dangerValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  limaValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  blueValue: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}