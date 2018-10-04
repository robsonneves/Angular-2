import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { EditarProdutosComponent } from './editar-produtos/editar-produtos.component';
import { UppercaseDirective } from './uppercase.directive';
import { TesteDirective } from './teste.directive';

const appRoutes : Routes = [
  {path: 'produtos', component: ProdutosComponent },
  {path: 'produtos/:id', component: EditarProdutosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    EditarProdutosComponent,
    UppercaseDirective,
    TesteDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
