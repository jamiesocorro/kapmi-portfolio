import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SafePipe } from 'src/assets/pipe/safeUrl.pipe';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [HeaderComponent, SafePipe],
})
export class HomeComponent implements OnInit {
  trustedDashboardUrl: SafeUrl;
  constructor(private _sanitizer: DomSanitizer) {
    this.trustedDashboardUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/watch?v=8-zQKcxXm7w'
    );
  }

  ngOnInit(): void {}

  getUrl(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://' + url + '/'
    );
  }
}
