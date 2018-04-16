import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgxGalleryPreviewComponent } from './';
import { ZoomPosition } from './ngx-gallery-scroll-overview/zoomPosition';

@Component({
    selector: 'ngx-gallery-action',
    template: `
        <i class="ngx-gallery-icon {{ icon }}" [class.ngx-gallery-icon-disabled]="disabled"
            aria-hidden="true"
            title="{{ titleText }}"
            (click)="handleClick($event)" >
           <ngx-gallery-scroll-overview #scrollOverviewComponent (onZoomChanged)="zoomChanged()" [zoomPosition] = "zoomPosition" *ngIf="rectangleScroll"> </ngx-gallery-scroll-overview>
        </i>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGalleryActionComponent {

    @Input() icon: string;
    @Input() disabled = false;
    @Input() titleText = '';
    @Input() rectangleScroll: boolean;
    @Input() zoomPosition: ZoomPosition;
    @Input() gallery: NgxGalleryPreviewComponent;

    @Output() onClick: EventEmitter<Event> = new EventEmitter();
    @Output() onZoomChanged = new EventEmitter();

    @ViewChild('scrollOverviewComponent') scrollOverviewComponent;

    zoomChanged() {
        this.onZoomChanged.emit();
    }

    handleClick(event: Event) {
        if (!this.disabled) {
            this.onClick.emit(event);
        }

        event.stopPropagation();
        event.preventDefault();
    }
}
