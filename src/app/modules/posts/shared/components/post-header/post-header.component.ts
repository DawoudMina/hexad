import { Component, OnInit, Input } from '@angular/core';
import { IButton } from 'src/app/core';
import { UtilitiesService } from 'src/app/core';

@Component({
  selector: 'hex-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.scss']
})
export class PostHeaderComponent implements OnInit {

  @Input() userFullName: string;
  @Input() userEMail: string;
  @Input() postDateTime: Date;

  public calculatedTime: string;

  btnConfig: IButton = {
    text: 'common.buttons.follow',
    outlineColorOnly: true
  };

  constructor(private utility: UtilitiesService) { }

  ngOnInit() {
    this.calculateTime();
  }

  calculateTime() {
    if (this.postDateTime) {
      this.calculatedTime = this.utility.calculateTimeLeft(this.postDateTime);
    }
  }

}
