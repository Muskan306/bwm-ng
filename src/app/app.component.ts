import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  componentTitle="Hii I am app component from component.ts";

  clickHandler() {
  	alert("Hii I am clicked");
  }
}
