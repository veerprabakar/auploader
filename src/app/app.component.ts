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

  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }

  //this.toastr.sucess('This toast will dismiss in 10 seconds.', null, {toastLife: 10000});
}
