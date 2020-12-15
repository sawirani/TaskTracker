import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserCreatePopoverComponent } from './user-create-popover/user-create-popover.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersComponent, UserCreatePopoverComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsersModule { }
