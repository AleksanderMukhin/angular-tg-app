import { Injectable } from '@angular/core';

const domain = 'https://result.school'

export enum ProductType {
  Skill = 'skill',
  Intensive = 'intensive',
  Course = 'course',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  time: string;
  type: ProductType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: domain + product.link,
  };
}

const products: IProduct[] = [
  {
    id: '29',
    title: 'TypeScript',
    link: '/products/typescript',
    image: '/img/icons/products/icon-ts.svg',
    text: 'Oсновы типы компилятор классы утилиты декораторы',
    time: 'С опытом две недели',
    type: ProductType.Skill,
  },
  {
    id: '30',
    title: 'GIT',
    link: '/products/git',
    image: '/img/icons/products/icon-git.svg',
    text: 'Oсновы типы компилятор классы утилиты декораторы',
    time: 'С опытом две недели',
    type: ProductType.Skill,
  },
  {
    id: '910',
    title: 'Redux',
    link: '/products/state-managers',
    image: '/img/icons/products/icon-state-managers.svg',
    text: 'Oсновы типы компилятор классы утилиты декораторы',
    time: 'С опытом две недели',
    type: ProductType.Skill,
  },
  {
    id: '940',
    title: 'Frontend',
    link: '/products/first-stage',
    image: '/img/icons/products/icon-first-stage.svg',
    text: 'Oсновы типы компилятор классы утилиты декораторы',
    time: 'С опытом две недели',
    type: ProductType.Skill,
  },
  {
    id: '840',
    title: 'Back-end',
    link: '/products/Back-end',
    image: '/img/icons/products/icon-Back-end.svg',
    text: 'Oсновы типы компилятор классы утилиты декораторы',
    time: 'С опытом две недели',
    type: ProductType.Intensive,
  },
]

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {})
  }

  constructor() { }
}
