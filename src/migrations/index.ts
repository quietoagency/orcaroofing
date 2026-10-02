import * as migration_20261002_201044_initial from './20261002_201044_initial';
import * as migration_20261002_202754 from './20261002_202754';

export const migrations = [
  {
    up: migration_20261002_201044_initial.up,
    down: migration_20261002_201044_initial.down,
    name: '20261002_201044_initial',
  },
  {
    up: migration_20261002_202754.up,
    down: migration_20261002_202754.down,
    name: '20261002_202754'
  },
];
