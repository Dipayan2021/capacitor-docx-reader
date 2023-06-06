import Foundation
import SNDocx

@objc public class docxreader: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
    
    @objc public func getTextFromDocxFile(_ value: String) -> String {
        print(value)
        guard let docxURL = URL(string: value) else { return "docx URL issue" }
        let extractedText = extractTextFromDocx(docxURL: docxURL)
        return extractedText
    }
    
    private func extractTextFromDocx(docxURL: URL) -> String{
        var text = SNDocx.shared.getText(fileUrl: docxURL) ?? "Could not convert into text"
        return text
    }
}
