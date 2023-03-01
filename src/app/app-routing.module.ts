import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [ {path: '', component: PostListComponent},
{path: 'post-list', component: PostListComponent},
{path: 'authentification',component:AuthentificationComponent},
{path: '**' ,  component : AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
