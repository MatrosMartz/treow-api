import { afterEach, beforeEach, describe, it, expect, vi, Mock } from 'vitest'

import { createApp } from '~/test'
import { mockSpecies } from './test'

import speciesRouter from './infraestructure/specie.routes'
import { Repo } from './infraestructure'
import { SpecieEntity, SpecieRepo } from './domain'

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
let repo: Record<keyof SpecieRepo, Mock>

beforeEach(() => {
	repo = new Repo() as Record<keyof SpecieRepo, Mock>
})

afterEach(() => {
	vi.clearAllMocks()
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
	it('should be return the fisrt teen species', async () => {
		const species = mockSpecies(10)

		repo.list.mockResolvedValueOnce(species)

		const reply = await app.inject().get('/species?page.limit=10&page.start=0')

		expect(repo.list).toHaveBeenCalledTimes(1)
		expect(repo.list).toBeCalledWith({
			page: { start: 0, limit: 10 },
			filter: {},
			order: {},
		})

		expect(reply.statusCode).toBe(200)
		expect(reply.headers['content-type']).toMatch(/application\/json/)
		expect(reply.json<SpecieEntity[]>()).toEqual({
			data: species,
			pagination: {
				self: '/species?page.limit=10&page.start=0',
				next: '/species?page.limit=10&page.start=10',
			},
		})
	})
})
