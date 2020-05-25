import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RichterBelmontPage } from './richter-belmont.page';

describe('RichterBelmontPage', () => {
  let component: RichterBelmontPage;
  let fixture: ComponentFixture<RichterBelmontPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichterBelmontPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RichterBelmontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
