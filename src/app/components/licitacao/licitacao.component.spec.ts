import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicitacaoComponent } from './licitacao.component';

describe('LicitacaoComponent', () => {
  let component: LicitacaoComponent;
  let fixture: ComponentFixture<LicitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicitacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
