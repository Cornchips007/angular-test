import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

/**
 * This is a Host Element. The reference to this element would be interacted with exactly like you would a host element.
 */
@Component({
  selector: 'app-web-comp',
  templateUrl: './web-comp.component.html',
  styleUrls: ['./web-comp.component.scss']
})
export class WebCompComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    // const x = this.dataService.getData();
  }

}
