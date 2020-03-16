import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ass4 } from './assignment4.page';

describe('Ass4', () => {
  let component: Ass4;
  let fixture: ComponentFixture<Ass4>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass4 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ass4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
