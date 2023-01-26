import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AndresEspinosaJokuaPage } from './andres-espinosa-jokua.page';

describe('AndresEspinosaJokuaPage', () => {
  let component: AndresEspinosaJokuaPage;
  let fixture: ComponentFixture<AndresEspinosaJokuaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AndresEspinosaJokuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AndresEspinosaJokuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
