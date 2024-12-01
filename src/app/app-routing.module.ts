import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers/customers.component';
import { CreateCustomerComponent } from './pages/create-customer/create-customer/create-customer.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail/customer-detail.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer/edit-customer.component';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent },
  { path:"customers/create",component: CreateCustomerComponent},
  { path: 'customers/:id', component: CustomerDetailComponent },
  { path: 'customers/:id/edit', component: EditCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
