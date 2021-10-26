import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ProductDetail } from '../../components/product-detail'
import { ProductListing } from '../../components/product-listing'

const isValidSku = (val: string) => /[0-9]{6}/g.test(val)

const ProductPageRenderer: NextPage = () => {
  const router = useRouter()

  // Should probably validate this on the server and redirect to 404 when slug is invalid
  if (!Array.isArray(router.query.slug)) {
    return null
  }

  if (isValidSku(router.query.slug[1])) {
    return <ProductDetail />
  }

  return <ProductListing />
}

export default ProductPageRenderer
