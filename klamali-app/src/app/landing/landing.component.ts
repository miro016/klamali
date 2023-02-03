import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../shared/services/quotes.service';
import { SupabaseService } from '../shared/services/supabase.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent implements OnInit {
  quotesItems: any[] = [];
  session: any = this.supabase;
  constructor(
    private quotesService: QuotesService,
    private supabase: SupabaseService
  ) {
    if (this.session !== null) {
      this.quotesService.getQuotes().then((data) => {
        this.quotesItems = data || [];
      });
    }
  }

  ngOnInit(): void {
    this.supabase.authChanges((_, session) => (this.session = session));
  }
}
