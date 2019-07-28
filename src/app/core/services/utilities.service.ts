import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  datetimeTexts: any;

  /**
   * function to calculate what's the time left from specific date until now
   * @param date the date you need calculate time from to now
   */
  calculateTimeLeft(date: Date) {
    let result = '';
    const ms = new Date().getTime() - date.getTime();
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / 1000 / 60) % 60);

    if (days > 0) { result += ` & ${days} ${days > 1 ? this.datetimeTexts.days : this.datetimeTexts.day}`; }
    if (hours > 0) { result += ` & ${hours} ${hours > 1 ? this.datetimeTexts.hours : this.datetimeTexts.hour}`; }
    if (minutes > 0) { result += ` & ${minutes} ${minutes > 1 ? this.datetimeTexts.minutes : this.datetimeTexts.minute}`; }
    return result.substr(2);
  }
}
