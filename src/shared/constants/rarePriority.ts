import { Rare } from "../model";

const RARE_PRIORITY: Record<Rare, number> = {
  common: 0,
  rare: 1,
  mythical: 2,
  legendary: 3,
}

export { RARE_PRIORITY };