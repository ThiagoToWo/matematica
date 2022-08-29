/**
* matriz.js 1.0, 29/08/2022
* Autor: Thiago de O. Alves.
*/

function Matriz(m, n, ...elementos) {
	this.m = m;
	this.n = n;
	this.tableau = [];

	if (arguments.length < 3) {
		for (let i = 0; i < m; i++) {
			const linha = [];

			for (let j = 0; j < n; j++) {
				linha[j] = 0;
			}

			this.tableau[i] = linha;
		}
	} else {
		for (let i = 0; i < m; i++) {
			const linha = [];

			for (let j = 0; j < n; j++) {
				linha[j] = elementos[n * i + j];
			}

			this.tableau[i] = linha;
		}
	}
}

Matriz.prototype.clone = function() {
	const clone = new Matriz(this.m, this.n);

	for (let i = 0; i < this.m; i++) {
		for (let j = 0; j < this.n; j++) {
			clone.tableau[i][j] = this.tableau[i][j];
		}
	}

	return clone;
};

Matriz.prototype.igual = function(B) {
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

Matriz.prototype.oposta = function () {
	const oposta = this.clone();

	for (let i = 0; i < oposta.m; i++) {
		for (let j = 0; j < oposta.n; j++) {
			oposta.tableau[i][j] *= -1;
		}
	}

	return oposta;
}

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

Matriz.prototype.subtrai = function (B) {
	return this.soma(B.oposta());
}

Matriz.prototype.transposta = function () {
	const transposta = new Matriz(this.n, this.m);

	for (let i = 0; i < this.n; i++) {
		for (let j = 0; j < this.m; j++) {
			transposta.tableau[i][j] = this.tableau[j][i];
		}
	}

	return transposta;
}

Matriz.prototype.escalar = function (k) {
	for (let i = 0; i < this.m; i++) {
		for (let j = 0; j < this.n; j++) {
			this.tableau[i][j] *= k;
		}
	}
}

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

Matriz.prototype.imprimir = function() {
	console.table(this.tableau);
}

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