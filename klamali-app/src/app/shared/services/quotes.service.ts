import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  async getQuotes() {
    const stream = this.supabase
      .channel('custom-insert-channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'quotes' },
        (payload) => {
          console.log('Change received!', payload);
        }
      )
      .subscribe();

      let { data: quotes, error } = await this.supabase.from('quotes').select('*');
      return quotes;
  }

  
}
