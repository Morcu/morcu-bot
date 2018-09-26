// Generated from /home/morcu/bot/git_folder/morcu-bot/gram/src/cs/gram/gen/M7/TFGGram.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TFGGramVisitor = require('./TFGGramVisitor').TFGGramVisitor;

var grammarFileName = "TFGGram.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003^\u01ac\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0006\u0002\u001c\n\u0002\r\u0002\u000e\u0002\u001d",
    "\u0003\u0003\u0006\u0003!\n\u0003\r\u0003\u000e\u0003\"\u0003\u0003",
    "\u0006\u0003&\n\u0003\r\u0003\u000e\u0003\'\u0003\u0003\u0006\u0003",
    "+\n\u0003\r\u0003\u000e\u0003,\u0003\u0003\u0006\u00030\n\u0003\r\u0003",
    "\u000e\u00031\u0005\u00034\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u00049\n\u0004\f\u0004\u000e\u0004<\u000b\u0004\u0003\u0004\u0005",
    "\u0004?\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004H\n\u0004\f\u0004\u000e\u0004",
    "K\u000b\u0004\u0003\u0004\u0005\u0004N\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004S\n\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0007\u0007Z\n\u0007\f\u0007\u000e\u0007]\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0007\bc\n\b\f\b\u000e",
    "\bf\u000b\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0007\br\n\b\f\b\u000e\bu\u000b\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0007\b{\n\b\f\b\u000e\b~\u000b\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u0086\n\b\f\b\u000e\b\u0089",
    "\u000b\b\u0003\b\u0007\b\u008c\n\b\f\b\u000e\b\u008f\u000b\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0005\b\u0095\n\b\u0003\t\u0003\t\u0005\t\u0099",
    "\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00a0\n\n\f\n\u000e",
    "\n\u00a3\u000b\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00b1\n\n\f\n\u000e",
    "\n\u00b4\u000b\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u00ba\n\n\f",
    "\n\u000e\n\u00bd\u000b\n\u0003\n\u0003\n\u0007\n\u00c1\n\n\f\n\u000e",
    "\n\u00c4\u000b\n\u0003\n\u0007\n\u00c7\n\n\f\n\u000e\n\u00ca\u000b\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0007\n\u00e7\n\n\f\n\u000e\n\u00ea\u000b\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0005\n\u00f0\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f",
    "\u0007\f\u00f6\n\f\f\f\u000e\f\u00f9\u000b\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0007\f\u0108\n\f\f\f\u000e\f\u010b\u000b\f\u0003\f\u0003",
    "\f\u0003\f\u0007\f\u0110\n\f\f\f\u000e\f\u0113\u000b\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007",
    "\f\u011f\n\f\f\f\u000e\f\u0122\u000b\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u012f",
    "\n\f\f\f\u000e\f\u0132\u000b\f\u0003\f\u0007\f\u0135\n\f\f\f\u000e\f",
    "\u0138\u000b\f\u0003\f\u0007\f\u013b\n\f\f\f\u000e\f\u013e\u000b\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\f\u0144\n\f\u0003\r\u0003\r\u0007\r",
    "\u0148\n\r\f\r\u000e\r\u014b\u000b\r\u0003\r\u0007\r\u014e\n\r\f\r\u000e",
    "\r\u0151\u000b\r\u0003\r\u0007\r\u0154\n\r\f\r\u000e\r\u0157\u000b\r",
    "\u0003\r\u0007\r\u015a\n\r\f\r\u000e\r\u015d\u000b\r\u0003\r\u0007\r",
    "\u0160\n\r\f\r\u000e\r\u0163\u000b\r\u0003\r\u0003\r\u0007\r\u0167\n",
    "\r\f\r\u000e\r\u016a\u000b\r\u0003\r\u0003\r\u0007\r\u016e\n\r\f\r\u000e",
    "\r\u0171\u000b\r\u0003\r\u0007\r\u0174\n\r\f\r\u000e\r\u0177\u000b\r",
    "\u0003\r\u0007\r\u017a\n\r\f\r\u000e\r\u017d\u000b\r\u0003\r\u0003\r",
    "\u0007\r\u0181\n\r\f\r\u000e\r\u0184\u000b\r\u0003\r\u0007\r\u0187\n",
    "\r\f\r\u000e\r\u018a\u000b\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0007\r\u0191\n\r\f\r\u000e\r\u0194\u000b\r\u0003\r\u0003\r\u0007\r",
    "\u0198\n\r\f\r\u000e\r\u019b\u000b\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0005\r\u01aa\n\r\u0003\r\u0002\u0002\u000e\u0002\u0004\u0006\b\n",
    "\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002\t\u0003\u0002FG\u0005\u0002",
    "%%))RR\u0004\u0002\u0004\b\n\u0010\u0003\u0002-.\u0004\u0002\u0018\u0018",
    "11\u0004\u0002==BB\u0004\u0002++XX\u0002\u01fc\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u00043\u0003\u0002\u0002\u0002\u0006R\u0003\u0002\u0002",
    "\u0002\bT\u0003\u0002\u0002\u0002\nV\u0003\u0002\u0002\u0002\f[\u0003",
    "\u0002\u0002\u0002\u000e\u0094\u0003\u0002\u0002\u0002\u0010\u0098\u0003",
    "\u0002\u0002\u0002\u0012\u00ef\u0003\u0002\u0002\u0002\u0014\u00f1\u0003",
    "\u0002\u0002\u0002\u0016\u0143\u0003\u0002\u0002\u0002\u0018\u01a9\u0003",
    "\u0002\u0002\u0002\u001a\u001c\u0005\u0004\u0003\u0002\u001b\u001a\u0003",
    "\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001b\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e\u0003\u0003",
    "\u0002\u0002\u0002\u001f!\u0005\u0006\u0004\u0002 \u001f\u0003\u0002",
    "\u0002\u0002!\"\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"",
    "#\u0003\u0002\u0002\u0002#4\u0003\u0002\u0002\u0002$&\u0005\u000e\b",
    "\u0002%$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'%\u0003",
    "\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(4\u0003\u0002\u0002\u0002",
    ")+\u0005\u0018\r\u0002*)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002",
    "\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-4\u0003\u0002",
    "\u0002\u0002.0\u0005\u0016\f\u0002/.\u0003\u0002\u0002\u000201\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "24\u0003\u0002\u0002\u00023 \u0003\u0002\u0002\u00023%\u0003\u0002\u0002",
    "\u00023*\u0003\u0002\u0002\u00023/\u0003\u0002\u0002\u00024\u0005\u0003",
    "\u0002\u0002\u000256\u0007\u0011\u0002\u00026:\u0007\u0012\u0002\u0002",
    "79\u0007\'\u0002\u000287\u0003\u0002\u0002\u00029<\u0003\u0002\u0002",
    "\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;>\u0003\u0002",
    "\u0002\u0002<:\u0003\u0002\u0002\u0002=?\u0005\b\u0005\u0002>=\u0003",
    "\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002",
    "@S\u0005\n\u0006\u0002AB\u0007\'\u0002\u0002BC\u0005\b\u0005\u0002C",
    "D\u0005\n\u0006\u0002DS\u0003\u0002\u0002\u0002EI\u0007\u0013\u0002",
    "\u0002FH\u0007\'\u0002\u0002GF\u0003\u0002\u0002\u0002HK\u0003\u0002",
    "\u0002\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JM\u0003",
    "\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002LN\u0005\b\u0005\u0002M",
    "L\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002",
    "\u0002OS\u0005\n\u0006\u0002PQ\u0007\u0014\u0002\u0002QS\u0005\n\u0006",
    "\u0002R5\u0003\u0002\u0002\u0002RA\u0003\u0002\u0002\u0002RE\u0003\u0002",
    "\u0002\u0002RP\u0003\u0002\u0002\u0002S\u0007\u0003\u0002\u0002\u0002",
    "TU\t\u0002\u0002\u0002U\t\u0003\u0002\u0002\u0002VW\u0007\u0003\u0002",
    "\u0002W\u000b\u0003\u0002\u0002\u0002XZ\t\u0003\u0002\u0002YX\u0003",
    "\u0002\u0002\u0002Z]\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002",
    "[\\\u0003\u0002\u0002\u0002\\^\u0003\u0002\u0002\u0002][\u0003\u0002",
    "\u0002\u0002^_\t\u0004\u0002\u0002_\r\u0003\u0002\u0002\u0002`d\u0007",
    "\u0015\u0002\u0002ac\u0007G\u0002\u0002ba\u0003\u0002\u0002\u0002cf",
    "\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002",
    "\u0002eg\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002gh\u0007%",
    "\u0002\u0002h\u0095\u0005\f\u0007\u0002ij\u0007\u0011\u0002\u0002jk",
    "\u0007\u0012\u0002\u0002kl\u0007Z\u0002\u0002lm\u0007G\u0002\u0002m",
    "n\u0007%\u0002\u0002n\u0095\u0005\f\u0007\u0002os\u0007\u0015\u0002",
    "\u0002pr\u0007G\u0002\u0002qp\u0003\u0002\u0002\u0002ru\u0003\u0002",
    "\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tv\u0003",
    "\u0002\u0002\u0002us\u0003\u0002\u0002\u0002vw\u0007\u0017\u0002\u0002",
    "w\u0095\u0005\n\u0006\u0002x|\u0007Z\u0002\u0002y{\u0007G\u0002\u0002",
    "zy\u0003\u0002\u0002\u0002{~\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002",
    "\u0002|}\u0003\u0002\u0002\u0002}\u007f\u0003\u0002\u0002\u0002~|\u0003",
    "\u0002\u0002\u0002\u007f\u0080\u0007\u0016\u0002\u0002\u0080\u0081\u0007",
    ">\u0002\u0002\u0081\u0095\u0005\n\u0006\u0002\u0082\u0083\u0007\u0015",
    "\u0002\u0002\u0083\u0087\u0007\u0017\u0002\u0002\u0084\u0086\u0007\'",
    "\u0002\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0086\u0089\u0003\u0002",
    "\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002",
    "\u0002\u0002\u0088\u008d\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002",
    "\u0002\u0002\u008a\u008c\u0007G\u0002\u0002\u008b\u008a\u0003\u0002",
    "\u0002\u0002\u008c\u008f\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u0090\u0003\u0002",
    "\u0002\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u0090\u0095\u0005\n",
    "\u0006\u0002\u0091\u0092\u0007G\u0002\u0002\u0092\u0093\u0007%\u0002",
    "\u0002\u0093\u0095\u0005\f\u0007\u0002\u0094`\u0003\u0002\u0002\u0002",
    "\u0094i\u0003\u0002\u0002\u0002\u0094o\u0003\u0002\u0002\u0002\u0094",
    "x\u0003\u0002\u0002\u0002\u0094\u0082\u0003\u0002\u0002\u0002\u0094",
    "\u0091\u0003\u0002\u0002\u0002\u0095\u000f\u0003\u0002\u0002\u0002\u0096",
    "\u0099\u0005\u0012\n\u0002\u0097\u0099\u0005\u0014\u000b\u0002\u0098",
    "\u0096\u0003\u0002\u0002\u0002\u0098\u0097\u0003\u0002\u0002\u0002\u0099",
    "\u0011\u0003\u0002\u0002\u0002\u009a\u00f0\u0007\u0019\u0002\u0002\u009b",
    "\u009c\u0007\u001b\u0002\u0002\u009c\u00f0\u0007\u0019\u0002\u0002\u009d",
    "\u00f0\u0007\u0018\u0002\u0002\u009e\u00a0\u0007\u0018\u0002\u0002\u009f",
    "\u009e\u0003\u0002\u0002\u0002\u00a0\u00a3\u0003\u0002\u0002\u0002\u00a1",
    "\u009f\u0003\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2",
    "\u00a4\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002\u00a4",
    "\u00a5\u0007\u001e\u0002\u0002\u00a5\u00f0\u0007\u001f\u0002\u0002\u00a6",
    "\u00a7\u0007\u001d\u0002\u0002\u00a7\u00f0\u0007 \u0002\u0002\u00a8",
    "\u00a9\u0007!\u0002\u0002\u00a9\u00f0\u0007\"\u0002\u0002\u00aa\u00f0",
    "\u0007#\u0002\u0002\u00ab\u00ac\u0007-\u0002\u0002\u00ac\u00f0\u0007",
    "/\u0002\u0002\u00ad\u00f0\u0007\u001a\u0002\u0002\u00ae\u00b2\u0007",
    "$\u0002\u0002\u00af\u00b1\u0007%\u0002\u0002\u00b0\u00af\u0003\u0002",
    "\u0002\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002",
    "\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\u00b5\u0003\u0002",
    "\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00f0\u0007&",
    "\u0002\u0002\u00b6\u00b7\u0007\u001a\u0002\u0002\u00b7\u00bb\u0007\u001e",
    "\u0002\u0002\u00b8\u00ba\u0007\'\u0002\u0002\u00b9\u00b8\u0003\u0002",
    "\u0002\u0002\u00ba\u00bd\u0003\u0002\u0002\u0002\u00bb\u00b9\u0003\u0002",
    "\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00be\u0003\u0002",
    "\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002\u00be\u00c2\u0007(",
    "\u0002\u0002\u00bf\u00c1\u0007\'\u0002\u0002\u00c0\u00bf\u0003\u0002",
    "\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002",
    "\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c8\u0003\u0002",
    "\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c7\u0007,",
    "\u0002\u0002\u00c6\u00c5\u0003\u0002\u0002\u0002\u00c7\u00ca\u0003\u0002",
    "\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002",
    "\u0002\u0002\u00c9\u00cb\u0003\u0002\u0002\u0002\u00ca\u00c8\u0003\u0002",
    "\u0002\u0002\u00cb\u00cc\u0007)\u0002\u0002\u00cc\u00cd\u0007*\u0002",
    "\u0002\u00cd\u00f0\u0007+\u0002\u0002\u00ce\u00cf\t\u0005\u0002\u0002",
    "\u00cf\u00d0\u0007-\u0002\u0002\u00d0\u00d1\u0007\u001b\u0002\u0002",
    "\u00d1\u00f0\t\u0006\u0002\u0002\u00d2\u00d3\u00072\u0002\u0002\u00d3",
    "\u00d4\t\u0005\u0002\u0002\u00d4\u00d5\u00073\u0002\u0002\u00d5\u00d6",
    "\u00074\u0002\u0002\u00d6\u00d7\u0007\u001e\u0002\u0002\u00d7\u00d8",
    "\u00075\u0002\u0002\u00d8\u00f0\u00076\u0002\u0002\u00d9\u00da\u0007",
    "\u001e\u0002\u0002\u00da\u00db\u00070\u0002\u0002\u00db\u00dc\u0007",
    "7\u0002\u0002\u00dc\u00dd\u0007\u001d\u0002\u0002\u00dd\u00f0\u0007",
    ",\u0002\u0002\u00de\u00df\u00074\u0002\u0002\u00df\u00e0\u0007-\u0002",
    "\u0002\u00e0\u00f0\u0007\u001c\u0002\u0002\u00e1\u00e2\u00077\u0002",
    "\u0002\u00e2\u00f0\u0007\u001b\u0002\u0002\u00e3\u00e4\t\u0005\u0002",
    "\u0002\u00e4\u00e8\u0007-\u0002\u0002\u00e5\u00e7\u00077\u0002\u0002",
    "\u00e6\u00e5\u0003\u0002\u0002\u0002\u00e7\u00ea\u0003\u0002\u0002\u0002",
    "\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002",
    "\u00e9\u00eb\u0003\u0002\u0002\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002",
    "\u00eb\u00f0\u0007\u001b\u0002\u0002\u00ec\u00ed\t\u0005\u0002\u0002",
    "\u00ed\u00ee\u0007\u001e\u0002\u0002\u00ee\u00f0\u0007\u001f\u0002\u0002",
    "\u00ef\u009a\u0003\u0002\u0002\u0002\u00ef\u009b\u0003\u0002\u0002\u0002",
    "\u00ef\u009d\u0003\u0002\u0002\u0002\u00ef\u00a1\u0003\u0002\u0002\u0002",
    "\u00ef\u00a6\u0003\u0002\u0002\u0002\u00ef\u00a8\u0003\u0002\u0002\u0002",
    "\u00ef\u00aa\u0003\u0002\u0002\u0002\u00ef\u00ab\u0003\u0002\u0002\u0002",
    "\u00ef\u00ad\u0003\u0002\u0002\u0002\u00ef\u00ae\u0003\u0002\u0002\u0002",
    "\u00ef\u00b6\u0003\u0002\u0002\u0002\u00ef\u00ce\u0003\u0002\u0002\u0002",
    "\u00ef\u00d2\u0003\u0002\u0002\u0002\u00ef\u00d9\u0003\u0002\u0002\u0002",
    "\u00ef\u00de\u0003\u0002\u0002\u0002\u00ef\u00e1\u0003\u0002\u0002\u0002",
    "\u00ef\u00e3\u0003\u0002\u0002\u0002\u00ef\u00ec\u0003\u0002\u0002\u0002",
    "\u00f0\u0013\u0003\u0002\u0002\u0002\u00f1\u00f2\u00078\u0002\u0002",
    "\u00f2\u0015\u0003\u0002\u0002\u0002\u00f3\u00f7\u00071\u0002\u0002",
    "\u00f4\u00f6\u00071\u0002\u0002\u00f5\u00f4\u0003\u0002\u0002\u0002",
    "\u00f6\u00f9\u0003\u0002\u0002\u0002\u00f7\u00f5\u0003\u0002\u0002\u0002",
    "\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u0144\u0003\u0002\u0002\u0002",
    "\u00f9\u00f7\u0003\u0002\u0002\u0002\u00fa\u00fb\u00071\u0002\u0002",
    "\u00fb\u0144\u0007\u0018\u0002\u0002\u00fc\u00fd\u0007\u0018\u0002\u0002",
    "\u00fd\u0144\u00071\u0002\u0002\u00fe\u00ff\u0007:\u0002\u0002\u00ff",
    "\u0144\u0007;\u0002\u0002\u0100\u0101\u0007\u001e\u0002\u0002\u0101",
    "\u0144\u0007<\u0002\u0002\u0102\u0103\u0007:\u0002\u0002\u0103\u0144",
    "\t\u0007\u0002\u0002\u0104\u0105\u0007\u001e\u0002\u0002\u0105\u0109",
    "\u0007<\u0002\u0002\u0106\u0108\u0007>\u0002\u0002\u0107\u0106\u0003",
    "\u0002\u0002\u0002\u0108\u010b\u0003\u0002\u0002\u0002\u0109\u0107\u0003",
    "\u0002\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010c\u0003",
    "\u0002\u0002\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010c\u0111\u0007",
    "?\u0002\u0002\u010d\u010e\u0007@\u0002\u0002\u010e\u0110\u0007A\u0002",
    "\u0002\u010f\u010d\u0003\u0002\u0002\u0002\u0110\u0113\u0003\u0002\u0002",
    "\u0002\u0111\u010f\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002",
    "\u0002\u0112\u0144\u0003\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002",
    "\u0002\u0114\u0115\u00076\u0002\u0002\u0115\u0144\u0007*\u0002\u0002",
    "\u0116\u0144\u0007C\u0002\u0002\u0117\u0118\u0007D\u0002\u0002\u0118",
    "\u0144\u0007E\u0002\u0002\u0119\u011a\u0007:\u0002\u0002\u011a\u0144",
    "\u0007=\u0002\u0002\u011b\u011c\u0007\u0018\u0002\u0002\u011c\u0120",
    "\u00072\u0002\u0002\u011d\u011f\u0007\'\u0002\u0002\u011e\u011d\u0003",
    "\u0002\u0002\u0002\u011f\u0122\u0003\u0002\u0002\u0002\u0120\u011e\u0003",
    "\u0002\u0002\u0002\u0120\u0121\u0003\u0002\u0002\u0002\u0121\u0123\u0003",
    "\u0002\u0002\u0002\u0122\u0120\u0003\u0002\u0002\u0002\u0123\u0144\u0005",
    "\b\u0005\u0002\u0124\u0125\u0007\u0018\u0002\u0002\u0125\u0126\u0007",
    "\'\u0002\u0002\u0126\u0144\u00072\u0002\u0002\u0127\u0128\u00072\u0002",
    "\u0002\u0128\u0129\t\u0005\u0002\u0002\u0129\u0144\u0005\b\u0005\u0002",
    "\u012a\u012b\u0007-\u0002\u0002\u012b\u012c\u0007D\u0002\u0002\u012c",
    "\u0136\u0007E\u0002\u0002\u012d\u012f\u0007H\u0002\u0002\u012e\u012d",
    "\u0003\u0002\u0002\u0002\u012f\u0132\u0003\u0002\u0002\u0002\u0130\u012e",
    "\u0003\u0002\u0002\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u0131\u0133",
    "\u0003\u0002\u0002\u0002\u0132\u0130\u0003\u0002\u0002\u0002\u0133\u0135",
    "\u0007I\u0002\u0002\u0134\u0130\u0003\u0002\u0002\u0002\u0135\u0138",
    "\u0003\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002\u0002\u0136\u0137",
    "\u0003\u0002\u0002\u0002\u0137\u013c\u0003\u0002\u0002\u0002\u0138\u0136",
    "\u0003\u0002\u0002\u0002\u0139\u013b\u0007\u0018\u0002\u0002\u013a\u0139",
    "\u0003\u0002\u0002\u0002\u013b\u013e\u0003\u0002\u0002\u0002\u013c\u013a",
    "\u0003\u0002\u0002\u0002\u013c\u013d\u0003\u0002\u0002\u0002\u013d\u0144",
    "\u0003\u0002\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013f\u0140",
    "\u00074\u0002\u0002\u0140\u0144\u0007\u0018\u0002\u0002\u0141\u0142",
    "\u0007\u001d\u0002\u0002\u0142\u0144\u0007J\u0002\u0002\u0143\u00f3",
    "\u0003\u0002\u0002\u0002\u0143\u00fa\u0003\u0002\u0002\u0002\u0143\u00fc",
    "\u0003\u0002\u0002\u0002\u0143\u00fe\u0003\u0002\u0002\u0002\u0143\u0100",
    "\u0003\u0002\u0002\u0002\u0143\u0102\u0003\u0002\u0002\u0002\u0143\u0104",
    "\u0003\u0002\u0002\u0002\u0143\u0114\u0003\u0002\u0002\u0002\u0143\u0116",
    "\u0003\u0002\u0002\u0002\u0143\u0117\u0003\u0002\u0002\u0002\u0143\u0119",
    "\u0003\u0002\u0002\u0002\u0143\u011b\u0003\u0002\u0002\u0002\u0143\u0124",
    "\u0003\u0002\u0002\u0002\u0143\u0127\u0003\u0002\u0002\u0002\u0143\u012a",
    "\u0003\u0002\u0002\u0002\u0143\u013f\u0003\u0002\u0002\u0002\u0143\u0141",
    "\u0003\u0002\u0002\u0002\u0144\u0017\u0003\u0002\u0002\u0002\u0145\u0149",
    "\u0007K\u0002\u0002\u0146\u0148\u0007%\u0002\u0002\u0147\u0146\u0003",
    "\u0002\u0002\u0002\u0148\u014b\u0003\u0002\u0002\u0002\u0149\u0147\u0003",
    "\u0002\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a\u014f\u0003",
    "\u0002\u0002\u0002\u014b\u0149\u0003\u0002\u0002\u0002\u014c\u014e\u0007",
    "U\u0002\u0002\u014d\u014c\u0003\u0002\u0002\u0002\u014e\u0151\u0003",
    "\u0002\u0002\u0002\u014f\u014d\u0003\u0002\u0002\u0002\u014f\u0150\u0003",
    "\u0002\u0002\u0002\u0150\u0155\u0003\u0002\u0002\u0002\u0151\u014f\u0003",
    "\u0002\u0002\u0002\u0152\u0154\u0007P\u0002\u0002\u0153\u0152\u0003",
    "\u0002\u0002\u0002\u0154\u0157\u0003\u0002\u0002\u0002\u0155\u0153\u0003",
    "\u0002\u0002\u0002\u0155\u0156\u0003\u0002\u0002\u0002\u0156\u015b\u0003",
    "\u0002\u0002\u0002\u0157\u0155\u0003\u0002\u0002\u0002\u0158\u015a\u0007",
    "V\u0002\u0002\u0159\u0158\u0003\u0002\u0002\u0002\u015a\u015d\u0003",
    "\u0002\u0002\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015b\u015c\u0003",
    "\u0002\u0002\u0002\u015c\u0161\u0003\u0002\u0002\u0002\u015d\u015b\u0003",
    "\u0002\u0002\u0002\u015e\u0160\u0007M\u0002\u0002\u015f\u015e\u0003",
    "\u0002\u0002\u0002\u0160\u0163\u0003\u0002\u0002\u0002\u0161\u015f\u0003",
    "\u0002\u0002\u0002\u0161\u0162\u0003\u0002\u0002\u0002\u0162\u01aa\u0003",
    "\u0002\u0002\u0002\u0163\u0161\u0003\u0002\u0002\u0002\u0164\u0168\u0007",
    "K\u0002\u0002\u0165\u0167\u0007M\u0002\u0002\u0166\u0165\u0003\u0002",
    "\u0002\u0002\u0167\u016a\u0003\u0002\u0002\u0002\u0168\u0166\u0003\u0002",
    "\u0002\u0002\u0168\u0169\u0003\u0002\u0002\u0002\u0169\u016b\u0003\u0002",
    "\u0002\u0002\u016a\u0168\u0003\u0002\u0002\u0002\u016b\u016f\u0007\u001d",
    "\u0002\u0002\u016c\u016e\u0007R\u0002\u0002\u016d\u016c\u0003\u0002",
    "\u0002\u0002\u016e\u0171\u0003\u0002\u0002\u0002\u016f\u016d\u0003\u0002",
    "\u0002\u0002\u016f\u0170\u0003\u0002\u0002\u0002\u0170\u0175\u0003\u0002",
    "\u0002\u0002\u0171\u016f\u0003\u0002\u0002\u0002\u0172\u0174\u0007[",
    "\u0002\u0002\u0173\u0172\u0003\u0002\u0002\u0002\u0174\u0177\u0003\u0002",
    "\u0002\u0002\u0175\u0173\u0003\u0002\u0002\u0002\u0175\u0176\u0003\u0002",
    "\u0002\u0002\u0176\u01aa\u0003\u0002\u0002\u0002\u0177\u0175\u0003\u0002",
    "\u0002\u0002\u0178\u017a\u0007K\u0002\u0002\u0179\u0178\u0003\u0002",
    "\u0002\u0002\u017a\u017d\u0003\u0002\u0002\u0002\u017b\u0179\u0003\u0002",
    "\u0002\u0002\u017b\u017c\u0003\u0002\u0002\u0002\u017c\u017e\u0003\u0002",
    "\u0002\u0002\u017d\u017b\u0003\u0002\u0002\u0002\u017e\u0182\u0007\u001d",
    "\u0002\u0002\u017f\u0181\t\b\u0002\u0002\u0180\u017f\u0003\u0002\u0002",
    "\u0002\u0181\u0184\u0003\u0002\u0002\u0002\u0182\u0180\u0003\u0002\u0002",
    "\u0002\u0182\u0183\u0003\u0002\u0002\u0002\u0183\u0188\u0003\u0002\u0002",
    "\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0185\u0187\u0007M\u0002",
    "\u0002\u0186\u0185\u0003\u0002\u0002\u0002\u0187\u018a\u0003\u0002\u0002",
    "\u0002\u0188\u0186\u0003\u0002\u0002\u0002\u0188\u0189\u0003\u0002\u0002",
    "\u0002\u0189\u01aa\u0003\u0002\u0002\u0002\u018a\u0188\u0003\u0002\u0002",
    "\u0002\u018b\u018c\u0007N\u0002\u0002\u018c\u018d\u0007O\u0002\u0002",
    "\u018d\u01aa\u0007Q\u0002\u0002\u018e\u0192\u0007\u001b\u0002\u0002",
    "\u018f\u0191\u0007\u001e\u0002\u0002\u0190\u018f\u0003\u0002\u0002\u0002",
    "\u0191\u0194\u0003\u0002\u0002\u0002\u0192\u0190\u0003\u0002\u0002\u0002",
    "\u0192\u0193\u0003\u0002\u0002\u0002\u0193\u0195\u0003\u0002\u0002\u0002",
    "\u0194\u0192\u0003\u0002\u0002\u0002\u0195\u0199\u0007\u001f\u0002\u0002",
    "\u0196\u0198\u0007R\u0002\u0002\u0197\u0196\u0003\u0002\u0002\u0002",
    "\u0198\u019b\u0003\u0002\u0002\u0002\u0199\u0197\u0003\u0002\u0002\u0002",
    "\u0199\u019a\u0003\u0002\u0002\u0002\u019a\u019c\u0003\u0002\u0002\u0002",
    "\u019b\u0199\u0003\u0002\u0002\u0002\u019c\u019d\u0007S\u0002\u0002",
    "\u019d\u01aa\u0007Q\u0002\u0002\u019e\u01aa\u0007W\u0002\u0002\u019f",
    "\u01a0\u0007K\u0002\u0002\u01a0\u01a1\u0007-\u0002\u0002\u01a1\u01a2",
    "\u0007D\u0002\u0002\u01a2\u01a3\u0007Z\u0002\u0002\u01a3\u01aa\u0007",
    "Y\u0002\u0002\u01a4\u01a5\u0007K\u0002\u0002\u01a5\u01a6\u0007\\\u0002",
    "\u0002\u01a6\u01a7\u0007T\u0002\u0002\u01a7\u01a8\u0007%\u0002\u0002",
    "\u01a8\u01aa\u0007U\u0002\u0002\u01a9\u0145\u0003\u0002\u0002\u0002",
    "\u01a9\u0164\u0003\u0002\u0002\u0002\u01a9\u017b\u0003\u0002\u0002\u0002",
    "\u01a9\u018b\u0003\u0002\u0002\u0002\u01a9\u018e\u0003\u0002\u0002\u0002",
    "\u01a9\u019e\u0003\u0002\u0002\u0002\u01a9\u019f\u0003\u0002\u0002\u0002",
    "\u01a9\u01a4\u0003\u0002\u0002\u0002\u01aa\u0019\u0003\u0002\u0002\u0002",
    "2\u001d\"\',13:>IMR[ds|\u0087\u008d\u0094\u0098\u00a1\u00b2\u00bb\u00c2",
    "\u00c8\u00e8\u00ef\u00f7\u0109\u0111\u0120\u0130\u0136\u013c\u0143\u0149",
    "\u014f\u0155\u015b\u0161\u0168\u016f\u0175\u017b\u0182\u0188\u0192\u0199",
    "\u01a9"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'titulo'", null, "'miedo'", null, null, null, 
                     null, null, "'deportes'", null, null, null, null, null, 
                     "'quiero'", "'ver'", "'ense\u00F1ame'", "'tienes'", 
                     null, "'parecida'", "'como'", "'gracias'", "'genial'", 
                     "'perfecto'", "'bien'", "'mal'", null, "'me'", null, 
                     "'seleccion'", "'ahora'", "'si'", "'ole'", "'acabo'", 
                     "'de'", "'verla'", "'la'", "'guardo'", "'para'", "'mas'", 
                     "'tarde'", null, null, null, "'era'", null, "'adios'", 
                     "'vere'", "'pero'", "'no'", "'convences'", "'nada'", 
                     "'muy'", "'negativo'", "'bye'", "'hasta'", "'luego'", 
                     "'voy'", "'ma\u00F1ana'", "'a'", "'trabajar'", "'un'", 
                     "'rato'", "'pronto'", "'chao'", "'es'", "'todo'", "'serie'", 
                     null, "'por'", "'hoy'", "'noches'", null, "'tardes'", 
                     null, "'ya'", "'has'", "'otra'", "'vuelto'", "'que'", 
                     "'hayas'", "'estoy'", "'nuevo'", "'vez'", "'empezar'", 
                     null, "'prueba'", "'una'", null, "'aqui'" ];

var symbolicNames = [ null, "TITULO", "COMEDIA", "MIEDO", "DRAMA", "AVENTURA", 
                      "ACCION", "FICCION", "ROMANTICA", "DEPORTES", "DOCUMENTAL", 
                      "ENTRETENIMIENTO", "PENSAR", "CLASICA", "SUSPENSE", 
                      "QUIERO", "VER", "ENSENAME", "TIENES", "ALGO", "PARECIDA", 
                      "COMO", "GRACIAS", "GENIAL", "PERFECTO", "BIEN", "MAL", 
                      "BUENA", "ME", "GUSTA", "SELECCION", "AHORA", "SI", 
                      "OLE", "ACABO", "DE", "VERLA", "LA", "GUARDO", "PARA", 
                      "MAS", "TARDE", "RECOMENDACION", "ESTA", "ESA", "ERA", 
                      "PARECE", "ADIOS", "VERE", "PERO", "NO", "CONVENCES", 
                      "NADA", "MUY", "NEGATIVO", "BYE", "HASTA", "LUEGO", 
                      "VOY", "MANANA", "A", "TRABAJAR", "UN", "RATO", "PRONTO", 
                      "CHAO", "ES", "TODO", "SERIE", "PELICULA", "POR", 
                      "HOY", "NOCHES", "HOLA", "TARDES", "BOT", "YA", "HAS", 
                      "OTRA", "VUELTO", "QUE", "HAYAS", "ESTOY", "NUEVO", 
                      "VEZ", "EMPEZAR", "DIAS", "PRUEBA", "UNA", "TAL", 
                      "AQUI", "WS", "PUNT" ];

var ruleNames =  [ "intents", "intent", "tfg_intent_find", "tipo_contenido", 
                   "titulo", "genero", "tfg_intent_recommendC2C", "feedback", 
                   "positivo", "negativo", "tfg_intent_bye", "tfg_intent_saludo" ];

function TFGGramParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TFGGramParser.prototype = Object.create(antlr4.Parser.prototype);
TFGGramParser.prototype.constructor = TFGGramParser;

Object.defineProperty(TFGGramParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TFGGramParser.EOF = antlr4.Token.EOF;
TFGGramParser.TITULO = 1;
TFGGramParser.COMEDIA = 2;
TFGGramParser.MIEDO = 3;
TFGGramParser.DRAMA = 4;
TFGGramParser.AVENTURA = 5;
TFGGramParser.ACCION = 6;
TFGGramParser.FICCION = 7;
TFGGramParser.ROMANTICA = 8;
TFGGramParser.DEPORTES = 9;
TFGGramParser.DOCUMENTAL = 10;
TFGGramParser.ENTRETENIMIENTO = 11;
TFGGramParser.PENSAR = 12;
TFGGramParser.CLASICA = 13;
TFGGramParser.SUSPENSE = 14;
TFGGramParser.QUIERO = 15;
TFGGramParser.VER = 16;
TFGGramParser.ENSENAME = 17;
TFGGramParser.TIENES = 18;
TFGGramParser.ALGO = 19;
TFGGramParser.PARECIDA = 20;
TFGGramParser.COMO = 21;
TFGGramParser.GRACIAS = 22;
TFGGramParser.GENIAL = 23;
TFGGramParser.PERFECTO = 24;
TFGGramParser.BIEN = 25;
TFGGramParser.MAL = 26;
TFGGramParser.BUENA = 27;
TFGGramParser.ME = 28;
TFGGramParser.GUSTA = 29;
TFGGramParser.SELECCION = 30;
TFGGramParser.AHORA = 31;
TFGGramParser.SI = 32;
TFGGramParser.OLE = 33;
TFGGramParser.ACABO = 34;
TFGGramParser.DE = 35;
TFGGramParser.VERLA = 36;
TFGGramParser.LA = 37;
TFGGramParser.GUARDO = 38;
TFGGramParser.PARA = 39;
TFGGramParser.MAS = 40;
TFGGramParser.TARDE = 41;
TFGGramParser.RECOMENDACION = 42;
TFGGramParser.ESTA = 43;
TFGGramParser.ESA = 44;
TFGGramParser.ERA = 45;
TFGGramParser.PARECE = 46;
TFGGramParser.ADIOS = 47;
TFGGramParser.VERE = 48;
TFGGramParser.PERO = 49;
TFGGramParser.NO = 50;
TFGGramParser.CONVENCES = 51;
TFGGramParser.NADA = 52;
TFGGramParser.MUY = 53;
TFGGramParser.NEGATIVO = 54;
TFGGramParser.BYE = 55;
TFGGramParser.HASTA = 56;
TFGGramParser.LUEGO = 57;
TFGGramParser.VOY = 58;
TFGGramParser.MANANA = 59;
TFGGramParser.A = 60;
TFGGramParser.TRABAJAR = 61;
TFGGramParser.UN = 62;
TFGGramParser.RATO = 63;
TFGGramParser.PRONTO = 64;
TFGGramParser.CHAO = 65;
TFGGramParser.ES = 66;
TFGGramParser.TODO = 67;
TFGGramParser.SERIE = 68;
TFGGramParser.PELICULA = 69;
TFGGramParser.POR = 70;
TFGGramParser.HOY = 71;
TFGGramParser.NOCHES = 72;
TFGGramParser.HOLA = 73;
TFGGramParser.TARDES = 74;
TFGGramParser.BOT = 75;
TFGGramParser.YA = 76;
TFGGramParser.HAS = 77;
TFGGramParser.OTRA = 78;
TFGGramParser.VUELTO = 79;
TFGGramParser.QUE = 80;
TFGGramParser.HAYAS = 81;
TFGGramParser.ESTOY = 82;
TFGGramParser.NUEVO = 83;
TFGGramParser.VEZ = 84;
TFGGramParser.EMPEZAR = 85;
TFGGramParser.DIAS = 86;
TFGGramParser.PRUEBA = 87;
TFGGramParser.UNA = 88;
TFGGramParser.TAL = 89;
TFGGramParser.AQUI = 90;
TFGGramParser.WS = 91;
TFGGramParser.PUNT = 92;

TFGGramParser.RULE_intents = 0;
TFGGramParser.RULE_intent = 1;
TFGGramParser.RULE_tfg_intent_find = 2;
TFGGramParser.RULE_tipo_contenido = 3;
TFGGramParser.RULE_titulo = 4;
TFGGramParser.RULE_genero = 5;
TFGGramParser.RULE_tfg_intent_recommendC2C = 6;
TFGGramParser.RULE_feedback = 7;
TFGGramParser.RULE_positivo = 8;
TFGGramParser.RULE_negativo = 9;
TFGGramParser.RULE_tfg_intent_bye = 10;
TFGGramParser.RULE_tfg_intent_saludo = 11;

function IntentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_intents;
    return this;
}

IntentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntentsContext.prototype.constructor = IntentsContext;

IntentsContext.prototype.intent = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IntentContext);
    } else {
        return this.getTypedRuleContext(IntentContext,i);
    }
};

IntentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitIntents(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.IntentsContext = IntentsContext;

TFGGramParser.prototype.intents = function() {

    var localctx = new IntentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TFGGramParser.RULE_intents);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 24;
            this.intent();
            this.state = 27; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TFGGramParser.QUIERO) | (1 << TFGGramParser.ENSENAME) | (1 << TFGGramParser.TIENES) | (1 << TFGGramParser.ALGO) | (1 << TFGGramParser.GRACIAS) | (1 << TFGGramParser.BIEN) | (1 << TFGGramParser.BUENA) | (1 << TFGGramParser.ME))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (TFGGramParser.LA - 37)) | (1 << (TFGGramParser.ESTA - 37)) | (1 << (TFGGramParser.ADIOS - 37)) | (1 << (TFGGramParser.VERE - 37)) | (1 << (TFGGramParser.NO - 37)) | (1 << (TFGGramParser.NADA - 37)) | (1 << (TFGGramParser.HASTA - 37)) | (1 << (TFGGramParser.CHAO - 37)) | (1 << (TFGGramParser.ES - 37)))) !== 0) || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (TFGGramParser.PELICULA - 69)) | (1 << (TFGGramParser.HOLA - 69)) | (1 << (TFGGramParser.YA - 69)) | (1 << (TFGGramParser.EMPEZAR - 69)) | (1 << (TFGGramParser.UNA - 69)))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_intent;
    return this;
}

IntentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntentContext.prototype.constructor = IntentContext;

IntentContext.prototype.tfg_intent_find = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Tfg_intent_findContext);
    } else {
        return this.getTypedRuleContext(Tfg_intent_findContext,i);
    }
};

IntentContext.prototype.tfg_intent_recommendC2C = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Tfg_intent_recommendC2CContext);
    } else {
        return this.getTypedRuleContext(Tfg_intent_recommendC2CContext,i);
    }
};

IntentContext.prototype.tfg_intent_saludo = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Tfg_intent_saludoContext);
    } else {
        return this.getTypedRuleContext(Tfg_intent_saludoContext,i);
    }
};

IntentContext.prototype.tfg_intent_bye = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Tfg_intent_byeContext);
    } else {
        return this.getTypedRuleContext(Tfg_intent_byeContext,i);
    }
};

IntentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitIntent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.IntentContext = IntentContext;

TFGGramParser.prototype.intent = function() {

    var localctx = new IntentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TFGGramParser.RULE_intent);
    try {
        this.state = 49;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 30; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 29;
            		this.tfg_intent_find();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 32; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 35; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 34;
            		this.tfg_intent_recommendC2C();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 37; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 40; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 39;
            		this.tfg_intent_saludo();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 42; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 45; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 44;
            		this.tfg_intent_bye();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 47; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Tfg_intent_findContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_tfg_intent_find;
    return this;
}

Tfg_intent_findContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tfg_intent_findContext.prototype.constructor = Tfg_intent_findContext;

Tfg_intent_findContext.prototype.QUIERO = function() {
    return this.getToken(TFGGramParser.QUIERO, 0);
};

Tfg_intent_findContext.prototype.VER = function() {
    return this.getToken(TFGGramParser.VER, 0);
};

Tfg_intent_findContext.prototype.titulo = function() {
    return this.getTypedRuleContext(TituloContext,0);
};

Tfg_intent_findContext.prototype.LA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.LA);
    } else {
        return this.getToken(TFGGramParser.LA, i);
    }
};


Tfg_intent_findContext.prototype.tipo_contenido = function() {
    return this.getTypedRuleContext(Tipo_contenidoContext,0);
};

Tfg_intent_findContext.prototype.ENSENAME = function() {
    return this.getToken(TFGGramParser.ENSENAME, 0);
};

Tfg_intent_findContext.prototype.TIENES = function() {
    return this.getToken(TFGGramParser.TIENES, 0);
};

Tfg_intent_findContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitTfg_intent_find(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.Tfg_intent_findContext = Tfg_intent_findContext;

TFGGramParser.prototype.tfg_intent_find = function() {

    var localctx = new Tfg_intent_findContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TFGGramParser.RULE_tfg_intent_find);
    var _la = 0; // Token type
    try {
        this.state = 80;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TFGGramParser.QUIERO:
            this.enterOuterAlt(localctx, 1);
            this.state = 51;
            this.match(TFGGramParser.QUIERO);
            this.state = 52;
            this.match(TFGGramParser.VER);
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.LA) {
                this.state = 53;
                this.match(TFGGramParser.LA);
                this.state = 58;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TFGGramParser.SERIE || _la===TFGGramParser.PELICULA) {
                this.state = 59;
                this.tipo_contenido();
            }

            this.state = 62;
            this.titulo();
            break;
        case TFGGramParser.LA:
            this.enterOuterAlt(localctx, 2);
            this.state = 63;
            this.match(TFGGramParser.LA);
            this.state = 64;
            this.tipo_contenido();
            this.state = 65;
            this.titulo();
            break;
        case TFGGramParser.ENSENAME:
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.match(TFGGramParser.ENSENAME);
            this.state = 71;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.LA) {
                this.state = 68;
                this.match(TFGGramParser.LA);
                this.state = 73;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===TFGGramParser.SERIE || _la===TFGGramParser.PELICULA) {
                this.state = 74;
                this.tipo_contenido();
            }

            this.state = 77;
            this.titulo();
            break;
        case TFGGramParser.TIENES:
            this.enterOuterAlt(localctx, 4);
            this.state = 78;
            this.match(TFGGramParser.TIENES);
            this.state = 79;
            this.titulo();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Tipo_contenidoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_tipo_contenido;
    return this;
}

Tipo_contenidoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tipo_contenidoContext.prototype.constructor = Tipo_contenidoContext;

Tipo_contenidoContext.prototype.SERIE = function() {
    return this.getToken(TFGGramParser.SERIE, 0);
};

Tipo_contenidoContext.prototype.PELICULA = function() {
    return this.getToken(TFGGramParser.PELICULA, 0);
};

Tipo_contenidoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitTipo_contenido(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.Tipo_contenidoContext = Tipo_contenidoContext;

TFGGramParser.prototype.tipo_contenido = function() {

    var localctx = new Tipo_contenidoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TFGGramParser.RULE_tipo_contenido);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        _la = this._input.LA(1);
        if(!(_la===TFGGramParser.SERIE || _la===TFGGramParser.PELICULA)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TituloContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_titulo;
    return this;
}

TituloContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TituloContext.prototype.constructor = TituloContext;

TituloContext.prototype.TITULO = function() {
    return this.getToken(TFGGramParser.TITULO, 0);
};

TituloContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitTitulo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.TituloContext = TituloContext;

TFGGramParser.prototype.titulo = function() {

    var localctx = new TituloContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TFGGramParser.RULE_titulo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.match(TFGGramParser.TITULO);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GeneroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_genero;
    return this;
}

GeneroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GeneroContext.prototype.constructor = GeneroContext;

GeneroContext.prototype.COMEDIA = function() {
    return this.getToken(TFGGramParser.COMEDIA, 0);
};

GeneroContext.prototype.MIEDO = function() {
    return this.getToken(TFGGramParser.MIEDO, 0);
};

GeneroContext.prototype.AVENTURA = function() {
    return this.getToken(TFGGramParser.AVENTURA, 0);
};

GeneroContext.prototype.DRAMA = function() {
    return this.getToken(TFGGramParser.DRAMA, 0);
};

GeneroContext.prototype.ACCION = function() {
    return this.getToken(TFGGramParser.ACCION, 0);
};

GeneroContext.prototype.ROMANTICA = function() {
    return this.getToken(TFGGramParser.ROMANTICA, 0);
};

GeneroContext.prototype.DEPORTES = function() {
    return this.getToken(TFGGramParser.DEPORTES, 0);
};

GeneroContext.prototype.DOCUMENTAL = function() {
    return this.getToken(TFGGramParser.DOCUMENTAL, 0);
};

GeneroContext.prototype.ENTRETENIMIENTO = function() {
    return this.getToken(TFGGramParser.ENTRETENIMIENTO, 0);
};

GeneroContext.prototype.PENSAR = function() {
    return this.getToken(TFGGramParser.PENSAR, 0);
};

GeneroContext.prototype.CLASICA = function() {
    return this.getToken(TFGGramParser.CLASICA, 0);
};

GeneroContext.prototype.SUSPENSE = function() {
    return this.getToken(TFGGramParser.SUSPENSE, 0);
};

GeneroContext.prototype.PARA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.PARA);
    } else {
        return this.getToken(TFGGramParser.PARA, i);
    }
};


GeneroContext.prototype.DE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.DE);
    } else {
        return this.getToken(TFGGramParser.DE, i);
    }
};


GeneroContext.prototype.QUE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.QUE);
    } else {
        return this.getToken(TFGGramParser.QUE, i);
    }
};


GeneroContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitGenero(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.GeneroContext = GeneroContext;

TFGGramParser.prototype.genero = function() {

    var localctx = new GeneroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TFGGramParser.RULE_genero);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 89;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TFGGramParser.DE || _la===TFGGramParser.PARA || _la===TFGGramParser.QUE) {
            this.state = 86;
            _la = this._input.LA(1);
            if(!(_la===TFGGramParser.DE || _la===TFGGramParser.PARA || _la===TFGGramParser.QUE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 91;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 92;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TFGGramParser.COMEDIA) | (1 << TFGGramParser.MIEDO) | (1 << TFGGramParser.DRAMA) | (1 << TFGGramParser.AVENTURA) | (1 << TFGGramParser.ACCION) | (1 << TFGGramParser.ROMANTICA) | (1 << TFGGramParser.DEPORTES) | (1 << TFGGramParser.DOCUMENTAL) | (1 << TFGGramParser.ENTRETENIMIENTO) | (1 << TFGGramParser.PENSAR) | (1 << TFGGramParser.CLASICA) | (1 << TFGGramParser.SUSPENSE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Tfg_intent_recommendC2CContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_tfg_intent_recommendC2C;
    return this;
}

Tfg_intent_recommendC2CContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tfg_intent_recommendC2CContext.prototype.constructor = Tfg_intent_recommendC2CContext;

Tfg_intent_recommendC2CContext.prototype.ALGO = function() {
    return this.getToken(TFGGramParser.ALGO, 0);
};

Tfg_intent_recommendC2CContext.prototype.DE = function() {
    return this.getToken(TFGGramParser.DE, 0);
};

Tfg_intent_recommendC2CContext.prototype.genero = function() {
    return this.getTypedRuleContext(GeneroContext,0);
};

Tfg_intent_recommendC2CContext.prototype.PELICULA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.PELICULA);
    } else {
        return this.getToken(TFGGramParser.PELICULA, i);
    }
};


Tfg_intent_recommendC2CContext.prototype.QUIERO = function() {
    return this.getToken(TFGGramParser.QUIERO, 0);
};

Tfg_intent_recommendC2CContext.prototype.VER = function() {
    return this.getToken(TFGGramParser.VER, 0);
};

Tfg_intent_recommendC2CContext.prototype.UNA = function() {
    return this.getToken(TFGGramParser.UNA, 0);
};

Tfg_intent_recommendC2CContext.prototype.COMO = function() {
    return this.getToken(TFGGramParser.COMO, 0);
};

Tfg_intent_recommendC2CContext.prototype.titulo = function() {
    return this.getTypedRuleContext(TituloContext,0);
};

Tfg_intent_recommendC2CContext.prototype.PARECIDA = function() {
    return this.getToken(TFGGramParser.PARECIDA, 0);
};

Tfg_intent_recommendC2CContext.prototype.A = function() {
    return this.getToken(TFGGramParser.A, 0);
};

Tfg_intent_recommendC2CContext.prototype.LA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.LA);
    } else {
        return this.getToken(TFGGramParser.LA, i);
    }
};


Tfg_intent_recommendC2CContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitTfg_intent_recommendC2C(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.Tfg_intent_recommendC2CContext = Tfg_intent_recommendC2CContext;

TFGGramParser.prototype.tfg_intent_recommendC2C = function() {

    var localctx = new Tfg_intent_recommendC2CContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TFGGramParser.RULE_tfg_intent_recommendC2C);
    var _la = 0; // Token type
    try {
        this.state = 146;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.match(TFGGramParser.ALGO);
            this.state = 98;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.PELICULA) {
                this.state = 95;
                this.match(TFGGramParser.PELICULA);
                this.state = 100;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 101;
            this.match(TFGGramParser.DE);
            this.state = 102;
            this.genero();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 103;
            this.match(TFGGramParser.QUIERO);
            this.state = 104;
            this.match(TFGGramParser.VER);
            this.state = 105;
            this.match(TFGGramParser.UNA);
            this.state = 106;
            this.match(TFGGramParser.PELICULA);
            this.state = 107;
            this.match(TFGGramParser.DE);
            this.state = 108;
            this.genero();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 109;
            this.match(TFGGramParser.ALGO);
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.PELICULA) {
                this.state = 110;
                this.match(TFGGramParser.PELICULA);
                this.state = 115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 116;
            this.match(TFGGramParser.COMO);
            this.state = 117;
            this.titulo();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 118;
            this.match(TFGGramParser.UNA);
            this.state = 122;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.PELICULA) {
                this.state = 119;
                this.match(TFGGramParser.PELICULA);
                this.state = 124;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 125;
            this.match(TFGGramParser.PARECIDA);
            this.state = 126;
            this.match(TFGGramParser.A);
            this.state = 127;
            this.titulo();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 128;
            this.match(TFGGramParser.ALGO);
            this.state = 129;
            this.match(TFGGramParser.COMO);
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.LA) {
                this.state = 130;
                this.match(TFGGramParser.LA);
                this.state = 135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.PELICULA) {
                this.state = 136;
                this.match(TFGGramParser.PELICULA);
                this.state = 141;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 142;
            this.titulo();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 143;
            this.match(TFGGramParser.PELICULA);
            this.state = 144;
            this.match(TFGGramParser.DE);
            this.state = 145;
            this.genero();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FeedbackContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_feedback;
    return this;
}

FeedbackContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FeedbackContext.prototype.constructor = FeedbackContext;

FeedbackContext.prototype.positivo = function() {
    return this.getTypedRuleContext(PositivoContext,0);
};

FeedbackContext.prototype.negativo = function() {
    return this.getTypedRuleContext(NegativoContext,0);
};

FeedbackContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitFeedback(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.FeedbackContext = FeedbackContext;

TFGGramParser.prototype.feedback = function() {

    var localctx = new FeedbackContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TFGGramParser.RULE_feedback);
    try {
        this.state = 150;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TFGGramParser.GRACIAS:
        case TFGGramParser.GENIAL:
        case TFGGramParser.PERFECTO:
        case TFGGramParser.BIEN:
        case TFGGramParser.BUENA:
        case TFGGramParser.ME:
        case TFGGramParser.AHORA:
        case TFGGramParser.OLE:
        case TFGGramParser.ACABO:
        case TFGGramParser.ESTA:
        case TFGGramParser.ESA:
        case TFGGramParser.VERE:
        case TFGGramParser.NO:
        case TFGGramParser.MUY:
            this.enterOuterAlt(localctx, 1);
            this.state = 148;
            this.positivo();
            break;
        case TFGGramParser.NEGATIVO:
            this.enterOuterAlt(localctx, 2);
            this.state = 149;
            this.negativo();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PositivoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_positivo;
    return this;
}

PositivoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PositivoContext.prototype.constructor = PositivoContext;

PositivoContext.prototype.GENIAL = function() {
    return this.getToken(TFGGramParser.GENIAL, 0);
};

PositivoContext.prototype.BIEN = function() {
    return this.getToken(TFGGramParser.BIEN, 0);
};

PositivoContext.prototype.GRACIAS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.GRACIAS);
    } else {
        return this.getToken(TFGGramParser.GRACIAS, i);
    }
};


PositivoContext.prototype.ME = function() {
    return this.getToken(TFGGramParser.ME, 0);
};

PositivoContext.prototype.GUSTA = function() {
    return this.getToken(TFGGramParser.GUSTA, 0);
};

PositivoContext.prototype.BUENA = function() {
    return this.getToken(TFGGramParser.BUENA, 0);
};

PositivoContext.prototype.SELECCION = function() {
    return this.getToken(TFGGramParser.SELECCION, 0);
};

PositivoContext.prototype.AHORA = function() {
    return this.getToken(TFGGramParser.AHORA, 0);
};

PositivoContext.prototype.SI = function() {
    return this.getToken(TFGGramParser.SI, 0);
};

PositivoContext.prototype.OLE = function() {
    return this.getToken(TFGGramParser.OLE, 0);
};

PositivoContext.prototype.ESTA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.ESTA);
    } else {
        return this.getToken(TFGGramParser.ESTA, i);
    }
};


PositivoContext.prototype.ERA = function() {
    return this.getToken(TFGGramParser.ERA, 0);
};

PositivoContext.prototype.PERFECTO = function() {
    return this.getToken(TFGGramParser.PERFECTO, 0);
};

PositivoContext.prototype.ACABO = function() {
    return this.getToken(TFGGramParser.ACABO, 0);
};

PositivoContext.prototype.VERLA = function() {
    return this.getToken(TFGGramParser.VERLA, 0);
};

PositivoContext.prototype.DE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.DE);
    } else {
        return this.getToken(TFGGramParser.DE, i);
    }
};


PositivoContext.prototype.GUARDO = function() {
    return this.getToken(TFGGramParser.GUARDO, 0);
};

PositivoContext.prototype.PARA = function() {
    return this.getToken(TFGGramParser.PARA, 0);
};

PositivoContext.prototype.MAS = function() {
    return this.getToken(TFGGramParser.MAS, 0);
};

PositivoContext.prototype.TARDE = function() {
    return this.getToken(TFGGramParser.TARDE, 0);
};

PositivoContext.prototype.LA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.LA);
    } else {
        return this.getToken(TFGGramParser.LA, i);
    }
};


PositivoContext.prototype.RECOMENDACION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.RECOMENDACION);
    } else {
        return this.getToken(TFGGramParser.RECOMENDACION, i);
    }
};


PositivoContext.prototype.ESA = function() {
    return this.getToken(TFGGramParser.ESA, 0);
};

PositivoContext.prototype.ADIOS = function() {
    return this.getToken(TFGGramParser.ADIOS, 0);
};

PositivoContext.prototype.VERE = function() {
    return this.getToken(TFGGramParser.VERE, 0);
};

PositivoContext.prototype.PERO = function() {
    return this.getToken(TFGGramParser.PERO, 0);
};

PositivoContext.prototype.NO = function() {
    return this.getToken(TFGGramParser.NO, 0);
};

PositivoContext.prototype.CONVENCES = function() {
    return this.getToken(TFGGramParser.CONVENCES, 0);
};

PositivoContext.prototype.NADA = function() {
    return this.getToken(TFGGramParser.NADA, 0);
};

PositivoContext.prototype.PARECE = function() {
    return this.getToken(TFGGramParser.PARECE, 0);
};

PositivoContext.prototype.MUY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.MUY);
    } else {
        return this.getToken(TFGGramParser.MUY, i);
    }
};


PositivoContext.prototype.MAL = function() {
    return this.getToken(TFGGramParser.MAL, 0);
};

PositivoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitPositivo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.PositivoContext = PositivoContext;

TFGGramParser.prototype.positivo = function() {

    var localctx = new PositivoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, TFGGramParser.RULE_positivo);
    var _la = 0; // Token type
    try {
        this.state = 237;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 152;
            this.match(TFGGramParser.GENIAL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 153;
            this.match(TFGGramParser.BIEN);
            this.state = 154;
            this.match(TFGGramParser.GENIAL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 155;
            this.match(TFGGramParser.GRACIAS);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 159;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.GRACIAS) {
                this.state = 156;
                this.match(TFGGramParser.GRACIAS);
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 162;
            this.match(TFGGramParser.ME);
            this.state = 163;
            this.match(TFGGramParser.GUSTA);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 164;
            this.match(TFGGramParser.BUENA);
            this.state = 165;
            this.match(TFGGramParser.SELECCION);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 166;
            this.match(TFGGramParser.AHORA);
            this.state = 167;
            this.match(TFGGramParser.SI);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 168;
            this.match(TFGGramParser.OLE);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 169;
            this.match(TFGGramParser.ESTA);
            this.state = 170;
            this.match(TFGGramParser.ERA);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 171;
            this.match(TFGGramParser.PERFECTO);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 172;
            this.match(TFGGramParser.ACABO);
            this.state = 176;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.DE) {
                this.state = 173;
                this.match(TFGGramParser.DE);
                this.state = 178;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 179;
            this.match(TFGGramParser.VERLA);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 180;
            this.match(TFGGramParser.PERFECTO);
            this.state = 181;
            this.match(TFGGramParser.ME);
            this.state = 185;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.LA) {
                this.state = 182;
                this.match(TFGGramParser.LA);
                this.state = 187;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 188;
            this.match(TFGGramParser.GUARDO);
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.LA) {
                this.state = 189;
                this.match(TFGGramParser.LA);
                this.state = 194;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.RECOMENDACION) {
                this.state = 195;
                this.match(TFGGramParser.RECOMENDACION);
                this.state = 200;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 201;
            this.match(TFGGramParser.PARA);
            this.state = 202;
            this.match(TFGGramParser.MAS);
            this.state = 203;
            this.match(TFGGramParser.TARDE);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 204;
            _la = this._input.LA(1);
            if(!(_la===TFGGramParser.ESTA || _la===TFGGramParser.ESA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 205;
            this.match(TFGGramParser.ESTA);
            this.state = 206;
            this.match(TFGGramParser.BIEN);
            this.state = 207;
            _la = this._input.LA(1);
            if(!(_la===TFGGramParser.GRACIAS || _la===TFGGramParser.ADIOS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 208;
            this.match(TFGGramParser.VERE);
            this.state = 209;
            _la = this._input.LA(1);
            if(!(_la===TFGGramParser.ESTA || _la===TFGGramParser.ESA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 210;
            this.match(TFGGramParser.PERO);
            this.state = 211;
            this.match(TFGGramParser.NO);
            this.state = 212;
            this.match(TFGGramParser.ME);
            this.state = 213;
            this.match(TFGGramParser.CONVENCES);
            this.state = 214;
            this.match(TFGGramParser.NADA);
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 215;
            this.match(TFGGramParser.ME);
            this.state = 216;
            this.match(TFGGramParser.PARECE);
            this.state = 217;
            this.match(TFGGramParser.MUY);
            this.state = 218;
            this.match(TFGGramParser.BUENA);
            this.state = 219;
            this.match(TFGGramParser.RECOMENDACION);
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 220;
            this.match(TFGGramParser.NO);
            this.state = 221;
            this.match(TFGGramParser.ESTA);
            this.state = 222;
            this.match(TFGGramParser.MAL);
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 223;
            this.match(TFGGramParser.MUY);
            this.state = 224;
            this.match(TFGGramParser.BIEN);
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 225;
            _la = this._input.LA(1);
            if(!(_la===TFGGramParser.ESTA || _la===TFGGramParser.ESA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 226;
            this.match(TFGGramParser.ESTA);
            this.state = 230;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.MUY) {
                this.state = 227;
                this.match(TFGGramParser.MUY);
                this.state = 232;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 233;
            this.match(TFGGramParser.BIEN);
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 234;
            _la = this._input.LA(1);
            if(!(_la===TFGGramParser.ESTA || _la===TFGGramParser.ESA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 235;
            this.match(TFGGramParser.ME);
            this.state = 236;
            this.match(TFGGramParser.GUSTA);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NegativoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_negativo;
    return this;
}

NegativoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegativoContext.prototype.constructor = NegativoContext;

NegativoContext.prototype.NEGATIVO = function() {
    return this.getToken(TFGGramParser.NEGATIVO, 0);
};

NegativoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitNegativo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.NegativoContext = NegativoContext;

TFGGramParser.prototype.negativo = function() {

    var localctx = new NegativoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, TFGGramParser.RULE_negativo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 239;
        this.match(TFGGramParser.NEGATIVO);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Tfg_intent_byeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_tfg_intent_bye;
    return this;
}

Tfg_intent_byeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tfg_intent_byeContext.prototype.constructor = Tfg_intent_byeContext;

Tfg_intent_byeContext.prototype.ADIOS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.ADIOS);
    } else {
        return this.getToken(TFGGramParser.ADIOS, i);
    }
};


Tfg_intent_byeContext.prototype.GRACIAS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.GRACIAS);
    } else {
        return this.getToken(TFGGramParser.GRACIAS, i);
    }
};


Tfg_intent_byeContext.prototype.HASTA = function() {
    return this.getToken(TFGGramParser.HASTA, 0);
};

Tfg_intent_byeContext.prototype.LUEGO = function() {
    return this.getToken(TFGGramParser.LUEGO, 0);
};

Tfg_intent_byeContext.prototype.ME = function() {
    return this.getToken(TFGGramParser.ME, 0);
};

Tfg_intent_byeContext.prototype.VOY = function() {
    return this.getToken(TFGGramParser.VOY, 0);
};

Tfg_intent_byeContext.prototype.MANANA = function() {
    return this.getToken(TFGGramParser.MANANA, 0);
};

Tfg_intent_byeContext.prototype.PRONTO = function() {
    return this.getToken(TFGGramParser.PRONTO, 0);
};

Tfg_intent_byeContext.prototype.TRABAJAR = function() {
    return this.getToken(TFGGramParser.TRABAJAR, 0);
};

Tfg_intent_byeContext.prototype.A = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.A);
    } else {
        return this.getToken(TFGGramParser.A, i);
    }
};


Tfg_intent_byeContext.prototype.UN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.UN);
    } else {
        return this.getToken(TFGGramParser.UN, i);
    }
};


Tfg_intent_byeContext.prototype.RATO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.RATO);
    } else {
        return this.getToken(TFGGramParser.RATO, i);
    }
};


Tfg_intent_byeContext.prototype.NADA = function() {
    return this.getToken(TFGGramParser.NADA, 0);
};

Tfg_intent_byeContext.prototype.MAS = function() {
    return this.getToken(TFGGramParser.MAS, 0);
};

Tfg_intent_byeContext.prototype.CHAO = function() {
    return this.getToken(TFGGramParser.CHAO, 0);
};

Tfg_intent_byeContext.prototype.ES = function() {
    return this.getToken(TFGGramParser.ES, 0);
};

Tfg_intent_byeContext.prototype.TODO = function() {
    return this.getToken(TFGGramParser.TODO, 0);
};

Tfg_intent_byeContext.prototype.VERE = function() {
    return this.getToken(TFGGramParser.VERE, 0);
};

Tfg_intent_byeContext.prototype.tipo_contenido = function() {
    return this.getTypedRuleContext(Tipo_contenidoContext,0);
};

Tfg_intent_byeContext.prototype.LA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.LA);
    } else {
        return this.getToken(TFGGramParser.LA, i);
    }
};


Tfg_intent_byeContext.prototype.ESTA = function() {
    return this.getToken(TFGGramParser.ESTA, 0);
};

Tfg_intent_byeContext.prototype.ESA = function() {
    return this.getToken(TFGGramParser.ESA, 0);
};

Tfg_intent_byeContext.prototype.HOY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.HOY);
    } else {
        return this.getToken(TFGGramParser.HOY, i);
    }
};


Tfg_intent_byeContext.prototype.POR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.POR);
    } else {
        return this.getToken(TFGGramParser.POR, i);
    }
};


Tfg_intent_byeContext.prototype.NO = function() {
    return this.getToken(TFGGramParser.NO, 0);
};

Tfg_intent_byeContext.prototype.BUENA = function() {
    return this.getToken(TFGGramParser.BUENA, 0);
};

Tfg_intent_byeContext.prototype.NOCHES = function() {
    return this.getToken(TFGGramParser.NOCHES, 0);
};

Tfg_intent_byeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitTfg_intent_bye(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.Tfg_intent_byeContext = Tfg_intent_byeContext;

TFGGramParser.prototype.tfg_intent_bye = function() {

    var localctx = new Tfg_intent_byeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, TFGGramParser.RULE_tfg_intent_bye);
    var _la = 0; // Token type
    try {
        this.state = 321;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 241;
            this.match(TFGGramParser.ADIOS);
            this.state = 245;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 242;
                    this.match(TFGGramParser.ADIOS); 
                }
                this.state = 247;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 248;
            this.match(TFGGramParser.ADIOS);
            this.state = 249;
            this.match(TFGGramParser.GRACIAS);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 250;
            this.match(TFGGramParser.GRACIAS);
            this.state = 251;
            this.match(TFGGramParser.ADIOS);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 252;
            this.match(TFGGramParser.HASTA);
            this.state = 253;
            this.match(TFGGramParser.LUEGO);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 254;
            this.match(TFGGramParser.ME);
            this.state = 255;
            this.match(TFGGramParser.VOY);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 256;
            this.match(TFGGramParser.HASTA);
            this.state = 257;
            _la = this._input.LA(1);
            if(!(_la===TFGGramParser.MANANA || _la===TFGGramParser.PRONTO)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 258;
            this.match(TFGGramParser.ME);
            this.state = 259;
            this.match(TFGGramParser.VOY);
            this.state = 263;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.A) {
                this.state = 260;
                this.match(TFGGramParser.A);
                this.state = 265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 266;
            this.match(TFGGramParser.TRABAJAR);
            this.state = 271;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.UN) {
                this.state = 267;
                this.match(TFGGramParser.UN);
                this.state = 268;
                this.match(TFGGramParser.RATO);
                this.state = 273;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 274;
            this.match(TFGGramParser.NADA);
            this.state = 275;
            this.match(TFGGramParser.MAS);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 276;
            this.match(TFGGramParser.CHAO);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 277;
            this.match(TFGGramParser.ES);
            this.state = 278;
            this.match(TFGGramParser.TODO);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 279;
            this.match(TFGGramParser.HASTA);
            this.state = 280;
            this.match(TFGGramParser.MANANA);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 281;
            this.match(TFGGramParser.GRACIAS);
            this.state = 282;
            this.match(TFGGramParser.VERE);
            this.state = 286;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.LA) {
                this.state = 283;
                this.match(TFGGramParser.LA);
                this.state = 288;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 289;
            this.tipo_contenido();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 290;
            this.match(TFGGramParser.GRACIAS);
            this.state = 291;
            this.match(TFGGramParser.LA);
            this.state = 292;
            this.match(TFGGramParser.VERE);
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 293;
            this.match(TFGGramParser.VERE);
            this.state = 294;
            _la = this._input.LA(1);
            if(!(_la===TFGGramParser.ESTA || _la===TFGGramParser.ESA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 295;
            this.tipo_contenido();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 296;
            this.match(TFGGramParser.ESTA);
            this.state = 297;
            this.match(TFGGramParser.ES);
            this.state = 298;
            this.match(TFGGramParser.TODO);
            this.state = 308;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.POR || _la===TFGGramParser.HOY) {
                this.state = 302;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===TFGGramParser.POR) {
                    this.state = 299;
                    this.match(TFGGramParser.POR);
                    this.state = 304;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 305;
                this.match(TFGGramParser.HOY);
                this.state = 310;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 314;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 311;
                    this.match(TFGGramParser.GRACIAS); 
                }
                this.state = 316;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
            }

            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 317;
            this.match(TFGGramParser.NO);
            this.state = 318;
            this.match(TFGGramParser.GRACIAS);
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 319;
            this.match(TFGGramParser.BUENA);
            this.state = 320;
            this.match(TFGGramParser.NOCHES);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Tfg_intent_saludoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TFGGramParser.RULE_tfg_intent_saludo;
    return this;
}

Tfg_intent_saludoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Tfg_intent_saludoContext.prototype.constructor = Tfg_intent_saludoContext;

Tfg_intent_saludoContext.prototype.HOLA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.HOLA);
    } else {
        return this.getToken(TFGGramParser.HOLA, i);
    }
};


Tfg_intent_saludoContext.prototype.DE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.DE);
    } else {
        return this.getToken(TFGGramParser.DE, i);
    }
};


Tfg_intent_saludoContext.prototype.NUEVO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.NUEVO);
    } else {
        return this.getToken(TFGGramParser.NUEVO, i);
    }
};


Tfg_intent_saludoContext.prototype.OTRA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.OTRA);
    } else {
        return this.getToken(TFGGramParser.OTRA, i);
    }
};


Tfg_intent_saludoContext.prototype.VEZ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.VEZ);
    } else {
        return this.getToken(TFGGramParser.VEZ, i);
    }
};


Tfg_intent_saludoContext.prototype.BOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.BOT);
    } else {
        return this.getToken(TFGGramParser.BOT, i);
    }
};


Tfg_intent_saludoContext.prototype.BUENA = function() {
    return this.getToken(TFGGramParser.BUENA, 0);
};

Tfg_intent_saludoContext.prototype.QUE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.QUE);
    } else {
        return this.getToken(TFGGramParser.QUE, i);
    }
};


Tfg_intent_saludoContext.prototype.TAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.TAL);
    } else {
        return this.getToken(TFGGramParser.TAL, i);
    }
};


Tfg_intent_saludoContext.prototype.TARDE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.TARDE);
    } else {
        return this.getToken(TFGGramParser.TARDE, i);
    }
};


Tfg_intent_saludoContext.prototype.DIAS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.DIAS);
    } else {
        return this.getToken(TFGGramParser.DIAS, i);
    }
};


Tfg_intent_saludoContext.prototype.YA = function() {
    return this.getToken(TFGGramParser.YA, 0);
};

Tfg_intent_saludoContext.prototype.HAS = function() {
    return this.getToken(TFGGramParser.HAS, 0);
};

Tfg_intent_saludoContext.prototype.VUELTO = function() {
    return this.getToken(TFGGramParser.VUELTO, 0);
};

Tfg_intent_saludoContext.prototype.BIEN = function() {
    return this.getToken(TFGGramParser.BIEN, 0);
};

Tfg_intent_saludoContext.prototype.GUSTA = function() {
    return this.getToken(TFGGramParser.GUSTA, 0);
};

Tfg_intent_saludoContext.prototype.HAYAS = function() {
    return this.getToken(TFGGramParser.HAYAS, 0);
};

Tfg_intent_saludoContext.prototype.ME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TFGGramParser.ME);
    } else {
        return this.getToken(TFGGramParser.ME, i);
    }
};


Tfg_intent_saludoContext.prototype.EMPEZAR = function() {
    return this.getToken(TFGGramParser.EMPEZAR, 0);
};

Tfg_intent_saludoContext.prototype.ESTA = function() {
    return this.getToken(TFGGramParser.ESTA, 0);
};

Tfg_intent_saludoContext.prototype.ES = function() {
    return this.getToken(TFGGramParser.ES, 0);
};

Tfg_intent_saludoContext.prototype.UNA = function() {
    return this.getToken(TFGGramParser.UNA, 0);
};

Tfg_intent_saludoContext.prototype.PRUEBA = function() {
    return this.getToken(TFGGramParser.PRUEBA, 0);
};

Tfg_intent_saludoContext.prototype.AQUI = function() {
    return this.getToken(TFGGramParser.AQUI, 0);
};

Tfg_intent_saludoContext.prototype.ESTOY = function() {
    return this.getToken(TFGGramParser.ESTOY, 0);
};

Tfg_intent_saludoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TFGGramVisitor ) {
        return visitor.visitTfg_intent_saludo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TFGGramParser.Tfg_intent_saludoContext = Tfg_intent_saludoContext;

TFGGramParser.prototype.tfg_intent_saludo = function() {

    var localctx = new Tfg_intent_saludoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, TFGGramParser.RULE_tfg_intent_saludo);
    var _la = 0; // Token type
    try {
        this.state = 423;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 323;
            this.match(TFGGramParser.HOLA);
            this.state = 327;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.DE) {
                this.state = 324;
                this.match(TFGGramParser.DE);
                this.state = 329;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 333;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.NUEVO) {
                this.state = 330;
                this.match(TFGGramParser.NUEVO);
                this.state = 335;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 339;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.OTRA) {
                this.state = 336;
                this.match(TFGGramParser.OTRA);
                this.state = 341;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 345;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.VEZ) {
                this.state = 342;
                this.match(TFGGramParser.VEZ);
                this.state = 347;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 351;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.BOT) {
                this.state = 348;
                this.match(TFGGramParser.BOT);
                this.state = 353;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 354;
            this.match(TFGGramParser.HOLA);
            this.state = 358;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.BOT) {
                this.state = 355;
                this.match(TFGGramParser.BOT);
                this.state = 360;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 361;
            this.match(TFGGramParser.BUENA);
            this.state = 365;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.QUE) {
                this.state = 362;
                this.match(TFGGramParser.QUE);
                this.state = 367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 371;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.TAL) {
                this.state = 368;
                this.match(TFGGramParser.TAL);
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 377;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.HOLA) {
                this.state = 374;
                this.match(TFGGramParser.HOLA);
                this.state = 379;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 380;
            this.match(TFGGramParser.BUENA);
            this.state = 384;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.TARDE || _la===TFGGramParser.DIAS) {
                this.state = 381;
                _la = this._input.LA(1);
                if(!(_la===TFGGramParser.TARDE || _la===TFGGramParser.DIAS)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 390;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.BOT) {
                this.state = 387;
                this.match(TFGGramParser.BOT);
                this.state = 392;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 393;
            this.match(TFGGramParser.YA);
            this.state = 394;
            this.match(TFGGramParser.HAS);
            this.state = 395;
            this.match(TFGGramParser.VUELTO);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 396;
            this.match(TFGGramParser.BIEN);
            this.state = 400;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.ME) {
                this.state = 397;
                this.match(TFGGramParser.ME);
                this.state = 402;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 403;
            this.match(TFGGramParser.GUSTA);
            this.state = 407;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===TFGGramParser.QUE) {
                this.state = 404;
                this.match(TFGGramParser.QUE);
                this.state = 409;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 410;
            this.match(TFGGramParser.HAYAS);
            this.state = 411;
            this.match(TFGGramParser.VUELTO);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 412;
            this.match(TFGGramParser.EMPEZAR);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 413;
            this.match(TFGGramParser.HOLA);
            this.state = 414;
            this.match(TFGGramParser.ESTA);
            this.state = 415;
            this.match(TFGGramParser.ES);
            this.state = 416;
            this.match(TFGGramParser.UNA);
            this.state = 417;
            this.match(TFGGramParser.PRUEBA);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 418;
            this.match(TFGGramParser.HOLA);
            this.state = 419;
            this.match(TFGGramParser.AQUI);
            this.state = 420;
            this.match(TFGGramParser.ESTOY);
            this.state = 421;
            this.match(TFGGramParser.DE);
            this.state = 422;
            this.match(TFGGramParser.NUEVO);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.TFGGramParser = TFGGramParser;
