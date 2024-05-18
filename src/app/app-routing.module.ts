import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { SearchByNameComponent } from './pages/search-by-name/search-by-name.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'create-post', component: CreatePostComponent },
  { path: 'view-all', component: ViewAllComponent },
  { path: 'search-by-name', component: SearchByNameComponent },
  { path: 'view-post/:id', component: ViewPostComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
