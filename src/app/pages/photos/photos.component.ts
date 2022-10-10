import { Component, OnInit } from '@angular/core';
import { ApiService, DataItem } from 'src/app/services/api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PostsComponent } from '../posts/posts.component';

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
      compare: (a: DataItem, b: DataItem) => a.title.localeCompare(b.title),
      priority: 2,
    },
    {
      title: 'Url',
      compare: null,
      priority: false,
    },
  ];

  constructor(
    private apiService: ApiService,
    private nzModalService: NzModalService
  ) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.apiService.getPhotos().subscribe((photos) => {
      console.log(photos);
      this.photos = photos;
    });
  }

  createModal(title: string): void {
    this.nzModalService.create({
      nzTitle: title,
      nzContent: PostsComponent,
      nzClosable: true,
      nzWidth: '90%',
      nzOnOk: () => new Promise((resolve) => setTimeout(resolve, 1000)),
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
