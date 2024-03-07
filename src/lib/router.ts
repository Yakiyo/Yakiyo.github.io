import Home from "../routes/Home.svelte"
import E404 from "../routes/404.svelte"

export const routes = {
    // Exact path
    '/': Home,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': E404,
}