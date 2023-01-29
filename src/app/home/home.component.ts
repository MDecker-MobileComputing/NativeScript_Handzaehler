import { Component } from '@angular/core'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public zaehlerwert = 0;

  constructor() {
    // Use the component constructor to inject providers.
  }

  public onPlusButton() {

    this.zaehlerwert++;
  }

  public onMinusButton() {

    this.zaehlerwert--;
  }

}
