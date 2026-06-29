import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://catalog.vercel.app'; // デプロイ後に正しいURLへ更新
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base,             lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/about`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/catalog`,lastModified: now, changeFrequency: 'weekly',  priority: 0.9 }
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map(c => ({
    url: `${base}/c/${c.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  const subcategoryPages: MetadataRoute.Sitemap = categories.flatMap(c =>
    c.subCategories.map(s => ({
      url: `${base}/c/${c.id}/${s.code.toLowerCase()}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7
    }))
  );

  const productPages: MetadataRoute.Sitemap = products.map(p => ({
    url: `${base}/products/${p.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...productPages];
}
