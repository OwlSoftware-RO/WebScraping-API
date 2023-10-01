import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime } from 'rxjs';
import { WebScraperService } from '../web-scraper.service';

@Component({
  selector: 'app-web-scraper',
  templateUrl: './web-scraper.component.html',
  styleUrls: ['./web-scraper.component.scss']
})
export class WebScraperComponent implements OnInit{
  
  public targetUrl: string = '';
  public targetUrlChanged = new Subject<string>();
  public scrapedResults: Observable<any[]> = new Observable;

  ngOnInit(): void {
    
  }

  constructor(private wsService: WebScraperService) {
    this.targetUrlChanged.pipe(debounceTime(300)).subscribe(() => {
      this.scrapedResults = this.wsService.scrapeWeb(this.targetUrl);
      
      this.scrapedResults.subscribe(result =>{
        console.log(result)
      })
    });
  }

  changed(event: any) {
    this.targetUrlChanged.next(this.targetUrl)
  }
}
