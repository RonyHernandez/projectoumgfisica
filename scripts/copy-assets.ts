import minimist from 'minimist';
import shell from 'shelljs';

const argv = minimist(process.argv.slice(2));
const folder: string = argv.subfolder ? argv.subfolder + '/' : '';

shell.rm('-rf', 'public/200.html'); // we need to delete this file to create the build of react-snap
shell.rm('-rf', `public/${folder}`);
shell.mkdir('-p', `public/${folder}`);
shell.cp('-R', 'src/static/api/', `public/${folder}api/`);
shell.cp('-R', 'src/static/css/', `public/${folder}css/`);
shell.cp('-R', 'src/static/img/', `public/${folder}img/`);
shell.cp('-R', 'src/static/web.config', 'public/');
shell.cp('-R', 'src/static/robots.txt', 'public/');
shell.cp('-R', 'src/static/sitemap.xml', 'public/');

// console.log(Object.keys(shell));
