import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../services/dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  searchTerm: string;
  displayWord: string;
  results: Array<any>;

  constructor(private service: DictionaryService) { }

  ngOnInit(): void {
  }

  seachWord(){
    this.service.getDefinition(this.searchTerm).subscribe(data => {
      this.results = data[0].shortdef;
      this.displayWord = this.searchTerm;
    });
  }
}
