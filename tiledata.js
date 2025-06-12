import { map } from './map.js';

export const tileTypes = {
  0: 'void.png',
  1: 'dirt.png',
  2: 'wall.png',
  3: 'water.png',
  4: 'grass.png',
  5: 'grass2.png',
  6: 'dark_grass.png',
  7: 'stone.png',
  8: 'stone_bricks.png',
  9: 'sand.png',
};

// Tile types are mapped to this 2D array.
export const tileMap = map;

export function initTiles() {
  const tiles = {};
  for (const [key, path] of Object.entries(tileTypes)) {
    const img = new Image();
    img.src = `./assets/tiles/${path}`;
    tiles[key] = img;
  }
  return tiles;
}

export function isBlocked(x, y) {
  const blockedTiles = [0, 2, 3, 8]; // Example blocked tiles
  const tile = tileMap[y] && tileMap[y][x];
  return blockedTiles.includes(tile);
}