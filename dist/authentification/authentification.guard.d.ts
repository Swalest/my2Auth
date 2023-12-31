import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
export declare class AuthentificationGuard implements CanActivate {
    private jwtService;
    constructor(jwtService: JwtService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
//# sourceMappingURL=authentification.guard.d.ts.map