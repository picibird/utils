import { assert } from "console";
import { toUrlQuery, parseUrlQuery } from "../src/query";

const sampleQuery = {
  foo: {
    bar: "baz",
  },
};

const sampleQuery2 = {
  foo: {
    bar: "baz2",
  },
};

export const queryTest = () => {
  console.log("query string tests")
  const queryStr = toUrlQuery(sampleQuery);
  const query = parseUrlQuery(queryStr);
  assert(sampleQuery2.foo.bar === query.foo["bar"], "query string not equal after parsing");
};

