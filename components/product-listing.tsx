import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { routes } from '../lib/routes'

const products = [
  {
    id: 'asop123jp7weqor',
    name: 'Some product A',
    slug: 'some-product-a',
    sku: '123450',
  },
  {
    id: 'sadk10fp-12ok',
    name: 'Some product B',
    slug: 'some-product-b',
    sku: '123453',
  },
  {
    id: 'ok12-0ioasdf',
    name: 'Some product C',
    slug: 'some-product-c',
    sku: '123452',
  },
]

export const ProductListing: NextPage = () => {
  const router = useRouter()
  const baseRoute: string = routes.products[router.locale || router.defaultLocale || '']
  console.log({ router })
  const [category, ...subcategories] = Array.isArray(router.query.slug) ? router.query.slug : []

  return (
    <div>
      <h1>ProductListing</h1>
      <p>
        Category: <strong>{category}</strong>
      </p>
      <p>
        Subcategories: <strong>{subcategories.join(', ')}</strong>
      </p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/${baseRoute}/${product.slug}/${product.sku}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
