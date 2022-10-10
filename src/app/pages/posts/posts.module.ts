import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [PostsRoutingModule, SharedModule],
  declarations: [PostsComponent],
  exports: [PostsComponent],
})
export class PostsModule {}
