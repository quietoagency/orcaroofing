import * as migration_20261002_201044_initial from './20261002_201044_initial';
import * as migration_20261002_202754 from './20261002_202754';
import * as migration_20261002_210713_site_settings from './20261002_210713_site_settings';
import * as migration_20261006_185427_seo from './20261006_185427_seo';
import * as migration_20261006_191320_drafts from './20261006_191320_drafts';

export const migrations = [
  {
    up: migration_20261002_201044_initial.up,
    down: migration_20261002_201044_initial.down,
    name: '20261002_201044_initial',
  },
  {
    up: migration_20261002_202754.up,
    down: migration_20261002_202754.down,
    name: '20261002_202754',
  },
  {
    up: migration_20261002_210713_site_settings.up,
    down: migration_20261002_210713_site_settings.down,
    name: '20261002_210713_site_settings',
  },
  {
    up: migration_20261006_185427_seo.up,
    down: migration_20261006_185427_seo.down,
    name: '20261006_185427_seo',
  },
  {
    up: migration_20261006_191320_drafts.up,
    down: migration_20261006_191320_drafts.down,
    name: '20261006_191320_drafts'
  },
];
