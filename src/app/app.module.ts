import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { DirectComponent } from './direct/direct.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ServersComponent } from './servers/servers.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './pipes/short.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { RecruterComponent } from './recruter/recruter.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GL_N_ROUTING } from './app.routing';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, ChildComponent, CvComponent, ListeComponent, DetailsComponent, ItemComponent, DirectComponent, MsWordComponent, ServersComponent, CustomDirDirective, ShortPipe, FilterPipe, RecruterComponent, AccueilComponent, InfosComponent, AddComponent, EditComponent, NavbarComponent, NotFoundComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, GL_N_ROUTING],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
