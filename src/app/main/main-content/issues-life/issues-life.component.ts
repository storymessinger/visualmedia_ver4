import { PostsService } from '../../../shared/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issues-life',
  templateUrl: './issues-life.component.html',
  styleUrls: ['./issues-life.component.scss']
})
export class IssuesLifeComponent implements OnInit {

  posts: any = [];

  constructor(private postsService:PostsService) { 
  }

  ngOnInit() {
        // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }


}
