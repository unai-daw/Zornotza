import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AndresEspinosaAzalpenaPage } from './andres-espinosa-azalpena.page';

describe('AndresEspinosaAzalpenaPage', () => {
  let component: AndresEspinosaAzalpenaPage;
  let fixture: ComponentFixture<AndresEspinosaAzalpenaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AndresEspinosaAzalpenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AndresEspinosaAzalpenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
