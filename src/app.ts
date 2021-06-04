import '@/setup';

const { conf, args } = nx.$global;

class App {
  public async start(): Promise<any> {
    console.log('hello babel-node! 👉', nx.VERSION);
    console.log(conf.gets(), args);
    return Promise.resolve();
  }
}

(async () => {
  const app = new App();
  return await app.start();
})();
