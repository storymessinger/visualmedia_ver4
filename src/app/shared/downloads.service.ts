import { Downloads } from './mock/mock-downloads';
import { Injectable } from '@angular/core';

@Injectable()
export class DownloadService {


  constructor() { }

  getDownloads ():any {
    return Downloads;
  }

}
