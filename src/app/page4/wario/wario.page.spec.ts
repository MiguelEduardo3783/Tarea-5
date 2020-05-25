import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarioPage } from './wario.page';

describe('WarioPage', () => {
  let component: WarioPage;
  let fixture: ComponentFixture<WarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
