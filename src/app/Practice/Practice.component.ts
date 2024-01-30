import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Practice',
  templateUrl: './Practice.component.html',
  styleUrls: ['./Practice.component.scss']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  documents: any[] = [];

  addDocument(): void {
    this.documents.push(name);
  }

  removeDocument(index: number): void {
    this.documents.splice(index, 1);
  }

}
