import { Component, OnInit } from '@angular/core';
import { DataToggleService } from 'src/app/shared/services/data-toggle.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {

  dangerToggle: boolean;
  limaToggle: boolean;
  blueToggle: boolean;

  constructor(
    public dataToggleService: DataToggleService
    ) {
      this.dangerToggle = this.dataToggleService.dangerValue.getValue();
      this.limaToggle = this.dataToggleService.limaValue.getValue();
      this.blueToggle = this.dataToggleService.blueValue.getValue();
    }


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
