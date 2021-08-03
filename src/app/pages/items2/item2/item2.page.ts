import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataRequestService } from 'src/app/shared/services/data-request.service';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.page.html',
  styleUrls: ['./item2.page.scss'],
})
export class Item2Page implements OnInit {
  recievedData: any;
  data: any;
  id: any;
  foundItem: any;

  constructor(
    private dataRequestService: DataRequestService,
    private route: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getItem(+params.id);
      console.log("rD: ", this.recievedData);
    });
  }

  getItem(id) {
     this.dataRequestService.getData().subscribe(data => {
      this.data = data;
      this.foundItem = this.data.filter(item => {
           return item.id === id;
        })
        this.recievedData = this.foundItem[0]; 
    });

  }
}