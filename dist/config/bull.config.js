"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bullConfig = void 0;
const bullConfig = (configService) => ({
    redis: {
        host: configService.get("redis.host"),
        port: configService.get("redis.port"),
    },
});
exports.bullConfig = bullConfig;
//# sourceMappingURL=bull.config.js.map