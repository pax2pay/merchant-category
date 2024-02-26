import { booklet } from "./QuickReferenceBooklet"

export class BusinessMccCodeChapter {
	source = booklet
	removeAllBeforeAcceptorExtended() {
		const lines = this.source.split("\n")
		const index = lines.findIndex(line => line.match(/^Acceptor business codes \(MCCs\): extended$/))
		this.source = lines.slice(index + 1).join("\n")
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
