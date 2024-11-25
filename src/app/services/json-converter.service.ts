import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonConverterService {

  private apiUrl =  'http://localhost:8080/api/converter/jsontocsv';

  constructor(private http: HttpClient) { }

  convertJsonToCsv(jsonData: any): Observable<string> {
    return this.http.post(this.apiUrl, jsonData, {responseType: 'text'});
  }
}
