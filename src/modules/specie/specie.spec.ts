import { afterEach, beforeEach, describe, it, expect, vi, Mock } from 'vitest'

import { createApp } from '~/test'
import { mockSpecies } from './test'

import speciesRouter from './infraestructure/specie.routes'
import { Repo } from './infraestructure'
import { SpecieRepo } from './domain'
import { StatusCodes } from '~/types'

vi.mock('./infraestructure/repositorys', () => {
	const MockRepo = vi.fn()

	MockRepo.prototype.delete = vi.fn()
	MockRepo.prototype.create = vi.fn()
	MockRepo.prototype.find = vi.fn()
	MockRepo.prototype.list = vi.fn()
	MockRepo.prototype.replace = vi.fn()
	MockRepo.prototype.update = vi.fn()

	return { default: MockRepo }
})

const app = await createApp({
	plugin: speciesRouter,
	opts: { prefix: 'species' },
})

describe('Species Router', () => {
	it('should be function', () => {
		expect(speciesRouter).toBeTypeOf('function')
	})
})

describe('List Species', () => {
	let repo: Record<keyof SpecieRepo, Mock>

	beforeEach(() => {
		repo = new Repo() as Record<keyof SpecieRepo, Mock>
	})

	afterEach(() => {
		vi.clearAllMocks()
	})

	it('should be return the fisrt teen species', async () => {
		const species = mockSpecies(10)

		repo.list.mockResolvedValueOnce(species)

		const reply = await app.inject().get('/species?page.limit=10&page.offset=0')

		expect(repo.list).toHaveBeenCalledTimes(1)
		expect(repo.list).toBeCalledWith({
			page: { offset: 0, limit: 10 },
			filter: {},
			order: {},
		})

		expect(reply.statusCode).toBe(StatusCodes.OK)
		expect(reply.headers['content-type']).toMatch(/json/)
		expect(reply.json()).toEqual({
			statusCode: StatusCodes.OK,
			data: species,
			pagination: {
				self: '/species?page.limit=10&page.offset=0',
				next: '/species?page.limit=10&page.offset=10',
			},
		})
	})

	it('should be throw if offset less than zero', async () => {
		const reply = await app
			.inject()
			.get('/species?page.limit=30&page.offset=-10')

		expect(repo.list).not.toHaveBeenCalled()

		expect(reply.statusCode).toBe(StatusCodes.NOT_FOUND)
		expect(reply.headers['content-type']).toMatch(/json/)
	})
})
