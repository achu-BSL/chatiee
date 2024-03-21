import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get('test')
  async test() {
    console.log('[personalchat]: server running');
    return 'Server running';
  }
}
