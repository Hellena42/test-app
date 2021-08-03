import { Component, OnInit } from '@angular/core';
import { Toggles } from 'src/app/shared/classes/toggles';
import { AuthToggleService } from 'src/app/shared/services/auth-toggle.service';
import { ToggleList } from 'src/app/shared/services/toggleList.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {
  
  toggleList: Toggles[];
  toggleListFiltered = [];
  checkedName = [];
  serialized: string;

  constructor(
    public authToggleService: AuthToggleService,
    public toggles: ToggleList
    ) { 
      this.toggleList = this.toggles.toggleList;
    }

  ngOnInit() {
    this.getChecked();
    this.authToggleService.getValue(this.toggleList);
  }

  getChecked() {
    const selected = [];
    const stored = localStorage.getItem('checked');

    if(stored === null) {
      return this.toggleList;
    } if(stored) {
      selected.push(...stored
        .split(',')
        .map(i => i.toLowerCase() == "false" ? false : true));

        this.toggleListFiltered = this.toggleList
        .map(x => x.name);
    
        this.toggleList = this.toggleListFiltered
        .map((value, index) => [value, selected[index]])
        .map(([name, state]) => ({name, state}));
    }
  }

  onToggle(){
    this.checkedName = this.toggleList
    .filter(x => x.name)
    .map(x => x.state)

    this.serialized = this.checkedName.join(',')
    localStorage.setItem('checked', this.serialized);
  }
}
