import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {HerosComponent} from './heros/heros.component';
import {FormsModule} from '@angular/forms';
import {SimpleDndComponent} from './simple-dnd/simple-dnd.component';

const routes: Routes = [
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: 'heroes', component: HerosComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'dnd', component: SimpleDndComponent}
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
