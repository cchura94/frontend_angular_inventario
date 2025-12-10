import { Routes } from '@angular/router';
import { Inicio } from './web/inicio/inicio';
import { Nosotros } from './web/nosotros/nosotros';
import { Galeria } from './web/galeria/galeria';
import { Profile } from './admin/profile/profile';
import { Users } from './admin/users/users';
import { authGuardGuard } from './core/guards/auth-guard-guard';
import { WebLayout } from './layout/web-layout/web-layout';
import { CategoriaComponent } from './admin/inventario/categoria/categoria';

export const routes: Routes = [
    {
        path: '',
        component: WebLayout,
        children: [
            { path: '', component: Inicio },
            { path: 'nosotros', component: Nosotros },
            { path: 'galeria', component: Galeria },
            { path: 'auth', loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule) },
        ]
    },
    { path: 'admin/perfil', component: Profile, canActivate: [authGuardGuard] },
    { path: 'admin/users', component: Users, canActivate: [authGuardGuard] },
    { path: 'admin/categoria', component: CategoriaComponent, canActivate: [authGuardGuard] }


];
