import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AppComponent} from './app.component';
import {mainReducer} from './state-management/reducers/main-reducer';
import {MainEffects} from './state-management/effects/main-effects';
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyCG6v_5Gv0PR0bfitaYjjL5-vkoVCKx8k4',
  authDomain: 'tutsplus-products.firebaseapp.com',
  databaseURL: 'https://tutsplus-products.firebaseio.com',
  storageBucket: 'tutsplus-products.appspot.com',
  messagingSenderId: '94058140695'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({mainReducer}),
    EffectsModule.run(MainEffects),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
