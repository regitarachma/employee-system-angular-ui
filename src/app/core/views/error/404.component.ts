import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: '404.component.html',
  styleUrls: ['error.component.scss']
})
export class P404Component {

  constructor(private location: Location) {
  }

  onGoBack() {
    this.location.back();
  }

}
