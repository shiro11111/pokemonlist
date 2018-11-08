import { TestBed } from '@angular/core/testing';

import { PokemonDetailsService } from './pokemon-details.service';

describe('PokemonDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonDetailsService = TestBed.get(PokemonDetailsService);
    expect(service).toBeTruthy();
  });
});
