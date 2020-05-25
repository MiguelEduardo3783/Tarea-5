import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FalcoPage } from './falco.page';

describe('FalcoPage', () => {
  let component: FalcoPage;
  let fixture: ComponentFixture<FalcoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalcoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FalcoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
