import { Injectable } from '@angular/core';
import { IPost, IUser } from 'src/app/shared/interfaces';
import { postsMock } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  allPosts: IPost[] = postsMock;
  currentUser: IUser = {
    fullName: 'Mina Dawoud',
    email: '@hexad'
  };

  constructor() { }

  getAllPosts() {
    return this.allPosts.sort((postA, postB) => {
      return postB.time.getTime() - postA.time.getTime();
    });
  }

  addPost(postContent: string) {
    const newPost: IPost = {
      id: this.getNextId(),
      content: postContent,
      owner: this.currentUser,
      comments: [],
      likeCount: 0,
      time: new Date(),
    };
    this.allPosts.push(newPost);
  }

  addComment(commentContent: string, currentPost: IPost) {
    currentPost.comments.push({content: commentContent});
  }

  private getNextId() {
    if (this.allPosts.length) {
      const maxIdPost = this.allPosts.sort(((postA, postB) => postA.id > postB.id ? 1 : 0))[0];
      return maxIdPost.id + 1;
    }
    return 1;
  }
}
