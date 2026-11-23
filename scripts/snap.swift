// Usage: swiftc -o snap scripts/snap.swift && ./snap <url> <out.png> [width] [height]
// Captures the top (hero) viewport of a page as a PNG using WebKit.
import Cocoa
import WebKit

let args = CommandLine.arguments
guard args.count >= 3, let url = URL(string: args[1]) else {
    print("usage: snap <url> <out.png> [width] [height]")
    exit(1)
}
let out = args[2]
let width = args.count > 3 ? Double(args[3]) ?? 1440 : 1440
let height = args.count > 4 ? Double(args[4]) ?? 900 : 900

final class Delegate: NSObject, WKNavigationDelegate {
    let webView: WKWebView
    init(_ w: WKWebView) { webView = w }
    func webView(_ w: WKWebView, didFinish navigation: WKNavigation!) {
        // Let animations / fonts / images settle
        DispatchQueue.main.asyncAfter(deadline: .now() + 4) {
            let cfg = WKSnapshotConfiguration()
            cfg.rect = CGRect(x: 0, y: 0, width: width, height: height)
            w.takeSnapshot(with: cfg) { image, error in
                guard let image = image,
                      let tiff = image.tiffRepresentation,
                      let rep = NSBitmapImageRep(data: tiff),
                      let png = rep.representation(using: .png, properties: [:]) else {
                    print("snapshot failed: \(String(describing: error))")
                    exit(2)
                }
                try? png.write(to: URL(fileURLWithPath: out))
                print("saved \(out)")
                exit(0)
            }
        }
    }
    func webView(_ w: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
        print("load failed: \(error)"); exit(3)
    }
    func webView(_ w: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        print("load failed: \(error)"); exit(3)
    }
}

let app = NSApplication.shared
app.setActivationPolicy(.accessory)
let webView = WKWebView(frame: CGRect(x: 0, y: 0, width: width, height: height))
let window = NSWindow(contentRect: webView.frame, styleMask: [.borderless], backing: .buffered, defer: false)
window.contentView = webView
window.orderBack(nil)
let delegate = Delegate(webView)
webView.navigationDelegate = delegate
webView.load(URLRequest(url: url))
DispatchQueue.main.asyncAfter(deadline: .now() + 40) { print("timeout"); exit(4) }
app.run()
