import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'buho-principal',
    loadChildren: () => import('./buho-principal/buho-principal.module').then( m => m.BuhoPrincipalPageModule)
  },
  {
    path: 'mikel-urdangarin-azalpena',
    loadChildren: () => import('./mikel-urdangarin-azalpena/mikel-urdangarin-azalpena.module').then( m => m.MikelUrdangarinAzalpenaPageModule)
  },
  {
    path: 'andres-espinosa-azalpena',
    loadChildren: () => import('./andres-espinosa-azalpena/andres-espinosa-azalpena.module').then( m => m.AndresEspinosaAzalpenaPageModule)
  },
  {
    path: 'nagelen-eskultura-azalpena',
    loadChildren: () => import('./nagelen-eskultura-azalpena/nagelen-eskultura-azalpena.module').then( m => m.NagelenEskulturaAzalpenaPageModule)
  },
  {
    path: 'lara-izaguirre-azalpena',
    loadChildren: () => import('./lara-izaguirre-azalpena/lara-izaguirre-azalpena.module').then( m => m.LaraIzaguirreAzalpenaPageModule)
  },
  {
    path: 'udabarri-dantza-taldea-azalpena',
    loadChildren: () => import('./udabarri-dantza-taldea-azalpena/udabarri-dantza-taldea-azalpena.module').then( m => m.UdabarriDantzaTaldeaAzalpenaPageModule)
  },
  {
    path: 'emakumeen-espetxea-azalpena',
    loadChildren: () => import('./emakumeen-espetxea-azalpena/emakumeen-espetxea-azalpena.module').then( m => m.EmakumeenEspetxeaAzalpenaPageModule)
  },
  {
    path: 'haizetara-azalpena',
    loadChildren: () => import('./haizetara-azalpena/haizetara-azalpena.module').then( m => m.HaizetaraAzalpenaPageModule)
  },
  {
    path: 'andres-espinosa-jokua',
    loadChildren: () => import('./andres-espinosa-jokua/andres-espinosa-jokua.module').then( m => m.AndresEspinosaJokuaPageModule)
  },
  {
    path: 'nagelen-eskultura-jokua',
    loadChildren: () => import('./nagelen-eskultura-jokua/nagelen-eskultura-jokua.module').then( m => m.NagelenEskulturaJokuaPageModule)
  },
  {
    path: 'mikel-urdangarin-jokua',
    loadChildren: () => import('./mikel-urdangarin-jokua/mikel-urdangarin-jokua.module').then( m => m.MikelUrdangarinJokuaPageModule)
  },
  {
    path: 'udabarri-dantza-taldea-jokua',
    loadChildren: () => import('./udabarri-dantza-taldea-jokua/udabarri-dantza-taldea-jokua.module').then( m => m.UdabarriDantzaTaldeaJokuaPageModule)
  },
  {
    path: 'emakumeen-espetxea-jokua',
    loadChildren: () => import('./emakumeen-espetxea-jokua/emakumeen-espetxea-jokua.module').then( m => m.EmakumeenEspetxeaJokuaPageModule)
  },
  {
    path: 'haizetara-jokua',
    loadChildren: () => import('./haizetara-jokua/haizetara-jokua.module').then( m => m.HaizetaraJokuaPageModule)
  },
  {
    path: 'lara-izaguirre-jokua2',
    loadChildren: () => import('./lara-izaguirre-jokua2/lara-izaguirre-jokua2.module').then( m => m.LaraIzaguirreJokua2PageModule)
  },
  {
    path: 'lara-izaguirre-jokua',
    loadChildren: () => import('./lara-izaguirre-jokua/lara-izaguirre-jokua.module').then( m => m.LaraIzaguirreJokuaPageModule)
  },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
