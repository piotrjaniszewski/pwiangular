import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataComponent } from './edit-data.component';

describe('EditDataComponent', () => {
  let component: EditDataComponent;
  let fixture: ComponentFixture<EditDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
