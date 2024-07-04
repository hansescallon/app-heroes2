import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaHeroeComponent } from './busca-heroe.component';

describe('BuscaHeroeComponent', () => {
  let component: BuscaHeroeComponent;
  let fixture: ComponentFixture<BuscaHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaHeroeComponent]
    });
    fixture = TestBed.createComponent(BuscaHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
