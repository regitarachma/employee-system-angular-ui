import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  templateUrl: '403.component.html',
  styleUrls: ['error.component.scss']
})
export class P403Component {

  constructor(private router: Router) {
  }

  onGoHome() {
    this.router.navigateByUrl('');
  }

}
