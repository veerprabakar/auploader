import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppUploader } from './uploader/uploader';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

// Material and animation :
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatProgressBarModule } from '@angular/material';

// Toasty :
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

@NgModule({
  declarations: [
    AppUploader,
    FileDropDirective,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressBarModule,
    ToastModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppUploader]
})
export class AppModule { }
