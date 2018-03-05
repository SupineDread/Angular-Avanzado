import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainEmailComponent } from './components/main-email/main-email.component';
import { MostrarEmailComponent } from './components/mostrar-email/mostrar-email.component';
import { GuardarEmailComponent } from './components/guardar-email/guardar-email.component';

//Decorador ngmodule para cargar los componentes y la configuracion de los modulos
@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        GuardarEmailComponent, 
        MostrarEmailComponent, 
        MainEmailComponent
    ],
    exports: [
        MainEmailComponent
    ]
})

export class ModuloEmailModule {}