import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzImageModule } from 'ng-zorro-antd/image';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [CommonModule, NzTableModule, NzImageModule],
})
export class SharedModule {}
