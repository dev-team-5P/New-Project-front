// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CandidatRoutingModule } from './candidat-routing.module';
import { CandidatComponent } from './candidat.component';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    CandidatRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatOptionModule,
    MatTableModule,
    MatCardModule,
  ],
  declarations: [
    CandidatComponent,
  ],
})
export class CandidatModule { }
