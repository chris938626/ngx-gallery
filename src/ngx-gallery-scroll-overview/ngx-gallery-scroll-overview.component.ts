import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { ZoomPosition } from './zoomPosition';

@Component({
    selector: 'ngx-gallery-scroll-overview',
    templateUrl: './ngx-gallery-scroll-overview.component.html',
    styleUrls: ['./ngx-gallery-scroll-overview.component.scss']
})
export class NgxGalleryScrollOverviewComponent {
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
        if (this.initialTop - this.zoomPosition.positionTop==0)return;
        var topScaled = (this.initialTop - this.zoomPosition.positionTop) / this.SCALE_FACTOR;
        var leftScaled = (this.initialLeft - this.zoomPosition.positionLeft) / this.SCALE_FACTOR;
        this.zoomContainerStyles.transform = 'translate(' + leftScaled + 'px,' + topScaled + 'px)';
    }

    public resetDetailZoom() {
        var topScaled = 0;
        var leftScaled = 0;
        document.getElementById("zoom-container").style.transform = 'translate(' + leftScaled + 'px,' + topScaled + 'px)';
        // does not work here:
        // this.zoomContainerStyles.transform = 'translate(' + leftScaled + 'px,' + topScaled + 'px)';
    }

    public updatePreviewScales(url) {
        var img = new Image;
        img.src = url;

        var width;
        var height;
        var scrollOverViewComponent = this;
        img.onload = function(){
            width = img.width;
            height = img.height;
            scrollOverViewComponent.previewContainerStyles["background-image"] = "url('" + url + "')";
            scrollOverViewComponent.previewContainerStyles["background-size"] = (width / scrollOverViewComponent.SCALE_FACTOR ) + 'px ' + (height / scrollOverViewComponent.SCALE_FACTOR ) + 'px';
            scrollOverViewComponent.previewContainerStyles["min-height"] = (window.innerHeight / scrollOverViewComponent.SCALE_FACTOR) + 10 + 'px';
            scrollOverViewComponent.previewContainerStyles["min-width"] = (window.innerWidth / scrollOverViewComponent.SCALE_FACTOR) + 10 + 'px';

            scrollOverViewComponent.previewContainerStyles.width = (width / scrollOverViewComponent.SCALE_FACTOR) + 'px'
            scrollOverViewComponent.previewContainerStyles.height = (height / scrollOverViewComponent.SCALE_FACTOR) + 'px';

            //scale the zoom container
            scrollOverViewComponent.zoomContainerStyles.height = (window.innerHeight / scrollOverViewComponent.SCALE_FACTOR) + 'px';
            scrollOverViewComponent.zoomContainerStyles.width = (window.innerWidth / scrollOverViewComponent.SCALE_FACTOR) + 'px';

            // init
            scrollOverViewComponent.initialLeft = scrollOverViewComponent.zoomPosition.positionLeft;
            scrollOverViewComponent.initialTop = scrollOverViewComponent.zoomPosition.positionTop;
        }
    }

    onStop(event) {
        var rect = event.getBoundingClientRect();
        this.zoomPosition.positionLeft += (this.beforeZoomLeft - rect.left) * this.SCALE_FACTOR;
        this.zoomPosition.positionTop += (this.beforeZoomTop - rect.top) * this.SCALE_FACTOR;
        this.onZoomChanged.emit();
    }

    onStart(event) {
        var rect = event.getBoundingClientRect();
        this.beforeZoomLeft = rect.left;
        this.beforeZoomTop = rect.top;
    }
}
