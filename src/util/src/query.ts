/**
 * query string utilities
 * https://github.com/ljharb/qs
 */
import qs from "qs";

type queryFilter =
  | Array<string | number>
  | ((prefix: string, value: any) => any);

type querySort = (a: any, b: any) => number;

type predicate = (value: string, index: number, array: string[]) => unknown;

const sortAlpha: querySort = (a: string, b: string) => a.localeCompare(b);

export const cleanQuery: queryFilter = (prefix, value) => {
  const valid = ["s", "search", "f", "filter", "p", "page", "ps", "pageSize"];
  const validator: predicate = (v) => v === prefix;
  if (valid.some(validator)) return true;
  // Return `undefined` value to omit a property.
  return;
};

export const toUrlQuery = (
  obj: any,
  filter?: queryFilter,
  sort: querySort = sortAlpha
) =>
  qs.stringify(obj, {
    encodeValuesOnly: true,
    filter,
    sort,
  });

export const parseUrlQuery = (str: string, opts?: qs.IParseOptions) =>
  qs.parse(str, opts);

export const query = {
  cleanQuery,
  toUrlQuery,
  parseUrlQuery,
};
