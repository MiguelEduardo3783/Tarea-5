import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MegaManPage } from './mega-man.page';

describe('MegaManPage', () => {
  let component: MegaManPage;
  let fixture: ComponentFixture<MegaManPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaManPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MegaManPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
