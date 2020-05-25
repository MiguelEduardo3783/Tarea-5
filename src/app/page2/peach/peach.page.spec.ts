import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeachPage } from './peach.page';

describe('PeachPage', () => {
  let component: PeachPage;
  let fixture: ComponentFixture<PeachPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeachPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeachPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
