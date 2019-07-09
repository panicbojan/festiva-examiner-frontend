import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http:HttpClient,private formBuilder: FormBuilder) { }

  data:any;
  selectedFile:File=null;
  uploadForm: FormGroup;
  longitude:any;
  latitude:any;
  category_id:any;
  name:string;
  location:string;
  band_names:string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
    })
    const id = this.route.snapshot.params['festival_id'];
    
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });

    this.chng(id)
  }
  onFileSelected(event){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }
  chng(id){

    this.http.post('http://127.0.0.1:8000/api/showFestivalByID?id='+id,{responseType:"json"}).subscribe(
      response => {
        
          this.data = response;
          console.log("data :"+response);
          
     });
  }
  Update(e){
    event.preventDefault()
    const target=e.target
    const id=target.querySelector('#id').value
    const longitude=target.querySelector('#longitude').value
    const latitude=target.querySelector('#latitude').value
    const name=target.querySelector('#name').value
    const category_id=target.querySelector('#category_id').value
    const location=target.querySelector('#location').value
    const band_names=target.querySelector('#band_names').value
    const fd=new FormData();
    fd.append('image_url', this.uploadForm.get('profile').value);
    fd.append('festival_name', name);
    fd.append('longitude', longitude);
    fd.append('latitude', latitude);
    fd.append('category_id', category_id);
    fd.append('location', location);
    fd.append('band_names',band_names);
    fd.append('id', id);
    return this.http.post('http://127.0.0.1:8000/api/updateFestival',fd).subscribe(
      data => console.log(data)
    );
  }

}
