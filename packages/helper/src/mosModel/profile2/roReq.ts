import * as XMLBuilder from 'xmlbuilder'
import { MosMessage } from '../MosMessage'
import { IMOSString128 } from '@mos-connection/model'
import { addTextElement } from '../../utils/Utils'

export class ROReq extends MosMessage {
	private roId: IMOSString128
	/** */
	constructor(roId: IMOSString128) {
		super('upper')
		this.roId = roId
	}

	/** */
	get messageXMLBlocks(): XMLBuilder.XMLElement {
		const root = XMLBuilder.create('roReq')
		addTextElement(root, 'roID', this.roId)
		return root
	}
}
