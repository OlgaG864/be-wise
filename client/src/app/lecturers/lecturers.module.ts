import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturersComponent } from './lecturers/lecturers.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LecturersComponent, ProfileCardComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [LecturersComponent, ProfileCardComponent],
})
export class LecturersModule {}
