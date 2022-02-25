import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  //
  const result = games.filter((game) => game.platform === platform);
  return result;
}
