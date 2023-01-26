import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmakumeenEspetxeaJokuaPage } from './emakumeen-espetxea-jokua.page';

describe('EmakumeenEspetxeaJokuaPage', () => {
  let component: EmakumeenEspetxeaJokuaPage;
  let fixture: ComponentFixture<EmakumeenEspetxeaJokuaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmakumeenEspetxeaJokuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmakumeenEspetxeaJokuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
