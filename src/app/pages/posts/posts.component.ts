import { Component, OnInit } from '@angular/core';
import { ApiService, IPosts } from 'src/app/services/api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: IPosts[] = [];

  listOfColumn = [
    {
      title: 'id',
      compare: (a: IPosts, b: IPosts) => a.id - b.id,
      priority: 3,
    },
    {
      title: 'userId',
      compare: (a: IPosts, b: IPosts) => a.userId - b.userId,
      priority: 2,
    },
    {
      title: 'url',
      compare: null,
      priority: false,
    },
    {
      title: 'Body',
      compare: null,
      priority: false,
    },
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.api.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });
  }
}
