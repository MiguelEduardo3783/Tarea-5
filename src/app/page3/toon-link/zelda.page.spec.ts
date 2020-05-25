import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZeldaPage } from './zelda.page';

describe('ZeldaPage', () => {
  let component: ZeldaPage;
  let fixture: ComponentFixture<ZeldaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeldaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZeldaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
