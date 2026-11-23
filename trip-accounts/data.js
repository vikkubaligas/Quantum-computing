// Trip data. Defaults: paid by Shwetha, shared equally by everyone.
// Optional per expense: paid {name: amount} for split payments, among [names] for partial sharing,
// settled:true = already cleared (counted in totals, left out of who-pays-whom), note = remark.
// Everyone except Govind and Lata
const NINE = ["Vikram","Shwetha","Sandhya","Vijayalakshmi","Shivanand","Saujanya","Sinchan","Vishwanath","Varalakshmi"];
window.TRIP = {
  title: "Puri Trip",
  currency: "₹",
  defaultPayer: "Shwetha",
  people: ["Vikram","Shwetha","Sandhya","Vijayalakshmi","Shivanand","Saujanya","Sinchan","Govind","Lata","Vishwanath","Varalakshmi"],
  fullNames: {
    "Vikram":"Vikram Baliga","Shwetha":"Shwetha Bhagavath","Sandhya":"Sandhya Bhagavath","Vijayalakshmi":"Vijayalakshmi Bhagavath",
    "Shivanand":"Shivanand Kamath","Saujanya":"Saujanya Kamath","Sinchan":"Sinchan Kamath","Govind":"Govind Prabhu",
    "Lata":"Lata Prabhu","Vishwanath":"Vishwanath Bhagavath","Varalakshmi":"Varalakshmi Bhagavath"
  },
  days: [
    { n: 0, label: "Whole trip", date: "Flights, stay & transport" },
    { n: 1, label: "Day 1", date: "Wed, 18 Nov 2026" },
    { n: 2, label: "Day 2", date: "Thu, 19 Nov 2026" },
    { n: 3, label: "Day 3", date: "Fri, 20 Nov 2026" },
    { n: 4, label: "Day 4", date: "21–22 Nov 2026" }
  ],
  expenses: [
    { day: 0, item: "Flight tickets (₹17,385 per head)", amount: 191235, settled: true, note: "Paid and cleared by everyone" },
    { day: 0, item: "Jagat Sayi Nilayam – 2 nights, Puri", amount: 18504, note: "Best stay experience, close to the temple. Dirty way to the temple." },
    { day: 0, item: "Tempo Traveller – all 4 days", amount: 29000 },

    { day: 1, item: "Bangalore airport cab", amount: 2592, among: NINE, note: "9 people (excludes Govind & Lata)" },
    { day: 1, item: "Bangalore airport food", amount: 1680, paid: { "Shwetha": 870, "Shivanand": 810 } },
    { day: 1, item: "Dinner – Puri Agrawal", amount: 2866, note: "Good food. Soup was served to other customers first, then offered to us." },
    { day: 1, item: "Chappal & mobile locker (Mahaprabhu darshan)", amount: 120 },

    { day: 2, item: "Breakfast – Jagat Sayi Nilayam", amount: 1481, note: "Not so good. No plates, inconvenient." },
    { day: 2, item: "Darshan bhog", amount: 1110, paid: { "Shwetha": 1000, "Govind": 110 } },
    { day: 2, item: "Pandit charges", amount: 4000, paid: { "Govind": 2000, "Vishwanath": 1500, "Shwetha": 500 }, note: "Initially quoted ₹1,000 for all 11; ₹3,000 extra demanded after darshan." },
    { day: 2, item: "Darshan locker", amount: 150, paid: { "Vishwanath": 150 } },
    { day: 2, item: "Lunch – Kalicharan Dash", amount: 1350, note: "Banana leaf, unlimited food, papad extra. Not clean; tiny cockroach in the curd." },
    { day: 2, item: "Bedi Hanuman tickets", amount: 110 },
    { day: 2, item: "Sakshi Gopal", amount: 350, paid: { "Shivanand": 200, "Shwetha": 100, "Vishwanath": 50 } },
    { day: 2, item: "Toto (e-auto) – Grand Road to Nrushingha Sweets", amount: 400, paid: { "Shivanand": 400 }, note: "Agreed ₹300 but charged ₹400." },
    { day: 2, item: "Dinner – Puri Agrawal", amount: 3300 },
    { day: 2, item: "Snacks in Bhubaneswar (chips, Oreo, Good Day etc.)", amount: 215 },
    { day: 2, item: "Rajarani temple tickets", amount: 220 },
    { day: 2, item: "Lunch – Railview", amount: 3212, paid: { "Shwetha": 3162, "Shivanand": 50 }, note: "Waiter doubted our ordering; we suspected food was brought from outside." },
    { day: 2, item: "Caves entry – Udayagiri & Khandagiri", amount: 275 },
    { day: 2, item: "Dinner – Railview (Swiggy)", amount: 2378, note: "Ordered on Swiggy; plates borrowed from the hotel on rent." },
    { day: 2, item: "Fruits on the way", amount: 700, paid: { "Shivanand": 400, "Govind": 300 } },
    { day: 2, item: "Chappal stand – Loknath temple", amount: 50, paid: { "Vishwanath": 50 }, note: "Heavy rain" },

    { day: 3, item: "Breakfast", amount: 1980, note: "Good food. Dosa was delayed for Vishwanath." },
    { day: 3, item: "Nandankanan Zoo – tickets, e-vehicle & safari", amount: 4062, note: "No guide taken; zoo confusing, no signs. Saw lions and bears. Sandhya pranked the whole bus (driver too) about a bear, which made him reverse to look at a log." },
    { day: 3, item: "Lunch – Odisha hotel (thali)", amount: 3933, note: "Only the thali of the day. Large thali, lots of items. Kheer was so good we asked for it again and again." },
    { day: 3, item: "Dhauli Stupa", amount: 600, paid: { "Shwetha": 500, "Govind": 100 }, note: "The auto driver who overcharged ₹600 warned us about people near the temple who would cheat us." },
    { day: 3, item: "Dinner – Dalma (fish & non-veg)", amount: 4103, note: "Costliest dinner of the trip." },

    { day: 4, item: "Breakfast in front of Konark", amount: 1000, paid: { "Shivanand": 1000 } },
    { day: 4, item: "Photos & coconut – Konark", amount: 830, paid: { "Shivanand": 830 } },
    { day: 4, item: "Konark entry fee (online)", amount: 385, note: "Long online queue, no offline queue." },
    { day: 4, item: "Extra paid to driver", amount: 850, paid: { "Shwetha": 350, "Shivanand": 500 } },
    { day: 4, item: "Lunch at airport", amount: 3650, note: "Costliest lunch of the trip. Everyone ate once." },
    { day: 4, item: "Cab from Bangalore airport to home", amount: 2875, among: NINE, paid: { "Shwetha": 1520, "Shivanand": 1355 }, note: "9 people (excludes Govind & Lata)" }
  ]
};
