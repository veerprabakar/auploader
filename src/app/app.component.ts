import { Component, ElementRef, Renderer, Input, HostListener, HostBinding, OnInit, ViewContainerRef } from '@angular/core';
import { FileUploader, FileUploaderOptions, FileSelectDirective } from 'ng2-file-upload';

import { MatButtonModule } from '@angular/material';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);

      //on error:
      this.uploader.onErrorItem = (item: any, response: string, status: number, headers: any) => {
        console.log(headers);
        this.toastr.error(item.file.name, "Upload Failed !", {toastLife: 2000});
      };

      //on success:
      this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any) => {
        console.log(item);
        this.toastr.success(item.file.name, "Upload Success.", {toastLife: 2000});
      };
  }

  title = 'app';
  public uploader =  new FileUploader(
    {
      url: 'http://localhost:56155/api/UploadFile',
      method: 'POST'
      //,
      // headers: [{
      //   name: 'Access-Control-Allow-Origin',
      //   value: 'http://localhost:56155/'}]
    }
  );
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
