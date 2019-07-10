import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private http:HttpClient) { }
  data: any;
  ngOnInit() {
    this.http.post('http://127.0.0.1:8000/api/showComments',{responseType:"json"}).subscribe(
    (response: any) => {
     
      this.data = response;
        console.log("data :"+response);
        var sample=JSON.stringify(response);
   });
  }

  deleteComment(id){
    this.http.post('http://127.0.0.1:8000/api/deleteComment?id='+id,{responseType:"json"}).subscribe(
    (response: any) => {
     
      this.data = response;
        console.log("data :"+response);
        var sample=JSON.stringify(response);
   });
  }

}
