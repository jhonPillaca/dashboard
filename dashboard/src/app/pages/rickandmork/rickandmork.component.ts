import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rickandmork',
  templateUrl: './rickandmork.component.html',
  styleUrls: ['./rickandmork.component.scss']
})
export class RickandmorkComponent implements OnInit {

  constructor(private service:DataService) { }
rickandmork:any;
  ngOnInit(): void {
    this.service.getRickAndMory().subscribe(data=>{
      console.log(data)
      localStorage.setItem("rick",JSON.stringify(data.results))
    })

    this.getRickandMory();

    console.log(this.rickandmork)
  }

  getRickandMory(){
    if(localStorage.getItem("rick")){
      this.rickandmork=JSON.parse(localStorage.getItem("rick"))
    }else{
      this.service.getRickAndMory().subscribe(data=>{
        data
  
      this.rickandmork=data.results;
      })
    }
  }

}
