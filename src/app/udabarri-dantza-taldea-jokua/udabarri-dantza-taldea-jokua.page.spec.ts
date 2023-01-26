import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UdabarriDantzaTaldeaJokuaPage } from './udabarri-dantza-taldea-jokua.page';

describe('UdabarriDantzaTaldeaJokuaPage', () => {
  let component: UdabarriDantzaTaldeaJokuaPage;
  let fixture: ComponentFixture<UdabarriDantzaTaldeaJokuaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UdabarriDantzaTaldeaJokuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UdabarriDantzaTaldeaJokuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
