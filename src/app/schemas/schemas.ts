import { schema } from 'normalizr';

export const item = new schema.Entity( 'item', {}, {idAttribute: 'id'});

export const pokemon = new schema.Entity('pokemon', {}, {idAttribute: 'name'});

export const list = new schema.Entity('list', {results: pokemon}, {idAttribute: 'count'});
