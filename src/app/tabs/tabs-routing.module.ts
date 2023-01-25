import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'mapa',
        loadChildren: () => import('../mapa/mapa.module').then(m => m.MapaPageModule)
      },
      {
        path: 'buho-principal/:text',
        loadChildren: () => import('../buho-principal/buho-principal.module').then(m => m.BuhoPrincipalPageModule)
      },
      {
        path: 'mikel-urdangarin-azalpena',
        loadChildren: () => import('../mikel-urdangarin-azalpena/mikel-urdangarin-azalpena.module').then(m => m.MikelUrdangarinAzalpenaPageModule)
      },
      {
        path: 'andres-espinosa-azalpena',
        loadChildren: () => import('../andres-espinosa-azalpena/andres-espinosa-azalpena.module').then(m => m.AndresEspinosaAzalpenaPageModule)
      },
      {
        path: 'nagelen-eskultura-azalpena',
        loadChildren: () => import('../nagelen-eskultura-azalpena/nagelen-eskultura-azalpena.module').then(m => m.NagelenEskulturaAzalpenaPageModule)
      },
      {
        path: 'lara-izaguirre-azalpena',
        loadChildren: () => import('../lara-izaguirre-azalpena/lara-izaguirre-azalpena.module').then(m => m.LaraIzaguirreAzalpenaPageModule)
      },
      {
        path: 'udabarri-dantza-taldea-azalpena',
        loadChildren: () => import('../udabarri-dantza-taldea-azalpena/udabarri-dantza-taldea-azalpena.module').then(m => m.UdabarriDantzaTaldeaAzalpenaPageModule)
      },
      {
        path: 'emakumeen-espetxea-azalpena',
        loadChildren: () => import('../emakumeen-espetxea-azalpena/emakumeen-espetxea-azalpena.module').then(m => m.EmakumeenEspetxeaAzalpenaPageModule)
      },
      {
        path: 'haizetara-azalpena',
        loadChildren: () => import('../haizetara-azalpena/haizetara-azalpena.module').then(m => m.HaizetaraAzalpenaPageModule)
      },
      {
        path: 'tab2-jokua',
        loadChildren: () => import('../tab2-jokua/tab2-jokua.module').then(m => m.Tab2JokuaPageModule)
      },
      {
        path: 'tab3-jokua',
        loadChildren: () => import('../tab3-jokua/tab3-jokua.module').then(m => m.Tab3JokuaPageModule)
      },
      {
        path: 'tab4-jokua',
        loadChildren: () => import('../tab4-jokua/tab4-jokua.module').then(m => m.Tab4JokuaPageModule)
      },
      {
        path: 'tab5-jokua',
        loadChildren: () => import('../tab5-jokua/tab5-jokua.module').then(m => m.Tab5JokuaPageModule)
      },
      {
        path: 'tab4-jokua2',
        loadChildren: () => import('../tab4-jokua2/tab4-jokua2.module').then(m => m.Tab4Jokua2PageModule)
      },
      {
        path: 'tab5-jokua2',
        loadChildren: () => import('../tab5-jokua2/tab5-jokua2.module').then(m => m.Tab5Jokua2PageModule)
      },
      {
        path: 'tab6-jokua',
        loadChildren: () => import('../tab6-jokua/tab6-jokua.module').then(m => m.Tab6JokuaPageModule)
      },
      {
        path: 'tab7-jokua',
        loadChildren: () => import('../tab7-jokua/tab7-jokua.module').then(m => m.Tab7JokuaPageModule)
      },
      {
        path: 'tab8-jokua',
        loadChildren: () => import('../tab8-jokua/tab8-jokua.module').then(m => m.Tab8JokuaPageModule)
      },

      

      {
        path: '',
        redirectTo: '/tabs/mapa',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/mapa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
