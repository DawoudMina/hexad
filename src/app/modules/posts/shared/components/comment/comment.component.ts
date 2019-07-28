import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hex-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
