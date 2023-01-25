import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MikelUrdangarinAzalpenaPage } from './mikel-urdangarin-azalpena.page';

describe('MikelUrdangarinAzalpenaPage', () => {
  let component: MikelUrdangarinAzalpenaPage;
  let fixture: ComponentFixture<MikelUrdangarinAzalpenaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MikelUrdangarinAzalpenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MikelUrdangarinAzalpenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
