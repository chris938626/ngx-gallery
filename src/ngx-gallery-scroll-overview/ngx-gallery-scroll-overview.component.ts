import { Component, Input, AfterViewInit } from '@angular/core';
import { NgxGalleryPreviewComponent } from '../ngx-gallery-preview.component';

@Component({
    selector: 'ngx-gallery-scroll-overview',
    templateUrl: './ngx-gallery-scroll-overview.component.html',
    styleUrls: ['./ngx-gallery-scroll-overview.component.scss']
})
export class NgxGalleryScrollOverviewComponent implements AfterViewInit {
    private beforeZoomLeft: number;
    private beforeZoomTop: number;
    private initialLeft: number;
    private initialTop: number;
    private SCALE_FACTOR = 8;

    @Input() gallery: NgxGalleryPreviewComponent;

    inBounds = true;
    edge = {
        top: true,
        bottom: true,
        left: true,
        right: true
    };

    constructor() {

    }

    public updateDetailZoom() {
        var topScaled = (this.initialTop - this.gallery.positionTop) / this.SCALE_FACTOR;
        var leftScaled = (this.initialLeft - this.gallery.positionLeft) / this.SCALE_FACTOR;
        var transformString = 'translate(' + leftScaled + 'px,' + topScaled + 'px)';
        document.getElementById('zoomContainer').style.transform = transformString;
    }

    public updatePreviewScales() {
        var img = document.getElementsByClassName('ngx-gallery-fullsize');
        var width = img[0].clientWidth;
        var height = img[0].clientHeight;

        // set the background image of the preview Container which contains the Scaled preview Image
        document.getElementById('previewContainer').style.backgroundImage = "url('" + img[0].getAttribute('src') + "')";

        // scale the preview image
        var widthScaled = width / this.SCALE_FACTOR;
        var heightScaled = height / this.SCALE_FACTOR;
        document.getElementById('previewContainer').style.width = widthScaled + 'px';
        document.getElementById('previewContainer').style.height = heightScaled + 'px';

        // scale the zoom area for visualization which area the user sees
        var zoomHeightScaled = window.innerHeight / this.SCALE_FACTOR;
        var zoomWidthScaled = window.innerWidth / this.SCALE_FACTOR;
        document.getElementById('zoomContainer').style.width = zoomWidthScaled + 'px';
        document.getElementById('zoomContainer').style.height = zoomHeightScaled + 'px';

        // init
        this.initialLeft = this.gallery.positionLeft;
        this.initialTop = this.gallery.positionTop;
    }

    ngAfterViewInit(): void {
        this.updatePreviewScales();
    }

    checkEdge(event) {
        this.edge = event;
    }

    onStop(event) {
        var rect = event.getBoundingClientRect();
        this.gallery.positionLeft += (this.beforeZoomLeft - rect.left) * this.SCALE_FACTOR;
        this.gallery.positionTop += (this.beforeZoomTop - rect.top) * this.SCALE_FACTOR;
    }

    onStart(event) {
        var rect = event.getBoundingClientRect();
        this.beforeZoomLeft = rect.left;
        this.beforeZoomTop = rect.top;
    }
}
