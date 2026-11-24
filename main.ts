import { writeFileSync, mkdirSync } from "node:fs";

// Output contract: exactly one line, 1-240 chars, no trailing newline —
// the gate scores /output/entry.txt as UTF-8 text, so write the line verbatim.
const LINE = "At seventy-two, she finished the quilt her mother started in 1962, and laid it on her granddaughter's bed.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
