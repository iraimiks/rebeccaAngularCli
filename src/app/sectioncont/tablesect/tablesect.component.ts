import { Component, OnInit } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';
@Component({
  selector: 'app-tablesect',
  templateUrl: './tablesect.component.html',
  styleUrls: ['./tablesect.component.css']
})
export class TablesectComponent implements OnInit {
  @ViewChildren(CollapseComponent) collapses: CollapseComponent[];
  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    this.collapses.forEach((collapse: CollapseComponent) => {
      collapse.toggle();
    });
  }
}
