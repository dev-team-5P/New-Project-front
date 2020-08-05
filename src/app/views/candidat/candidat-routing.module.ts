import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatComponent } from './candidat.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Administration',
        },
        children: [
                    {
                        path: 'comptecandidat',
                        component: CandidatComponent,
                        data: {
                            title: 'Setting compte'
                        }
                    },
                ],
            },


        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatRoutingModule { }
