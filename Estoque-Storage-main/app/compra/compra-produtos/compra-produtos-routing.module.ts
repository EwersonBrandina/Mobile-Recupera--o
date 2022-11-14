import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraProdutosPage } from './compra-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: CompraProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraProdutosPageRoutingModule {}
