require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-star-io10"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-star-io10
                   DESC
  s.homepage     = "https://github.com/github_account/react-native-star-io10"
  s.license      = "MIT"
  # s.license    = { :type => "MIT", :file => "FILE_LICENSE" }
  s.authors      = { "Your Name" => "yourname@email.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/github_account/react-native-star-io10.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  s.pod_target_xcconfig = { 
    'EXCLUDED_ARCHS[sdk=iphoneos*]' => 'x86_64',
    'EXCLUDED_SOURCE_FILE_NAMES[sdk=iphoneos*]' => '$(SRCROOT)/../../node_modules/react-native-star-io10/ios/libs/StarIO10.xcframework/ios-arm64_x86_64-simulator/*.*',
    'FRAMEWORK_SEARCH_PATHS[sdk=iphoneos*]' => '$(SRCROOT)/libs/** $(SRCROOT)/../../node_modules/react-native-star-io10/ios/libs $(SRCROOT)/../../node_modules/react-native-star-io10/ios/libs/StarIO10.xcframework/ios-arm64',
  }

  # ...
  # s.dependency "..."

  s.vendored_frameworks = 'ios/libs/StarIO10.xcframework'
end

