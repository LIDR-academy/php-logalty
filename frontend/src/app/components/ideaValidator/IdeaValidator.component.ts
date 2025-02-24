import { Component } from "@angular/core";
    import { CommonModule } from "@angular/common";
    import { FormsModule } from "@angular/forms";
    import { IdeaCardComponent } from "./IdeaCard.component";

    @Component({
      selector: "idea-validator",
      template: `
        <div class="idea-validator">
         <h1 class="logo">AI+dea</h1>
          <div class="hero-form">
            <form class="idea-form" (ngSubmit)="validateIdea()">
              <div class="textarea-wrapper">
                <label for="ideaInput">Idea</label>
                <div class="textarea-container">
                  <textarea
                    id="ideaInput"
                    [(ngModel)]="ideaDescription"
                    name="ideaDescription"
                    placeholder="Describe your idea"
                    aria-label="Describe your idea"
                    style="width: 100%;height: 100px"
                  ></textarea>
                  <img src="..." class="textarea-icon" alt="" />
                </div>
              </div>
              <div class="button-wrapper">
                <button type="submit" class="blue-button">Validate</button>
              </div>
            </form>
          </div>
          <div class="ideas-section">
            <div class="ideas-header">
              <h2>Your ideas</h2>
              <p>Subheading</p>
            </div>
            <div class="ideas-grid">
              <idea-card *ngFor="let idea of ideas" [idea]="idea"></idea-card>
            </div>
          </div>
        </div>
      `,
      styleUrls: ['./IdeaValidator.component.css'],
      standalone: true,
      imports: [CommonModule, FormsModule, IdeaCardComponent],
    })
    export class IdeaValidatorComponent {
      ideaDescription = "";
      ideas = Array(6).fill({
        title: "Idea name",
        isGood: false,
        rationale: "Example rationale text",
        nextStep: "Example next step text"
      });

      validateIdea(): void {
        console.log("Validating idea:", this.ideaDescription);
      }
    }
