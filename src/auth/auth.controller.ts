import {
  Body,
  Controller,
  Post,
  Get,
  HttpCode,
  HttpStatus,
  Request,
  UseGuards,
  Req,
  Res
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { ApiBody, ApiOperation, ApiParam, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RoleGuard } from './guards/role.guard';
import { Roles } from './decorators/role.decorator';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({
    summary:
      'Authenticate user and generating access token if user is authenticated.',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'email@gmail.com',
        },
        password: {
          type: 'string',
          example: 'Password123',
        },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'OK' })
  async signIn(@Body() signInDto: Record<string, any>) {
    const { access_token, user } = await this.authService.signIn(signInDto.email, signInDto.password);

    return {user, accessToken: access_token};
  }

  @Get('profile')
  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'OK' })
  @Roles('ADMIN')
  @UseGuards(RoleGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
