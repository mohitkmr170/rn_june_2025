# What This Is

This configuration tells Bundler to install Ruby gems into the vendor/bundle directory instead of the system-wide gem location. This is a common practice for:

1. iOS development dependencies - CocoaPods, Fastlane, and other iOS build tools are Ruby gems
2. Project isolation - Keeps gem versions specific to your project
3. CI/CD consistency - Ensures the same gem versions across different environments

# Why React Native Projects Have This

React Native iOS projects often use Ruby-based tools:

1. CocoaPods - For managing iOS native dependencies
2. Fastlane - For app deployment and CI/CD
3. Other build tools - Various iOS development utilities

# Why Keep the Folder

The vendor/bundle directory serves important purposes:

1. Faster builds - Gems are cached locally instead of being downloaded repeatedly
2. Version consistency - Ensures everyone uses the same gem versions
3. Offline development - Works without internet once gems are installed
4. CI/CD reliability - Consistent dependencies across environments

# Don't Delete It

> If you delete vendor/bundle, you'll need to run bundle install again, which wastes time downloading gems that were already cached. Just ignore it in git and leave it for local development efficiency.
