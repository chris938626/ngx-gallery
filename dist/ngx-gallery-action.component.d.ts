import { EventEmitter } from '@angular/core';
import { NgxGalleryPreviewComponent } from './';
import { ZoomPosition } from './ngx-gallery-scroll-overview/zoomPosition';
export declare class NgxGalleryActionComponent {
    icon: string;
    disabled: boolean;
    titleText: string;
    showScrollOverview: boolean;
    zoomPosition: ZoomPosition;
    gallery: NgxGalleryPreviewComponent;
    onClick: EventEmitter<Event>;
    onZoomChanged: EventEmitter<{}>;
    scrollOverviewComponent: any;
    zoomChanged(): void;
    handleClick(event: Event): void;
}
