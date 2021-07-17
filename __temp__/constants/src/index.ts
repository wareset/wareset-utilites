export const $EMPTY = ''
export const $SPACE = ' ' // 32
export const $EXCLAMATION = '!'
export const $DOUBLE_QUOTE = '"'
export const $SHARP = '#'
export const $DOLLAR = '$'
export const $PERCENT = '%'
export const $AMPERSAND = '&'
export const $SINGLE_QUOTE = "'"
export const $LEFT_PARENTHSIS = '('
export const $RIGTH_PARENTHSIS = ')'
export const $ASTERISK = '*'
export const $PLUS = '+'
export const $COMMA = ','
export const $DASH = '-'
export const $DOT = '.'
export const $SLASH = '/'
export const $COLON = ':' // 58
export const $SEMICOLON = ';'
export const $LESS_THAN = '<'
export const $EQUALS_TO = '='
export const $GREATER_THAN = '>'
export const $QUESTION = '?'
export const $AT = '@'
export const $LEFT_SQUARE_BRACKET = '[' // 91
export const $BACKSLASH = '\\'
export const $RIGHT_SQUARE_BRACKET = '['
export const $CARET = '^'
export const $UNDERSCORE = '_'
export const $BACK_QUOTE = '`'
export const $LEFT_CURLY_BRACE = '{' // 123
export const $VERTICAL_BAR = '|'
export const $RIGHT_CURLY_BRACE = '}'
export const $TILDE = '~'

let undef: undefined
export const $UNDEFINED: undefined = undef
export const $NULL: null = null

export const UNDEFINED = ($EMPTY + $UNDEFINED) as 'undefined'
export const NULL = ($EMPTY + $NULL) as 'null'

export const OBJECT = 'object'
export const NUMBER = 'number'
export const STRING = 'string'
export const BIGINT = 'bigint'
export const SYMBOL = 'symbol'
export const BOOLEAN = 'boolean'
export const FUNCTION = 'function'

export const __DEFINE_GETTER__ = '__defineGetter__'
export const __DEFINE_SETTER__ = '__defineSetter__'
export const __LOOKUP_GETTER__ = '__lookupGetter__'
export const __LOOKUP_SETTER__ = '__lookupSetter__'
export const __PROTO__ = '__proto__'
export const ADD = 'add'
export const ALL = 'all'
export const ALL_SETTLED = 'allSettled'
export const ANCHOR = 'anchor'
export const ANY = 'any'
export const APPLY = 'apply'
export const ARGUMENTS = 'arguments'
export const ASSIGN = 'assign'
export const BIG = 'big'
export const BIND = 'bind'
export const BLINK = 'blink'
export const BOLD = 'bold'
export const CALL = 'call'
export const CALLER = 'caller'
export const CATCH = 'catch'
export const CHAR_AT = 'charAt'
export const CHAR_CODE_AT = 'charCodeAt'
export const CLEAR = 'clear'
export const CODE_POINT_AT = 'codePointAt'
export const COMPILE = 'compile'
export const CONCAT = 'concat'
export const CONSTRUCTOR = 'constructor'
export const COPY_WITHIN = 'copyWithin'
export const CREATE = 'create'
export const DEFINE_PROPERTIES = 'defineProperties'
export const DEFINE_PROPERTY = 'defineProperty'
export const DELETE = 'delete'
export const DOT_ALL = 'dotAll'
export const ENDS_WITH = 'endsWith'
export const ENTRIES = 'entries'
export const EVERY = 'every'
export const EXEC = 'exec'
export const FILL = 'fill'
export const FILTER = 'filter'
export const FINALLY = 'finally'
export const FIND = 'find'
export const FIND_INDEX = 'findIndex'
export const FIXED = 'fixed'
export const FLAGS = 'flags'
export const FLAT = 'flat'
export const FLAT_MAP = 'flatMap'
export const FONTCOLOR = 'fontcolor'
export const FONTSIZE = 'fontsize'
export const FOR_EACH = 'forEach'
export const FREEZE = 'freeze'
export const FROM_ENTRIES = 'fromEntries'
export const GET = 'get'
export const GET_OWN_PROPERTY_DESCRIPTOR = 'getOwnPropertyDescriptor'
export const GET_OWN_PROPERTY_DESCRIPTORS = 'getOwnPropertyDescriptors'
export const GET_OWN_PROPERTY_NAMES = 'getOwnPropertyNames'
export const GET_OWN_PROPERTY_SYMBOLS = 'getOwnPropertySymbols'
export const GET_PROTOTYPE_OF = 'getPrototypeOf'
export const GLOBAL = 'global'
export const HAS = 'has'
export const HAS_INDICES = 'hasIndices'
export const HAS_OWN_PROPERTY = 'hasOwnProperty'
export const IGNORE_CASE = 'ignoreCase'
export const INCLUDES = 'includes'
export const INDEX_OF = 'indexOf'
export const IS = 'is'
export const IS_EXTENSIBLE = 'isExtensible'
export const IS_FROZEN = 'isFrozen'
export const IS_PROTOTYPE_OF = 'isPrototypeOf'
export const IS_SEALED = 'isSealed'
export const ITALICS = 'italics'
export const JOIN = 'join'
export const KEYS = 'keys'
export const LAST_INDEX_OF = 'lastIndexOf'
export const LENGTH = 'length'
export const LINK = 'link'
export const LOCALE_COMPARE = 'localeCompare'
export const MAP = 'map'
export const MATCH = 'match'
export const MATCH_ALL = 'matchAll'
export const MULTILINE = 'multiline'
export const NAME = 'name'
export const NORMALIZE = 'normalize'
export const PAD_END = 'padEnd'
export const PAD_START = 'padStart'
export const POP = 'pop'
export const PREVENT_EXTENSIONS = 'preventExtensions'
export const PROPERTY_IS_ENUMERABLE = 'propertyIsEnumerable'
export const PROTOTYPE = 'prototype'
export const PUSH = 'push'
export const RACE = 'race'
export const REDUCE = 'reduce'
export const REDUCE_RIGHT = 'reduceRight'
export const REJECT = 'reject'
export const REPEAT = 'repeat'
export const REPLACE = 'replace'
export const REPLACE_ALL = 'replaceAll'
export const RESOLVE = 'resolve'
export const REVERSE = 'reverse'
export const SEAL = 'seal'
export const SEARCH = 'search'
export const SET = 'set'
export const SET_PROTOTYPE_OF = 'setPrototypeOf'
export const SHIFT = 'shift'
export const SIZE = 'size'
export const SLICE = 'slice'
export const SMALL = 'small'
export const SOME = 'some'
export const SORT = 'sort'
export const SOURCE = 'source'
export const SPLICE = 'splice'
export const SPLIT = 'split'
export const STARTS_WITH = 'startsWith'
export const STICKY = 'sticky'
export const STRIKE = 'strike'
export const SUB = 'sub'
export const SUBSTR = 'substr'
export const SUBSTRING = 'substring'
export const SUP = 'sup'
export const TEST = 'test'
export const THEN = 'then'
export const TO_LOCALE_LOWER_CASE = 'toLocaleLowerCase'
export const TO_LOCALE_STRING = 'toLocaleString'
export const TO_LOCALE_UPPER_CASE = 'toLocaleUpperCase'
export const TO_LOWER_CASE = 'toLowerCase'
export const TO_STRING = 'toString'
export const TO_UPPER_CASE = 'toUpperCase'
export const TRIM = 'trim'
export const TRIM_END = 'trimEnd'
export const TRIM_LEFT = 'trimLeft'
export const TRIM_RIGHT = 'trimRight'
export const TRIM_START = 'trimStart'
export const UNICODE = 'unicode'
export const UNSHIFT = 'unshift'
export const VALUE_OF = 'valueOf'
export const VALUES = 'values'
