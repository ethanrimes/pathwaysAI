import Foundation

struct iOSFirebaseConfig {
    static func getConfig() -> [String: Any] {
        guard let path = Bundle.main.path(forResource: "GoogleService-Info", ofType: "plist"),
              let dict = NSDictionary(contentsOfFile: path) as? [String: Any] else {
            fatalError("Couldn't find GoogleService-Info.plist file in bundle")
        }
        
        return [
            "apiKey": dict["API_KEY"] as? String ?? "",
            "authDomain": "\(dict["PROJECT_ID"] as? String ?? "").firebaseapp.com",
            "projectId": dict["PROJECT_ID"] as? String ?? "",
            "storageBucket": dict["STORAGE_BUCKET"] as? String ?? "",
            "messagingSenderId": dict["GCM_SENDER_ID"] as? String ?? "",
            "appId": dict["GOOGLE_APP_ID"] as? String ?? "",
            // Add any other configuration keys you need
        ]
    }
}


