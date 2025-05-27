import { withPublicUrl } from '@/lib/url-helper';
import { Product, ResponseData_PDP } from '@/types/product';

export class PDPService {
  private pathMatcher: string;

  constructor(pathMatcher: string) {
    this.pathMatcher = pathMatcher;
  }

  public async getPDP(): Promise<ResponseData_PDP> {
    try {
      const response = await fetch(withPublicUrl(`/api/pdp/${this.pathMatcher}`));

      if (!response.ok) {
        return { errorMessage: 'PDP not found' };
      }
      const data: ResponseData_PDP = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching PDP:', error);
      return { errorMessage: 'Internal Server Error' };
    }
  }
}
