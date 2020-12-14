import { Component, OnInit, OnChanges, Input, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-create-popover',
  templateUrl: './user-create-popover.component.html',
  styleUrls: ['./user-create-popover.component.css']
})
export class UserCreatePopoverComponent implements OnInit, OnChanges {

  @ViewChild('template') popover: any;

  @Input() mode: 'create' | 'edit';
  @Input() visible = false;

  @Output() closeModal = new EventEmitter();

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  modalRef: BsModalRef;

  constructor(private authService: AuthService,
              private modalService: BsModalService) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  closePopover() {
    this.closeModal.emit();
  }

  onSubmit() {
    const user = {
      username: this.form.username,
      email: this.form.email,
      firstname: this.form.firstname,
      lastname: this.form.lastname,
      password: this.form.password,
      role: this.form.checkbox ? ['mod'] : ''
    };
    this.authService.register(user).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.closeModal.emit();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onClosePopover(): void {
    this.modalRef.hide();
  }

}
