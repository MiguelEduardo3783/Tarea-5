import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LucinaPage } from './lucina.page';

describe('LucinaPage', () => {
  let component: LucinaPage;
  let fixture: ComponentFixture<LucinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LucinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
