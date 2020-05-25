import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MewtwoPage } from './mewtwo.page';

describe('MewtwoPage', () => {
  let component: MewtwoPage;
  let fixture: ComponentFixture<MewtwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MewtwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MewtwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
