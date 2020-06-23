import { serve } from "https://deno.land/std@0.58.0/http/server.ts";
const s = serve({ port: 4500 });
console.log("Server Run http://localhost:4500/");
for await (const req of s) {
    req.respond({ body: "Hello World\n" });
}