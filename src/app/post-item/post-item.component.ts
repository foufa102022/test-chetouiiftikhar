import { Component, Input } from '@angular/core';
import { Post } from 'src/models/post.model';
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

  removePost(id :Post){
    if(confirm("Are you sure to delete post with id: "+id)) {
      this.postService.deletepost(id);
    }
    
  }


}
