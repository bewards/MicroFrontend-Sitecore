import { ResponseData_PDP } from '@/types/product';
export declare class PDPService {
    private pathMatcher;
    constructor(pathMatcher: string);
    getPDP(): Promise<ResponseData_PDP>;
}
