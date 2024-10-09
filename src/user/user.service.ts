import { Injectable } from '@nestjs/common';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class UserService {
  constructor(private cacehService: CacheService) {}
  async create() {
    await this.cacehService.set('aaa', 'bbb');
  }
}
