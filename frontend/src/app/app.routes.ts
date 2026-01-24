import { Routes } from '@angular/router';
import { PersonList } from './components/person-list/person-list';
import { PersonForm } from './components/person-form/person-form';
import { PersonIdealWeight } from './components/person-ideal-weight/person-ideal-weight';

export const routes: Routes = [
    { path: '', component: PersonList },
    { path: 'novo', component: PersonForm },
    { path: 'editar/:id', component: PersonForm },
    { path: 'peso-ideal/:id', component: PersonIdealWeight }


];
