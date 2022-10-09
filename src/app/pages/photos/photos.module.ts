import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [PhotosComponent],
  imports: [CommonModule, PhotosRoutingModule, NzTableModule],
  exports: [PhotosComponent],
})
export class PhotosModule {}
