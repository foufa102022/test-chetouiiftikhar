import { Component, Input } from '@angular/core';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input() postTitre!:string;
  @Input() postContenu!: string;
  @Input() postId!: number;

  constructor(private postService: PostServiceService){}

  removePost(id:number){
    if(confirm("Are you sure to delete post with id: "+id)) {
      this.postService.delete(id);
    }
    
  }


}
