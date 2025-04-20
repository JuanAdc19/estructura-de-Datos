class Grafo {
    constructor() {
      this.vertices = [];
      this.matrizAdyacencia = [];
      this.listaAdyacencia = {};
    }
  
    agregarVertice(vertice) {
      if (!this.vertices.includes(vertice)) {
        this.vertices.push(vertice);
  
        // Actualizar matriz de adyacencia
        this.matrizAdyacencia.forEach(fila => fila.push(0));
        this.matrizAdyacencia.push(new Array(this.vertices.length).fill(0));
  
        // Actualizar lista de adyacencia
        this.listaAdyacencia[vertice] = [];
      }
    }
  
    agregarArista(origen, destino) {
      const i = this.vertices.indexOf(origen);
      const j = this.vertices.indexOf(destino);
  
      if (i === -1 || j === -1) {
        console.log("Uno o ambos vértices no existen");
        return;
      }
  
      // Matriz de adyacencia
      this.matrizAdyacencia[i][j] = 1;
  
      // Lista de adyacencia
      this.listaAdyacencia[origen].push(destino);
    }
  
    imprimirMatrizAdyacencia() {
      console.log("Matriz de Adyacencia:");
      console.log("   " + this.vertices.join("  "));
      this.matrizAdyacencia.forEach((fila, i) => {
        console.log(this.vertices[i] + "  " + fila.join("  "));
      });
    }
  
    imprimirListaAdyacencia() {
      console.log("Lista de Adyacencia:");
      for (let vertice in this.listaAdyacencia) {
        console.log(`${vertice} → ${this.listaAdyacencia[vertice].join(", ")}`);
      }
    }
  }
  
  // Uso del grafo
  const grafo = new Grafo();
  
  // Agregar vértices
  ['A', 'B', 'C', 'D', 'E'].forEach(v => grafo.agregarVertice(v));
  
  // Agregar aristas
  grafo.agregarArista('A', 'B');
  grafo.agregarArista('A', 'C');
  grafo.agregarArista('B', 'D');
  grafo.agregarArista('C', 'D');
  grafo.agregarArista('D', 'E');
  
  // Imprimir ambas representaciones
  grafo.imprimirMatrizAdyacencia();
  grafo.imprimirListaAdyacencia();
  