import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

// 네스트펙토리의 핵심기능을 사용하여 어플리케이션 인스턴스를 생성하는 엔트리파일
// **listen을 보아 서버를 오픈하는 시작 파일**

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.enableCors({
        origin: [
            'http://localhost:3000',
            'http://kdt-ai6-team07.elicecoding.com:3000',
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });

    const configService = app.get(ConfigService);
    await app.listen(configService.get('SERVER_PORT'));
}

bootstrap();
