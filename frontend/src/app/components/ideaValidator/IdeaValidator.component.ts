import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import {IdeaCardComponent} from './IdeaCard.component';
import {IdeaService} from '../../services/idea.service';

@Component({
    selector: 'idea-validator',
    template: `
        <div class="idea-validator">
            <h1 class="logo">AI+dea</h1>
            <div class="hero-form">
                <form #ideaForm="ngForm" (ngSubmit)="validateIdea()" novalidate>
                    <div class="textarea-wrapper">
                        <div class="textarea-container">
                            <input
                                    id="ideaInput"
                                    name="idea"
                                    [(ngModel)]="idea"
                                    #ctrl="ngModel"
                                    placeholder="Describe your idea"
                                    aria-label="Idea description"
                                    style="width: 100%; height: 30px"
                                    required
                            />
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <button type="submit" class="blue-button" [disabled]="ideaForm.invalid">Validate</button>
                    </div>
                </form>
            </div>
            <div class="ideas-section">
                <div class="ideas-header">
                    <h2>Your ideas</h2>
                </div>
                <div class="ideas-grid" *ngIf="ideas.length > 0">
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
    ideas: any[] = [];
    idea: string = '';
    constructor(private ideaService: IdeaService) {
        this.ideaService.getIdeas().subscribe((ideas) => {
            console.log(ideas);
            this.ideas = ideas;
        });
    }

    validateIdea(): void {
        const ideaDescription = this.idea.trim();
        if (!ideaDescription) {
            console.log('Empty idea description. Not submitting.');
            return; // Prevent submitting empty ideas
        }

        this.ideaService.createIdea(ideaDescription).subscribe((idea) => {
            console.log(idea);
            this.ideas.unshift(idea);
        });
    }
}
