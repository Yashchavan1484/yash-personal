const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('./src');
const regex = /["'](@?[a-zA-Z0-9_\-\./]+)@\d+\.\d+\.\d+([a-zA-Z0-9\-\.]*)["']/g;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content.replace(regex, '"$1"');
    if (content !== newContent) {
        fs.readFileSync(file, 'utf8'); // dummy read
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Fixed: ${file}`);
    }
});
console.log('All imports fixed successfully!');