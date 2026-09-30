import Foundation
import React
@objc(NetworkModule)

// Legacy module file
class NetworkModule: NSObject {

    @objc
    func sayHello(
        _ resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) {
        resolve("Hello from iOS")
    }
  
  @objc
  func startMonitoring(
    _ resolve: RCTPromiseResolveBlock,
    rejecter reject: RCTPromiseRejectBlock
  ) {
    resolve("Started monitoring")
  }
}
