import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


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
    @ViewChild('searchWrapper')
  searchWrapper!: ElementRef;
  searchOpen = false;
  searchTerm = '';

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
  }
}