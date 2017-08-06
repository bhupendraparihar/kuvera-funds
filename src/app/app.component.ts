import { Component } from '@angular/core';
import { PurchaseService } from './purchase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PurchaseService]
})
export class AppComponent {
  title = 'app';
}
