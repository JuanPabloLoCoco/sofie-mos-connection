import * as XMLBuilder from 'xmlbuilder'
import { MosMessage } from '../MosMessage'
import { IMOSString128 } from '@mos-connection/model'
import { addTextElement } from '../../utils/Utils'

export class ReqMosObj extends MosMessage {
	private objId: IMOSString128
	/** */
	constructor(objId: IMOSString128) {
		super('lower')
		this.objId = objId
	}

	/** */
	get messageXMLBlocks(): XMLBuilder.XMLElement {
		const root = XMLBuilder.create('mosReqObj')
		addTextElement(root, 'objID', this.objId)
		return root
	}
}
