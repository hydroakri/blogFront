import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
// export class HomeComponent {}
export class HomeComponent implements OnInit {
  posts!: any[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getAllPosts().subscribe(
      (response) => {
        this.posts = response;
      },
      (error) => {
        console.error('Fetching posts failed', error);
      },
    );
  }

  likePost(postId: number) {
    this.postService.likePost(postId).subscribe(
      (response) => {
        console.log('Post liked', response);
      },
      (error) => {
        console.error('Error liking post', error);
      },
    );
  }
}
