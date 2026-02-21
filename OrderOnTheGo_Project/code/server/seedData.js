// ============================================================
//  Food Delivery App - MongoDB Seed Script
//  Run with: node seedData.js
//  Requirements: npm install mongoose bcrypt
// ============================================================

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// ── Schemas (copy of your Schema.js) ─────────────────────────
const userSchema = new mongoose.Schema({
  username: String, password: String, email: String,
  usertype: String, approval: String
});
const adminSchema = new mongoose.Schema({
  categories: Array,
  promotedRestaurants: []
});
const restaurantSchema = new mongoose.Schema({
  ownerId: String, title: String, address: String,
  mainImg: String, menu: { type: Array, default: [] }
});
const foodItemSchema = new mongoose.Schema({
  title: String, description: String, itemImg: String,
  category: String, menuCategory: String, restaurantId: String,
  price: Number, discount: Number, rating: Number
});
const orderSchema = new mongoose.Schema({
  userId: String, name: String, email: String, mobile: String,
  address: String, pincode: String, restaurantId: String,
  restaurantName: String, foodItemId: String, foodItemName: String,
  foodItemImg: String, quantity: Number, price: Number, discount: Number,
  paymentMethod: String, orderDate: String,
  orderStatus: { type: String, default: 'order placed' }
});
const cartSchema = new mongoose.Schema({
  userId: String, restaurantId: String, restaurantName: String,
  foodItemId: String, foodItemName: String, foodItemImg: String,
  quantity: Number, price: Number, discount: Number
});

const User       = mongoose.model('users',      userSchema);
const Admin      = mongoose.model('admin',      adminSchema);
const Restaurant = mongoose.model('restaurant', restaurantSchema);
const FoodItem   = mongoose.model('foodItem',   foodItemSchema);
const Orders     = mongoose.model('orders',     orderSchema);
const Cart       = mongoose.model('cart',       cartSchema);

// ── Helpers ───────────────────────────────────────────────────
const fmt = (d) => d.toISOString().split('T')[0];
const today   = fmt(new Date());
const ago = (n) => fmt(new Date(Date.now() - n * 86400000));

// ── Seed ──────────────────────────────────────────────────────
async function seed() {
  await mongoose.connect('mongodb://localhost:27017/foodDelivery', {
    useNewUrlParser: true, useUnifiedTopology: true
  });
  console.log('✅  Connected to MongoDB');

  // Clear existing data
  await Promise.all([
    User.deleteMany(), Admin.deleteMany(), Restaurant.deleteMany(),
    FoodItem.deleteMany(), Orders.deleteMany(), Cart.deleteMany()
  ]);
  console.log('🗑   Cleared existing collections');

  // ── 1. Admin ─────────────────────────────────────────────────
  const admin = await Admin.create({
    categories: ['Burgers', 'Pizza', 'Biryani', 'Desserts', 'Beverages', 'Starters'],
    promotedRestaurants: []   // filled after restaurant IDs are known
  });

  // ── 2. Users ─────────────────────────────────────────────────
  const hash = (p) => bcrypt.hash(p, 10);

  const [adminUser, u1, u2, u3, r1Owner, r2Owner, r3Owner] = await User.insertMany([
    { username: 'Admin',          email: 'admin@food.com',      usertype: 'admin',      approval: 'approved', password: await hash('Admin@123') },
    { username: 'Ravi Kumar',     email: 'ravi@gmail.com',      usertype: 'customer',   approval: 'approved', password: await hash('Ravi@123') },
    { username: 'Priya Sharma',   email: 'priya@gmail.com',     usertype: 'customer',   approval: 'approved', password: await hash('Priya@123') },
    { username: 'Arjun Reddy',    email: 'arjun@gmail.com',     usertype: 'customer',   approval: 'approved', password: await hash('Arjun@123') },
    { username: 'SKY GARDENS',   email: 'spice@rest.com',      usertype: 'restaurant', approval: 'approved', password: await hash('Spice@123') },
    { username: 'Pizza Palace',   email: 'pizza@rest.com',      usertype: 'restaurant', approval: 'approved', password: await hash('Pizza@123') },
    { username: 'Sweet Bites',    email: 'sweet@rest.com',      usertype: 'restaurant', approval: 'pending',  password: await hash('Sweet@123') },
  ]);
  console.log('👤  Users created:', 7);

  // ── 3. Restaurants ───────────────────────────────────────────
  const [rest1, rest2, rest3] = await Restaurant.insertMany([
    {
      ownerId: r1Owner._id.toString(),
      title: 'SKY GARDENS',
      address: '12, MG Road, Hyderabad - 500001',
      mainImg: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600',
      menu: ['Starters', 'Biryani', 'Beverages']
    },
    {
      ownerId: r2Owner._id.toString(),
      title: 'Pizza Palace',
      address: '45, Banjara Hills, Hyderabad - 500034',
      mainImg: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600',
      menu: ['Pizza', 'Burgers', 'Beverages', 'Desserts']
    },
    {
      ownerId: r3Owner._id.toString(),
      title: 'Sweet Bites',
      address: '8, Jubilee Hills, Hyderabad - 500033',
      mainImg: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600',
      menu: ['Desserts', 'Beverages']
    }
  ]);
  console.log('🏪  Restaurants created:', 3);

  // Update promoted list in admin
  admin.promotedRestaurants = [rest1._id.toString(), rest2._id.toString()];
  await admin.save();

  // ── 4. Food Items ─────────────────────────────────────────────
  const foodItems = await FoodItem.insertMany([
    // SKY GARDENS — Starters
    { title: 'Paneer Tikka',      description: 'Grilled cottage cheese with spices',       itemImg: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400', category: 'veg',     menuCategory: 'Starters',   restaurantId: rest1._id.toString(), price: 220, discount: 10, rating: 4.5 },
    { title: 'Chicken 65',        description: 'Crispy deep-fried chicken with curry leaves', itemImg: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400', category: 'non-veg', menuCategory: 'Starters',   restaurantId: rest1._id.toString(), price: 280, discount: 5,  rating: 4.7 },
    // SKY GARDENS — Biryani
    { title: 'Veg Biryani',       description: 'Aromatic basmati rice with mixed vegetables', itemImg: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400', category: 'veg',     menuCategory: 'Biryani',    restaurantId: rest1._id.toString(), price: 180, discount: 0,  rating: 4.2 },
    { title: 'Chicken Biryani',   description: 'Hyderabadi style chicken dum biryani',     itemImg: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400', category: 'non-veg', menuCategory: 'Biryani',    restaurantId: rest1._id.toString(), price: 260, discount: 15, rating: 4.8 },
    { title: 'Mutton Biryani',    description: 'Slow-cooked mutton with saffron rice',     itemImg: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400', category: 'non-veg', menuCategory: 'Biryani',    restaurantId: rest1._id.toString(), price: 350, discount: 10, rating: 4.9 },
    // SKY GARDENS — Beverages
    { title: 'Mango Lassi',       description: 'Chilled yogurt drink blended with mango',  itemImg: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400', category: 'beverage', menuCategory: 'Beverages',  restaurantId: rest1._id.toString(), price: 80,  discount: 0,  rating: 4.3 },

    // Pizza Palace — Pizza
    { title: 'Margherita Pizza',  description: 'Classic tomato sauce with mozzarella',     itemImg: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400', category: 'veg',     menuCategory: 'Pizza',      restaurantId: rest2._id.toString(), price: 299, discount: 20, rating: 4.4 },
    { title: 'Pepperoni Pizza',   description: 'Loaded with pepperoni and cheese',          itemImg: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', category: 'non-veg', menuCategory: 'Pizza',      restaurantId: rest2._id.toString(), price: 399, discount: 10, rating: 4.6 },
    // Pizza Palace — Burgers
    { title: 'Classic Beef Burger', description: 'Juicy beef patty with lettuce and cheese', itemImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', category: 'non-veg', menuCategory: 'Burgers',   restaurantId: rest2._id.toString(), price: 249, discount: 5,  rating: 4.5 },
    { title: 'Veggie Burger',     description: 'Aloo tikki patty with mint chutney',        itemImg: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400', category: 'veg',     menuCategory: 'Burgers',    restaurantId: rest2._id.toString(), price: 179, discount: 0,  rating: 4.1 },
    // Pizza Palace — Desserts
    { title: 'Choco Lava Cake',   description: 'Warm chocolate cake with molten center',    itemImg: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400', category: 'veg',     menuCategory: 'Desserts',   restaurantId: rest2._id.toString(), price: 149, discount: 0,  rating: 4.7 },
    // Pizza Palace — Beverages
    { title: 'Cold Coffee',       description: 'Blended coffee with milk and ice cream',    itemImg: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400', category: 'beverage', menuCategory: 'Beverages', restaurantId: rest2._id.toString(), price: 120, discount: 10, rating: 4.0 },

    // Sweet Bites — Desserts
    { title: 'Gulab Jamun',       description: 'Soft milk-solid dumplings in sugar syrup',  itemImg: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400', category: 'veg',     menuCategory: 'Desserts',   restaurantId: rest3._id.toString(), price: 99,  discount: 0,  rating: 4.6 },
    { title: 'Rasmalai',          description: 'Soft chenna patties in saffron milk',       itemImg: 'https://images.unsplash.com/photo-1666350025070-7e06f4e5aea4?w=400', category: 'veg',     menuCategory: 'Desserts',   restaurantId: rest3._id.toString(), price: 129, discount: 5,  rating: 4.8 },
    { title: 'Brownie Sundae',    description: 'Warm brownie topped with vanilla ice cream', itemImg: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400', category: 'veg',     menuCategory: 'Desserts',   restaurantId: rest3._id.toString(), price: 159, discount: 10, rating: 4.5 },
  ]);
  console.log('🍽   Food items created:', foodItems.length);

  // ── 5. Orders ─────────────────────────────────────────────────
  const statuses = ['order placed', 'confirmed', 'preparing', 'out for delivery', 'delivered', 'cancelled'];
  const ordersData = [
    { userId: u1._id, name: 'Ravi Kumar',   email: 'ravi@gmail.com',  mobile: '9876543210', address: '22, Kondapur, Hyderabad', pincode: '500084', foodItem: foodItems[3], qty: 2, date: ago(1),  status: 'delivered',        payment: 'online' },
    { userId: u1._id, name: 'Ravi Kumar',   email: 'ravi@gmail.com',  mobile: '9876543210', address: '22, Kondapur, Hyderabad', pincode: '500084', foodItem: foodItems[6], qty: 1, date: ago(3),  status: 'delivered',        payment: 'cash'   },
    { userId: u1._id, name: 'Ravi Kumar',   email: 'ravi@gmail.com',  mobile: '9876543210', address: '22, Kondapur, Hyderabad', pincode: '500084', foodItem: foodItems[7], qty: 1, date: today,   status: 'out for delivery', payment: 'online' },
    { userId: u2._id, name: 'Priya Sharma', email: 'priya@gmail.com', mobile: '9123456780', address: '5, Gachibowli, Hyderabad', pincode: '500032', foodItem: foodItems[0], qty: 1, date: ago(2),  status: 'delivered',        payment: 'online' },
    { userId: u2._id, name: 'Priya Sharma', email: 'priya@gmail.com', mobile: '9123456780', address: '5, Gachibowli, Hyderabad', pincode: '500032', foodItem: foodItems[12], qty: 2, date: ago(5), status: 'delivered',        payment: 'cash'   },
    { userId: u2._id, name: 'Priya Sharma', email: 'priya@gmail.com', mobile: '9123456780', address: '5, Gachibowli, Hyderabad', pincode: '500032', foodItem: foodItems[4], qty: 1, date: today,   status: 'preparing',        payment: 'online' },
    { userId: u3._id, name: 'Arjun Reddy',  email: 'arjun@gmail.com', mobile: '9988776655', address: '88, Madhapur, Hyderabad', pincode: '500081', foodItem: foodItems[8], qty: 2, date: ago(7),  status: 'delivered',        payment: 'cash'   },
    { userId: u3._id, name: 'Arjun Reddy',  email: 'arjun@gmail.com', mobile: '9988776655', address: '88, Madhapur, Hyderabad', pincode: '500081', foodItem: foodItems[1], qty: 1, date: ago(1),  status: 'cancelled',        payment: 'online' },
    { userId: u3._id, name: 'Arjun Reddy',  email: 'arjun@gmail.com', mobile: '9988776655', address: '88, Madhapur, Hyderabad', pincode: '500081', foodItem: foodItems[10], qty: 1, date: today,  status: 'confirmed',        payment: 'online' },
  ];

  const restMap = {
    [rest1._id.toString()]: rest1.title,
    [rest2._id.toString()]: rest2.title,
    [rest3._id.toString()]: rest3.title,
  };

  await Orders.insertMany(ordersData.map(o => ({
    userId:         o.userId.toString(),
    name:           o.name,
    email:          o.email,
    mobile:         o.mobile,
    address:        o.address,
    pincode:        o.pincode,
    restaurantId:   o.foodItem.restaurantId,
    restaurantName: restMap[o.foodItem.restaurantId],
    foodItemId:     o.foodItem._id.toString(),
    foodItemName:   o.foodItem.title,
    foodItemImg:    o.foodItem.itemImg,
    quantity:       o.qty,
    price:          o.foodItem.price,
    discount:       o.foodItem.discount,
    paymentMethod:  o.payment,
    orderDate:      o.date,
    orderStatus:    o.status,
  })));
  console.log('📦  Orders created:', ordersData.length);

  // ── 6. Cart items (active for Ravi) ──────────────────────────
  await Cart.insertMany([
    {
      userId:         u1._id.toString(),
      restaurantId:   rest1._id.toString(),
      restaurantName: rest1.title,
      foodItemId:     foodItems[2]._id.toString(),
      foodItemName:   foodItems[2].title,
      foodItemImg:    foodItems[2].itemImg,
      quantity:       1,
      price:          foodItems[2].price,
      discount:       foodItems[2].discount,
    },
    {
      userId:         u1._id.toString(),
      restaurantId:   rest1._id.toString(),
      restaurantName: rest1.title,
      foodItemId:     foodItems[5]._id.toString(),
      foodItemName:   foodItems[5].title,
      foodItemImg:    foodItems[5].itemImg,
      quantity:       2,
      price:          foodItems[5].price,
      discount:       foodItems[5].discount,
    }
  ]);
  console.log('🛒  Cart items created: 2  (for Ravi Kumar)');

  // ── Summary ───────────────────────────────────────────────────
  console.log('\n════════════════════════════════════');
  console.log('  Seed complete! Login credentials');
  console.log('════════════════════════════════════');
  console.log('  Admin      → admin@food.com    / Admin@123');
  console.log('  Customer 1 → ravi@gmail.com    / Ravi@123');
  console.log('  Customer 2 → priya@gmail.com   / Priya@123');
  console.log('  Customer 3 → arjun@gmail.com   / Arjun@123');
  console.log('  Restaurant → spice@rest.com    / Spice@123');
  console.log('  Restaurant → pizza@rest.com    / Pizza@123');
  console.log('  Pending    → sweet@rest.com    / Sweet@123');
  console.log('════════════════════════════════════\n');

  await mongoose.disconnect();
}

seed().catch(err => { console.error(err); process.exit(1); });