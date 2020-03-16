import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ass1 } from './assignment1.page';

describe('Ass1', () => {
  let component: Ass1;
  let fixture: ComponentFixture<Ass1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass1 ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ass1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
