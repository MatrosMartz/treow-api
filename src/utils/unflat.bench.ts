import { bench, describe } from 'vitest'
import { unflat, unflatV2 } from './unflat'
import { randomUUID } from 'crypto'

const notOverwrite1 = { a: 1, 'a.a': 'hola' }
const notOverwrite2 = { 'a.a': 1, a: 'hola' }

const simple = { 'a.a': 1, 'a.b': 2, 'b.a': 3 }

const intArray = new Int32Array(1_500_000_000)

const complex = {
	'a.a': 1,
	'a.b.a': 'hola',
	'a.b.b.a': false,
	'a.b.b.c': randomUUID(),
	'a.b.b.b.a': new Date(),
	'a.b.b.b.b.a': 'josejuan',
	['z' + '.z'.repeat(10_000)]: 'hola',
	['b' + '.b'.repeat(10_000)]: intArray,
}

const key = 'a' + '.a'.repeat(20)

const complex2 = {
	'a.a.a.b': false,
	[key + '.a']: 'haisk',
	[key + '.b']: 'ahi',
	[key + '.c']: 'ahquiq',
	[key + '.d']: 'aiqiq',
	[key + '.e']: 'majwms',
	[key + '.f']: 'aiqiqsknbyu',
	[key + '.g']: 19334,
	[key + '.h']: 'jaiqiq',
	[key + '.i']: 2982,
	[key + '.j']: 1882,
	[key + '.k']: 'iq sjjn',
	[key + '.l']: 'q8jqjsnnz',
	[key + '.m']: 23812,
	[key + '.n']: 'auijqmq',
	[key + '.o']: 917283,
	[key + '.p']: 'ajqi',
	[key + '.q']: 183893,
	[key + '.r']: 'auqqi',
	[key + '.2']: 'uqiqi',
	[key + '.ajq']: true,
	[key + '.ajiq']: 'jaqiqqmma',
	[key + '.aqiqi']: 'aqiqkq',
}

describe('not overwrite 1', () => {
	bench('unflat V1', () => {
		unflat(notOverwrite1)
	})
	bench('unflat V2', () => {
		unflatV2({ target: notOverwrite1 })
	})
})

describe('not overwrite 2', () => {
	bench('unflat V1', () => {
		unflat(notOverwrite2)
	})
	bench('unflat V2', () => {
		unflatV2({ target: notOverwrite2 })
	})
})

describe('simple', () => {
	bench('unflat V1', () => {
		unflat(simple)
	})
	bench('unflat V2', () => {
		unflatV2({ target: simple })
	})
})

describe('complex', () => {
	bench('unflat V1', () => {
		unflat(complex)
	})
	bench('unflat V2', () => {
		unflatV2({ target: complex })
	})
})

describe('complex 2', () => {
	bench('unflat V1', () => {
		unflat(complex2)
	})
	bench('unflat V2', () => {
		unflatV2({ target: complex2 })
	})
})
