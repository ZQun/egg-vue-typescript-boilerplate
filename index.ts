
import { startCluster } from 'egg';
startCluster({
  baseDir: __dirname,
  workers: process.env.WORKERS,
  port: process.env.PORT
});
