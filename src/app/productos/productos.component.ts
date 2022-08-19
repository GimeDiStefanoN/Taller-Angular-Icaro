import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Productmodel } from '../productmodel';
import { ProductoserviceService } from '../service/productoservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Productmodel[] = [];
  productosSubscription!: Subscription;
  

  constructor(
    private ProductoserviceService: ProductoserviceService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productosSubscription = this.ProductoserviceService.getProductos().subscribe((data:Productmodel[]) =>{
    this.productos = data.slice(0, 4);
    console.log(this.productos)
    });
  }

  agregar() {
    this.snackBar.open("Agregado al carrito", "", {duration: 6000});
  }

  eliminar() {
    this.snackBar.open("Producto Borrado", "", {duration: 6000});
  }

  ngOnDestroy(){
    this.productosSubscription.unsubscribe();
  }
}
