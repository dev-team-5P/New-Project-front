import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListcandidatComponent } from './listcandidat/listcandidat.component';
import { AddcandidatComponent } from './addcandidat/addcandidat.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Administration',
        },
        children: [
                    {
                        path: 'listcandidat',
                        component: ListcandidatComponent,
                        data: {
                            title: 'List listetcandidat'
                        }
                    },
                    {
                        path: 'addcandidat',
                        component: AddcandidatComponent,
                        data: {
                            title: 'Add listetcandidat'
                        }
                    },
                    {
                        path: 'updatecandidat/:id',
                        component: UpdateCandidatComponent,
                        data: {
                            title: 'Update listetcandidat'
                        }
                    },
                ],
            },


        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtablissementRoutingModule { }
