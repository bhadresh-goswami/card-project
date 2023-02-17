import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  posts = [
    {
      title:'image1',
      username:'bhadresh gosai',
      imageUrl:'assets/images/img (1).jpg',
      describe:'hi! this is image1 bhadresh gosai'
    },
    
    {
      title:'image2',
      username:'ramesh gosai',
      imageUrl:'assets/images/img (2).jpg',
      describe:'hi! this is image1 ramesh gosai'
    },
    
    {
      title:'image3',
      username:'darshan gosai',
      imageUrl:'assets/images/img (4).jpg',
      describe:'hi! this is image1 darshan gosai'
    },
    {
      title:'image4',
      username:'radhe gosai',
      imageUrl:'assets/images/img (3).jpg',
      describe:'hi! this is image1 radhe gosai'
    }
  ];

  ngOnInit(): void {

  }

}
