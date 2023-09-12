import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
      title: "Onix",
      description: "Le plus câlin",
      imageUrl: "https://cdn.pixabay.com/photo/2020/11/26/15/06/cat-5779248_1280.jpg",
      createdDate: new Date(),
      snaps: 1,
      location: "Port Marianne"
      },
      {
        title: "Saphir",
        description: "La plus bruyante des ronronneuses",
        imageUrl: "https://cdn.pixabay.com/photo/2020/02/18/15/29/cat-4859779_1280.jpg",
        createdDate: new Date(),
        snaps: 5,
        location: "Beaux Arts"
      },
      {
        title: "Citrine",
        description: "Le plus calme",
        imageUrl: "https://cdn.pixabay.com/photo/2018/10/08/19/51/cat-3733316_1280.jpg",
        createdDate: new Date(),
        snaps: 10,
      }
    ]
  }
}
