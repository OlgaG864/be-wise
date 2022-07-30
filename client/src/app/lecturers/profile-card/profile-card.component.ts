import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() lecture = {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    date: '',
    image: '',
  };
  constructor() {}

  ngOnInit(): void {}
  imagePath(image: string | null): string {
    return !image ? '' : `../../assets/images/${image}`;
  }
}
