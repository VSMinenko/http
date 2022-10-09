import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/posts' },
  {
    path: 'posts',
    loadChildren: () =>
      import('./pages/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./pages/photos/photos.module').then((m) => m.PhotosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
