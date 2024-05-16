import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss',
})
export class ViewPostComponent {
  postId = this.activatedRoute.snapshot.params['id'];
  postData: any;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private matSnackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    console.log(this.postId);
    this.getPostById();
  }

  getPostById() {
    this.postService.getPostById(this.postId).subscribe(
      (res) => {
        this.postData = res;
        console.log(res);
      },
      (error) => {
        this.matSnackBar.open('something went wrong', 'Ok');
      },
    );
  }
}
