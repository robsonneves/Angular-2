import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  produto : Produto;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.produto = new Produto();
    this.produto.id = 1;
    this.produto.nome = "João";  
  }

  salvar(){
    alert('salvar');
  }

  get debug(){
    return JSON.stringify(this.produto.nome);
  }
}
