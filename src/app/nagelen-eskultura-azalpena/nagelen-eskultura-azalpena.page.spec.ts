import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NagelenEskulturaAzalpenaPage } from './nagelen-eskultura-azalpena.page';

describe('NagelenEskulturaAzalpenaPage', () => {
  let component: NagelenEskulturaAzalpenaPage;
  let fixture: ComponentFixture<NagelenEskulturaAzalpenaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NagelenEskulturaAzalpenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NagelenEskulturaAzalpenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
