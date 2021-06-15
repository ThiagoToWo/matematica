/**
* matematica.js 1.0, 24/05/2021
* Autor: Thiago de O. Alves.
* 14/06/2021 - versão 1.1
*/

var mat = mat || {};

//////////////////////////////////////////////////////////////////

//VETORES
/**
* Sinopse: Operações com vetores.
*	mat.vetores
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		angulo: angulo, => ângulo entre dois vetores.
*		diferenca: diferenca, => diferença entre dois vetores.
*		modulo: modulo, => módulo de um vetor.
*		produtoInterno: produtoInterno, => produto interno entre dois vetores.
*		produtoVetorial: produtoVetorial, => produto vetorial entre dois vetores.
*		soma: soma => soma de dois vetores.
*	}
* Exemplo:
*	var mv = mat.vetores; // Pode-se armazenar em uma variável para uso frequente.
*	mv.soma([2,-3,4], [1,0,5]); // Chama a função soma.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.vetores = (function(){

	/**
	* Sinopse: calcula o produto escalar de dois vetores tridimensionais.
	*	mat.vetores.produtoInterno(a, b)
	* Entrada(s):
	*	a: array de 3 elementos numéricos.
	*	b: array de 3 elementos numéricos.
	* Saída: 
	*	Retorna um número real, valor do produto interno entre a e b.
	* Descrição:
	*	Dando como entrada os arrays a e b, a função calcula o produto
	*	interno usando os 3 primeiros elementos de cada um deles. Isso
	*	faz com que os arrays a e b simulem vetores em três dimensões.
	* Exemplo:
	*	var a = [2, -3, 0], b = [4, 2, 1]; // Inicia os vetores a e b.
	*	var m = mat.vetores;
	*	m.produtoInterno(a, b); // Retorna 2.
	* DESDE: 1.0
	*/
	
	function produtoInterno(a, b) {
		return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	}

	/**
	* Sinopse: calcula o produto vetorial de dois vetores tridimensionais.
	*	mat.vetores.produtoVetorial(a, b)
	* Entrada(s):
	*	a: array de 3 elementos numéricos.
	*	b: array de 3 elementos numéricos.
	* Saída: 
	*	Retorna um vetor, valor do produto vetorial entre a e b.
	* Descrição:
	*	Dando como entrada os arrays a e b, a função calcula o produto
	*	vetorial usando os 3 primeiros elementos de cada um deles. Isso
	*	faz com que os arrays a e b simulem vetores em três dimensões.
	* Exemplo:
	*	var a = [2, -3, 0], b = [4, 2, 1]; // Inicia os vetores a e b.
	*	var m = mat.vetores;
	*	m.produtoVetorial(a, b); // Retorna [-2, -3, 16].
	* DESDE: 1.0
	*/
	
	function produtoVetorial(a, b) {
		var c = new Array(3);
		c[0] = a[1] * b[2] - b[1] * a[2];
		c[1] = a[2] * b[0] - b[2] * a[0];
		c[2] = a[0] * b[1] - b[0] * a[1];
		return c;
	}

	/**
	* Sinopse: calcula o módulo de um vetor tridimensional.
	*	mat.vetores.modulo(a)
	* Entrada(s):
	*	a: array numérico de 3 elementos.
	* Saída: 
	*	Um número real, módulodo vetor a.
	* Descrição:
	*	Dado o array a como entrada, a função usa seus primeiros três
	*	elementos para simular um vetor tridimensional e calcula seu
	*	módulo.
	* Exemplo:
	*	var a = [4, 2, 1]; // Inicia o argumento. 
	*	var m = mat.vetores;
	*	m.modulo(a) // Retorna 4.58257569495584.
	* DESDE: 1.0
	* VEJA: 
	*	Math.sqrt().
	*/
	
	function modulo(a) {
		return Math.sqrt(a[0]**2 + a[1]**2 + a[2]**2);
	}

	/**
	* Sinopse: calcula o ângulo entre dois vetores.
	*	mat.vetores.angulo(a, b)
	* Entrada(s):
	*	a: array de 3 elementos numéricos.
	*	b: array de 3 elementos numéricos.
	* Saída: 
	*	Retorna um número real, valor do menor ângulo entre a e b
	*	em radianos.
	* Descrição:
	*	Dando como entrada os arrays a e b, a função utiliza os três 
	*	primeiros elementos de cada, simulando vetores em três dimensões,
	*	e calcula em radianos o menor ângulo entre eles com o uso do
	*	produto interno e da função interna Math.acos().
	* Exemplo:
	*	var a = [2, -3, 0], b = [4, 2, 1]; // Inicia os vetores a e b.
	*	var m = mat.vetores;
	*	m.angulo(a, b); // Retorna 1.4494532607018238.
	* DESDE: 1.0
	* VEJA: 
	*	produtoInterno(), Math.acos().
	*/
	
	function angulo(a, b) {
		var p = produtoInterno(a, b);
		var ma = modulo(a);
		var mb = modulo(b);
		return Math.acos(p / (ma * mb));
	}

	/**
	* Sinopse: calcula a soma de dois vetores tridimensionais.
	*	mat.vetores.soma(a, b)
	* Entrada(s):
	*	a: array de 3 elementos numéricos.
	*	b: array de 3 elementos numéricos.
	* Saída: 
	*	Retorna um número real, valor da soma entre a e b.
	* Descrição:
	*	Dando como entrada os arrays a e b, a função utiliza os três 
	*	primeiros elementos de cada, simulando vetores em três dimensões,
	*	e calcula a soma entre eles.
	* Exemplo:
	*	var a = [2, -3, 0], b = [4, 2, 1]; // Inicia os vetores a e b.
	*	var m = mat.vetores;
	*	m.soma(a, b); // Retorna [6, -1, 1].
	* DESDE: 1.0
	*/
	
	function soma(a, b) {
		var r = new Array(3)
		r[0] = a[0] + b[0];
		r[1] = a[1] + b[1];
		r[2] = a[2] + b[2];
		return r;
	}
			
	/**
	* Sinopse: calcula a diferença entre dois vetores tridimensionais.
	*	mat.vetores.diferenca(a, b)
	* Entrada(s):
	*	a: array de 3 elementos numéricos.
	*	b: array de 3 elementos numéricos.
	* Saída: 
	*	Retorna um número real, valor da diferença entre a e b.
	* Descrição:
	*	Dando como entrada os arrays a e b, a função utiliza os três 
	*	primeiros elementos de cada, simulando vetores em três dimensões,
	*	e calcula a diferença entre eles.
	* Exemplo:
	*	var a = [2, -3, 0], b = [4, 2, 1]; // Inicia os vetores a e b.
	*	var m = mat.vetores;
	*	m.diferenca(a, b); // Retorna [-2, -5, -1].
	* DESDE: 1.0
	*/
	
	function diferenca(a, b) {
		var r = new Array(3);
		r[0] = a[0] - b[0];
		r[1] = a[1] - b[1];
		r[2] = a[2] - b[2];
		return r;
	}
	
	return {
		angulo: angulo,
		diferenca: diferenca,
		modulo: modulo,
		produtoInterno: produtoInterno,
		produtoVetorial: produtoVetorial,
		soma: soma
	};
}());

////////////////////////////////////////////////////////////////////////////

//ESTATÍSTICA
/**
* Sinopse: Cálculos estatístios e plotagem.
*	mat.estatistica
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		desenharGrid: desenharGrid, => cria um grid em um canvas.
*		frequencia: frequencia, => freqência dos elementos de um array.
*		media: media, => média dos elementos de um array.
*		mediana: mediana, => mediana dos elementos de um array.
*		moda: moda, => moda dos elementos de um array.
*		plotarPontos: plotarPontos, => plota pontos no canvas.
*		plotarReta: plotarReta, => plota reta no canvas.
*		retaMinQuadrados: retaMinQuadrados => reta dos mínimos quadrados.
*	}
* Exemplo:
*	var me = mat.estatistica; // Pode-se armazenar em uma variável para uso frequente.
*	me.media([2,3,5,5,6,3,5]); // Chama a função media.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.estatistica = (function(){

	/**
	* Sinopse: Calcula a média aritmética de uma lista de números.
	*	mat.estatistica.media(data)
	* Entrada(s):
	*	data: array de elementos numéricos.
	* Saída: 
	*	Retorna um número real, média aritmética dos elementos de data.
	* Exemplo:
	*	var data = [2,4,3,5,5,6,3,5]; // Inicia o(s) argumento(s). 
	*	mat.estatistica.media(data); // Retorna 4.125.
	* DESDE: 1.0
	*/

	function media(data) {
		var soma = 0;
		for (var i = 0; i < data.length; i++) {
			soma += data[i];
		}
		return soma / data.length;
	}

	/**
	* Sinopse: Calcula a mediana de uma lista de números.
	*	mat.estatistica.mediana(data)
	* Entrada(s):
	*	data: array de elementos numéricos.
	* Saída: 
	*	Retorna um número real, mediana dos elementos de data.
	* Descrição:
	*	Dado um array numérico data, a função o ordena em ordem numérica
	*	crescente e calcula sua mediana e acordo com a quantidade ímpar ou
	* 	par de elementos. 
	*	Uma observação importante é que, depois de usado
	*	como entrada na	função mediana, o array data se mantém ordenado e
	*	deve-se ter isso em mente em usos futuros do mesmo.
	* Exemplo:
	*	var data = [2,4,3,5,5,6,3,5]; // Inicia o(s) argumento(s). 
	*	var m = mat.estatistica;
	*	m.mediana(data); // Retorna 4.5 e deixa data = [2,3,3,4,5,5,5,6].
	* DESDE: 1.0
	* VEJA: 
	*	Array.sort().
	*/

	function mediana(data) {
		var n = data.length;
		data.sort(function(a, b) {
			return a - b;
		});
		if (n % 2 != 0) {
			return data[(n + 1) / 2 - 1];
		} else {
			return (data[n / 2 - 1] + data[n / 2]) / 2;
		}
	}

	/**
	* Sinopse: Conta a freqência de cada elemento do array.
	*	mat.estatistica.frequencia(data)
	* Entrada(s):
	*	data: um array.
	* Saída: 
	*	Retorna um array onde cada número representa a freqência do 
	*	elemento naquele índice.
	* Exemplo:
	*	var data1 = [2,4,3,5,5,6,3,5]; // Array numérico.
	*	var data2 = [2,{x:0},2,'t','t']; // Array com vários tipos de elementos.
	* 	var m = mat.estatistica;
	*	m.frequencia(data1); // Retorna [1,1,2,3,3,1,2,3].
	*	m.frequencia(data2); // Retorna [2,1,2,2,2].
	* DESDE: 1.0
	*/
	
	function frequencia(data) {
		var f = [];
		for (var i = 0; i < data.length; i++) {
			for (var j = i + 1; j < data.length; j++) {
				if (f[i] == undefined) f[i] = 1;
				if (f[j] == undefined) f[j] = 1;
				if (data[i] == data[j]) {
					f[i]++;
					f[j]++;
				}
			}
		}	
		return f;
	}

	/**
	* Sinopse: Calcula a moda de uma lista de números.
	*	mat.estatistica.moda(data)
	* Entrada(s):
	*	data: um array.
	* Saída: 
	*	Retorna um array com os elementos que representam a moda em data.
	* Descrição:
	*	Dado um array data como entrada, a função calcula a frequência de 
	*	cada elemento e o valor máximo dessas frequências. Depois ela
	*	retorna um array contendo os elementos que possuem essa freqência
	*	máxima. 
	* Exemplo:
	*	var data1 = [2,4,3,5,5,6,3,5]; // Array numérico.
	*	var data2 = [2,{x:0},2,'t','t']; // Array com vários tipos de elementos.
	* 	var m = mat.estatistica;
	*	m.moda(data1); // Retorna [5] (unimodal).
	*	m.moda(data2); // Retorna [2,t] (bimodal).
	* DESDE: 1.0
	* VEJA: 
	*	frequencia(), mat.util.maximo(), mat.conjuntos.elementosDiferentes().
	*/
	
	function moda(data) {
		var freq = frequencia(data);
		var max = mat.util.maximo(freq);
		var moda = [];
		for (var i in freq) {
			if (freq[i] == max) moda.push(data[i]); 
		}	
		return mat.conjuntos.elementosDiferentes(moda);
	}

	/**
	* Sinopse: Calcula os parâmetros da reta dos mínimos quadrados.
	*	mat.estatistica.retaMinQuadrados(x, y)
	* Entrada(s):
	*	x: array numérico com os valores da variável independente x.
	*	y: array numérico com os valores da variável dependente y.
	* Saída: 
	*	Rerorna um array com os coeficientes da reta de mínimos quadrados
	*	e o coeficiente de correlação.
	* Descrição:
	* 	Passados os arrays com as entradas de x e as entradas de y, retorna
	* 	um array [a0, a1, r] com o coeficiente linear, coeficiente angular
	*	e coeficiente de correlação, respectivamente, da reta de mínimos
	* 	quadrados. 
	*	A função usa como domínio as entradas de x e o tamanho dela como
	*	referência. Logo, y deve possuir uma quantidade igual ou superior
	* 	a x de elementos. No caso de quantidade maior que x, os elementos
	*	excedentes não participam do cálculo.
	* Exemplo:
	*	var x = [1,2,4,5], // Domínio com quatro elementos. 
	*	var y = [3.2,5.6,8.4,9.7,11.1]; // O valor 11.1 não será usado.
	*	var m = mat.estatistica;
	*	m.retaMinQuadrados(x, y); // Retorna [1.985,1.58,0.992406...].
	* DESDE: 1.0
	*/
	
	function retaMinQuadrados(x, y) {
		var n = x.length;
		var sx = 0;
		var sy = 0;
		var sx2 = 0;
		var sxy = 0;
		var sy2 = 0;

		for (var i = 0; i < n; i++) {
			sx += x[i];
			sy += y[i];
			sx2 += x[i] * x[i];
			sy2 += y[i] * y[i];
			sxy += x[i] * y[i];
		}
				
		var normX = n * sx2 - sx * sx;
		var normY = n * sy2 - sy * sy;
		var normXY = n * sxy - sx * sy
					
		var a1 = normXY / normX;
		var a0 = (sy - a1 * sx) / n;
		var r = normXY / Math.sqrt(normX * normY);

		return [a0, a1, r];
	}

	/**
	* Sinopse: Plota pontos em canvas.
	*	mat.estatistica.plotarPontos(context, arrayX, arrayY, raio, bordaGrid, cor)
	* Entrada(s):
	*	context: contexto 2d do canvas.
	* 	arrayX: array com as entradas das coordenadas x dos pontos.
	* 	arrayY: array com as entradas das coordenadas y dos pontos.
	* 	raio (opcional): o raio de preenchimento dos pontos em pixel.
	* 	bordaGrid (opcional): espessura da faixa margeando o canvas que determina
	* 			   o limite máximo de plotagem, em pixel.
	* 	cor (opcional): um string representando a cor do ponto.
	* Descrição:
	*	Após obter o contexto 2d do elemento Canvas na página html5, ele 
	*	pode ser passado como entrada na função junto com as coordenadas x
	*	em arrayX e as coordenadas y em arrayY. A função usará as coordenadas
	* 	dadas para plotar os pontos na tela seguindo a orientação convencional
	*	do sistema cartesiano, isto é, x crescente para direita e y crescente
	*	para cima. 
	*	O ponto de coordenada maxíma em x fica sobre o limite
	*	direito da plotagem e o ponto máximo em y fica sobre o limite superior
	*	da plotagem. 
	*	Sem as especificações opcionais, o raio do ponto será de
	*	2px, a margem de plotagem de 10px até a borda do canvas e a cor do
	*	ponto preta. 
	*	A função usa como domínio as entradas de x e o tamanho dela como
	*	referência. Logo, y deve possuir uma quantidade igual ou superior
	* 	a x de elementos. No caso de quantidade maior que x, os elementos
	*	excedentes não participam do cálculo.
	* Exemplo:
	*	<!--Canvas para plotagem dos pontos.-->
	*	<canvas id='canvas' width='400' height='300'></canvas>
	*	<script>
	*	var canvas = document.getElementById('canvas'); // Captura o canvas.
	*	var ctx = canvas.getContext('2d'); // Extrai o contexto 2d.
	*	var x = [1,2,3,4]; // Coordenadas x dos pontos.
	*	var y = [3,4,2,7,8]; // Coordenadas y dos pontos. O 8 não será usado.
	*	// Plota os pontos (1,3), (2,4), (3,2) e (4,7) na cor vermelha,
	*	// com tamanho de 5px cada um e dentro de um limite de 20px para
	*	// as bordas do canvas.
	*	mat.estatistica.plotarPontos(ctx, x, y, 5, 20, 'red');
	*	</script>	
	* DESDE: 1.0
	* VEJA: 
	*	Canvas.getContext('2d'), context.save(), context.beginPath(),
	*	context.restore(), context.arc(), context.fill(), 
	*	context.fillStyle, mat.util.maximo().
	*/
	
	function plotarPontos(context, arrayX, arrayY, raio, bordaGrid, cor) {
		if (raio == null) raio = 2;
		if (bordaGrid == null) bordaGrid = 10;
		if (cor == null) cor = 'black';
		
		var n = arrayX.length;
		var altura = context.canvas.height - 2 * bordaGrid;
		var largura = context.canvas.width - 2 * bordaGrid;
		var largura_por_unidade = largura / mat.util.maximo(arrayX);
		var altura_por_unidade = altura / mat.util.maximo(arrayY);
		
		context.save();
		
		for (var i = 0; i < n; i++) {
			context.beginPath();
			
			context.arc(
				bordaGrid + arrayX[i] * largura_por_unidade, 
				bordaGrid + altura - arrayY[i] * altura_por_unidade,
				raio,
				0,
				2 * Math.PI
			);
			context.fillStyle = cor;
			context.fill();
		}
		
		context.restore();
	}
	
	/**
	* Sinopse: Desenha um grid em canvas.
	*	mat.estatistica.desenharGrid(context, divisaoX, divisaoY, borda, cor)
	* Entrada(s):
	*	context: contexto 2d do canvas.
	* 	divisaoX (opcional): em quantas partes a dimensão horizontal será dividida.
	* 	divisaoY (opcional): em quantas partes a dimensão vertical será dividida.
	* 	borda (opcional): espessura da faixa que determina o espaçamento entre as 
	*		bordas do grid e do canvas.
	* 	cor (opcional): um string representando a cor das linhas.
	* Descrição:
	*	Após obter o contexto 2d do elemento Canvas na página html5, ele 
	*	pode ser passado como entrada na função para ser desenhada uma
	*	divisão em grade útil para escala de plotagem e desenhos.
	*	Sem as especificações opcionais, um espaço interno do canvas, 
	*	margeado por 10px da borda, será dividido por linhas pretas em 
	*	100 retângulos (10 hor x 10 ver). A espessura da linha é de 1px
	*	e o fundo é branco por padrão.
	* Exemplo:
	*	<!--Canvas para desenho do grid.-->
	*	<canvas id='canvas' width='400' height='400'></canvas>
	*	<script>
	*	// Extrai o contexto 2d do canvas.
	*	var ctx = document.getElementById('canvas').getContext('2d');
	*	// Desenha um grid 20 x 10, com margem de 5px para a borda do
	*	// canvas, com linhas azuis.
	*	mat.estatistica.desenharGrid(ctx, 20, 10, 5, 'blue');
	*	</script>	
	* DESDE: 1.0
	* VEJA: 
	*	Canvas.getContext('2d'), context.save(), context.beginPath(),
	*	context.restore(), context.fillRect(), context.stroke(), 
	*	context.moveTo(), context.lineTo(), context.strokeStyle,
	*	context.lineWidth.
	*/
	
	function desenharGrid(context, divisaoX, divisaoY, borda, cor) {
		if (divisaoX == null) divisaoX = 10;
		if (divisaoY == null) divisaoY = 10;
		if (borda == null) borda = 10;
		if (cor == null) cor = 'black'
		
		var largura = context.canvas.width - 2 * borda;
		var altura = context.canvas.height - 2 * borda;			
		
		context.save();			
		context.fillStyle = 'white';
		context.fillRect(0, 0, context.canvas.width, context.canvas.height);
		
		context.lineWidth = 1;
		context.strokeStyle = cor;
		
		// linhas verticais	
		
		for (var i = borda; i <= borda + largura; i += (largura / divisaoX)) {
				context.beginPath()
				context.moveTo(i, borda);
				context.lineTo(i, borda + altura);					
				context.stroke();
		}
		
		
		// linhas horizontais			
		for (var i = borda; i <= borda + altura; i += (altura / divisaoY)) {
				context.beginPath()
				context.moveTo(borda, i);
				context.lineTo(borda + largura, i);
				context.stroke();
		}
		
		context.restore();
	}

	/**
	* Sinopse: Plota reta em canvas.
	*	mat.estatistica.plotarReta(context, coefLinear, coefAngular, arrayX, espessura, bordaGrid, cor)
	* Entrada(s):
	*	context: contexto 2d do canvas.
	* 	coefLinear: coeficiente linear da reta.
	* 	coefAngular: coeficiente angular da reta.
	* 	arrayX: array com as entradas das coordenadas x dos pontos.
	* 	espessura (opcional): a espessura da reta em pixel.
	* 	bordaGrid (opcional): espessura da faixa margeando o canvas que determina
	* 			   o limite máximo de plotagem, em pixel.
	* 	cor (opcional): um string representando a cor da reta.
	* Descrição:
	*	Após obter o contexto 2d do elemento Canvas na página html5, ele 
	*	pode ser passado como entrada na função junto com os coeficientes
	*	angular e linear da reta e um conjunto representando o domínio x.
	*	A função usará as coordenadas mínima e máxima do domínio arrayX
	*	para marcar os extremos da plotagem, calculando os valores de y
	*	para essas coordenadas atrávés dos coeficientes.
	*	O ponto de coordenada maxíma em x fica sobre o canto
	*	superior direito da plotagem. 
	*	Sem as especificações opcionais, a espessura da reta será de
	*	1px, a margem de plotagem de 10px até a borda do canvas e a cor da
	*	reta preta. 
	* Exemplo:
	*	<!--Canvas para plotagem da reta.-->
	*	<canvas id='canvas' width='400' height='300'></canvas>
	*	<script>
	*	var canvas = document.getElementById('canvas'); // Captura o canvas.
	*	var ctx = canvas.getContext('2d'); // Extrai o contexto 2d.
	*	// Coordenadas x do domínio (não precisam estar ordenadas).
	*	var x = [4,1,2,3]; 
	*	// Plota a reta y = 1 + 2x sobre o domínio real x = [1,4].
	*	// A reta é verde e possui espessura de 3px. 
	*	// Usa a margem default com a entrada null.
	*	mat.estatistica.plotarReta(ctx, 1, 2, x, 3, null, 'green');
	*	</script>	
	* DESDE: 1.0
	* VEJA: 
	*	Canvas.getContext('2d'), context.save(), context.beginPath(),
	*	context.restore(), context.stroke(), context.moveTo(), 
	*	context.lineTo(), context.strokeStyle, context.lineWidth, 
	*	mat.util.maximo(), mat.util.minimo().
	*/
	
	function plotarReta(context, coefLinear, coefAngular, arrayX, espessura, bordaGrid, cor) {
		if (espessura == null) espessura = 1;
		if (cor == null) cor = 'black';
		if (bordaGrid == null) bordaGrid = 10;
		
		var altura = context.canvas.height - 2 * bordaGrid;
		var largura = context.canvas.width - 2 * bordaGrid;			
		
		x1 = mat.util.minimo(arrayX);
		y1 = coefLinear + coefAngular  * x1;
		
		x2 = mat.util.maximo(arrayX);
		y2 = coefLinear + coefAngular  * x2;
		
		var largura_por_unidade = largura / x2;
		var altura_por_unidade = altura / y2;
		
		context.save();			
		
		context.beginPath();
		context.moveTo(
			bordaGrid + x1 * largura_por_unidade,
			bordaGrid + altura - y1 * altura_por_unidade
		);
		context.lineTo(
			bordaGrid + x2 * largura_por_unidade,
			bordaGrid + altura - y2 * altura_por_unidade
		);
		context.lineWidth = espessura;
		context.strokeStyle = cor;
		context.stroke();
		
		context.restore();
	}
	
	return {		
		desenharGrid: desenharGrid,
		frequencia: frequencia,
		media: media,
		mediana: mediana,
		moda: moda,
		plotarPontos: plotarPontos,
		plotarReta: plotarReta,
		retaMinQuadrados: retaMinQuadrados
	};
}());

////////////////////////////////////////////////////////////////////////

// TEORIA DOS CONJUNTOS
/**
* Sinopse: Operações com conjuntos.
*	mat.conjuntos
* Retorna: 
*	Retorna o seguinte objeto.
*	{
*		diferenca: diferenca, => a diferença entre conjuntos.
*		elementosDiferentes: elementosDiferentes, => o conjunto sem duplicatas.
*		intersecao: intersecao, => a interseção entre conjuntos.
*		uniao: uniao => a união entre conjuntos.
*	}
* Descrição:
*	Funções básicas de um elemento set, que podem ser aplicadas em arrays.
* Exemplo:
*	var m = mat.conjuntos; // Pode-se armazenar em uma variável para uso frequente.
*	m.uniao([1,2,2,3,4], [3,4,5,6]); // Chama a função união.
* DESDE: 1.0
* VEJA: 
*	documentação interna das funções.
*/

mat.conjuntos = (function(){
	
	/**
	* Sinopse: Elimina duplicatas de um array.
	*	mat.conjuntos.elementosDiferentes(array)
	* Entrada(s):
	*	array: um array com qualquer tipo de elemento.
	* Saída: 
	*	Um novo array com apenas um exemplar de cada elemento do array
	*	de entrada.
	* Descrição:
	*	Dado o array de entrada, a função, atráves de um dicionário
	*	interno armazena os elementos nas chamas que possuem nomes
	*	iguais os valores, sobrescrevendo assim os valores repetidos.
	*	Depois essas chaves são passadas em ordem alfanumérica para um
	*	novo array a ser retornado.
	*	Deve-se observar que, além do novo array estar em ordem
	*	alfanumérica, ele é composto por representação em string dos
	*	valores.
	* Exemplo:
	*	var array = [1,'x','x',4,5,3,4]; // Array com tipos diferentes.
	*	m = mat.conjuntos;
	*	m.elementosDiferentes(array); // Retorna ["1","3","4","5","x"].
	* DESDE: 1.0
	*/
	
	function elementosDiferentes(array) {
		dict = {}; 	
		for (var i = 0; i < array.length; i++) {
			dict[array[i]] = array[i]; 
		}	
		var novo_array = [];	
		for (var key in dict) {
			novo_array.push(key);
		}
		return novo_array;
	}

	/**
	* Sinopse: Calcula a união entre dois arrays.
	*	mat.conjuntos.uniao(array1, array2)
	* Entrada(s):
	*	array1: um array com qualquer tipo de elemento.
	*	array2: um array com qualquer tipo de elemento.
	* Saída: 
	*	Retorna um array com todos os elementos de array1 e array2 sem
	*	duplicatas.
	* Descrição:
	*	Dados os arrays de entrada, a função concatena-os e depois
	*	elimina os elementos duplicados. 
	*	Como ela usa internamente a função elementosDiferentes()
	*	Deve-se observar que, além do novo array estar em ordem
	*	alfanumérica, ele é composto por representação em string dos
	*	valores.
	* Exemplo:
	*	//Array com tipos diferentes.
	*	var array1 = [1,'x','x',4,5,3,4], array2 = ['x',4,67,'a'];
	*	// Retorna ["1","3","4","5","67","x","a"].	
	*	mat.conjuntos.uniao(array1, array2); 
	* DESDE: 1.0
	* VEJA: 
	*	elementosDiferentes(), Array.concat().
	*/
	
	function uniao(array1, array2) {
		return elementosDiferentes(array1.concat(array2));
	}

	/**
	* Sinopse: Calcula a interseção entre dois arrays.
	*	mat.conjuntos.intersecao(array1, array2)
	* Entrada(s):
	*	array1: um array com qualquer tipo de elemento.
	*	array2: um array com qualquer tipo de elemento.
	* Saída: 
	*	Retorna um array com os elementos comuns ao array1 e array2 sem
	*	duplicatas.
	* Descrição:
	*	Dados os arrays de entrada, a função verifica se os elementos
	*	de um deles está no outro. Caso esteja, ele acrescenta no novo
	*	array a ser retornado.	
	*	Como ela usa internamente a função elementosDiferentes()
	*	Deve-se observar que, além do novo array estar em ordem
	*	alfanumérica, ele é composto por representação em string dos
	*	valores.
	* Exemplo:
	*	//Array com tipos diferentes.
	*	var array1 = [1,'x','x',4,5,3,4], array2 = ['x',4,67,'a'];
	*	mat.conjuntos.intersecao(array1, array2); // Retorna ["4","x"].	
	* DESDE: 1.0
	* VEJA: 
	*	elementosDiferentes(), Array.indexOf().
	*/
	
	function intersecao(array1, array2) {
		var inter = [];
		for (var i in array1) {
			if (array2.indexOf(array1[i]) != -1) {
				inter.push(array1[i]);
			}
		}
		return elementosDiferentes(inter);
	}

	/**
	* Sinopse: Calcula a diferença entre dois arrays.
	*	mat.conjuntos.diferenca(array1, array2)
	* Entrada(s):
	*	array1: um array com qualquer tipo de elemento.
	*	array2: um array com qualquer tipo de elemento.
	* Saída: 
	*	Retorna um array com os elementos que estão no array1 e não
	*	estão no array2, sem duplicatas.
	* Descrição:
	*	Dados os arrays de entrada, a função verifica se os elementos
	*	do primeiro deles está no outro. Caso não esteja, ele acrescenta
	*	no novo	array a ser retornado.	
	*	Como ela usa internamente a função elementosDiferentes()
	*	Deve-se observar que, além do novo array estar em ordem
	*	alfanumérica, ele é composto por representação em string dos
	*	valores.
	* Exemplo:
	*	//Array com tipos diferentes.
	*	var array1 = [1,'x','x',4,5,3,4], array2 = ['x',4,67,'a'];
	*	mat.conjuntos.diferenca(array1, array2); // Retorna ["1","3","5"].
	*	mat.conjuntos.diferenca(array2, array1); // Retorna ["67","a"].	
	* DESDE: 1.0
	* VEJA: 
	*	elementosDiferentes(), Array.indexOf().
	*/
	
	function diferenca(array1, array2) {
		var dif = [];
		for (var i in array1) {
			if (array2.indexOf(array1[i]) == -1) {
				dif.push(array1[i]);
			}
		}
		return elementosDiferentes(dif);
	}
	
	return {
		diferenca: diferenca,
		elementosDiferentes: elementosDiferentes,
		intersecao: intersecao,
		uniao: uniao
	};
}());

////////////////////////////////////////////////////////////////////////

// FUNÇÃO QUADRÁTICA
mat.quadratica = (function(){
	/**
	* Retorna o discriminate da função quadrática f(x) = ax² + bx + c, 
	* dados os coeficientes a, b e c.
	*/
	function delta(a, b, c) {
		return b * b - 4 * a * c;
	}

	/**
	* Retorna as raízes complexas da função quadrática f(x) = ax² + bx + c,
	* dados os seus coeficientes a, b e c como entradas.
	* O valor retornado é um array [[u1, v1], [u2, v2]], onde u1 e u2 são as
	* partes reais e v1 e v2 as partes imaginárias da raízes x1 = u1 + v1 * i
	* e x2 = u2 + v2 * i.
	*/
	function raizes(a, b, c) {
		var d = delta(a, b, c);
		var x1;
		var x2;
		if (d >= 0 ) {
			x1 = [(-b + Math.sqrt(d)) / (2 * a), 0];
			x2 = [(-b - Math.sqrt(d)) / (2 * a), 0];
		} else {
			x1 = [-b / (2 * a), Math.sqrt(-d) / (2 * a)];
			x2 = [-b / (2 * a), -Math.sqrt(-d) / (2 * a)];
		}
		return [x1, x2];
	}

	/**
	* Retorna as coordenadas do vértice da função quadrática f(x) = ax² + bx + c,
	* dados os seus coeficientes a, b e c como entradas.
	* O valor retornado é um array [x, y] com a abscissa x e a ordenada y do vértice
	* da parábola.
	*/
	function vertice(a, b, c) {
		var x = -b / (2 * a);
		var y = -delta(a, b, c) / (4 * a);
		return [x, y];
	}

	/**
	* Um objeto que empacota todos os atributos e funções de uma função quadrática, 
	* calculando e retornando de forma prática todas as informações mais úteis.
	*/
	function Quadratica(a, b, c) {
		this.a = a; // Coeficiente a.
		this.b = b; // Coeficiente b.
		this.c = c; // Coeficiente c.
		this.delta = delta(this.a, this.b, this.c); // O discriminante.
		this.x1 = raizes(this.a, this.b, this.c)[0]; // Uma raíz.
		this.x2 = raizes(this.a, this.b, this.c)[1]; // A outra raíz.
		this.xv = vetice(this.a, this.b, this.c)[0]; // A coordenada x do vértice.
		this.yv = vetice(this.a, this.b, this.c)[1]; // A coordenada y do vértice.
	}
	
	return {
		delta: delta,
		Quadratica: Quadratica,
		raizes: raizes,
		vertice: vertice
	};
}());

///////////////////////////////////////////////////////////////////////

//SISTEMAS E DETERMINANTES
mat.sistemas = (function(){
	/**
	* Retorna o determinante de uma matriz 3x3 usando a Regra de Sarrus.
	* Tem como entrada arrays de 3 elementos representando as três linhas
	* da matriz, l1, l2 e l3.
	*/
	function sarrus(l1, l2, l3) {
		var principal = l1[0]*l2[1]*l3[2] + l1[1]*l2[2]*l3[0] + l1[2]*l2[0]*l3[1];
		var secundaria = l1[2]*l2[1]*l3[0] + l1[0]*l2[2]*l3[1] + l1[1]*l2[0]*l3[2];
		return principal - secundaria;
	}

	/**
	* Retorna o determinante de uma matriz 2x2.
	* Tem como entrada dois arrays de dois elementos cada, l1 e l2,
	* representando as linhas da matriz.
	*/
	function det2x2(l1, l2) {
		return l1[0]*l2[1] - l1[1]*l2[0];
	}

	/**
	* Utiliza a Regra de Crammer para resolver sistemas 3x3.
	* Tem como entradas as 3 linhas com 4 elementos da matriz extendida
	* (incluindo as somas), le1, le2, le3.
	* Retorna um array [x, y, z] com os valores das incógnitas x, y e z.
	*/
	function crammer3x3(le1, le2, le3) {
		var d = sarrus(
			[le1[0], le1[1], le1[2]],
			[le2[0], le2[1], le2[2]],
			[le3[0], le3[1], le3[2]]
		);
		var dx = sarrus(
			[le1[3], le1[1], le1[2]],
			[le2[3], le2[1], le2[2]],
			[le3[3], le3[1], le3[2]]
		);
		var dy = sarrus(
			[le1[0], le1[3], le1[2]],
			[le2[0], le2[3], le2[2]],
			[le3[0], le3[3], le3[2]]
		);
		var dz = sarrus(
			[le1[0], le1[1], le1[3]],
			[le2[0], le2[1], le2[3]],
			[le3[0], le3[1], le3[3]]
		);
		return [dx/d, dy/d, dz/d];
	}

	/**
	* Utiliza a Regra de Crammer para resolver sistemas 2x2.
	* Tem como entradas as 2 linhas com 3 elementos da matriz extendida
	* (incluindo as somas), le1 e le2.
	* Retorna um array [x, y] com os valores das incógnitas x e y.
	*/
	function crammer2x2(le1, le2) {
		var d = det2x2(
			[le1[0], le1[1]],
			[le2[0], le2[1]]
		);
		var dx = det2x2(
			[le1[2], le1[1]],
			[le2[2], le2[1]]
		);
		var dy = det2x2(
			[le1[0], le1[2]],
			[le2[0], le2[2]]
		);
		return [dx/d, dy/d];
	}
	
	/*Retorna uma matriz identidade de ordem n*/
	function I(n) {
		var I = new Array(n);
		for (var i = 0; i < n; i++) {
			I[i] = new Array(n);
			mat.util.encher(I[i], 0);
			I[i][i] = 1;
		}
		return I;
	}
	
	/*Escalona uma matriz*/
	function escalonar(A) {
		var n = A.length;
		var r = A[0].length - A.length;
		// alfa		
		for (var i = 0; i < n - 1; i++) {
			// Determinação do elemento central.
			var max = i;
			a_max = Math.abs(A[i][i]);
			for (var j = i + 1; j < n; j++) {
				if (Math.abs(A[j][i]) > a_max) {
					max = j;
					a_max = Math.abs(A[j][i]);
				}
			}
			// Trocas de linhas.
			if (max != i) {
				for (var k = i; k < n + r; k++) {
					var temp = A[i][k];
					A[i][k] = A[max][k];
					A[max][k] = temp;
				}
			}
			// beta			
			for (var j = i + 1; j < n; j++) {				
				if (A[j][i] != 0) {
					var fator = -A[j][i] / A[i][i];
					for (var k = i; k < n + r; k++) {
							A[j][k] += A[i][k] * fator;
					}					
				}					
			}						
		}
		return A;				
	}
	
	return {
		crammer2x2: crammer2x2,
		crammer3x3: crammer3x3,
		det2x2: det2x2,
		gaussiana: gaussiana,
		I: I,
		sarrus: sarrus
	};
}());
///////////////////////////////////////////////////////////////////////

//GEOMETRIA
mat.geometria = (function(){
	/**
	* Colocando como entrada n, a função retornda um array bidimensional
	* onde cada linha [a, b, c] é um terno pitagórico primitivo,
	* com a e b catetos e c a hipotenusa. 
	* A função utiliza parâmetros internos x e y primos entre si, com x
	* variando de 2 a n, inclusive, y < x e apenas um dos dois par. Desta
	* forma temos cada linha [a, b, c] = [x² - y², 2xy, x² + y²].
	*/
	function ternoPit(n) {
		var a = [];
		for (var x = 2; x <= n; x++) {
			for (var y = (x % 2 == 0 ? 1 : 2); y < x; y += 2) {
				if (mat.aritmetica.mdc(x, y) == 1) {
					a.push([x * x - y * y, 2 * x * y, x * x + y * y]);
				}
			}
		}
		return a;
	}

	return {
		ternoPit: ternoPit
	};
}());
///////////////////////////////////////////////////////////////////////

//ARITMÉTICA
mat.aritmetica = (function(){
	/**Retorna o máximo divisor comum entre os inteiros m e n.*/
	function mdc(m, n) {
		if (m < 0) m *= -1;
		if (n < 0) n *= -1;
		var r;
		if (m < n) {
			var temp = m;
			m = n;
			n = temp;
		}
		while (n > 0) {
			r = m % n;
			m = n;
			n = r;
		}
		return m;
	}

	return {
		mdc: mdc
	};
}());
///////////////////////////////////////////////////////////////////////

//FUNÇÕES ÚTEIS
mat.util = (function(){
	/**Retorna o elemento máximo do array*/
	function maximo(array) {
		var max = array[0];
		
		for (var i = 1; i < array.length; i++) {
			if (array[i] > max) max = array[i];
		}
		
		return max;
	}

	/**Retorna o elemento mínimo do array*/
	function minimo(array) {
		var min = array[0];
		
		for (var i = 1; i < array.length; i++) {
			if (array[i] < min) min = array[i];
		}
		
		return min;
	}
	
	function encher(array, valor) {		
		for (var i = 0; i < array.length; i++) {
			array[i] = valor;
		}
	}
	return {
		encher: encher,
		maximo: maximo,
		minimo: minimo
	};
}());
