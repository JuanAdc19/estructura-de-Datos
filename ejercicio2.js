//Taller#2
// Gestión de Inventario de Tienda
// Descripción: Crea un objeto que represente una tienda con varios productos. 
// Cada producto debe tener propiedades como nombre, precio y cantidad.
 // Luego, crea funciones para agregar productos, actualizar la cantidad de productos
 //  y mostrar la información de todos los productos.

//Creacion de la lista

let tienda = {
    productos: [
      { nombre: "Gorra", precio: 20, cantidad: 10 },
      { nombre: "Camiseta", precio: 35, cantidad: 5 },
      { nombre: "Tenis", precio: 50, cantidad: 3 }
    ]
  };

  // esta funcion agrega los productos a la lista

  function agregarProducto(nombre, precio, cantidad) {
    tienda.productos.push({ nombre, precio, cantidad });
    console.log(`Producto agregado: ${nombre}`);
  }

  // esta funcion agrega cantidad a nuestros productos de la lista  
  
function actualizarCantidad(nombre, nuevaCantidad) {
    const producto = tienda.productos.find(p => p.nombre === nombre);
    if (producto) {
      producto.cantidad = nuevaCantidad;
      console.log(`Cantidad actualizada para ${nombre}: ${nuevaCantidad}`);
    } else {
      console.log(`Producto "${nombre}" no encontrado.`);
    }
  }
// esta funcion muestra el inventario
  function mostrarProductos() {
    console.log("Inventario de la tienda:");
    tienda.productos.forEach(producto => {
      console.log(`- ${producto.nombre}: $${producto.precio} (Cantidad: ${producto.cantidad})`);
    });
  }

  // Mostrar productos iniciales
mostrarProductos();

// Agregar un nuevo producto
agregarProducto("Pantalon", 45, 8);

// Actualizar cantidad de un producto existente
actualizarCantidad("Tenis", 7);

// Mostrar inventario actualizado
mostrarProductos();
