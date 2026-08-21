import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CartService, CartItem } from '../../../services/cart.service';

interface Phone {
  title: string;
}


@Component({
  
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public cartService: CartService) {}
  @ViewChild('searchWrapper')
  searchWrapper!: ElementRef;

  @ViewChild('cartWrapper')
  cartWrapper!: ElementRef;

  searchOpen = false;
  searchTerm = '';

  cartOpen = false;

  toggleCart() {
    this.cartOpen = !this.cartOpen;

    if (this.cartOpen) {
      this.searchOpen = false;
    }
  }

  closeCart() {
    this.cartOpen = false;
  }

  get cartItems(): CartItem[] {
    return this.cartService.items;
  }

  phones: Phone[] = [
    { title: 'Galaxy FE' },
    { title: 'Galaxy Fold' },
    { title: 'Galaxy Ultra' },
    { title: 'iPhone 16' },
    { title: 'iPhone 16 Pro Max' },
    { title: 'iPhone 17' }
  ];

  toggleSearch() {
    this.searchOpen = !this.searchOpen;

    if (this.searchOpen) {
      this.cartOpen = false;
    }

    if (!this.searchOpen) {
      this.searchTerm = '';
    }
  }

  closeSearch() {
    this.searchOpen = false;
    this.searchTerm = '';
  }

  get filteredPhones() {
    const search = this.searchTerm.toLowerCase().trim();

    if (!search) {
      return this.phones;
    }

    return this.phones.filter(phone =>
      phone.title.toLowerCase().includes(search)
    );
  }
  @HostListener('document:click')
  onDocumentClick() {
    if (this.searchOpen) {
      this.closeSearch();
    }

    if (this.cartOpen) {
      this.closeCart();
    }
  }
}