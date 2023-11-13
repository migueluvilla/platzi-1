import { Component } from '@angular/core';
import { Product } from './product.model';
import { FormComponent } from './components/form/form.component';
// import { ListComponent } from './components/list/list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // VARIABLES
  widthImg: number = 300;
  par: number = 0;
  name: string = 'Miguel';
  age: number = 39;
  img: string = 'https://source.unsplash.com/random';
  lengthName: number = this.name.length;
  address = {
    street: 'Calle 123',
    city: 'Medellín',
    country: 'Colombia'
  };
  btnDisable: boolean = false;

  colors: string[] = ["orange", "salmon", "steelblue", "tomato", "deeppink", "chartreuse", "black"];
  colorRandom: string = this.colors[Math.floor(Math.random() * this.colors.length)];
  newColor: string = '';
//objeto js
  products: Product[] = [
  {
    name: "Producto 1",
    price: 19.99,
    image: this.img,
    category: 'Offer'
  },
  {
    name: "Producto 8",
    price: 89.99,
    image: "https://picsum.photos/id/87/300/300"
  },
  {
    name: "Producto 3",
    price: 39.99,
    image: "https://source.unsplash.com/random/tech"
  },
  {
    name: "Producto 5",
    price: 59.99,
    image: "https://source.unsplash.com/random/2"
  },
  {
    name: "Producto 6",
    price: 69.99,
    image: "https://picsum.photos/id/96/300/300"
  },
  {
    name: "Producto 7",
    price: 79.99,
    image: "https://source.unsplash.com/random/3"
  },
  {
    name: "Producto 9",
    price: 99.99,
    image: "https://source.unsplash.com/random/4"
  },
  {
    name: "Producto 4",
    price: 49.99,
    image: "https://picsum.photos/id/7/300/300"
  },
  {
    name: "Producto 10",
    price: 109.99,
    image: "https://picsum.photos/id/80/300/300"
  },
  {
    name: "Producto 2",
    price: 29.99,
    image: "https://picsum.photos/300/300"
  }
];




  // FUNCIONES
  toggleButton(){
    this.btnDisable = !this.btnDisable;
  };
  agePlus(){
    this.age += 1;
  };
  ageMinus(){
    this.age -= 1;
  };
  eventScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  };
  eventInput(event: Event){
    const element = event.target as HTMLInputElement;
    this.address.city = element.value;
  };

  onclick(img: any){
    this.par = this.par + 1;
    // this.img = img.src;
    // this.img = (img.src === this.img) ?
    // this.img = 'https://source.unsplash.com/random/tech' : 'https://picsum.photos/300/300';

    if ((this.par % 2) == 0)
    {
      this.img = 'https://source.unsplash.com/random/tech';
    } else {
      this.img = 'https://picsum.photos/300/300';
    }
    console.log(this.img + " <=> " + this.par);

  };
  changeCountry(event: Event){
    const element = event.target as HTMLInputElement;



    // console.log("( *" +colorAleatorio + "* )")
    // console.log("( *" +colores + "* )")

    this.address.country = element.value;
  };

  addColor(){
    this.colors.push(this.newColor);
    this.newColor = '';
  };

  deleteColor(index: number){
    this.colors.splice(index, 1);
  };
}

