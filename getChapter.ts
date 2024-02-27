import { booklet } from "./QuickReferenceBooklet"

function removeAllBeforeAcceptorExtended(source: string) {
	const lines = source.split("\n")
	const index = lines.findIndex(line => line.match(/^Acceptor business codes \(MCCs\): extended$/))
	return lines.slice(index + 1).join("\n")
}
function removeAllAfterIndustrySpecificCodes(source: string) {
	return source.split(/Industry Specific Acceptor Business Codes \(MCCs\)\n/g, 2)[0]
}
function clearHeaderAndFooters(source: string) {
	return source.replaceAll(/[^\n]+\n[^\n]+\n©[^\n]+\n[^\n]+\n/g, "")
}

export function getChapter(): string {
	return clearHeaderAndFooters(removeAllBeforeAcceptorExtended(removeAllAfterIndustrySpecificCodes(booklet)))
}
