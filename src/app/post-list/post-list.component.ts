import { Component } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  postslist: any;
  postServicesService: any;

  constructor(private postservice: PostServiceService) { 
    this.postservice.chargerListpost()
    .subscribe((postslist) => {
      this.postslist=postslist;
      this.postServicesService.postsArray= postslist;
      
    });

    
  }

}
