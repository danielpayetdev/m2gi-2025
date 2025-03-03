import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-bouton',
  template: `<button (click)="appClick.emit()">{{texte()}}</button>`,
  styles: `
      button { padding: 1rem }
  `
})
export class BoutonComponent {
 texte = input.required<'-' | '+'>();
 appClick = output();
}

@Component({
  selector: 'app-boutons',
  template: `
    <app-bouton texte="-" (appClick)="onMoins()" />
    <app-bouton texte="+" (appClick)="onPlus()" />
  `,
  imports: [BoutonComponent]
})
export class BoutonsComponent {
  valeur = model.required<number>();

  onMoins(): void {
    this.valeur.update(v => v - 1 );
  }

  onPlus(): void {
    this.valeur.update(v => v + 1);
  }
}


