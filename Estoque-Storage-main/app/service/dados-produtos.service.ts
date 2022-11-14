import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Guid } from 'guid-typescript'
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class DadosProdutosService {

  private produtos = [

  ]

  constructor(
    private storage : Storage
  ) { }

  inserir(argumento : Produto){
    

    argumento.id = Guid.create()

    this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
  }

  recebeProduto(enviarDadosId : Produto ){
    enviarDadosId.id = Guid.create()

    this.storage.set(enviarDadosId.id.toString(), JSON.stringify(enviarDadosId))

    // enviarDadosId.id = this.contatos.length + 1
    // this.contatos.push(enviarDadosId)
  }

  enviarTodosDados(){
    // return this.contatos
    let arrayContatos : Produto [] = []

    this.storage.forEach((valor : string) => {const produto : Produto = JSON.parse(valor); arrayContatos.push(produto)})
    return arrayContatos
  }

  async  enviarProdutoId(id : string){
    // const contatoSelecionado = this.contatos.filter(contato => contato.id === id)
    // return contatoSelecionado[0]

     console.log( JSON.parse(await this.storage.get(id)))

     return JSON.parse(await this.storage.get(id))
  }

  deletaProduto(id : string){
    // this.contatos.splice(this.contatos.indexOf(enviarDadosId), 1)
    this.storage.remove(id)
  }

  AlterarProdutoId(id: string, enviarProdutoId: Produto){
    enviarProdutoId.id = Guid.parse(id)
    this.storage.set(enviarProdutoId.id.toString(), JSON.stringify(enviarProdutoId))
    
  }

  async listarTodos(){
    let arrayProduto: Produto [] = [];

    await this.storage.forEach((value: string) =>
    {const produto: Produto = JSON.parse(value); arrayProduto.push(produto)})

    return arrayProduto;
   
  } 


}
