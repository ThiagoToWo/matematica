/**
* matriz.js 1.0, 29/08/2022
* Autor: Thiago de O. Alves.
*/

/**
* Sinopse: Classe para operações com matrizes.
*	Matriz(m, n, ...elementos)
* Dados:
*	Possui os seguintes dados públicos:
*		m: número inteiro que representa o número de linhas.
*		n: número inteiro que representa o número de colunas.
*		tableau: array numérico bidimensional com os elementos da matriz.
* Métodos: 
*	Possui as seguintes funções públicas:
*		clone: retorna uma cópia da matriz chamadora da função.
*		igual: verifica se duas matrizes são iguais.
*		oposta: retorna a matriz oposta à matriz chamadora da função.
*		soma: retorna a soma entre duas matrizes.
*		subtrai: retorna a subtração entre duas matrizes.
*		transposta: retorna a matriz oposta da matriz chamadora da função.
*		escalar: retorna o produto da matriz por um escalar.
*		multiplica: retorna a multiplicação entre duas matrizes.
*		imprimir: imprime a matriz no console.
*		identidade: cria uma matriz identidade de tamanho definido.
* Exemplo:
*	const N = new Matriz(3,3); // Cria uma matriz nula 3 x 3
*   const I_4x4 = Matriz.identidade(4); // Cria uma matriz identidade 4 x 4
*   const A = new Matriz(2, 2, 1, 2, 3, -1); // Cria uma matriz 2 x 2 com os elementos 1, 2, 3, -1
*   const B = new Matriz(2, 3, 1, -2, 3, 2, 4, 0); // Cria uma matriz 2 x 3 com os elementos 1, -2, 3, 2, 4, 0
*   const C = new Matriz(2, 3, 0, 5, 10, 7, 3, 1); // Cria uma matriz 2 x 3 com os elementos 0, 5, 10, 7, 3, 1
*   const oA = A.oposta(); // Cria a matriz oposta de A
*   const At = A.transposta(); // Cria a matriz transposta à A
*   const A2 = A.escalar(2); // obtém a multiplicação 2.A
*   const C5 = C.escalar(5); // obtém a multiplicação 5.C
*   //AmaisB = A.soma(B); // lança o erro "The arrays do not have the same order"
*   //AmenosB = A.subtrai(B); // lança o erro "The arrays do not have the same order"
*   //BvezesA = B.multiplica(A); // lança o erro "The column size of the first array (3) is different from the line size of the second (2)"
*   const BmaisC = B.soma(C); // obtém a soma B + C
*   const BmenosC = B.subtrai(C); // obtém a subtração B - C
*   const AvezesB = A.multiplica(B); // obtém a multiplicação A.B
*   const cA = A.clone(); // Cria uma cópia de A
*   const D = new Matriz(2, 3, 1, -2, 3, 5, 4, 0); // Cria uma matriz 2 x 3 com os elementos 1, -2, 3, 5, 4, 0
*   
*   console.log("I_4x4 (matriz identidade 4 x 4):");
*   I_4x4.imprimir(); // imprime I_4x4
*   console.log("N_3x3 (matriz nula 3 x 3):");
*   N.imprimir(); // imprime N
*   console.log("A:");
*   A.imprimir(); // imprime A
*   console.log("cA (clone da matriz A):");
*   cA.imprimir(); // imprime cA
*   console.log("oA (oposta de A):");
*   oA.imprimir(); // imprime oA
*   console.log("At (transposta de A):");
*   At.imprimir(); // imprime At
*   console.log("B:");
*   B.imprimir(); // imprime B
*   console.log("C:");
*   C.imprimir(); // imprime C
*   console.log("2A:");
*   A2.imprimir(); // imprime A2
*   console.log("5C:");
*   C5.imprimir(); // imprime C5
*   console.log("B + C:");
*   BmaisC.imprimir(); // imprime BmaisC
*   console.log("B - C:");
*   BmenosC.imprimir(); // imprime BmenosC
*   console.log("3B - 2C:");
*   B.escalar(3).subtrai(C.escalar(2)).imprimir(); // calcula e imprime 3B - 2C
*   console.log("A x B:");
*   AvezesB.imprimir(); // imprime AvezesB
*   console.log("A = B?", A.igual(B)); // false
*   console.log("A = cA?", A.igual(cA)); // true
*   console.log("B = D?", B.igual(D)); // false
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

function Matriz(m, n, ...elementos) {
	this.m = m; // número de linhas
	this.n = n; // número de colunas
	this.tableau = []; // representação matricial dos elementos

	if (arguments.length < 3) { // se nãp possui entrada de elementos, cria matriz nula
		for (let i = 0; i < m; i++) {
			const linha = [];

			for (let j = 0; j < n; j++) {
				linha[j] = 0;
			}

			this.tableau[i] = linha;
		}
	} else { // caso contrário, tabela os elementos
		for (let i = 0; i < m; i++) {
			const linha = [];

			for (let j = 0; j < n; j++) {
				linha[j] = elementos[n * i + j];
			}

			this.tableau[i] = linha;
		}
	}
}

/**
* Sinopse: Cria uma cópia da matriz chamadora da função.
*	const cloneA = A.clone()
* Saída: 
*	Retorna uma matriz com mesma ordem e mesmos elementos da matriz chamadora.
* Exemplo:	
*	const A = new Matriz(2, 2, 1, 2, 3, -1); // Cria a matriz A = [[1,2],[3,-1]].
*	const cloneA = A.clone() // cloneA = [[1,2],[3,-1]].
* DESDE: 1.0
*/

Matriz.prototype.clone = function () {
	const clone = new Matriz(this.m, this.n);

	for (let i = 0; i < this.m; i++) {
		for (let j = 0; j < this.n; j++) {
			clone.tableau[i][j] = this.tableau[i][j];
		}
	}

	return clone;
};

/**
* Sinopse: Verifica se duas matrizes são iguais.
*	A.igual(B)
* Entrada(s):
*	B: uma matriz.
* Saída: 
*	Retorna falso caso as matizes sejam diferentes e verdadeiro caso contrário.
* Descrição:
*	Se o número de linhas ou de colunas (ordem) das matrizes forem diferentes
*	ou se um dos elementos de A não estiver igual ao seu correspondente
*	(mesma linha e coluna) em B, retorna falso. Caso contário, retorna verdadeiro.
* Exemplo:
*   const A = new Matriz(2, 2, 1, 2, 3, -1); // Cria a matriz A = [[1,2],[3,-1]].
*	const cloneA = A.clone() // cloneA = [[1,2],[3,-1]].
*   const B = new Matriz(2, 3, 1, -2, 3, 2, 4, 0); // Cria a matriz B = [[1,-2,3],[2,4,0]].
*	const D = new Matriz(2, 3, 1, -2, 3, 5, 4, 0); // Cria a matriz B = [[1,-2,3],[5,4,0]].
*	console.log("A = B?", A.igual(B)); // false (ordem diferente).
*   console.log("A = cloneA?", A.igual(cloneA)); // true
*   console.log("B = D?", B.igual(D)); // false (o elemento b21 = 2 e d21 = 5).
* DESDE: 1.0
*/

Matriz.prototype.igual = function (B) {
	if (this.m != B.m || this.n != B.n) {
		return false;
	} else {
		for (let i = 0; i < this.m; i++) {
			for (let j = 0; j < this.n; j++) {
				if (this.tableau[i][j] != B.tableau[i][j]) {
					return false;
				}
			}
		}
	}

	return true;
}

/**
* Sinopse: Cria uma matriz oposta à matriz chamadora da função.
*	const opostaA = A.oposta()
* Saída: 
*	Retorna uma matriz que possui os elementos da matriz chamadora com os
*	sinais contários.
* Exemplo:	
*	const A = new Matriz(2, 2, 1, 2, 3, -1); // Cria a matriz A = [[1,2],[3,-1]].
*	const opostaA = A.oposta() // opostaA = [[-1,-2],[-3,1]].
* DESDE: 1.0
* VEJA:
*	clone()
*/

Matriz.prototype.oposta = function () {
	const oposta = this.clone();

	for (let i = 0; i < oposta.m; i++) {
		for (let j = 0; j < oposta.n; j++) {
			oposta.tableau[i][j] *= -1;
		}
	}

	return oposta;
}

/**
* Sinopse: Retorna a soma de duas matrizes.
*	const AmaisB = A.soma(B)
* Entrada(s):
*	B: uma matriz.
* Saída: 
*	Retorna a soma de A com B. Se as matrizes não forem de mesma ordem, 
*	um erro é lençado.
* Exemplo:
*	const B = new Matriz(2, 3, 1, -2, 3, 2, 4, 0); // Cria a matriz B = [[1,-2,3],[2,4,0]]. 
*	const C = new Matriz(2, 3, 0, 5, 10, 7, 3, 1); // Cria a matriz C = [[0,5,10],[7,3,1]].
*	const BmaisC = B.soma(C) // Retorna [[1,3,13],[9,7,1]].
* DESDE: 1.0
*/

Matriz.prototype.soma = function (B) {
	if (this.m == B.m && this.n == B.n) {
		const C = new Matriz(this.m, this.n);

		for (let i = 0; i < this.m; i++) {
			const linha = [];

			for (let j = 0; j < this.n; j++) {
				linha[j] = this.tableau[i][j] + B.tableau[i][j];
			}

			C.tableau[i] = linha;
		}

		return C;
	} else {
		throw new Error("The arrays do not have the same order");
	}
}

/**
* Sinopse: Retorna o resultado da subtração de duas matrizes.
*	const AmenosB = A.subtrai(B)
* Entrada(s):
*	B: uma matriz.
* Saída: 
*	Retorna o resultado da subtração de A com B. Se as matrizes não forem
*	de mesma ordem, um erro é lençado.
* Exemplo:
*	const B = new Matriz(2, 3, 1, -2, 3, 2, 4, 0); // Cria a matriz B = [[1,-2,3],[2,4,0]]. 
*	const C = new Matriz(2, 3, 0, 5, 10, 7, 3, 1); // Cria a matriz C = [[0,5,10],[7,3,1]].
*	const BmenosC = B.subtrai(C) // Retorna [[1,-7,-7],[-5,1,-1]].
* DESDE: 1.0
*/

Matriz.prototype.subtrai = function (B) {
	return this.soma(B.oposta());
}

/**
* Sinopse: Cria a matriz transposta da matriz chamadora da função.
*	const At = A.transposta()
* Saída: 
*	Retorna uma matriz cujas colunas são as correspondentes linhas da
*	matriz chamadora.
* Descrição:
*	A transposta de uma matriz se obtém mudando a poição dos seus elementos
*	de modo que a primeira linha se vire a primeira coluna, a segunda linha
*	vire a segunda coluna e assim por diante.
* Exemplo:	
*	const A = new Matriz(2, 2, 1, 2, 3, -1); // Cria a matriz A = [[1,2],[3,-1]].
*	const At = A.transposta() // At = [[1,3],[2,-1]].
* DESDE: 1.0
* VEJA:
*	clone()
*/

Matriz.prototype.transposta = function () {
	const transposta = new Matriz(this.n, this.m);

	for (let i = 0; i < this.n; i++) {
		for (let j = 0; j < this.m; j++) {
			transposta.tableau[i][j] = this.tableau[j][i];
		}
	}

	return transposta;
}

/**
* Sinopse: Retorna o produto de uma matriz por um escalar.
*	const kA = A.escalar(k)
* Entrada(s):
*	k: um número real.
* Saída: 
*	Retorna o produto de A com o número k
* Exemplo:
*	const A = new Matriz(2, 2, 1, 2, 3, -1); // Cria a matriz A = [[1,2],[3,-1]].
*	const 2A = A.escalar(2) // Retorna [[2,4],[6,-2]].
* DESDE: 1.0
*/

Matriz.prototype.escalar = function (k) {
	const kA = this.clone();

	for (let i = 0; i < kA.m; i++) {
		for (let j = 0; j < kA.n; j++) {
			kA.tableau[i][j] *= k;
		}
	}

	return kA;
}

/**
* Sinopse: Retorna o produto de duas matrizes.
*	const AvezesB = A.multiplica(B)
* Entrada(s):
*	B: uma matriz.
* Saída: 
*	Retorna o produto de A com B. Se o tamanho da coluna de A for diferente
*	do tamanho da linha de B, um erro é lançado.
* Exemplo:
*	const A = new Matriz(2, 2, 1, 2, 3, -1); // Cria a matriz A = [[1,2],[3,-1]].
*	const B = new Matriz(2, 3, 1, -2, 3, 2, 4, 0); // Cria a matriz B = [[1,-2,3],[2,4,0]].
*	const AvezesB = A.multiplica(B) // Retorna [[5,6,3],[1,-10,9]]
* DESDE: 1.0
*/

Matriz.prototype.multiplica = function (B) {
	if (this.n == B.m) {
		const C = new Matriz(this.m, B.n);

		for (let i = 0; i < this.m; i++) {
			for (let j = 0; j < B.n; j++) {
				for (let r = 0; r < this.n; r++) {
					C.tableau[i][j] += this.tableau[i][r] * B.tableau[r][j];
				}
			}
		}

		return C;
	} else {
		throw new Error("The column size of the first array (" + this.n +
			") is different from the line size of the second (" + B.m + ")");
	}
}

/**
* Sinopse: Imprime a matriz chamadora da função.
*	A.imprimir()
* Descrição:
*	Usa console.table(A) para imprimir a matriz no console.
* Exemplo:	
*	const A = new Matriz(2, 2, 1, 2, 3, -1); // Cria a matriz A = [[1,2],[3,-1]].
*	A.imprimir() 
*	// Produz
*	// +-------+-----+-----+
*	// |(index)|  0  |  1  |
*	// +-------+-----+-----+
*	// |   0   |  1  |  2  |
*	// +-------+-----+-----+
*	// |   1   |  3  | -1  |
*	// +-------+-----+-----+
* DESDE: 1.0
* VEJA:
*	console.table()
*/

Matriz.prototype.imprimir = function () {
	console.table(this.tableau);
}

/**
* Sinopse: Função estática que cria uma matriz identidade de ordem n.
*	const In = Matriz.identidade(n)
* Entrada:
*	n: número inteiro relativo a ordem da matriz identidade
* Saída: 
*	Retorna uma matriz idantidade n x n.
* Descrição:
*	Uma matriz idantidade de ordem n é uma matriz quadrada n x n onde cada
*	elemento da diagonal principal é 1 e os outros são 0.
* Exemplo:	
*	// Cria a matriz A = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]].
*	const I_4x4 = Matriz.identidade(4); 
* DESDE: 1.0
*/

Matriz.identidade = function (n) {
	const I = new Matriz(n, n);

	for (let i = 0; i < n; i++) {
		const linha = [];

		for (let j = 0; j < n; j++) {
			if (i == j) {
				linha[j] = 1;
			} else {
				linha[j] = 0;
			}
		}

		I.tableau[i] = linha;
	}

	return I
}