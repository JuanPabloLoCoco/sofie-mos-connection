import * as XMLBuilder from 'xmlbuilder'
import { MosString128 } from '../../dataTypes/mosString128'
import { MosMessage } from '../MosMessage'
import {
	IMOSROAck,
	IMOSROAckStory /*,
	IMOSROAckItem,
	IMOSROAckObject*/
} from '../../api'
import { addTextElement } from '../../utils/Utils'

export class ROAck extends MosMessage implements IMOSROAck {

	ID: MosString128
	Status: MosString128
	Stories: Array<IMOSROAckStory>

  /** */
	constructor (roAck?: IMOSROAck) {
		super('upper')
		if (roAck) {
			this.ID = roAck.ID
			this.Status = roAck.Status
			this.Stories = roAck.Stories
		}
	}

  /** */
	get messageXMLBlocks (): XMLBuilder.XMLElement {
		let root = XMLBuilder.create('roAck')

		addTextElement(root, 'roID', this.ID)
		addTextElement(root, 'roStatus', this.Status)

		// TODO: Loop over Stories, Items and Object

		return root
	}
}
