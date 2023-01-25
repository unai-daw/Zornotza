import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmakumeenEspetxeaAzalpenaPage } from './emakumeen-espetxea-azalpena.page';

describe('EmakumeenEspetxeaAzalpenaPage', () => {
  let component: EmakumeenEspetxeaAzalpenaPage;
  let fixture: ComponentFixture<EmakumeenEspetxeaAzalpenaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmakumeenEspetxeaAzalpenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmakumeenEspetxeaAzalpenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
