import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.apiUrl);
  }

  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${this.apiUrl}/${id}`);
  }

  createCustomer(customer: Omit<ICustomer, 'id'>): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.apiUrl, customer);
  }

  updateCustomer(id: number, customer: ICustomer): Observable<ICustomer> {
    return this.http.put<ICustomer>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}