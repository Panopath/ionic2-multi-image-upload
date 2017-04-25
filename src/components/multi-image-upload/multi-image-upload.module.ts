import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiImageUpload } from './multi-image-upload';

@NgModule({
  declarations: [
    MultiImageUpload,
  ],
  imports: [
    IonicPageModule.forChild(MultiImageUpload),
  ],
  exports: [
    MultiImageUpload
  ]
})
export class MultiImageUploadModule {}
