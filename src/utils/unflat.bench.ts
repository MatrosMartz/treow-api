import { bench, describe } from 'vitest'
import { unflat } from './unflat'
import { randomUUID } from 'crypto'

describe('benchmarck', () => {
	bench('unflat', () => {
		unflat({
			'a.a': 1,
			'a.b.a': 'hola',
			'a.b.b.a': false,
			'a.b.b.c': randomUUID(),
			'a.b.b.b.a': new Date(),
			'a.b.b.b.b.a': 'josejuan',
			'z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z.z':
				'hola',
			'b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b': new Int32Array(
				1_518_510_000
			),
		})
	})
})
