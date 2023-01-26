import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaraIzaguireJokuaPage } from './lara-izaguire-jokua.page';

describe('LaraIzaguireJokuaPage', () => {
  let component: LaraIzaguireJokuaPage;
  let fixture: ComponentFixture<LaraIzaguireJokuaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaraIzaguireJokuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaraIzaguireJokuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
