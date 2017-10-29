import { Component, ElementRef, Renderer, Input, HostListener, HostBinding, OnInit } from '@angular/core';
import { FileUploader, FileUploaderOptions, FileSelectDirective } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public uploader =  new FileUploader(
    {
      url: 'http://localhost:56155/api/UploadFile',
      method: 'POST',
      headers: [{ name: 'Access-Control-Allow-Origin', value: 'http://localhost:56155/'}]
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
