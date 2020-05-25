import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SheikPage } from './sheik.page';

describe('SheikPage', () => {
  let component: SheikPage;
  let fixture: ComponentFixture<SheikPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheikPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SheikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
