import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { IBoilerParts } from '../../../../../modules/dashboard/types/boiler-parts'
import { AppRequestStatus } from '../../../../../shared/constants/requestsStatus'

export interface ICartState {
	status: AppRequestStatus
	items: IBoilerParts[]
	totalPrice: number
}

const boilerParts: IBoilerParts[] = [
	{
		id: 1,
		boiler_manufacturer: 'Vaillant',
		price: '120.50',
		parts_manufacturer: 'Vaillant Original',
		vendor_code: 'VAI-001',
		name: 'Теплообменник',
		description: 'Основной теплообменник для газовых котлов Vaillant.',
		compatibility: 'Совместим с моделями Vaillant ecoTEC.',
		images:
			'https://www.airtro.com/wp-content/uploads/2021/01/furnaces-and-boilers-scaled.jpeg',
		in_stock: 12,
		bestseller: true,
		new: false,
		popularity: 87,
		createdAt: '2025-09-01T10:00:00Z',
		updatedAt: '2025-09-10T15:30:00Z',
	},
	{
		id: 2,
		boiler_manufacturer: 'Baxi',
		price: '45.00',
		parts_manufacturer: 'Baxi Spare Parts',
		vendor_code: 'BAX-014',
		name: 'Насос циркуляционный',
		description: 'Циркуляционный насос для настенных котлов Baxi.',
		compatibility: 'Подходит для серий Luna и Eco.',
		images:
			'https://www.airtro.com/wp-content/uploads/2021/01/furnaces-and-boilers-scaled.jpeg',
		in_stock: 5,
		bestseller: false,
		new: true,
		popularity: 65,
		createdAt: '2025-08-28T08:20:00Z',
		updatedAt: '2025-09-12T11:45:00Z',
	},
	{
		id: 3,
		boiler_manufacturer: 'Ariston',
		price: '32.90',
		parts_manufacturer: 'Ariston',
		vendor_code: 'ARI-076',
		name: 'Датчик температуры',
		description: 'Датчик температуры для котлов Ariston.',
		compatibility: 'Совместим с моделями Genus и Clas.',
		images:
			'https://www.airtro.com/wp-content/uploads/2021/01/furnaces-and-boilers-scaled.jpeg',
		in_stock: 20,
		bestseller: true,
		new: true,
		popularity: 92,
		createdAt: '2025-09-05T09:10:00Z',
		updatedAt: '2025-09-15T16:50:00Z',
	},
	{
		id: 4,
		boiler_manufacturer: 'Bosch',
		price: '89.75',
		parts_manufacturer: 'Bosch Thermotechnik',
		vendor_code: 'BOS-022',
		name: 'Газовый клапан',
		description: 'Оригинальный газовый клапан для котлов Bosch.',
		compatibility: 'Подходит для моделей Bosch Gaz 6000.',
		images:
			'https://www.airtro.com/wp-content/uploads/2021/01/furnaces-and-boilers-scaled.jpeg',
		in_stock: 8,
		bestseller: false,
		new: false,
		popularity: 71,
		createdAt: '2025-09-02T14:40:00Z',
		updatedAt: '2025-09-20T19:00:00Z',
	},
	{
		id: 5,
		boiler_manufacturer: 'Protherm',
		price: '15.25',
		parts_manufacturer: 'Protherm',
		vendor_code: 'PRO-055',
		name: 'Прокладка теплообменника',
		description: 'Комплект прокладок для теплообменника котлов Protherm.',
		compatibility: 'Для моделей Panther и Gepard.',
		images:
			'https://www.airtro.com/wp-content/uploads/2021/01/furnaces-and-boilers-scaled.jpeg',
		in_stock: 30,
		bestseller: true,
		new: false,
		popularity: 99,
		createdAt: '2025-09-07T12:00:00Z',
		updatedAt: '2025-09-22T18:10:00Z',
	},
	{
		id: 6,
		boiler_manufacturer: 'Protherm',
		price: '15.25',
		parts_manufacturer: 'Protherm',
		vendor_code: 'PRO-055',
		name: 'Прокладка теплообменника',
		description: 'Комплект прокладок для теплообменника котлов Protherm.',
		compatibility: 'Для моделей Panther и Gepard.',
		images:
			'https://www.airtro.com/wp-content/uploads/2021/01/furnaces-and-boilers-scaled.jpeg',
		in_stock: 30,
		bestseller: true,
		new: false,
		popularity: 99,
		createdAt: '2025-09-07T12:00:00Z',
		updatedAt: '2025-09-22T18:10:00Z',
	},
	{
		id: 7,
		boiler_manufacturer: 'Protherm',
		price: '15.25',
		parts_manufacturer: 'Protherm',
		vendor_code: 'PRO-055',
		name: 'Прокладка теплообменника',
		description: 'Комплект прокладок для теплообменника котлов Protherm.',
		compatibility: 'Для моделей Panther и Gepard.',
		images:
			'https://www.airtro.com/wp-content/uploads/2021/01/furnaces-and-boilers-scaled.jpeg',
		in_stock: 30,
		bestseller: true,
		new: false,
		popularity: 99,
		createdAt: '2025-09-07T12:00:00Z',
		updatedAt: '2025-09-22T18:10:00Z',
	},
	{
		id: 8,
		boiler_manufacturer: 'Protherm',
		price: '15.25',
		parts_manufacturer: 'Protherm',
		vendor_code: 'PRO-055',
		name: 'Прокладка теплообменника',
		description: 'Комплект прокладок для теплообменника котлов Protherm.',
		compatibility: 'Для моделей Panther и Gepard.',
		images:
			'https://www.airtro.com/wp-content/uploads/2021/01/furnaces-and-boilers-scaled.jpeg',
		in_stock: 30,
		bestseller: true,
		new: false,
		popularity: 99,
		createdAt: '2025-09-07T12:00:00Z',
		updatedAt: '2025-09-22T18:10:00Z',
	},
	{
		id: 9,
		boiler_manufacturer: 'Protherm',
		price: '15.25',
		parts_manufacturer: 'Protherm',
		vendor_code: 'PRO-055',
		name: 'Прокладка теплообменника',
		description: 'Комплект прокладок для теплообменника котлов Protherm.',
		compatibility: 'Для моделей Panther и Gepard.',
		images:
			'https://www.airtro.com/wp-content/uploads/2021/01/furnaces-and-boilers-scaled.jpeg',
		in_stock: 30,
		bestseller: true,
		new: false,
		popularity: 99,
		createdAt: '2025-09-07T12:00:00Z',
		updatedAt: '2025-09-22T18:10:00Z',
	},
	{
		id: 10,
		boiler_manufacturer: 'Protherm',
		price: '15.25',
		parts_manufacturer: 'Protherm',
		vendor_code: 'PRO-055',
		name: 'Прокладка теплообменника',
		description: 'Комплект прокладок для теплообменника котлов Protherm.',
		compatibility: 'Для моделей Panther и Gepard.',
		images:
			'https://www.airtro.com/wp-content/uploads/2021/01/furnaces-and-boilers-scaled.jpeg',
		in_stock: 30,
		bestseller: true,
		new: false,
		popularity: 99,
		createdAt: '2025-09-07T12:00:00Z',
		updatedAt: '2025-09-22T18:10:00Z',
	},
]

const initialState: ICartState = {
	status: AppRequestStatus.default,
	items: boilerParts,
	totalPrice: 0,
}

export const cartReducer = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IBoilerParts>) => {
			state.items.push(action.payload)
			state.totalPrice += Number(action.payload.price)
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			const index = state.items.findIndex(item => item.id === action.payload)
			if (index !== -1) {
				state.totalPrice -= Number(state.items[index].price)
				state.items.splice(index, 1)
			}
		},
		clearCart: state => {
			state.items = []
			state.totalPrice = 0
		},
		calculateTtotalPrice: state => {
			state.totalPrice = state.items.reduce(
				(total, item) => total + Number(item.price),
				0
			)
		},
	},
})
export const { addToCart, removeFromCart, clearCart, calculateTtotalPrice } =
	cartReducer.actions

export default cartReducer.reducer
