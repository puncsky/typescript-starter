import test from "ava";
import { delayedHello } from "..";

test("delayedHello test", async t => {
  const result = await delayedHello("delayedHello");
  t.deepEqual(result, "Hello, delayedHello");
});
