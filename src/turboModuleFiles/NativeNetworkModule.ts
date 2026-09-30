import { TurboModule } from "react-native"; //Main ek TurboModule ka type/contract use karne wala hoon.
import { TurboModuleRegistry } from "react-native"; //React Native ka mechanism hai jisse JS TurboModule ko access karega.

export interface Spec extends TurboModule {
    sayHello(): Promise<string>; // this is a contract that says that the NetworkModule must have a sayHello method that returns a Promise of a string.
    startMonitoring(): Promise<UserDetail>;
    stopMonitoring(): void;
}

export interface UserDetail {
    wifiName: string;
    connectionType: string;
  }

export default TurboModuleRegistry.getEnforcing<Spec>("NetworkModule"); // This networkModule name is same as the name of the module in the native side.