import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  createPopup(url, width, height) {
    const w = width;
    const h = height;
    const top = window.top.outerHeight / 2 + window.top.screenY - ( h / 2);
    const left = window.top.outerWidth / 2 + window.top.screenX - ( w / 2);
    const popup = window.open(url, '_blank', `left=${left},top=${top},toolbar=No,location=No,scrollbars=no,status=No,resizable=no`);
    popup.resizeTo(w, h);
  }
}
