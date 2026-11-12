import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Heart, h as Lightbulb, n as X } from "../_libs/lucide-react.mjs";
import { c as playTone, m as useProgress, o as bolt_default, s as cn, t as Button } from "./splash-C3xWF-XY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/player-QcbL7s2Z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var capstoneUnits = {
	js: [{
		id: "js-u4",
		title: "Um programa teu",
		blurb: "Juntas função, decisão e ciclo até o programa sair do zero.",
		lessons: [
			{
				id: "js-10",
				title: "A função decide",
				steps: [
					{
						kind: "theory",
						title: "Receber, decidir, devolver",
						body: "Um programa a sério não é uma linha solta. A função recebe a nota, decide, e devolve uma palavra. Quem a chama é que mostra o resultado.",
						example: "function resultado(nota) {\n  if (nota >= 10) return \"passa\";\n  return \"recupera\";\n}"
					},
					{
						kind: "predict",
						prompt: "O que aparece?",
						code: "function resultado(nota) {\n  if (nota >= 10) return \"passa\";\n  return \"recupera\";\n}\nconsole.log(resultado(8));",
						options: [
							"recupera",
							"passa",
							"8",
							"erro"
						],
						answer: 0,
						explain: "8 não chega a 10, por isso a função devolve recupera. O log mostra essa palavra.",
						hint: "A primeira condição falha."
					},
					{
						kind: "order",
						prompt: "Monta a função que decide a nota.",
						lines: [
							"function resultado(nota) {",
							"  if (nota >= 10) return \"passa\";",
							"  return \"recupera\";",
							"}"
						],
						explain: "Primeiro abres a função. A condição vem antes do regresso final. A chaveta fecha.",
						hint: "A chaveta que fecha é a última linha."
					},
					{
						kind: "type",
						prompt: "Escreve a chamada que mostra o resultado de 14.",
						answer: "console.log(resultado(14));",
						accept: ["console.log(resultado(14))"],
						explain: "Chamas a função com 14 e mostras o que ela devolve.",
						hint: "console.log por fora, resultado(14) por dentro."
					},
					{
						kind: "predict",
						prompt: "E agora?",
						code: "console.log(resultado(14));",
						options: [
							"passa",
							"recupera",
							"14",
							"undefined"
						],
						answer: 0,
						explain: "14 é pelo menos 10, logo o return de dentro do if devolve passa.",
						hint: "A condição é verdadeira."
					}
				]
			},
			{
				id: "js-11",
				title: "A lista inteira",
				steps: [
					{
						kind: "theory",
						title: "Uma decisão para cada valor",
						body: "O ciclo percorre a lista. Em cada volta, notas[i] é a nota da vez e entra na função. Assim o mesmo critério serve para todas.",
						example: "const notas = [12, 8, 15];\nfor (let i = 0; i < notas.length; i++) {\n  console.log(resultado(notas[i]));\n}"
					},
					{
						kind: "predict",
						prompt: "Quantas linhas saem?",
						code: "const notas = [12, 8, 15];\nfor (let i = 0; i < notas.length; i++) {\n  console.log(resultado(notas[i]));\n}",
						options: [
							"3",
							"2",
							"15",
							"1"
						],
						answer: 0,
						explain: "A lista tem 3 notas e o ciclo corre uma vez por elemento.",
						hint: "Olha para o tamanho da lista, não para o valor 15."
					},
					{
						kind: "choice",
						prompt: "O que é notas[i] na segunda volta, se i começa em 0?",
						options: [
							"8",
							"12",
							"15",
							"notas"
						],
						answer: 0,
						explain: "i vale 0, depois 1, depois 2. Na segunda volta i é 1, e notas[1] é 8.",
						hint: "A segunda volta não é o índice 2."
					},
					{
						kind: "order",
						prompt: "Põe o programa na ordem em que tem de ser lido.",
						lines: [
							"function resultado(nota) {",
							"  if (nota >= 10) return \"passa\";",
							"  return \"recupera\";",
							"}",
							"const notas = [12, 8, 15];",
							"for (let i = 0; i < notas.length; i++) {",
							"  console.log(resultado(notas[i]));",
							"}"
						],
						explain: "A função tem de existir antes de ser chamada. A lista vem a seguir. O ciclo é o último bloco.",
						hint: "Não comeces pelo for."
					},
					{
						kind: "predict",
						prompt: "Qual é a consola, de cima para baixo?",
						code: "const notas = [12, 8, 15];",
						options: [
							"passa, recupera, passa",
							"recupera, passa, passa",
							"12, 8, 15",
							"passa, passa, passa"
						],
						answer: 0,
						explain: "12 passa, 8 recupera, 15 passa.",
						hint: "Só 8 fica abaixo de 10."
					}
				]
			},
			{
				id: "js-12",
				title: "Do zero",
				steps: [
					{
						kind: "theory",
						title: "Primeiro o plano, depois o código",
						body: "Antes de escrever: o que entra, o que se decide, o que sai. Aqui entram três notas. A regra é fixa. A saída é uma palavra por nota. No Compilador vais escrever isto sem as linhas já feitas.",
						example: "entradas: 12, 8, 15\nregra: >= 10 passa, senão recupera\nsaída: uma palavra por linha"
					},
					{
						kind: "choice",
						prompt: "Porque é que a função vem antes do ciclo?",
						options: [
							"Porque o ciclo vai chamá-la",
							"Porque o JavaScript exige funções no fim",
							"Porque a lista não pode vir primeiro",
							"Porque return só funciona na linha 1"
						],
						answer: 0,
						explain: "Quando o ciclo corre, o nome resultado já tem de existir.",
						hint: "Quem chama tem de encontrar a função."
					},
					{
						kind: "blank",
						prompt: "A condição da positiva.",
						before: "if (nota ",
						after: " 10) return \"passa\";",
						options: [
							">=",
							">",
							"<=",
							"==="
						],
						answer: 0,
						explain: "10 também passa. Por isso é maior ou igual, não só maior.",
						hint: "A nota 10 não pode ficar de fora."
					},
					{
						kind: "type",
						prompt: "Escreve a linha do ciclo que mostra o resultado da nota atual.",
						answer: "console.log(resultado(notas[i]));",
						accept: ["console.log(resultado(notas[i]))"],
						explain: "notas[i] é a nota desta volta. resultado decide. console.log mostra.",
						hint: "Três nomes: console, resultado e notas."
					},
					{
						kind: "predict",
						prompt: "Se a lista for [10, 9], o que aparece?",
						options: [
							"passa e depois recupera",
							"recupera e depois passa",
							"só passa",
							"10 e 9"
						],
						answer: 0,
						explain: "10 passa porque a condição inclui o igual. 9 recupera.",
						hint: "10 não é negativo."
					}
				]
			}
		]
	}],
	py: [{
		id: "py-u3",
		title: "O teu script",
		blurb: "Do if indentado até um script que classificas tu.",
		lessons: [
			{
				id: "py-7",
				title: "Devolver a decisão",
				steps: [
					{
						kind: "theory",
						title: "return em vez de print lá dentro",
						body: "A função calcula. O print fica para quem a usa. Assim podes testar a mesma regra com várias notas.",
						example: "def resultado(nota):\n    if nota >= 10:\n        return \"passa\"\n    return \"recupera\""
					},
					{
						kind: "predict",
						prompt: "O que devolve resultado(8)?",
						code: "def resultado(nota):\n    if nota >= 10:\n        return \"passa\"\n    return \"recupera\"",
						options: [
							"recupera",
							"passa",
							"None",
							"erro de indentação"
						],
						answer: 0,
						explain: "8 não entra no if. O return seguinte entrega recupera.",
						hint: "A condição falha."
					},
					{
						kind: "order",
						prompt: "Monta a função. Repara na indentação.",
						lines: [
							"def resultado(nota):",
							"    if nota >= 10:",
							"        return \"passa\"",
							"    return \"recupera\""
						],
						explain: "def abre. O if fica um nível dentro. O return do if fica mais dentro. O return final alinha com o if.",
						hint: "O return final não fica tão dentro como o primeiro."
					},
					{
						kind: "type",
						prompt: "Escreve a chamada que mostra o resultado de 14.",
						answer: "print(resultado(14))",
						semi: "keep",
						explain: "print mostra. resultado(14) calcula.",
						hint: "print por fora."
					},
					{
						kind: "choice",
						prompt: "O que está errado neste bloco?",
						code: "def resultado(nota):\nif nota >= 10:\n    return \"passa\"",
						options: [
							"O if devia estar indentado dentro do def",
							"Falta um ponto e vírgula",
							"return não existe em Python",
							"A condição precisava de parênteses"
						],
						answer: 0,
						explain: "Em Python o corpo da função é a indentação. Um if colado à esquerda não pertence à função.",
						hint: "Não é o ponto e vírgula. Python não o usa."
					}
				]
			},
			{
				id: "py-8",
				title: "Um for com a função",
				steps: [
					{
						kind: "theory",
						title: "Cada volta chama a regra",
						body: "for nota in notas: entrega uma nota de cada vez, já com o nome nota. Não precisas do índice.",
						example: "notas = [12, 8, 15]\nfor nota in notas:\n    print(resultado(nota))"
					},
					{
						kind: "predict",
						prompt: "O que aparece?",
						code: "notas = [12, 8]\nfor nota in notas:\n    print(resultado(nota))",
						options: [
							"passa e depois recupera",
							"12 e depois 8",
							"recupera e depois passa",
							"só passa"
						],
						answer: 0,
						explain: "12 passa. 8 recupera. O print mostra o texto, não o número.",
						hint: "A função não devolve a nota."
					},
					{
						kind: "blank",
						prompt: "Percorre a lista notas.",
						before: "for nota ",
						after: " notas:",
						options: [
							"in",
							"of",
							"to",
							"="
						],
						answer: 0,
						explain: "Python diz in. of é do JavaScript.",
						hint: "Não é o of."
					},
					{
						kind: "order",
						prompt: "Ordena o script completo.",
						lines: [
							"def resultado(nota):",
							"    if nota >= 10:",
							"        return \"passa\"",
							"    return \"recupera\"",
							"notas = [12, 8, 15]",
							"for nota in notas:",
							"    print(resultado(nota))"
						],
						explain: "Defines a função, guardas a lista, e só depois percorres.",
						hint: "O for não pode ser a primeira linha."
					},
					{
						kind: "type",
						prompt: "Escreve a linha indentada que mostra o resultado de cada nota. Quatro espaços no início.",
						answer: "    print(resultado(nota))",
						accept: ["print(resultado(nota))"],
						semi: "keep",
						explain: "Dentro do for, o print fica indentado e chama a função com a nota da volta.",
						hint: "print, resultado e nota."
					}
				]
			},
			{
				id: "py-9",
				title: "Script do zero",
				steps: [
					{
						kind: "theory",
						title: "Três blocos, um programa",
						body: "1. A função com a regra. 2. A lista com os dados. 3. O ciclo que liga os dois. Se trocares a ordem, o nome ainda não existe quando o usas. No Compilador escreves as três partes.",
						example: "função\nlista\nciclo"
					},
					{
						kind: "choice",
						prompt: "Onde deve ficar o print?",
						options: [
							"Dentro do for, a chamar a função",
							"Dentro do if, em vez do return",
							"Antes do def",
							"Na mesma linha do def"
						],
						answer: 0,
						explain: "A função devolve. O ciclo é que mostra, uma vez por nota.",
						hint: "Queres uma linha por elemento da lista."
					},
					{
						kind: "predict",
						prompt: "notas = [10, 9]. Qual é a saída?",
						options: [
							"passa e depois recupera",
							"recupera e depois passa",
							"10 e 9",
							"erro"
						],
						answer: 0,
						explain: "10 entra no if. 9 cai no return final.",
						hint: "O igual conta."
					},
					{
						kind: "blank",
						prompt: "O regresso da negativa, alinhado com o if.",
						before: "    ",
						after: " \"recupera\"",
						options: [
							"return",
							"print",
							"yield",
							"def"
						],
						answer: 0,
						explain: "return entrega o valor. print só o mostraria e a função devolveria None.",
						hint: "Não é print."
					},
					{
						kind: "type",
						prompt: "Escreve a primeira linha do ciclo. Inclui os dois pontos.",
						answer: "for nota in notas:",
						semi: "keep",
						explain: "for nota in notas: abre o bloco que vai chamar a função.",
						hint: "for, in, e : no fim."
					}
				]
			}
		]
	}],
	cs: [{
		id: "cs-u3",
		title: "Programa de consola",
		blurb: "Método, condição e ciclo, até correres um programa completo.",
		lessons: [
			{
				id: "cs-7",
				title: "Um método com regra",
				steps: [
					{
						kind: "theory",
						title: "static string decide",
						body: "O método recebe um int e devolve texto. static permite chamá-lo sem criar um objeto. A consola fica para o WriteLine.",
						example: "static string Resultado(int nota) {\n  if (nota >= 10) return \"passa\";\n  return \"recupera\";\n}"
					},
					{
						kind: "predict",
						prompt: "O que devolve Resultado(8)?",
						code: "static string Resultado(int nota) {\n  if (nota >= 10) return \"passa\";\n  return \"recupera\";\n}",
						options: [
							"recupera",
							"passa",
							"8",
							"erro"
						],
						answer: 0,
						explain: "A condição falha e o segundo return entrega recupera.",
						hint: "8 é menor que 10."
					},
					{
						kind: "choice",
						prompt: "Qual é a assinatura certa?",
						options: [
							"static string Resultado(int nota)",
							"def Resultado(nota)",
							"function Resultado(nota)",
							"string nota()"
						],
						answer: 0,
						explain: "Dizes o tipo que devolve, o nome, e o tipo do parâmetro.",
						hint: "Há dois tipos: o da resposta e o da nota."
					},
					{
						kind: "order",
						prompt: "Monta o método.",
						lines: [
							"static string Resultado(int nota)",
							"{",
							"    if (nota >= 10) return \"passa\";",
							"    return \"recupera\";",
							"}"
						],
						explain: "A assinatura abre, as chavetas envolvem os dois returns.",
						hint: "A chaveta que fecha fica no fim."
					},
					{
						kind: "type",
						prompt: "Escreve a chamada que mostra o resultado de 14. Com ponto e vírgula.",
						answer: "Console.WriteLine(Resultado(14));",
						semi: "keep",
						explain: "WriteLine mostra. Resultado(14) calcula a palavra.",
						hint: "Console.WriteLine por fora."
					}
				]
			},
			{
				id: "cs-8",
				title: "Ciclo sobre o array",
				steps: [
					{
						kind: "theory",
						title: "Length e o índice",
						body: "int[] notas = { 12, 8, 15 }; cria o array. O for usa notas.Length para saber quando parar. notas[i] é a nota da volta.",
						example: "int[] notas = { 12, 8, 15 };\nfor (int i = 0; i < notas.Length; i++) {\n  Console.WriteLine(Resultado(notas[i]));\n}"
					},
					{
						kind: "predict",
						prompt: "O que aparece primeiro?",
						code: "int[] notas = { 12, 8, 15 };\nfor (int i = 0; i < notas.Length; i++) {\n  Console.WriteLine(Resultado(notas[i]));\n}",
						options: [
							"passa",
							"recupera",
							"12",
							"15"
						],
						answer: 0,
						explain: "A primeira nota é 12, e 12 passa.",
						hint: "O índice 0 é o primeiro valor."
					},
					{
						kind: "blank",
						prompt: "O ciclo corre enquanto i for menor que o tamanho.",
						before: "for (int i = 0; i < notas.",
						after: "; i++)",
						options: [
							"Length",
							"length",
							"Count",
							"size"
						],
						answer: 0,
						explain: "Em C# o tamanho de um array é Length, com L grande.",
						hint: "Não é o length do JavaScript."
					},
					{
						kind: "choice",
						prompt: "Porque é que o método está acima do for?",
						options: [
							"Para o nome Resultado já existir quando o ciclo o chama",
							"Porque Length só funciona depois de um método",
							"Porque o array não aceita números",
							"Porque WriteLine tem de ser a primeira linha do ficheiro"
						],
						answer: 0,
						explain: "A chamada precisa da definição já escrita por cima.",
						hint: "É uma questão de ordem."
					},
					{
						kind: "type",
						prompt: "Escreve a linha de dentro do ciclo. Com ponto e vírgula.",
						answer: "Console.WriteLine(Resultado(notas[i]));",
						semi: "keep",
						explain: "Mostras o texto que o método devolve para a nota deste índice.",
						hint: "WriteLine, Resultado e notas[i]."
					}
				]
			},
			{
				id: "cs-9",
				title: "Consola do zero",
				steps: [
					{
						kind: "theory",
						title: "O ficheiro tem três partes",
						body: "Método, array, ciclo. Se falta uma, o programa não classifica. No Compilador partes quase do vazio e fechas as três.",
						example: "método\narray\nciclo"
					},
					{
						kind: "order",
						prompt: "Qual é a ordem do ficheiro?",
						lines: [
							"static string Resultado(int nota)",
							"{",
							"    if (nota >= 10) return \"passa\";",
							"    return \"recupera\";",
							"}",
							"int[] notas = { 12, 8, 15 };",
							"for (int i = 0; i < notas.Length; i++)",
							"{",
							"    Console.WriteLine(Resultado(notas[i]));",
							"}"
						],
						explain: "O método nasce primeiro. Os dados vêm a seguir. O ciclo usa os dois.",
						hint: "int[] não é a primeira linha."
					},
					{
						kind: "predict",
						prompt: "Saída de { 10, 9 }, de cima para baixo.",
						options: [
							"passa e depois recupera",
							"recupera e depois passa",
							"10 e 9",
							"erro de tipo"
						],
						answer: 0,
						explain: "10 satisfaz >=. 9 cai no segundo return.",
						hint: "O 10 passa."
					},
					{
						kind: "blank",
						prompt: "Crias o array de inteiros.",
						before: "",
						after: "[] notas = { 12, 8, 15 };",
						options: [
							"int",
							"string",
							"let",
							"var notas"
						],
						answer: 0,
						explain: "O array guarda ints, por isso o tipo é int[].",
						hint: "Não é string."
					},
					{
						kind: "choice",
						prompt: "O que acontece se trocares return por Console.WriteLine dentro do método e o método for string?",
						options: [
							"O método deixa de devolver a palavra que o ciclo quer mostrar",
							"O programa fica mais certo",
							"Length passa a contar letras",
							"O array fica vazio"
						],
						answer: 0,
						explain: "WriteLine mostra na hora e não substitui o return. O ciclo receberia vazio.",
						hint: "Mostrar não é devolver."
					}
				]
			}
		]
	}],
	web: [{
		id: "web-u3",
		title: "Página do zero",
		blurb: "Estrutura, estilo e uma página que montas tu.",
		lessons: [{
			id: "web-5",
			title: "Cabeça, corpo, estilo",
			steps: [
				{
					kind: "theory",
					title: "Uma página é um documento",
					body: "h1 diz o assunto. p explica. style, de preferência numa classe, muda o aspeto sem sujar o texto. Uma página pequena já é um programa visual.",
					example: "<h1 class=\"titulo\">Boletim</h1>\n<p>12 passa. 8 recupera.</p>\n<style>\n  .titulo { color: #102033; }\n</style>"
				},
				{
					kind: "order",
					prompt: "Ordena uma página mínima.",
					lines: [
						"<h1>Boletim</h1>",
						"<p>Três notas, uma regra.</p>",
						"<style>",
						"  h1 { color: #102033; }",
						"</style>"
					],
					explain: "O título vem primeiro, o parágrafo explica, o estilo vem fechar o aspeto.",
					hint: "O h1 não fica no meio do CSS."
				},
				{
					kind: "choice",
					prompt: "Onde vive a regra visual?",
					options: [
						"Num bloco style ou numa folha CSS",
						"Dentro do texto do parágrafo",
						"No alt de uma imagem",
						"Num atributo href"
					],
					answer: 0,
					explain: "A cor e o flex são CSS. O HTML guarda o conteúdo.",
					hint: "Não é o href."
				},
				{
					kind: "blank",
					prompt: "O título usa a classe titulo.",
					before: "<h1 class=\"",
					after: "\">Boletim</h1>",
					options: [
						"titulo",
						".titulo",
						"#titulo",
						"h1"
					],
					answer: 0,
					explain: "No HTML o nome da classe não leva ponto. O ponto fica no CSS.",
					hint: "Sem pontuação."
				},
				{
					kind: "type",
					prompt: "Escreve a declaração que pinta o texto de azul carregado. Com ponto e vírgula.",
					answer: "color: #102033;",
					accept: ["color:#102033;", "color: #1860f8;"],
					semi: "keep",
					explain: "color muda a cor do texto. O ponto e vírgula fecha a declaração.",
					hint: "color, dois pontos, um valor."
				}
			]
		}, {
			id: "web-6",
			title: "Publica o boletim",
			steps: [
				{
					kind: "theory",
					title: "Do branco ao boletim",
					body: "A página final tem um título, um parágrafo com a regra, e uma lista com três notas. Uma classe cartao agrupa tudo em coluna, com flex. No Compilador constróis isto numa pré-visualização a sério.",
					example: "<main class=\"cartao\">\n  <h1>Boletim</h1>\n  <ul>\n    <li>12 passa</li>\n    <li>8 recupera</li>\n  </ul>\n</main>"
				},
				{
					kind: "choice",
					prompt: "Qual etiqueta faz uma lista?",
					options: [
						"ul com li lá dentro",
						"p repetido com class lista",
						"h1 três vezes",
						"img"
					],
					answer: 0,
					explain: "ul é a lista. Cada li é um item.",
					hint: "Não é o título."
				},
				{
					kind: "order",
					prompt: "Monta o miolo da página.",
					lines: [
						"<main class=\"cartao\">",
						"<h1>Boletim</h1>",
						"<ul>",
						"<li>12 passa</li>",
						"</ul>",
						"</main>"
					],
					explain: "main abre a zona, h1 apresenta, ul guarda os itens, e as etiquetas fecham de dentro para fora.",
					hint: "O </main> é o último."
				},
				{
					kind: "blank",
					prompt: "A classe cartao empilha o conteúdo.",
					before: ".cartao { display: ",
					after: "; }",
					options: [
						"flex",
						"block",
						"color",
						"href"
					],
					answer: 0,
					explain: "display: flex é a base. Para empilhar, juntas flex-direction: column.",
					hint: "É a palavra do flex."
				},
				{
					kind: "predict",
					prompt: "Se fechares o ul antes do li, o que acontece?",
					options: [
						"O item fica fora da lista",
						"A página não abre no browser",
						"O h1 desaparece",
						"O CSS deixa de existir"
					],
					answer: 0,
					explain: "O li tem de nascer antes do </ul>. Fora disso, deixa de ser item dessa lista.",
					hint: "A ordem de fechar importa."
				}
			]
		}]
	}],
	sql: [{
		id: "sql-u3",
		title: "O relatório",
		blurb: "Uma pergunta completa, do SELECT ao resultado.",
		lessons: [{
			id: "sql-5",
			title: "A pergunta certa",
			steps: [
				{
					kind: "theory",
					title: "Lê a pergunta em voz alta",
					body: "Quero o nome e os pontos dos alunos com pelo menos 25 XP, do maior para o menor. Isso é SELECT, FROM, WHERE e ORDER BY. Cada cláusula responde a uma parte da frase.",
					example: "SELECT nome, xp\nFROM alunos\nWHERE xp >= 25\nORDER BY xp DESC;"
				},
				{
					kind: "order",
					prompt: "Monta essa consulta.",
					lines: [
						"SELECT nome, xp",
						"FROM alunos",
						"WHERE xp >= 25",
						"ORDER BY xp DESC;"
					],
					explain: "Escolhes colunas, dizes a tabela, filtras, e só no fim ordenas.",
					hint: "WHERE vem antes de ORDER BY."
				},
				{
					kind: "predict",
					prompt: "Com Ana 40, Bruno 10 e Clara 25, quem aparece?",
					options: [
						"Ana e Clara",
						"só Bruno",
						"os três",
						"ninguém"
					],
					answer: 0,
					explain: "Bruno tem 10 e fica de fora. Ana e Clara passam o filtro.",
					hint: "25 também conta, porque é >=."
				},
				{
					kind: "choice",
					prompt: "Porque é que DESC está no fim?",
					options: [
						"Porque a ordenação aplica-se às linhas que sobraram",
						"Porque DESC substitui o WHERE",
						"Porque o FROM só aceita DESC",
						"Porque COUNT exige DESC"
					],
					answer: 0,
					explain: "Primeiro filtras. Ordenar antes do filtro não muda quem entra, mas a cláusula escreve-se depois.",
					hint: "O filtro decide quem fica."
				},
				{
					kind: "type",
					prompt: "Escreve a cláusula que ordena xp do maior para o menor, com ponto e vírgula.",
					answer: "ORDER BY xp DESC;",
					accept: ["ORDER BY xp DESC"],
					semi: "keep",
					explain: "ORDER BY xp DESC põe o maior xp primeiro.",
					hint: "ORDER BY, a coluna, DESC."
				}
			]
		}, {
			id: "sql-6",
			title: "Relatório do zero",
			steps: [
				{
					kind: "theory",
					title: "Nome do aluno e nome do curso",
					body: "Os nomes dos cursos vivem noutra tabela. JOIN casa alunos.curso_id com cursos.id. O relatório final mostra a pessoa e o curso, só quando o XP chega a 25, com o maior primeiro.",
					example: "SELECT alunos.nome, cursos.titulo\nFROM alunos\nJOIN cursos ON alunos.curso_id = cursos.id\nWHERE alunos.xp >= 25\nORDER BY alunos.xp DESC;"
				},
				{
					kind: "choice",
					prompt: "Qual é a chave que liga as tabelas?",
					options: [
						"alunos.curso_id com cursos.id",
						"alunos.nome com cursos.titulo",
						"alunos.xp com cursos.id",
						"as duas tabelas não se ligam"
					],
					answer: 0,
					explain: "curso_id aponta para o id do curso. Os nomes podem repetir-se. A chave, não.",
					hint: "Não juntes pelo texto do nome."
				},
				{
					kind: "order",
					prompt: "Monta o relatório.",
					lines: [
						"SELECT alunos.nome, cursos.titulo",
						"FROM alunos",
						"JOIN cursos ON alunos.curso_id = cursos.id",
						"WHERE alunos.xp >= 25",
						"ORDER BY alunos.xp DESC;"
					],
					explain: "FROM e JOIN criam as linhas juntas. WHERE corta. ORDER BY arruma.",
					hint: "SELECT continua a ser a primeira linha."
				},
				{
					kind: "predict",
					prompt: "Quem fica no relatório, de cima para baixo? Ana tem 40 e está em Web. Clara tem 25 e está em Dados. Bruno tem 10.",
					options: [
						"Ana | Web e depois Clara | Dados",
						"Bruno | Web",
						"Clara primeiro",
						"só os títulos"
					],
					answer: 0,
					explain: "Bruno fica de fora. Ana tem mais XP, por isso vem antes de Clara.",
					hint: "DESC põe o 40 à frente do 25."
				},
				{
					kind: "blank",
					prompt: "A condição do casamento.",
					before: "JOIN cursos ",
					after: " alunos.curso_id = cursos.id",
					options: [
						"ON",
						"WHERE",
						"ORDER BY",
						"FROM"
					],
					answer: 0,
					explain: "ON é a ponte do JOIN. WHERE filtra depois de a ponte existir.",
					hint: "São duas letras."
				}
			]
		}]
	}]
};
var courses = [
	{
		id: "js",
		name: "JavaScript",
		tagline: "A linguagem da web",
		units: [
			{
				id: "js-u1",
				title: "Primeiras linhas",
				blurb: "Valores, consola e tipos.",
				lessons: [
					{
						id: "js-1",
						title: "Guarda um valor",
						steps: [
							{
								kind: "theory",
								title: "Uma gaveta com nome",
								body: "Uma variável guarda um valor. let deixa-te mudar esse valor mais tarde. const fixa a ligação: não podes atribuir outro valor ao mesmo nome.",
								example: "let vidas = 5;\nconst nome = \"Sharp\";\nvidas = 4;"
							},
							{
								kind: "choice",
								prompt: "Qual palavra cria um nome que não podes reatribuir?",
								options: [
									"const",
									"let",
									"log",
									"function"
								],
								answer: 0,
								explain: "const fixa o nome a um valor. let serve quando o valor ainda vai mudar.",
								hint: "É a mais rígida das duas declarações."
							},
							{
								kind: "blank",
								prompt: "O texto precisa de aspas. Completa a declaração.",
								before: "const curso = ",
								after: ";",
								options: [
									"\"SharpTech\"",
									"SharpTech",
									"let",
									"=="
								],
								answer: 0,
								explain: "Strings levam aspas. A resposta é \"SharpTech\".",
								hint: "Sem aspas, o JavaScript procura uma variável."
							},
							{
								kind: "type",
								prompt: "Cria a variável pontos com let e guarda o número 3.",
								answer: "let pontos = 3",
								explain: "let pontos = 3 declara e atribui na mesma linha.",
								hint: "Começa por let, depois o nome, um igual e o 3."
							},
							{
								kind: "predict",
								prompt: "O que é escrito na consola?",
								code: "let x = 2;\nx = x + 1;\nconsole.log(x);",
								options: [
									"3",
									"2",
									"x",
									"21"
								],
								answer: 0,
								explain: "x começa em 2. Soma 1 e fica 3. console.log mostra 3.",
								hint: "Lê as linhas de cima para baixo. O log está no fim."
							}
						]
					},
					{
						id: "js-2",
						title: "Mostra na consola",
						steps: [
							{
								kind: "theory",
								title: "Ver o que o programa faz",
								body: "console.log mostra um valor na consola. Podes juntar texto com +.",
								example: "console.log(\"Olá \" + \"mundo\");"
							},
							{
								kind: "predict",
								prompt: "O que aparece?",
								code: "console.log(\"XP\");",
								options: [
									"XP",
									"console",
									"nada",
									"um erro"
								],
								answer: 0,
								explain: "O log imprime exatamente o texto que está entre aspas: XP.",
								hint: "Olha para o que está dentro dos parênteses."
							},
							{
								kind: "blank",
								prompt: "Mostra o número 10, sem aspas.",
								before: "console.log(",
								after: ");",
								options: [
									"10",
									"\"dez\"",
									"log",
									"print"
								],
								answer: 0,
								explain: "10 sem aspas é um número. print não existe em JavaScript.",
								hint: "Não é uma palavra inglesa. É o número."
							},
							{
								kind: "order",
								prompt: "Põe as linhas na ordem em que devem correr.",
								lines: [
									"const msg = \"pronto\";",
									"const extra = \"!\";",
									"console.log(msg + extra);"
								],
								explain: "Primeiro crias os pedaços. Só depois os juntas no log. A consola mostra pronto!",
								hint: "Não uses uma variável antes de a criares."
							},
							{
								kind: "type",
								prompt: "Escreve a instrução que mostra oi na consola.",
								answer: "console.log(\"oi\")",
								accept: ["console.log('oi')"],
								explain: "console.log(\"oi\") escreve oi. Aspas simples ou duplas servem.",
								hint: "É console.log, com o texto entre aspas."
							}
						]
					},
					{
						id: "js-3",
						title: "Texto, número, sim ou não",
						steps: [
							{
								kind: "theory",
								title: "Três tipos para já",
								body: "Uma string é texto, entre aspas. Um number é um número, sem aspas. Um boolean só pode ser true ou false.",
								example: "const nome = \"Ana\";\nconst vidas = 5;\nconst ativo = true;"
							},
							{
								kind: "choice",
								prompt: "Qual destes valores é um boolean?",
								options: [
									"true",
									"\"true\"",
									"1",
									"sim"
								],
								answer: 0,
								explain: "true e false são booleanos. \"true\" com aspas é texto.",
								hint: "Não leva aspas."
							},
							{
								kind: "predict",
								prompt: "O que aparece na consola?",
								code: "console.log(\"2\" + \"2\");",
								options: [
									"22",
									"4",
									"erro",
									"undefined"
								],
								answer: 0,
								explain: "Com strings, + cola o texto. \"2\" + \"2\" fica 22, não 4.",
								hint: "As aspas mudam a conta."
							},
							{
								kind: "predict",
								prompt: "E agora, sem aspas?",
								code: "console.log(5 + 5);",
								options: [
									"10",
									"\"55\"",
									"55",
									"erro"
								],
								answer: 0,
								explain: "Dois numbers somam. 5 + 5 é 10.",
								hint: "Aqui não há aspas, por isso é uma soma."
							},
							{
								kind: "blank",
								prompt: "Guarda o boolean verdadeiro.",
								before: "const ligado = ",
								after: ";",
								options: [
									"true",
									"\"true\"",
									"1",
									"sim"
								],
								answer: 0,
								explain: "O boolean verdadeiro escreve-se true, sem aspas.",
								hint: "É uma palavra em inglês, minúscula, sem aspas."
							}
						]
					}
				]
			},
			{
				id: "js-u2",
				title: "Decisões",
				blurb: "Escolher o caminho com clareza.",
				lessons: [
					{
						id: "js-4",
						title: "Comparar sem confundir",
						steps: [
							{
								kind: "theory",
								title: "Igual não é atribuir",
								body: "= guarda um valor. === compara valor e tipo, sem converter. Dentro de uma condição, queres comparar.",
								example: "const pontos = 10;\nconsole.log(pontos === 10);"
							},
							{
								kind: "choice",
								prompt: "Qual expressão pergunta se pontos é exatamente 10?",
								options: [
									"pontos === 10",
									"pontos = 10",
									"pontos => 10",
									"pontos == = 10"
								],
								answer: 0,
								explain: "=== compara. Um só = atribui, e isso não é uma pergunta.",
								hint: "São três símbolos iguais, seguidos."
							},
							{
								kind: "predict",
								prompt: "O que é escrito?",
								code: "console.log(3 === \"3\");",
								options: [
									"false",
									"true",
									"3",
									"erro"
								],
								answer: 0,
								explain: "3 é number e \"3\" é string. Com ===, tipos diferentes dão false.",
								hint: "Repara nas aspas de um dos lados."
							},
							{
								kind: "type",
								prompt: "Escreve a comparação: idade é maior ou igual a 18.",
								answer: "idade >= 18",
								explain: "idade >= 18 é verdadeiro quando a idade chega aos 18.",
								hint: "O sinal de maior vem antes do igual."
							},
							{
								kind: "blank",
								prompt: "A pessoa ainda tem vidas se o número for positivo.",
								before: "if (vidas ",
								after: " 0) {",
								options: [
									">",
									"<",
									"=",
									"==="
								],
								answer: 0,
								explain: "vidas > 0 significa que ainda há pelo menos uma.",
								hint: "Queres um valor acima de zero."
							}
						]
					},
					{
						id: "js-5",
						title: "Se isto, então aquilo",
						steps: [
							{
								kind: "theory",
								title: "Dois caminhos",
								body: "if corre o bloco quando a condição é verdadeira. else corre quando não é. O bloco vai entre chavetas.",
								example: "if (vidas > 0) {\n  console.log(\"segue\");\n} else {\n  console.log(\"fim\");\n}"
							},
							{
								kind: "choice",
								prompt: "O bloco de código do if fica entre que símbolos?",
								options: [
									"{ }",
									"( )",
									"[ ]",
									"< >"
								],
								answer: 0,
								explain: "As chavetas { } agrupam as linhas do bloco. Os parênteses guardam a condição.",
								hint: "Não são parênteses nem parênteses retos."
							},
							{
								kind: "order",
								prompt: "Monta o if / else.",
								lines: [
									"if (nota >= 10) {",
									"  console.log(\"passou\");",
									"} else {",
									"  console.log(\"recupera\");",
									"}"
								],
								explain: "A condição vem logo a seguir ao if. O else apanha o outro caso, e a chaveta final fecha o bloco.",
								hint: "A condição abre. O else fica no meio. A última linha só fecha."
							},
							{
								kind: "predict",
								prompt: "O que aparece?",
								code: "let n = 3;\nif (n > 5) {\n  console.log(\"alto\");\n} else {\n  console.log(\"baixo\");\n}",
								options: [
									"baixo",
									"alto",
									"3",
									"nada"
								],
								answer: 0,
								explain: "3 não é maior que 5, por isso corre o else e escreve baixo.",
								hint: "A condição é falsa. Qual bloco resta?"
							},
							{
								kind: "blank",
								prompt: "Completa o outro caminho.",
								before: "} ",
								after: " {",
								options: [
									"else",
									"if",
									"elif",
									"otherwise"
								],
								answer: 0,
								explain: "else marca o caminho de reserva. Em JavaScript não se escreve elif.",
								hint: "É a palavra inglesa para \"senão\"."
							}
						]
					},
					{
						id: "js-6",
						title: "E, ou, não",
						steps: [
							{
								kind: "theory",
								title: "Juntar condições",
								body: "&& exige as duas partes verdadeiras. || chega que uma seja. ! inverte: !true é false.",
								example: "const entra = idade >= 18 && temBilhete;"
							},
							{
								kind: "predict",
								prompt: "O que dá esta expressão?",
								code: "console.log(true && false);",
								options: [
									"false",
									"true",
									"null",
									"erro"
								],
								answer: 0,
								explain: "&& só é true se os dois lados forem true. Aqui um é false.",
								hint: "Os dois têm de concordar."
							},
							{
								kind: "predict",
								prompt: "E com || ?",
								code: "console.log(false || true);",
								options: [
									"true",
									"false",
									"undefined",
									"erro"
								],
								answer: 0,
								explain: "|| é true se pelo menos um lado for true.",
								hint: "Basta um dos lados."
							},
							{
								kind: "blank",
								prompt: "As duas condições são obrigatórias.",
								before: "if (idade >= 18 ",
								after: " temBilhete) {",
								options: [
									"&&",
									"||",
									"!",
									"==="
								],
								answer: 0,
								explain: "&& lê-se \"e\". As duas têm de ser verdadeiras.",
								hint: "Não chega uma só. Queres as duas."
							},
							{
								kind: "predict",
								prompt: "O que aparece?",
								code: "const b = false;\nconsole.log(!b);",
								options: [
									"true",
									"false",
									"b",
									"erro"
								],
								answer: 0,
								explain: "! inverte. O contrário de false é true.",
								hint: "O ponto de exclamação nega o valor."
							}
						]
					}
				]
			},
			{
				id: "js-u3",
				title: "Repetir e organizar",
				blurb: "Funções, listas e um ciclo.",
				lessons: [
					{
						id: "js-7",
						title: "Dá um nome aos passos",
						steps: [
							{
								kind: "theory",
								title: "Funções",
								body: "Uma função agrupa passos com um nome. Definis com function e corres com o nome seguido de (). return devolve um valor a quem chamou.",
								example: "function saudar() {\n  console.log(\"olá\");\n}\nsaudar();"
							},
							{
								kind: "order",
								prompt: "Ordena a definição e a chamada.",
								lines: [
									"function saudar() {",
									"  console.log(\"olá\");",
									"}",
									"saudar();"
								],
								explain: "Primeiro declaras a função. A chamada saudar() vem depois, quando já existe.",
								hint: "A chamada com () é a última."
							},
							{
								kind: "choice",
								prompt: "O que faz mesmo correr o corpo da função saudar?",
								options: [
									"saudar()",
									"function saudar",
									"return",
									"log()"
								],
								answer: 0,
								explain: "Os parênteses chamam a função. Sem (), apenas falas do nome.",
								hint: "Precisa dos parênteses."
							},
							{
								kind: "predict",
								prompt: "O que aparece?",
								code: "function soma(a, b) {\n  return a + b;\n}\nconsole.log(soma(2, 3));",
								options: [
									"5",
									"23",
									"a + b",
									"nada"
								],
								answer: 0,
								explain: "soma(2, 3) devolve 5, e o log mostra esse retorno.",
								hint: "return entrega o resultado da soma."
							},
							{
								kind: "type",
								prompt: "Escreve a chamada da função iniciar, sem argumentos.",
								answer: "iniciar()",
								explain: "iniciar() corre a função. Sem parênteses não chega a correr.",
								hint: "Nome e dois parênteses."
							}
						]
					},
					{
						id: "js-8",
						title: "Listas começam no zero",
						steps: [
							{
								kind: "theory",
								title: "Arrays",
								body: "Um array guarda vários valores por ordem, entre parênteses retos. O primeiro índice é 0, não 1. O tamanho está em length.",
								example: "const nums = [10, 20, 30];\nconsole.log(nums[0]);\nconsole.log(nums.length);"
							},
							{
								kind: "predict",
								prompt: "O que aparece?",
								code: "const nums = [10, 20, 30];\nconsole.log(nums[0]);",
								options: [
									"10",
									"20",
									"0",
									"30"
								],
								answer: 0,
								explain: "O índice 0 é o primeiro lugar. Aí está 10.",
								hint: "Conta a partir de zero."
							},
							{
								kind: "choice",
								prompt: "Como lês o número de elementos?",
								options: [
									"nums.length",
									"nums.size",
									"nums.count()",
									"length(nums)"
								],
								answer: 0,
								explain: "Em JavaScript o tamanho do array é a propriedade length.",
								hint: "É uma propriedade, sem parênteses."
							},
							{
								kind: "blank",
								prompt: "Queres o segundo elemento.",
								before: "nums[",
								after: "]",
								options: [
									"1",
									"2",
									"0",
									"-1"
								],
								answer: 0,
								explain: "Índice 0 é o primeiro, índice 1 é o segundo.",
								hint: "Não é 2. A contagem começou no zero."
							},
							{
								kind: "type",
								prompt: "Cria um array chamado letras com os textos a e b.",
								answer: "const letras = [\"a\", \"b\"]",
								accept: [
									"let letras = ['a', 'b']",
									"const letras = ['a', 'b']",
									"let letras = [\"a\", \"b\"]"
								],
								explain: "const letras = [\"a\", \"b\"] cria a lista. let também servia.",
								hint: "Parênteses retos e aspas em cada letra."
							}
						]
					},
					{
						id: "js-9",
						title: "Repete com for",
						steps: [
							{
								kind: "theory",
								title: "Contar voltas",
								body: "O for repete um bloco. O padrão conta i desde 0 enquanto i for menor que o limite, e soma 1 com i++ no fim de cada volta.",
								example: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}"
							},
							{
								kind: "predict",
								prompt: "O que é escrito, por esta ordem?",
								code: "for (let i = 0; i < 3; i++) {\n  console.log(i);\n}",
								options: [
									"0, 1 e 2",
									"1, 2 e 3",
									"só 3",
									"erro"
								],
								answer: 0,
								explain: "i começa em 0 e para antes de 3. Saem 0, 1 e 2.",
								hint: "A condição é i menor que 3, não menor ou igual."
							},
							{
								kind: "choice",
								prompt: "O que faz i++ ?",
								options: [
									"Soma 1 a i",
									"Compara i com 1",
									"Cria a variável i",
									"Apaga i"
								],
								answer: 0,
								explain: "i++ é o atalho de i = i + 1. Acontece no fim de cada volta.",
								hint: "É um aumento, não uma comparação."
							},
							{
								kind: "order",
								prompt: "Monta um ciclo que corre duas vezes.",
								lines: [
									"for (let i = 0; i < 2; i++) {",
									"  console.log(i);",
									"}"
								],
								explain: "A linha do for abre o ciclo, o log fica no meio, a chaveta fecha.",
								hint: "A chaveta que fecha é a última."
							},
							{
								kind: "blank",
								prompt: "O ciclo deve parar antes de 4.",
								before: "for (let i = 0; i ",
								after: " 4; i++) {",
								options: [
									"<",
									">",
									"===",
									"="
								],
								answer: 0,
								explain: "i < 4 deixa passar 0, 1, 2 e 3.",
								hint: "Queres i abaixo do limite."
							}
						]
					}
				]
			}
		]
	},
	{
		id: "py",
		name: "Python",
		tagline: "Do zero ao script",
		units: [{
			id: "py-u1",
			title: "Sintaxe limpa",
			blurb: "Print, nomes e indentação.",
			lessons: [
				{
					id: "py-1",
					title: "O print",
					steps: [
						{
							kind: "theory",
							title: "Mostrar sem ponto e vírgula",
							body: "Em Python, print mostra um valor. Não precisas de ; no fim da linha. O texto continua a precisar de aspas.",
							example: "print(\"Olá\")"
						},
						{
							kind: "choice",
							prompt: "Qual instrução existe em Python?",
							options: [
								"print(\"Olá\")",
								"console.log(\"Olá\")",
								"Console.WriteLine(\"Olá\")",
								"echo Olá"
							],
							answer: 0,
							explain: "Python usa print. console.log é JavaScript.",
							hint: "É a palavra print."
						},
						{
							kind: "type",
							prompt: "Mostra a palavra Sharp.",
							answer: "print(\"Sharp\")",
							accept: ["print('Sharp')"],
							semi: "strip",
							explain: "print(\"Sharp\") escreve Sharp.",
							hint: "print, parênteses e aspas."
						},
						{
							kind: "predict",
							prompt: "O que acontece?",
							code: "print(\"A\")\nprint(\"B\")",
							options: [
								"A e depois B",
								"B e depois A",
								"só A",
								"AB na mesma linha"
							],
							answer: 0,
							explain: "Cada print salta de linha. Primeiro A, depois B.",
							hint: "As linhas correm de cima para baixo."
						},
						{
							kind: "blank",
							prompt: "Completa a chamada.",
							before: "print(",
							after: ")",
							options: [
								"\"ok\"",
								"ok",
								"log",
								"True"
							],
							answer: 0,
							explain: "O texto \"ok\" leva aspas. ok sozinho seria um nome.",
							hint: "É texto, não um boolean."
						}
					]
				},
				{
					id: "py-2",
					title: "Nomes e blocos",
					steps: [
						{
							kind: "theory",
							title: "Indentação em vez de chavetas",
							body: "Atribuis com =. Um bloco, como o de um if, marca-se com espaços no início da linha. O habitual são 4 espaços. Não uses chavetas para isso.",
							example: "cidade = \"Porto\"\nif cidade == \"Porto\":\n    print(cidade)"
						},
						{
							kind: "choice",
							prompt: "Como se marca um bloco em Python?",
							options: [
								"Com indentação",
								"Com { }",
								"Com begin e end",
								"Com parênteses à volta das linhas"
							],
							answer: 0,
							explain: "Python usa indentação. Chavetas aqui não abrem um bloco.",
							hint: "É o espaço no início da linha."
						},
						{
							kind: "type",
							prompt: "Guarda o texto Porto no nome cidade.",
							answer: "cidade = \"Porto\"",
							accept: ["cidade = 'Porto'"],
							explain: "cidade = \"Porto\" atribui o texto.",
							hint: "Nome, igual, texto entre aspas."
						},
						{
							kind: "predict",
							prompt: "O que aparece?",
							code: "x = 1\nx = x + 2\nprint(x)",
							options: [
								"3",
								"1",
								"12",
								"x"
							],
							answer: 0,
							explain: "x passa de 1 para 3. O print mostra 3.",
							hint: "A segunda linha substitui o valor."
						},
						{
							kind: "blank",
							prompt: "A comparação de igualdade em Python usa dois sinais.",
							before: "if cidade ",
							after: " \"Porto\":",
							options: [
								"==",
								"=",
								"===",
								"!="
							],
							answer: 0,
							explain: "Em Python comparas com ==. Um só = atribui.",
							hint: "Não são três sinais, como no JavaScript."
						}
					]
				},
				{
					id: "py-3",
					title: "True com letra grande",
					steps: [
						{
							kind: "theory",
							title: "Tipos à maneira do Python",
							body: "Números inteiros não levam aspas. Texto leva. O boolean verdadeiro é True, com T maiúsculo. O falso é False.",
							example: "idade = 20\nnome = \"Ana\"\nativo = True"
						},
						{
							kind: "choice",
							prompt: "Como se escreve o boolean verdadeiro?",
							options: [
								"True",
								"true",
								"TRUE",
								"yes"
							],
							answer: 0,
							explain: "Python exige True e False com a primeira letra maiúscula.",
							hint: "Não é tudo minúsculo, como no JavaScript."
						},
						{
							kind: "predict",
							prompt: "O que aparece?",
							code: "print(\"2\" + \"2\")",
							options: [
								"22",
								"4",
								"erro",
								"True"
							],
							answer: 0,
							explain: "Texto com + é colado. O resultado é 22.",
							hint: "Há aspas, por isso não é uma soma."
						},
						{
							kind: "predict",
							prompt: "E esta?",
							code: "print(2 + 2)",
							options: [
								"4",
								"22",
								"erro",
								"False"
							],
							answer: 0,
							explain: "Sem aspas, 2 + 2 é a soma 4.",
							hint: "São números a sério."
						},
						{
							kind: "blank",
							prompt: "Marca a variável como verdadeira.",
							before: "ativo = ",
							after: "",
							options: [
								"True",
								"true",
								"1",
								"\"sim\""
							],
							answer: 0,
							explain: "O boolean verdadeiro em Python é True.",
							hint: "Letra grande no início."
						}
					]
				}
			]
		}, {
			id: "py-u2",
			title: "Controlo",
			blurb: "Decisões, listas e funções.",
			lessons: [
				{
					id: "py-4",
					title: "If com dois pontos",
					steps: [
						{
							kind: "theory",
							title: "A condição acaba em :",
							body: "A linha do if termina com dois pontos. A linha seguinte vai indentada. else: também termina com dois pontos.",
							example: "idade = 20\nif idade >= 18:\n    print(\"adulto\")\nelse:\n    print(\"menor\")"
						},
						{
							kind: "choice",
							prompt: "O que falta no fim da linha do if?",
							options: [
								":",
								";",
								"{",
								"then"
							],
							answer: 0,
							explain: "Em Python a linha do if acaba com :. Não uses then nem chaveta.",
							hint: "É um sinal de pontuação, não uma palavra."
						},
						{
							kind: "order",
							prompt: "Monta a decisão.",
							lines: [
								"if idade >= 18:",
								"    print(\"adulto\")",
								"else:",
								"    print(\"menor\")"
							],
							explain: "O if abre, o print indentado fica dentro, o else abre o outro caminho.",
							hint: "As linhas indentadas nunca vêm antes da linha com :."
						},
						{
							kind: "predict",
							prompt: "O que aparece?",
							code: "nota = 8\nif nota >= 10:\n    print(\"passou\")\nelse:\n    print(\"recupera\")",
							options: [
								"recupera",
								"passou",
								"8",
								"nada"
							],
							answer: 0,
							explain: "8 não chega a 10, por isso corre o else e escreve recupera.",
							hint: "A condição é falsa."
						},
						{
							kind: "type",
							prompt: "Escreve só a linha do if: a nota passou se for maior ou igual a 10. Inclui os dois pontos.",
							answer: "if nota >= 10:",
							semi: "keep",
							explain: "if nota >= 10: abre o bloco. Os dois pontos fazem parte da linha.",
							hint: "if, a comparação, e : no fim."
						}
					]
				},
				{
					id: "py-5",
					title: "Listas e for",
					steps: [
						{
							kind: "theory",
							title: "Percorrer uma lista",
							body: "Uma lista usa parênteses retos. for item in lista: visita cada elemento. O corpo fica indentado.",
							example: "nums = [1, 2]\nfor n in nums:\n    print(n)"
						},
						{
							kind: "predict",
							prompt: "O que é escrito?",
							code: "nums = [1, 2]\nfor n in nums:\n    print(n)",
							options: [
								"1 e depois 2",
								"só 2",
								"[1, 2]",
								"0 e 1"
							],
							answer: 0,
							explain: "O for entrega cada valor, não o índice. Primeiro 1, depois 2.",
							hint: "n recebe o valor, não a posição."
						},
						{
							kind: "choice",
							prompt: "Qual é o primeiro elemento de nums = [10, 20]?",
							options: [
								"nums[0]",
								"nums[1]",
								"nums(0)",
								"nums.first"
							],
							answer: 0,
							explain: "Tal como em JavaScript, o índice 0 é o primeiro. Os parênteses retos leem a posição.",
							hint: "A contagem começa no zero e usa [ ]."
						},
						{
							kind: "blank",
							prompt: "Completa o ciclo.",
							before: "for n ",
							after: " nums:",
							options: [
								"in",
								"of",
								":",
								"="
							],
							answer: 0,
							explain: "Python diz for n in nums. of é JavaScript.",
							hint: "É a palavra in."
						},
						{
							kind: "type",
							prompt: "Cria a lista cores com os textos azul e ouro.",
							answer: "cores = [\"azul\", \"ouro\"]",
							accept: ["cores = ['azul', 'ouro']"],
							explain: "cores = [\"azul\", \"ouro\"] cria a lista.",
							hint: "Parênteses retos, dois textos."
						}
					]
				},
				{
					id: "py-6",
					title: "def e return",
					steps: [
						{
							kind: "theory",
							title: "Definir uma função",
							body: "def nome(): começa a função e acaba com :. return devolve um valor e sai da função. A chamada usa o nome com parênteses.",
							example: "def dobra(n):\n    return n * 2\n\nprint(dobra(4))"
						},
						{
							kind: "predict",
							prompt: "O que aparece?",
							code: "def dobra(n):\n    return n * 2\n\nprint(dobra(4))",
							options: [
								"8",
								"4",
								"n * 2",
								"erro"
							],
							answer: 0,
							explain: "dobra(4) devolve 8. O print mostra esse 8.",
							hint: "4 vezes 2."
						},
						{
							kind: "choice",
							prompt: "Qual palavra devolve o resultado?",
							options: [
								"return",
								"back",
								"give",
								"print"
							],
							answer: 0,
							explain: "return entrega o valor a quem chamou. print só mostra.",
							hint: "Não é o print."
						},
						{
							kind: "order",
							prompt: "Monta a função e a chamada.",
							lines: [
								"def dobra(n):",
								"    return n * 2",
								"print(dobra(4))"
							],
							explain: "def abre, return fica indentado, e a chamada vem quando a função já existe.",
							hint: "print não pode ser a primeira linha."
						},
						{
							kind: "type",
							prompt: "Escreve a primeira linha de uma função chamada ola, sem parâmetros. Inclui os dois pontos.",
							answer: "def ola():",
							semi: "keep",
							explain: "def ola(): começa a função. Falta depois o corpo indentado.",
							hint: "def, o nome, parênteses vazios e :."
						}
					]
				}
			]
		}]
	},
	{
		id: "cs",
		name: "C#",
		tagline: "Sharp de verdade",
		units: [{
			id: "cs-u1",
			title: "Arranque",
			blurb: "A consola e os tipos.",
			lessons: [
				{
					id: "cs-1",
					title: "WriteLine",
					steps: [
						{
							kind: "theory",
							title: "Cada instrução acaba em ;",
							body: "Em C#, Console.WriteLine escreve uma linha. As instruções terminam com ponto e vírgula. O texto usa aspas duplas.",
							example: "Console.WriteLine(\"Sharp\");"
						},
						{
							kind: "choice",
							prompt: "O que escreve uma linha na consola em C#?",
							options: [
								"Console.WriteLine",
								"print",
								"console.log",
								"echo"
							],
							answer: 0,
							explain: "C# usa Console.WriteLine. Repara nas maiúsculas.",
							hint: "Começa por Console, com C grande."
						},
						{
							kind: "type",
							prompt: "Escreve a instrução que mostra oi. Inclui o ponto e vírgula.",
							answer: "Console.WriteLine(\"oi\");",
							semi: "keep",
							explain: "Console.WriteLine(\"oi\"); inclui o ; no fim.",
							hint: "Console.WriteLine, aspas duplas, e ; no fim."
						},
						{
							kind: "blank",
							prompt: "Mostra o texto XP.",
							before: "Console.WriteLine(",
							after: ");",
							options: [
								"\"XP\"",
								"XP",
								"print",
								"'XP'"
							],
							answer: 0,
							explain: "Em C# o texto usa aspas duplas. Aspas simples são para um carácter.",
							hint: "Aspas duplas."
						},
						{
							kind: "predict",
							prompt: "O que aparece?",
							code: "Console.WriteLine(\"A\");\nConsole.WriteLine(\"B\");",
							options: [
								"A e depois B",
								"B e depois A",
								"AB",
								"erro de sintaxe"
							],
							answer: 0,
							explain: "Cada WriteLine escreve e muda de linha. Primeiro A, depois B.",
							hint: "A ordem do ficheiro é a ordem da consola."
						}
					]
				},
				{
					id: "cs-2",
					title: "int, string, bool",
					steps: [
						{
							kind: "theory",
							title: "Dizer o tipo",
							body: "int é um inteiro, string é texto, bool é true ou false. var deixa o compilador descobrir o tipo a partir do valor.",
							example: "int vidas = 5;\nstring nome = \"Ana\";\nbool ativo = true;"
						},
						{
							kind: "choice",
							prompt: "Qual é o tipo do texto?",
							options: [
								"string",
								"int",
								"bool",
								"float"
							],
							answer: 0,
							explain: "string guarda texto. int guarda inteiros.",
							hint: "Não é o tipo dos números."
						},
						{
							kind: "predict",
							prompt: "O que aparece?",
							code: "int x = 2;\nx = x + 1;\nConsole.WriteLine(x);",
							options: [
								"3",
								"2",
								"x",
								"21"
							],
							answer: 0,
							explain: "x passa de 2 para 3. WriteLine mostra 3.",
							hint: "A soma acontece antes do WriteLine."
						},
						{
							kind: "blank",
							prompt: "Um bool verdadeiro em C# é minúsculo.",
							before: "bool ok = ",
							after: ";",
							options: [
								"true",
								"True",
								"1",
								"\"true\""
							],
							answer: 0,
							explain: "Em C# escreve-se true e false em minúsculas, ao contrário do Python.",
							hint: "Não é como no Python."
						},
						{
							kind: "choice",
							prompt: "var n = 10; que tipo é inferido?",
							options: [
								"int",
								"string",
								"bool",
								"var"
							],
							answer: 0,
							explain: "10 é um inteiro, por isso n fica int. var não é o tipo final.",
							hint: "Olha para o valor, não para a palavra var."
						}
					]
				},
				{
					id: "cs-3",
					title: "If com chavetas",
					steps: [
						{
							kind: "theory",
							title: "Condição e bloco",
							body: "A condição do if vai entre parênteses. O bloco vai entre chavetas. Comparar igualdade é ==, nunca um só =.",
							example: "if (vidas > 0)\n{\n    Console.WriteLine(\"segue\");\n}"
						},
						{
							kind: "choice",
							prompt: "Qual linha compara vidas com zero?",
							options: [
								"if (vidas == 0)",
								"if (vidas = 0)",
								"if vidas == 0",
								"if (vidas := 0)"
							],
							answer: 0,
							explain: "== compara. Um só = atribuiria 0 e nem é uma condição válida aqui.",
							hint: "Dois sinais de igual, e parênteses à volta."
						},
						{
							kind: "order",
							prompt: "Monta o if.",
							lines: [
								"if (vidas > 0)",
								"{",
								"    Console.WriteLine(\"segue\");",
								"}"
							],
							explain: "A condição vem primeiro, depois as chavetas, com a instrução no meio.",
							hint: "A chaveta que fecha é a última."
						},
						{
							kind: "predict",
							prompt: "O que aparece?",
							code: "int n = 3;\nif (n > 5)\n{\n    Console.WriteLine(\"alto\");\n}\nelse\n{\n    Console.WriteLine(\"baixo\");\n}",
							options: [
								"baixo",
								"alto",
								"3",
								"nada"
							],
							answer: 0,
							explain: "3 não é maior que 5, por isso corre o else e escreve baixo.",
							hint: "A condição falha."
						},
						{
							kind: "blank",
							prompt: "Completa a comparação de maior.",
							before: "if (nota ",
							after: " 10)",
							options: [
								">=",
								"=>",
								"=",
								"=="
							],
							answer: 0,
							explain: ">= significa maior ou igual. A ordem dos símbolos importa.",
							hint: "O maior vem antes do igual."
						}
					]
				}
			]
		}, {
			id: "cs-u2",
			title: "Estrutura",
			blurb: "Ciclos, métodos e uma classe.",
			lessons: [
				{
					id: "cs-4",
					title: "O ciclo for",
					steps: [
						{
							kind: "theory",
							title: "Três partes no for",
							body: "for (início; condição; passo) repete o bloco. int i = 0 cria o contador, i < 3 deixa continuar, i++ avança.",
							example: "for (int i = 0; i < 3; i++)\n{\n    Console.WriteLine(i);\n}"
						},
						{
							kind: "predict",
							prompt: "O que é escrito?",
							code: "for (int i = 0; i < 3; i++)\n{\n    Console.WriteLine(i);\n}",
							options: [
								"0, 1 e 2",
								"1, 2 e 3",
								"só 3",
								"erro"
							],
							answer: 0,
							explain: "O contador começa em 0 e para antes de 3.",
							hint: "Menor que 3, a começar em 0."
						},
						{
							kind: "blank",
							prompt: "Queres exatamente três voltas, a começar em 0.",
							before: "for (int i = 0; i < ",
							after: "; i++)",
							options: [
								"3",
								"2",
								"4",
								"0"
							],
							answer: 0,
							explain: "i < 3 deixa correr i = 0, 1 e 2. São três voltas.",
							hint: "O limite não é o último índice."
						},
						{
							kind: "choice",
							prompt: "Onde se declara o contador deste for?",
							options: [
								"Na primeira parte, dentro dos parênteses",
								"Depois da chaveta",
								"No WriteLine",
								"Não se declara"
							],
							answer: 0,
							explain: "int i = 0 é a primeira das três partes do for.",
							hint: "Está antes do primeiro ponto e vírgula."
						},
						{
							kind: "type",
							prompt: "Escreve só a linha de abertura: um for com i de 0 enquanto i for menor que 2, a somar 1. Sem chaveta.",
							answer: "for (int i = 0; i < 2; i++)",
							semi: "strip",
							explain: "for (int i = 0; i < 2; i++) abre o ciclo. A chaveta viria na linha seguinte.",
							hint: "Três partes separadas por ; dentro de parênteses."
						}
					]
				},
				{
					id: "cs-5",
					title: "Métodos",
					steps: [
						{
							kind: "theory",
							title: "Um método devolve",
							body: "Um método é uma função dentro de uma classe. static pode ser chamado sem criares um objeto. O tipo antes do nome é o que o método devolve. return envia esse valor.",
							example: "static int Dobro(int n)\n{\n    return n * 2;\n}"
						},
						{
							kind: "predict",
							prompt: "O que aparece se chamares o método assim?",
							code: "static int Dobro(int n)\n{\n    return n * 2;\n}\n\nConsole.WriteLine(Dobro(5));",
							options: [
								"10",
								"5",
								"25",
								"erro"
							],
							answer: 0,
							explain: "Dobro(5) devolve 10. WriteLine mostra 10.",
							hint: "O return multiplica por 2."
						},
						{
							kind: "choice",
							prompt: "O que significa o int antes de Dobro?",
							options: [
								"O método devolve um int",
								"O método recebe dois ints",
								"O método é privado",
								"O método escreve na consola"
							],
							answer: 0,
							explain: "O tipo à esquerda do nome é o tipo de retorno. O parâmetro é o int n dentro dos parênteses.",
							hint: "Está fora dos parênteses."
						},
						{
							kind: "type",
							prompt: "Escreve a linha que devolve o dobro de n. Inclui o ponto e vírgula.",
							answer: "return n * 2;",
							semi: "keep",
							explain: "return n * 2; sai do método com o resultado.",
							hint: "Começa por return e acaba em ;."
						},
						{
							kind: "blank",
							prompt: "O método não devolve nada.",
							before: "static ",
							after: " Avisar() {",
							options: [
								"void",
								"int",
								"string",
								"null"
							],
							answer: 0,
							explain: "void significa \"sem valor de retorno\".",
							hint: "É a palavra void."
						}
					]
				},
				{
					id: "cs-6",
					title: "A primeira classe",
					steps: [
						{
							kind: "theory",
							title: "Um tipo novo",
							body: "class descreve um tipo. Uma propriedade com get e set pode ser lida e alterada. new cria um objeto desse tipo.",
							example: "class Aluno\n{\n    public string Nome { get; set; }\n}\n\nvar a = new Aluno();"
						},
						{
							kind: "choice",
							prompt: "Qual palavra declara um tipo novo?",
							options: [
								"class",
								"def",
								"function",
								"let"
							],
							answer: 0,
							explain: "class abre a definição de um tipo. def é Python, let é JavaScript.",
							hint: "É a palavra class."
						},
						{
							kind: "blank",
							prompt: "A propriedade também pode ser escrita.",
							before: "public string Nome { get; ",
							after: "; }",
							options: [
								"set",
								"let",
								"put",
								"write"
							],
							answer: 0,
							explain: "get lê, set escreve. Os dois juntos tornam a propriedade alterável.",
							hint: "Faz par com get."
						},
						{
							kind: "choice",
							prompt: "Como se cria um objeto Aluno?",
							options: [
								"new Aluno()",
								"Aluno.new()",
								"create Aluno",
								"Aluno {}"
							],
							answer: 0,
							explain: "new Aluno() pede memória e corre o construtor.",
							hint: "A palavra new vem primeiro."
						},
						{
							kind: "order",
							prompt: "Monta a classe mínima.",
							lines: [
								"class Aluno",
								"{",
								"    public string Nome { get; set; }",
								"}"
							],
							explain: "class e o nome abrem, as chavetas envolvem a propriedade.",
							hint: "A propriedade fica no meio das chavetas."
						}
					]
				}
			]
		}]
	},
	{
		id: "web",
		name: "HTML e CSS",
		tagline: "Páginas com presença",
		units: [{
			id: "web-u1",
			title: "A página",
			blurb: "Etiquetas, ligações e imagens.",
			lessons: [{
				id: "web-1",
				title: "Etiquetas",
				steps: [
					{
						kind: "theory",
						title: "Abrir e fechar",
						body: "HTML marca o conteúdo com etiquetas. A maior parte abre e fecha: <p> começa o parágrafo e </p> acaba. h1 é o título de maior nível.",
						example: "<h1>SharpTech</h1>\n<p>Aprende em lições curtas.</p>"
					},
					{
						kind: "choice",
						prompt: "Qual etiqueta é um parágrafo?",
						options: [
							"<p>",
							"<para>",
							"<text>",
							"<h>"
						],
						answer: 0,
						explain: "<p> é o parágrafo. Não existe <para> no HTML.",
						hint: "É uma só letra."
					},
					{
						kind: "blank",
						prompt: "Fecha o título.",
						before: "<h1>Sharp",
						after: "",
						options: [
							"</h1>",
							"</h2>",
							"<h1>",
							"</p>"
						],
						answer: 0,
						explain: "A etiqueta de fecho repete o nome e acrescenta /. </h1> fecha o h1.",
						hint: "O nome tem de ser o mesmo, com uma barra."
					},
					{
						kind: "type",
						prompt: "Escreve um parágrafo cujo texto seja olá.",
						answer: "<p>olá</p>",
						semi: "keep",
						explain: "<p>olá</p> abre e fecha o parágrafo.",
						hint: "Abre com <p> e fecha com </p>."
					},
					{
						kind: "choice",
						prompt: "Qual é o título de maior importância?",
						options: [
							"h1",
							"h6",
							"p",
							"title"
						],
						answer: 0,
						explain: "h1 é o nível mais alto. h6 é o mais pequeno dos títulos.",
						hint: "O número menor pesa mais."
					}
				]
			}, {
				id: "web-2",
				title: "Ligações e imagens",
				steps: [
					{
						kind: "theory",
						title: "href e alt",
						body: "A etiqueta a com href é uma ligação. A etiqueta img não fecha: traz src para o ficheiro e alt para o texto alternativo.",
						example: "<a href=\"https://exemplo.pt\">Entrar</a>\n<img src=\"bolt.png\" alt=\"Raio\">"
					},
					{
						kind: "choice",
						prompt: "Qual atributo guarda o destino da ligação?",
						options: [
							"href",
							"src",
							"alt",
							"link"
						],
						answer: 0,
						explain: "href é o endereço. src é da imagem.",
						hint: "Não é o da imagem."
					},
					{
						kind: "blank",
						prompt: "A imagem precisa de texto alternativo.",
						before: "<img src=\"bolt.png\" ",
						after: "=\"Raio\">",
						options: [
							"alt",
							"href",
							"title",
							"text"
						],
						answer: 0,
						explain: "alt descreve a imagem quando ela não carrega, e ajuda quem usa leitor de ecrã.",
						hint: "É uma palavra de três letras, não é href."
					},
					{
						kind: "choice",
						prompt: "A etiqueta img precisa de </img>?",
						options: [
							"Não. img é uma etiqueta vazia",
							"Sim, sempre",
							"Só quando tem alt",
							"Só dentro de CSS"
						],
						answer: 0,
						explain: "img não tem conteúdo no meio, por isso não fecha com </img>.",
						hint: "Não há texto entre abrir e fechar."
					},
					{
						kind: "type",
						prompt: "Escreve uma ligação com href https://sharp.dev e o texto Entrar.",
						answer: "<a href=\"https://sharp.dev\">Entrar</a>",
						semi: "keep",
						explain: "O href fica na etiqueta de abertura. O texto fica no meio. </a> fecha.",
						hint: "a, href, texto, </a>."
					}
				]
			}]
		}, {
			id: "web-u2",
			title: "O aspeto",
			blurb: "Cor, classes e flex.",
			lessons: [{
				id: "web-3",
				title: "Cor com CSS",
				steps: [
					{
						kind: "theory",
						title: "Um seletor e uma declaração",
						body: "CSS muda o aspeto. Um seletor de etiqueta aponta a todos esses elementos. color muda a cor do texto. Cada declaração acaba em ;.",
						example: "p {\n  color: #1860f8;\n}"
					},
					{
						kind: "choice",
						prompt: "Qual propriedade muda a cor do texto?",
						options: [
							"color",
							"font-color",
							"text",
							"background"
						],
						answer: 0,
						explain: "A propriedade certa é color. background pinta o fundo.",
						hint: "É uma palavra só, em inglês."
					},
					{
						kind: "blank",
						prompt: "Pinta o texto de azul Sharp.",
						before: "color: ",
						after: ";",
						options: [
							"#1860f8",
							"blue()",
							"paint",
							"font"
						],
						answer: 0,
						explain: "Um código hexadecimal como #1860f8 é uma cor válida.",
						hint: "Começa por #."
					},
					{
						kind: "type",
						prompt: "Escreve a declaração que pinta o texto de blue. Inclui o ponto e vírgula.",
						answer: "color: blue;",
						semi: "keep",
						explain: "color: blue; é uma declaração completa.",
						hint: "color, dois pontos, blue, ponto e vírgula."
					},
					{
						kind: "order",
						prompt: "Monta a regra que pinta os parágrafos.",
						lines: [
							"p {",
							"  color: #1860f8;",
							"}"
						],
						explain: "O seletor abre a chaveta, a declaração fica no meio, a chaveta fecha.",
						hint: "p { é a primeira linha."
					}
				]
			}, {
				id: "web-4",
				title: "Classes e flex",
				steps: [
					{
						kind: "theory",
						title: "Um nome reutilizável",
						body: "No CSS, uma classe começa com ponto: .card. No HTML, o mesmo nome vai no atributo class, sem ponto. display: flex põe os filhos lado a lado, na direção principal.",
						example: ".card {\n  display: flex;\n}\n\n<div class=\"card\">"
					},
					{
						kind: "choice",
						prompt: "Qual seletor aponta à classe card?",
						options: [
							".card",
							"#card",
							"card",
							"*card"
						],
						answer: 0,
						explain: "O ponto marca uma classe. # seria um id.",
						hint: "Há um ponto antes do nome."
					},
					{
						kind: "blank",
						prompt: "Liga o elemento à classe card.",
						before: "<div class=\"",
						after: "\">",
						options: [
							"card",
							".card",
							"#card",
							"flex"
						],
						answer: 0,
						explain: "No HTML escreves card, sem o ponto. O ponto fica só no CSS.",
						hint: "Sem pontuação extra."
					},
					{
						kind: "choice",
						prompt: "display: flex, por omissão, coloca os filhos como?",
						options: [
							"Lado a lado, na linha",
							"Obrigatoriamente em coluna",
							"Invisíveis",
							"Numa grelha de 12 colunas"
						],
						answer: 0,
						explain: "O eixo principal do flex começa na horizontal. Coluna pede flex-direction: column.",
						hint: "Não é grelha. Grelha seria grid."
					},
					{
						kind: "type",
						prompt: "Escreve a declaração que ativa o flex. Inclui o ponto e vírgula.",
						answer: "display: flex;",
						semi: "keep",
						explain: "display: flex; muda o modo de disposição do elemento.",
						hint: "display, dois pontos, flex."
					}
				]
			}]
		}]
	},
	{
		id: "sql",
		name: "SQL",
		tagline: "Perguntar aos dados",
		units: [{
			id: "sql-u1",
			title: "Perguntar",
			blurb: "Escolher colunas e filtrar linhas.",
			lessons: [{
				id: "sql-1",
				title: "Select e from",
				steps: [
					{
						kind: "theory",
						title: "O que, e de onde",
						body: "SELECT escolhe colunas. FROM diz a tabela. O asterisco * significa todas as colunas. O ponto e vírgula fecha a instrução.",
						example: "SELECT nome\nFROM alunos;"
					},
					{
						kind: "order",
						prompt: "Monta a consulta.",
						lines: ["SELECT nome", "FROM alunos;"],
						explain: "SELECT vem primeiro, FROM diz de que tabela saem as linhas.",
						hint: "A tabela vem depois."
					},
					{
						kind: "choice",
						prompt: "O que significa * numa lista de colunas?",
						options: [
							"Todas as colunas",
							"A primeira coluna",
							"Zero linhas",
							"Uma coluna chamada asterisco"
						],
						answer: 0,
						explain: "SELECT * pede todas as colunas da tabela.",
						hint: "É um atalho, não um nome."
					},
					{
						kind: "blank",
						prompt: "Indica a tabela.",
						before: "SELECT nome ",
						after: " alunos;",
						options: [
							"FROM",
							"WHERE",
							"TABLE",
							"INTO"
						],
						answer: 0,
						explain: "FROM apresenta a tabela. WHERE viria depois, para filtrar.",
						hint: "É a segunda palavra de quase todas as consultas."
					},
					{
						kind: "type",
						prompt: "Escreve a consulta de todas as colunas da tabela cursos. Inclui o ponto e vírgula.",
						answer: "SELECT * FROM cursos;",
						semi: "keep",
						explain: "SELECT * FROM cursos; lê a tabela inteira, em colunas.",
						hint: "SELECT, asterisco, FROM, o nome da tabela."
					}
				]
			}, {
				id: "sql-2",
				title: "Filtrar com where",
				steps: [
					{
						kind: "theory",
						title: "Só algumas linhas",
						body: "WHERE filtra linhas depois do FROM. Texto compara-se com aspas simples. Números não levam aspas.",
						example: "SELECT nome\nFROM alunos\nWHERE idade >= 18;"
					},
					{
						kind: "choice",
						prompt: "Qual cláusula filtra linhas?",
						options: [
							"WHERE",
							"FROM",
							"ORDER",
							"SELECT"
						],
						answer: 0,
						explain: "WHERE fica depois do FROM e decide que linhas passam.",
						hint: "Não é a que escolhe colunas."
					},
					{
						kind: "predict",
						prompt: "A tabela alunos tem Ana com 20 anos e Rui com 16. Quem devolve esta consulta?",
						code: "SELECT nome\nFROM alunos\nWHERE idade >= 18;",
						options: [
							"Ana",
							"Rui",
							"Ana e Rui",
							"ninguém"
						],
						answer: 0,
						explain: "Só Ana tem idade maior ou igual a 18. Rui fica de fora.",
						hint: "Compara cada idade com 18."
					},
					{
						kind: "blank",
						prompt: "O texto em SQL usa aspas simples.",
						before: "WHERE cidade = ",
						after: ";",
						options: [
							"'Lisboa'",
							"\"Lisboa\"",
							"Lisboa",
							"= Lisboa"
						],
						answer: 0,
						explain: "Aspas simples marcam texto em SQL. Sem aspas, Lisboa seria lido como um nome de coluna.",
						hint: "Não são aspas duplas."
					},
					{
						kind: "type",
						prompt: "Filtra a tabela alunos pela cidade Porto. Escreve a cláusula completa, com WHERE e ponto e vírgula.",
						answer: "WHERE cidade = 'Porto';",
						accept: ["WHERE cidade='Porto';"],
						semi: "keep",
						explain: "WHERE cidade = 'Porto'; fica a seguir ao FROM.",
						hint: "WHERE, a coluna, igual, texto com aspas simples."
					}
				]
			}]
		}, {
			id: "sql-u2",
			title: "Combinar",
			blurb: "Ordenar, contar e juntar.",
			lessons: [{
				id: "sql-3",
				title: "Ordem e contagem",
				steps: [
					{
						kind: "theory",
						title: "Arrumar e contar",
						body: "ORDER BY ordena o resultado. ASC vai do menor para o maior, DESC ao contrário. COUNT(*) conta linhas.",
						example: "SELECT COUNT(*)\nFROM alunos;"
					},
					{
						kind: "choice",
						prompt: "Qual expressão conta as linhas?",
						options: [
							"COUNT(*)",
							"SUM(*)",
							"LEN(*)",
							"TOTAL()"
						],
						answer: 0,
						explain: "COUNT(*) conta linhas. SUM soma uma coluna numérica.",
						hint: "O nome começa por COUNT."
					},
					{
						kind: "choice",
						prompt: "Queres os pontos do maior para o menor.",
						options: [
							"ORDER BY xp DESC",
							"ORDER BY xp ASC",
							"SORT xp",
							"GROUP BY xp"
						],
						answer: 0,
						explain: "DESC é descendente. ASC seria do mais pequeno para o maior.",
						hint: "DESC vem de descendente."
					},
					{
						kind: "blank",
						prompt: "Ordem alfabética, de A para Z.",
						before: "ORDER BY nome ",
						after: ";",
						options: [
							"ASC",
							"DESC",
							"AZ",
							"UP"
						],
						answer: 0,
						explain: "ASC ordena de forma ascendente. Em texto, isso é de A para Z.",
						hint: "Não é a ordem ao contrário."
					},
					{
						kind: "predict",
						prompt: "A tabela tem 3 alunos. O que devolve a consulta?",
						code: "SELECT COUNT(*)\nFROM alunos;",
						options: [
							"3",
							"alunos",
							"0",
							"erro"
						],
						answer: 0,
						explain: "COUNT(*) devolve o número de linhas: 3.",
						hint: "Não devolve os nomes. Devolve uma conta."
					}
				]
			}, {
				id: "sql-4",
				title: "Juntar tabelas",
				steps: [
					{
						kind: "theory",
						title: "JOIN casa linhas",
						body: "JOIN junta duas tabelas. ON diz qual é a chave em comum. Um JOIN interior só devolve pares que casam.",
						example: "SELECT alunos.nome, cursos.titulo\nFROM alunos\nJOIN cursos ON alunos.curso_id = cursos.id;"
					},
					{
						kind: "choice",
						prompt: "Qual palavra junta duas tabelas?",
						options: [
							"JOIN",
							"MERGE",
							"LINK",
							"UNION ALL só"
						],
						answer: 0,
						explain: "JOIN combina linhas relacionadas. UNION empilha resultados, não casa chaves.",
						hint: "É JOIN."
					},
					{
						kind: "blank",
						prompt: "Diz como as linhas casam.",
						before: "JOIN cursos ",
						after: " alunos.curso_id = cursos.id",
						options: [
							"ON",
							"WHERE",
							"WITH",
							"AT"
						],
						answer: 0,
						explain: "ON guarda a condição do casamento. WHERE filtra depois.",
						hint: "São duas letras."
					},
					{
						kind: "choice",
						prompt: "Num JOIN interior, o que acontece a uma linha sem par?",
						options: [
							"Não aparece no resultado",
							"Aparece sempre, com vazios",
							"Apaga a linha da tabela",
							"Duplica a tabela inteira"
						],
						answer: 0,
						explain: "O JOIN interior exige par. Sem correspondência, a linha fica de fora. LEFT JOIN é que preserva um dos lados.",
						hint: "Interior significa que os dois lados têm de existir."
					},
					{
						kind: "order",
						prompt: "Monta a consulta com JOIN.",
						lines: [
							"SELECT alunos.nome",
							"FROM alunos",
							"JOIN cursos ON alunos.curso_id = cursos.id;"
						],
						explain: "SELECT escolhe, FROM parte da primeira tabela, JOIN traz a segunda com a condição.",
						hint: "FROM vem antes do JOIN."
					}
				]
			}]
		}]
	}
];
for (const course of courses) course.units.push(...capstoneUnits[course.id]);
function getCourses() {
	return courses;
}
function getCourse(id) {
	return courses.find((course) => course.id === id) ?? null;
}
function courseLessons(course) {
	return course.units.flatMap((unit) => unit.lessons);
}
function findLesson(lessonId) {
	for (const course of courses) for (const unit of course.units) {
		const lesson = unit.lessons.find((item) => item.id === lessonId);
		if (lesson) return {
			course,
			unit,
			lesson
		};
	}
	return null;
}
function isUnlocked(course, lessonId, completed) {
	const list = courseLessons(course);
	const index = list.findIndex((lesson) => lesson.id === lessonId);
	if (index < 0) return false;
	if (index === 0) return true;
	return Boolean(completed[list[index - 1].id]);
}
function currentLesson(course, completed) {
	return courseLessons(course).find((lesson) => !completed[lesson.id]) ?? null;
}
function lessonDrills(courseId, lesson) {
	return lesson.steps.map((step, index) => ({
		key: `${lesson.id}#${index}`,
		lessonId: lesson.id,
		courseId,
		step
	}));
}
function sampleTrain(courseId, completed, mistakes, count = 5) {
	const course = getCourse(courseId);
	if (!course) return [];
	const allowed = new Set(courseLessons(course).filter((lesson) => completed[lesson.id]).map((lesson) => lesson.id));
	const first = courseLessons(course)[0];
	if (allowed.size === 0 && first) allowed.add(first.id);
	const pool = [];
	for (const lesson of courseLessons(course)) {
		if (!allowed.has(lesson.id)) continue;
		lesson.steps.forEach((step, index) => {
			if (step.kind === "theory") return;
			pool.push({
				key: `${lesson.id}#${index}`,
				lessonId: lesson.id,
				courseId,
				step
			});
		});
	}
	const picked = [];
	const used = /* @__PURE__ */ new Set();
	for (const key of mistakes) {
		const hit = pool.find((item) => item.key === key);
		if (!hit || used.has(hit.key)) continue;
		picked.push(hit);
		used.add(hit.key);
		if (picked.length >= count) return picked;
	}
	const rest = pool.filter((item) => !used.has(item.key));
	for (let i = rest.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const swap = rest[i];
		rest[i] = rest[j];
		rest[j] = swap;
	}
	for (const item of rest) {
		if (picked.length >= count) break;
		picked.push(item);
	}
	return picked;
}
var lessonTotal = courses.reduce((sum, course) => sum + courseLessons(course).length, 0);
function normalize(raw, semi = "strip") {
	let text = raw.replace(/\r/g, "").trim();
	text = text.replace(/[ \t]+/g, " ");
	text = text.replace(/\s*([=(),;{}:+*/<>&|!])\s*/g, "$1");
	text = text.replace(/[ \t]*\n[ \t]*/g, "\n").trim();
	if (semi === "strip") text = text.replace(/;+$/g, "");
	return text;
}
function typeMatches(raw, answer, accept, semi = "strip") {
	const got = normalize(raw, semi);
	if (!got) return false;
	return [answer, ...accept ?? []].some((item) => normalize(item, semi) === got);
}
var PRAISE = [
	"Boa!",
	"Afiado!",
	"É isso!",
	"Certo!"
];
var NUDGE = [
	"Ainda não",
	"Quase",
	"Repara nisto"
];
function isCorrect(step, input) {
	if (step.kind === "theory") return true;
	if (step.kind === "choice" || step.kind === "predict" || step.kind === "blank") return input.pick === step.answer;
	if (step.kind === "type") return typeMatches(input.text, step.answer, step.accept, step.semi ?? "strip");
	if (step.kind === "order") return input.built.length === step.lines.length && input.built.every((value, line) => value === line);
	return false;
}
function hashSeed(value) {
	let seed = 1;
	for (let i = 0; i < value.length; i += 1) seed = (seed * 33 + value.charCodeAt(i)) % 2147483647;
	return seed || 1;
}
function shuffled(count, seed) {
	const items = Array.from({ length: count }, (_, index) => index);
	let state = seed;
	const rand = () => {
		state = state * 48271 % 2147483647;
		return state / 2147483647;
	};
	for (let i = count - 1; i > 0; i -= 1) {
		const j = Math.floor(rand() * (i + 1));
		const swap = items[i];
		items[i] = items[j];
		items[j] = swap;
	}
	if (items.every((value, index) => value === index) && count > 1) {
		const swap = items[0];
		items[0] = items[1];
		items[1] = swap;
	}
	return items;
}
function CodeBlock({ code, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl bg-ink text-on-primary shadow-card",
		children: [label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border-b border-on-primary/15 px-4 py-2 text-xs font-semibold tracking-wide text-on-primary/70",
			children: label
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "overflow-x-auto px-4 py-3 font-mono text-sm leading-relaxed",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: code })
		})]
	});
}
function Player({ title, drills, costHeart, onExit, onComplete }) {
	const hearts = useProgress((state) => state.hearts);
	const sound = useProgress((state) => state.sound);
	const recordAnswer = useProgress((state) => state.recordAnswer);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [phase, setPhase] = (0, import_react.useState)(() => costHeart && useProgress.getState().hearts <= 0 ? "empty" : "play");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [pick, setPick] = (0, import_react.useState)(null);
	const [text, setText] = (0, import_react.useState)("");
	const [pool, setPool] = (0, import_react.useState)([]);
	const [built, setBuilt] = (0, import_react.useState)([]);
	const [hintOpen, setHintOpen] = (0, import_react.useState)(false);
	const [quit, setQuit] = (0, import_react.useState)(false);
	const [xp, setXp] = (0, import_react.useState)(0);
	const [shake, setShake] = (0, import_react.useState)(false);
	const stats = (0, import_react.useRef)({
		correct: 0,
		total: 0
	});
	const scroller = (0, import_react.useRef)(null);
	const finished = (0, import_react.useRef)(false);
	const runtime = (0, import_react.useRef)({
		grade: () => {},
		advance: () => {},
		canCheck: false,
		status: "idle",
		phase: "play",
		quit: false
	});
	const drill = drills[index];
	const step = drill?.step;
	(0, import_react.useEffect)(() => {
		if (!step || step.kind !== "order") return;
		setPool(shuffled(step.lines.length, hashSeed(drill.key)));
		setBuilt([]);
	}, [drill?.key, step]);
	(0, import_react.useEffect)(() => {
		scroller.current?.scrollTo({ top: 0 });
	}, [index, phase]);
	const canCheck = (0, import_react.useMemo)(() => {
		if (!step) return false;
		if (step.kind === "theory") return true;
		if (step.kind === "choice" || step.kind === "predict" || step.kind === "blank") return pick !== null;
		if (step.kind === "type") return text.trim().length > 0;
		if (step.kind === "order") return built.length === step.lines.length;
		return false;
	}, [
		built.length,
		pick,
		step,
		text
	]);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			if (event.key !== "Enter") return;
			if (event.target instanceof HTMLButtonElement) return;
			const now = runtime.current;
			if (now.phase !== "play" || now.quit) return;
			event.preventDefault();
			if (now.status === "idle") {
				if (now.canCheck) now.grade();
			} else now.advance();
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	if (!step || !drill) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "grid min-h-dvh place-items-center px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted",
			children: "Esta lição não tem passos."
		})
	});
	function grade() {
		if (!step || status !== "idle") return;
		if (step.kind === "theory") {
			advance();
			return;
		}
		const ok = isCorrect(step, {
			pick,
			text,
			built
		});
		stats.current.total += 1;
		if (ok) stats.current.correct += 1;
		recordAnswer(drill.key, ok, costHeart);
		setStatus(ok ? "ok" : "bad");
		playTone(ok ? "ok" : "bad", sound);
		if (!ok) {
			setShake(true);
			window.setTimeout(() => setShake(false), 240);
		}
	}
	function advance() {
		if (costHeart && !useProgress.getState().hearts && status === "bad") {
			setPhase("empty");
			return;
		}
		if (index + 1 >= drills.length) {
			if (finished.current) return;
			finished.current = true;
			const gained = onComplete(stats.current);
			setXp(gained);
			setPhase("done");
			playTone("ok", sound);
			return;
		}
		setIndex((value) => value + 1);
		setStatus("idle");
		setPick(null);
		setText("");
		setHintOpen(false);
	}
	runtime.current = {
		grade,
		advance,
		canCheck,
		status,
		phase,
		quit
	};
	const progress = Math.round(index / drills.length * 100);
	if (phase === "done") {
		const total = stats.current.total;
		const correct = stats.current.correct;
		const accuracy = total ? Math.round(correct / total * 100) : 100;
		const perfect = total > 0 && correct === total;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto flex min-h-dvh max-w-lg flex-col items-center justify-center px-6 py-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: bolt_default,
					alt: "",
					className: "rise h-28 w-28"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm font-bold tracking-wide text-primary",
					children: "Lição fechada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-4xl text-ink",
					children: perfect ? "Perfeito." : "Bom trabalho."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xs text-muted",
					children: perfect ? "Nenhuma falha nesta ronda." : "O erro também ensina. A explicação fica contigo."
				}),
				costHeart ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xs text-sm font-semibold text-ink",
					children: "O exercício desta lição ficou aberto no Compilador."
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid w-full grid-cols-3 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "XP",
							value: `+${xp}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Certas",
							value: `${correct}/${total || drills.length}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Precisão",
							value: `${accuracy}%`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-8",
					onClick: onExit,
					children: "Continuar"
				})
			]
		});
	}
	if (phase === "empty") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-6 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
				className: "h-12 w-12 fill-bad text-bad",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-4 text-4xl",
				children: "Ficaste sem vidas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "O treino não gasta vidas. No fim, as cinco voltam e podes retomar o percurso."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-8",
				onClick: () => {
					useProgress.getState().requestTrain();
					onExit();
				},
				children: "Ir para o treino"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-3",
				variant: "surface",
				onClick: onExit,
				children: "Voltar ao percurso"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex h-dvh max-w-lg flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-3 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press grid h-11 w-11 place-items-center rounded-full text-muted",
						onClick: () => setQuit(true),
						"aria-label": "Sair da lição",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-3 flex-1 overflow-hidden rounded-full bg-line",
						"aria-hidden": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-primary transition-[width] duration-300",
							style: { width: `${progress}%` }
						})
					}),
					costHeart ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-1 text-base font-bold text-bad tabular-nums",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "h-5 w-5 fill-bad",
							"aria-hidden": true
						}), hearts]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-primary",
						children: "Treino"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scroller,
				className: "flex-1 overflow-y-auto px-5 pb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-muted",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepBody, {
					step,
					pick,
					status,
					text,
					pool,
					built,
					shake,
					hintOpen,
					onPick: (value) => {
						if (status !== "idle") return;
						setPick(value);
						playTone("pop", sound);
					},
					onText: setText,
					onTake: (value) => {
						if (status !== "idle") return;
						setPool((items) => items.filter((item) => item !== value));
						setBuilt((items) => [...items, value]);
					},
					onDrop: (value) => {
						if (status !== "idle") return;
						setBuilt((items) => items.filter((item) => item !== value));
						setPool((items) => [...items, value]);
					},
					onHint: () => setHintOpen((open) => !open)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: cn("max-h-[48%] shrink-0 overflow-y-auto px-5 pt-4 pb-5 transition-colors duration-200", status === "ok" && "bg-ok text-on-primary", status === "bad" && "bg-bad text-on-primary"),
				children: status === "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					disabled: !canCheck,
					onClick: grade,
					children: step.kind === "theory" ? "Continuar" : "Verificar"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: status === "ok" ? PRAISE[index % PRAISE.length] : NUDGE[index % NUDGE.length]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-base leading-relaxed",
						children: step.kind === "theory" ? "" : step.explain
					}),
					status === "bad" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswerReveal, { step }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						variant: "inverse",
						onClick: advance,
						children: "Continuar"
					})
				] })
			}),
			quit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 grid place-items-end bg-ink/40 p-4 sm:place-items-center",
				role: "dialog",
				"aria-modal": true,
				"aria-labelledby": "quit-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-3xl bg-surface p-5 text-ink shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "quit-title",
							className: "font-display text-2xl",
							children: "Sair desta tentativa?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "O progresso da lição perde-se. As vidas já gastas ficam gastas."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-5",
							variant: "deep",
							onClick: onExit,
							children: "Sair"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3",
							variant: "surface",
							onClick: () => setQuit(false),
							children: "Continuar a lição"
						})
					]
				})
			}) : null
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface px-2 py-4 shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-2xl tabular-nums",
			children: value
		})]
	});
}
function AnswerReveal({ step }) {
	if (step.kind === "theory") return null;
	if (step.kind === "choice" || step.kind === "predict" || step.kind === "blank") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-3 font-semibold",
		children: ["Resposta: ", step.options[step.answer]]
	});
	if (step.kind === "type") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-3 font-mono text-sm",
		children: ["Resposta: ", step.answer]
	});
	if (step.kind === "order") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-3 font-mono text-sm leading-relaxed",
		children: ["Resposta: ", step.lines.join("  ·  ")]
	});
	return null;
}
function StepBody({ step, pick, status, text, pool, built, shake, hintOpen, onPick, onText, onTake, onDrop, onHint }) {
	if (step.kind === "theory") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rise pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: step.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg leading-relaxed text-ink",
				children: step.body
			}),
			step.example ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					code: step.example,
					label: "exemplo"
				})
			}) : null
		]
	});
	const prompt = step.prompt;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-start justify-between gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl",
					children: prompt
				})
			}),
			"hint" in step ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "press mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary",
				onClick: onHint,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, {
					className: "h-4 w-4",
					"aria-hidden": true
				}), hintOpen ? "Esconder dica" : "Dica"]
			}) : null,
			hintOpen && "hint" in step ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 rounded-2xl bg-amber-bg px-4 py-3 text-sm text-ink",
				children: step.hint
			}) : null,
			step.kind === "predict" && step.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					code: step.code,
					label: "código"
				})
			}) : null,
			step.kind === "choice" && step.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					code: step.code,
					label: "código"
				})
			}) : null,
			step.kind === "type" && step.code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					code: step.code,
					label: "código"
				})
			}) : null,
			step.kind === "blank" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeBlock, {
					label: "completa",
					code: `${step.before}${pick === null ? "____" : step.options[pick]}${step.after}`
				})
			}) : null,
			step.kind === "choice" || step.kind === "predict" || step.kind === "blank" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-3",
				children: step.options.map((option, optionIndex) => {
					const tone = status === "idle" ? pick === optionIndex ? "selected" : "rest" : optionIndex === step.answer ? "ok" : pick === optionIndex ? "bad" : "rest";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: status !== "idle",
						onClick: () => onPick(optionIndex),
						className: cn("press rounded-2xl border-2 px-4 py-4 text-left text-base font-semibold", tone === "selected" && "border-primary bg-primary-soft", tone === "ok" && "border-ok bg-ok-bg", tone === "bad" && "border-bad bg-bad-bg", tone === "bad" && shake && "shake", tone === "rest" && "border-line bg-surface"),
						children: option
					}, option);
				})
			}) : null,
			step.kind === "type" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-5 block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "A tua resposta"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: text,
					disabled: status !== "idle",
					onChange: (event) => onText(event.target.value),
					autoCapitalize: "off",
					autoCorrect: "off",
					spellCheck: false,
					placeholder: "Escreve aqui",
					className: cn("h-14 w-full rounded-2xl border-2 bg-surface px-4 font-mono text-base outline-none", status === "ok" && "border-ok", status === "bad" && "border-bad", status === "idle" && "border-line focus:border-primary")
				})]
			}) : null,
			step.kind === "order" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-muted",
						children: "A tua ordem"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid min-h-16 gap-2",
						children: built.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-2xl border-2 border-dashed border-line px-4 py-4 text-sm text-muted",
							children: "Toca nas linhas, pela ordem certa."
						}) : built.map((line, position) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: status !== "idle",
							onClick: () => onDrop(line),
							className: cn("press rounded-2xl border-2 px-4 py-3 text-left font-mono text-sm", status === "ok" && "border-ok bg-ok-bg", status === "bad" && "border-bad bg-bad-bg", status === "idle" && "border-primary bg-primary-soft"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mr-2 font-sans font-bold text-primary",
								children: position + 1
							}), step.lines[line]]
						}, `${line}-${position}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm font-semibold text-muted",
						children: "Linhas"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 grid gap-2",
						children: pool.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: status !== "idle",
							onClick: () => onTake(line),
							className: "press rounded-2xl border-2 border-line bg-surface px-4 py-3 text-left font-mono text-sm",
							children: step.lines[line]
						}, line))
					})
				]
			}) : null
		]
	});
}
//#endregion
export { getCourse as a, lessonDrills as c, findLesson as i, lessonTotal as l, courseLessons as n, getCourses as o, currentLesson as r, isUnlocked as s, Player as t, sampleTrain as u };
