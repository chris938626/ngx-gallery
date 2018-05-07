import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ZoomPosition } from './zoomPosition';

@Component({
    selector: 'ngx-gallery-scroll-overview',
    templateUrl: './ngx-gallery-scroll-overview.component.html',
    styleUrls: ['./ngx-gallery-scroll-overview.component.scss']
})
export class NgxGalleryScrollOverviewComponent implements OnInit {
    private beforeZoomLeft: number;
    private beforeZoomTop: number;
    private initialLeft: number;
    private initialTop: number;
    private SCALE_FACTOR = 8;

    @Output() onZoomChanged = new EventEmitter();
    @Input() zoomPosition: ZoomPosition;
    previewContainerStyles = {width: '', height: ''};
    zoomContainerStyles = {transform: '', width: '', height: ''};

    constructor() {

    }

    public updateDetailZoom() {
        var topScaled = (this.initialTop - this.zoomPosition.positionTop) / this.SCALE_FACTOR;
        var leftScaled = (this.initialLeft - this.zoomPosition.positionLeft) / this.SCALE_FACTOR;
        this.zoomContainerStyles.transform = 'translate(' + leftScaled + 'px,' + topScaled + 'px)';
    }

    public updatePreviewScales() {
        var img = document.getElementsByClassName('ngx-gallery-fullsize');
        var width = img[0].clientWidth;
        var height = img[0].clientHeight;

        // scale the preview image
        this.previewContainerStyles["background-image"] = "url('" + img[0].getAttribute('src') + "')";
        this.previewContainerStyles["background-size"] = (width / this.SCALE_FACTOR ) + 'px ' + (height / this.SCALE_FACTOR ) + 'px';
        this.previewContainerStyles["min-height"] = (window.innerHeight / this.SCALE_FACTOR) + 10 + 'px';
        this.previewContainerStyles["min-width"] = (window.innerWidth / this.SCALE_FACTOR) + 10 + 'px';
        this.previewContainerStyles.width = (width / this.SCALE_FACTOR) + 'px'
        this.previewContainerStyles.height = (height / this.SCALE_FACTOR)+ 'px';

        //scale the zoom container
        this.zoomContainerStyles.height = (window.innerHeight / this.SCALE_FACTOR) + 'px';
        this.zoomContainerStyles.width = (window.innerWidth / this.SCALE_FACTOR) + 'px';

        // init
        this.initialLeft = this.zoomPosition.positionLeft;
        this.initialTop = this.zoomPosition.positionTop;
    }

    ngOnInit(): void {
        this.updatePreviewScales();
    }

    onStop(event) {

        var rect = event.getBoundingClientRect();
        console.log("on stop")
        console.log(rect.left);
        console.log("on stop diffs")
        console.log(this.beforeZoomLeft - rect.left);
        console.log(this.beforeZoomTop - rect.top);
        this.zoomPosition.positionLeft += (this.beforeZoomLeft - rect.left) * this.SCALE_FACTOR;
        this.zoomPosition.positionTop += (this.beforeZoomTop - rect.top) * this.SCALE_FACTOR;
        this.onZoomChanged.emit();
    }

    onStart(event) {
        var rect = event.getBoundingClientRect();
        console.log("on start")
        console.log(rect.left);
        this.beforeZoomLeft = rect.left;
        this.beforeZoomTop = rect.top;
    }
}
