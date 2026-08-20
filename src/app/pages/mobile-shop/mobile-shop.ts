import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Phone {
  title: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-mobile-shop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mobile-shop.html',
  styleUrl: './mobile-shop.css'
})
export class MobileShop {

  searchTerm = '';

  phones: Phone[] = [
    {
      title: 'Galaxy FE',
      description: 'Excellent everyday performance with a vibrant display and long battery life.',
      price: 699,
      image: '/images/phones/galaxy-fe.png'
    },
    {
      title: 'Galaxy Fold',
      description: 'A premium foldable phone designed for productivity and entertainment.',
      price: 1599,
      image: '/images/phones/galaxy-fold.png'
    },
    {
      title: 'Galaxy Ultra',
      description: 'Flagship performance with an advanced camera and stunning display.',
      price: 1199,
      image: '/images/phones/galaxy-ultra.png'
    },
    {
      title: 'iPhone 16 Pro Max',
      description: 'Apple’s premium smartphone with exceptional performance and camera quality.',
      price: 1299,
      image: '/images/phones/iphone-16-pro-max.png'
    },
    {
      title: 'iPhone 16',
      description: 'Powerful everyday iPhone with a beautiful display and excellent battery life.',
      price: 899,
      image: '/images/phones/iphone-16.png'
    },
    {
      title: 'iPhone 17',
      description: 'The latest iPhone with refined design and next-generation performance.',
      price: 999,
      image: '/images/phones/iphone-17.png'
    }
  ];

get filteredPhones(): Phone[] {
  const search = this.searchTerm.toLowerCase().trim();

  if (!search) {
    return this.phones;
  }

  return this.phones.filter(phone =>
    phone.title.toLowerCase().includes(search)
  );
}
}