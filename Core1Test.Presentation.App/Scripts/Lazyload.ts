/// <reference path="../bower_components/DefinitelyTyped/requirejs/require.d.ts" />
/// <reference path="../Lib/DefinitelyTyped/Typed.d.ts" />

define(() => {
	var Lazyload = <Typed.ILazyload>{};

	Lazyload.Set = (object: {}) => {
		var prop: string;
		for (prop in object) Lazyload[prop] = object[prop];
	};

	return Lazyload;
});
