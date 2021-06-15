import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoranKodComponent } from './restoran-kod.component';

describe('RestoranKodComponent', () => {
  let component: RestoranKodComponent;
  let fixture: ComponentFixture<RestoranKodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoranKodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoranKodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
