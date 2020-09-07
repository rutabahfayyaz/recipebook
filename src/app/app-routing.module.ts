import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';





const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {path:'recipes', loadChildren:'./recipes/recipes.module#RecipesModule'},
  {path:'shopping-list', loadChildren:'./shopping-list/shoppinglist.module#ShoppingListModule'},
  {path:'auth',loadChildren:'./auth/auth-module#authModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
