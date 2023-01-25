import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HaizetaraAzalpenaPage } from './haizetara-azalpena.page';

describe('HaizetaraAzalpenaPage', () => {
  let component: HaizetaraAzalpenaPage;
  let fixture: ComponentFixture<HaizetaraAzalpenaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HaizetaraAzalpenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HaizetaraAzalpenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
