import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JigglypuffPage } from './jigglypuff.page';

describe('JigglypuffPage', () => {
  let component: JigglypuffPage;
  let fixture: ComponentFixture<JigglypuffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JigglypuffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JigglypuffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
