package com.networkmonitor

import com.facebook.react.BaseReactPackage
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.uimanager.ViewManager

// legacy
/*class NetworkPackage : ReactPackage {

    override fun createNativeModules(
        reactContext: ReactApplicationContext
    ): List<NativeModule> {
        return listOf(
            NetworkModule(reactContext)
        )
    }

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): List<ViewManager<*, *>> {
        return emptyList()
    }
}*/

// turbo module support
class NetworkPackage : BaseReactPackage() {

    override fun createViewManagers(
        reactContext: ReactApplicationContext
    ): List<ViewManager<*, *>> {
        return emptyList()
    }

    override fun getModule(
        name: String, reactContext: ReactApplicationContext
    ): NativeModule? {
        return when (name) {
            "NetworkModule" -> NetworkModule(reactContext)
            else -> null
        }
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            mapOf(
                "NetworkModule" to ReactModuleInfo(
                    "NetworkModule",
                    "NetworkModule",
                    canOverrideExistingModule = false, // canOverrideExistingModule
                    needsEagerInit = false, // needsEagerInit
                    isCxxModule = false, // isCxxModule
                    isTurboModule = true   // isTurboModule
                )
            )
        }
    }
}
