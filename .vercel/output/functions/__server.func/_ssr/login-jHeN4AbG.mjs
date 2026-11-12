import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Navigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as GROK_PROVIDERS } from "./router-BdIfNVAf.mjs";
import { a as authClient, d as signIn, o as bolt_default, p as useCurrentUserState, r as Splash, t as Button } from "./splash-C3xWF-XY.mjs";
import { n as useApplyTheme } from "./settings-BvtOqagh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-jHeN4AbG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	useApplyTheme();
	const { user, isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Splash, {});
	if (user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, { to: "/" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Login, {});
}
function Login() {
	const [mode, setMode] = (0, import_react.useState)("in");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(event) {
		event.preventDefault();
		setError(null);
		if (password.length < 8) {
			setError("A palavra-passe precisa de pelo menos 8 caracteres.");
			return;
		}
		setBusy(true);
		const result = mode === "up" ? await authClient.signUp.email({
			email: email.trim(),
			password,
			name: name.trim() || email.trim().split("@")[0] || "Aluno",
			callbackURL: "/"
		}) : await authClient.signIn.email({
			email: email.trim(),
			password,
			callbackURL: "/"
		});
		if (result.error) {
			setBusy(false);
			setError(messageFor(result.error.message, mode));
			return;
		}
		window.location.assign("/");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-5 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: bolt_default,
				alt: "",
				className: "h-16 w-16"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm font-bold tracking-wide text-primary",
				children: "SharpTech Academy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-2 text-4xl",
				children: mode === "in" ? "Entra na tua conta." : "Cria a tua conta."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "O percurso, o XP e a sequência ficam ligados a ti."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-6 grid gap-3",
					children: [
						mode === "up" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm font-bold",
							children: ["Nome", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (event) => setName(event.target.value.slice(0, 40)),
								autoComplete: "name",
								className: "h-14 rounded-2xl border-2 border-line bg-surface px-4 text-base font-medium outline-none focus:border-primary"
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm font-bold",
							children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								required: true,
								value: email,
								onChange: (event) => setEmail(event.target.value),
								autoComplete: "email",
								className: "h-14 rounded-2xl border-2 border-line bg-surface px-4 text-base font-medium outline-none focus:border-primary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid gap-1 text-sm font-bold",
							children: ["Palavra-passe", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								required: true,
								value: password,
								onChange: (event) => setPassword(event.target.value),
								autoComplete: mode === "up" ? "new-password" : "current-password",
								className: "h-14 rounded-2xl border-2 border-line bg-surface px-4 text-base font-medium outline-none focus:border-primary"
							})]
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-2xl bg-bad-bg px-4 py-3 text-sm font-semibold text-bad",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							children: busy ? "A entrar..." : mode === "in" ? "Entrar" : "Criar conta"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "press mt-3 h-12 text-sm font-bold text-primary",
					onClick: () => {
						setMode((value) => value === "in" ? "up" : "in");
						setError(null);
					},
					children: mode === "in" ? "Ainda não tenho conta" : "Já tenho conta"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-5 flex items-center gap-3 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-line" }),
						"ou",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-line" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3",
					children: GROK_PROVIDERS.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "surface",
						onClick: () => {
							signIn(provider.providerId, { callbackURL: "/" }).catch((reason) => {
								setError(reason instanceof Error ? reason.message : "Não foi possível entrar.");
							});
						},
						children: ["Continuar com ", provider.label]
					}, provider.providerId))
				})
			] })
		]
	});
}
function messageFor(raw, mode) {
	const text = (raw ?? "").toLowerCase();
	if (text.includes("invalid") || text.includes("password") || text.includes("credential")) return mode === "in" ? "Email ou palavra-passe incorretos." : "Não foi possível criar a conta. Confirma o email.";
	if (text.includes("exist")) return "Já existe uma conta com este email.";
	return raw || "Não foi possível entrar.";
}
//#endregion
export { LoginPage as component };
