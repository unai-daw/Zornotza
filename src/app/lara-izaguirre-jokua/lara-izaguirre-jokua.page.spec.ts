import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaraIzaguirreJokuaPage } from './lara-izaguirre-jokua.page';

describe('LaraIzaguirreJokuaPage', () => {
  let component: LaraIzaguirreJokuaPage;
  let fixture: ComponentFixture<LaraIzaguirreJokuaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaraIzaguirreJokuaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaraIzaguirreJokuaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
