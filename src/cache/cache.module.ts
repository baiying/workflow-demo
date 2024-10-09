import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { createClient } from 'redis';

@Module({
  controllers: [],
  providers: [
    CacheService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory() {
        const client = createClient({
          url: 'redis://:Ffwj-Rds-812@114.116.37.200:6379',
          // socket: {
          //   host: '114.116.37.200',
          //   port: 6379,
          //   passphrase: 'Ffwj-Rds-812',
          // },
        });
        await client.connect();
        return client;
      },
    },
  ],
  exports: [CacheService],
})
export class CacheModule {}
