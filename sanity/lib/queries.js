// Queries za kategorije
export const categoriesQuery = `
  *[_type == "category" && isActive == true] | order(order asc) {
    _id,
    name,
    slug,
    description,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    order
  }
`

export const categoryBySlugQuery = `
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    subcategories[]->{
      _id,
      name,
      slug,
      description,
      order,
      isActive
    }
  }
`

// Queries za proizvode
export const productsQuery = `
  *[_type == "product" && inStock == true] | order(order asc) {
    _id,
    name,
    brand,
    slug,
    shortDescription,
    category->{
      _id,
      name,
      slug
    },
    images[] {
      asset->{
        _id,
        url
      },
      alt
    },
    price,
    featured,
    inStock
  }
`

export const productsByCategoryQuery = `
  *[_type == "product" && category._ref == $categoryId && inStock == true] | order(order asc) [$offset...$limit] {
    _id,
    name,
    brand,
    slug,
    shortDescription,
    category->{
      _id,
      name,
      slug
    },
    subcategories[]->{
      _id,
      name,
      slug
    },
    images[] {
      asset->{
        _id,
        url
      },
      alt
    },
    price,
    featured,
    inStock
  }
`

export const productsByCategoryCountQuery = `
  count(*[_type == "product" && category._ref == $categoryId && inStock == true])
`

export const subcategoryBySlugQuery = `
  *[_type == "subcategory" && slug.current == $slug && isActive == true][0] {
    _id,
    name,
    slug,
    description,
    parentCategory->{
      _id,
      name,
      slug
    },
    order
  }
`

export const productsBySubcategoryQuery = `
  *[_type == "product" && $subcategoryId in subcategories[]._ref && inStock == true] | order(order asc) [$offset...$limit] {
    _id,
    name,
    brand,
    slug,
    shortDescription,
    category->{
      _id,
      name,
      slug
    },
    subcategories[]->{
      _id,
      name,
      slug
    },
    images[] {
      asset->{
        _id,
        url
      },
      alt
    },
    price,
    featured,
    inStock
  }
`

export const productsBySubcategoryCountQuery = `
  count(*[_type == "product" && $subcategoryId in subcategories[]._ref && inStock == true])
`

export const featuredProductsQuery = `
  *[_type == "product" && featured == true && inStock == true] | order(order asc) [0...6] {
    _id,
    name,
    brand,
    slug,
    shortDescription,
    category->{
      _id,
      name,
      slug
    },
    images[] {
      asset->{
        _id,
        url
      },
      alt
    },
    price
  }
`

export const productBySlugQuery = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    brand,
    slug,
    shortDescription,
    description,
    category->{
      _id,
      name,
      slug
    },
    images[] {
      asset->{
        _id,
        url
      },
      alt
    },
    price,
    inStock,
    seo
  }
`