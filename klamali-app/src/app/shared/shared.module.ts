import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { AccountComponent } from './auth/account/account.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, AccountComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AuthComponent, AccountComponent],
})
export class SharedModule {}
