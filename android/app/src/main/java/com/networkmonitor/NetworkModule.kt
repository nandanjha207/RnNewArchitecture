package com.networkmonitor/*ReactApplicationContext --Ye React Native ka context hai.
React Native Native Module me hume React Native wala context chahiye,
jiske through module React Native runtime ke saath interact kar sakta hai.*/
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

/*Ye sabse important line hai.
Hum Android ko basically bol rahe hain:
NetworkModule ek React Native Native Module hai.*//*class NetworkModule(
    reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

    //Ye name JavaScript side se module ko identify karne ke liye use hoga.
    override fun getName(): String {
        return "NetworkModule"
    }

    @ReactMethod
    fun sayHello(promise: Promise) {
        promise.resolve("Hello from Android")
    }
}*/

// Turbo module implementation
class NetworkModule(
    reactContext: ReactApplicationContext
) : NativeNetworkModuleSpec(reactContext) {
    val userDetail = UserDetail()
    override fun sayHello(promise: Promise) {
        promise.resolve("Hello from Android")
    }

    override fun startMonitoring(promise: Promise?) {

        val result = Arguments.createMap()

        result.putString("wifiName", userDetail.wifiName)
        result.putString("connectionType", userDetail.connectionType)

        promise?.resolve(result)
    }

    override fun stopMonitoring() {
        println("Stop data $userDetail")
    }

}

class UserDetail {
    val wifiName = "TTN wifi"
    val connectionType = "Wifi"
}