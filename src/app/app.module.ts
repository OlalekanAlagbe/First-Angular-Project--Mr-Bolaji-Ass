import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './pages/customers/customers/customers.component';
import { CreateCustomerComponent } from './pages/create-customer/create-customer/create-customer.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail/customer-detail.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer/edit-customer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CustomersComponent,HttpClientModule,CreateCustomerComponent,CustomerDetailComponent,EditCustomerComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
