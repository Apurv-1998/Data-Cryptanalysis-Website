import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPayload } from '../common/user-payload';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "http://localhost:8080/api/users"


  constructor(private httpClient: HttpClient) {

  }


  registerUser(payload: UserPayload): Observable<any> {

    const searchUrl: string = `${this.baseUrl}/register`;
    
    return this.httpClient.post(searchUrl,payload);

  }
}
