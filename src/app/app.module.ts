import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ParcDetailsPage } from '../pages/parc-details/parc-details';
import { DetailsRootPage } from '../pages/details-root/details-root';
import { ReviewsRootPage } from '../pages/reviews-root/reviews-root';
import { UpdateParcPage } from '../pages/update-parc/update-parc';
import { FirstVisitPage } from '../pages/first-visit/first-visit';
import { AddReviewPage } from '../pages/add-review/add-review';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { Geolocation } from '@ionic-native/geolocation';

import {HttpModule,Http} from '@angular/http';
import {TranslateModule} from 'ng2-translate';
import { TranslateLoader, TranslateStaticLoader } from "ng2-translate/src/translate.service";
import { AngularSplitModule } from 'angular-split';
import { StarRatingModule } from 'angular-star-rating';
import { AuthService } from '../providers/auth-service/auth-service';
import { MapService } from '../providers/map-service/map-service';
import { IonicPageModule } from 'ionic-angular';

import { GoogleMapsClusterProvider } from '../providers/google-maps-cluster/google-maps-cluster';
import { OrderByDistancePipe } from '../pipes/order-by-distance/order-by-distance';

export const firebaseConfig = {
	apiKey: "AIzaSyBr7eaeJLc7iosJIBTBTmayxLeN9BvBJ48",
  	authDomain: "parcmap.firebaseapp.com",
  	databaseURL: "https://parcmap.firebaseio.com",
  	storageBucket: "parcmap.appspot.com"
};
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	ParcDetailsPage,
	DetailsRootPage,
	ReviewsRootPage,
  UpdateParcPage,
  FirstVisitPage, 
  AddReviewPage,
    OrderByDistancePipe
  ],
  imports: [
	  BrowserModule,
	  AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularSplitModule,
    IonicPageModule.forChild(DetailsRootPage),
    IonicPageModule.forChild(ReviewsRootPage),
    IonicPageModule.forChild(UpdateParcPage),
  	AngularFireDatabaseModule,
  	HttpModule,
  	StarRatingModule,
    IonicPageModule.forChild(ParcDetailsPage),
  	StarRatingModule.forRoot(),
      TranslateModule.forRoot({
              provide: TranslateLoader,
              useFactory: createTranslateLoader,
              deps: [Http]
          })  ],
  	  bootstrap: [IonicApp],
  	  entryComponents: [
  		  MyApp,
        HomePage,
        ListPage,
    	  ParcDetailsPage,
    	  DetailsRootPage,
    	  ReviewsRootPage,
        UpdateParcPage,
        FirstVisitPage,
        AddReviewPage,

  	  ],
	 exports: [
        TranslateModule,
        DetailsRootPage,
        ParcDetailsPage,
        ReviewsRootPage,
        UpdateParcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TranslateModule,
    AuthService,
    MapService,
	  Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GoogleMapsClusterProvider
  ]
})
export class AppModule {}
