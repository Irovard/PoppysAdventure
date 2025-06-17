import { map } from './assets/map/map.js';

export const tileTypes = {
  0: 'void.png',
  1: 'dirt.png',
  2: 'wall.png',
  3: 'water.png',
  4: 'grass.png',
  5: 'grass2.png',
  6: 'grass3.png',
  7: 'dark_grass.png',
  8: 'stone.png',
  9: 'stone_bricks.png',
  10: 'smooth_stone.png',
  11: 'sand.png',
  12: 'wood.png',
  13: 'log.png',
  14: 'snow.png',
  15: 'ice.png',
  16: 'tree.png',
  17: 'bookshelf.png',
  18: 'fire_place.png',
};

// Tile types are mapped to this 2D array.
export function tileMap() {
  return map;
}

export function initTiles() {
  const tiles = {};
  for (const [key, path] of Object.entries(tileTypes)) {
    const img = new Image();
    img.src = `./assets/tiles/${path}`;
    tiles[key] = img;
  }
  return tiles;
}

export function onIce(x, y) {
  const iceTiles = [14, 15]; // Cold tiles
  const tile = tileMap[y] && tileMap[y][x];
  return iceTiles.includes(tile);
}
