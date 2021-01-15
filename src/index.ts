export async function delayedHello(
  name: string,
  delay = 2000
): Promise<string> {
  const hello = `Hello, ${name}`;
  console.log(hello);
  const task = (resolve: (result: string) => void) => {
    setTimeout(() => {
      resolve(hello);
    }, delay);
  };
  return new Promise<string>(task);
}
