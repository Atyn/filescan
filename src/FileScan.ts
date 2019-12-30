import Path from 'path'
import Fs from 'fs'

module.exports = {
	scanDirectory(
		path: string,
		filterFunction: () => boolean
	): Promise<string[]> {
		return scanDirectory(path, filterFunction)
	},
}

async function scanDirectory(
	path: string,
	filterFunction: (string) => boolean = (): boolean => true
): Promise<string[]> {
	const list = await Fs.promises.readdir(path)
	const directories = list
		.map(file => Path.join(path, file))
		.filter(p => isDirectory(p))
		.filter(p => filterFunction(p))
	const files = list
		.map(file => Path.join(path, file))
		.filter(p => !isDirectory(p))
	const results = await Promise.all(
		directories.map(p => scanDirectory(p, filterFunction))
	)
	return Array.prototype.concat(files, ...results)
}

function isDirectory(path): boolean {
	const stats = Fs.statSync(path)
	return stats.isDirectory()
}
