import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl:string = 'https://clousterapi.chandnisoft.com/api/TokenAuth/GetTestData';

  constructor(private http: HttpClient) { }



  getDataSource(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }

}
