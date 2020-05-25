import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaptainFalconPage } from './captain-falcon.page';

describe('CaptainFalconPage', () => {
  let component: CaptainFalconPage;
  let fixture: ComponentFixture<CaptainFalconPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptainFalconPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaptainFalconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
