import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-two-steps',
  templateUrl: './two-steps.component.html',
  styleUrls: ['./two-steps.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, ButtonComponent],
})
export class TwoStepsComponent implements OnInit {
  // Pour le formulaire 2-step input
  public inputs = Array(6);

  // Pour le lien WhatsApp
  phoneNumber: string = '21612345678'; // Remplace par ton numéro sans '+'

  get whatsappLink(): string {
    return `https://wa.me/${this.phoneNumber}`;
  }

  constructor() {}

  ngOnInit(): void {}
}
