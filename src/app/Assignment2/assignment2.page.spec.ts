import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ass2 } from './assignment2.page';

describe('Ass2', () => {
  let component: Ass2;
  let fixture: ComponentFixture<Ass2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass2 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ass2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
