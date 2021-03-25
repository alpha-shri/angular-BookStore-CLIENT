import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  booklist:Book[];

  constructor(private service: BookService) { }

  ngOnInit(): void {

    this.service.getAllBooks()
                .subscribe( data => {
                  // console.table(data);
                      this.booklist = data;
                });
  }



}
