// Trip data. Defaults: paid by Shwetha, shared equally by everyone.
// Optional per expense: paid {name: amount} for split payments, among [names] for partial sharing,
// settled:true = already cleared (counted in totals, left out of who-pays-whom), note = remark.
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

    { day: 1, item: "Bangalore airport cab", amount: 2592, among: ["Vikram","Shwetha","Sandhya","Vijayalakshmi","Shivanand","Saujanya","Sinchan","Vishwanath","Varalakshmi"], note: "9 people (excludes Govind & Lata)" },
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
    { day: 2, item: "Chappal stand – Loknath temple", amount: 50, paid: { "Vishwanath": 50 }, note: "Heavy rain" },

    { day: 3, item: "Breakfast", amount: 1980, note: "Good food. Dosa was delayed for Vishwanath." }
  ]
};
