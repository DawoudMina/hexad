import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces';
import { PostsService } from './shared/posts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UtilitiesService } from 'src/app/core';

@Component({
  selector: 'hex-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  allPosts: IPost[];
  showCommentsSection: boolean;
  currentPost: IPost;
  searchForm: FormGroup;

  constructor(
    private postsService: PostsService,
    private utility: UtilitiesService,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
      this.searchForm = this.fb.group({
        searchField: ['']
      });

      this.route.data.subscribe(i18Data => this.utility.datetimeTexts = i18Data.datetimeKeys);
    }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.allPosts = this.postsService.getAllPosts();
  }

  increaseLikes(post: IPost) {
    post.likeCount++;
  }

  addNewPost(content: string) {
    this.postsService.addPost(content);
    this.loadPosts();
  }

  addNewComment(content: string) {
    this.postsService.addComment(content, this.currentPost);
  }

  showOrHideComments(post: IPost) {
    this.currentPost = this.currentPost === post ? null : post;
  }
}
