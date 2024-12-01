import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { ICustomer } from '../../../interfaces/customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  customer: ICustomer | null = null;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.customerService.getCustomer(id).subscribe(
      (customer) => (this.customer = customer)
    );
    console.log(this.customer)
  }
}
