import { Component } from '@angular/core';

// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    /*
    if (typeof $ != 'undefined') {
      alert("jQuery library is loaded!");
    }
    else {
      alert("jQuery library is not found!");
    }
    */
  }
}
