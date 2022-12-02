import { IProfiles } from './config/connectionConfig'
import { MosTime } from './dataTypes/mosTime'
import { MosDuration as MosDurationDataType } from './dataTypes/mosDuration'
import { MosString128 } from './dataTypes/mosString128'
import { IMOSExternalMetaData } from './dataTypes/mosExternalMetaData'
import { IMOSListMachInfo } from './mosModel'
import { MosDevice } from './MosDevice'

/*
	This file defines the API for the MOS-connection.
	Most of these interfaces are derived from the MOS protocol.
	http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm
*/
export interface IMosConnection {
	readonly isListening: boolean

	readonly acceptsConnections: boolean
	readonly profiles: IProfiles
	readonly isCompliant: boolean
	readonly complianceText: string

	dispose: () => Promise<void>
	/*  */
	connect: (connectionOptions: IMOSDeviceConnectionOptions) => Promise<MosDevice> // resolved when connection has been made (before .onConnection is fired)
	onConnection: (cb: (mosDevice: MosDevice) => void) => void

	on(event: 'error', listener: (error: Error) => void): this
	on(event: 'info', listener: (message: string, data?: any) => void): this
	on(event: 'rawMessage', listener: (source: string, type: string, message: string) => void): this
}

export interface IMOSDevice
	extends IMOSDeviceProfile0,
		IMOSDeviceProfile1,
		IMOSDeviceProfile2,
		IMOSDeviceProfile3,
		IMOSDeviceProfile4 {
	idPrimary: string // unique id for this device and session
	idSecondary: string | null // unique id for this device and session (buddy)
}
/**
 * Method definitions for Profile 1
 * see http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#Profile1
 */
export interface IMOSDeviceProfile0 {
	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * The reqMachInfo message is a method for an NCS or MOS to determine more information about its counterpart.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#reqMachInfo
	 */
	requestMachineInfo: () => Promise<IMOSListMachInfo>
	/**
	 * Send message (as NCS) to a MOS device:
	 * The reqMachInfo message is a method for an NCS or MOS to determine more information about its counterpart.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#reqMachInfo
	 */
	onRequestMachineInfo: (cb: () => Promise<IMOSListMachInfo>) => void

	/** Assign callback for when the connection status changes. */
	onConnectionChange: (cb: (connectionStatus: IMOSConnectionStatus) => void) => void
	/** Get the current connection status */
	getConnectionStatus: () => IMOSConnectionStatus

	// Deprecated methods:
	/** @deprecated getMachineInfo is deprecated, use requestMachineInfo instead */
	getMachineInfo: () => Promise<IMOSListMachInfo>
	/** @deprecated onGetMachineInfo is deprecated, use onRequestMachineInfo instead */
	onGetMachineInfo: (cb: () => Promise<IMOSListMachInfo>) => void
}
/**
 * Method definitions for Profile 1
 * see http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#Profile1
 */
export interface IMOSDeviceProfile1 {
	/**
	 * Contains information that describes a unique MOS Object to the NCS.
	 * The NCS uses this information to search for and reference the MOS Object.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosObj
	 */
	sendMOSObject(obj: IMOSObject): Promise<IMOSAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Message used by the NCS to request the description of an object.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosReqObj
	 */
	onRequestMOSObject: (cb: (objId: string) => Promise<IMOSObject | null>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Message used by the NCS to request the description of an object.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosReqObj
	 */
	sendRequestMOSObject: (objId: MosString128) => Promise<IMOSObject>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Method for the NCS to request the MOS to send it a mosObj message for every Object in the MOS.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosReqAll
	 */
	onRequestAllMOSObjects: (cb: () => Promise<Array<IMOSObject>>) => void
	/**
	 * Method for the NCS to request the MOS to send it a mosObj message for every Object in the MOS.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosReqAll
	 */
	sendRequestAllMOSObjects: () => Promise<Array<IMOSObject>>

	// Deprecated methods:
	/** @deprecated getMOSObject is deprecated, use sendRequestMOSObject instead */
	getMOSObject: (objId: MosString128) => Promise<IMOSObject>
	/** @deprecated getAllMOSObjects is deprecated, use sendRequestAllMOSObjects instead */
	getAllMOSObjects: () => Promise<IMOSObject[]>
}
/**
 * Method definitions for Profile 2
 * see http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#Profile2
 */
export interface IMOSDeviceProfile2 {
	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Message received from the NCS to the MOS that defines a new Running Order.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roCreate
	 */
	onCreateRunningOrder: (cb: (ro: IMOSRunningOrder) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Message from the NCS to the MOS that defines a new Running Order.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roCreate
	 */
	sendCreateRunningOrder: (ro: IMOSRunningOrder) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Message received from the NCS to the MOS that defines a new Running Order, replacing an existing one.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roReplace
	 */
	onReplaceRunningOrder: (cb: (ro: IMOSRunningOrder) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Message received from the NCS to the MOS that defines a new Running Order, replacing an existing one.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roReplace
	 */
	sendReplaceRunningOrder: (ro: IMOSRunningOrder) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Deletes a Running order in the MOS.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roDelete
	 */
	onDeleteRunningOrder: (cb: (runningOrderId: MosString128) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Deletes a Running order in the MOS.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roDelete
	 */
	sendDeleteRunningOrder: (runningOrderId: MosString128) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Request for a complete build of a Running Order Playlist. NOTE:  This message can be used by either NCS or MOS.
	 * A MOS can use this to "resync" its Playlist with the NCS Running Order or to obtain a full description of the Playlist at any time.
	 * An NCS can use this as a diagnostic tool to check the order of the Playlist constructed in the MOS versus the sequence of Items in the Running Order.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roReq
	 * Response: http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roList
	 */
	onRequestRunningOrder: (cb: (runningOrderId: MosString128) => Promise<IMOSRunningOrder | null>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Request for a complete build of a Running Order Playlist. NOTE:  This message can be used by either NCS or MOS.
	 * A MOS can use this to "resync" its Playlist with the NCS Running Order or to obtain a full description of the Playlist at any time.
	 * An NCS can use this as a diagnostic tool to check the order of the Playlist constructed in the MOS versus the sequence of Items in the Running Order.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roReq
	 * Response: http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roList
	 */
	sendRequestRunningOrder: (runningOrderId: MosString128) => Promise<IMOSRunningOrder | null>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * The roMetadataReplace message allows metadata associated with a running order to be replaced without deleting the running order and sending the entire running order again.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roMetadataReplace
	 */
	onMetadataReplace: (cb: (metadata: IMOSRunningOrderBase) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * The roMetadataReplace message allows metadata associated with a running order to be replaced without deleting the running order and sending the entire running order again.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roMetadataReplace
	 */
	sendMetadataReplace: (metadata: IMOSRunningOrderBase) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * A method for the MOS to update the NCS on the status of a RO. This allows the NCS to reflect the status of any element in the MOS Running Order in the NCS Running Order display.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.7.2_roElementStat_-
	 */
	onRunningOrderStatus: (cb: (status: IMOSRunningOrderStatus) => Promise<IMOSROAck>) => void // get roElementStat
	/**
	 * Send message (as NCS) to a MOS device:
	 * A method for the MOS to update the NCS on the status of a RO. This allows the NCS to reflect the status of any element in the MOS Running Order in the NCS Running Order display.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.7.2_roElementStat_-
	 */
	sendRunningOrderStatus: (status: IMOSRunningOrderStatus) => Promise<IMOSROAck> // send roElementStat

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * A method for the MOS to update the NCS on the status of a STORY. This allows the NCS to reflect the status of any element in the MOS Running Order in the NCS Running Order display.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.7.2_roElementStat_-
	 */
	onStoryStatus: (cb: (status: IMOSStoryStatus) => Promise<IMOSROAck>) => void // get roElementStat
	/**
	 * Send message (as NCS) to a MOS device:
	 * A method for the MOS to update the NCS on the status of a STORY. This allows the NCS to reflect the status of any element in the MOS Running Order in the NCS Running Order display.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.7.2_roElementStat_-
	 */
	sendStoryStatus: (status: IMOSStoryStatus) => Promise<IMOSROAck> // send roElementStat

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * A method for the MOS to update the NCS on the status of an ITEM. This allows the NCS to reflect the status of any element in the MOS Running Order in the NCS Running Order display.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.7.2_roElementStat_-
	 */
	onItemStatus: (cb: (status: IMOSItemStatus) => Promise<IMOSROAck>) => void // get roElementStat
	/**
	 * Send message (as NCS) to a MOS device:
	 * A method for the MOS to update the NCS on the status of an ITEM. This allows the NCS to reflect the status of any element in the MOS Running Order in the NCS Running Order display.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.7.2_roElementStat_-
	 */
	sendItemStatus: (status: IMOSItemStatus) => Promise<IMOSROAck> // send roElementStat

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * The roReadyToAir message allows the NCS to signal the MOS that a Running Order has been editorially approved ready for air.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roReadyToAir
	 */
	onReadyToAir: (cb: (Action: IMOSROReadyToAir) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * The roReadyToAir message allows the NCS to signal the MOS that a Running Order has been editorially approved ready for air.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roReadyToAir
	 */
	sendReadyToAir: (Action: IMOSROReadyToAir) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Insert one or more story into a Running Order
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	onROInsertStories: (cb: (Action: IMOSStoryAction, Stories: Array<IMOSROStory>) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Insert one or more story into a Running Order
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	sendROInsertStories: (Action: IMOSStoryAction, Stories: Array<IMOSROStory>) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Insert one or more Items into a Story
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	onROInsertItems: (cb: (Action: IMOSItemAction, Items: Array<IMOSItem>) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Insert one or more Items into a Story
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	sendROInsertItems: (Action: IMOSItemAction, Items: Array<IMOSItem>) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Replace (update) a Story with a new story.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	onROReplaceStories: (cb: (Action: IMOSStoryAction, Stories: Array<IMOSROStory>) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Replace (update) a Story with a new story.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	sendROReplaceStories: (Action: IMOSStoryAction, Stories: Array<IMOSROStory>) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Replace (update) an Item with a new Item.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	onROReplaceItems: (cb: (Action: IMOSItemAction, Items: Array<IMOSItem>) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Replace (update) an Item with a new Item.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	sendROReplaceItems: (Action: IMOSItemAction, Items: Array<IMOSItem>) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Move one or more Stories within a Running Order
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	onROMoveStories: (cb: (Action: IMOSStoryAction, Stories: Array<MosString128>) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Move one or more Stories within a Running Order
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	sendROMoveStories: (Action: IMOSStoryAction, Stories: Array<MosString128>) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Move one or more Items within a Story
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	onROMoveItems: (cb: (Action: IMOSItemAction, Items: Array<MosString128>) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Move one or more Items within a Story
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	sendROMoveItems: (Action: IMOSItemAction, Items: Array<MosString128>) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Delete one or more Stories within a Running Order
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	onRODeleteStories: (cb: (Action: IMOSROAction, Stories: Array<MosString128>) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Delete one or more Stories within a Running Order
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	sendRODeleteStories: (Action: IMOSROAction, Stories: Array<MosString128>) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Delete one or more Items within a Story
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	onRODeleteItems: (cb: (Action: IMOSStoryAction, Items: Array<MosString128>) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Delete one or more Items within a Story
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	sendRODeleteItems: (Action: IMOSStoryAction, Items: Array<MosString128>) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Swap two Stories
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	onROSwapStories: (
		cb: (Action: IMOSROAction, StoryID0: MosString128, StoryID1: MosString128) => Promise<IMOSROAck>
	) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Swap two Stories
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	sendROSwapStories: (Action: IMOSROAction, StoryID0: MosString128, StoryID1: MosString128) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * Swap two Items
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	onROSwapItems: (
		cb: (Action: IMOSStoryAction, ItemID0: MosString128, ItemID1: MosString128) => Promise<IMOSROAck>
	) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * Swap two Items
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roElementAction
	 */
	sendROSwapItems: (Action: IMOSStoryAction, ItemID0: MosString128, ItemID1: MosString128) => Promise<IMOSROAck>

	// Deprecated methods:
	/** @deprecated getRunningOrder is deprecated, use sendRequestRunningOrder instead */
	getRunningOrder: (runningOrderId: MosString128) => Promise<IMOSRunningOrder | null>
	/** @deprecated setRunningOrderStatus is deprecated, use sendRunningOrderStatus instead */
	setRunningOrderStatus: (status: IMOSRunningOrderStatus) => Promise<IMOSROAck>
	/** @deprecated setStoryStatus is deprecated, use sendStoryStatus instead */
	setStoryStatus: (status: IMOSStoryStatus) => Promise<IMOSROAck>
	/** @deprecated setItemStatus is deprecated, use sendItemStatus instead */
	setItemStatus: (status: IMOSItemStatus) => Promise<IMOSROAck>
}
/**
 * Method definitions for Profile 3
 * see http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#Profile3
 */
export interface IMOSDeviceProfile3 {
	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * mosObjCreate allows an NCS to request the Media Object Server to create a Media Object with specific metadata associated with it.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosObjCreate
	 */
	onObjectCreate: (cb: (object: IMOSObject) => Promise<IMOSAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * mosObjCreate allows an NCS to request the Media Object Server to create a Media Object with specific metadata associated with it.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosObjCreate
	 */
	sendObjectCreate: (object: IMOSObject) => Promise<IMOSAck>

	/**
	 * Assign callback (as a NCS device) for when receiving message from MOS:
	 * This message allows a Media Object Server to replace an Item Reference in a Story with new metadata values and/or additional tags.
	 * The Story must be in a MOS Active PlayList.
	 * This message is initiated by the Media Object Server, rather than the NCS.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosItemReplace
	 */
	onItemReplace: (cb: (roID: MosString128, storyID: MosString128, item: IMOSItem) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as MOS) to a NCS:
	 * This message allows a Media Object Server to replace an Item Reference in a Story with new metadata values and/or additional tags.
	 * The Story must be in a MOS Active PlayList.
	 * This message is initiated by the Media Object Server, rather than the NCS.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosItemReplace
	 */
	sendItemReplace: (options: MosItemReplaceOptions) => Promise<IMOSROAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * mosReqSearchable Schema is a mechanism used by the NCS to request the MOS to send a pointer to a schema in which searchable fields are defined by the MOS device.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosReqSearchableSchema
	 */
	onRequestSearchableSchema: (cb: (username: string) => Promise<IMOSListSearchableSchema>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * mosReqSearchable Schema is a mechanism used by the NCS to request the MOS to send a pointer to a schema in which searchable fields are defined by the MOS device.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosReqSearchableSchema
	 */
	sendRequestSearchableSchema: (username: string) => Promise<IMOSListSearchableSchema>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * mosReqObjList is a mechanism used by a NCS to retrieve only selected object descriptions from a MOS.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosReqObjList
	 */
	onRequestObjectList: (cb: (objList: IMOSRequestObjectList) => Promise<IMOSObjectList>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * mosReqObjList is a mechanism used by a NCS to retrieve only selected object descriptions from a MOS.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosReqObjList
	 */
	sendRequestObjectList: (reqObjList: IMOSRequestObjectList) => Promise<IMOSObjectList>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * mosReqObjAction allows an NCS to request the Media Object Server to create, modify or delete a media object.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.3.3_mosReqObjAction_%E2%80%93_NCS_request
	 */
	onRequestObjectActionNew: (cb: (obj: IMOSObject) => Promise<IMOSAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * mosReqObjAction allows an NCS to request the Media Object Server to create, modify or delete a media object.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.3.3_mosReqObjAction_%E2%80%93_NCS_request
	 */
	sendRequestObjectActionNew: (obj: IMOSObject) => Promise<IMOSAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * mosReqObjAction allows an NCS to request the Media Object Server to create, modify or delete a media object.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.3.3_mosReqObjAction_%E2%80%93_NCS_request
	 */
	onRequestObjectActionUpdate: (cb: (objId: MosString128, obj: IMOSObject) => Promise<IMOSAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * mosReqObjAction allows an NCS to request the Media Object Server to create, modify or delete a media object.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.3.3_mosReqObjAction_%E2%80%93_NCS_request
	 */
	sendRequestObjectActionUpdate: (objId: MosString128, obj: IMOSObject) => Promise<IMOSAck>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * mosReqObjAction allows an NCS to request the Media Object Server to create, modify or delete a media object.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.3.3_mosReqObjAction_%E2%80%93_NCS_request
	 */
	onRequestObjectActionDelete: (cb: (objId: MosString128) => Promise<IMOSAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * mosReqObjAction allows an NCS to request the Media Object Server to create, modify or delete a media object.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#_3.3.3_mosReqObjAction_%E2%80%93_NCS_request
	 */
	sendRequestObjectActionDelete: (objId: MosString128) => Promise<IMOSAck>

	// Deprecated methods:
	/** @deprecated onMosObjCreate is deprecated, use onObjectCreate instead */
	onMosObjCreate: (cb: (object: IMOSObject) => Promise<IMOSAck>) => void
	/** @deprecated mosObjCreate is deprecated, use sendObjectCreate instead */
	mosObjCreate: (object: IMOSObject) => Promise<IMOSAck>
	/** @deprecated onMosItemReplace is deprecated, use onItemReplace instead */
	onMosItemReplace: (cb: (roID: MosString128, storyID: MosString128, item: IMOSItem) => Promise<IMOSROAck>) => void
	/** @deprecated mosItemReplace is deprecated, use sendItemReplace instead */
	mosItemReplace: (options: MosItemReplaceOptions) => Promise<IMOSROAck>
	/** @deprecated onMosReqSearchableSchema is deprecated, use onRequestSearchableSchema instead */
	onMosReqSearchableSchema: (cb: (username: string) => Promise<IMOSListSearchableSchema>) => void
	/** @deprecated mosRequestSearchableSchema is deprecated, use sendRequestSearchableSchema instead */
	mosRequestSearchableSchema: (username: string) => Promise<IMOSListSearchableSchema>
	/** @deprecated onMosReqObjectList is deprecated, use onRequestObjectList instead */
	onMosReqObjectList: (cb: (objList: IMOSRequestObjectList) => Promise<IMOSObjectList>) => void
	/** @deprecated mosRequestObjectList is deprecated, use sendRequestObjectList instead */
	mosRequestObjectList: (reqObjList: IMOSRequestObjectList) => Promise<IMOSObjectList>
	/** @deprecated onMosReqObjectAction is deprecated, use onRequestObjectAction*** instead */
	onMosReqObjectAction: (cb: (action: string, obj: IMOSObject) => Promise<IMOSAck>) => void
}
/**
 * Method definitions for Profile 4
 * see http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#Profile4
 */
export interface IMOSDeviceProfile4 {
	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * roReqAll is a request for a description of all Running Orders known by a NCS from a MOS.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roReqAll
	 */
	onRequestAllRunningOrders: (cb: () => Promise<IMOSRunningOrder[]>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * roReqAll is a request for a description of all Running Orders known by a NCS from a MOS.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roReqAll
	 */
	sendRequestAllRunningOrders: () => Promise<Array<IMOSRunningOrderBase>>

	/**
	 * Assign callback (as a MOS device) for when receiving message from NCS:
	 * This message enables sending the body of story from the NCS to a Media Object Server.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roStorySend
	 */
	onRunningOrderStory: (cb: (story: IMOSROFullStory) => Promise<IMOSROAck>) => void
	/**
	 * Send message (as NCS) to a MOS device:
	 * This message enables sending the body of story from the NCS to a Media Object Server.
	 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#roStorySend
	 */
	sendRunningOrderStory: (story: IMOSROFullStory) => Promise<IMOSROAck>

	// Deprecated methods:
	/** @deprecated onROReqAll is deprecated, use onRequestAllRunningOrders instead */
	onROReqAll: (cb: () => Promise<IMOSRunningOrder[]>) => void
	/** @deprecated getAllRunningOrders is deprecated, use sendRequestAllRunningOrders instead */
	getAllRunningOrders: () => Promise<Array<IMOSRunningOrderBase>> // send roReqAll
	/** @deprecated onROStory is deprecated, use onRunningOrderStory instead */
	onROStory: (cb: (story: IMOSROFullStory) => Promise<IMOSROAck>) => void // roStorySend
	/** @deprecated sendROStory is deprecated, use sendRunningOrderStory instead */
	sendROStory: (story: IMOSROFullStory) => Promise<IMOSROAck> // roStorySend
}
export { IMOSListMachInfo }
export interface IMOSROAction {
	RunningOrderID: MosString128
}
export interface IMOSStoryAction extends IMOSROAction {
	StoryID: MosString128
}
export interface IMOSItemAction extends IMOSStoryAction {
	ItemID: MosString128
}
export interface IMOSROReadyToAir {
	ID: MosString128
	Status: IMOSObjectAirStatus
}
export interface IMOSRunningOrderStatus {
	ID: MosString128
	Status: IMOSObjectStatus
	Time: MosTime
}
export interface IMOSStoryStatus {
	RunningOrderId: MosString128
	ID: MosString128
	Status: IMOSObjectStatus
	Time: MosTime
}
export interface IMOSItemStatus {
	RunningOrderId: MosString128
	StoryId: MosString128
	ID: MosString128
	Status: IMOSObjectStatus
	Time: MosTime
	ObjectId?: MosString128
	Channel?: MosString128
}
export interface IMOSRunningOrderBase {
	ID: MosString128 // running order id
	Slug: MosString128
	DefaultChannel?: MosString128
	EditorialStart?: MosTime
	EditorialDuration?: MosDuration
	Trigger?: MosString128 // TODO: Johan frågar vad denna gör
	MacroIn?: MosString128
	MacroOut?: MosString128
	MosExternalMetaData?: Array<IMOSExternalMetaData>
}
export interface IMOSRunningOrder extends IMOSRunningOrderBase {
	Stories: Array<IMOSROStory>
}
export interface IMOSStory {
	ID: MosString128
	Slug?: MosString128
	Number?: MosString128
	MosExternalMetaData?: Array<IMOSExternalMetaData>
}
export interface IMOSROStory extends IMOSStory {
	Items: Array<IMOSItem>
}
export interface IMOSROFullStory extends IMOSStory {
	RunningOrderId: MosString128
	Body: Array<IMOSROFullStoryBodyItem>
}
export interface IMOSROFullStoryBodyItem {
	Type: string // enum, whatever?
	Content: any | IMOSItem // maybe not, maybe something else? IMOSItemObject??
}
export interface IMOSItem {
	ID: MosString128
	Slug?: MosString128
	ObjectSlug?: MosString128
	ObjectID: MosString128
	MOSID: string
	mosAbstract?: string
	Paths?: Array<IMOSObjectPath>
	Channel?: MosString128
	EditorialStart?: number
	EditorialDuration?: number
	Duration?: number
	TimeBase?: number
	UserTimingDuration?: number
	Trigger?: any // TODO: Johan frågar
	MacroIn?: MosString128
	MacroOut?: MosString128
	MosExternalMetaData?: Array<IMOSExternalMetaData>
	MosObjects?: Array<IMOSObject>
}

export type MosDuration = MosDurationDataType // HH:MM:SS

export interface IMOSAck {
	ID: MosString128
	Revision: number // max 999
	Status: IMOSAckStatus
	Description: MosString128
}

export interface IMOSROAck {
	ID: MosString128 // Running order id
	Status: MosString128 // OK or error desc
	Stories: Array<IMOSROAckStory>
}

export interface IMOSROAckStory {
	ID: MosString128 // storyID
	Items: Array<IMOSROAckItem>
}

export interface IMOSROAckItem {
	ID: MosString128
	Channel: MosString128
	Objects: Array<IMOSROAckObject>
}

export interface IMOSROAckObject {
	Status: IMOSObjectStatus
}

// /** */
// export type IPAddress = string;

// /** */
export interface IMOSConnectionStatus {
	PrimaryConnected: boolean
	PrimaryStatus: string // if not connected this will contain human-readable error-message
	SecondaryConnected: boolean
	SecondaryStatus: string // if not connected this will contain human-readable error-message
}
/** Config object for creating a MOS-device */
export interface IConnectionConfig {
	/** The ID of this mos-device */
	mosID: string
	/** Whether this mosConnection accepts new connections from othe MOS clients (ie acts as an NCS) */
	acceptsConnections: boolean
	/** Only accept connections from this whitelist */
	accepsConnectionsFrom?: string[]
	/** A list of which profile this mos device is to support */
	profiles: IProfiles
	/** If true, this device is assumed to be an NCS (server). Defaults to a MOS (client). */
	isNCS?: boolean
	/** Debugging-mode: logs raw mos-messages */
	debug?: boolean
	offspecFailover?: boolean
	/** If set to true, a strict check is performed to ensure that all required callbacks are set up for specified profiles */
	strict?: boolean
	/** If set, overrides the standard port numbers */
	ports?: {
		/** Set MOS Lower port (standard: 10540) */
		lower: number
		/** Set MOS Upper port (standard: 10541) */
		upper: number
		/** Set MOS Query port (standard: 10542) */
		query: number
	}
	/** When enabled, automatically create new mos-devices on-the-fly when receiving messages to unregistered MOS-ID:s */
	openRelay?:
		| boolean
		| {
				// options for on-the-fly-created connections
				options: IMOSDeviceConnectionOptions['primary']
		  }
}

export interface IMOSDeviceConnectionOptions {
	/** Connection options for the Primary NCS-server */
	primary: {
		/** Name (NCS ID) of the NCS-server */
		id: string
		/** Host address (IP-address) of the NCS-server  */
		host: string // ip-addr
		/** (Optional): Custom ports for communication */
		ports?: {
			upper: number
			lower: number
			query: number
		}
		/** (Optional) Timeout for commands (ms) */
		timeout?: number
		/** (Optional) Interval for sending of hearbeats (ms) */
		heartbeatInterval?: number
		/** (Optional) Some server doesn't expose the Query port, which can cause connection-errors.
		 * Set this to true to not use that port (will cause some methods to stop working)
		 */
		dontUseQueryPort?: boolean
	}
	/** Connection options for the Secondary (Buddy) NCS-server */
	secondary?: {
		/** Name (NCS ID) of the Buddy NCS-server */
		id: string
		/** Host address (IP-address) of the NCS-server  */
		host: string
		/** (Optional): Custom ports for communication */
		ports?: {
			upper: number
			lower: number
			query: number
		}
		/** (Optional) Timeout for commands (ms) */
		timeout?: number
		/** (Optional) Interval for sending of hearbeats (ms) */
		heartbeatInterval?: number

		/** (Optional) Some server doesn't expose the Query port, which can cause connection-errors.
		 * Set this to true to not use that port (will cause some methods to stop working)
		 */
		dontUseQueryPort?: boolean
	}
}

/** http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosObj */
export interface IMOSObject {
	ID?: MosString128
	Slug: MosString128
	MosAbstract?: string
	Group?: string
	Type: IMOSObjectType
	TimeBase: number
	Revision?: number // max 999
	Duration: number
	Status?: IMOSObjectStatus
	AirStatus?: IMOSObjectAirStatus
	Paths?: Array<IMOSObjectPath>
	CreatedBy?: MosString128
	Created?: MosTime
	ChangedBy?: MosString128 // if not present, defaults to CreatedBy
	Changed?: MosTime // if not present, defaults to Created
	Description?: any // xml json
	MosExternalMetaData?: Array<IMOSExternalMetaData>
	MosItemEditorProgID?: MosString128
}

/**
 * Returns selected object descriptions from a MOS.
 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosObjList
 */
export interface IMOSObjectList {
	username: string
	queryID: string
	listReturnStart: number
	listReturnEnd: number
	listReturnTotal: number
	listReturnStatus?: string
	list?: Array<IMOSObject>
}

/**
 * mosReqObjList is a mechanism used by a NCS to retrieve only selected object descriptions from a MOS.
 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosReqObjList
 */
export interface IMOSRequestObjectList {
	username: string
	queryID: MosString128
	listReturnStart: number | null
	listReturnEnd: number | null
	generalSearch: MosString128
	mosSchema: string
	searchGroups: Array<{
		searchFields: Array<IMOSSearchField>
	}>
}
/** @see IMOSRequestObjectList */
export interface IMOSSearchField {
	XPath: string
	sortByOrder?: number
	sortType?: string
}

/**
 * mosListSearchableSchema is a mechanism used by the MOS to send a pointer to a schema in which searchable fields are defined for the NCS device.
 * http://mosprotocol.com/wp-content/MOS-Protocol-Documents/MOS-Protocol-2.8.4-Current.htm#mosListSearchableSchema
 */
export interface IMOSListSearchableSchema {
	username: string
	mosSchema: string
}

export enum IMOSObjectType {
	STILL = 'STILL',
	AUDIO = 'AUDIO',
	VIDEO = 'VIDEO',
	OTHER = 'OTHER', // unknown/not speficied
}

export enum IMOSObjectStatus {
	NEW = 'NEW',
	UPDATED = 'UPDATED',
	MOVED = 'MOVED',
	BUSY = 'BUSY',
	DELETED = 'DELETED',
	NCS_CTRL = 'NCS CTRL',
	MANUAL_CTRL = 'MANUAL CTRL',
	READY = 'READY',
	NOT_READY = 'NOT READY',
	PLAY = 'PLAY',
	STOP = 'STOP',
}

export enum IMOSAckStatus {
	ACK = 'ACK',
	NACK = 'NACK',
}

export enum IMOSObjectAirStatus {
	READY = 'READY',
	NOT_READY = 'NOT READY',
}

export interface IMOSObjectPath {
	Type: IMOSObjectPathType
	Description: string
	Target: string // Max 255
}

export enum IMOSObjectPathType {
	PATH = 'PATH',
	PROXY_PATH = 'PROXY PATH',
	METADATA_PATH = 'METADATA PATH',
}
export { IMOSExternalMetaData }

export interface MosItemReplaceOptions {
	roID: MosString128
	storyID: MosString128
	item: IMOSItem
}
