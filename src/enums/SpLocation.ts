export const SpLocation = {
  Site: 0,
  Drive: 1,
  List: 2
} as const;

export type SpLocation = typeof SpLocation[keyof typeof SpLocation];