import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './modules/posts/posts.component';
import { PreAppResolver } from './core/resolvers';


const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {datetimeKeys: PreAppResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
