export type Category = {
  name: string
  subcategories: Subcategory[]
}

export type Subcategory = string

export type Province = string

export type Range = string

export type Merchant = {
  shopNameTH: string
  categoryName: string
  subcategoryName: string
  coverImageId: string
  facilities: string[]
  priceLevel: number
  isOpen: string
  highlightText: string
  recommendedItems: string[]
  addressProvinceName: string
  addressDistrictName: string
}

export type Filters = {
  categories: Category[]
  provinces: Province[]
  priceRange: Range[]
}
export type Data = {
  merchants: Merchant[]
} & Filters



