# SPWN Language
Basic language support for SPWN.

## Creation
It's an amalgamation of:
- My own work.
- The original extension (some regex).
- Flow's extension for RWRT (some regex).

While it's by no means perfect, it's 100% better than the originals.

## Help
While I tried to support as much as possible, I may have missed stuff.
Feel free to create an issue with inaccuracies, bugs or missing syntax.

## Release Notes

## 0.1.4
- Fixed `as` not highlighting due to the lack of implementation.
- Moved `is` and `in` to `keyword.other`.

## 0.1.3
- Updated scope on `namespace-member` from `variable.property` to `variable.other.enummember`.

## 0.1.2
- Fixed `standard-block` treating code blocks as dictionaries.
- Fixed broken highlighting in nested blocks.
- Moved `is` and `in` to `keyword.control`.

## 0.1.1
- Fixed `is` not highlighting due to the lack of implementation.

## 0.1.0
- Initial Release
