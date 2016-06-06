import * as nbind from 'nbind';

nbind.init(__dirname, (err: any, binding: nbind.Binding<any>) => {
	if(err) throw(err);

	const lib = binding.lib;

	console.log('Platform: ' + lib.Example.test());
});
