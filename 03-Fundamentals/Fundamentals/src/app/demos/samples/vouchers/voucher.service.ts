import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voucher } from './vouchers.model';
import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/internal/operators/delay';

@Injectable()
export class VouchersService {
  constructor(private http: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>(environment.vouchers).pipe(delay(300));
  }
}
