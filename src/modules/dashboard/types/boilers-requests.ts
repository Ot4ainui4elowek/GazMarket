export interface IBoilerPartsQuery {
	limit: number
	offset: number
	boiler?: string | undefined
	parts?: string | undefined
	priceFrom?: string | undefined
	priceTo?: string | undefined
}
