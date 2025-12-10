import { Routes } from '@angular/router';
import { DragonBallList } from './personajes/dragon_ball/dragon-ball-list/dragon-ball-list';
import { DragonBallDetail } from './personajes/dragon_ball/dragon-ball-detail/dragon-ball-detail';
import { RickAndMortyList } from './personajes/rick_and_morty/rick-and-morty-list/rick-and-morty-list';
import { RickAndMortyDetail } from './personajes/rick_and_morty/rick-and-morty-detail/rick-and-morty-detail';
import { SimpsonList } from './personajes/simpson/simpson-list/simpson-list';
import { SimpsonDetail } from './personajes/simpson/simpson-detail/simpson-detail';
export const routes: Routes = [
  { path: 'dragonball', component: DragonBallList },
  { path: 'dragonball/:id', component: DragonBallDetail },
  { path: 'rickandmorty', component: RickAndMortyList },
  { path: 'rickandmorty/:id', component: RickAndMortyDetail },
  { path: 'simpsons', component: SimpsonList},
  { path: 'simpsons/:id', component: SimpsonDetail},
  { path: '**', redirectTo: 'rickandmorty', pathMatch: 'full' },
];
