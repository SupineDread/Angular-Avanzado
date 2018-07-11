import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from "./components/main/main.component";
import { EditComponent } from "./components/edit/edit.component";
import { ListComponent } from "./components/list/list.component";
import { AddComopnent } from "./components/add/add.component";

import { AdminRoutingModule } from './admin-routing.module';

import { AdminGuard } from '../services/admin.guard';

import { userService } from '../services/user.service';

import { SearchPipe } from '../pipes/search.pipe';

@NgModule({
    declarations: [
        MainComponent, 
        EditComponent, 
        AddComopnent, 
        ListComponent, 
        SearchPipe
    ], 
    imports: [
        CommonModule, 
        FormsModule, 
        HttpModule, 
        AdminRoutingModule
    ], 
    exports: [
        MainComponent, 
        EditComponent, 
        AddComopnent, 
        ListComponent
    ], 
    providers: [
        AdminGuard,
        userService
    ]
})

export class AdminModule {}