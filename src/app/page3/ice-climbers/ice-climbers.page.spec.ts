import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IceClimbersPage } from './ice-climbers.page';

describe('IceClimbersPage', () => {
  let component: IceClimbersPage;
  let fixture: ComponentFixture<IceClimbersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceClimbersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IceClimbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
