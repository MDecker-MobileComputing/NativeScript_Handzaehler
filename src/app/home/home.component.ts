import { Component } from '@angular/core'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  /** Member-Variable, wird mit Interpolation auf UI dargestellt. */
  public zaehlerwert = 0;

  constructor() {
    console.log("Konstruktor wurde aufgerufen.");
  }

  /**
   * Event-Händler-Methode für Plus-Button.
   */
  public onPlusButton() {

    this.zaehlerwert++;
    console.log(`Zähler-Wert nach Plus: ${this.zaehlerwert}`);
  }

  /**
   * Event-Handler-Methode für Minus-Button.
   */
  public onMinusButton() {

    this.zaehlerwert--;
    console.log(`Zähler-Wert nach Minus: ${this.zaehlerwert}`);
  }

}
