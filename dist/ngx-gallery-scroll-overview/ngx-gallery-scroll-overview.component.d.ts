import { EventEmitter, OnInit } from '@angular/core';
import { ZoomPosition } from './zoomPosition';
export declare class NgxGalleryScrollOverviewComponent implements OnInit {
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
    ngOnInit(): void;
    onStop(event: any): void;
    onStart(event: any): void;
}
