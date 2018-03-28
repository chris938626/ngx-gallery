import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NgxGalleryPreviewComponent } from "./ngx-gallery-preview.component";
import { NgxGalleryScrollOverviewComponent } from "./ngx-gallery-scroll-overview/ngx-gallery-scroll-overview.component";

@Component({
    selector: 'ngx-gallery-action',
    template: `
        <i class="ngx-gallery-icon {{ icon }}" [class.ngx-gallery-icon-disabled]="disabled"
            aria-hidden="true"
            title="{{ titleText }}"
            (click)="handleClick($event)" >
           <ngx-gallery-scroll-overview #scrollOverviewComponent [gallery]="gallery" *ngIf="rectangleScroll"> </ngx-gallery-scroll-overview>
        </i>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGalleryActionComponent {

    @Input() icon: string;
    @Input() disabled = false;
    @Input() titleText = '';
    @Input() rectangleScroll: boolean;
    @Input() gallery: NgxGalleryPreviewComponent;

    @Output() onClick: EventEmitter<Event> = new EventEmitter();

    @ViewChild('scrollOverviewComponent') scrollOverviewComponent;

    handleClick(event: Event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }

        event.stopPropagation();
        event.preventDefault();
    }
}
