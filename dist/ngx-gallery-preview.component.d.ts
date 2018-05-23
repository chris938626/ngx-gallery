import { EventEmitter, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { NgxGalleryAction } from './ngx-gallery-action.model';
import { NgxGalleryHelperService } from './ngx-gallery-helper.service';
import { ZoomPosition } from './ngx-gallery-scroll-overview/zoomPosition';
export declare class NgxGalleryPreviewComponent implements OnChanges {
    private sanitization;
    private elementRef;
    private helperService;
    src: SafeUrl;
    srcIndex: number;
    description: string;
    showSpinner: boolean;
    positionLeft: number;
    positionTop: number;
    zoomValue: number;
    loading: boolean;
    rotateValue: number;
    showScrollOverview: boolean;
    zoomPosition: ZoomPosition;
    images: string[] | SafeResourceUrl[];
    descriptions: string[];
    showDescription: boolean;
    swipe: boolean;
    fullscreen: boolean;
    fullSize: boolean;
    forceFullscreen: boolean;
    closeOnClick: boolean;
    closeOnEsc: boolean;
    keyboardNavigation: boolean;
    arrowPrevIcon: string;
    arrowNextIcon: string;
    closeIcon: string;
    fullscreenIcon: string;
    spinnerIcon: string;
    autoPlay: boolean;
    autoPlayInterval: number;
    autoPlayPauseOnHover: boolean;
    infinityMove: boolean;
    zoom: boolean;
    zoomStep: number;
    zoomMax: number;
    zoomMin: number;
    zoomInIcon: string;
    zoomOutIcon: string;
    animation: boolean;
    actions: NgxGalleryAction[];
    rotate: boolean;
    rotateLeftIcon: string;
    rotateRightIcon: string;
    onOpen: EventEmitter<{}>;
    onClose: EventEmitter<{}>;
    onActiveChange: EventEmitter<number>;
    previewImage: ElementRef;
    galleryContainer: any;
    private index;
    private isOpen;
    private timer;
    private initialX;
    private initialY;
    private initialLeft;
    private initialTop;
    private isMove;
    constructor(sanitization: DomSanitizer, elementRef: ElementRef, helperService: NgxGalleryHelperService);
    ngOnChanges(changes: SimpleChanges): void;
    zoomChanged(): void;
    onKeyDown(e: any): void;
    open(index: number): void;
    close(): void;
    imageMouseEnter(): void;
    imageMouseLeave(): void;
    startAutoPlay(): void;
    stopAutoPlay(): void;
    showNext(): boolean;
    private refreshScrollOverview();
    showPrev(): void;
    canShowNext(): boolean;
    canShowPrev(): boolean;
    manageFullscreen(): void;
    getSafeUrl(image: string): SafeUrl;
    zoomIn(): void;
    zoomOut(): void;
    rotateLeft(): void;
    rotateRight(): void;
    getTransform(): SafeStyle;
    canZoomIn(): boolean;
    canZoomOut(): boolean;
    canDragOnZoom(): boolean;
    mouseDownHandler(e: any): void;
    mouseUpHandler(e: any): void;
    mouseMoveHandler(e: any): void;
    private getClientX(e);
    private getClientY(e);
    private resetPosition();
    private isKeyboardNext(e);
    private isKeyboardPrev(e);
    private isKeyboardEsc(e);
    private openFullscreen();
    private closeFullscreen();
    private show(first?);
    private _show();
    private isLoaded(img);
}
