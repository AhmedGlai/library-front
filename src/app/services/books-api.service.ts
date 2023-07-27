import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksApiService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private Http: HttpClient) { }
  getBooksCover(): Observable<any> {
    const searchQuery = 'self-help';
    const apiKey = 'AIzaSyC8hkTT1v9rabTrGvLHcm681Y39Fo-sBjs';
    const url = `${this.apiUrl}?q=${searchQuery}&key=${apiKey}`;
  
    return this.Http.get<any>(url);
  }
  getBooksTwo(): Observable<any> {
    const searchQuery = 'investment books';
    const apiKey = 'AIzaSyC8hkTT1v9rabTrGvLHcm681Y39Fo-sBjs';
    const url = `${this.apiUrl}?q=${searchQuery}&key=${apiKey}`;
    return this.Http.get<any>(url);
  }

}
