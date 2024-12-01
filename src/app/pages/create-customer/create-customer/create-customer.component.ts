import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { ICustomer } from '../../../interfaces/customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent {
  customer: Partial<ICustomer> = {
    name: '',
    email: '',
    phone: '',
  };

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.customerService.createCustomer(this.customer as ICustomer).subscribe(() => {
      this.router.navigate(['/customers']);
    });
  }
}
