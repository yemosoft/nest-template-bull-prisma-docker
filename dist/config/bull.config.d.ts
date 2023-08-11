import { ConfigService } from "@nestjs/config";
export declare const bullConfig: (configService: ConfigService) => {
    redis: {
        host: string;
        port: number;
    };
};
