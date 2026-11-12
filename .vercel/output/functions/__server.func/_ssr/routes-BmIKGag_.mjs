import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as Check, _ as Hash, a as UserRound, b as Dumbbell, c as Star, d as RotateCcw, f as Pencil, g as Heart, l as SquareTerminal, m as Lock, p as Map$1, s as Terminal, t as Zap, u as Settings, v as Globe, x as Database, y as Flame } from "../_libs/lucide-react.mjs";
import { f as useCurrentUser, h as useStoreHydrated, m as useProgress, n as RedirectToSignIn, o as bolt_default, p as useCurrentUserState, r as Splash, s as cn, t as Button, u as shiftKey } from "./splash-C3xWF-XY.mjs";
import { a as getCourse, l as lessonTotal, n as courseLessons, o as getCourses, r as currentLesson, s as isUnlocked, t as Player, u as sampleTrain } from "./player-QcbL7s2Z.mjs";
import { n as useApplyTheme, t as SettingsPanel } from "./settings-BvtOqagh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BmIKGag_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var scratch = {
	js: "console.log(\"olá\");\n",
	py: "print(\"olá\")\n",
	cs: "Console.WriteLine(\"olá\");\n",
	web: "<h1>A minha página</h1>\n<p>Escreve aqui.</p>\n",
	sql: "SELECT nome, xp\nFROM alunos;\n"
};
var byId = new Map([
	{
		lessonId: "js-1",
		title: "Guarda um valor",
		prompt: "Cria a constante nome com Ana e mostra-a na consola.",
		starter: "const nome = \"Ana\";\n",
		kind: "out",
		expect: ["Ana"]
	},
	{
		lessonId: "js-2",
		title: "Mostra na consola",
		prompt: "Mostra a palavra XP.",
		starter: "",
		kind: "out",
		expect: ["XP"]
	},
	{
		lessonId: "js-3",
		title: "Texto, número, sim ou não",
		prompt: "Guarda a idade 12 e mostra o tipo desse valor.",
		starter: "const idade = 12;\n",
		kind: "out",
		expect: ["number"]
	},
	{
		lessonId: "js-4",
		title: "Comparar sem confundir",
		prompt: "Mostra o resultado de comparar 3 com 3 usando ===.",
		starter: "",
		kind: "out",
		expect: ["true"]
	},
	{
		lessonId: "js-5",
		title: "Se isto, então aquilo",
		prompt: "Se a nota 8 chega a 10, mostra passa. Senão, mostra recupera.",
		starter: "const nota = 8;\n",
		kind: "out",
		expect: ["recupera"]
	},
	{
		lessonId: "js-6",
		title: "E, ou, não",
		prompt: "Mostra o resultado de true && false.",
		starter: "",
		kind: "out",
		expect: ["false"]
	},
	{
		lessonId: "js-7",
		title: "Dá um nome aos passos",
		prompt: "Cria a função ola que mostra olá e chama-a.",
		starter: "function ola() {\n  \n}\n",
		kind: "out",
		expect: ["olá"]
	},
	{
		lessonId: "js-8",
		title: "Listas começam no zero",
		prompt: "Cria a lista letras com a e b. Mostra o primeiro elemento.",
		starter: "",
		kind: "out",
		expect: ["a"]
	},
	{
		lessonId: "js-9",
		title: "Repete com for",
		prompt: "Mostra 0, 1 e 2, um por linha, com um ciclo for.",
		starter: "for (let i = 0; i < 3; i++) {\n  \n}\n",
		kind: "out",
		expect: ["0\n1\n2"]
	},
	{
		lessonId: "js-10",
		title: "A função decide",
		prompt: "Escreve resultado(nota): passa se a nota for pelo menos 10, senão recupera. Mostra resultado(8).",
		starter: "function resultado(nota) {\n  \n}\n",
		kind: "out",
		expect: ["recupera"]
	},
	{
		lessonId: "js-11",
		title: "A lista inteira",
		prompt: "Com a função resultado, percorre [12, 8, 15] e mostra uma palavra por linha.",
		starter: "function resultado(nota) {\n  if (nota >= 10) return \"passa\";\n  return \"recupera\";\n}\nconst notas = [12, 8, 15];\n",
		kind: "out",
		expect: ["passa\nrecupera\npassa"]
	},
	{
		lessonId: "js-12",
		title: "Do zero",
		prompt: "Do zero: função resultado, a lista [12, 8, 15] e um ciclo. Uma palavra por linha.",
		starter: "",
		kind: "out",
		expect: ["passa\nrecupera\npassa"]
	},
	{
		lessonId: "py-1",
		title: "O print",
		prompt: "Mostra a palavra Sharp.",
		starter: "",
		kind: "out",
		expect: ["Sharp"]
	},
	{
		lessonId: "py-2",
		title: "Nomes e blocos",
		prompt: "Se a nota for 7, mostra recupera. O corpo do if fica indentado.",
		starter: "nota = 7\nif nota >= 10:\n    print(\"passa\")\nelse:\n    \n",
		kind: "out",
		expect: ["recupera"]
	},
	{
		lessonId: "py-3",
		title: "True com letra grande",
		prompt: "Mostra o resultado de 2 == 2.",
		starter: "",
		kind: "out",
		expect: ["True"]
	},
	{
		lessonId: "py-4",
		title: "If com dois pontos",
		prompt: "nota vale 11. Mostra passa ou recupera com a regra dos 10.",
		starter: "nota = 11\n",
		kind: "out",
		expect: ["passa"]
	},
	{
		lessonId: "py-5",
		title: "Listas e for",
		prompt: "Percorre [1, 2, 3] e mostra cada número.",
		starter: "numeros = [1, 2, 3]\n",
		kind: "out",
		expect: ["1\n2\n3"]
	},
	{
		lessonId: "py-6",
		title: "def e return",
		prompt: "Define dobra(n) que devolve o dobro. Mostra dobra(4).",
		starter: "def dobra(n):\n    \n",
		kind: "out",
		expect: ["8"]
	},
	{
		lessonId: "py-7",
		title: "Devolver a decisão",
		prompt: "Escreve resultado(nota) e mostra resultado(8). A negativa devolve recupera.",
		starter: "def resultado(nota):\n    \n",
		kind: "out",
		expect: ["recupera"]
	},
	{
		lessonId: "py-8",
		title: "Um for com a função",
		prompt: "Classifica [12, 8, 15] com resultado e um for. Uma palavra por linha.",
		starter: "def resultado(nota):\n    if nota >= 10:\n        return \"passa\"\n    return \"recupera\"\nnotas = [12, 8, 15]\n",
		kind: "out",
		expect: ["passa\nrecupera\npassa"]
	},
	{
		lessonId: "py-9",
		title: "Script do zero",
		prompt: "Do zero, em Python: a função, a lista [12, 8, 15] e o ciclo.",
		starter: "",
		kind: "out",
		expect: ["passa\nrecupera\npassa"]
	},
	{
		lessonId: "cs-1",
		title: "WriteLine",
		prompt: "Mostra a palavra Sharp.",
		starter: "",
		kind: "out",
		expect: ["Sharp"]
	},
	{
		lessonId: "cs-2",
		title: "int, string, bool",
		prompt: "Cria um int idade com 12 e mostra-o.",
		starter: "",
		kind: "out",
		expect: ["12"]
	},
	{
		lessonId: "cs-3",
		title: "If com chavetas",
		prompt: "nota vale 8. Mostra recupera se não chegar a 10.",
		starter: "int nota = 8;\n",
		kind: "out",
		expect: ["recupera"]
	},
	{
		lessonId: "cs-4",
		title: "O ciclo for",
		prompt: "Mostra 0, 1 e 2 com um for.",
		starter: "for (int i = 0; i < 3; i++) {\n  \n}\n",
		kind: "out",
		expect: ["0\n1\n2"]
	},
	{
		lessonId: "cs-5",
		title: "Métodos",
		prompt: "Escreve o método static string Resultado(int nota) e mostra Resultado(14).",
		starter: "static string Resultado(int nota) {\n  \n}\n",
		kind: "out",
		expect: ["passa"]
	},
	{
		lessonId: "cs-6",
		title: "A primeira classe",
		prompt: "Cria a string nome com Ana e mostra-a. As classes ficam para o passo seguinte; aqui confirma o tipo.",
		starter: "",
		kind: "out",
		expect: ["Ana"]
	},
	{
		lessonId: "cs-7",
		title: "Um método com regra",
		prompt: "Resultado devolve passa ou recupera. Mostra Resultado(8).",
		starter: "static string Resultado(int nota) {\n  \n}\n",
		kind: "out",
		expect: ["recupera"]
	},
	{
		lessonId: "cs-8",
		title: "Ciclo sobre o array",
		prompt: "Classifica o array { 12, 8, 15 } com Resultado. Uma palavra por linha.",
		starter: "static string Resultado(int nota) {\n  if (nota >= 10) return \"passa\";\n  return \"recupera\";\n}\n",
		kind: "out",
		expect: ["passa\nrecupera\npassa"]
	},
	{
		lessonId: "cs-9",
		title: "Consola do zero",
		prompt: "Do zero: o método, o array { 12, 8, 15 } e o ciclo.",
		starter: "",
		kind: "out",
		expect: ["passa\nrecupera\npassa"]
	},
	{
		lessonId: "web-1",
		title: "Etiquetas",
		prompt: "Faz uma página com um h1 Boletim e um parágrafo.",
		starter: "",
		kind: "html",
		expect: [
			"<h1",
			"boletim",
			"<p"
		]
	},
	{
		lessonId: "web-2",
		title: "Ligações e imagens",
		prompt: "Inclui uma ligação para https://example.com e uma imagem com alt.",
		starter: "<h1>Recursos</h1>\n",
		kind: "html",
		expect: [
			"<a",
			"href=",
			"<img",
			"alt="
		]
	},
	{
		lessonId: "web-3",
		title: "Cor com CSS",
		prompt: "Pinta um título com CSS. A página tem de ter h1 e a propriedade color.",
		starter: "<h1>Sharp</h1>\n<style>\n  h1 { }\n</style>\n",
		kind: "html",
		expect: ["<h1", "color"]
	},
	{
		lessonId: "web-4",
		title: "Classes e flex",
		prompt: "Cria um contentor com a classe cartao e display: flex no CSS.",
		starter: "<main class=\"cartao\">\n  <h1>Boletim</h1>\n</main>\n<style>\n  .cartao { }\n</style>\n",
		kind: "html",
		expect: [
			"cartao",
			"display",
			"flex"
		]
	},
	{
		lessonId: "web-5",
		title: "Cabeça, corpo, estilo",
		prompt: "Título Boletim, um parágrafo e um bloco style com color.",
		starter: "",
		kind: "html",
		expect: [
			"<h1",
			"boletim",
			"<p",
			"color"
		]
	},
	{
		lessonId: "web-6",
		title: "Publica o boletim",
		prompt: "Do zero: main.cartao, um h1, uma lista com três li e display:flex.",
		starter: "",
		kind: "html",
		expect: [
			"cartao",
			"<h1",
			"<ul",
			"<li",
			"flex"
		]
	},
	{
		lessonId: "sql-1",
		title: "Select e from",
		prompt: "Mostra só a coluna nome da tabela alunos.",
		starter: "SELECT \nFROM alunos;\n",
		kind: "out",
		expect: ["Ana\nBruno\nClara"]
	},
	{
		lessonId: "sql-2",
		title: "Filtrar com where",
		prompt: "Nomes dos alunos com xp de pelo menos 25.",
		starter: "SELECT nome\nFROM alunos\n",
		kind: "out",
		expect: ["Ana\nClara"]
	},
	{
		lessonId: "sql-3",
		title: "Ordem e contagem",
		prompt: "Conta quantos alunos existem.",
		starter: "",
		kind: "out",
		expect: ["3"]
	},
	{
		lessonId: "sql-4",
		title: "Juntar tabelas",
		prompt: "Mostra alunos.nome e cursos.titulo, ligando curso_id a cursos.id.",
		starter: "SELECT alunos.nome, cursos.titulo\nFROM alunos\n",
		kind: "out",
		expect: ["Ana | Web\nBruno | Web\nClara | Dados"]
	},
	{
		lessonId: "sql-5",
		title: "A pergunta certa",
		prompt: "Nome e xp de quem tem pelo menos 25, do maior xp para o menor.",
		starter: "",
		kind: "out",
		expect: ["Ana | 40\nClara | 25"]
	},
	{
		lessonId: "sql-6",
		title: "Relatório do zero",
		prompt: "Do zero: nome, título do curso, só xp >= 25, maior xp primeiro.",
		starter: "",
		kind: "out",
		expect: ["Ana | Web\nClara | Dados"]
	}
].map((item) => [item.lessonId, item]));
function practiceFor(lessonId) {
	return byId.get(lessonId) ?? null;
}
function normalizeOutput(value) {
	return value.replace(/\r/g, "").trim().split("\n").map((line) => line.trim()).filter(Boolean).join("\n");
}
function practicePassed(practice, result) {
	if (result.error) return false;
	if (practice.kind === "html") {
		const html = (result.html ?? "").toLowerCase();
		return practice.expect.every((bit) => html.includes(bit.toLowerCase()));
	}
	const got = normalizeOutput(result.output);
	return practice.expect.some((item) => normalizeOutput(item) === got);
}
var TABLES = {
	alunos: [
		{
			id: 1,
			nome: "Ana",
			xp: 40,
			curso_id: 1
		},
		{
			id: 2,
			nome: "Bruno",
			xp: 10,
			curso_id: 1
		},
		{
			id: 3,
			nome: "Clara",
			xp: 25,
			curso_id: 2
		}
	],
	cursos: [{
		id: 1,
		titulo: "Web"
	}, {
		id: 2,
		titulo: "Dados"
	}]
};
function runSql(code) {
	const text = code.replace(/--.*$/gm, "").replace(/\s+/g, " ").trim().replace(/;+\s*$/, "").split(";")[0].trim();
	if (!text) return {
		output: "",
		error: "Escreve um SELECT.",
		html: null
	};
	if (!/^select\b/i.test(text)) return {
		output: "",
		error: "Nesta consola só podes correr SELECT.",
		html: null
	};
	const from = text.match(/\bfrom\s+([a-z_][a-z0-9_]*)/i);
	if (!from) return {
		output: "",
		error: "Falta o FROM.",
		html: null
	};
	const table = from[1].toLowerCase();
	if (!TABLES[table]) return {
		output: "",
		error: "Tabela desconhecida. Usa alunos ou cursos.",
		html: null
	};
	let rows = TABLES[table].map((row) => label(row, table));
	const join = text.match(/\bjoin\s+([a-z_][a-z0-9_]*)\s+on\s+([a-z0-9_.]+)\s*=\s*([a-z0-9_.]+)/i);
	if (join) {
		const other = join[1].toLowerCase();
		if (!TABLES[other]) return {
			output: "",
			error: "A segunda tabela não existe.",
			html: null
		};
		const next = [];
		for (const row of rows) for (const extra of TABLES[other]) {
			const right = label(extra, other);
			const leftValue = field(row, join[2]);
			const rightValue = field(right, join[3]);
			if (leftValue !== void 0 && String(leftValue) === String(rightValue)) next.push({
				...row,
				...right
			});
		}
		rows = next;
	}
	const where = text.match(/\bwhere\s+(.+?)(?:\border\s+by\b|$)/i);
	if (where) {
		const check = parseWhere(where[1]);
		if (!check) return {
			output: "",
			error: "Não percebi o WHERE. Usa uma comparação só.",
			html: null
		};
		rows = rows.filter((row) => check(row));
	}
	const order = text.match(/\border\s+by\s+([a-z0-9_.]+)(?:\s+(asc|desc))?/i);
	if (order) {
		const dir = (order[2] || "asc").toLowerCase() === "desc" ? -1 : 1;
		rows = rows.slice().sort((a, b) => compare(field(a, order[1]), field(b, order[1])) * dir);
	}
	const select = text.match(/^select\s+(.+?)\s+from\b/i);
	if (!select) return {
		output: "",
		error: "Não percebi o SELECT.",
		html: null
	};
	const spec = select[1].trim();
	if (/^count\s*\(\s*(?:\*|1)\s*\)$/i.test(spec)) return {
		output: String(rows.length),
		error: null,
		html: null
	};
	const cols = spec === "*" ? Object.keys(rows[0] ?? {}).filter((key) => !key.includes(".")) : spec.split(",").map((part) => part.trim());
	return {
		output: rows.map((row) => cols.map((col) => String(field(row, col) ?? "")).join(" | ")).join("\n"),
		error: null,
		html: null
	};
}
function label(row, table) {
	const next = {};
	for (const [key, value] of Object.entries(row)) {
		next[key] = value;
		next[`${table}.${key}`] = value;
	}
	return next;
}
function field(row, ref) {
	if (ref in row) return row[ref];
	return row[ref.split(".").pop() ?? ref];
}
function parseWhere(expr) {
	const match = expr.trim().match(/^([a-z0-9_.]+)\s*(=|<>|!=|>=|<=|>|<)\s*(.+)$/i);
	if (!match) return null;
	const [, column, op, rawValue] = match;
	const value = literal(rawValue.trim());
	return (row) => compareOp(field(row, column), op, value);
}
function literal(raw) {
	const clean = raw.replace(/;+\s*$/, "");
	if (clean.startsWith("'") && clean.endsWith("'") || clean.startsWith("\"") && clean.endsWith("\"")) return clean.slice(1, -1);
	if (/^-?\d+(\.\d+)?$/.test(clean)) return Number(clean);
	return clean;
}
function compare(left, right) {
	if (typeof left === "number" && typeof right === "number") return left - right;
	return String(left ?? "").localeCompare(String(right ?? ""));
}
function compareOp(left, op, right) {
	if (op === "=") return String(left) === String(right);
	if (op === "!=" || op === "<>") return String(left) !== String(right);
	const delta = compare(left, right);
	if (op === ">") return delta > 0;
	if (op === "<") return delta < 0;
	if (op === ">=") return delta >= 0;
	if (op === "<=") return delta <= 0;
	return false;
}
function protect(input, visit) {
	const parts = [];
	let plain = "";
	let index = 0;
	while (index < input.length) {
		const mark = input[index];
		if (mark === "\"" || mark === "'") {
			let end = index + 1;
			while (end < input.length && input[end] !== mark) end += input[end] === "\\" ? 2 : 1;
			parts.push(input.slice(index, Math.min(end + 1, input.length)));
			plain += `\u0000${parts.length - 1}\u0000`;
			index = end + 1;
			continue;
		}
		plain += mark;
		index += 1;
	}
	return visit(plain).replace(/\u0000(\d+)\u0000/g, (_, id) => parts[Number(id)] ?? "");
}
function rewritePythonWords(input) {
	return protect(input, (plain) => plain.replace(/\brange\s*\(\s*([^)]+?)\s*\)/g, "[...Array($1).keys()]").replace(/\blen\s*\(\s*([^)]+?)\s*\)/g, "($1).length").replace(/\bprint\s*\(/g, "console.log(").replace(/\b(and|or|not|True|False|None)\b/g, (word) => {
		if (word === "and") return "&&";
		if (word === "or") return "||";
		if (word === "not") return "!";
		if (word === "True") return "true";
		if (word === "False") return "false";
		return "null";
	}));
}
function transpilePython(source) {
	const declared = /* @__PURE__ */ new Set();
	const items = source.replace(/\t/g, "    ").split("\n").map((line) => {
		const comment = line.split("#")[0] ?? "";
		if (!comment.trim()) return null;
		return {
			indent: comment.match(/^ */)?.[0].length ?? 0,
			text: comment.trim()
		};
	}).filter((item) => Boolean(item));
	const out = [];
	const stack = [];
	for (const item of items) {
		const opens = /:\s*$/.test(item.text);
		while (stack.length > 0 && item.indent <= stack[stack.length - 1]) {
			stack.pop();
			out.push("}");
		}
		out.push(rewritePythonStatement(item.text, declared));
		if (opens) stack.push(item.indent);
	}
	while (stack.length > 0) {
		stack.pop();
		out.push("}");
	}
	return out.join("\n");
}
function rewritePythonStatement(text, declared) {
	const body = rewritePythonWords(text.replace(/:\s*$/, ""));
	const def = body.match(/^def\s+([A-Za-z_][A-Za-z0-9_]*)\s*\((.*)\)$/);
	if (def) return `function ${def[1]}(${def[2]}) {`;
	const elif = body.match(/^elif\s+(.+)$/);
	if (elif) return `else if (${elif[1]}) {`;
	if (body === "else") return "else {";
	const condition = body.match(/^if\s+(.+)$/);
	if (condition) return `if (${condition[1]}) {`;
	const loop = body.match(/^for\s+([A-Za-z_][A-Za-z0-9_]*)\s+in\s+(.+)$/);
	if (loop) return `for (const ${loop[1]} of ${loop[2]}) {`;
	const wh = body.match(/^while\s+(.+)$/);
	if (wh) return `while (${wh[1]}) {`;
	const assign = body.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.+)$/);
	if (assign && !declared.has(assign[1])) {
		declared.add(assign[1]);
		return `let ${assign[1]} = ${assign[2]};`;
	}
	if (assign) return `${assign[1]} = ${assign[2]};`;
	return body.endsWith(";") || body.endsWith("{") || body.startsWith("}") ? body : `${body};`;
}
function transpileCSharp(source) {
	return source.replace(/Console\.WriteLine/g, "console.log").replace(/Console\.Write/g, "console.log").replace(/static\s+string\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(\s*int\s+([A-Za-z_][A-Za-z0-9_]*)\s*\)/g, "function $1($2)").replace(/int\[\]\s+([A-Za-z_][A-Za-z0-9_]*)\s*=\s*\{([^}]+)\}\s*;?/g, "let $1 = [$2];").replace(/\.Length\b/g, ".length").replace(/\b(int|string|bool|double|float|var)\s+([A-Za-z_][A-Za-z0-9_]*)/g, "let $2");
}
function prelude(language) {
	if (language === "py") return `console.log = (...args) => logs.push(args.map((value) => value === true ? "True" : value === false ? "False" : value === null ? "None" : format(value)).join(" "));`;
	if (language === "cs") return `console.log = (...args) => logs.push(args.map((value) => value === true ? "True" : value === false ? "False" : format(value)).join(" "));`;
	return "";
}
function prepareSource(language, code) {
	if (language === "py") return {
		source: transpilePython(code),
		prelude: prelude(language),
		html: null
	};
	if (language === "cs") return {
		source: transpileCSharp(code),
		prelude: prelude(language),
		html: null
	};
	if (language === "web") return {
		source: "",
		prelude: "",
		html: /<html[\s>]/i.test(code) ? code : `<!doctype html><html><head><meta charset="utf-8"></head><body>${code}</body></html>`
	};
	if (language === "sql") return {
		source: "",
		prelude: "",
		html: null
	};
	return {
		source: code,
		prelude: "",
		html: null
	};
}
async function runUserCode(language, code) {
	if (language === "sql") return runSql(code);
	const prepared = prepareSource(language, code);
	if (language === "web") return {
		output: "Pré-visualização pronta.",
		error: null,
		html: prepared.html
	};
	return runScript(`${prepared.prelude}\n${prepared.source}`);
}
function runScript(source) {
	return new Promise((resolve) => {
		const token = Math.random().toString(36).slice(2);
		const iframe = document.createElement("iframe");
		iframe.setAttribute("sandbox", "allow-scripts");
		iframe.setAttribute("title", "Consola SharpTech");
		iframe.style.display = "none";
		const page = `<!doctype html><meta charset="utf-8"><script>
const logs = [];
function format(value) {
  if (typeof value === "string") return value;
  if (typeof value === "undefined") return "undefined";
  try { return JSON.stringify(value); } catch (error) { return String(value); }
}
console.log = (...args) => { logs.push(args.map(format).join(" ")); };
window.onerror = (message) => {
  parent.postMessage({ src: "sharp", token: "${token}", error: String(message), output: logs.join("\\n") }, "*");
};
try {
${source.replace(/<\/script/gi, "<\\/script")}
parent.postMessage({ src: "sharp", token: "${token}", error: null, output: logs.join("\\n") }, "*");
} catch (error) {
parent.postMessage({ src: "sharp", token: "${token}", error: String(error && error.message || error), output: logs.join("\\n") }, "*");
}
<\/script>`;
		const finish = (result) => {
			window.clearTimeout(timer);
			window.removeEventListener("message", onMessage);
			iframe.remove();
			resolve(result);
		};
		const onMessage = (event) => {
			const data = event.data;
			if (!data || data.src !== "sharp" || data.token !== token) return;
			finish({
				output: data.output ?? "",
				error: data.error ?? null,
				html: null
			});
		};
		const timer = window.setTimeout(() => {
			finish({
				output: "",
				error: "O programa demorou demais. Vê se há um ciclo sem fim.",
				html: null
			});
		}, 1200);
		window.addEventListener("message", onMessage);
		document.body.appendChild(iframe);
		iframe.srcdoc = page;
	});
}
function Compiler() {
	const courseId = useProgress((state) => state.courseId);
	const setCourse = useProgress((state) => state.setCourse);
	const completed = useProgress((state) => state.completed);
	const practiced = useProgress((state) => state.practiced);
	const course = getCourse(courseId) ?? getCourses()[0];
	const lessons = courseLessons(course);
	const [lessonId, setLessonId] = (0, import_react.useState)(null);
	const [code, setCode] = (0, import_react.useState)(scratch[course.id]);
	const [result, setResult] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [verdict, setVerdict] = (0, import_react.useState)("idle");
	const [gained, setGained] = (0, import_react.useState)(0);
	const practice = lessonId ? practiceFor(lessonId) : null;
	const tasks = (0, import_react.useMemo)(() => lessons.map((lesson) => ({
		lesson,
		practice: practiceFor(lesson.id),
		open: Boolean(completed[lesson.id]),
		done: Boolean(practiced[lesson.id])
	})), [
		lessons,
		completed,
		practiced
	]);
	const openTasks = tasks.filter((item) => item.practice && item.open);
	const locked = tasks.length - openTasks.length;
	function loadCourse(next) {
		setCourse(next);
		setLessonId(null);
		setCode(scratch[next]);
		setResult(null);
		setVerdict("idle");
		setGained(0);
	}
	function loadPractice(item) {
		setLessonId(item.lessonId);
		setCode(item.starter);
		setResult(null);
		setVerdict("idle");
		setGained(0);
	}
	async function run() {
		setBusy(true);
		setVerdict("idle");
		setGained(0);
		const next = await runUserCode(course.id, code);
		setResult(next);
		if (practice && practicePassed(practice, next)) {
			setVerdict("ok");
			setGained(useProgress.getState().markPractice(practice.lessonId));
		} else if (practice) setVerdict("bad");
		setBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-5 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Compilador"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-muted",
				children: ["Corre código a sério. Cada lição terminada abre um exercício. ", locked > 0 ? `${locked} ainda fechados.` : "Estão todos abertos."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2 overflow-x-auto pb-1",
				children: getCourses().map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => loadCourse(item.id),
					className: cn("press h-10 shrink-0 rounded-full px-4 text-sm font-bold", item.id === course.id ? "bg-primary text-on-primary" : "border-2 border-line bg-surface"),
					children: item.name
				}, item.id))
			}),
			course.id === "sql" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 rounded-2xl bg-primary-soft px-4 py-3 text-sm text-ink",
				children: "Tabelas: alunos (id, nome, xp, curso_id) e cursos (id, titulo). Ana 40 Web, Bruno 10 Web, Clara 25 Dados."
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setLessonId(null);
						setCode(scratch[course.id]);
						setResult(null);
						setVerdict("idle");
					},
					className: cn("press rounded-2xl border-2 px-4 py-3 text-left text-sm font-bold", lessonId === null ? "border-primary bg-primary-soft" : "border-line bg-surface"),
					children: "Consola livre"
				}), openTasks.map(({ lesson, practice: item, done }) => item ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => loadPractice(item),
					className: cn("press flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left", lessonId === lesson.id ? "border-primary bg-primary-soft" : "border-line bg-surface"),
					children: [done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 shrink-0 text-ok" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-bold",
							children: lesson.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs text-muted",
							children: "Exercício da lição"
						})]
					})]
				}, lesson.id) : null)]
			}),
			practice ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base font-semibold",
				children: practice.prompt
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Escreve à vontade. Nada disto é corrigido."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: code,
				onChange: (event) => {
					setCode(event.target.value);
					setVerdict("idle");
				},
				spellCheck: false,
				autoCapitalize: "off",
				autoCorrect: "off",
				"aria-label": "Código",
				className: "mt-3 min-h-48 w-full rounded-2xl border-2 border-line bg-surface p-4 font-mono text-sm outline-none focus:border-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-3",
				disabled: busy || code.trim().length === 0,
				onClick: () => void run(),
				children: busy ? "A correr..." : practice ? "Correr e verificar" : "Correr"
			}),
			verdict === "ok" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 rounded-2xl bg-ok-bg px-4 py-3 text-sm font-bold text-ok",
				children: ["Exercício certo.", gained ? ` +${gained} XP.` : " Já tinhas fechado este."]
			}) : null,
			verdict === "bad" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 rounded-2xl bg-bad-bg px-4 py-3 text-sm font-semibold text-bad",
				children: "Ainda não bate certo com o pedido. A saída está em baixo."
			}) : null,
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [
					result.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-sm font-semibold text-bad",
						children: result.error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "overflow-x-auto rounded-2xl bg-console p-4 font-mono text-sm whitespace-pre-wrap text-console-ink",
						children: result.output || (result.error ? "" : "Sem saída.")
					}),
					result.html ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Pré-visualização",
						sandbox: "",
						srcDoc: result.html,
						className: "mt-3 h-56 w-full rounded-2xl border-2 border-line bg-surface"
					}) : null
				]
			}) : null
		]
	});
}
var ICONS = {
	js: Zap,
	py: Terminal,
	cs: Hash,
	web: Globe,
	sql: Database
};
var WEEK = [
	"dom",
	"seg",
	"ter",
	"qua",
	"qui",
	"sex",
	"sáb"
];
function Academy() {
	useApplyTheme();
	const ready = useStoreHydrated();
	const onboarded = useProgress((state) => state.onboarded);
	const pendingTrain = useProgress((state) => state.pendingTrain);
	const courseId = useProgress((state) => state.courseId);
	const [tab, setTab] = (0, import_react.useState)("learn");
	const [training, setTraining] = (0, import_react.useState)(null);
	const [note, setNote] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		useProgress.getState().rollDay();
	}, [ready]);
	(0, import_react.useEffect)(() => {
		if (!ready || !pendingTrain) return;
		const state = useProgress.getState();
		state.consumeTrain();
		const drills = sampleTrain(state.courseId, state.completed, state.mistakes);
		if (drills.length > 0) setTraining(drills);
		setTab("train");
	}, [pendingTrain, ready]);
	if (!onboarded) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {});
	if (training) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Player, {
		title: "Treino rápido",
		drills: training,
		costHeart: false,
		onExit: () => setTraining(null),
		onComplete: (stats) => useProgress.getState().finishTrain(stats.correct)
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto min-h-dvh max-w-lg pb-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
					tab === "learn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Learn, {
						note,
						onNote: setNote,
						onCompile: () => setTab("compile")
					}) : null,
					tab === "compile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compiler, {}) : null,
					tab === "train" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrainHome, { onStart: setTraining }) : null,
					tab === "profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profile, {}) : null,
					tab === "settings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPanel, {}) : null
				]
			}),
			tab === "learn" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContinueBar, {
				courseId,
				onTrain: setTraining
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-line bg-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "learn",
							label: "Aprender",
							onClick: () => setTab("learn"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Map$1, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "compile",
							label: "Compilar",
							onClick: () => setTab("compile"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareTerminal, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "train",
							label: "Treino",
							onClick: () => setTab("train"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dumbbell, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "profile",
							label: "Perfil",
							onClick: () => setTab("profile"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavButton, {
							active: tab === "settings",
							label: "Definições",
							onClick: () => setTab("settings"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-5 w-5" })
						})
					]
				})
			})
		]
	});
}
function NavButton({ active, label, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("press flex h-16 flex-1 flex-col items-center justify-center gap-1 text-xs font-bold", active ? "text-primary" : "text-muted"),
		children: [children, label]
	});
}
function TopBar() {
	const name = useProgress((state) => state.name);
	const streak = useProgress((state) => state.streak);
	const hearts = useProgress((state) => state.hearts);
	const dailyXp = useProgress((state) => state.dailyXp);
	const goal = useProgress((state) => state.goal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-20 flex items-center gap-3 bg-bg/90 px-4 py-3 backdrop-blur",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: bolt_default,
				alt: "",
				className: "h-11 w-11"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "truncate font-display text-xl leading-none",
					children: ["Olá, ", name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted tabular-nums",
					children: [
						"Meta ",
						Math.min(dailyXp, goal),
						"/",
						goal,
						" XP"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1 font-bold text-amber tabular-nums",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
						className: "h-5 w-5 fill-amber",
						"aria-hidden": true
					}), streak]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-1 font-bold text-bad tabular-nums",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "h-5 w-5 fill-bad",
						"aria-hidden": true
					}), hearts]
				})]
			})
		]
	});
}
function Learn({ note, onNote, onCompile }) {
	const courseId = useProgress((state) => state.courseId);
	const setCourse = useProgress((state) => state.setCourse);
	const completed = useProgress((state) => state.completed);
	const practiced = useProgress((state) => state.practiced);
	const course = getCourse(courseId) ?? getCourses()[0];
	const list = courseLessons(course);
	const done = list.filter((lesson) => completed[lesson.id]).length;
	const pendingPractice = list.filter((lesson) => completed[lesson.id] && practiceFor(lesson.id) && !practiced[lesson.id]).length;
	const rows = (0, import_react.useMemo)(() => {
		const built = [];
		let count = 0;
		course.units.forEach((unit, unitIndex) => {
			built.push({
				kind: "unit",
				title: unit.title,
				blurb: unit.blurb,
				index: unitIndex
			});
			unit.lessons.forEach((lesson) => {
				built.push({
					kind: "lesson",
					lesson,
					index: count
				});
				count += 1;
			});
		});
		return built;
	}, [course]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex gap-2 overflow-x-auto px-4 pb-2",
			children: getCourses().map((item) => {
				const Icon = ICONS[item.id];
				const active = item.id === course.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setCourse(item.id),
					className: cn("press inline-flex h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-bold", active ? "bg-primary text-on-primary" : "border-2 border-line bg-surface text-ink"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-4 w-4",
						"aria-hidden": true
					}), item.name]
				}, item.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "px-5 pt-2 text-sm text-muted",
			children: [
				done,
				" de ",
				list.length,
				" lições · ",
				course.tagline
			]
		}),
		note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-5 mt-3 rounded-2xl bg-amber-bg px-4 py-3 text-sm font-semibold",
			children: note
		}) : null,
		pendingPractice > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onCompile,
			className: "press mx-5 mt-3 block rounded-2xl bg-primary-soft px-4 py-3 text-left text-sm font-bold text-primary",
			children: pendingPractice === 1 ? "1 exercício à espera no Compilador" : `${pendingPractice} exercícios à espera no Compilador`
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-2 px-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-28 bottom-8 left-1/2 w-1 -translate-x-1/2 bg-line",
				"aria-hidden": true
			}), rows.map((row) => row.kind === "unit" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitBanner, {
				index: row.index,
				title: row.title,
				blurb: row.blurb
			}, row.title) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonNode, {
				course,
				lesson: row.lesson,
				index: row.index,
				onLocked: () => {
					onNote("Completa a lição anterior para abrir esta.");
					window.setTimeout(() => onNote(null), 2200);
				}
			}, row.lesson.id))]
		})
	] });
}
function UnitBanner({ index, title, blurb }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("mx-3 mt-4 rounded-3xl px-5 py-4 text-on-primary", index % 2 === 0 ? "bg-primary" : "bg-primary-deep"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-bold tracking-wide",
				children: ["Unidade ", index + 1]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-1 text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-on-primary/80",
				children: blurb
			})
		]
	});
}
function LessonNode({ course, lesson, index, onLocked }) {
	const completed = useProgress((state) => state.completed);
	const record = completed[lesson.id];
	const unlocked = isUnlocked(course, lesson.id, completed);
	const isCurrent = currentLesson(course, completed)?.id === lesson.id;
	const side = index % 2 === 0;
	const bubble = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("relative grid h-16 w-16 place-items-center rounded-full border-2", record && "border-primary bg-primary text-on-primary", isCurrent && "border-primary bg-surface text-primary pulse-ring", !record && !isCurrent && "border-line bg-surface text-muted"),
		children: [record ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-7 w-7" }) : isCurrent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-7 w-7" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-6 w-6" }), record?.perfect ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
			className: "absolute -top-1 -right-1 h-5 w-5 fill-amber text-amber",
			"aria-label": "Perfeita"
		}) : null]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative flex py-3", side ? "justify-start pl-6" : "justify-end pr-6"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-40 flex-col items-center gap-2",
			children: unlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/lesson/$courseId/$lessonId",
				params: {
					courseId: course.id,
					lessonId: lesson.id
				},
				className: "press flex flex-col items-center gap-2",
				children: [bubble, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm font-semibold leading-tight text-ink",
					children: lesson.title
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "press flex flex-col items-center gap-2",
				onClick: onLocked,
				"aria-label": `${lesson.title}, bloqueada`,
				children: [bubble, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm font-semibold leading-tight text-muted",
					children: lesson.title
				})]
			})
		})
	});
}
function ContinueBar({ courseId, onTrain }) {
	const completed = useProgress((state) => state.completed);
	const mistakes = useProgress((state) => state.mistakes);
	const course = getCourse(courseId);
	if (!course) return null;
	const next = currentLesson(course, completed);
	if (!next) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-16 z-20 px-4 pb-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => {
					const drills = sampleTrain(course.id, completed, mistakes);
					if (drills.length) onTrain(drills);
				},
				children: "Percurso feito · treinar"
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-16 z-20 px-4 pb-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/lesson/$courseId/$lessonId",
				params: {
					courseId: course.id,
					lessonId: next.id
				},
				className: "press flex h-14 w-full items-center justify-center rounded-2xl bg-primary px-5 text-lg font-bold text-on-primary",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate",
					children: ["Continuar · ", next.title]
				})
			})
		})
	});
}
function TrainHome({ onStart }) {
	const courseId = useProgress((state) => state.courseId);
	const completed = useProgress((state) => state.completed);
	const mistakes = useProgress((state) => state.mistakes);
	const course = getCourse(courseId);
	const lessonIds = new Set(course ? courseLessons(course).map((lesson) => lesson.id) : []);
	const due = mistakes.filter((key) => lessonIds.has(key.split("#")[0] ?? "")).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-5 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Treino"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-muted",
				children: "Cinco perguntas, sem perder vidas. No fim, as vidas voltam ao máximo. Os erros recentes aparecem primeiro."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-3xl bg-surface p-5 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold text-primary",
						children: course?.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-3xl",
						children: due > 0 ? `${due} para rever` : "Mistura livre"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Cada resposta certa vale 6 XP e conta para a sequência do dia."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-5",
						onClick: () => {
							if (!course) return;
							const drills = sampleTrain(course.id, completed, mistakes);
							if (drills.length) onStart(drills);
						},
						children: "Começar treino"
					})
				]
			})
		]
	});
}
function Profile() {
	const name = useProgress((state) => state.name);
	const xp = useProgress((state) => state.xp);
	const streak = useProgress((state) => state.streak);
	const bestStreak = useProgress((state) => state.bestStreak);
	const goal = useProgress((state) => state.goal);
	const completed = useProgress((state) => state.completed);
	const answered = useProgress((state) => state.answered);
	const correctAnswers = useProgress((state) => state.correctAnswers);
	const activeDays = useProgress((state) => state.activeDays);
	const setGoal = useProgress((state) => state.setGoal);
	const setName = useProgress((state) => state.setName);
	const setCourse = useProgress((state) => state.setCourse);
	const courseId = useProgress((state) => state.courseId);
	const [draft, setDraft] = (0, import_react.useState)(name);
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [confirm, setConfirm] = (0, import_react.useState)(false);
	const accuracy = answered ? Math.round(correctAnswers / answered * 100) : null;
	const days = Array.from({ length: 7 }, (_, index) => {
		const date = /* @__PURE__ */ new Date();
		date.setDate(date.getDate() - (6 - index));
		return {
			key: shiftKey(6 - index),
			label: WEEK[date.getDay()] ?? ""
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-5 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: bolt_default,
						alt: "",
						className: "h-16 w-16"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
							onSubmit: (event) => {
								event.preventDefault();
								if (draft.trim()) setName(draft);
								setEditing(false);
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: draft,
								onChange: (event) => setDraft(event.target.value.slice(0, 18)),
								className: "h-12 w-full rounded-2xl border-2 border-primary bg-surface px-3 text-lg font-bold outline-none",
								"aria-label": "O teu nome"
							})
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "truncate font-display text-3xl",
							children: name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: "SharpTech Academy"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "press grid h-11 w-11 place-items-center rounded-full bg-surface text-ink",
						"aria-label": editing ? "Guardar nome" : "Editar nome",
						onClick: () => {
							if (editing && draft.trim()) setName(draft);
							setEditing((value) => !value);
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-5 w-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						label: "XP",
						value: String(xp)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						label: "Sequência",
						value: String(streak)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						label: "Recorde",
						value: String(bestStreak)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-3xl bg-surface p-4 shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold",
					children: "Últimos 7 dias"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex justify-between",
					children: days.map((day) => {
						const on = activeDays.includes(day.key);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("grid h-9 w-9 place-items-center rounded-full text-xs font-bold", on ? "bg-primary text-on-primary" : "bg-bg text-muted"),
								children: day.label.slice(0, 1).toUpperCase()
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: day.label
							})]
						}, day.key);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-3xl bg-surface p-4 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold",
						children: "Meta diária"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-3 gap-2",
						children: [
							20,
							40,
							80
						].map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setGoal(value),
							className: cn("press h-12 rounded-2xl text-sm font-bold", goal === value ? "bg-primary text-on-primary" : "bg-bg text-ink"),
							children: [value, " XP"]
						}, value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							"Precisão ",
							accuracy === null ? "ainda sem respostas" : `${accuracy}%`,
							" · ",
							Object.keys(completed).length,
							" de ",
							lessonTotal,
							" lições"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-3",
				children: getCourses().map((course) => {
					const total = courseLessons(course).length;
					const count = courseLessons(course).filter((lesson) => completed[lesson.id]).length;
					const Icon = ICONS[course.id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setCourse(course.id),
						className: cn("press rounded-3xl border-2 bg-surface p-4 text-left", courseId === course.id ? "border-primary" : "border-transparent"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold",
									children: course.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted tabular-nums",
									children: [
										count,
										"/",
										total
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 h-2 overflow-hidden rounded-full bg-line",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-primary",
								style: { width: `${total ? count / total * 100 : 0}%` }
							})
						})]
					}, course.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setConfirm(true),
				className: "press mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-3xl text-sm font-bold text-bad",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Recomeçar progresso"]
			}),
			confirm ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 grid place-items-end bg-ink/40 p-4 sm:place-items-center",
				role: "dialog",
				"aria-modal": true,
				"aria-labelledby": "reset-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-sm rounded-3xl bg-surface p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "reset-title",
							className: "font-display text-2xl",
							children: "Apagar o progresso?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: "XP, sequência, vidas e lições feitas voltam ao início. O nome fica."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-5",
							variant: "deep",
							onClick: () => {
								useProgress.getState().resetProgress();
								setConfirm(false);
							},
							children: "Apagar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3",
							variant: "surface",
							onClick: () => setConfirm(false),
							children: "Cancelar"
						})
					]
				})
			}) : null
		]
	});
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface px-2 py-3 text-center shadow-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl tabular-nums",
			children: value
		})]
	});
}
function Onboarding() {
	const finish = useProgress((state) => state.finishOnboarding);
	const account = useCurrentUser();
	const [step, setStep] = (0, import_react.useState)(0);
	const [name, setName] = (0, import_react.useState)("");
	const [courseId, setCourseId] = (0, import_react.useState)("js");
	(0, import_react.useEffect)(() => {
		const suggested = account?.displayName?.trim().split(" ")[0];
		if (!suggested) return;
		setName((current) => current || suggested.slice(0, 18));
	}, [account]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex h-dvh max-w-lg flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex-1 overflow-y-auto px-5 pt-8",
			children: [
				step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: bolt_default,
						alt: "",
						className: "h-20 w-20"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm font-bold tracking-wide text-primary",
						children: "SharpTech Academy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-2 text-4xl",
						children: "Programar em lições curtas."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 grid gap-3 text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-2xl bg-surface px-4 py-4 shadow-card",
								children: "Um conceito de cada vez, como uma lição de línguas."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-2xl bg-surface px-4 py-4 shadow-card",
								children: "Verificas na hora e vês porque é que a resposta está certa."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-2xl bg-surface px-4 py-4 shadow-card",
								children: "Vidas, sequência e XP para voltares amanhã."
							})
						]
					})
				] }) : null,
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl",
						children: "Como te tratamos?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Só fica neste dispositivo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: name,
						onChange: (event) => setName(event.target.value.slice(0, 18)),
						placeholder: "O teu nome",
						className: "mt-6 h-14 w-full rounded-2xl border-2 border-line bg-surface px-4 text-lg outline-none focus:border-primary",
						"aria-label": "Nome"
					})
				] }) : null,
				step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl",
						children: "Por onde começas?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Podes mudar de percurso quando quiseres."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-3 pb-4",
						children: getCourses().map((course) => {
							const Icon = ICONS[course.id];
							const active = course.id === courseId;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setCourseId(course.id),
								className: cn("press flex items-center gap-3 rounded-3xl border-2 bg-surface px-4 py-4 text-left", active ? "border-primary" : "border-line"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-bold",
									children: course.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-muted",
									children: course.tagline
								})] })]
							}, course.id);
						})
					})
				] }) : null
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 pt-3 pb-5",
			children: [
				step === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setStep(1),
					children: "Começar"
				}) : null,
				step === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					disabled: !name.trim(),
					onClick: () => setStep(2),
					children: "Continuar"
				}) : null,
				step === 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => finish(name, courseId),
					children: "Entrar na academy"
				}) : null
			]
		})]
	});
}
function Home() {
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Splash, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Academy, {});
}
//#endregion
export { Home as component };
