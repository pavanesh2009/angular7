import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {FilterPipe} from './filters/custom-search-filter';
import * as moment from 'moment';
import {Ng2FlatpickrModule} from 'ng2-flatpickr';
import {HerosComponent} from './heros/heros.component';
import {AddHeroComponent} from './add-hero/add-hero.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DndModule} from 'ng2-dnd';
import {SimpleDndComponent} from './simple-dnd/simple-dnd.component';
import {InMemoryDataService} from './services/in-memory-data.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'AdminComponent',
    pathMatch: 'full'
  },
  {path: 'adminView', component: AdminComponent},
  {path: 'userView', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    FilterPipe,
    HerosComponent,
    AddHeroComponent,
    HeroDetailComponent,
    SimpleDndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    Ng2FlatpickrModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    DndModule.forRoot(),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule
      .forRoot(
        InMemoryDataService, {dataEncapsulation: false}
      )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
