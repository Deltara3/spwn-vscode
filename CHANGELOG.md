# Change Log

All notable changes to the "spwn-language" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## 0.2.0
- Total rewrite in Pkl, hopefully easier to work with.

## 0.1.9
- Fixed the grammar highlighting some function calls as keywords.

## 0.1.8
- Fixed legacy keyword `has` still being under `keyword.operator.logical`.

## 0.1.7
- Fixed the grammar highlighting what was clearly not macros, as macros.

## 0.1.6
- Fixed `else` not highlighting in `match` statements.

## 0.1.5
- Fixed the grammar treating some properties, members, or variables as keywords.

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
- Initial release
