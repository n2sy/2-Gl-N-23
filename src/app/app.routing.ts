import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { CvComponent } from "./cv/cv.component";
import { MsWordComponent } from "./ms-word/ms-word.component";
import { ServersComponent } from "./servers/servers.component";
import { InfosComponent } from "./infos/infos.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from "./edit/edit.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { LoginComponent } from "./login/login.component";



const myRoutes : Routes = [
    {path: '', component : AccueilComponent},
    {path: 'cv', children : [
        {path: '', component : CvComponent},
        {path: 'add', component : AddComponent},
        {path: ':id', component : InfosComponent},
        {path: ':id/:edit', component : EditComponent},
    ]},
    {path: 'ms-word', component : MsWordComponent},
    {path: 'servers', component : ServersComponent},
    {path: 'login', component : LoginComponent},
    {path: 'not-found', component : NotFoundComponent},
    {path: '**', redirectTo : 'not-found'},
];

export const GL_N_ROUTING = RouterModule.forRoot(myRoutes)


