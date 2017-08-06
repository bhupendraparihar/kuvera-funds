import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-new-purchase',
  template: `
    <section>
      <input type="text" [(ngModel)]="purchase.fund"/>
      <input type="text" [(ngModel)]="purchase.date"/>
      <input type="text" [(ngModel)]="purchase.amount"/>
      
      <button md-button (click)="getPurchaseData()">Add</button>
    </section>
  `,
  styleUrls: ['./new-purchase.component.scss']
})
export class NewPurchaseComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  purchase: Purchase = { fund: '', date: '', amount: 0};

  getPurchaseData() : void {
    console.log(this.purchase.fund + '' + this.purchase.date + '' + this.purchase.amount);
    this._purchaseService.addNewPurchase({ fund: this.purchase.fund , date: this.purchase.date, amount: this.purchase.amount});
  }

  constructor(private _purchaseService: PurchaseService) { }

  ngOnInit() {
  }

}
