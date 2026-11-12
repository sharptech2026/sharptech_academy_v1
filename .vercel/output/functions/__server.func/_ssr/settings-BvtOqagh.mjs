import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Volume2, r as VolumeX } from "../_libs/lucide-react.mjs";
import { c as playTone, i as UserButton, l as previewSound, m as useProgress, s as cn } from "./splash-C3xWF-XY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-BvtOqagh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var THEMES = [
	{
		id: "claro",
		label: "Claro",
		detail: "Fundo limpo, azul vivo.",
		swatch: "swatch-claro"
	},
	{
		id: "noite",
		label: "Noite",
		detail: "Fundo escuro para praticar à noite.",
		swatch: "swatch-noite"
	},
	{
		id: "papel",
		label: "Papel",
		detail: "Tom quente, como um caderno.",
		swatch: "swatch-papel"
	}
];
function useApplyTheme() {
	const theme = useProgress((state) => state.theme);
	(0, import_react.useEffect)(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);
}
function SettingsPanel() {
	const theme = useProgress((state) => state.theme);
	const sound = useProgress((state) => state.sound);
	const setTheme = useProgress((state) => state.setTheme);
	const toggleSound = useProgress((state) => state.toggleSound);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-5 pt-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Definições"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "A conta, a aparência e o som ficam neste dispositivo."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 text-sm font-bold",
				children: "Conta"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 rounded-3xl bg-surface p-4 shadow-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 text-sm font-bold",
				children: "Aparência"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-3",
				children: THEMES.map((item) => {
					const active = theme === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTheme(item.id),
						"aria-pressed": active,
						className: cn("press flex items-center gap-4 rounded-3xl border-2 bg-surface p-4 text-left", active ? "border-primary" : "border-transparent"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("h-14 w-14 shrink-0 rounded-2xl border border-line", item.swatch),
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-bold",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-sm text-muted",
							children: item.detail
						})] })]
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 text-sm font-bold",
				children: "Som"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 rounded-3xl bg-surface p-4 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							const next = !useProgress.getState().sound;
							toggleSound();
							if (next) playTone("ok", true);
						},
						className: "press flex h-14 w-full items-center justify-between rounded-2xl bg-bg px-4 font-bold",
						"aria-pressed": sound,
						children: [sound ? "Som ligado" : "Som desligado", sound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-5 w-5 text-primary" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "h-5 w-5 text-muted" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Acertos, erros e toques das lições usam este som."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => previewSound(),
						className: "press mt-3 h-12 w-full rounded-2xl border-2 border-line text-sm font-bold",
						children: "Ouvir exemplo"
					})
				]
			})
		]
	});
}
//#endregion
export { useApplyTheme as n, SettingsPanel as t };
