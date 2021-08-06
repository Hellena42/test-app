import { Component, OnInit } from '@angular/core';
import { DataToggleService } from 'src/app/shared/services/data-toggle.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {

  dangerToggle = false;
  limaToggle = false;
  blueToggle = false;

  constructor(
    public dataToggleService: DataToggleService
    ) {}


  ngOnInit() {
    this.dataToggleService.dangerValue.subscribe(value => {
      if (value) {
        this.dangerToggle = value;
      }
    })

    this.dataToggleService.limaValue.subscribe(value => {
      if(value) {
        this.limaToggle = value;
      }
    })

    this.dataToggleService.blueValue.subscribe(value => {
      if (value){
        this.blueToggle = value;
      }
    })
  }

  onToggle(val) {
    if(val.target.name === "dangerToggle") {
      this.dataToggleService.dangerValue.next(val.target.checked);
    } else if(val.target.name === "limaToggle") {
      this.dataToggleService.limaValue.next(val.target.checked);
    } else if(val.target.name === "blueToggle"){
      this.dataToggleService.blueValue.next(val.target.checked);
    } 
  }
}
