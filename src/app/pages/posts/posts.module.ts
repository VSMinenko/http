import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';

import { PostsComponent } from './posts.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [PostsRoutingModule, NzTableModule, CommonModule],
  declarations: [PostsComponent],
  exports: [PostsComponent],
})
export class PostsModule {}
