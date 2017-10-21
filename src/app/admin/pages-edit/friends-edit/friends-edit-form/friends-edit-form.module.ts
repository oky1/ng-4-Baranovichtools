import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdFormFieldModule, MdInputModule, MdButtonModule } from '@angular/material';

// custom
import { FriendsEditFormComponent } from './friends-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdFormFieldModule,
    MdInputModule,
    MdButtonModule
  ],
  exports: [ FriendsEditFormComponent ],
  declarations: [ FriendsEditFormComponent ]
})
export class FriendsEditFormModule { }