import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ass3 } from './assignment3.page';

describe('Ass3', () => {
  let component: Ass3;
  let fixture: ComponentFixture<Ass3>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass3 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ass3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
