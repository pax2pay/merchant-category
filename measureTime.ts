export function measureTime<A, R>(func: (arg?: A) => R, thisArg: any, arg?: A): R {
	const start = Date.now()
	const result = func.bind(thisArg)(arg)
	const end = Date.now()
	console.log(`${func.name} ${end - start} ms`)
	return result
}
