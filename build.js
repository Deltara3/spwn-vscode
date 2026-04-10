const fs = require("fs");
const yaml = require("js-yaml");

function loadYaml(path) {
    const raw = fs.readFileSync(`./syntaxes/src/${path}`, "utf-8")
    return yaml.load(raw)
}

const root = loadYaml("../index.yml")
const files = root.includes;
delete root.includes;

for (const include of files) {
    const src = loadYaml(`${include}.yml`);
    Object.assign(root.repository, src.repository);
}

const converted = JSON.stringify(root, null, 4);
fs.writeFileSync("./syntaxes/spwn.tmLanguage.json", converted)