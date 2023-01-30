import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaraIzaguirreJokua2Page } from './lara-izaguirre-jokua2.page';

describe('LaraIzaguirreJokua2Page', () => {
  let component: LaraIzaguirreJokua2Page;
  let fixture: ComponentFixture<LaraIzaguirreJokua2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaraIzaguirreJokua2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaraIzaguirreJokua2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
