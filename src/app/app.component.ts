import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public supportedLanguages: any[];
  constructor(private _translate: TranslateService) { }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Polish', value: 'pl' },
      { display: 'Russian', value: 'ru' }
    ];

    // set current langage
    this.selectLang('pl');
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  onChange(deviceValue) {
    this.selectLang(deviceValue);
  }

  selectLang(lang: string) {
    // set current lang;
    this._translate.use(lang);
  }
}
