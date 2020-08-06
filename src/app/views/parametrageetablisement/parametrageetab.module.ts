import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ParametrageetablisementComponent } from './parametrageetablisement.component';
import { ParametrageetabRoutingModule } from './parametrageetab-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  imports: [
    ParametrageetabRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule,
    MatTableModule,
    MatCardModule,
    CommonModule,
    CollapseModule
  ],
  declarations: [ ParametrageetablisementComponent ]
})
export class ParametrageetabModule { }
