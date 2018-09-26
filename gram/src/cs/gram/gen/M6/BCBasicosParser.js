// Generated from /Users/joserg/TFG/gram/cs/gram/gen/M6/BCBasicos.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BCBasicosVisitor = require('./BCBasicosVisitor').BCBasicosVisitor;

var grammarFileName = "BCBasicos.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003J\u013d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0006\u0002\u0012\n\u0002\r\u0002\u000e\u0002\u0013",
    "\u0003\u0003\u0006\u0003\u0017\n\u0003\r\u0003\u000e\u0003\u0018\u0003",
    "\u0003\u0006\u0003\u001c\n\u0003\r\u0003\u000e\u0003\u001d\u0003\u0003",
    "\u0006\u0003!\n\u0003\r\u0003\u000e\u0003\"\u0005\u0003%\n\u0003\u0003",
    "\u0004\u0003\u0004\u0005\u0004)\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u00050\n\u0005\f\u0005\u000e\u0005",
    "3\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005A\n\u0005\f\u0005\u000e\u0005D\u000b\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005J\n\u0005",
    "\f\u0005\u000e\u0005M\u000b\u0005\u0003\u0005\u0003\u0005\u0007\u0005",
    "Q\n\u0005\f\u0005\u000e\u0005T\u000b\u0005\u0003\u0005\u0007\u0005W",
    "\n\u0005\f\u0005\u000e\u0005Z\u000b\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u0005w\n\u0005\f\u0005\u000e\u0005z\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u0080\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0007\u0007\u0086\n\u0007",
    "\f\u0007\u000e\u0007\u0089\u000b\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u0098",
    "\n\u0007\f\u0007\u000e\u0007\u009b\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007\u00a0\n\u0007\f\u0007\u000e\u0007\u00a3\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u00af",
    "\n\u0007\f\u0007\u000e\u0007\u00b2\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u00bf\n\u0007\f\u0007",
    "\u000e\u0007\u00c2\u000b\u0007\u0003\u0007\u0007\u0007\u00c5\n\u0007",
    "\f\u0007\u000e\u0007\u00c8\u000b\u0007\u0003\u0007\u0007\u0007\u00cb",
    "\n\u0007\f\u0007\u000e\u0007\u00ce\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u00d5\n\u0007\u0003",
    "\b\u0003\b\u0007\b\u00d9\n\b\f\b\u000e\b\u00dc\u000b\b\u0003\b\u0007",
    "\b\u00df\n\b\f\b\u000e\b\u00e2\u000b\b\u0003\b\u0007\b\u00e5\n\b\f\b",
    "\u000e\b\u00e8\u000b\b\u0003\b\u0007\b\u00eb\n\b\f\b\u000e\b\u00ee\u000b",
    "\b\u0003\b\u0007\b\u00f1\n\b\f\b\u000e\b\u00f4\u000b\b\u0003\b\u0003",
    "\b\u0007\b\u00f8\n\b\f\b\u000e\b\u00fb\u000b\b\u0003\b\u0003\b\u0007",
    "\b\u00ff\n\b\f\b\u000e\b\u0102\u000b\b\u0003\b\u0007\b\u0105\n\b\f\b",
    "\u000e\b\u0108\u000b\b\u0003\b\u0007\b\u010b\n\b\f\b\u000e\b\u010e\u000b",
    "\b\u0003\b\u0003\b\u0007\b\u0112\n\b\f\b\u000e\b\u0115\u000b\b\u0003",
    "\b\u0007\b\u0118\n\b\f\b\u000e\b\u011b\u000b\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0007\b\u0122\n\b\f\b\u000e\b\u0125\u000b\b\u0003",
    "\b\u0003\b\u0007\b\u0129\n\b\f\b\u000e\b\u012c\u000b\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u013b\n\b\u0003\b\u0002\u0002\t\u0002\u0004",
    "\u0006\b\n\f\u000e\u0002\u0007\u0003\u0002\u0018\u0019\u0004\u0002\u0003",
    "\u0003\u001c\u001c\u0004\u0002((--\u0003\u000212\u0004\u0002\u0016\u0016",
    "DD\u0002\u017f\u0002\u0011\u0003\u0002\u0002\u0002\u0004$\u0003\u0002",
    "\u0002\u0002\u0006(\u0003\u0002\u0002\u0002\b\u007f\u0003\u0002\u0002",
    "\u0002\n\u0081\u0003\u0002\u0002\u0002\f\u00d4\u0003\u0002\u0002\u0002",
    "\u000e\u013a\u0003\u0002\u0002\u0002\u0010\u0012\u0005\u0004\u0003\u0002",
    "\u0011\u0010\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002",
    "\u0013\u0011\u0003\u0002\u0002\u0002\u0013\u0014\u0003\u0002\u0002\u0002",
    "\u0014\u0003\u0003\u0002\u0002\u0002\u0015\u0017\u0005\u0006\u0004\u0002",
    "\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002",
    "\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002",
    "\u0019%\u0003\u0002\u0002\u0002\u001a\u001c\u0005\f\u0007\u0002\u001b",
    "\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d",
    "\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e",
    "%\u0003\u0002\u0002\u0002\u001f!\u0005\u000e\b\u0002 \u001f\u0003\u0002",
    "\u0002\u0002!\"\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"",
    "#\u0003\u0002\u0002\u0002#%\u0003\u0002\u0002\u0002$\u0016\u0003\u0002",
    "\u0002\u0002$\u001b\u0003\u0002\u0002\u0002$ \u0003\u0002\u0002\u0002",
    "%\u0005\u0003\u0002\u0002\u0002&)\u0005\b\u0005\u0002\')\u0005\n\u0006",
    "\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)\u0007\u0003",
    "\u0002\u0002\u0002*\u0080\u0007\u0004\u0002\u0002+,\u0007\u0006\u0002",
    "\u0002,\u0080\u0007\u0004\u0002\u0002-\u0080\u0007\u0003\u0002\u0002",
    ".0\u0007\u0003\u0002\u0002/.\u0003\u0002\u0002\u000203\u0003\u0002\u0002",
    "\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u000224\u0003\u0002",
    "\u0002\u000231\u0003\u0002\u0002\u000245\u0007\t\u0002\u00025\u0080",
    "\u0007\n\u0002\u000267\u0007\b\u0002\u00027\u0080\u0007\u000b\u0002",
    "\u000289\u0007\f\u0002\u00029\u0080\u0007\r\u0002\u0002:\u0080\u0007",
    "\u000e\u0002\u0002;<\u0007\u0018\u0002\u0002<\u0080\u0007\u001a\u0002",
    "\u0002=\u0080\u0007\u0005\u0002\u0002>B\u0007\u000f\u0002\u0002?A\u0007",
    "\u0010\u0002\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002",
    "B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CE\u0003\u0002\u0002",
    "\u0002DB\u0003\u0002\u0002\u0002E\u0080\u0007\u0011\u0002\u0002FG\u0007",
    "\u0005\u0002\u0002GK\u0007\t\u0002\u0002HJ\u0007\u0012\u0002\u0002I",
    "H\u0003\u0002\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002",
    "\u0002KL\u0003\u0002\u0002\u0002LN\u0003\u0002\u0002\u0002MK\u0003\u0002",
    "\u0002\u0002NR\u0007\u0013\u0002\u0002OQ\u0007\u0012\u0002\u0002PO\u0003",
    "\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002",
    "RS\u0003\u0002\u0002\u0002SX\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002",
    "\u0002UW\u0007\u0017\u0002\u0002VU\u0003\u0002\u0002\u0002WZ\u0003\u0002",
    "\u0002\u0002XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y[\u0003",
    "\u0002\u0002\u0002ZX\u0003\u0002\u0002\u0002[\\\u0007\u0014\u0002\u0002",
    "\\]\u0007\u0015\u0002\u0002]\u0080\u0007\u0016\u0002\u0002^_\t\u0002",
    "\u0002\u0002_`\u0007\u0018\u0002\u0002`a\u0007\u0006\u0002\u0002a\u0080",
    "\t\u0003\u0002\u0002bc\u0007\u001d\u0002\u0002cd\t\u0002\u0002\u0002",
    "de\u0007\u001e\u0002\u0002ef\u0007\u001f\u0002\u0002fg\u0007\t\u0002",
    "\u0002gh\u0007 \u0002\u0002h\u0080\u0007!\u0002\u0002ij\u0007\t\u0002",
    "\u0002jk\u0007\u001b\u0002\u0002kl\u0007\"\u0002\u0002lm\u0007\b\u0002",
    "\u0002m\u0080\u0007\u0017\u0002\u0002no\u0007\u001f\u0002\u0002op\u0007",
    "\u0018\u0002\u0002p\u0080\u0007\u0007\u0002\u0002qr\u0007\"\u0002\u0002",
    "r\u0080\u0007\u0006\u0002\u0002st\t\u0002\u0002\u0002tx\u0007\u0018",
    "\u0002\u0002uw\u0007\"\u0002\u0002vu\u0003\u0002\u0002\u0002wz\u0003",
    "\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002",
    "y{\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{\u0080\u0007\u0006",
    "\u0002\u0002|}\t\u0002\u0002\u0002}~\u0007\t\u0002\u0002~\u0080\u0007",
    "\n\u0002\u0002\u007f*\u0003\u0002\u0002\u0002\u007f+\u0003\u0002\u0002",
    "\u0002\u007f-\u0003\u0002\u0002\u0002\u007f1\u0003\u0002\u0002\u0002",
    "\u007f6\u0003\u0002\u0002\u0002\u007f8\u0003\u0002\u0002\u0002\u007f",
    ":\u0003\u0002\u0002\u0002\u007f;\u0003\u0002\u0002\u0002\u007f=\u0003",
    "\u0002\u0002\u0002\u007f>\u0003\u0002\u0002\u0002\u007fF\u0003\u0002",
    "\u0002\u0002\u007f^\u0003\u0002\u0002\u0002\u007fb\u0003\u0002\u0002",
    "\u0002\u007fi\u0003\u0002\u0002\u0002\u007fn\u0003\u0002\u0002\u0002",
    "\u007fq\u0003\u0002\u0002\u0002\u007fs\u0003\u0002\u0002\u0002\u007f",
    "|\u0003\u0002\u0002\u0002\u0080\t\u0003\u0002\u0002\u0002\u0081\u0082",
    "\u0007#\u0002\u0002\u0082\u000b\u0003\u0002\u0002\u0002\u0083\u0087",
    "\u0007\u001c\u0002\u0002\u0084\u0086\u0007\u001c\u0002\u0002\u0085\u0084",
    "\u0003\u0002\u0002\u0002\u0086\u0089\u0003\u0002\u0002\u0002\u0087\u0085",
    "\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u00d5",
    "\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0007\u001c\u0002\u0002\u008b\u00d5\u0007\u0003\u0002\u0002\u008c\u008d",
    "\u0007\u0003\u0002\u0002\u008d\u00d5\u0007\u001c\u0002\u0002\u008e\u008f",
    "\u0007%\u0002\u0002\u008f\u00d5\u0007&\u0002\u0002\u0090\u0091\u0007",
    "\t\u0002\u0002\u0091\u00d5\u0007\'\u0002\u0002\u0092\u0093\u0007%\u0002",
    "\u0002\u0093\u00d5\t\u0004\u0002\u0002\u0094\u0095\u0007\t\u0002\u0002",
    "\u0095\u0099\u0007\'\u0002\u0002\u0096\u0098\u0007)\u0002\u0002\u0097",
    "\u0096\u0003\u0002\u0002\u0002\u0098\u009b\u0003\u0002\u0002\u0002\u0099",
    "\u0097\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a",
    "\u009c\u0003\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009c",
    "\u00a1\u0007*\u0002\u0002\u009d\u009e\u0007+\u0002\u0002\u009e\u00a0",
    "\u0007,\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u00a0\u00a3",
    "\u0003\u0002\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a1\u00a2",
    "\u0003\u0002\u0002\u0002\u00a2\u00d5\u0003\u0002\u0002\u0002\u00a3\u00a1",
    "\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007!\u0002\u0002\u00a5\u00d5",
    "\u0007\u0015\u0002\u0002\u00a6\u00d5\u0007.\u0002\u0002\u00a7\u00a8",
    "\u0007/\u0002\u0002\u00a8\u00d5\u00070\u0002\u0002\u00a9\u00aa\u0007",
    "%\u0002\u0002\u00aa\u00d5\u0007(\u0002\u0002\u00ab\u00ac\u0007\u0003",
    "\u0002\u0002\u00ac\u00b0\u0007\u001d\u0002\u0002\u00ad\u00af\u0007\u0012",
    "\u0002\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\u00b2\u0003\u0002",
    "\u0002\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002",
    "\u0002\u0002\u00b1\u00b3\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002",
    "\u0002\u0002\u00b3\u00d5\t\u0005\u0002\u0002\u00b4\u00b5\u0007\u0003",
    "\u0002\u0002\u00b5\u00b6\u0007\u0012\u0002\u0002\u00b6\u00d5\u0007\u001d",
    "\u0002\u0002\u00b7\u00b8\u0007\u001d\u0002\u0002\u00b8\u00b9\t\u0002",
    "\u0002\u0002\u00b9\u00d5\t\u0005\u0002\u0002\u00ba\u00bb\u0007\u0018",
    "\u0002\u0002\u00bb\u00bc\u0007/\u0002\u0002\u00bc\u00c6\u00070\u0002",
    "\u0002\u00bd\u00bf\u00073\u0002\u0002\u00be\u00bd\u0003\u0002\u0002",
    "\u0002\u00bf\u00c2\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002",
    "\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c3\u0003\u0002\u0002",
    "\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c5\u00074\u0002",
    "\u0002\u00c4\u00c0\u0003\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002",
    "\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002",
    "\u0002\u00c7\u00cc\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002",
    "\u0002\u00c9\u00cb\u0007\u0003\u0002\u0002\u00ca\u00c9\u0003\u0002\u0002",
    "\u0002\u00cb\u00ce\u0003\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002",
    "\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u00d5\u0003\u0002\u0002",
    "\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00cf\u00d0\u0007\u001f\u0002",
    "\u0002\u00d0\u00d5\u0007\u0003\u0002\u0002\u00d1\u00d2\u0007\b\u0002",
    "\u0002\u00d2\u00d5\u00075\u0002\u0002\u00d3\u00d5\u00076\u0002\u0002",
    "\u00d4\u0083\u0003\u0002\u0002\u0002\u00d4\u008a\u0003\u0002\u0002\u0002",
    "\u00d4\u008c\u0003\u0002\u0002\u0002\u00d4\u008e\u0003\u0002\u0002\u0002",
    "\u00d4\u0090\u0003\u0002\u0002\u0002\u00d4\u0092\u0003\u0002\u0002\u0002",
    "\u00d4\u0094\u0003\u0002\u0002\u0002\u00d4\u00a4\u0003\u0002\u0002\u0002",
    "\u00d4\u00a6\u0003\u0002\u0002\u0002\u00d4\u00a7\u0003\u0002\u0002\u0002",
    "\u00d4\u00a9\u0003\u0002\u0002\u0002\u00d4\u00ab\u0003\u0002\u0002\u0002",
    "\u00d4\u00b4\u0003\u0002\u0002\u0002\u00d4\u00b7\u0003\u0002\u0002\u0002",
    "\u00d4\u00ba\u0003\u0002\u0002\u0002\u00d4\u00cf\u0003\u0002\u0002\u0002",
    "\u00d4\u00d1\u0003\u0002\u0002\u0002\u00d4\u00d3\u0003\u0002\u0002\u0002",
    "\u00d5\r\u0003\u0002\u0002\u0002\u00d6\u00da\u00077\u0002\u0002\u00d7",
    "\u00d9\u0007\u0010\u0002\u0002\u00d8\u00d7\u0003\u0002\u0002\u0002\u00d9",
    "\u00dc\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002\u0002\u0002\u00da",
    "\u00db\u0003\u0002\u0002\u0002\u00db\u00e0\u0003\u0002\u0002\u0002\u00dc",
    "\u00da\u0003\u0002\u0002\u0002\u00dd\u00df\u0007A\u0002\u0002\u00de",
    "\u00dd\u0003\u0002\u0002\u0002\u00df\u00e2\u0003\u0002\u0002\u0002\u00e0",
    "\u00de\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1",
    "\u00e6\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e3",
    "\u00e5\u0007<\u0002\u0002\u00e4\u00e3\u0003\u0002\u0002\u0002\u00e5",
    "\u00e8\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e6",
    "\u00e7\u0003\u0002\u0002\u0002\u00e7\u00ec\u0003\u0002\u0002\u0002\u00e8",
    "\u00e6\u0003\u0002\u0002\u0002\u00e9\u00eb\u0007B\u0002\u0002\u00ea",
    "\u00e9\u0003\u0002\u0002\u0002\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec",
    "\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed",
    "\u00f2\u0003\u0002\u0002\u0002\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef",
    "\u00f1\u00079\u0002\u0002\u00f0\u00ef\u0003\u0002\u0002\u0002\u00f1",
    "\u00f4\u0003\u0002\u0002\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0003\u0002\u0002\u0002\u00f3\u013b\u0003\u0002\u0002\u0002\u00f4",
    "\u00f2\u0003\u0002\u0002\u0002\u00f5\u00f9\u00077\u0002\u0002\u00f6",
    "\u00f8\u00079\u0002\u0002\u00f7\u00f6\u0003\u0002\u0002\u0002\u00f8",
    "\u00fb\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9",
    "\u00fa\u0003\u0002\u0002\u0002\u00fa\u00fc\u0003\u0002\u0002\u0002\u00fb",
    "\u00f9\u0003\u0002\u0002\u0002\u00fc\u0100\u0007\b\u0002\u0002\u00fd",
    "\u00ff\u0007>\u0002\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff",
    "\u0102\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0100",
    "\u0101\u0003\u0002\u0002\u0002\u0101\u0106\u0003\u0002\u0002\u0002\u0102",
    "\u0100\u0003\u0002\u0002\u0002\u0103\u0105\u0007G\u0002\u0002\u0104",
    "\u0103\u0003\u0002\u0002\u0002\u0105\u0108\u0003\u0002\u0002\u0002\u0106",
    "\u0104\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107",
    "\u013b\u0003\u0002\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109",
    "\u010b\u00077\u0002\u0002\u010a\u0109\u0003\u0002\u0002\u0002\u010b",
    "\u010e\u0003\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010c",
    "\u010d\u0003\u0002\u0002\u0002\u010d\u010f\u0003\u0002\u0002\u0002\u010e",
    "\u010c\u0003\u0002\u0002\u0002\u010f\u0113\u0007\b\u0002\u0002\u0110",
    "\u0112\t\u0006\u0002\u0002\u0111\u0110\u0003\u0002\u0002\u0002\u0112",
    "\u0115\u0003\u0002\u0002\u0002\u0113\u0111\u0003\u0002\u0002\u0002\u0113",
    "\u0114\u0003\u0002\u0002\u0002\u0114\u0119\u0003\u0002\u0002\u0002\u0115",
    "\u0113\u0003\u0002\u0002\u0002\u0116\u0118\u00079\u0002\u0002\u0117",
    "\u0116\u0003\u0002\u0002\u0002\u0118\u011b\u0003\u0002\u0002\u0002\u0119",
    "\u0117\u0003\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a",
    "\u013b\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002\u0002\u0002\u011c",
    "\u011d\u0007:\u0002\u0002\u011d\u011e\u0007;\u0002\u0002\u011e\u013b",
    "\u0007=\u0002\u0002\u011f\u0123\u0007\u0006\u0002\u0002\u0120\u0122",
    "\u0007\t\u0002\u0002\u0121\u0120\u0003\u0002\u0002\u0002\u0122\u0125",
    "\u0003\u0002\u0002\u0002\u0123\u0121\u0003\u0002\u0002\u0002\u0123\u0124",
    "\u0003\u0002\u0002\u0002\u0124\u0126\u0003\u0002\u0002\u0002\u0125\u0123",
    "\u0003\u0002\u0002\u0002\u0126\u012a\u0007\n\u0002\u0002\u0127\u0129",
    "\u0007>\u0002\u0002\u0128\u0127\u0003\u0002\u0002\u0002\u0129\u012c",
    "\u0003\u0002\u0002\u0002\u012a\u0128\u0003\u0002\u0002\u0002\u012a\u012b",
    "\u0003\u0002\u0002\u0002\u012b\u012d\u0003\u0002\u0002\u0002\u012c\u012a",
    "\u0003\u0002\u0002\u0002\u012d\u012e\u0007?\u0002\u0002\u012e\u013b",
    "\u0007=\u0002\u0002\u012f\u013b\u0007C\u0002\u0002\u0130\u0131\u0007",
    "7\u0002\u0002\u0131\u0132\u0007\u0018\u0002\u0002\u0132\u0133\u0007",
    "/\u0002\u0002\u0133\u0134\u0007F\u0002\u0002\u0134\u013b\u0007E\u0002",
    "\u0002\u0135\u0136\u00077\u0002\u0002\u0136\u0137\u0007H\u0002\u0002",
    "\u0137\u0138\u0007@\u0002\u0002\u0138\u0139\u0007\u0010\u0002\u0002",
    "\u0139\u013b\u0007A\u0002\u0002\u013a\u00d6\u0003\u0002\u0002\u0002",
    "\u013a\u00f5\u0003\u0002\u0002\u0002\u013a\u010c\u0003\u0002\u0002\u0002",
    "\u013a\u011c\u0003\u0002\u0002\u0002\u013a\u011f\u0003\u0002\u0002\u0002",
    "\u013a\u012f\u0003\u0002\u0002\u0002\u013a\u0130\u0003\u0002\u0002\u0002",
    "\u013a\u0135\u0003\u0002\u0002\u0002\u013b\u000f\u0003\u0002\u0002\u0002",
    "%\u0013\u0018\u001d\"$(1BKRXx\u007f\u0087\u0099\u00a1\u00b0\u00c0\u00c6",
    "\u00cc\u00d4\u00da\u00e0\u00e6\u00ec\u00f2\u00f9\u0100\u0106\u010c\u0113",
    "\u0119\u0123\u012a\u013a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'gracias'", "'genial'", "'perfecto'", "'bien'", 
                     "'mal'", null, "'me'", null, "'seleccion'", "'ahora'", 
                     "'si'", "'ole'", "'acabo'", "'de'", "'verla'", "'la'", 
                     "'guardo'", "'para'", "'mas'", "'tarde'", null, null, 
                     null, "'era'", null, "'adios'", "'vere'", "'pero'", 
                     "'no'", "'convences'", "'nada'", "'muy'", "'negativo'", 
                     "'bye'", "'hasta'", "'luego'", "'voy'", "'ma\u00F1ana'", 
                     "'a'", "'trabajar'", "'un'", "'rato'", "'pronto'", 
                     "'chao'", "'es'", "'todo'", "'serie'", null, "'por'", 
                     "'hoy'", "'noches'", "'saludos'", null, "'tardes'", 
                     null, "'ya'", "'has'", "'otra'", "'vuelto'", "'que'", 
                     "'hayas'", "'estoy'", "'nuevo'", "'vez'", "'empezar'", 
                     null, "'prueba'", "'una'", null, "'aqui'" ];

var symbolicNames = [ null, "GRACIAS", "GENIAL", "PERFECTO", "BIEN", "MAL", 
                      "BUENA", "ME", "GUSTA", "SELECCION", "AHORA", "SI", 
                      "OLE", "ACABO", "DE", "VERLA", "LA", "GUARDO", "PARA", 
                      "MAS", "TARDE", "RECOMENDACION", "ESTA", "ESA", "ERA", 
                      "PARECE", "ADIOS", "VERE", "PERO", "NO", "CONVENCES", 
                      "NADA", "MUY", "NEGATIVO", "BYE", "HASTA", "LUEGO", 
                      "VOY", "MANANA", "A", "TRABAJAR", "UN", "RATO", "PRONTO", 
                      "CHAO", "ES", "TODO", "SERIE", "PELICULA", "POR", 
                      "HOY", "NOCHES", "SALUDOS", "HOLA", "TARDES", "BOT", 
                      "YA", "HAS", "OTRA", "VUELTO", "QUE", "HAYAS", "ESTOY", 
                      "NUEVO", "VEZ", "EMPEZAR", "DIAS", "PRUEBA", "UNA", 
                      "TAL", "AQUI", "WS", "PUNT" ];

var ruleNames =  [ "intents", "intent", "feedback", "positivo", "negativo", 
                   "bye", "greeting" ];

function BCBasicosParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BCBasicosParser.prototype = Object.create(antlr4.Parser.prototype);
BCBasicosParser.prototype.constructor = BCBasicosParser;

Object.defineProperty(BCBasicosParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BCBasicosParser.EOF = antlr4.Token.EOF;
BCBasicosParser.GRACIAS = 1;
BCBasicosParser.GENIAL = 2;
BCBasicosParser.PERFECTO = 3;
BCBasicosParser.BIEN = 4;
BCBasicosParser.MAL = 5;
BCBasicosParser.BUENA = 6;
BCBasicosParser.ME = 7;
BCBasicosParser.GUSTA = 8;
BCBasicosParser.SELECCION = 9;
BCBasicosParser.AHORA = 10;
BCBasicosParser.SI = 11;
BCBasicosParser.OLE = 12;
BCBasicosParser.ACABO = 13;
BCBasicosParser.DE = 14;
BCBasicosParser.VERLA = 15;
BCBasicosParser.LA = 16;
BCBasicosParser.GUARDO = 17;
BCBasicosParser.PARA = 18;
BCBasicosParser.MAS = 19;
BCBasicosParser.TARDE = 20;
BCBasicosParser.RECOMENDACION = 21;
BCBasicosParser.ESTA = 22;
BCBasicosParser.ESA = 23;
BCBasicosParser.ERA = 24;
BCBasicosParser.PARECE = 25;
BCBasicosParser.ADIOS = 26;
BCBasicosParser.VERE = 27;
BCBasicosParser.PERO = 28;
BCBasicosParser.NO = 29;
BCBasicosParser.CONVENCES = 30;
BCBasicosParser.NADA = 31;
BCBasicosParser.MUY = 32;
BCBasicosParser.NEGATIVO = 33;
BCBasicosParser.BYE = 34;
BCBasicosParser.HASTA = 35;
BCBasicosParser.LUEGO = 36;
BCBasicosParser.VOY = 37;
BCBasicosParser.MANANA = 38;
BCBasicosParser.A = 39;
BCBasicosParser.TRABAJAR = 40;
BCBasicosParser.UN = 41;
BCBasicosParser.RATO = 42;
BCBasicosParser.PRONTO = 43;
BCBasicosParser.CHAO = 44;
BCBasicosParser.ES = 45;
BCBasicosParser.TODO = 46;
BCBasicosParser.SERIE = 47;
BCBasicosParser.PELICULA = 48;
BCBasicosParser.POR = 49;
BCBasicosParser.HOY = 50;
BCBasicosParser.NOCHES = 51;
BCBasicosParser.SALUDOS = 52;
BCBasicosParser.HOLA = 53;
BCBasicosParser.TARDES = 54;
BCBasicosParser.BOT = 55;
BCBasicosParser.YA = 56;
BCBasicosParser.HAS = 57;
BCBasicosParser.OTRA = 58;
BCBasicosParser.VUELTO = 59;
BCBasicosParser.QUE = 60;
BCBasicosParser.HAYAS = 61;
BCBasicosParser.ESTOY = 62;
BCBasicosParser.NUEVO = 63;
BCBasicosParser.VEZ = 64;
BCBasicosParser.EMPEZAR = 65;
BCBasicosParser.DIAS = 66;
BCBasicosParser.PRUEBA = 67;
BCBasicosParser.UNA = 68;
BCBasicosParser.TAL = 69;
BCBasicosParser.AQUI = 70;
BCBasicosParser.WS = 71;
BCBasicosParser.PUNT = 72;

BCBasicosParser.RULE_intents = 0;
BCBasicosParser.RULE_intent = 1;
BCBasicosParser.RULE_feedback = 2;
BCBasicosParser.RULE_positivo = 3;
BCBasicosParser.RULE_negativo = 4;
BCBasicosParser.RULE_bye = 5;
BCBasicosParser.RULE_greeting = 6;

function IntentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCBasicosParser.RULE_intents;
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
    if ( visitor instanceof BCBasicosVisitor ) {
        return visitor.visitIntents(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCBasicosParser.IntentsContext = IntentsContext;

BCBasicosParser.prototype.intents = function() {

    var localctx = new IntentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BCBasicosParser.RULE_intents);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 14;
            this.intent();
            this.state = 17; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BCBasicosParser.GRACIAS) | (1 << BCBasicosParser.GENIAL) | (1 << BCBasicosParser.PERFECTO) | (1 << BCBasicosParser.BIEN) | (1 << BCBasicosParser.BUENA) | (1 << BCBasicosParser.ME) | (1 << BCBasicosParser.AHORA) | (1 << BCBasicosParser.OLE) | (1 << BCBasicosParser.ACABO) | (1 << BCBasicosParser.ESTA) | (1 << BCBasicosParser.ESA) | (1 << BCBasicosParser.ADIOS) | (1 << BCBasicosParser.VERE) | (1 << BCBasicosParser.NO) | (1 << BCBasicosParser.NADA))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (BCBasicosParser.MUY - 32)) | (1 << (BCBasicosParser.NEGATIVO - 32)) | (1 << (BCBasicosParser.HASTA - 32)) | (1 << (BCBasicosParser.CHAO - 32)) | (1 << (BCBasicosParser.ES - 32)) | (1 << (BCBasicosParser.SALUDOS - 32)) | (1 << (BCBasicosParser.HOLA - 32)) | (1 << (BCBasicosParser.YA - 32)))) !== 0) || _la===BCBasicosParser.EMPEZAR);
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
    this.ruleIndex = BCBasicosParser.RULE_intent;
    return this;
}

IntentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntentContext.prototype.constructor = IntentContext;

IntentContext.prototype.feedback = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FeedbackContext);
    } else {
        return this.getTypedRuleContext(FeedbackContext,i);
    }
};

IntentContext.prototype.bye = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ByeContext);
    } else {
        return this.getTypedRuleContext(ByeContext,i);
    }
};

IntentContext.prototype.greeting = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(GreetingContext);
    } else {
        return this.getTypedRuleContext(GreetingContext,i);
    }
};

IntentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCBasicosVisitor ) {
        return visitor.visitIntent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCBasicosParser.IntentContext = IntentContext;

BCBasicosParser.prototype.intent = function() {

    var localctx = new IntentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BCBasicosParser.RULE_intent);
    try {
        this.state = 34;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 20; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 19;
            		this.feedback();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 22; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 25; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 24;
            		this.bye();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 27; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 30; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 29;
            		this.greeting();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 32; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
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

function FeedbackContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCBasicosParser.RULE_feedback;
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
    if ( visitor instanceof BCBasicosVisitor ) {
        return visitor.visitFeedback(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCBasicosParser.FeedbackContext = FeedbackContext;

BCBasicosParser.prototype.feedback = function() {

    var localctx = new FeedbackContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BCBasicosParser.RULE_feedback);
    try {
        this.state = 38;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case BCBasicosParser.GRACIAS:
        case BCBasicosParser.GENIAL:
        case BCBasicosParser.PERFECTO:
        case BCBasicosParser.BIEN:
        case BCBasicosParser.BUENA:
        case BCBasicosParser.ME:
        case BCBasicosParser.AHORA:
        case BCBasicosParser.OLE:
        case BCBasicosParser.ACABO:
        case BCBasicosParser.ESTA:
        case BCBasicosParser.ESA:
        case BCBasicosParser.VERE:
        case BCBasicosParser.NO:
        case BCBasicosParser.MUY:
            this.enterOuterAlt(localctx, 1);
            this.state = 36;
            this.positivo();
            break;
        case BCBasicosParser.NEGATIVO:
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
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
    this.ruleIndex = BCBasicosParser.RULE_positivo;
    return this;
}

PositivoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PositivoContext.prototype.constructor = PositivoContext;

PositivoContext.prototype.GENIAL = function() {
    return this.getToken(BCBasicosParser.GENIAL, 0);
};

PositivoContext.prototype.BIEN = function() {
    return this.getToken(BCBasicosParser.BIEN, 0);
};

PositivoContext.prototype.GRACIAS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.GRACIAS);
    } else {
        return this.getToken(BCBasicosParser.GRACIAS, i);
    }
};


PositivoContext.prototype.ME = function() {
    return this.getToken(BCBasicosParser.ME, 0);
};

PositivoContext.prototype.GUSTA = function() {
    return this.getToken(BCBasicosParser.GUSTA, 0);
};

PositivoContext.prototype.BUENA = function() {
    return this.getToken(BCBasicosParser.BUENA, 0);
};

PositivoContext.prototype.SELECCION = function() {
    return this.getToken(BCBasicosParser.SELECCION, 0);
};

PositivoContext.prototype.AHORA = function() {
    return this.getToken(BCBasicosParser.AHORA, 0);
};

PositivoContext.prototype.SI = function() {
    return this.getToken(BCBasicosParser.SI, 0);
};

PositivoContext.prototype.OLE = function() {
    return this.getToken(BCBasicosParser.OLE, 0);
};

PositivoContext.prototype.ESTA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.ESTA);
    } else {
        return this.getToken(BCBasicosParser.ESTA, i);
    }
};


PositivoContext.prototype.ERA = function() {
    return this.getToken(BCBasicosParser.ERA, 0);
};

PositivoContext.prototype.PERFECTO = function() {
    return this.getToken(BCBasicosParser.PERFECTO, 0);
};

PositivoContext.prototype.ACABO = function() {
    return this.getToken(BCBasicosParser.ACABO, 0);
};

PositivoContext.prototype.VERLA = function() {
    return this.getToken(BCBasicosParser.VERLA, 0);
};

PositivoContext.prototype.DE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.DE);
    } else {
        return this.getToken(BCBasicosParser.DE, i);
    }
};


PositivoContext.prototype.GUARDO = function() {
    return this.getToken(BCBasicosParser.GUARDO, 0);
};

PositivoContext.prototype.PARA = function() {
    return this.getToken(BCBasicosParser.PARA, 0);
};

PositivoContext.prototype.MAS = function() {
    return this.getToken(BCBasicosParser.MAS, 0);
};

PositivoContext.prototype.TARDE = function() {
    return this.getToken(BCBasicosParser.TARDE, 0);
};

PositivoContext.prototype.LA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.LA);
    } else {
        return this.getToken(BCBasicosParser.LA, i);
    }
};


PositivoContext.prototype.RECOMENDACION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.RECOMENDACION);
    } else {
        return this.getToken(BCBasicosParser.RECOMENDACION, i);
    }
};


PositivoContext.prototype.ESA = function() {
    return this.getToken(BCBasicosParser.ESA, 0);
};

PositivoContext.prototype.ADIOS = function() {
    return this.getToken(BCBasicosParser.ADIOS, 0);
};

PositivoContext.prototype.VERE = function() {
    return this.getToken(BCBasicosParser.VERE, 0);
};

PositivoContext.prototype.PERO = function() {
    return this.getToken(BCBasicosParser.PERO, 0);
};

PositivoContext.prototype.NO = function() {
    return this.getToken(BCBasicosParser.NO, 0);
};

PositivoContext.prototype.CONVENCES = function() {
    return this.getToken(BCBasicosParser.CONVENCES, 0);
};

PositivoContext.prototype.NADA = function() {
    return this.getToken(BCBasicosParser.NADA, 0);
};

PositivoContext.prototype.PARECE = function() {
    return this.getToken(BCBasicosParser.PARECE, 0);
};

PositivoContext.prototype.MUY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.MUY);
    } else {
        return this.getToken(BCBasicosParser.MUY, i);
    }
};


PositivoContext.prototype.MAL = function() {
    return this.getToken(BCBasicosParser.MAL, 0);
};

PositivoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCBasicosVisitor ) {
        return visitor.visitPositivo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCBasicosParser.PositivoContext = PositivoContext;

BCBasicosParser.prototype.positivo = function() {

    var localctx = new PositivoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BCBasicosParser.RULE_positivo);
    var _la = 0; // Token type
    try {
        this.state = 125;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 40;
            this.match(BCBasicosParser.GENIAL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 41;
            this.match(BCBasicosParser.BIEN);
            this.state = 42;
            this.match(BCBasicosParser.GENIAL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 43;
            this.match(BCBasicosParser.GRACIAS);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 47;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.GRACIAS) {
                this.state = 44;
                this.match(BCBasicosParser.GRACIAS);
                this.state = 49;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 50;
            this.match(BCBasicosParser.ME);
            this.state = 51;
            this.match(BCBasicosParser.GUSTA);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 52;
            this.match(BCBasicosParser.BUENA);
            this.state = 53;
            this.match(BCBasicosParser.SELECCION);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 54;
            this.match(BCBasicosParser.AHORA);
            this.state = 55;
            this.match(BCBasicosParser.SI);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 56;
            this.match(BCBasicosParser.OLE);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 57;
            this.match(BCBasicosParser.ESTA);
            this.state = 58;
            this.match(BCBasicosParser.ERA);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 59;
            this.match(BCBasicosParser.PERFECTO);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 60;
            this.match(BCBasicosParser.ACABO);
            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.DE) {
                this.state = 61;
                this.match(BCBasicosParser.DE);
                this.state = 66;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 67;
            this.match(BCBasicosParser.VERLA);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 68;
            this.match(BCBasicosParser.PERFECTO);
            this.state = 69;
            this.match(BCBasicosParser.ME);
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.LA) {
                this.state = 70;
                this.match(BCBasicosParser.LA);
                this.state = 75;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 76;
            this.match(BCBasicosParser.GUARDO);
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.LA) {
                this.state = 77;
                this.match(BCBasicosParser.LA);
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 86;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.RECOMENDACION) {
                this.state = 83;
                this.match(BCBasicosParser.RECOMENDACION);
                this.state = 88;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 89;
            this.match(BCBasicosParser.PARA);
            this.state = 90;
            this.match(BCBasicosParser.MAS);
            this.state = 91;
            this.match(BCBasicosParser.TARDE);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 92;
            _la = this._input.LA(1);
            if(!(_la===BCBasicosParser.ESTA || _la===BCBasicosParser.ESA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 93;
            this.match(BCBasicosParser.ESTA);
            this.state = 94;
            this.match(BCBasicosParser.BIEN);
            this.state = 95;
            _la = this._input.LA(1);
            if(!(_la===BCBasicosParser.GRACIAS || _la===BCBasicosParser.ADIOS)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 96;
            this.match(BCBasicosParser.VERE);
            this.state = 97;
            _la = this._input.LA(1);
            if(!(_la===BCBasicosParser.ESTA || _la===BCBasicosParser.ESA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 98;
            this.match(BCBasicosParser.PERO);
            this.state = 99;
            this.match(BCBasicosParser.NO);
            this.state = 100;
            this.match(BCBasicosParser.ME);
            this.state = 101;
            this.match(BCBasicosParser.CONVENCES);
            this.state = 102;
            this.match(BCBasicosParser.NADA);
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 103;
            this.match(BCBasicosParser.ME);
            this.state = 104;
            this.match(BCBasicosParser.PARECE);
            this.state = 105;
            this.match(BCBasicosParser.MUY);
            this.state = 106;
            this.match(BCBasicosParser.BUENA);
            this.state = 107;
            this.match(BCBasicosParser.RECOMENDACION);
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 108;
            this.match(BCBasicosParser.NO);
            this.state = 109;
            this.match(BCBasicosParser.ESTA);
            this.state = 110;
            this.match(BCBasicosParser.MAL);
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 111;
            this.match(BCBasicosParser.MUY);
            this.state = 112;
            this.match(BCBasicosParser.BIEN);
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 113;
            _la = this._input.LA(1);
            if(!(_la===BCBasicosParser.ESTA || _la===BCBasicosParser.ESA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 114;
            this.match(BCBasicosParser.ESTA);
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.MUY) {
                this.state = 115;
                this.match(BCBasicosParser.MUY);
                this.state = 120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 121;
            this.match(BCBasicosParser.BIEN);
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 122;
            _la = this._input.LA(1);
            if(!(_la===BCBasicosParser.ESTA || _la===BCBasicosParser.ESA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 123;
            this.match(BCBasicosParser.ME);
            this.state = 124;
            this.match(BCBasicosParser.GUSTA);
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
    this.ruleIndex = BCBasicosParser.RULE_negativo;
    return this;
}

NegativoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegativoContext.prototype.constructor = NegativoContext;

NegativoContext.prototype.NEGATIVO = function() {
    return this.getToken(BCBasicosParser.NEGATIVO, 0);
};

NegativoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCBasicosVisitor ) {
        return visitor.visitNegativo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCBasicosParser.NegativoContext = NegativoContext;

BCBasicosParser.prototype.negativo = function() {

    var localctx = new NegativoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BCBasicosParser.RULE_negativo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(BCBasicosParser.NEGATIVO);
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

function ByeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCBasicosParser.RULE_bye;
    return this;
}

ByeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ByeContext.prototype.constructor = ByeContext;

ByeContext.prototype.ADIOS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.ADIOS);
    } else {
        return this.getToken(BCBasicosParser.ADIOS, i);
    }
};


ByeContext.prototype.GRACIAS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.GRACIAS);
    } else {
        return this.getToken(BCBasicosParser.GRACIAS, i);
    }
};


ByeContext.prototype.HASTA = function() {
    return this.getToken(BCBasicosParser.HASTA, 0);
};

ByeContext.prototype.LUEGO = function() {
    return this.getToken(BCBasicosParser.LUEGO, 0);
};

ByeContext.prototype.ME = function() {
    return this.getToken(BCBasicosParser.ME, 0);
};

ByeContext.prototype.VOY = function() {
    return this.getToken(BCBasicosParser.VOY, 0);
};

ByeContext.prototype.MANANA = function() {
    return this.getToken(BCBasicosParser.MANANA, 0);
};

ByeContext.prototype.PRONTO = function() {
    return this.getToken(BCBasicosParser.PRONTO, 0);
};

ByeContext.prototype.TRABAJAR = function() {
    return this.getToken(BCBasicosParser.TRABAJAR, 0);
};

ByeContext.prototype.A = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.A);
    } else {
        return this.getToken(BCBasicosParser.A, i);
    }
};


ByeContext.prototype.UN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.UN);
    } else {
        return this.getToken(BCBasicosParser.UN, i);
    }
};


ByeContext.prototype.RATO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.RATO);
    } else {
        return this.getToken(BCBasicosParser.RATO, i);
    }
};


ByeContext.prototype.NADA = function() {
    return this.getToken(BCBasicosParser.NADA, 0);
};

ByeContext.prototype.MAS = function() {
    return this.getToken(BCBasicosParser.MAS, 0);
};

ByeContext.prototype.CHAO = function() {
    return this.getToken(BCBasicosParser.CHAO, 0);
};

ByeContext.prototype.ES = function() {
    return this.getToken(BCBasicosParser.ES, 0);
};

ByeContext.prototype.TODO = function() {
    return this.getToken(BCBasicosParser.TODO, 0);
};

ByeContext.prototype.VERE = function() {
    return this.getToken(BCBasicosParser.VERE, 0);
};

ByeContext.prototype.SERIE = function() {
    return this.getToken(BCBasicosParser.SERIE, 0);
};

ByeContext.prototype.PELICULA = function() {
    return this.getToken(BCBasicosParser.PELICULA, 0);
};

ByeContext.prototype.LA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.LA);
    } else {
        return this.getToken(BCBasicosParser.LA, i);
    }
};


ByeContext.prototype.ESTA = function() {
    return this.getToken(BCBasicosParser.ESTA, 0);
};

ByeContext.prototype.ESA = function() {
    return this.getToken(BCBasicosParser.ESA, 0);
};

ByeContext.prototype.HOY = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.HOY);
    } else {
        return this.getToken(BCBasicosParser.HOY, i);
    }
};


ByeContext.prototype.POR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.POR);
    } else {
        return this.getToken(BCBasicosParser.POR, i);
    }
};


ByeContext.prototype.NO = function() {
    return this.getToken(BCBasicosParser.NO, 0);
};

ByeContext.prototype.BUENA = function() {
    return this.getToken(BCBasicosParser.BUENA, 0);
};

ByeContext.prototype.NOCHES = function() {
    return this.getToken(BCBasicosParser.NOCHES, 0);
};

ByeContext.prototype.SALUDOS = function() {
    return this.getToken(BCBasicosParser.SALUDOS, 0);
};

ByeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCBasicosVisitor ) {
        return visitor.visitBye(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCBasicosParser.ByeContext = ByeContext;

BCBasicosParser.prototype.bye = function() {

    var localctx = new ByeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BCBasicosParser.RULE_bye);
    var _la = 0; // Token type
    try {
        this.state = 210;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.match(BCBasicosParser.ADIOS);
            this.state = 133;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 130;
                    this.match(BCBasicosParser.ADIOS); 
                }
                this.state = 135;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 136;
            this.match(BCBasicosParser.ADIOS);
            this.state = 137;
            this.match(BCBasicosParser.GRACIAS);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 138;
            this.match(BCBasicosParser.GRACIAS);
            this.state = 139;
            this.match(BCBasicosParser.ADIOS);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 140;
            this.match(BCBasicosParser.HASTA);
            this.state = 141;
            this.match(BCBasicosParser.LUEGO);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 142;
            this.match(BCBasicosParser.ME);
            this.state = 143;
            this.match(BCBasicosParser.VOY);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 144;
            this.match(BCBasicosParser.HASTA);
            this.state = 145;
            _la = this._input.LA(1);
            if(!(_la===BCBasicosParser.MANANA || _la===BCBasicosParser.PRONTO)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 146;
            this.match(BCBasicosParser.ME);
            this.state = 147;
            this.match(BCBasicosParser.VOY);
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.A) {
                this.state = 148;
                this.match(BCBasicosParser.A);
                this.state = 153;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 154;
            this.match(BCBasicosParser.TRABAJAR);
            this.state = 159;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.UN) {
                this.state = 155;
                this.match(BCBasicosParser.UN);
                this.state = 156;
                this.match(BCBasicosParser.RATO);
                this.state = 161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 162;
            this.match(BCBasicosParser.NADA);
            this.state = 163;
            this.match(BCBasicosParser.MAS);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 164;
            this.match(BCBasicosParser.CHAO);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 165;
            this.match(BCBasicosParser.ES);
            this.state = 166;
            this.match(BCBasicosParser.TODO);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 167;
            this.match(BCBasicosParser.HASTA);
            this.state = 168;
            this.match(BCBasicosParser.MANANA);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 169;
            this.match(BCBasicosParser.GRACIAS);
            this.state = 170;
            this.match(BCBasicosParser.VERE);
            this.state = 174;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.LA) {
                this.state = 171;
                this.match(BCBasicosParser.LA);
                this.state = 176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 177;
            _la = this._input.LA(1);
            if(!(_la===BCBasicosParser.SERIE || _la===BCBasicosParser.PELICULA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 178;
            this.match(BCBasicosParser.GRACIAS);
            this.state = 179;
            this.match(BCBasicosParser.LA);
            this.state = 180;
            this.match(BCBasicosParser.VERE);
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 181;
            this.match(BCBasicosParser.VERE);
            this.state = 182;
            _la = this._input.LA(1);
            if(!(_la===BCBasicosParser.ESTA || _la===BCBasicosParser.ESA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 183;
            _la = this._input.LA(1);
            if(!(_la===BCBasicosParser.SERIE || _la===BCBasicosParser.PELICULA)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 184;
            this.match(BCBasicosParser.ESTA);
            this.state = 185;
            this.match(BCBasicosParser.ES);
            this.state = 186;
            this.match(BCBasicosParser.TODO);
            this.state = 196;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.POR || _la===BCBasicosParser.HOY) {
                this.state = 190;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===BCBasicosParser.POR) {
                    this.state = 187;
                    this.match(BCBasicosParser.POR);
                    this.state = 192;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 193;
                this.match(BCBasicosParser.HOY);
                this.state = 198;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 202;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 199;
                    this.match(BCBasicosParser.GRACIAS); 
                }
                this.state = 204;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
            }

            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 205;
            this.match(BCBasicosParser.NO);
            this.state = 206;
            this.match(BCBasicosParser.GRACIAS);
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 207;
            this.match(BCBasicosParser.BUENA);
            this.state = 208;
            this.match(BCBasicosParser.NOCHES);
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 209;
            this.match(BCBasicosParser.SALUDOS);
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

function GreetingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCBasicosParser.RULE_greeting;
    return this;
}

GreetingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GreetingContext.prototype.constructor = GreetingContext;

GreetingContext.prototype.HOLA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.HOLA);
    } else {
        return this.getToken(BCBasicosParser.HOLA, i);
    }
};


GreetingContext.prototype.DE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.DE);
    } else {
        return this.getToken(BCBasicosParser.DE, i);
    }
};


GreetingContext.prototype.NUEVO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.NUEVO);
    } else {
        return this.getToken(BCBasicosParser.NUEVO, i);
    }
};


GreetingContext.prototype.OTRA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.OTRA);
    } else {
        return this.getToken(BCBasicosParser.OTRA, i);
    }
};


GreetingContext.prototype.VEZ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.VEZ);
    } else {
        return this.getToken(BCBasicosParser.VEZ, i);
    }
};


GreetingContext.prototype.BOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.BOT);
    } else {
        return this.getToken(BCBasicosParser.BOT, i);
    }
};


GreetingContext.prototype.BUENA = function() {
    return this.getToken(BCBasicosParser.BUENA, 0);
};

GreetingContext.prototype.QUE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.QUE);
    } else {
        return this.getToken(BCBasicosParser.QUE, i);
    }
};


GreetingContext.prototype.TAL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.TAL);
    } else {
        return this.getToken(BCBasicosParser.TAL, i);
    }
};


GreetingContext.prototype.TARDE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.TARDE);
    } else {
        return this.getToken(BCBasicosParser.TARDE, i);
    }
};


GreetingContext.prototype.DIAS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.DIAS);
    } else {
        return this.getToken(BCBasicosParser.DIAS, i);
    }
};


GreetingContext.prototype.YA = function() {
    return this.getToken(BCBasicosParser.YA, 0);
};

GreetingContext.prototype.HAS = function() {
    return this.getToken(BCBasicosParser.HAS, 0);
};

GreetingContext.prototype.VUELTO = function() {
    return this.getToken(BCBasicosParser.VUELTO, 0);
};

GreetingContext.prototype.BIEN = function() {
    return this.getToken(BCBasicosParser.BIEN, 0);
};

GreetingContext.prototype.GUSTA = function() {
    return this.getToken(BCBasicosParser.GUSTA, 0);
};

GreetingContext.prototype.HAYAS = function() {
    return this.getToken(BCBasicosParser.HAYAS, 0);
};

GreetingContext.prototype.ME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCBasicosParser.ME);
    } else {
        return this.getToken(BCBasicosParser.ME, i);
    }
};


GreetingContext.prototype.EMPEZAR = function() {
    return this.getToken(BCBasicosParser.EMPEZAR, 0);
};

GreetingContext.prototype.ESTA = function() {
    return this.getToken(BCBasicosParser.ESTA, 0);
};

GreetingContext.prototype.ES = function() {
    return this.getToken(BCBasicosParser.ES, 0);
};

GreetingContext.prototype.UNA = function() {
    return this.getToken(BCBasicosParser.UNA, 0);
};

GreetingContext.prototype.PRUEBA = function() {
    return this.getToken(BCBasicosParser.PRUEBA, 0);
};

GreetingContext.prototype.AQUI = function() {
    return this.getToken(BCBasicosParser.AQUI, 0);
};

GreetingContext.prototype.ESTOY = function() {
    return this.getToken(BCBasicosParser.ESTOY, 0);
};

GreetingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCBasicosVisitor ) {
        return visitor.visitGreeting(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCBasicosParser.GreetingContext = GreetingContext;

BCBasicosParser.prototype.greeting = function() {

    var localctx = new GreetingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BCBasicosParser.RULE_greeting);
    var _la = 0; // Token type
    try {
        this.state = 312;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 212;
            this.match(BCBasicosParser.HOLA);
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.DE) {
                this.state = 213;
                this.match(BCBasicosParser.DE);
                this.state = 218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 222;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.NUEVO) {
                this.state = 219;
                this.match(BCBasicosParser.NUEVO);
                this.state = 224;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 228;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.OTRA) {
                this.state = 225;
                this.match(BCBasicosParser.OTRA);
                this.state = 230;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 234;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.VEZ) {
                this.state = 231;
                this.match(BCBasicosParser.VEZ);
                this.state = 236;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 240;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.BOT) {
                this.state = 237;
                this.match(BCBasicosParser.BOT);
                this.state = 242;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 243;
            this.match(BCBasicosParser.HOLA);
            this.state = 247;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.BOT) {
                this.state = 244;
                this.match(BCBasicosParser.BOT);
                this.state = 249;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 250;
            this.match(BCBasicosParser.BUENA);
            this.state = 254;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.QUE) {
                this.state = 251;
                this.match(BCBasicosParser.QUE);
                this.state = 256;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 260;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.TAL) {
                this.state = 257;
                this.match(BCBasicosParser.TAL);
                this.state = 262;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 266;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.HOLA) {
                this.state = 263;
                this.match(BCBasicosParser.HOLA);
                this.state = 268;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 269;
            this.match(BCBasicosParser.BUENA);
            this.state = 273;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.TARDE || _la===BCBasicosParser.DIAS) {
                this.state = 270;
                _la = this._input.LA(1);
                if(!(_la===BCBasicosParser.TARDE || _la===BCBasicosParser.DIAS)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 275;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 279;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.BOT) {
                this.state = 276;
                this.match(BCBasicosParser.BOT);
                this.state = 281;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 282;
            this.match(BCBasicosParser.YA);
            this.state = 283;
            this.match(BCBasicosParser.HAS);
            this.state = 284;
            this.match(BCBasicosParser.VUELTO);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 285;
            this.match(BCBasicosParser.BIEN);
            this.state = 289;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.ME) {
                this.state = 286;
                this.match(BCBasicosParser.ME);
                this.state = 291;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 292;
            this.match(BCBasicosParser.GUSTA);
            this.state = 296;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCBasicosParser.QUE) {
                this.state = 293;
                this.match(BCBasicosParser.QUE);
                this.state = 298;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 299;
            this.match(BCBasicosParser.HAYAS);
            this.state = 300;
            this.match(BCBasicosParser.VUELTO);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 301;
            this.match(BCBasicosParser.EMPEZAR);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 302;
            this.match(BCBasicosParser.HOLA);
            this.state = 303;
            this.match(BCBasicosParser.ESTA);
            this.state = 304;
            this.match(BCBasicosParser.ES);
            this.state = 305;
            this.match(BCBasicosParser.UNA);
            this.state = 306;
            this.match(BCBasicosParser.PRUEBA);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 307;
            this.match(BCBasicosParser.HOLA);
            this.state = 308;
            this.match(BCBasicosParser.AQUI);
            this.state = 309;
            this.match(BCBasicosParser.ESTOY);
            this.state = 310;
            this.match(BCBasicosParser.DE);
            this.state = 311;
            this.match(BCBasicosParser.NUEVO);
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


exports.BCBasicosParser = BCBasicosParser;
