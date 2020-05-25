import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanelaPage } from './canela.page';

describe('CanelaPage', () => {
  let component: CanelaPage;
  let fixture: ComponentFixture<CanelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanelaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
