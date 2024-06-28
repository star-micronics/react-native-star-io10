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
  
  if ENV['USE_FRAMEWORKS']
    header_search_path = [
      '$(SRCROOT)/../../node_modules/react/** $(SRCROOT)/../../node_modules/react-native/**'
    ]

    exclude_source_file_name = [
      'libs/StarIO10.xcframework/ios-arm64_x86_64-simulator/StarIO10.framework/Headers/*.h libs/StarIO10.xcframework/ios-arm64_x86_64-simulator/StarIO10.framework/PrivateHeaders/*.h'
    ]

    s.pod_target_xcconfig  = {
      "HEADER_SEARCH_PATHS" => header_search_path.join(" "),
      "EXCLUDED_SOURCE_FILE_NAMES" => exclude_source_file_name.join(" ")
    }
  end

  # ...
  # s.dependency "..."

  s.vendored_frameworks = 'ios/libs/StarIO10.xcframework'
end

