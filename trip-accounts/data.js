// Trip data. Defaults: paid by Shwetha, shared equally by everyone.
// Optional per expense: paid {name: amount} for split payments, among [names] for partial sharing,
// settled:true = already cleared (counted in totals, left out of who-pays-whom), note = remark.
window.TRIP = {
  title: "Puri Trip",
  currency: "₹",
  defaultPayer: "Shwetha",
  people: ["Shwetha","Shivanand","Vishwanath","Govind","Lata","Member 6","Member 7","Member 8","Member 9","Member 10","Member 11"],
  days: [
    { n: 0, label: "Whole trip", date: "Flights, stay & transport" },
    { n: 1, label: "Day 1", date: "" },
    { n: 2, label: "Day 2", date: "" },
    { n: 3, label: "Day 3", date: "" },
    { n: 4, label: "Day 4", date: "" }
  ],
  expenses: [
    { day: 0, item: "Flight tickets (₹17,385 per head)", amount: 191235, settled: true, note: "Paid and cleared by everyone" },
    { day: 0, item: "Jagat Sayi Nilayam – 2 nights, Puri", amount: 18504, note: "Best stay experience, close to the temple. Dirty way to the temple." },
    { day: 0, item: "Tempo Traveller – all 4 days", amount: 29000 },

    { day: 1, item: "Bangalore airport cab", amount: 2592, among: ["Shwetha","Shivanand","Vishwanath","Member 6","Member 7","Member 8","Member 9","Member 10","Member 11"], note: "9 people (excludes Govind & Lata)" },
    { day: 1, item: "Bangalore airport food", amount: 1680, paid: { "Shwetha": 870, "Shivanand": 810 } },
    { day: 1, item: "Dinner – Puri Agrawal", amount: 2866, note: "Good food. Soup was served to other customers first, then offered to us." },
    { day: 1, item: "Chappal & mobile locker (Mahaprabhu darshan)", amount: 120 },

    { day: 2, item: "Breakfast – Jagat Sayi Nilayam", amount: 1481, note: "Not so good. No plates, inconvenient." },
    { day: 2, item: "Darshan bhog", amount: 1110, paid: { "Shwetha": 1000, "Govind": 110 } },
    { day: 2, item: "Pandit charges", amount: 4000, paid: { "Govind": 2000, "Vishwanath": 1500, "Shwetha": 500 }, note: "Initially quoted ₹1,000 for all 11; ₹3,000 extra demanded after darshan." },
    { day: 2, item: "Darshan locker", amount: 150, paid: { "Vishwanath": 150 } },
    { day: 2, item: "Lunch – Kalicharan Dash", amount: 1350, note: "Banana leaf, unlimited food, papad extra. Not clean; tiny cockroach in the curd." },
    { day: 2, item: "Chappal stand – Loknath temple", amount: 50, paid: { "Vishwanath": 50 }, note: "Heavy rain" }
  ]
};
