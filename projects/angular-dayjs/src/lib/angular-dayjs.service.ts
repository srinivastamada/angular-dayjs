import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
@Injectable({
  providedIn: 'root',
})
export class AngularDayjsService {
  constructor() {
    dayjs.extend(relativeTime)
  }

  timeAgo(timestamp: string){
    return dayjs().to(dayjs(timestamp));
  }
}