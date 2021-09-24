import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UglyPage } from './ugly.page';

describe('UglyPage', () => {
  let component: UglyPage;
  let fixture: ComponentFixture<UglyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UglyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UglyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
