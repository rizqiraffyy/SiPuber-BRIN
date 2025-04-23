(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/map-leaflet.tsx [app-client] (ecmascript, next/dynamic entry, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_b6fa4529._.js",
  "static/chunks/components_map-leaflet_tsx_d8c5ba71._.js",
  {
    "path": "static/chunks/node_modules_leaflet_dist_leaflet_88e19fd3.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)"
    ]
  },
  "static/chunks/components_map-leaflet_tsx_afc847a2._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/components/map-leaflet.tsx [app-client] (ecmascript, next/dynamic entry)");
    });
});
}}),
}]);