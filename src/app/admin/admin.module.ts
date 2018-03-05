import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from "./components/main/main.component";
import { EditComponent } from "./components/edit/edit.component";
import { ListComponent } from "./components/list/list.component";
import { AddComopnent } from "./components/add/add.component";

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [
        MainComponent, 
        EditComponent, 
        AddComopnent, 
        ListComponent
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

    ]
})

export class AdminModule {}