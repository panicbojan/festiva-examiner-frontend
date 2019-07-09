import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-festforma',
  templateUrl: './festforma.component.html',
  styleUrls: ['./festforma.component.scss']
})
export class FestformaComponent implements OnInit {

  selectedFile:File=null;
  uploadForm: FormGroup;
  longitude:any;
  latitude:any;
  category_id:any;
  name:string;
  location:string;
  band_names:string;

  constructor(private formBuilder: FormBuilder,private http:HttpClient) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onFileSelected(event){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }

  Add(){
    const fd=new FormData();
    fd.append('image_url', this.uploadForm.get('profile').value);
    fd.append('festival_name', this.name);
    fd.append('longitude', this.longitude);
    fd.append('latitude', this.latitude);
    fd.append('category_id', this.category_id);
    fd.append('location', this.location);
    fd.append('band_names',this.band_names);
    return this.http.post('http://127.0.0.1:8000/api/add',fd).subscribe(
      data => console.log(data)
    );
   
  }

  
  
  



}
