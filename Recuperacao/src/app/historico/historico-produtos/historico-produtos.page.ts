import { Component, OnInit } from '@angular/core';
import { DadosProdutosService } from 'src/app/service/dados-produtos.service';

@Component({
  selector: 'app-historico-produtos',
  templateUrl: './historico-produtos.page.html',
  styleUrls: ['./historico-produtos.page.scss'],
})
export class HistoricoProdutosPage implements OnInit {
  public todosProdutos : any

  constructor(private produtos : DadosProdutosService) { }

  ngOnInit() {
    this.todosProdutos = this.produtos.enviarTodosDados()
  }

}
