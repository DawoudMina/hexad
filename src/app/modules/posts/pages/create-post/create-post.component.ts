import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IButton } from 'src/app/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hex-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  @Output() postAdded = new EventEmitter<string>();
  btnConfig: IButton = {
    text: 'common.buttons.post'
  };

  postForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      'post-content': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addPost() {
    if (this.postForm.valid) {
      const postContent = this.postForm.controls['post-content'].value;
      this.postAdded.emit(postContent);
      this.postForm.reset();
    }
  }
}
