import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
  func scene(
    _ scene: UIScene,
    willConnectTo session: UISceneSession,
    options connectionOptions: UIScene.ConnectionOptions
  ) {
    guard let windowScene = scene as? UIWindowScene,
          let appDelegate = UIApplication.shared.delegate as? AppDelegate,
          let window = appDelegate.window else {
      return
    }

    window.windowScene = windowScene
    window.makeKeyAndVisible()
  }
}
