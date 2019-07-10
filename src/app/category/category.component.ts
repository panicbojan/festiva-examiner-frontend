import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private http:HttpClient) { }
  data: any;

  ngOnInit() {
    this.http.post('http://127.0.0.1:8000/api/showCategory',{responseType:"json"}).subscribe(
    (response: any) => {
     
      this.data = response;
        console.log("data :"+response);
        var sample=JSON.stringify(response);
   });
  }

  deleteCategory(id){
    this.http.post('http://127.0.0.1:8000/api/deleteCategory?id='+id,{responseType:"json"}).subscribe(
    (response: any) => {
     
      this.data = response;
        console.log("data :"+response);
        var sample=JSON.stringify(response);
   });
  }

}
