import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Produto } from '../models/produto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  private produto: Produto
  public produtoForm: FormGroup
  public arrayProduto: any

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutosService,
  ) { }

  ngOnInit() {
    this.produto = {id: Guid.createEmpty(), nome:"", valor:0.0, quantidade:0}
    this.produtoForm = this.formBuilder.group({
      id: [this.produto.id],
      nome: [this.produto.nome, Validators.required],
      valor: [this.produto.valor],
      quantidade: [this.produto.quantidade]
    })

    this.produtoService.listarTodos().then(arrayProduto => {this.arrayProduto = arrayProduto})
  }

  enviar(){
    if (this.produtoForm.valid){
      this.produtoService.inserir(this.produtoForm.value)
    }
  }

}
