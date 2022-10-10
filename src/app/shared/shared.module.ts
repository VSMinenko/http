import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CommonModule,
    NzTableModule,
    NzImageModule,
    NzModalModule,
    NzPopoverModule,
    NzButtonModule,
  ],
})
export class SharedModule {}
