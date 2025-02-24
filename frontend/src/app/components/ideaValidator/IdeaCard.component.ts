import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: "idea-card",
  template: `
    <div class="idea-card">
      <div class="idea-content">
        <h3 class="idea-title">{{ idea.title }}</h3>
        <p>{{ idea.description }}</p>
    <div *ngIf="idea.response" class="idea-details">
      <p><strong>Is good?</strong>: {{ idea.response.is_good ? "Yes" : "No" }}</p>
      <p><strong>Rationale:</strong> {{ idea.response.rationale }}</p>
      <p><strong>Next step:</strong> {{ idea.response.next_step }}</p>
    </div>
      </div>
    </div>
  `,
  styleUrls: ['./IdeaCard.component.css'], // Reference to the new CSS file
  standalone: true,
  imports: [CommonModule],
})
export class IdeaCardComponent {
  @Input() idea!: {
    title: string;
    response?: {
      id: string;
      is_good: boolean;
      rationale: string;
      next_step: string;
    }
    description: string;
  };
}
