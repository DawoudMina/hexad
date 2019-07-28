import { Observable } from 'rxjs/internal/Observable';
import { TranslateLoader } from '@ngx-translate/core';
import { Language } from 'src/app/core';
import { of } from 'rxjs/internal/observable/of';
export class TranslateCustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if (lang === Language.English) {
      return of({
        common: {
          buttons: {
            post: 'Post',
            comment: 'Comment',
            follow: 'Follow',
            send: 'Send'
          },
          languages: {
            german: '(German)',
            english: '(English)'
          },
          'input-placeholder': {
            search: 'Search',
            'post-content': 'Write something...',
            'comment-content': 'Type anything'
          },
          labels: {
            'post-title': `What's happening?`
          },
          datetime: {
            day: 'day',
            days: 'days',
            minute: 'min',
            minutes: 'mins',
            hour: 'hr',
            hours: 'hrs'
          }
        }
      });
    } else if (lang === Language.Deutsch) {
      return of({
        common: {
          buttons: {
            post: 'Post',
            comment: 'Kommentar',
            follow: 'Folgen',
            send: 'Senden'
          },
          languages: {
            german: '(German)',
            english: '(English)'
          },
          'input-placeholder': {
            search: 'Suche',
            'post-content': 'Schreib etwas ...',
            'comment-content': 'Gib irgendetwas ein'
          },
          labels: {
            'post-title': 'Was ist los?'
          },
          datetime: {
            day: 'tag',
            days: 'tage',
            minute: 'minute',
            minutes: 'minuten',
            hour: 'stunde',
            hours: 'stunden'
          }
        }
      });
    }
  }
}
