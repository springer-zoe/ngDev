import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataStoreService } from '../data-store-service';

@Component({
  selector: 'app-kpi-bar',
  templateUrl: './kpi-bar.component.html',
  styleUrls: ['./kpi-bar.component.scss'],
})
export class KpiBarComponent implements OnInit {
  runningSum$ = this.dataStore
    .getAllVouchers()
    .pipe(map((vs) => vs.reduce((runningSum, v) => runningSum + v.Amount, 0)));

  constructor(private dataStore: DataStoreService) {}

  ngOnInit() {
    // this.runningSum$ = this.dataStore
    //   .getAllVouchers()
    //   .pipe(map(vs => vs.reduce((runningSum, v) => runningSum + v.Amount, 0)));
    // JS Code
    // this.dataStore.getAllVouchers().subscribe((vouchers: Voucher[]) => {
    //   this.runningSum = 0;
    //   vouchers.forEach(item => {
    //     if (this.log) {
    //       console.log(
    //         `Adding ${item.Amount}€ from voucher with text '${
    //           item.Text
    //         }' to current Total ${this.runningSum} - New Total: ${item.Amount +
    //           this.runningSum}`
    //       );
    //     }
    //     this.runningSum += item.Amount;
    //   });
    // });
  }
}
