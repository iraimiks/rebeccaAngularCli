import { Component, OnInit } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { CollapseComponent } from 'angular-bootstrap-md';
@Component({
  selector: 'app-tablesect4',
  templateUrl: './tablesect4.component.html',
  styleUrls: ['./tablesect4.component.css']
})
export class Tablesect4Component implements OnInit {
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
