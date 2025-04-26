// Clase que representa un pedido individual
class Pedido {
  constructor(numero, cliente) {
    this.numero = numero;        // Número identificador del pedido
    this.cliente = cliente;      // Nombre del cliente
    this.siguiente = null;       // Puntero al siguiente pedido en la cola (estructura de lista enlazada)
  }
}

// Clase que representa la cola de pedidos
class ColaPedidos {
  constructor() {
    this.inicio = null;             // Referencia al primer pedido de la cola
    this.final = null;              // Referencia al último pedido de la cola
    this.porNumero = new Map();     // Mapa para búsqueda rápida por número de pedido
    this.porCliente = new Map();    // Mapa para búsqueda rápida por nombre de cliente
  }

  // Método para agregar un nuevo pedido a la cola
  agregarPedido(numero, cliente) {
    const nuevo = new Pedido(numero, cliente);
    if (!this.inicio) {
      // Si la cola está vacía, el nuevo pedido es el primero y el último
      this.inicio = this.final = nuevo;
    } else {
      // Si no, se agrega al final y se actualiza el puntero final
      this.final.siguiente = nuevo;
      this.final = nuevo;
    }

    // Se registra en el mapa por número
    this.porNumero.set(numero, nuevo);

    // Se registra en el mapa por cliente
    if (!this.porCliente.has(cliente)) this.porCliente.set(cliente, []);
    this.porCliente.get(cliente).push(nuevo);
  }

  // Método para eliminar el primer pedido de la cola (FIFO)
  eliminarPedido() {
    if (!this.inicio) return null; // Si la cola está vacía, no hay nada que eliminar

    const eliminado = this.inicio;       // Guardamos el pedido a eliminar
    this.inicio = this.inicio.siguiente; // Avanzamos el inicio de la cola

    if (!this.inicio) this.final = null; // Si quedó vacía, también se actualiza el final

    // Se elimina del mapa por número
    this.porNumero.delete(eliminado.numero);

    // Se elimina del mapa por cliente (filtrando por número)
    const listaCliente = this.porCliente.get(eliminado.cliente);
    this.porCliente.set(eliminado.cliente, listaCliente.filter(p => p.numero !== eliminado.numero));

    return eliminado; // Retornamos el pedido eliminado
  }

  // Método para buscar un pedido por número
  buscarPorNumero(numero) {
    return this.porNumero.get(numero) || null;
  }

  // Método para obtener todos los pedidos de un cliente
  buscarPorCliente(cliente) {
    return this.porCliente.get(cliente) || [];
  }

  // Muestra el estado actual de la cola: primer y último pedido
  mostrarEstado() {
    console.log("Primer pedido:", this.inicio?.numero || "Ninguno");
    console.log("Último pedido:", this.final?.numero || "Ninguno");
  }
}

// Función para probar operaciones con diferentes cantidades de pedidos
function pruebaOperaciones(cantidad) {
  const cola = new ColaPedidos();

  // Medimos tiempo de inserción
  console.time(`Inserción ${cantidad}`);
  for (let i = 0; i < cantidad; i++) {
    cola.agregarPedido(i, "Cliente" + (i % 10)); // Crea 10 clientes rotativos
  }
  console.timeEnd(`Inserción ${cantidad}`);

  // Medimos tiempo de búsqueda por número
  console.time(`Búsqueda por número`);
  cola.buscarPorNumero(Math.floor(cantidad / 2));
  console.timeEnd(`Búsqueda por número`);

  // Medimos tiempo de búsqueda por cliente
  console.time(`Búsqueda por cliente`);
  cola.buscarPorCliente("Cliente5");
  console.timeEnd(`Búsqueda por cliente`);

  // Medimos tiempo de eliminación de todos los pedidos
  console.time(`Eliminación ${cantidad}`);
  for (let i = 0; i < cantidad; i++) {
    cola.eliminarPedido();
  }
  console.timeEnd(`Eliminación ${cantidad}`);
}

// Pruebas con diferentes tamaños de carga
[10, 100, 1000].forEach(pruebaOperaciones);

// Simula inserciones y eliminaciones en intervalos
function simularIntervalos(intervalos, pedidosPorIntervalo = 10) {
  const cola = new ColaPedidos();
  let contador = 1;

  for (let i = 1; i <= intervalos; i++) {
    console.log(`\n⏱ Intervalo ${i}`);
    
    // Inserta un grupo de pedidos nuevos
    for (let j = 0; j < pedidosPorIntervalo; j++) {
      cola.agregarPedido(contador, "Cliente" + (contador % 5)); // 5 clientes rotativos
      contador++;
    }

    // Muestra el estado actual de la cola
    cola.mostrarEstado();

    // Elimina la mitad de los pedidos del intervalo
    for (let j = 0; j < pedidosPorIntervalo / 2; j++) {
      cola.eliminarPedido();
    }
  }
}

// Ejecuta la simulación de intervalos
simularIntervalos(5, 10);
