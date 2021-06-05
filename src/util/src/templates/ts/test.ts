import {
  BeforeEach,
  BeforeAll,
  AfterEach,
  AfterAll,
  expect,
  Test,
  TestSuite,
} from "testyts";

@TestSuite()
export class MyTestSuite {
  @BeforeAll()
  beforeAll() {
    // This is executed before all the tests
  }

  @BeforeEach()
  beforeEach() {
    // This is executed before each test
  }

  @Test()
  public iAmTesting() {
    // Assert
    expect.toBeEqual(4, 4);
  }

  @AfterEach()
  afterEach() {
    // This is executed after each test
  }

  @AfterAll()
  afterAll() {
    // This is executed after all the tests
  }
}
