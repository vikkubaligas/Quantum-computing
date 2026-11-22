// SAMPLE DATA - to be replaced with the real trip details.
// Each expense: day (1-4), item, amount, paidBy, and optional "among" (list of names sharing it; default = everyone).
window.TRIP = {
  title: "Our Trip",
  currency: "₹",
  people: ["Asha","Bala","Chitra","Dev","Esha","Farhan","Gita","Hari","Indu","Jai","Kiran"],
  days: [
    { n: 1, label: "Day 1", date: "Fri, 7 Nov" },
    { n: 2, label: "Day 2", date: "Sat, 8 Nov" },
    { n: 3, label: "Day 3", date: "Sun, 9 Nov" },
    { n: 4, label: "Day 4", date: "Mon, 10 Nov" }
  ],
  expenses: [
    { day: 1, item: "Fuel", amount: 4200, paidBy: "Asha" },
    { day: 1, item: "Lunch", amount: 3300, paidBy: "Bala" },
    { day: 1, item: "Resort stay", amount: 22000, paidBy: "Chitra" },
    { day: 2, item: "Breakfast", amount: 2200, paidBy: "Dev" },
    { day: 2, item: "Boating", amount: 5500, paidBy: "Esha" },
    { day: 2, item: "Dinner", amount: 6600, paidBy: "Asha" },
    { day: 3, item: "Entry tickets", amount: 3300, paidBy: "Farhan" },
    { day: 3, item: "Lunch", amount: 4400, paidBy: "Kiran" },
    { day: 3, item: "Snacks", amount: 900, paidBy: "Gita", among: ["Gita","Hari","Indu"] },
    { day: 4, item: "Breakfast", amount: 2750, paidBy: "Jai" },
    { day: 4, item: "Fuel", amount: 3800, paidBy: "Bala" },
    { day: 4, item: "Toll", amount: 600, paidBy: "Hari" }
  ]
};
