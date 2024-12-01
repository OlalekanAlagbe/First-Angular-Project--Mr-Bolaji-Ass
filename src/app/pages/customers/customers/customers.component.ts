// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-customers',
//   templateUrl: './customers.component.html',
//   styleUrl: './customers.component.css'
// })
// export class CustomersComponent {

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { ICustomer } from '../../../interfaces/customer';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css',
  ],
})
export class CustomersComponent implements OnInit {
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  searchTerm: string = '';
  filterField: string = 'name';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
    console.log(this.customers)
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      this.filteredCustomers = customers;
    });
  }

  filterCustomers(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredCustomers = this.customers.filter((customer) => {
      switch (this.filterField) {
        case 'name':
          return customer.name.toLowerCase().includes(term);
        case 'email':
          return customer.email.toLowerCase().includes(term);
        case 'username':
          return customer.username.toLowerCase().includes(term);
        case 'company':
          return customer.company.name.toLowerCase().includes(term);
        case 'city':
          return customer.address.city.toLowerCase().includes(term);
        default:
          return true;
      }
    });
  }

  deleteCustomer(id: number): void {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id).subscribe(() => {
        this.customers = this.customers.filter((c) => c.id !== id);
        this.filterCustomers();
      });
    }
  }
  trackByCustomerId(index: number, customer: ICustomer): number {
    return customer.id;
  }
}

