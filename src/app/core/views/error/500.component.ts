import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  templateUrl: '500.component.html',
  styleUrls: ['error.component.scss']
})
export class P500Component {

  constructor(private location: Location) { }

  onGoBack() {
    this.location.back();
  }

}
