import { Injectable } from '@angular/core';
import { Post } from 'src/models/post.model';
 //pour appeler le class post.model.ts
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  postsArray= [
            new Post(1 , 'PC DE BUREAU ' , 'PC DE BUREAU LENOVO THINKCENTRE NÉO 50T I3 12È GÉN 4GO 1TO - NOIR'),
            new Post(2 , 'Laptop' , 'Lenovo 2022 Newest Ideapad 3 Laptop, 15.6" HD Touchscreen, 11th Gen Intel Core i3-1115G4 Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, HDMI,'),
            new Post(3 , 'Tablette' , 'Lenovo - Tab P11 Plus - Tablet - 11" 2K Display - MediaTek Octa-Core Processor - 4GB Memory - 128GB Storage - Dolby Atmos -'),
            new Post(4 , 'Casque' , 'Lenovo 100 Headset - Stereo - USB - Wired - Over-The-Head - Binaural'), 
  ]

  constructor() {
    
   }

   //read crud
   getPosts(){
    return this.postsArray;
   }

  //delete crud
   delete(id:number){
    this.postsArray.forEach((element,index) => {
      if(element.id == id){
        this.postsArray.splice(index,1)
      }
    });
   }

   //edit crud
   editPost(id:number, newContent:string, newTitle:string){
    this.postsArray.forEach((element,index) => {
      if(element.id == id){
        element.contenu = newContent;
        element.titre = newTitle;
      }
    });
   }

}
