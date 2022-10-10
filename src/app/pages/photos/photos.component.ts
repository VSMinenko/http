import { Component, OnInit } from '@angular/core';
import { ApiService, DataItem } from 'src/app/services/api.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent implements OnInit {
  photos: DataItem[] = [];
  isVisible = false;

  listOfColumn = [
    {
      title: 'id',
      compare: (a: DataItem, b: DataItem) => a.id - b.id,
      priority: 3,
    },
    {
      title: 'title',
      sortOrder: null,
      compare: (a: DataItem, b: DataItem) => a.title.localeCompare(b.title),
      priority: 2,
    },
    {
      title: 'Url',
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

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
