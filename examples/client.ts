import {
	MosConnection,
	ConnectionConfig,
	IMOSROAck,
	IMOSROReadyToAir,
	IMOSRunningOrder,
	IMOSStoryAction,
	IMOSROStory,
	IMOSListMachInfo,
	IMOSROAction,
} from '../src'

import { MosString128 } from '../src/dataTypes/mosString128'
import { MosTime } from '../src/dataTypes/mosTime'
import { MosDevice } from '../src/MosDevice'
const mos = new MosConnection(
	new ConnectionConfig({
		mosID: 'sofie.tv.automation',
		acceptsConnections: true,
		profiles: {
			'0': true,
			'1': true,
		},
		openRelay: true,
		// debug: true
	})
)
mos.on('rawMessage', (_source, _type, _message) => {
	// console.log('rawMessage', _source, _type, _message)
})
mos.on('error', (e) => {
	console.log('Emit error', e)
})
mos.onConnection((dev: MosDevice) => {
	console.log('new mosDevice: ', dev.idPrimary, dev.idSecondary)
	// console.log(dev)
	if (dev.hasConnection) {
		dev.getMachineInfo()
			.then((_lm) => {
				// console.log('Machineinfo', _lm)
			})
			.then(() => {
				return dev.getAllRunningOrders()
			})
			.then((ros) => {
				console.log('allRunningOrders', ros)

				// trigger a re-send of those running orders:
				// return dev.getRunningOrder(new MosString128('696297DF-1568-4B36-B43B3B79514B40D4'))
				return Promise.all(
					ros.map((ro) => {
						return dev.getRunningOrder(ro.ID)
					})
				)
			})
			.then((roLists) => {
				console.log('roLists', roLists)
			})
			.catch((e) => {
				console.log('ERROR', e)
			})
	}

	dev.onRequestMachineInfo(() => {
		return new Promise((resolve) => {
			const m: IMOSListMachInfo = {
				manufacturer: new MosString128('mommy'),
				model: new MosString128('model!'),
				hwRev: new MosString128('0.1'),
				swRev: new MosString128('1.0'),
				DOM: new MosTime('1989-07-01'),
				SN: new MosString128('1234'),
				ID: new MosString128('MY ID YO'),
				time: new MosTime(Date.now()),
				// opTime?: new MosTime(),
				mosRev: new MosString128('A'),

				supportedProfiles: {
					deviceType: 'MOS',
					profile0: true,
				},
			}
			// console.log('onRequestMachineInfo', m)
			resolve(m)
		})
	})
	dev.onReadyToAir((Action: IMOSROReadyToAir): Promise<IMOSROAck> => {
		console.log('dev.onReadyToAir')
		return new Promise((resolve) => {
			resolve({
				ID: Action.ID,
				Status: new MosString128('OK'),
				Stories: [],
			})
		})
	})

	dev.onCreateRunningOrder((ro: IMOSRunningOrder) => {
		return new Promise((resolve) => {
			console.log('onCreateRunningOrder', ro)
			resolve({
				ID: ro.ID,
				Status: new MosString128('OK'),
				Stories: [],
			})
		})
	})

	dev.onDeleteRunningOrder((RunningOrderID: MosString128) => {
		return new Promise((resolve) => {
			console.log('onDeleteRunningOrder', RunningOrderID)
			resolve({
				ID: RunningOrderID,
				Status: new MosString128('OK'),
				Stories: [],
			})
		})
	})

	dev.onROInsertStories((Action: IMOSStoryAction, Stories: Array<IMOSROStory>): Promise<IMOSROAck> => {
		return new Promise((resolve) => {
			console.log('onROInsertStories')
			Stories.forEach((story) => {
				console.log(story)
			})
			resolve({
				ID: Action.StoryID,
				Status: new MosString128('OK'),
				Stories: [],
			})
		})
	})

	dev.onROMoveStories((Action: IMOSStoryAction, Stories: Array<MosString128>): Promise<IMOSROAck> => {
		return new Promise((resolve) => {
			console.log('onROMoveStories', {
				ID: Action.StoryID,
				Status: 'OK',
				Stories: Stories,
			})
			resolve({
				ID: Action.StoryID,
				Status: new MosString128('OK'),
				Stories: [],
			})
		})
	})

	dev.onRODeleteStories((Action: IMOSROAction, Stories: Array<MosString128>): Promise<IMOSROAck> => {
		return new Promise((resolve) => {
			console.log('onRODeleteStories', Action, {
				ID: Action.RunningOrderID,
				Status: 'OK',
				Stories: Stories,
			})
			resolve({
				ID: Action.RunningOrderID,
				Status: new MosString128('OK'),
				Stories: [],
			})
		})
	})
})

mos.init()
	.then((_listening) => {
		return mos.connect({
			primary: {
				id: '2012R2ENPS8VM',
				host: '10.0.1.244',
				timeout: 100000,
			},
		})
	})
	.catch((e) => {
		console.log(e)
	})
// let mosdev = mos.connect({
// 	primary: {
// 		id: 'test2.enps.mos',
// 		host: '10.0.1.74',
// 		timeout: 5000
// 	}
// })
