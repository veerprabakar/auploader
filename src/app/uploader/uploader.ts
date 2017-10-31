import { Component, ElementRef, Renderer, Input, HostListener, HostBinding, OnInit, ViewContainerRef } from '@angular/core';
import { FileUploader, FileUploaderOptions, FileSelectDirective } from 'ng2-file-upload';

import { MatButtonModule } from '@angular/material';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './uploader.html',
  styleUrls: ['./uploader.css']
})
export class AppUploader {
  toastTime: any = 2500;
  title = 'app';
  public uploader =  new FileUploader({url: 'http://localhost:56155/api/UploadFileToS3', method: 'POST'});

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);

      // on error:
      this.uploader.onErrorItem = (item: any, response: string, status: number, headers: any) => {
        console.log(headers);
        this.toastr.error(item.file.name, 'Upload Failed !', this.GetToastOptions());
      };

      // on success:
      this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
        console.log(item);
        this.toastr.success(item.file.name, 'Upload Success.', this.GetToastOptions() );
      };
  }

  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  // global options for toast
  public GetToastOptions(): any {
      return ({
        toastLife: this.toastTime,
        showCloseButton: true,
        positionClass: 'toast-bottom-right',
        animate: 'flyRight',
        enableHTML: true
      });
  }
}
