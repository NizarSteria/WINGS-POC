import { Component, OnInit } from '@angular/core';
import { TreeNode } from "primeng/primeng";
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: string;
  files: TreeNode[];
  message: string;

  onClick() {
    this.message = 'Hello ' + this.name;
  }
  ngOnInit() {
    this.getFiles();
  }

  constructor(private http: Http) { }

  getFiles() {
    return this.http.get('assets/mock-data/data.json')
      .subscribe(res => this.files = res.json().data);
  }


}
