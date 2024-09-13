import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  
  products: Product[] = [
    {
      id: 1,
      title: 'San pham A',
      description: 'Mo ta san pham a',
      price: 111,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RWQ0h1LZxZHLad9eB0JVgBlzqEPPrZVeQQ&s',
    },
    {
      id: 2,
      title: 'San pham B',
      description: 'Mo ta san pham a',
      price: 111,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RWQ0h1LZxZHLad9eB0JVgBlzqEPPrZVeQQ&s',
    },
    {
      id: 3,
      title: 'San pham C',
      description: 'Mo ta san pham a',
      price: 111,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RWQ0h1LZxZHLad9eB0JVgBlzqEPPrZVeQQ&s',
    },
    {
      id: 4,
      title: 'San pham C',
      description: 'Mo ta san pham a',
      price: 111,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RWQ0h1LZxZHLad9eB0JVgBlzqEPPrZVeQQ&s',
    },
  ];
}
