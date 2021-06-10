// remix uses esbuild, which tries to statically confirm that all your
// dependencies are installed.
//
// pg-native is loaded conditionally (and in our case, never), but esbuild
// can't determine that.
//
// Instead, put this stub on the file system to pass the esbuild check.
throw new Error('pg-native is not installed; this is a hack for esbuild');
