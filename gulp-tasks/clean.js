/**
* Clean tasks
* ----------------
* Empties dist directory
*/

module.exports = function (base, paths, config, gulp, plugins, del) {
	return function () {
		del.sync([`${base.temp}/**`, `!${base.temp}`, `!${base.temp}/.gitkeep`, `${base.dist}/**`, `!${base.dist}`, `!${base.dist}/.gitkeep`]);
	};
};