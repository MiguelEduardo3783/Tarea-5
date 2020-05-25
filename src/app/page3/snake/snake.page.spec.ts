import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SnakePage } from './snake.page';

describe('SnakePage', () => {
  let component: SnakePage;
  let fixture: ComponentFixture<SnakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SnakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
