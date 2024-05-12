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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'OK' })
  async signIn(@Body() signInDto: Record<string, any>) {
    const { access_token, user } = await this.authService.signIn(signInDto.email, signInDto.password);
    // res.cookie('access_token', access_token, {
    //   httpOnly: true,
    //   domain: 'localhost',
    //   sameSite: 'lax',
    //   expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
    // })

    // res.header("Set-Cookie", `access_token=${access_token}; HttpOnly;Domain=localhost;SameSite=lax`)

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
