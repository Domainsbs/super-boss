# Database Seeder Script

This script seeds your database with sample data including categories, subcategories, brands, and products.

## What Gets Seeded

- **4 Categories**: Laptops, Smartphones, Tablets, Accessories
- **6 Brands**: Apple, Acer, Dell, HP, Lenovo, Samsung
- **10 Subcategories**: With images for navbar display
- **20 Products**: 
  - 10 Laptops (Acer, Dell, HP, Lenovo, Apple)
  - 4 Smartphones (iPhone, Samsung)
  - 4 Tablets (iPad, Samsung)
  - 2 Headphones (Apple AirPods)

## Prerequisites

Before running the seeder:
1. Make sure MongoDB is running
2. Make sure you have an admin user created in your database
3. Install dependencies: `npm install`

## Usage

### Import Data (Seed Database)

```bash
node scripts/seed-data.js
```

This will:
- Find your admin user
- Clear existing categories, subcategories, brands, and products
- Import all sample data
- Link all relationships properly

### Destroy Data (Clear Database)

```bash
node scripts/seed-data.js -d
```

This will remove all:
- Categories
- Subcategories
- Brands
- Products

**Note**: This does NOT delete users or orders.

## Product Details

All products include:
- ✅ Complete specifications
- ✅ Realistic pricing (buyingPrice, price, offerPrice, discount)
- ✅ Stock information
- ✅ Product images
- ✅ Gallery images (for some products)
- ✅ Tags for search optimization
- ✅ Proper category/subcategory/brand relationships

## Sample Product Categories

### Laptops (10 products)
- Acer Aspire 3, Nitro 5
- Dell Inspiron 15, XPS 13
- HP Pavilion 15, Envy x360
- Lenovo IdeaPad 3, ThinkPad E14
- MacBook Air M2, MacBook Pro M3

### Smartphones (4 products)
- iPhone 15 Pro, iPhone 14
- Samsung Galaxy S24 Ultra, Galaxy A54

### Tablets (4 products)
- iPad Pro 12.9", iPad Air
- Samsung Galaxy Tab S9 Ultra, Tab A9+

### Accessories (2 products)
- AirPods Pro 2nd Gen
- AirPods Max

## After Seeding

Once seeded, you can:
1. Browse products on your storefront
2. Test the category/subcategory navigation with images
3. Test the search functionality
4. Test product filters
5. Add products to cart and checkout

## Troubleshooting

**Error: "Admin user not found"**
- Solution: Create an admin user first using the register endpoint or manually in MongoDB

**Error: "Connection failed"**
- Solution: Make sure MongoDB is running and the connection string in `.env` is correct

**Error: "Duplicate key error"**
- Solution: Run the destroy command first: `node scripts/seed-data.js -d`

## Notes

- All products have realistic data suitable for testing
- Subcategories include images for the new navbar dropdown feature
- Stock levels are set to realistic values
- Pricing includes buying price, selling price, offer price, and discount
- All relationships (brand, category, subcategory) are properly linked
