import { Component, OnInit } from '@angular/core';
import { DataRequestService } from 'src/app/shared/services/data-request.service';

@Component({
  selector: 'app-items2',
  templateUrl: './items2.page.html',
  styleUrls: ['./items2.page.scss'],
})
export class Items2Page implements OnInit {
  data: any = [];

  constructor(
    public dataRequestService: DataRequestService
    ) { }

  ngOnInit() {
    this.getDataList();
  }

  getDataList() {
    return this.dataRequestService.getData().subscribe(data => {
      this.data = data;
    })
  }
}

