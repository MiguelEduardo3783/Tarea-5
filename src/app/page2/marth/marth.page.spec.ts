import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarthPage } from './marth.page';

describe('MarthPage', () => {
  let component: MarthPage;
  let fixture: ComponentFixture<MarthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
