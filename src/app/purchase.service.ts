import { Injectable } from '@angular/core';
import { Purchase } from './purchase';

@Injectable()
export class PurchaseService {

  purchaseList: Purchase[] = [
      { fund: 'ABC', date: '22/09/2016', amount: 10000},
      { fund: 'ABC', date: '22/09/2016', amount: 10000},
      { fund: 'ABC', date: '22/09/2016', amount: 10000},
      { fund: 'ABC', date: '22/09/2016', amount: 10000}
    ];
  constructor() { }

  getAll() : Purchase[] {
    return this.purchaseList;
  }

  addNewPurchase(purchase: Purchase) : void {
    this.purchaseList.push(purchase);
  }

}
