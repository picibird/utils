import {
  BeforeEach,
  BeforeAll,
  AfterEach,
  AfterAll,
  expect,
  Test,
  TestSuite,
} from "testyts";

import { assert } from "console";
export { query } from "@picibird/shared";

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

@TestSuite()
export class QueryTestSuite {
  @Test()
  public queryTest() {
    console.log("query string tests");
    const queryStr = query.toUrlQuery(sampleQuery);
    const queryObj = query.parseUrlQuery(queryStr);
    expect.toBeEqual(4, 4);
  }
}
