import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mapmodule',
  templateUrl: './mapmodule.component.html',
  styleUrls: ['./mapmodule.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class MapmoduleComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content);
  }
}
