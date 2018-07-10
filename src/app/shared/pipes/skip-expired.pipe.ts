import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skipExpired'
})
export class SkipExpiredPipe implements PipeTransform {
  transform(items: any[], fieldName: string): any {
    // return when there is no value or value not an array
    if (!items || !Array.isArray(items)) {
      return;
    }

    // compare current date with date from message to detect if message is expired
    return items.filter(item => new Date(item[fieldName]) > new Date());
  }
}
