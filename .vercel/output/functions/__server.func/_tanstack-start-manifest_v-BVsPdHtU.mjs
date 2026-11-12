//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-BVsPdHtU.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/login",
			"/api/auth/$",
			"/lesson/$courseId/$lessonId"
		],
		preloads: ["/assets/index-hDQG45sE.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-hDQG45sE.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-DM6zCvSa.js",
			"/assets/player-BXmzF0bv.js",
			"/assets/settings-DJY9Ugjp.js",
			"/assets/splash-DE2OnJWP.js"
		]
	},
	"/login": {
		filePath: "/workspace/src/routes/login.tsx",
		children: void 0,
		preloads: [
			"/assets/login-BQ9KuOnu.js",
			"/assets/settings-DJY9Ugjp.js",
			"/assets/splash-DE2OnJWP.js"
		]
	},
	"/lesson/$courseId/$lessonId": {
		filePath: "/workspace/src/routes/lesson/$courseId/$lessonId.tsx",
		children: void 0,
		preloads: [
			"/assets/_lessonId-IKT1vwTp.js",
			"/assets/player-BXmzF0bv.js",
			"/assets/splash-DE2OnJWP.js"
		]
	}
} });
//#endregion
export { tsrStartManifest };
