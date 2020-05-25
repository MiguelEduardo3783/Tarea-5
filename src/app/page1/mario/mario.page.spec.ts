import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarioPage } from './mario.page';

describe('MarioPage', () => {
  let component: MarioPage;
  let fixture: ComponentFixture<MarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
