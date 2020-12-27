# Change Log
<br>

## [Unreleased]
- Ongoing documentation of all original STOS commands.
- Addition of The Missing Link extension.
- Addition of the Misty extension.
<br>
<br>

## [0.0.7]
### Added
- Incorporated #lineinc syntax highlighting.
- Syntax highlighting for the STE & Blitter extension by Architect & Line / Asa Burrows.
- Full support for GBP extension by Neil Halliday.
- Extension icon.
- Double slash now counts as a comment to bring in to line with other languages.
<br>

### Changed
<br>
<br>

## [0.0.6] - 2020-10-04
### Added
- Multiple blank line recognition now creates a single ":" line within STOS, no matter how many blank lines you have in your .stos file.
- Full support for Ninja Tracker by Les Greenhalgh.
<br>

### Changed
- Fixed problem in stos2asc.class that dealt with blank lines incorrectly. This resulted in an empty line with just a line number, causing STOS to reject the .asc file. This will now be replaced with a ":" and thus a spacer in the resulting STOS code.
- Changed the format of the command helpers to show the name of the extension that it belongs to.
- Additional standard STOS commands now have command helpers.
<br>
<br>

## [0.0.5] - 2020-10-03
- Initial beta release.
<br>
<br>

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
<br>

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)