// Nodo para lista simple
class Node {
    constructor(key) {
      this.key = key;     // Valor del nodo
      this.next = null;   // Referencia al siguiente nodo
    }
  }
  
  // Implementación de lista enlazada simple
  class SinglyLinkedList {
    constructor() {
      this.head = null;   // Inicio de la lista
    }
  
    // Inserta un nuevo nodo al final de la lista
    insert(key) {
      const newNode = new Node(key);
      if (!this.head) {
        // Si la lista está vacía, el nuevo nodo es la cabeza
        this.head = newNode;
      } else {
        // Si no, se recorre hasta el último nodo y se agrega al final
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = newNode;
      }
    }
  
    // Elimina el nodo en una posición específica
    deleteAt(position) {
      if (!this.head) return; // Si la lista está vacía, no hace nada
  
      if (position === 0) {
        // Si se elimina la cabeza
        this.head = this.head.next;
        return;
      }
  
      // Buscar el nodo anterior al que se quiere eliminar
      let curr = this.head;
      for (let i = 0; curr && i < position - 1; i++) {
        curr = curr.next;
      }
  
      // Si la posición no es válida o está fuera de rango
      if (!curr || !curr.next) return;
  
      // Salta el nodo a eliminar
      curr.next = curr.next.next;
    }
  }
  
  // Nodo para lista doblemente enlazada
  class DoublyNode {
    constructor(key) {
      this.key = key;       // Valor del nodo
      this.next = null;     // Siguiente nodo
      this.prev = null;     // Nodo anterior
    }
  }
  
  // Implementación de lista doblemente enlazada
  class DoublyLinkedList {
    constructor() {
      this.head = null;     // Inicio de la lista
      this.tail = null;     // Fin de la lista
    }
  
    // Inserta un nodo al final
    insert(key) {
      const newNode = new DoublyNode(key);
      if (!this.head) {
        // Si la lista está vacía, el nuevo nodo es cabeza y cola
        this.head = this.tail = newNode;
      } else {
        // Conecta el nuevo nodo al final de la lista
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  
    // Elimina el nodo en una posición específica
    deleteAt(position) {
      if (!this.head) return; // Si la lista está vacía, no hace nada
  
      if (position === 0) {
        // Elimina el primer nodo
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        else this.tail = null; // Si la lista quedó vacía
        return;
      }
  
      // Busca el nodo en la posición indicada
      let curr = this.head;
      for (let i = 0; curr && i < position; i++) {
        curr = curr.next;
      }
  
      if (!curr) return; // Si no existe esa posición
  
      // Reconecta los punteros para eliminar el nodo
      if (curr.prev) curr.prev.next = curr.next;
      if (curr.next) curr.next.prev = curr.prev;
  
      // Si se elimina el último nodo, actualizar la cola
      if (curr === this.tail) this.tail = curr.prev;
    }
  }
  
  // Función para probar eficiencia de ambas listas con N elementos
  function probarEficiencia(N) {
    console.log(`\n=== PRUEBA CON ${N} ELEMENTOS ===`);
  
    // --- Prueba con lista simple ---
    const simple = new SinglyLinkedList();
    
    console.time("Inserción Simple");
    for (let i = 0; i < N; i++) simple.insert(i);
    console.timeEnd("Inserción Simple");
  
    console.time("Eliminar Inicio Simple");
    simple.deleteAt(0);
    console.timeEnd("Eliminar Inicio Simple");
  
    console.time("Eliminar Mitad Simple");
    simple.deleteAt(Math.floor(N / 2));
    console.timeEnd("Eliminar Mitad Simple");
  
    console.time("Eliminar Final Simple");
    simple.deleteAt(N - 2); // -2 porque ya se eliminó uno
    console.timeEnd("Eliminar Final Simple");
  
    // --- Prueba con lista doble ---
    const doble = new DoublyLinkedList();
  
    console.time("Inserción Doble");
    for (let i = 0; i < N; i++) doble.insert(i);
    console.timeEnd("Inserción Doble");
  
    console.time("Eliminar Inicio Doble");
    doble.deleteAt(0);
    console.timeEnd("Eliminar Inicio Doble");
  
    console.time("Eliminar Mitad Doble");
    doble.deleteAt(Math.floor(N / 2));
    console.timeEnd("Eliminar Mitad Doble");
  
    console.time("Eliminar Final Doble");
    doble.deleteAt(N - 2);
    console.timeEnd("Eliminar Final Doble");
  }
  
  // Ejecutar pruebas con diferentes tamaños
  probarEficiencia(1000);
  probarEficiencia(5000);
  probarEficiencia(10000);
  