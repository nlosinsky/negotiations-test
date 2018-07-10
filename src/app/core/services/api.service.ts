import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators/catchError';
import { environment } from 'environments/environment';
import { Message } from '../models';

const apiUrl = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  // get messages by given url
  getMessages() {
    const url = `${apiUrl}/messages`;

    return this.http.get<Message[]>(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Error) {
    return Observable.throw(error);
  }
}
