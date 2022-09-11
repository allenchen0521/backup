import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellDemoComponent } from './shell-demo.component';

describe('ShellDemoComponent', () => {
  let component: ShellDemoComponent;
  let fixture: ComponentFixture<ShellDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShellDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
