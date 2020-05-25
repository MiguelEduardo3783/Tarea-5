import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KingDededePage } from './king-dedede.page';

describe('KingDededePage', () => {
  let component: KingDededePage;
  let fixture: ComponentFixture<KingDededePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingDededePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KingDededePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
