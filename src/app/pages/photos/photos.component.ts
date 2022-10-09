import { Component, OnInit } from '@angular/core';
import { ApiService, DataItem } from 'src/app/services/api.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: DataItem[] = [];

  listOfColumn = [
    {
      title: 'id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 3,
    },
    {
      title: 'title',
      compare: null,
      priority: false,
    },
    {
      title: 'url',
      compare: null,
      priority: false,
    },
    {
      title: 'thumbnailUrl',
      compare: null,
      priority: false,
    },
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.api.getPhotos().subscribe((photos) => {
      console.log(photos);
      this.photos = photos;
    });
  }
}
