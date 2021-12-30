import { Component } from '@angular/core';

@Component({
  // 'pm' is for product management - is prefix we specified when creating angular cli: e.g. ng new apm-start --prefix pm
  selector: 'pm-root',
  template: `
    <div><h1>{{pageTitle}}</h1>
      <div>My first component</div>
    </div>
    `
})


export class AppComponent {
  pageTitle: string = 'Miso Product Management';
}