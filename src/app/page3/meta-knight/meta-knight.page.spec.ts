import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetaKnightPage } from './meta-knight.page';

describe('MetaKnightPage', () => {
  let component: MetaKnightPage;
  let fixture: ComponentFixture<MetaKnightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaKnightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetaKnightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
