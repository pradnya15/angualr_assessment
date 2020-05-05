import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatdate'
})
export class FormatdatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      let date = new Date(value)
      let formatted_date = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()

      let hours = date.getHours();
      let minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'AM' : 'PM';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      let min = minutes < 10 ? '0'+minutes : minutes;
      var newTime = hours + ':' + min + ' ' + ampm;
    
      return formatted_date +", " + newTime;
    }
  }

}
