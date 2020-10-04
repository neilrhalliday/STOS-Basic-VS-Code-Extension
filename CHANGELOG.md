# Change Log
<br>

## [Unreleased]
- Ongoing documentation of all original STOS commands.
<br>
<br>

## [0.0.6] - 2020-10-04
### Added
- Multiple blank line recognition now creates a single ":" line within STOS, no matter how many blank lines you have in your .stos file.
- Additional standard STOS commands now have command helpers.
- Support for Ninja Tracker commands by Les Greenhalgh.
<br>

### Changed
- Fixed problem in stos2asc.class that dealt with blank lines incorrectly. This resulted in an empty line with just a line number, causing STOS to reject the .asc file. This will now be replaced with a ":" and thus a spacer in the resulting STOS code.
- Changed the format of the command helpers to show the name of the extension that it belongs to.
<br>
<br>

## [0.0.5] - 2020-10-03
- Initial beta release
<br>
<br>

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).