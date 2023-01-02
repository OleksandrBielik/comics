import { ComicsModule } from './comics.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsComponent } from './comics.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ComicsComponent', () => {
  let component: ComicsComponent;
  let fixture: ComponentFixture<ComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComicsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, ComicsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
