import { IMOSObject, IMOSString128 } from '@mos-connection/model'
import { MosMessage } from '../MosMessage'
import * as XMLBuilder from 'xmlbuilder'
import { XMLMosObject } from '../profile1/xmlConversion'
export interface MosReqObjActionOptionsNew {
	object: IMOSObject
}
export class MosReqObjActionNew extends MosMessage {
	private options: MosReqObjActionOptionsNew
	constructor(options: MosReqObjActionOptionsNew) {
		super('lower')
		this.options = options
	}
	get messageXMLBlocks(): XMLBuilder.XMLElement {
		const xml = XMLBuilder.create('mosReqObjAction')
		xml.att('operation', 'NEW')
		XMLMosObject.toXML(xml, this.options.object)
		return xml
	}
}
export interface MosReqObjActionOptionsUpdate {
	object: IMOSObject
	objectId: IMOSString128
}
export class MosReqObjActionUpdate extends MosMessage {
	private options: MosReqObjActionOptionsUpdate
	constructor(options: MosReqObjActionOptionsUpdate) {
		super('lower')
		this.options = options
	}
	get messageXMLBlocks(): XMLBuilder.XMLElement {
		const xml = XMLBuilder.create('mosReqObjAction')
		xml.att('operation', 'UPDATE')
		xml.att('objID', this.options.objectId)
		XMLMosObject.toXML(xml, this.options.object)
		return xml
	}
}
export interface MosReqObjActionOptionsDelete {
	objectId: IMOSString128
}
export class MosReqObjActionDelete extends MosMessage {
	private options: MosReqObjActionOptionsDelete
	constructor(options: MosReqObjActionOptionsDelete) {
		super('lower')
		this.options = options
	}
	get messageXMLBlocks(): XMLBuilder.XMLElement {
		const xml = XMLBuilder.create('mosReqObjAction')
		xml.att('operation', 'DELETE')
		xml.att('objID', this.options.objectId)
		return xml
	}
}
