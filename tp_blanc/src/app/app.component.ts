import {
  Component,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnInit,
  Pipe,
  PipeTransform,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoutonsComponent } from "./bouton";
import { AsyncPipe, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { ChuckService } from './chuck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [BoutonsComponent, JsonPipe],
})
export class AppComponent {
  compteur = signal(0);



  nom = signal('Payet');
  prenom = signal('Daniel');
  age = signal(0);

  // complet = computed(
  //   () => `${this.nom()} ${this.prenom()}, tu as ${this.age()}`
  // );
  complet = computed(() => `${this.user().nom} ${this.user().prenom}, tu as ${this.user().age}`)

  user = signal({
    nom: 'payet',
    prenom: 'daniel',
    age: 0,
  });

  constructor() {
    // setInterval(() => {
    //   this.age.update((a) => a + 1);
    // }, 250);
    setInterval(() => {
      this.user.update(u => {
        u.age += 1;
        return { ...u };
      });
    }, 500);
  }

  chuck = toSignal(inject(ChuckService).getFact());
}
