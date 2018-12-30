import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
// adding the name activates lazy loading
@IonicPage( { name: 'TabsPage' })
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'BeerPage';
  tab3Root = 'AboutPage';
  tab4Root = 'ContactPage';

  constructor() {

  }
}
