import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { IButton, ICONS } from 'src/app/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hex-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.scss']
})
export class PostFooterComponent implements OnInit, AfterContentChecked {
  @Input() likeCount: number;
  @Input() commentsCount: number;
  @Output() likeButtonClicked = new EventEmitter();
  @Output() commentButtonClicked = new EventEmitter();

  likeBtnConfig: IButton = {
    icon: ICONS.like
  };
  commentBtnConfig: IButton = {
    icon: ICONS.comment
  };

  constructor(
    private translate: TranslateService) { }

  ngOnInit() {
    this.setLikeBtnText();
    this.setCommentText();
  }

  ngAfterContentChecked() {
    this.setCommentText();
  }

  setLikeBtnText() {
    this.likeBtnConfig.text = this.likeCount > 0 ? `${this.likeCount}` : '';
  }
  setCommentText() {
    this.translate.get('common.buttons.comment').subscribe(data => {
      this.commentBtnConfig.text = `${data}${this.commentsCount > 0 ? ` - ${this.commentsCount}` : ''}`;
    });
  }
  likeClicked() {
    this.likeCount++;
    this.setLikeBtnText();
    this.likeButtonClicked.emit();
  }
}
