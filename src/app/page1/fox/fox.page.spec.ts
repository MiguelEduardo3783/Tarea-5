import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoxPage } from './fox.page';

describe('FoxPage', () => {
  let component: FoxPage;
  let fixture: ComponentFixture<FoxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
