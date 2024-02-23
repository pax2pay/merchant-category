import { booklet } from "./QuickReferenceBooklet"

export class BusinessMccCodeChapter {
	source = booklet
	removeAllBeforeAcceptorExtended() {
		this.source = this.source
			.split(/Acceptor business codes \(MCCs\): extended\n/g)
			.slice(1)
			.join("")
		return this
	}
	removeAllAfterIndustrySpecificCodes() {
		this.source = this.source.split(/Industry Specific Acceptor Business Codes \(MCCs\)\n/g, 2)[0]
		return this
	}
	clearHeaderAndFooters() {
		this.source = this.source
			.split(/Acceptor business codes \(MCCs\)\nMCC \d{4}: .+\n© \d{4} .+\n.+ • \d{1,2} \w+ \d{4} \d*\n/g)
			.join("")
		return this
	}

	get(): string {
		this.removeAllBeforeAcceptorExtended().removeAllAfterIndustrySpecificCodes().clearHeaderAndFooters()
		return this.source
	}
}
