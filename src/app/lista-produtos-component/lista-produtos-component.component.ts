import { Component, OnInit, Input } from '@angular/core';
import { Produto } from "../produto"

@Component({
  selector: 'app-lista-produtos-component',
  templateUrl: './lista-produtos-component.component.html',
  styleUrls: ['./lista-produtos-component.component.css']
})
export class ListaProdutosComponentComponent implements OnInit {

  @Input() produtos : Produto[] = [];

  constructor() { }

  ngOnInit() {
  }

}
