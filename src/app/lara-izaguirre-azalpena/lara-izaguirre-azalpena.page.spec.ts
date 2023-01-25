import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaraIzaguirreAzalpenaPage } from './lara-izaguirre-azalpena.page';

describe('LaraIzaguirreAzalpenaPage', () => {
  let component: LaraIzaguirreAzalpenaPage;
  let fixture: ComponentFixture<LaraIzaguirreAzalpenaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaraIzaguirreAzalpenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaraIzaguirreAzalpenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
