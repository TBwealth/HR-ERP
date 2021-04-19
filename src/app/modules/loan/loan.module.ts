import { AlertserviceService } from './../../_services/alertservice.service';
import { CommonServiceProxy } from 'app/_services/service-proxies';
import { AddUpdateLoanTypeServiceProxy, UpdateLoanRequestServiceProxy, SimulatePaymentServiceProxy, GetLoanSummaryServiceProxy, PostFullRepaymentServiceProxy, LoadRepaymentScheduleServiceProxy } from './../../_services/service-proxies';
import { LoanComponent } from './loan.component';
import { NbCardModule, NbCheckboxModule, NbSelectModule, NbToggleModule } from '@nebular/theme';
import { ThemeModule } from './../../@theme/theme.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { ProcessRequestComponent } from './process-request/process-request.component';
import { UpdateLoanComponent } from './update-loan/update-loan.component';
import { AllLoansComponent } from './all-loans/all-loans.component';


@NgModule({
  declarations: [LoanComponent, LoanRequestComponent, LoanTypeComponent, ProcessRequestComponent, UpdateLoanComponent, AllLoansComponent],
  imports: [
    CommonModule,
    LoanRoutingModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    NbCheckboxModule,
    NbSelectModule,
    NbToggleModule,
  ],

  providers: [
    AddUpdateLoanTypeServiceProxy,
    UpdateLoanRequestServiceProxy,
    CommonServiceProxy,
    AlertserviceService,
    LoadRepaymentScheduleServiceProxy,
    SimulatePaymentServiceProxy,
    GetLoanSummaryServiceProxy,
    PostFullRepaymentServiceProxy,
  ]
})
export class LoanModule { }