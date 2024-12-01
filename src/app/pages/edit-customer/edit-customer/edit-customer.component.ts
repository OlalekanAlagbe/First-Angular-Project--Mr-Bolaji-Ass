import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { ICustomer } from '../../../interfaces/customer';

@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: ICustomer | null = null;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customerService.getCustomer(id).subscribe(
      customer => (this.customer = customer)
    );
  }

  onSubmit(): void {
    if (this.customer) {
      this.customerService
        .updateCustomer(this.customer.id, this.customer)
        .subscribe(() => {
          this.router.navigate(['/customers']);
        });
    }
  }

  cancel(): void {
    this.router.navigate(['/customers']);
  }
}
