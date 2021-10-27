import type { NextRequest } from 'next/server'
import { routes } from '../lib/routes'
import { NextResponse } from 'next/server'

const isValidSku = (val: string) => /[0-9]{6}/g.test(val)

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  let res

  if (!pathname.includes('.') && !pathname.startsWith('/api')) {
    console.log({ pathname })

    // Locale is omitted from the pathname by default by next.js
    // so for PDP urls we asume this structure
    const [base, slug, sku] = pathname.split('/').filter(Boolean)

    // Check if the first part of the url matches one of the base product routes
    Object.values<string>(routes.products).forEach((route) => {
      if (base === route) {
        // Also check if slug exists and the sku is valid,
        // if so redirect to PDP
        if (slug && isValidSku(sku)) {
          console.log('PDP route')
          res = NextResponse.rewrite(`/products/${slug}/${sku}`)
        } else {
          console.log('PLP route')
          // we don't have a valid product URL, so we're assuming this is a category page instead
          res = NextResponse.rewrite(`/category${pathname}`)
        }
      }
    })
  }

  return res
}
