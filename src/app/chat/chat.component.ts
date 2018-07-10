import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from '../core/models';
import { ApiService } from '../core/services/api.service';
import * as base64 from 'is-base64';

@Component({
  selector: 'app-chat-component',
  templateUrl: 'chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent implements OnInit {
  messages$: Observable<Message[]>;

  constructor(
    private api: ApiService
  ) {}

  ngOnInit() {
    // get messages Observable messages from server
    this.messages$ = this.api.getMessages();
  }

  // check if message is base64 string representation
  isBase64(val) {
   return base64(val);
  }
}
