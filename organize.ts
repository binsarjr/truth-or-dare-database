import { Glob } from "bun";

const dbPahts = new Glob("./database/**/*.txt");

for await (const filepath of dbPahts.scan(".")) {
	const file = Bun.file(filepath);
	const content = await file.text();
	let lines = content.split("\n");
	lines = lines.map((line) => line.trim());
	lines = [...new Set(lines)];
	Bun.write(filepath, lines.join("\n"));
}
