import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-front-facade',
  templateUrl: './front-facade.component.html',
  styleUrls: ['./front-facade.component.css']
})
export class FrontFacadeComponent {
  // private _album: Array<any> = [];
  // constructor(private _lightbox: Lightbox) {
  //   for (let i = 1; i <= 4; i++) {
  //     const src = 'src/assets/images/FrontFacade/entrance' + i + '.jpeg';
  //     const caption = 'Image ' + i + ' caption here';
  //     const thumb = 'src/assets/images/FrontFacade/entrance' + i + '.jpg';
  //     const album = {
  //        src: src,
  //        caption: caption,
  //        thumb: thumb
  //     };

  //     this._album.push(album);
  //   }
  // }

  // open(index: number): void {
  //   // open lightbox
  //   this._lightbox.open(this._album, index);
  // }

  // close(): void {
  //   // close lightbox programmatically
  //   this._lightbox.close();
  // }

  public frontFacade: Array<any> = [];
  constructor(private _lightbox: Lightbox) {
    for (let i = 1; i <= 22; i++) {
      const src = 'assets/images/FrontFacade/entrance' + i + '.jpeg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = 'assets/images/FrontFacade/entrance' + i + '.jpeg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this.frontFacade.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.frontFacade, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
