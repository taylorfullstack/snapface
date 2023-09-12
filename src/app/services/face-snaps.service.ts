import { Injectable } from "@angular/core";
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "Onix",
      description: "Le plus câlin",
      imageUrl: "https://cdn.pixabay.com/photo/2020/11/26/15/06/cat-5779248_1280.jpg",
      createdDate: new Date(),
      snaps: 1,
      location: "Port Marianne"
    },
    {
      id: 2,
      title: "Saphir",
      description: "La plus bruyante des ronronneuses",
      imageUrl: "https://cdn.pixabay.com/photo/2020/02/18/15/29/cat-4859779_1280.jpg",
      createdDate: new Date(),
      snaps: 5,
      location: "Beaux Arts"
    },
    {
      id: 3,
      title: "Citrine",
      description: "Le plus calme",
      imageUrl: "https://cdn.pixabay.com/photo/2018/10/08/19/51/cat-3733316_1280.jpg",
      createdDate: new Date(),
      snaps: 10,
    }
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number) : FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error('FaceSnap not found!')
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}