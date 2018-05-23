import { EventEmitter } from '@angular/core';
import { ZoomPosition } from './zoomPosition';
export declare class NgxGalleryScrollOverviewComponent {
    private beforeZoomLeft;
    private beforeZoomTop;
    private initialLeft;
    private initialTop;
    private SCALE_FACTOR;
    onZoomChanged: EventEmitter<{}>;
    zoomPosition: ZoomPosition;
    previewContainerStyles: {
        width: string;
        height: string;
    };
    zoomContainerStyles: {
        transform: string;
        width: string;
        height: string;
    };
    constructor();
    updateDetailZoom(): void;
    resetDetailZoom(): void;
    updatePreviewScales(): void;
    onStop(event: any): void;
    onStart(event: any): void;
}
