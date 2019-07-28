import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { IButton, ICONS } from 'src/app/core';

@Component({
  selector: 'hex-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss']
})
export class CreateCommentComponent implements OnInit {
  @Output() commentAdded = new EventEmitter<string>();

  @ViewChild('content', {static: false}) contentField: ElementRef;

  btnConfig: IButton = {
    text: 'common.buttons.send',
    icon: ICONS.send,
    extraCssClasses: 'btn-send'
  };

  constructor() { }

  ngOnInit() {
  }

  addComment(content: string) {
    if (content) {
      this.commentAdded.emit(content);
      this.contentField.nativeElement.value = '';
    }
  }
}
