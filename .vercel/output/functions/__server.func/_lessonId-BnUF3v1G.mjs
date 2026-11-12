import { C as require_jsx_runtime, x as useNavigate, y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-BdIfNVAf.mjs";
import { h as useStoreHydrated, m as useProgress, n as RedirectToSignIn, p as useCurrentUserState, r as Splash } from "./_ssr/splash-C3xWF-XY.mjs";
import { c as lessonDrills, i as findLesson, s as isUnlocked, t as Player } from "./_ssr/player-QcbL7s2Z.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_lessonId-BnUF3v1G.js
var import_jsx_runtime = require_jsx_runtime();
function LessonPage() {
	const { courseId, lessonId } = Route.useParams();
	const navigate = useNavigate();
	const ready = useStoreHydrated();
	const { user, isPending } = useCurrentUserState();
	const completed = useProgress((state) => state.completed);
	const found = findLesson(lessonId);
	if (!ready || isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Splash, {});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RedirectToSignIn, {});
	if (!found || found.course.id !== courseId) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Lição não encontrada"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Este caminho não existe no percurso."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "press mt-6 flex h-14 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-on-primary",
				children: "Voltar"
			})
		]
	});
	if (!isUnlocked(found.course, found.lesson.id, completed)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Ainda fechada"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Completa a lição anterior para abrir esta."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "press mt-6 flex h-14 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-on-primary",
				children: "Ver o percurso"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Player, {
		title: `${found.course.name} · ${found.lesson.title}`,
		drills: lessonDrills(found.course.id, found.lesson),
		costHeart: true,
		onExit: () => {
			navigate({ to: "/" });
		},
		onComplete: (stats) => useProgress.getState().completeLesson(found.lesson.id, stats.correct, stats.total)
	});
}
//#endregion
export { LessonPage as component };
