
import { Routes, RouterModule } from '@angular/router';
import { ByNameComponent } from './card/pages/by-name/by-name.component';
import { ByAttributeComponent } from './card/pages/by-attribute/by-attribute.component';
import { ByRaceComponent } from './card/pages/by-race/by-race.component';

import { DetailCardComponent } from './card/pages/detail-card/detail-card.component';
import { ByCardsetComponent } from './card/pages/by-cardset/by-cardset.component';

import{ NgModule} from '@angular/core';

const routes: Routes = [
        {
            path: '',
            component: ByNameComponent,
            pathMatch: 'full'
        },
        {
            path: 'cardset',
            component: ByCardsetComponent

        },
        {
            path: 'attribute',
            component: ByAttributeComponent

        },
        {
            path:'race',
            component: ByRaceComponent
        },
        {
            path:'detail/:id',
            component: DetailCardComponent
        },
        {
            path:'**',
            redirectTo: ''
            

        }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)

    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule {}