import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private data: string[] = ['foo', 'bar'];
  
  constructor() { }
  
  doSomething(): any {
   return this.data;
  }
}
