import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import path from "path";
import { fileURLToPath } from "url";
import Category from "../models/categoryModel.js";
import SubCategory from "../models/subCategoryModel.js";
import Brand from "../models/brandModel.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import connectDB from "../config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from server root directory
dotenv.config({ path: path.join(__dirname, "../.env") });

const categories = [
  {
    name: "Televisions",
    slug: "televisions",
    description: "Smart TVs and LED displays for your home entertainment",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    isActive: true,
    sortOrder: 1,
  },
  {
    name: "Refrigerators",
    slug: "refrigerators",
    description: "Modern refrigerators and freezers for your kitchen",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400",
    isActive: true,
    sortOrder: 2,
  },
  {
    name: "Washing Machines",
    slug: "washing-machines",
    description: "Automatic washing machines and dryers",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
    isActive: true,
    sortOrder: 3,
  },
  {
    name: "Air Conditioners",
    slug: "air-conditioners",
    description: "Split and window AC units for cooling",
    image: "https://images.unsplash.com/photo-1631545423374-d787c218dccd?w=400",
    isActive: true,
    sortOrder: 4,
  },
];

const brands = [
  {
    name: "Samsung",
    slug: "samsung",
    description: "Innovative home electronics and appliances",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    website: "https://samsung.com",
    isActive: true,
    sortOrder: 1,
  },
  {
    name: "LG",
    slug: "lg",
    description: "Life's Good with premium electronics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg",
    website: "https://lg.com",
    isActive: true,
    sortOrder: 2,
  },
  {
    name: "Sony",
    slug: "sony",
    description: "Entertainment and innovation combined",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
    website: "https://sony.com",
    isActive: true,
    sortOrder: 3,
  },
  {
    name: "Panasonic",
    slug: "panasonic",
    description: "A Better Life, A Better World",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Panasonic_logo_%28Blue%29.svg",
    website: "https://panasonic.com",
    isActive: true,
    sortOrder: 4,
  },
  {
    name: "Whirlpool",
    slug: "whirlpool",
    description: "Quality home appliances",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Whirlpool_logo.svg",
    website: "https://whirlpool.com",
    isActive: true,
    sortOrder: 5,
  },
  {
    name: "Haier",
    slug: "haier",
    description: "Smart home solutions",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Haier_logo.svg",
    website: "https://haier.com",
    isActive: true,
    sortOrder: 6,
  },
];

const subcategories = [
  {
    name: "Smart TVs",
    slug: "smart-tvs",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    isActive: true,
    sortOrder: 1,
  },
  {
    name: "LED TVs",
    slug: "led-tvs",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
    isActive: true,
    sortOrder: 2,
  },
  {
    name: "Double Door Refrigerators",
    slug: "double-door-refrigerators",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400",
    isActive: true,
    sortOrder: 3,
  },
  {
    name: "Single Door Refrigerators",
    slug: "single-door-refrigerators",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400",
    isActive: true,
    sortOrder: 4,
  },
  {
    name: "Front Load Washers",
    slug: "front-load-washers",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
    isActive: true,
    sortOrder: 5,
  },
  {
    name: "Top Load Washers",
    slug: "top-load-washers",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400",
    isActive: true,
    sortOrder: 6,
  },
  {
    name: "Split AC Units",
    slug: "split-ac-units",
    image: "https://images.unsplash.com/photo-1631545423374-d787c218dccd?w=400",
    isActive: true,
    sortOrder: 7,
  },
  {
    name: "Window AC Units",
    slug: "window-ac-units",
    image: "https://images.unsplash.com/photo-1631545423374-d787c218dccd?w=400",
    isActive: true,
    sortOrder: 8,
  },
];

const products = [
  // Smart TVs
  {
    name: 'Samsung 55" 4K Ultra HD Smart LED TV Crystal UHD with HDR',
    sku: "SAM-TV-55-CU8000",
    barcode: "8801643982683",
    shortDescription: '55" 4K UHD, Crystal Processor 4K, HDR, Smart TV with Tizen OS',
    description: "Experience breathtaking picture quality with Samsung Crystal UHD TV. The Crystal Processor 4K automatically upscales content to 4K resolution. HDR support delivers vibrant colors and deep contrasts. Smart TV features powered by Tizen OS provide access to all your favorite streaming apps.",
    buyingPrice: 420,
    price: 599,
    offerPrice: 549,
    discount: 8,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
    galleryImages: [],
    countInStock: 15,
    lowStockWarning: 5,
    maxPurchaseQty: 5,
    weight: 15.5,
    tags: ["TV", "Samsung", "4K", "Smart TV"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: true,
    specifications: [
      { key: "Screen Size", value: '55"' },
      { key: "Resolution", value: "4K UHD (3840x2160)" },
      { key: "Smart TV", value: "Yes - Tizen OS" },
      { key: "HDR", value: "Yes" },
      { key: "Refresh Rate", value: "60Hz" },
    ],
  },
  {
    name: 'LG 65" OLED 4K Smart TV with AI ThinQ',
    sku: "LG-OLED-65-C3",
    barcode: "8806091234567",
    shortDescription: '65" OLED 4K, AI ThinQ, Dolby Vision, webOS Smart TV',
    description: "LG OLED TV delivers perfect blacks and infinite contrast with self-lit pixels. α9 AI Processor enhances every scene. Dolby Vision and Dolby Atmos create a cinematic experience. webOS provides seamless access to streaming services.",
    buyingPrice: 1400,
    price: 1899,
    offerPrice: 1799,
    discount: 5,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
    galleryImages: [],
    countInStock: 8,
    lowStockWarning: 3,
    maxPurchaseQty: 3,
    weight: 22.3,
    tags: ["TV", "LG", "OLED", "4K", "Premium"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: true,
    specifications: [
      { key: "Screen Size", value: '65"' },
      { key: "Resolution", value: "4K UHD OLED" },
      { key: "Processor", value: "α9 AI Processor" },
      { key: "HDR", value: "Dolby Vision, HDR10" },
      { key: "Smart TV", value: "webOS" },
    ],
  },
  {
    name: 'Sony 43" Full HD LED TV with X-Reality PRO',
    sku: "SONY-LED-43-W66",
    barcode: "4548736112345",
    shortDescription: '43" Full HD, X-Reality PRO, ClearAudio+, Smart TV',
    description: "Sony LED TV with X-Reality PRO engine enhances every pixel for stunning clarity. ClearAudio+ delivers immersive sound. Perfect size for bedrooms and small living rooms. Built-in apps for Netflix, YouTube, and more.",
    buyingPrice: 280,
    price: 399,
    offerPrice: 359,
    discount: 10,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
    galleryImages: [],
    countInStock: 25,
    lowStockWarning: 10,
    maxPurchaseQty: 8,
    weight: 8.5,
    tags: ["TV", "Sony", "Full HD", "LED"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Screen Size", value: '43"' },
      { key: "Resolution", value: "Full HD (1920x1080)" },
      { key: "Technology", value: "X-Reality PRO" },
      { key: "Audio", value: "ClearAudio+" },
      { key: "Smart Features", value: "Yes" },
    ],
  },
  {
    name: 'Panasonic 50" 4K LED TV with HDR10+',
    sku: "PANA-LED-50-MX750",
    barcode: "5025232912345",
    shortDescription: '50" 4K UHD, HDR10+, Dolby Audio, Android TV',
    description: "Panasonic 4K LED TV with HDR10+ delivers exceptional picture quality. Quad Core Processor ensures smooth performance. Android TV provides access to thousands of apps. Dolby Audio creates immersive sound experience.",
    buyingPrice: 380,
    price: 529,
    offerPrice: 489,
    discount: 8,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
    galleryImages: [],
    countInStock: 18,
    lowStockWarning: 8,
    maxPurchaseQty: 6,
    weight: 11.2,
    tags: ["TV", "Panasonic", "4K", "Android TV"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Screen Size", value: '50"' },
      { key: "Resolution", value: "4K UHD" },
      { key: "HDR", value: "HDR10+" },
      { key: "Smart TV", value: "Android TV" },
      { key: "Audio", value: "Dolby Audio" },
    ],
  },
  {
    name: "Samsung 32\" HD Ready LED TV with Active Crystal Display",
    sku: "SAM-TV-32-HD",
    barcode: "8801643982690",
    shortDescription: '32" HD Ready, Active Crystal Display, Built-in Speakers, HDMI',
    description: "Perfect compact TV for bedrooms and small spaces. Samsung 32\" HD Ready LED TV features Active Crystal Display for vivid colors. Built-in speakers deliver clear audio. Multiple HDMI ports for connectivity.",
    buyingPrice: 150,
    price: 229,
    offerPrice: 199,
    discount: 13,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800",
    galleryImages: [],
    countInStock: 25,
    lowStockWarning: 10,
    maxPurchaseQty: 8,
    weight: 6.5,
    tags: ["TV", "Samsung", "LED TV", "HD"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Screen Size", value: '32"' },
      { key: "Resolution", value: "HD Ready (1366x768)" },
      { key: "Display", value: "Active Crystal" },
      { key: "HDMI Ports", value: "2" },
      { key: "USB Ports", value: "1" },
    ],
  },

  // Refrigerators - Double Door
  {
    name: "Samsung 415L Double Door Refrigerator Frost Free with Digital Inverter",
    sku: "SAM-FRIDGE-415-DD",
    barcode: "8801643567890",
    shortDescription: "415L Capacity, Digital Inverter, Frost Free, Energy Efficient",
    description: "Samsung Double Door Refrigerator with Digital Inverter Technology provides energy efficiency and less noise. Frost-free technology prevents ice buildup. Spacious 415L capacity perfect for large families. Multi-flow cooling ensures even temperature distribution.",
    buyingPrice: 580,
    price: 799,
    offerPrice: 749,
    discount: 6,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800",
    galleryImages: [],
    countInStock: 12,
    lowStockWarning: 5,
    maxPurchaseQty: 3,
    weight: 65.0,
    tags: ["Refrigerator", "Samsung", "Double Door", "Frost Free"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: true,
    specifications: [
      { key: "Capacity", value: "415 Liters" },
      { key: "Type", value: "Double Door" },
      { key: "Cooling", value: "Frost Free" },
      { key: "Compressor", value: "Digital Inverter" },
      { key: "Energy Rating", value: "3 Star" },
    ],
  },
  {
    name: "LG 335L Double Door Refrigerator with Smart Inverter Compressor",
    sku: "LG-FRIDGE-335-GL",
    barcode: "8806098456789",
    shortDescription: "335L Capacity, Smart Inverter, Convertible Plus, Hygiene Fresh+",
    description: "LG Double Door Refrigerator with Smart Inverter Compressor ensures energy savings up to 36%. Convertible Plus technology allows flexible storage options. Hygiene Fresh+ eliminates 99.99% of bacteria. Moist Balance Crisper keeps fruits and vegetables fresh longer.",
    buyingPrice: 450,
    price: 629,
    offerPrice: 589,
    discount: 6,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800",
    galleryImages: [],
    countInStock: 15,
    lowStockWarning: 6,
    maxPurchaseQty: 4,
    weight: 58.0,
    tags: ["Refrigerator", "LG", "Double Door", "Smart Inverter"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: true,
    specifications: [
      { key: "Capacity", value: "335 Liters" },
      { key: "Type", value: "Double Door" },
      { key: "Compressor", value: "Smart Inverter" },
      { key: "Special Features", value: "Convertible Plus" },
      { key: "Energy Rating", value: "4 Star" },
    ],
  },
  {
    name: "Whirlpool 292L Double Door Refrigerator with 6th Sense IntelliFresh",
    sku: "WHP-FRIDGE-292-DD",
    barcode: "8901650123470",
    shortDescription: "292L Capacity, 6th Sense IntelliFresh, Microblock Technology, Convertible",
    description: "Whirlpool Double Door Refrigerator with 6th Sense IntelliFresh Technology maintains optimal temperature and humidity. Microblock technology prevents up to 99% bacterial growth. 5-in-1 Convertible modes provide flexibility. Ideal for medium-sized families.",
    buyingPrice: 400,
    price: 549,
    offerPrice: 499,
    discount: 9,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800",
    galleryImages: [],
    countInStock: 12,
    lowStockWarning: 5,
    maxPurchaseQty: 4,
    weight: 58.0,
    tags: ["Refrigerator", "Whirlpool", "Double Door"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Capacity", value: "292 Liters" },
      { key: "Type", value: "Double Door" },
      { key: "Technology", value: "6th Sense IntelliFresh" },
      { key: "Special Features", value: "5-in-1 Convertible" },
      { key: "Energy Rating", value: "3 Star" },
    ],
  },

  // Refrigerators - Single Door
  {
    name: "Whirlpool 215L Single Door Refrigerator with Intellisense Inverter",
    sku: "WHP-FRIDGE-215-SD",
    barcode: "8901650123456",
    shortDescription: "215L Capacity, Intellisense Inverter, Stabilizer Free, 6th Sense",
    description: "Whirlpool Single Door Refrigerator with Intellisense Inverter Technology adapts cooling based on usage patterns. Stabilizer-free operation works in wide voltage range. 6th Sense technology maintains optimal temperature. Perfect for small families and bachelors.",
    buyingPrice: 220,
    price: 319,
    offerPrice: 289,
    discount: 9,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800",
    galleryImages: [],
    countInStock: 20,
    lowStockWarning: 8,
    maxPurchaseQty: 5,
    weight: 35.0,
    tags: ["Refrigerator", "Whirlpool", "Single Door"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Capacity", value: "215 Liters" },
      { key: "Type", value: "Single Door" },
      { key: "Cooling", value: "Direct Cool" },
      { key: "Technology", value: "Intellisense Inverter" },
      { key: "Energy Rating", value: "3 Star" },
    ],
  },
  {
    name: "Haier 195L Single Door Refrigerator with Turbo Icing Technology",
    sku: "HAIER-FRIDGE-195-SD",
    barcode: "6970212345678",
    shortDescription: "195L Capacity, Turbo Icing, Stabilizer Free, Anti-bacterial Gasket",
    description: "Haier Single Door Refrigerator with Turbo Icing Technology for faster cooling. 1 Hour Icing Technology makes ice in just 60 minutes. Anti-bacterial gasket prevents bacteria growth. Toughened glass shelves can hold up to 150kg weight.",
    buyingPrice: 190,
    price: 279,
    offerPrice: 249,
    discount: 11,
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800",
    galleryImages: [],
    countInStock: 25,
    lowStockWarning: 10,
    maxPurchaseQty: 6,
    weight: 32.0,
    tags: ["Refrigerator", "Haier", "Single Door"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Capacity", value: "195 Liters" },
      { key: "Type", value: "Single Door" },
      { key: "Technology", value: "Turbo Icing" },
      { key: "Special Feature", value: "1 Hour Icing" },
      { key: "Energy Rating", value: "2 Star" },
    ],
  },

  // Washing Machines - Front Load
  {
    name: "Samsung 8kg Front Load Washing Machine with AI Control",
    sku: "SAM-WM-8KG-FL",
    barcode: "8801643789012",
    shortDescription: "8kg Capacity, AI Control, Steam Wash, Digital Inverter Motor",
    description: "Samsung Front Load Washing Machine with AI Control learns your washing habits and suggests cycles. Steam Wash removes tough stains and allergens. Digital Inverter Motor provides quiet operation and energy efficiency. Hygiene Steam cycle eliminates 99.9% of bacteria.",
    buyingPrice: 520,
    price: 729,
    offerPrice: 679,
    discount: 7,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800",
    galleryImages: [],
    countInStock: 10,
    lowStockWarning: 4,
    maxPurchaseQty: 3,
    weight: 72.0,
    tags: ["Washing Machine", "Samsung", "Front Load", "AI"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: true,
    specifications: [
      { key: "Capacity", value: "8 kg" },
      { key: "Type", value: "Front Load" },
      { key: "Motor", value: "Digital Inverter" },
      { key: "Special Features", value: "AI Control, Steam Wash" },
      { key: "Energy Rating", value: "5 Star" },
    ],
  },
  {
    name: "LG 7kg Front Load Washing Machine with Steam Technology",
    sku: "LG-WM-7KG-FH",
    barcode: "8806098678901",
    shortDescription: "7kg Capacity, 6 Motion Direct Drive, Steam Wash, Smart Diagnosis",
    description: "LG Front Load Washing Machine with 6 Motion Direct Drive technology provides optimal fabric care. Steam Wash reduces wrinkles and eliminates allergens. Smart Diagnosis troubleshoots issues via smartphone. Inverter Direct Drive Motor offers 10-year warranty.",
    buyingPrice: 480,
    price: 669,
    offerPrice: 629,
    discount: 6,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800",
    galleryImages: [],
    countInStock: 12,
    lowStockWarning: 5,
    maxPurchaseQty: 4,
    weight: 68.0,
    tags: ["Washing Machine", "LG", "Front Load", "Steam"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: true,
    specifications: [
      { key: "Capacity", value: "7 kg" },
      { key: "Type", value: "Front Load" },
      { key: "Motor", value: "Inverter Direct Drive" },
      { key: "Technology", value: "6 Motion DD" },
      { key: "Energy Rating", value: "5 Star" },
    ],
  },
  {
    name: "Whirlpool 6kg Front Load Washing Machine with 6th Sense SoftMove",
    sku: "WHP-WM-6KG-FL",
    barcode: "8901650234580",
    shortDescription: "6kg Capacity, 6th Sense SoftMove, FreshCare+, Built-in Heater",
    description: "Whirlpool Front Load Washing Machine with 6th Sense SoftMove Technology provides gentle fabric care. FreshCare+ keeps clothes fresh for up to 6 hours after cycle. Built-in heater for better washing performance. Perfect for couples and small families.",
    buyingPrice: 380,
    price: 529,
    offerPrice: 489,
    discount: 8,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800",
    galleryImages: [],
    countInStock: 15,
    lowStockWarning: 6,
    maxPurchaseQty: 5,
    weight: 64.0,
    tags: ["Washing Machine", "Whirlpool", "Front Load"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Capacity", value: "6 kg" },
      { key: "Type", value: "Front Load" },
      { key: "Technology", value: "6th Sense SoftMove" },
      { key: "Special Features", value: "FreshCare+, Built-in Heater" },
      { key: "Energy Rating", value: "5 Star" },
    ],
  },

  // Washing Machines - Top Load
  {
    name: "Whirlpool 7.5kg Top Load Washing Machine with ZPF Technology",
    sku: "WHP-WM-75-TL",
    barcode: "8901650234567",
    shortDescription: "7.5kg Capacity, ZPF Technology, Hard Water Wash, Express Wash",
    description: "Whirlpool Top Load Washing Machine with ZPF Technology protects fabric from damage. Hard Water Wash program effectively cleans in hard water. Express Wash completes cycle in just 30 minutes. 6th Sense SoftMove Technology provides gentle fabric care.",
    buyingPrice: 280,
    price: 399,
    offerPrice: 369,
    discount: 8,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800",
    galleryImages: [],
    countInStock: 18,
    lowStockWarning: 8,
    maxPurchaseQty: 5,
    weight: 38.0,
    tags: ["Washing Machine", "Whirlpool", "Top Load"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Capacity", value: "7.5 kg" },
      { key: "Type", value: "Fully Automatic Top Load" },
      { key: "Technology", value: "ZPF, 6th Sense" },
      { key: "Special Features", value: "Hard Water Wash" },
      { key: "Energy Rating", value: "4 Star" },
    ],
  },
  {
    name: "Panasonic 6.5kg Top Load Washing Machine with Aqua Spin Rinse",
    sku: "PANA-WM-65-TL",
    barcode: "5025232876543",
    shortDescription: "6.5kg Capacity, Aqua Spin Rinse, Active Foam System, Auto Restart",
    description: "Panasonic Top Load Washing Machine with Aqua Spin Rinse for better rinsing. Active Foam System creates foam for better dirt removal. Auto Restart resumes cycle after power cut. Perfect for small families and apartments.",
    buyingPrice: 230,
    price: 329,
    offerPrice: 299,
    discount: 9,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800",
    galleryImages: [],
    countInStock: 22,
    lowStockWarning: 10,
    maxPurchaseQty: 6,
    weight: 32.0,
    tags: ["Washing Machine", "Panasonic", "Top Load"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Capacity", value: "6.5 kg" },
      { key: "Type", value: "Fully Automatic Top Load" },
      { key: "Technology", value: "Aqua Spin Rinse" },
      { key: "Special Features", value: "Active Foam System" },
      { key: "Energy Rating", value: "3 Star" },
    ],
  },

  // Air Conditioners - Split AC
  {
    name: "Samsung 1.5 Ton 5 Star Split AC with AI Auto Cooling",
    sku: "SAM-AC-15T-SPL",
    barcode: "8801643901234",
    shortDescription: "1.5 Ton, 5 Star, AI Auto Cooling, Triple Protector, Fast Cooling",
    description: "Samsung Split AC with AI Auto Cooling optimizes cooling based on room conditions. Triple Protector Plus withstands voltage fluctuations. Fast Cooling mode reaches desired temperature quickly. DuraFin+ prevents corrosion for long-lasting performance.",
    buyingPrice: 420,
    price: 589,
    offerPrice: 549,
    discount: 7,
    image: "https://images.unsplash.com/photo-1631545423374-d787c218dccd?w=800",
    galleryImages: [],
    countInStock: 15,
    lowStockWarning: 6,
    maxPurchaseQty: 4,
    weight: 42.0,
    tags: ["AC", "Samsung", "Split AC", "Inverter"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: true,
    specifications: [
      { key: "Capacity", value: "1.5 Ton" },
      { key: "Type", value: "Split AC" },
      { key: "Technology", value: "AI Auto Cooling" },
      { key: "Energy Rating", value: "5 Star" },
      { key: "Compressor", value: "Digital Inverter" },
    ],
  },
  {
    name: "LG 1 Ton 3 Star Split AC with Dual Inverter",
    sku: "LG-AC-1T-DI",
    barcode: "8806098890123",
    shortDescription: "1 Ton, 3 Star, Dual Inverter, Ocean Black Protection, Fast Cooling",
    description: "LG Split AC with Dual Inverter Compressor provides faster cooling and energy savings. Ocean Black Protection prevents corrosion from salty air. 4-Way Swing ensures even cooling. Low Gas Detection alerts for refrigerant issues.",
    buyingPrice: 300,
    price: 429,
    offerPrice: 399,
    discount: 7,
    image: "https://images.unsplash.com/photo-1631545423374-d787c218dccd?w=800",
    galleryImages: [],
    countInStock: 20,
    lowStockWarning: 8,
    maxPurchaseQty: 5,
    weight: 35.0,
    tags: ["AC", "LG", "Split AC", "Dual Inverter"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: true,
    specifications: [
      { key: "Capacity", value: "1 Ton" },
      { key: "Type", value: "Split AC" },
      { key: "Compressor", value: "Dual Inverter" },
      { key: "Energy Rating", value: "3 Star" },
      { key: "Special Features", value: "Ocean Black Protection" },
    ],
  },

  // Air Conditioners - Window AC
  {
    name: "Whirlpool 1.5 Ton 3 Star Window AC with 6th Sense FastCool",
    sku: "WHP-AC-15T-WIN",
    barcode: "8901650345678",
    shortDescription: "1.5 Ton, 3 Star, 6th Sense FastCool, Self Diagnosis, Multi-Port Fluid Injection",
    description: "Whirlpool Window AC with 6th Sense FastCool Technology cools room 50% faster. Self Diagnosis detects 88 faults for easy troubleshooting. Multi-Port Fluid Injection ensures even cooling. Suitable for small to medium rooms.",
    buyingPrice: 260,
    price: 369,
    offerPrice: 339,
    discount: 8,
    image: "https://images.unsplash.com/photo-1631545423374-d787c218dccd?w=800",
    galleryImages: [],
    countInStock: 14,
    lowStockWarning: 6,
    maxPurchaseQty: 4,
    weight: 48.0,
    tags: ["AC", "Whirlpool", "Window AC"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Capacity", value: "1.5 Ton" },
      { key: "Type", value: "Window AC" },
      { key: "Technology", value: "6th Sense FastCool" },
      { key: "Energy Rating", value: "3 Star" },
      { key: "Refrigerant", value: "R32" },
    ],
  },
  {
    name: "Haier 1 Ton 2 Star Window AC with Turbo Cooling",
    sku: "HAIER-AC-1T-WIN",
    barcode: "6970212456789",
    shortDescription: "1 Ton, 2 Star, Turbo Cooling, Auto Restart, Anti-bacterial Filter",
    description: "Haier Window AC with Turbo Cooling mode for quick temperature reduction. Auto Restart function resumes operation after power cut. Anti-bacterial filter eliminates bacteria and dust. R32 refrigerant environment friendly and energy efficient.",
    buyingPrice: 220,
    price: 309,
    offerPrice: 279,
    discount: 10,
    image: "https://images.unsplash.com/photo-1631545423374-d787c218dccd?w=800",
    galleryImages: [],
    countInStock: 18,
    lowStockWarning: 8,
    maxPurchaseQty: 5,
    weight: 42.0,
    tags: ["AC", "Haier", "Window AC"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Capacity", value: "1 Ton" },
      { key: "Type", value: "Window AC" },
      { key: "Cooling", value: "Turbo Cooling" },
      { key: "Energy Rating", value: "2 Star" },
      { key: "Filter", value: "Anti-bacterial" },
    ],
  },
  {
    name: "Panasonic 1.5 Ton 3 Star Window AC with PM 2.5 Filter",
    sku: "PANA-AC-15T-WIN",
    barcode: "5025232876567",
    shortDescription: "1.5 Ton, 3 Star, PM 2.5 Filter, R32 Refrigerant, Auto Clean",
    description: "Panasonic Window AC with PM 2.5 Filter removes harmful particles and allergens. Auto Clean function prevents bacterial growth in the unit. R32 refrigerant provides faster cooling with less power consumption. Suitable for medium-sized rooms up to 150 sq ft.",
    buyingPrice: 280,
    price: 399,
    offerPrice: 369,
    discount: 8,
    image: "https://images.unsplash.com/photo-1631545423374-d787c218dccd?w=800",
    galleryImages: [],
    countInStock: 16,
    lowStockWarning: 7,
    maxPurchaseQty: 5,
    weight: 50.0,
    tags: ["AC", "Panasonic", "Window AC"],
    isActive: true,
    canPurchase: true,
    stockStatus: "Available Product",
    featured: false,
    specifications: [
      { key: "Capacity", value: "1.5 Ton" },
      { key: "Type", value: "Window AC" },
      { key: "Filter", value: "PM 2.5" },
      { key: "Energy Rating", value: "3 Star" },
      { key: "Refrigerant", value: "R32" },
    ],
  },
];

const importData = async () => {
  try {
    await connectDB();

    // Find or create admin user
    let adminUser = await User.findOne({ isAdmin: true });
    
    if (!adminUser) {
      console.log("Admin user not found. Creating default admin user...".yellow);
      adminUser = await User.create({
        name: "Admin",
        email: "admin@bigboss.com",
        password: "admin123", // Will be hashed by the model
        isAdmin: true,
        isVerified: true,
      });
      console.log("Admin user created successfully!".green);
      console.log(`Email: ${adminUser.email}`.cyan);
      console.log(`Password: admin123`.cyan);
      console.log("Please change the password after first login!".yellow.bold);
    } else {
      console.log("Admin user found:".green, adminUser.email);
    }

    // Clear existing data
    console.log("Clearing existing data...".yellow);
    await Category.deleteMany({});
    await SubCategory.deleteMany({});
    await Brand.deleteMany({});
    await Product.deleteMany({});
    console.log("Existing data cleared.".green);

    // Insert categories
    console.log("Importing categories...".yellow);
    const categoryDocs = await Category.insertMany(
      categories.map((cat) => ({
        ...cat,
        createdBy: adminUser._id,
        isDeleted: false,
      }))
    );
    console.log(`${categoryDocs.length} categories imported successfully.`.green);

    // Insert brands
    console.log("Importing brands...".yellow);
    const brandDocs = await Brand.insertMany(
      brands.map((brand) => ({
        ...brand,
        createdBy: adminUser._id,
        isDeleted: false,
      }))
    );
    console.log(`${brandDocs.length} brands imported successfully.`.green);

    // Create brand map
    const brandMap = {};
    brandDocs.forEach((brand) => {
      brandMap[brand.slug] = brand._id;
    });

    // Create category map
    const categoryMap = {};
    categoryDocs.forEach((cat) => {
      categoryMap[cat.slug] = cat._id;
    });

    // Insert subcategories with category references
    console.log("Importing subcategories...".yellow);
    const subCategoryData = [
      { ...subcategories[0], category: categoryMap["televisions"] }, // Smart TVs
      { ...subcategories[1], category: categoryMap["televisions"] }, // LED TVs
      { ...subcategories[2], category: categoryMap["refrigerators"] }, // Double Door Refrigerators
      { ...subcategories[3], category: categoryMap["refrigerators"] }, // Single Door Refrigerators
      { ...subcategories[4], category: categoryMap["washing-machines"] }, // Front Load Washers
      { ...subcategories[5], category: categoryMap["washing-machines"] }, // Top Load Washers
      { ...subcategories[6], category: categoryMap["air-conditioners"] }, // Split AC Units
      { ...subcategories[7], category: categoryMap["air-conditioners"] }, // Window AC Units
    ];

    const subCategoryDocs = await SubCategory.insertMany(
      subCategoryData.map((sub) => ({
        ...sub,
        createdBy: adminUser._id,
        isDeleted: false,
      }))
    );
    console.log(`${subCategoryDocs.length} subcategories imported successfully.`.green);

    // Create subcategory map
    const subCategoryMap = {};
    subCategoryDocs.forEach((sub) => {
      subCategoryMap[sub.slug] = sub._id;
    });

    // Prepare products with proper references
    const productData = [
      // Smart TVs (3 products: Samsung, LG, Sony)
      {
        ...products[0],
        brand: brandMap["samsung"],
        parentCategory: categoryMap["televisions"],
        category: subCategoryMap["smart-tvs"],
        subCategory: subCategoryMap["smart-tvs"],
      },
      {
        ...products[1],
        brand: brandMap["lg"],
        parentCategory: categoryMap["televisions"],
        category: subCategoryMap["smart-tvs"],
        subCategory: subCategoryMap["smart-tvs"],
      },
      {
        ...products[2],
        brand: brandMap["sony"],
        parentCategory: categoryMap["televisions"],
        category: subCategoryMap["smart-tvs"],
        subCategory: subCategoryMap["smart-tvs"],
      },
      // LED TVs (2 products: Panasonic, Samsung)
      {
        ...products[3],
        brand: brandMap["panasonic"],
        parentCategory: categoryMap["televisions"],
        category: subCategoryMap["led-tvs"],
        subCategory: subCategoryMap["led-tvs"],
      },
      {
        ...products[4],
        brand: brandMap["samsung"],
        parentCategory: categoryMap["televisions"],
        category: subCategoryMap["led-tvs"],
        subCategory: subCategoryMap["led-tvs"],
      },
      // Double Door Refrigerators (3 products: Samsung, LG, Whirlpool)
      {
        ...products[5],
        brand: brandMap["samsung"],
        parentCategory: categoryMap["refrigerators"],
        category: subCategoryMap["double-door-refrigerators"],
        subCategory: subCategoryMap["double-door-refrigerators"],
      },
      {
        ...products[6],
        brand: brandMap["lg"],
        parentCategory: categoryMap["refrigerators"],
        category: subCategoryMap["double-door-refrigerators"],
        subCategory: subCategoryMap["double-door-refrigerators"],
      },
      {
        ...products[7],
        brand: brandMap["whirlpool"],
        parentCategory: categoryMap["refrigerators"],
        category: subCategoryMap["double-door-refrigerators"],
        subCategory: subCategoryMap["double-door-refrigerators"],
      },
      // Single Door Refrigerators (2 products: Haier, Whirlpool)
      {
        ...products[8],
        brand: brandMap["haier"],
        parentCategory: categoryMap["refrigerators"],
        category: subCategoryMap["single-door-refrigerators"],
        subCategory: subCategoryMap["single-door-refrigerators"],
      },
      {
        ...products[9],
        brand: brandMap["whirlpool"],
        parentCategory: categoryMap["refrigerators"],
        category: subCategoryMap["single-door-refrigerators"],
        subCategory: subCategoryMap["single-door-refrigerators"],
      },
      // Front Load Washers (3 products: Samsung, LG, Whirlpool)
      {
        ...products[10],
        brand: brandMap["samsung"],
        parentCategory: categoryMap["washing-machines"],
        category: subCategoryMap["front-load-washers"],
        subCategory: subCategoryMap["front-load-washers"],
      },
      {
        ...products[11],
        brand: brandMap["lg"],
        parentCategory: categoryMap["washing-machines"],
        category: subCategoryMap["front-load-washers"],
        subCategory: subCategoryMap["front-load-washers"],
      },
      {
        ...products[12],
        brand: brandMap["whirlpool"],
        parentCategory: categoryMap["washing-machines"],
        category: subCategoryMap["front-load-washers"],
        subCategory: subCategoryMap["front-load-washers"],
      },
      // Top Load Washers (2 products: Panasonic, LG)
      {
        ...products[13],
        brand: brandMap["panasonic"],
        parentCategory: categoryMap["washing-machines"],
        category: subCategoryMap["top-load-washers"],
        subCategory: subCategoryMap["top-load-washers"],
      },
      {
        ...products[14],
        brand: brandMap["lg"],
        parentCategory: categoryMap["washing-machines"],
        category: subCategoryMap["top-load-washers"],
        subCategory: subCategoryMap["top-load-washers"],
      },
      // Split AC Units (3 products: Samsung, LG, Whirlpool)
      {
        ...products[15],
        brand: brandMap["samsung"],
        parentCategory: categoryMap["air-conditioners"],
        category: subCategoryMap["split-ac-units"],
        subCategory: subCategoryMap["split-ac-units"],
      },
      {
        ...products[16],
        brand: brandMap["lg"],
        parentCategory: categoryMap["air-conditioners"],
        category: subCategoryMap["split-ac-units"],
        subCategory: subCategoryMap["split-ac-units"],
      },
      {
        ...products[17],
        brand: brandMap["whirlpool"],
        parentCategory: categoryMap["air-conditioners"],
        category: subCategoryMap["split-ac-units"],
        subCategory: subCategoryMap["split-ac-units"],
      },
      // Window AC Units (2 products: Haier, Panasonic)
      {
        ...products[18],
        brand: brandMap["haier"],
        parentCategory: categoryMap["air-conditioners"],
        category: subCategoryMap["window-ac-units"],
        subCategory: subCategoryMap["window-ac-units"],
      },
      {
        ...products[19],
        brand: brandMap["panasonic"],
        parentCategory: categoryMap["air-conditioners"],
        category: subCategoryMap["window-ac-units"],
        subCategory: subCategoryMap["window-ac-units"],
      },
    ];

    // Auto-generate slugs for products
    const productDataWithSlugs = productData.map((product, index) => {
      if (!product.slug && product.name) {
        product.slug = product.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
      } else if (!product.name) {
        console.error(`Product at index ${index} is missing a name:`.red, product);
        throw new Error(`Product at index ${index} is missing a name property`);
      }
      return {
        ...product,
        createdBy: adminUser._id,
        reviews: [],
        rating: 0,
        numReviews: 0,
        refundable: true,
        showStockOut: true,
      };
    });

    // Insert products
    console.log("Importing products...".yellow);
    const productDocs = await Product.insertMany(productDataWithSlugs);
    console.log(`${productDocs.length} products imported successfully.`.green);

    console.log("\n========================================".cyan.bold);
    console.log("Data Import Summary:".cyan.bold);
    console.log("========================================".cyan.bold);
    console.log(`✓ Categories: ${categoryDocs.length}`.green);
    console.log(`✓ Brands: ${brandDocs.length}`.green);
    console.log(`✓ Subcategories: ${subCategoryDocs.length}`.green);
    console.log(`✓ Products: ${productDocs.length}`.green);
    console.log("========================================\n".cyan.bold);
    console.log("Data imported successfully!".green.bold);

    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await connectDB();

    console.log("Destroying data...".yellow);
    await Category.deleteMany({});
    await SubCategory.deleteMany({});
    await Brand.deleteMany({});
    await Product.deleteMany({});

    console.log("Data destroyed successfully!".green.bold);
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

// Check command line arguments
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
