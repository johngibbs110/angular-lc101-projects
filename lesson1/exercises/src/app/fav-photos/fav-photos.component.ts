import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos!';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.insider.com/5e738407c4854038ea514a61?width=600&format=jpeg&auto=webp';
  image3 = 'https://img2.chinadaily.com.cn/images/202003/20/5e742b67a3101282065fa8ce.jpeg';

  constructor() { }

  ngOnInit() {
  }

}