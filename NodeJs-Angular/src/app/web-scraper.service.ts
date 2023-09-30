import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebScraperService {
  constructor(private http: HttpClient) { }

  scrapeWeb(url: string): Observable<any[]> {
      //return this.http.get<any[]>(`http://localhost:3000/webScraper/targetUrl=${url}`);
      //.pipe(map(retVal => retVal.Results))

      return this.http.post<any>('http://localhost:3000/webScraper',{ targetUrl: url });    
      //<any>(`http://localhost:3000/webScraper/targetUrl=${url}`);
      //.pipe(map(retVal => retVal.Results))
  };
}


export interface scrapedResults {
  element: string
}