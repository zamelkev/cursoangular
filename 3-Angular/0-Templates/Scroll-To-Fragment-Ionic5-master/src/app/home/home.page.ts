import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  goToArticleDetailPage() {
    this.router.navigate(['/articles/3'], {
      queryParams: {
        title: 'Ionic 5'
      },
      fragment: '4'
    });
  }

}
