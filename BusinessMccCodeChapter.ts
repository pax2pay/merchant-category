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
		this.source = this.source.replaceAll(/[^\n]+\n[^\n]+\n©[^\n]+\n[^\n]+\n/g, "")
		return this
	}

	get(): string {
		this.removeAllAfterIndustrySpecificCodes().removeAllBeforeAcceptorExtended().clearHeaderAndFooters()
		return this.source
	}
}
