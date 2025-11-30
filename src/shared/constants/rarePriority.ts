import { Rare } from "../model";

const RARE_PRIORITY: Record<Rare, number> = {
  common: 0,
  rare: 1,
  mythical: 2,
  legendary: 3,
}

const RARE_BY_INDEX: Rare[] = ['common', 'rare', 'mythical', 'legendary'];

export { RARE_PRIORITY, RARE_BY_INDEX };