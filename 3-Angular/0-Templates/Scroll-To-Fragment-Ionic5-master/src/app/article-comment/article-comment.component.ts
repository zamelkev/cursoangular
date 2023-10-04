import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss'],
})
export class ArticleCommentComponent implements OnInit {

  @Input() commentID;
  @Input() fragment;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      const element = document.querySelector('#ac_' + this.fragment);
      if (element != null) { element.scrollIntoView({ behavior: 'smooth'} ); }
    }, 500);
  }

}
