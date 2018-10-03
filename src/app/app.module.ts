import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';

const appRoutes : Routes = [
  {path: 'produtos', component: ProdutosComponent },
  {path: 'produtos/:id', component: EditarProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    EditarProdutosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
