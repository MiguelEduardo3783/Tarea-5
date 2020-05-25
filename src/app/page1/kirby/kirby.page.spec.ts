import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KirbyPage } from './kirby.page';

describe('KirbyPage', () => {
  let component: KirbyPage;
  let fixture: ComponentFixture<KirbyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KirbyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KirbyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
