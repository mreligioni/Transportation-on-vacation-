function rentalCarCost(d) {
    let amount = d * 40;
    if (d >= 3 && d < 7)
      return amount - 20;
    else if (d >=7)
      return amount - 50;
    else
      return amount;
  }