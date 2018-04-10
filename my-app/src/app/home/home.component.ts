import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [{
    name: "Candy",
    src:"https://uvmbored.com/wp-content/uploads/2017/01/o13vffkurigjlahnbtwp.jpg",
    price: 2.15,
  },
  {
    name: "Spinning-Top",
    src:"https://sc01.alicdn.com/kf/HTB1pJIOSpXXXXb6XFXXq6xXFXXXN/Handmade-wooden-spinning-top-super-top-toys.jpg_350x350.jpg",
    price: 5.25,
  },
  {
    name: "Teddy-Bear",
    src:"http://heirbears.com/images/Baxter/2011%20Bears%20159.jpg",
    price: 3.10
  }];

  totals = [{
    name: "Candy",
    num: 0,
    total: 0,
  },
  {
    name: "Spinning-Top",
    num: 0,
    total: 0,
  },
  {
    name: "Teddy-Bear",
    num: 0,
    total: 0
  }]

  total = 0;

  constructor() { }

  ngOnInit() {
  }

  addItem(item): void {

    if (item.name == "Candy") {
      this.totals[0].num += 1;
      this.totals[0].total += item.price
    }

    if (item.name == "Spinning-Top") {
      this.totals[1].num += 1;
      this.totals[1].total += item.price
    }

    if (item.name == "Teddy-Bear") {
      this.totals[2].num += 1;
      this.totals[2].total += item.price
    }

    this.total = this.calculateTotal();
  }

  removeItem(i): void {

    if (i.name == "Candy" && i.num > 0) {
      this.totals[0].num -= 1;
      this.totals[0].total -= 2.15;
    }

    if (i.name == "Spinning-Top" && i.num > 0) {
      this.totals[1].num -= 1;
      this.totals[1].total -= 5.25;
    }


    if (i.name == "Teddy-Bear" && i.num > 0) {
      this.totals[2].num -= 1;
      this.totals[2].total -= 3.10
    }

    this.total = this.calculateTotal();
  }

  calculateTotal(): number {

    var t = 0;
    for (var i = 0; i < this.totals.length; i++) {
      t += this.totals[i].total;
    }

    return t;
  }

  gotoAboutPage(): void {
    
  }



}
