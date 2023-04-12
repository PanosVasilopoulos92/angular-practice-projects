import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
    <h2>Welcome {{name}}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    <h2>{{ 'Name length is ' + name.length + ' letters'}}</h2>
    <h2>{{ greetUser() }}</h2>

    <h1>Property binding</h1>
    <input [id]= "myId" type="text" value="Type here">
    <input [disabled]="isDisabled" id="{{ myId }}" type="text" value="Type here">
    <input bind-disabled="isDisabled" id="{{ myId }}" type="text" value="Type here">
  </div>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  // name: string = 'Panos'
  public name = 'Panos';
  public myId = 'testId';
  public isDisabled = false;
  constructor() {}

  greetUser() {
    return 'Hello ' + this.name;
  }
}
