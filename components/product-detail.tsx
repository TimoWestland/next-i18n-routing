import type { NextPage } from 'next'
import { useRouter } from 'next/router'

export const ProductDetail: NextPage = () => {
  const router = useRouter()
  const [slug, sku] = Array.isArray(router.query.slug) ? router.query.slug : []

  return (
    <div>
      <h1>ProductDetail</h1>
      <p>Rendering product for: </p>
      <div>
        <strong>slug: </strong>
        {slug}
      </div>
      <div>
        <strong>sku: </strong>
        {sku}
      </div>
    </div>
  )
}
