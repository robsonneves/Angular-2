import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos : Produto[] = [];

  constructor() { }

  ngOnInit() {
    let produto = new Produto();
    produto.id = 1;
    produto.nome = "Pedrinho";
    this.produtos.push(produto);
    
    let produto2 = new Produto();
    produto2.id = 2;
    produto2.nome = "Marquinhos";
    this.produtos.push(produto2);
  }

}
