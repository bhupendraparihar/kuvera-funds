import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase-list',
  template: `
    <table>
      <tr *ngFor="let purchase of purchaseList">
        <td>{{purchase.fund}}</td>
        <td>{{purchase.date}}</td>
        <td>{{purchase.amount}}</td>
      </tr>
    </table>
  `,
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {

  purchaseList: Purchase[] = [];

  constructor(private _purchaseService: PurchaseService) { }

  ngOnInit() {
    this.purchaseList = this._purchaseService.getAll();
  }

}
