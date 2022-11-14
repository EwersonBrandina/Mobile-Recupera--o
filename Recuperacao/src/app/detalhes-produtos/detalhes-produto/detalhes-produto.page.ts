import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosProdutosService } from 'src/app/service/dados-produtos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from "@ionic/angular";

import { Guid } from 'guid-typescript';
import { Produto } from 'src/app/model/produto.model';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.page.html',
  styleUrls: ['./detalhes-produto.page.scss'],
})
export class DetalhesProdutoPage implements OnInit {
  produtoForm : FormGroup
  id : Guid
  nome : string
  valor: string
  quantidade : string
  produtoSelecionado : Produto
  private arrayProduto : any

  public modoDeEdicao = false
  public modoDeEdicao2 = false

  constructor(
    private route : ActivatedRoute,
    private produtos : DadosProdutosService,
    public alertController : AlertController,
    private formBuilder : FormBuilder,
    private DadosProdutos : DadosProdutosService

  ) { }

  IniciarEdicao(){
    this.modoDeEdicao = true
  }

  IniciarEdicao2(){
    this.modoDeEdicao2 = true
  }

  EncerrarEdicao(){

    const id : string = String(this.route.snapshot.paramMap.get('id'))


    if (id != 'add'){
      if (this.produtoForm.valid){

        this.DadosProdutos.AlterarProdutoId(id, this.produtoForm.value)
      this.modoDeEdicao = false
     }
    }

    else {
      if (this.produtoForm.valid){
      this.DadosProdutos.inserir(this.produtoForm.value)
      this.modoDeEdicao = false
      }
    } 
  }

  async showOptions() {
    const alert = await this.alertController.create({
      header: "Confirmar",
      message: "Deseja mesmo excluir esse produto?",
      buttons: [
        {
          text: "Voltar",
          role: "cancel",
          handler: () => {
            console.log("Declined the offer");
 
          },
        },
        {
          text: "Sim",
          handler: () => {
            console.log("Accepted the offer");
            this.deletarProduto()
          },
        },
      ],
    });
  
    await alert.present();
  }
  deletarProduto(){
    const id : string = String(this.route.snapshot.paramMap.get('id'))

    this.DadosProdutos.deletaProduto(id)
  }

  ngOnInit() {
    this.produtoSelecionado = {id: Guid.createEmpty(), nome:'',valor:'',quantidade:''}
   

    const id : string = String(this.route.snapshot.paramMap.get('id'))


    if (id != 'add'){
       this.produtos.enviarProdutoId(id).then(array => this.produtoSelecionado = array)

    }else{
     this.modoDeEdicao = true 
    }

      this.DadosProdutos.listarTodos().then(arrayPessoa => {this.arrayProduto = this.arrayProduto} )

  this.produtoForm=this.formBuilder.group({
    id : [this.produtoSelecionado.id],
    nome : [this.produtoSelecionado.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
    valor : [this.produtoSelecionado.valor, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(19)])],
    quantidade : [this.produtoSelecionado.quantidade, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(19)])]
    
  })

  }
}


