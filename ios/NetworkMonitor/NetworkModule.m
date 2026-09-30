//
//  NetworkModule.m
//  NetworkMonitor
//
//  Created by NandanKumar on 29/09/26.
// Legacy bridge registration

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NetworkModule, NSObject)

RCT_EXTERN_METHOD(
  sayHello:(RCTPromiseResolveBlock)resolve
  rejecter:(RCTPromiseRejectBlock)reject
)
RCT_EXTERN_METHOD(
  startMonitoring:(RCTPromiseResolveBlock)resolve
  rejecter:(RCTPromiseRejectBlock)reject
)

@end
