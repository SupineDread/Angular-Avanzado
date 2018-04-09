import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComopnent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

import { AdminGuard } from '../services/admin.guard';

const adminRoutes: Routes = [
    {
        path: 'admin-panel', component: MainComponent, canActivate: [AdminGuard], children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full' },
            { path: 'listado', component: ListComponent }, 
            { path: 'crear', component: AddComopnent },
            { path: 'editar', component: EditComponent }, 
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ], 
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule {

}