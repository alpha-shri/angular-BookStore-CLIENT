import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  title:String;
  author:String;
  description:String;
  price:String;

  newBooks: Book;
  

  constructor(private service: BookService) { }

  addBookMethod(){
    console.log("Inside addBookMethod()", this.title)
    this.newBooks = {
      "title": this.title,
      "author": this.author,
      "description": this.description,
      "price": this.price
    }
    console.log(this.newBooks)

    this.service.saveBook(this.newBooks)
                .subscribe( data => console.log("Saved books status: ", data));
  }

  ngOnInit(): void {
  }

}
