import { Component, OnInit } from '@angular/core';
import { DadosProdutosService } from 'src/app/service/dados-produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})

export class ProdutosPage implements OnInit {
  public todosProdutos : any

  constructor(private produtos : DadosProdutosService) { }

  ngOnInit() {
    this.todosProdutos = this.produtos.enviarTodosDados()
  }

}
