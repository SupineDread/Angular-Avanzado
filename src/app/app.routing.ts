import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

//importar componentes
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeeperComponent } from './components/keeper/keeper.component'; 
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';

const appRoutes: Routes = [
    //{path: '', component: HomeComponent}, 
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'animals', component: AnimalsComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'keepers', component: KeeperComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent}, 
    {path: 'profile', component: ProfileEditComponent},
    {path: 'animal/:id', component: AnimalDetailComponent},
    {path: '**', component: HomeComponent}
]

export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)