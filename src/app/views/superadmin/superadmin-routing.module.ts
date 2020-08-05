import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListetablissementComponent } from './listetablissement/listetablissement.component';
import {UpdateetablissementComponent} from './updateetablissement/updateetablissement.component'


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Administration',
        },
        children: [
                    {
                        path: 'listetablissement',
                        component: ListetablissementComponent,
                        data: {
                            title: 'List listetablissement'
                        }
                    },
                    {
                        path: 'updateetablissement/:id',
                        component: UpdateetablissementComponent,
                        data: {
                            title: 'Update Etablissement'
                        }
                    },
                    // {
                    //     path: 'updatesociete/:id',
                    //     component: UpdatesocieterComponent,
                    //     data: {
                    //         title: 'Update Societé'
                    //     }
                    // },
                    // {
                    //     path: 'adduser',
                    //     component: AdduserComponent,
                    //     data: {
                    //         title: 'Add User'
                    //     }

                    // },
                    // {
                    //     path: 'listuser',
                    //     component: ListUSERComponent,
                    //     data: {
                    //         title: 'List User'
                    //     }

                    // },
                    // {
                    //     path: 'updateuser/:id',
                    //     component: UpdateUserComponent,
                    //     data: {
                    //         title: 'Update User'
                    //     }

                    // },
                    // {
                    //     path: 'activity/addactivity',
                    //     component: AddActivityComponent,
                    //     data: {
                    //         title: 'Add Activity'
                    //     }
                    // },
                    // {
                    //     path: 'activity/listactivity',
                    //     component: ListActivityComponent,
                    //     data: {
                    //         title: 'List Des Activity'
                    //     }
                    // },
                    // {
                    //     path: 'activity/updateactivity/:id',
                    //     component: UpdateActivityComponent,
                    //     data: {
                    //         title: 'Update Activity'
                    //     }
                    // },
                ],
            },


        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
