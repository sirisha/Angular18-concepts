import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  fruitsData: any;
  data: any;
  // Fruits data sample without service file giving directly over here

  // fruitsData = [
  //   {
  //     id: 1,
  //     name : 'Apple',
  //     price : 100
  //   },
  //   {
  //     id: 2,
  //     name : 'Orange',
  //     price : 300
  //   },
  //   {
  //     id: 3,
  //     name : 'Mango',
  //     price : 500
  //   },
  //   {
  //     id: 4,
  //     name : 'Banana',
  //     price : 130
  //   },
  //   {
  //     id: 5,
  //     name : 'PineApple',
  //     price : 400
  //   }
  // ];


  constructor(private http: HttpClient, private commonService: CommonService){
    // this.http.get('http://localhost:3000/fruits').subscribe({
    //   next:(data) => {
    //     console.log(data);
    //     this.fruitsData = data;
    //   console.log('fruitsData: ' , this.fruitsData);
    //    }
    // })
  }

  ngOnInit(){
    this.commonService.getFruits().subscribe({
      next:(data) => {
        console.log(data);
        this.fruitsData = data;
      }
    })
  }

}
