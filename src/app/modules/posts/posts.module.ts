import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { PostsComponent } from './posts.component';
import { PostHeaderComponent } from './shared/components/post-header/post-header.component';
import { PostBodyComponent } from './shared/components/post-body/post-body.component';
import { PostFooterComponent } from './shared/components/post-footer/post-footer.component';
import { CommentComponent } from './shared/components/comment/comment.component';
import { CreateCommentComponent } from './pages/create-comment/create-comment.component';
import { SharedModule } from 'src/app/shared';

const COMPONENTS = [
  CreatePostComponent,
  PostsComponent,
  PostHeaderComponent,
  PostBodyComponent,
  PostFooterComponent,
  CommentComponent,
  CreateCommentComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PostsModule { }
