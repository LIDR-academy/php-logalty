import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "idea-card",
  template: `
    <div class="idea-card">
      <div class="idea-content">
        <h3 class="idea-title">{{ idea.title }}</h3>
        <div class="idea-details">
          <p><strong>Is good?</strong>: {{ idea.isGood ? "Yes" : "No" }}</p>
          <p><strong>Rationale:</strong> {{ idea.rationale }}</p>
          <p><strong>Next step:</strong> {{ idea.nextStep }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .idea-card {
        display: flex;
        min-width: 240px;
        flex: 1;
        flex-basis: calc(33.333% - 43px);
      }
      .idea-content {
        display: flex;
        width: 100%;
        flex-direction: column;
      }
      .idea-title {
        color: #1e1e1e;
        font-size: 24px;
        font-weight: 600;
        line-height: 1.2;
        letter-spacing: -0.48px;
        margin: 0 0 8px;
      }
      .idea-details {
        color: #757575;
        font-size: 16px;
        line-height: 22px;
      }
      .idea-details p {
        margin: 0 0 8px;
      }
      @media (max-width: 991px) {
        .idea-card {
          flex-basis: 100%;
        }
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export class IdeaCardComponent {
  @Input() idea!: {
    title: string;
    isGood: boolean;
    rationale: string;
    nextStep: string;
  };
}
