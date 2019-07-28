import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../interfaces';

@Pipe({
  name: 'hexFilter'
})
export class HexFilterPipe implements PipeTransform {
  transform(arr: IPost[], searchText: string, ...KeysToFilter: string[]): IPost[] {
    if (searchText) {
      return arr.filter(el => {
        let filterKeys = '';
        KeysToFilter.forEach(key => filterKeys += this.getValueByPath(el, key));
        return filterKeys.toLowerCase().includes(searchText.toLowerCase());
        }
      );
    }
    return arr;
  }

  private getValueByPath(originalObject: any, filedPath: string) {
    const parts = filedPath.split('.');
    let obj = originalObject;
    parts.forEach((part, index) => {
      if (!obj[parts[index]]) {
        obj[parts[index]] = {};
      }
      obj = obj[parts[index]];
    });

    return obj;
  }
}
