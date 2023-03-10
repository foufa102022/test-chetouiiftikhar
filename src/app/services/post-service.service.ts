import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Post } from 'src/models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  
  
apiurl='http://localhost:3000/post';
  postslist: any;

  // injecter le service HttpClient pour pouvoir se connecter au serveur node
  constructor(private http: HttpClient) {
    this.chargerListpost().subscribe((listpost) => {
      console.log(listpost);
    });
  }
  chargerListpost():Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:3000/post');

  }
   //read crud<>
   getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiurl);
    
   }

   addpost(a:Post):Observable<Post[]>{
    return this.http.post<Post[]>(this.apiurl,a);

   }
   getpostbyId(id:string):Observable<Post[]>{
    return this.http.get<Post[]>(this.apiurl+id);

   }
    updatepost(a:Post):Observable<any>{
      return this.http.put<any>(this.apiurl+a.id,a);

    }
    deletepost(a:Post)  :Observable<any>{
      return this.http.delete<any>(this.apiurl+a.id);

    }

}












  