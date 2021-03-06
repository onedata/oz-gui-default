# Release notes for project oz-gui-default


CHANGELOG
---------

### Latest changes

* VFS-5013 Support for test login page
* VFS-4702 Support for customizable authorization providers icons, colors and names
* VFS-4553 Fixed browser back from Oneprovider to Onezone GUI (wrong redirect and broken WebSocket in Safari)
* VFS-4668 Added additional information box to login page
* VFS-4455 Fixed wrong position of provider spinner and handling space creation errors
* VFS-3710 Using binary prefix units for displaying sizes (MiB, GiB, etc.)
* VFS-3455 Refactor of Websocket reconnection modal
* VFS-3508 Support for new authentication providers
* VFS-3512 Safari login screen fixes
* VFS-3337 Workaround for not showing some login icons when using AdBlock
* VFS-3419 Improvements in login view: added loading spinners for more authenticators


### 17.06.0-rc2

* No changes in GUI since 17.06.0-rc1


### 17.06.0-rc1

* No changes in GUI since 17.06.0-beta6


### 17.06.0-beta1 - 17.06.0-beta6

* VFS-3405 Showing messages on authentication and add account errors
* VFS-3408 Added UnitedID social icon
* VFS-3331 Added ELIXIR social icon; Added possibility to use images as social icons
* VFS-3390 More tooltips for long and truncated names
* VFS-3284 Provider can now be opened optionally in new tab or window 
* VFS-3349 New login screen: new layout and selector for authorizers if there is a large number of them
* VFS-3302 Showing hashes for conflicting space, group and provider names in Onezone
* VFS-3332 Loader indicator when creating space
* VFS-3331 Added ELIXIR social icon and possibility to use images as social icons
* VFS-3311 New support space modal with support token, deploy provider command and expose data command


### 3.0.0-rc15

* VFS-3172, VFS-3173 Displaying Zone name and version in Onezone and login view
* VFS-3222 Added RHEA social icon
* VFS-3214 Fix blocking message when at least one provider is offline


### 3.0.0-rc13

* VFS-3047 Fixing JS errors on browsers other than Chrome/Blink engine
* VFS-3047 Added "pending" status of provider
* VFS-3004 Upgrading to Ember 2.11; upgrading packages


### 3.0.0-rc12

* VFS-2881 Reordered panels in Onezone sidebar, automatic context expand
* VFS-2881 Group management panel: list groups and join a group
* VFS-2661 Major refactor of model; using User model with resources relations instead of findAll
* VFS-2882 Fixing hanging loading states of modals
* VFS-2882 New generic rename space modal
* VFS-2882 Get support token from dropdown menu of space
* VFS-2882 Fixing mocha tests deprecations
* VFS-2992 Fixing change password button style
* VFS-2922 Fixing import in change-password component
* VFS-2882 Working on get support from spaces settings
* VFS-2882 Dropdowns styles refactor
* VFS-2882 Removing space from list after leave
* VFS-2882 Fixing some FIXMEs
* VFS-2882 Loading states in dialog-modal; jsdoc
* VFS-2882 Fixing position of settings-dropdown
* VFS-2882 Corrected space item layout
* VFS-2882 Leave space support
* VFS-2882 Generic settings-dropdown
* VFS-2883 Changed "home" icon position and size
* VFS-2882 New generic dialog modal
* VFS-2883 Fixing style issues in sidebar
* VFS-2883 Fixing and refactoring atlas loader
* VFS-2883 Refactor of loader styles; major refactor
* VFS-2883 Fixing missing text truncations
* VFS-2883 Support sizes of spaces in sidebar
* VFS-2883 Major OZ sidebar styles refactoring; added space size in sidebar
* VFS-2883 Updated model of Space - support sizes
* VFS-2883 Spaces size in provider popup
* VFS-2883 Changed color of not-working provider
* VFS-2883 Truncate provider name in provider drop
* VFS-2883 Copy provider hostname to clipboard
* VFS-2417 Make clean removes rel contents
* VFS-2883 New provider popup style
* VFS-2883 Added clipboard icon
* VFS-2417 Removing Glyphicons dependency
* VFS-2417 Fixing Ember deprecations
* VFS-2417 Using refactored one-icon component
* VFS-2417 Removing deprecated GIF loaders
* VFS-2417 Refactoring and minor fixes in ember-cli-onedata-common addon
* VFS-2417 Created ember-cli-onedata-common addon instead o using gui repo
* VFS-2868 Refactoring of providers popups JS
* VFS-2823 Deactivate clienttokens on focus lost
* VFS-2841 Use app-config.json to enable/disable logging
* VFS-2752 Hide "add account" when basicAuth-only
* VFS-2823 Notify on copying support token
* VFS-2823 Shortened clienttokens
* VFS-2752 Hide add account button when it should be
* VFS-2752 Updating Ember to 2.8.3
* VFS-2752 Access token input is now readonly


### 3.0.0-rc6 -- 3.0.0-rc11

* VFS-2660 Do not allow to submit space without name
* VFS-2660 Adding `deploy_to_getting_started` script
* VFS-2646 Fixed preparing get support token widgets
* VFS-2608 Vectorized Oneworld text for login logo SVG
* VFS-2638 Support for Space's hasViewPrivilege in OZ sidebar
* VFS-2608 Redirect to `/` instead of onedata.org in top OD logo
* VFS-2608 SVG brand logo in login page
* VFS-2626 Improved responsive design for login view for 8+ login btns
* VFS-2626 Added EGI login; added new icons (social-egi, metadata)
* VFS-2626 Ordering of login buttons by backend
* VFS-2624 Using url from `/do_login` response
* VFS-2582 Settings npm and bower packages versions to fixed values
* VFS-2581 Fixing page titles for new ember-page-title version


### 3.0.0-rc5

* VFS-2491 Join space button and modal
* VFS-2485 Removed some deprecations
* VFS-2485 Updating ember-simple-auth
* VFS-2485 Added linkt to server-message-handler from gui repo
* Squashed 'gui/' changes from 2884f21..ae7d856
* VFS-2485 Experimental migration to Ember 2.7
* VFS-2364 Fixing non-clickable onedata logo in top-bar
* VFS-2364 Added missing spacing on home pages, fixed login page style
* VFS-2364 Support homepage page
* VFS-2368 Cleaning up unsupport-space code
* VFS-2368 Common danger color
* VFS-2368 Added initial common colors in gui repo (buttons)
* VFS-2368 Changing text about data loss risk
* VFS-2368 Added missing files for VFS-2368
* VFS-2368 Added missing one-options files
* VFS-2368: Unsupport space from provider widgets
* Squashed 'gui/' changes from be7c162..2884f21




________

Generated by sr-release. 
