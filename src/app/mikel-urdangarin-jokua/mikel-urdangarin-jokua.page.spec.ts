import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MikelUrdangarinJokuaPage } from './mikel-urdangarin-jokua.page';

describe('MikelUrdangarinJokuaPage', () => {
  let component: MikelUrdangarinJokuaPage;
  let fixture: ComponentFixture<MikelUrdangarinJokuaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MikelUrdangarinJokuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MikelUrdangarinJokuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
