import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NagelenEskulturaJokuaPage } from './nagelen-eskultura-jokua.page';

describe('NagelenEskulturaJokuaPage', () => {
  let component: NagelenEskulturaJokuaPage;
  let fixture: ComponentFixture<NagelenEskulturaJokuaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NagelenEskulturaJokuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NagelenEskulturaJokuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
