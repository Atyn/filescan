# filescan

Search for files

# Example

```javascript
const FileScan = require('path-scanner')
const Path = require('path')

const scannedPath = '../'

FileScan.scanDirectory(
	// Path to scan
	scannedPath,
	// Function that can prevent scan in some directories
	directory => {
		if (directory.includes('node_modules')) {
			return false
		}
		return true
	}
).then(files => {
	const jsFiles = files
		// Filter the results on certain file extension e.g. (optional)
		.filter(filePath => /\**\.js$/.test(filePath))
		// Resolve path to get absolute path (optional)
		.map(filePath => Path.resolve(scannedPath, filePath))
	console.log(jsFiles)
})
```
