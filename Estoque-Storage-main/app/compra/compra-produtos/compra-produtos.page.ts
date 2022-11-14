import { Component, OnInit } from '@angular/core';
import { DadosProdutosService } from 'src/app/service/dados-produtos.service';

@Component({
  selector: 'app-compra-produtos',
  templateUrl: './compra-produtos.page.html',
  styleUrls: ['./compra-produtos.page.scss'],
})
export class CompraProdutosPage implements OnInit {
  public todosProdutos : any

  constructor(private produtos : DadosProdutosService) { }

  ngOnInit() {
    this.todosProdutos = this.produtos.enviarTodosDados()
  }

}
