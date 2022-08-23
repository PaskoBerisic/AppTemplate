import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const AUTH_API = 'api_address';
const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }
  
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API,{ username, password }, httpOptions);
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API, { username, password }, httpOptions);
  }

  logout(): Observable<any> {
    return of(true);
  }

}
