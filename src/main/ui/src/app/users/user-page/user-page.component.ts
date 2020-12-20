import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/app/models/user-roles';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: User = {
           baseSalary: '10000',
           email: "manager@manager",
           firstname: "manager",
           id: '2',
           lastname: "manager",
           password: "$2a$10$jO.ohWLoihLvSt/QDbzV5u3JY0sXbI2Nvn3DzHXMJTUdLhshjZ3x2",
           roles: [{id: 2, name: "ROLE_MODERATOR"}],
           username: "manager",
  }

  modelDate;
  modalRef: BsModalRef;
  form = {
    comment: '',
    bonus: 0
  };

  constructor(private modalService: BsModalService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.userService.getUser(params.id).subscribe(user => this.user = user);
    // });
  }

  checkUserBonus() {
    this.userService.getBonuses(this.user.id, this.modelDate.getMonth() + 1, this.modelDate.getFullYear()).subscribe(value => {
      console.log(value);
    });
  }

  onOpenCalendar(container) {
    container.monthSelectHandler = (event: any): void => {
    container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('month');
  }

  openBounsPopover(template): void {
    this.modalRef = this.modalService.show(template);
  }

  onSubmit() {
    this.userService.addBonus(this.user.id, this.form.comment, new Date(), this.form.bonus).subscribe(value => {
      this.closeBonusPopover();
    });
  }

  closeBonusPopover(): void {
    this.modalRef.hide();
  }

}
