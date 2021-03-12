import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  posts = [{id: 0, text: 'text o'}, {id: 1, text: 'text 1'}, {id: 2, text: 'text 2'}, {id: 3, text: 'text 3'}];

 constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log('fjfggbhgkjg');
  }

}

