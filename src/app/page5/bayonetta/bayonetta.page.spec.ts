import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BayonettaPage } from './bayonetta.page';

describe('BayonettaPage', () => {
  let component: BayonettaPage;
  let fixture: ComponentFixture<BayonettaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayonettaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BayonettaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
