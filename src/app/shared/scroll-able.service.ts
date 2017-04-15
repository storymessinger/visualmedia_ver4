import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScrollAbleService {

  private subject = new Subject<any>();

  constructor() { }

  setScroll(name:string) {
//   sendMessage(message: string) {
      this.subject.next(name);
  }

  clearMessage() {
      this.subject.next();
  }

  getScroll(): Observable<any>{
      return this.subject.asObservable();
  }

}
