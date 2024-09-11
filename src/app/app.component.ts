import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
@Component({
  selector:"app-user",
  template:`
    <div>bruh</div>
  `,
  standalone:true
})
export class UserComponent{
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swoggerslol';
}