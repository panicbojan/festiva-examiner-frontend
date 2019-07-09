import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-festlista',
  templateUrl: './festlista.component.html',
  styleUrls: ['./festlista.component.scss']
})
export class FestlistaComponent implements OnInit {
  data: any;
  searchInput:string;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://127.0.0.1:8000/api/showFestivals',{responseType:"json"}).subscribe(
    (response: any) => {
     
      this.data = response;
        console.log("data :"+response);
        var sample=JSON.stringify(response);
   });
   
}

srch(){
  const string ='regex='+this.searchInput;
  this.http.get('http://127.0.0.1:8000/api/searchFestivals?'+string,{responseType:"json"}).subscribe(
    response => {
      
        this.data = response;
        console.log("data :"+response);
        
   });
  
}
dist(){
  
  navigator.geolocation.getCurrentPosition(function(location) {
    this.sendToBackend(location.coords.latitude,location.coords.longitude);
  }.bind(this));
 
  
}

sendToBackend(lat, long) {
  const string ='latitude='+lat+'&'+'longitude='+long+'&'+'distance='+200;
  
  this.http.get('http://127.0.0.1:8000/api/distance?'+string,{responseType:"json"}).subscribe(
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
