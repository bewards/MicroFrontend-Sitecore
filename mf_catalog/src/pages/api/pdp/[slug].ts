// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import { Product, ResponseData_PDP } from '@/types/product';

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData_PDP>) {
  try {
    // Load the JSON file
    const filePath = path.join(process.cwd(), 'src/data/mock/mock-pdp.json');
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const products = JSON.parse(fileContents);

    // Extract the last part of the request path
    const { slug } = req.query;
    console.log('/api/pdp > slug', slug);

    // Find the product by pathMatcher
    const product = products.find((p: any) => p.pathMatcher === slug);

    if (product) {
      return res.status(200).json(product);
    } else {
      return res.status(404).json({ errorMessage: 'PDP not found' });
    }
  } catch (error) {
    return res.status(500).json({ errorMessage: 'Internal Server Error' });
  }
}
