import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-festlista',
  templateUrl: './festlista.component.html',
  styleUrls: ['./festlista.component.scss']
})
export class FestlistaComponent implements OnInit {
  data: any;
  searchInput:string;
  categories:any;
  distance:Int16Array;
  category:string;
  constructor(private http:HttpClient, private authService:AuthService) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/showFestivals',{responseType:"json"}).subscribe(
    (response: any) => {
     
      this.data = response;
        console.log("data :"+response);
        var sample=JSON.stringify(response);
   });
   
   this.http.post('http://127.0.0.1:8000/api/showCategory',{responseType:"json"}).subscribe(
    (response: any) => {
     
      this.categories = response;
        console.log("data :"+response);
        var sample=JSON.stringify(response);
   });
   
}

dist(){
  
  navigator.geolocation.getCurrentPosition(function(location) {
    this.sendToBackend(location.coords.latitude,location.coords.longitude);
  }.bind(this));
 
  
}

sendToBackend(lat, long) {
  
  var string='latitude='+lat+'&longitude='+long;
  if(this.searchInput)
  {
    string+='&regex='+this.searchInput;
  }
  if(this.category)
  {
    string+='&category_id='+this.category;
  }
  if(!this.distance)
  {
    string+='&distance='+12000
  }else{
    string+='&distance='+this.distance;
  }


  console.log(string);
  this.http.get('http://127.0.0.1:8000/api/filters?'+string,{responseType:"json"}).subscribe(
  response => {
    
      this.data = response;
      console.log("data :"+response);
      
 });
}
  
  del(id){
    this.http.post('http://127.0.0.1:8000/api/deleteFestival?id='+id,{responseType:"json"}).subscribe(
  response => {
    
      this.data = response;
      console.log("data :"+response);
      
 });
  }

  upd(a){
    this.http.post('http://127.0.0.1:8000/api/showFestivalByID?id='+a,{responseType:"json"}).subscribe(
  response => {
    
      this.data = response;
      console.log("data :"+response);
      
 });
  }

}
