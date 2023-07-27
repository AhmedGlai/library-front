import { Component, Input, OnInit } from '@angular/core';
import { BooksApiService } from '../services/books-api.service';
import { ChangeDetectorRef} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() volumesId!:string 
  books:any
  books2:any
  selectedBook:any
  showInfo = false

  carouselConfig = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows: true
  };

  constructor(private booksApi:BooksApiService,private cdRef: ChangeDetectorRef){}
  
  ngOnInit(): void {
    this.loadBooks1()
    this.loadBooks2()
  }
  

  loadBooks1(){
    this.booksApi.getBooksCover().subscribe(
      (data)=>{
        this.books=data
      },(error)=>{
        console.log("ERROR :",error)
      }
    )
  }

  loadBooks2(){
    this.booksApi.getBooksTwo().subscribe(
      (data)=>{
        this.books2=data
      },(error)=>{
        console.log("ERRROR: "+error)
      }
    )
  }

  showdetails(books_picked:any){
    this.showInfo=true;
    this.selectedBook=books_picked;
    this.cdRef.detectChanges()
  }
  closeDetails(){
    this.showInfo=false
  }  

}
