import { Component } from '@angular/core';
import { SupabaseService } from '../shared/services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class LoginComponent {
  session = this.supabase.session;

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit(): void {
    this.supabase.authChanges((_, session) => (this.session = session));
  }
}
