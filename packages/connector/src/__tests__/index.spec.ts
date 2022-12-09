import * as MOS from '../index'

describe('Index', () => {
	test('ensure that types and enums are exposed', () => {
		let a: any
		// Type checks:
		a = (_: MOS.IMOSItem) => null
		a = (_: MOS.IMOSRunningOrder) => null
		a = (_: MOS.IMOSRunningOrderBase) => null
		a = (_: MOS.IMOSRunningOrderStatus) => null
		a = (_: MOS.IMOSStoryStatus) => null
		a = (_: MOS.IMOSItemStatus) => null
		a = (_: MOS.IMOSStoryAction) => null
		a = (_: MOS.IMOSROStory) => null
		a = (_: MOS.IMOSItemAction) => null
		a = (_: MOS.IMOSItem) => null
		a = (_: MOS.IMOSROAction) => null
		a = (_: MOS.IMOSROReadyToAir) => null
		a = (_: MOS.IMOSROFullStory) => null

		// @ts-expect-error types test
		a = (_: MOS.ThisDoesNotExist) => null
		if (a) a()

		expect(MOS.MosTime).toBeTruthy()
		expect(MOS.MosDuration).toBeTruthy()
		expect(MOS.MosString128).toBeTruthy()

		expect(MOS.IMOSObjectStatus).toBeTruthy()

		expect(MOS.IMOSScope).toBeTruthy()
		expect(MOS.IMOSScope.PLAYLIST).toBeTruthy()
	})
	test('ensure that helpers are exposed', () => {
		expect(MOS.Utils).toBeTruthy() // For backwards compatibility
		expect(typeof MOS.Utils.xml2js).toBe('function') // For backwards compatibility
		expect(MOS.MosModel.XMLMosItem.fromXML).toBeTruthy() // For backwards compatibility
		expect(MOS.MosModel.XMLMosItem.toXML).toBeTruthy() // For backwards compatibility
	})
})
