import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hex-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent implements OnInit {
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
