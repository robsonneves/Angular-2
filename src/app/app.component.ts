import { Component } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Project';

  produtos : Produto[] = [];

  constructor(){
    let p = new Produto;
    p.id = 1;
    p.nome = 'Feijão';
    this.produtos.push(p);
  }

}
