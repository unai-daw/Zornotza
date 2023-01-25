import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UdabarriDantzaTaldeaAzalpenaPage } from './udabarri-dantza-taldea-azalpena.page';

describe('UdabarriDantzaTaldeaAzalpenaPage', () => {
  let component: UdabarriDantzaTaldeaAzalpenaPage;
  let fixture: ComponentFixture<UdabarriDantzaTaldeaAzalpenaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UdabarriDantzaTaldeaAzalpenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UdabarriDantzaTaldeaAzalpenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
