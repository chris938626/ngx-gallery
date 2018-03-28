import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGalleryScrollOverviewComponent } from './ngx-gallery-scroll-overview.component';

describe('NgxGalleryScrollOverviewComponent', () => {
  let component: NgxGalleryScrollOverviewComponent;
  let fixture: ComponentFixture<NgxGalleryScrollOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGalleryScrollOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGalleryScrollOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
