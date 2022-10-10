import { NgModule } from '@angular/core';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PhotosComponent],
  imports: [PhotosRoutingModule, SharedModule],
  exports: [PhotosComponent],
})
export class PhotosModule {}
