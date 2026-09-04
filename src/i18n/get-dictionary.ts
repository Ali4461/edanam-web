import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { tr } from "./dictionaries/tr";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, tr };

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries.en;
}
