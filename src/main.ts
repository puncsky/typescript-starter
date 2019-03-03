export async function delayedHello(name: string, delay: number = 2000): Promise<string> {
  const task = (resolve: (result: string) => void) => {
    setTimeout(
      () => {
        resolve(`Hello, ${name}`)
      },
      delay,
    );
  };
  return new Promise<string>(task);
}
