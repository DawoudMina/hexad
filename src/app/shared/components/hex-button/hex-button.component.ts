import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IButton } from 'src/app/core';

@Component({
  selector: 'hex-button',
  templateUrl: './hex-button.component.html',
  styleUrls: ['./hex-button.component.scss']
})
export class HexButtonComponent implements OnInit {
  @Input() config: IButton;
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
