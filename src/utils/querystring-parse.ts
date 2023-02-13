import qs, { ParsedQs } from 'qs'

const querystringParser = (querystring: string): ParsedQs =>
	qs.parse(
		querystring
			.replace(/(?<=filter.+status.*=)\w+/, str => str.toUpperCase())
			.replace(/(?<=order.+(alphabetic|danger).*=)\w+/g, str =>
				str.toLowerCase()
			),
		{ allowDots: true, comma: true }
	)

export { querystringParser }
