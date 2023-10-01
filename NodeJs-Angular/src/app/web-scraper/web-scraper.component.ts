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
  public includeImages: boolean = false;
  public targetUrlChanged = new Subject<string>();
  public scrapedObs: Observable<any[]> = new Observable;
  public scrapedResults: any[] = [];

  ngOnInit(): void {
    
  }

  constructor(private wsService: WebScraperService) {
    this.targetUrlChanged.pipe(debounceTime(300)).subscribe(() => {
      this.analize(this.includeImages);
    });
  }

  changed(event: any) {
    this.targetUrlChanged.next(this.targetUrl)
  }

  analizeOnDemand(){
    this.analize(this.includeImages)
  }

  analize(includeImages:boolean){
    this.scrapedObs = this.wsService.scrapeWeb(this.targetUrl,includeImages );
      this.scrapedObs.subscribe(result =>{
        this.scrapedResults = result;
    })
    setTimeout(() => {
      if(!this.includeImages){
        console.log("hit")
      }
    }, 2500);
  }
}
