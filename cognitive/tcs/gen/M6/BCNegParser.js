// Generated from /Users/joserg/botcorn/otro/botcorn/src/tcs/gen/M6/BCNeg.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var BCNegVisitor = require('./BCNegVisitor').BCNegVisitor;

var grammarFileName = "BCNeg.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003{\u016f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0003\u0002\u0006\u0002D\n\u0002",
    "\r\u0002\u000e\u0002E\u0003\u0003\u0006\u0003I\n\u0003\r\u0003\u000e",
    "\u0003J\u0003\u0004\u0007\u0004N\n\u0004\f\u0004\u000e\u0004Q\u000b",
    "\u0004\u0003\u0004\u0006\u0004T\n\u0004\r\u0004\u000e\u0004U\u0003\u0004",
    "\u0003\u0004\u0007\u0004Z\n\u0004\f\u0004\u000e\u0004]\u000b\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004a\n\u0004\f\u0004\u000e\u0004d\u000b\u0004",
    "\u0003\u0004\u0007\u0004g\n\u0004\f\u0004\u000e\u0004j\u000b\u0004\u0003",
    "\u0004\u0006\u0004m\n\u0004\r\u0004\u000e\u0004n\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0006\u0004t\n\u0004\r\u0004\u000e\u0004u\u0003\u0004\u0003",
    "\u0004\u0006\u0004z\n\u0004\r\u0004\u000e\u0004{\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0006\u0004\u0081\n\u0004\r\u0004\u000e\u0004\u0082\u0003",
    "\u0004\u0003\u0004\u0006\u0004\u0087\n\u0004\r\u0004\u000e\u0004\u0088",
    "\u0003\u0004\u0003\u0004\u0006\u0004\u008d\n\u0004\r\u0004\u000e\u0004",
    "\u008e\u0003\u0004\u0003\u0004\u0007\u0004\u0093\n\u0004\f\u0004\u000e",
    "\u0004\u0096\u000b\u0004\u0003\u0004\u0006\u0004\u0099\n\u0004\r\u0004",
    "\u000e\u0004\u009a\u0003\u0004\u0007\u0004\u009e\n\u0004\f\u0004\u000e",
    "\u0004\u00a1\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "\u00a6\n\u0004\f\u0004\u000e\u0004\u00a9\u000b\u0004\u0003\u0004\u0006",
    "\u0004\u00ac\n\u0004\r\u0004\u000e\u0004\u00ad\u0003\u0004\u0003\u0004",
    "\u0007\u0004\u00b2\n\u0004\f\u0004\u000e\u0004\u00b5\u000b\u0004\u0003",
    "\u0004\u0006\u0004\u00b8\n\u0004\r\u0004\u000e\u0004\u00b9\u0005\u0004",
    "\u00bc\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005\u00c5\n\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0007\t",
    "\u00ce\n\t\f\t\u000e\t\u00d1\u000b\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0005\t\u00e3\n\t\u0003\n\u0003\n\u0007\n",
    "\u00e7\n\n\f\n\u000e\n\u00ea\u000b\n\u0003\n\u0003\n\u0007\n\u00ee\n",
    "\n\f\n\u000e\n\u00f1\u000b\n\u0003\u000b\u0003\u000b\u0007\u000b\u00f5",
    "\n\u000b\f\u000b\u000e\u000b\u00f8\u000b\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0007\r\u0101\n\r\f\r\u000e",
    "\r\u0104\u000b\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u012c\n\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0007\u001b\u0135\n\u001b\f\u001b\u000e\u001b\u0138\u000b\u001b",
    "\u0003\u001b\u0003\u001b\u0007\u001b\u013c\n\u001b\f\u001b\u000e\u001b",
    "\u013f\u000b\u001b\u0003\u001b\u0007\u001b\u0142\n\u001b\f\u001b\u000e",
    "\u001b\u0145\u000b\u001b\u0003\u001b\u0007\u001b\u0148\n\u001b\f\u001b",
    "\u000e\u001b\u014b\u000b\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0007\u001d\u0153\n\u001d\f\u001d\u000e",
    "\u001d\u0156\u000b\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u015a\n",
    "\u001d\f\u001d\u000e\u001d\u015d\u000b\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0006\u001e\u0162\n\u001e\r\u001e\u000e\u001e\u0163\u0003",
    "\u001f\u0006\u001f\u0167\n\u001f\r\u001f\u000e\u001f\u0168\u0003 \u0003",
    " \u0003!\u0003!\u0003!\u0002\u0002\"\u0002\u0004\u0006\b\n\f\u000e\u0010",
    "\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@\u0002\f",
    "\u0003\u0002gh\u0003\u0002bf\u0003\u0002\u0006\b\t\u0002\u0011\u0011",
    "\u0013\u0013\u0016\u001e!\'/2TXZ`\u0003\u0002,-\u0003\u00023F\u0003",
    "\u0002HI\u0003\u0002KO\u0003\u0002os\u0004\u0002vvyy\u0002\u018c\u0002",
    "C\u0003\u0002\u0002\u0002\u0004H\u0003\u0002\u0002\u0002\u0006\u00bb",
    "\u0003\u0002\u0002\u0002\b\u00c4\u0003\u0002\u0002\u0002\n\u00c6\u0003",
    "\u0002\u0002\u0002\f\u00c8\u0003\u0002\u0002\u0002\u000e\u00ca\u0003",
    "\u0002\u0002\u0002\u0010\u00e2\u0003\u0002\u0002\u0002\u0012\u00e4\u0003",
    "\u0002\u0002\u0002\u0014\u00f2\u0003\u0002\u0002\u0002\u0016\u00fb\u0003",
    "\u0002\u0002\u0002\u0018\u00fe\u0003\u0002\u0002\u0002\u001a\u0107\u0003",
    "\u0002\u0002\u0002\u001c\u010a\u0003\u0002\u0002\u0002\u001e\u010d\u0003",
    "\u0002\u0002\u0002 \u0110\u0003\u0002\u0002\u0002\"\u0113\u0003\u0002",
    "\u0002\u0002$\u0117\u0003\u0002\u0002\u0002&\u011a\u0003\u0002\u0002",
    "\u0002(\u011d\u0003\u0002\u0002\u0002*\u0120\u0003\u0002\u0002\u0002",
    ",\u0123\u0003\u0002\u0002\u0002.\u012b\u0003\u0002\u0002\u00020\u012d",
    "\u0003\u0002\u0002\u00022\u0130\u0003\u0002\u0002\u00024\u0136\u0003",
    "\u0002\u0002\u00026\u014e\u0003\u0002\u0002\u00028\u0154\u0003\u0002",
    "\u0002\u0002:\u0161\u0003\u0002\u0002\u0002<\u0166\u0003\u0002\u0002",
    "\u0002>\u016a\u0003\u0002\u0002\u0002@\u016c\u0003\u0002\u0002\u0002",
    "BD\u0005\u0004\u0003\u0002CB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002",
    "\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002F\u0003\u0003",
    "\u0002\u0002\u0002GI\u0005\u0006\u0004\u0002HG\u0003\u0002\u0002\u0002",
    "IJ\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002",
    "\u0002K\u0005\u0003\u0002\u0002\u0002LN\u0005\n\u0006\u0002ML\u0003",
    "\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002",
    "OP\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002\u0002QO\u0003\u0002\u0002",
    "\u0002RT\u0005\b\u0005\u0002SR\u0003\u0002\u0002\u0002TU\u0003\u0002",
    "\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002VW\u0003",
    "\u0002\u0002\u0002W[\u0005\n\u0006\u0002XZ\u0005\b\u0005\u0002YX\u0003",
    "\u0002\u0002\u0002Z]\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002",
    "[\\\u0003\u0002\u0002\u0002\\\u00bc\u0003\u0002\u0002\u0002][\u0003",
    "\u0002\u0002\u0002^b\u0005\n\u0006\u0002_a\u0007\n\u0002\u0002`_\u0003",
    "\u0002\u0002\u0002ad\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002",
    "bc\u0003\u0002\u0002\u0002ch\u0003\u0002\u0002\u0002db\u0003\u0002\u0002",
    "\u0002eg\u0007\u0007\u0002\u0002fe\u0003\u0002\u0002\u0002gj\u0003\u0002",
    "\u0002\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002il\u0003",
    "\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002km\u0005\b\u0005\u0002l",
    "k\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002nl\u0003\u0002\u0002",
    "\u0002no\u0003\u0002\u0002\u0002o\u00bc\u0003\u0002\u0002\u0002pq\u0005",
    "\n\u0006\u0002qs\u0007\u0004\u0002\u0002rt\u0005\b\u0005\u0002sr\u0003",
    "\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002",
    "uv\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wy\u0007\u0004\u0002",
    "\u0002xz\u0005\b\u0005\u0002yx\u0003\u0002\u0002\u0002z{\u0003\u0002",
    "\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002|\u00bc",
    "\u0003\u0002\u0002\u0002}~\u0005\n\u0006\u0002~\u0080\u0007\u0005\u0002",
    "\u0002\u007f\u0081\u0005\b\u0005\u0002\u0080\u007f\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002",
    "\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002",
    "\u0002\u0084\u0086\u0007\u0005\u0002\u0002\u0085\u0087\u0005\b\u0005",
    "\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002",
    "\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0088\u0089\u0003\u0002\u0002",
    "\u0002\u0089\u00bc\u0003\u0002\u0002\u0002\u008a\u008c\u0007\u0005\u0002",
    "\u0002\u008b\u008d\u0005\b\u0005\u0002\u008c\u008b\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002",
    "\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002",
    "\u0002\u0090\u0094\u0005\n\u0006\u0002\u0091\u0093\u0007\u0005\u0002",
    "\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\u0096\u0003\u0002\u0002",
    "\u0002\u0094\u0092\u0003\u0002\u0002\u0002\u0094\u0095\u0003\u0002\u0002",
    "\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002",
    "\u0002\u0097\u0099\u0005\b\u0005\u0002\u0098\u0097\u0003\u0002\u0002",
    "\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u00bc\u0003\u0002\u0002",
    "\u0002\u009c\u009e\u0007\u000b\u0002\u0002\u009d\u009c\u0003\u0002\u0002",
    "\u0002\u009e\u00a1\u0003\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002",
    "\u0002\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a2\u0003\u0002\u0002",
    "\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007\b\u0002",
    "\u0002\u00a3\u00a7\u0007\u0005\u0002\u0002\u00a4\u00a6\u0007\u0004\u0002",
    "\u0002\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a6\u00a9\u0003\u0002\u0002",
    "\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002",
    "\u0002\u00a8\u00ab\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002",
    "\u0002\u00aa\u00ac\u0005\b\u0005\u0002\u00ab\u00aa\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002",
    "\u0002\u00af\u00b3\u0005\n\u0006\u0002\u00b0\u00b2\u0007\u0005\u0002",
    "\u0002\u00b1\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b5\u0003\u0002\u0002",
    "\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002",
    "\u0002\u00b4\u00b7\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002",
    "\u0002\u00b6\u00b8\u0005\b\u0005\u0002\u00b7\u00b6\u0003\u0002\u0002",
    "\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002",
    "\u0002\u00b9\u00ba\u0003\u0002\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002",
    "\u0002\u00bbO\u0003\u0002\u0002\u0002\u00bb^\u0003\u0002\u0002\u0002",
    "\u00bbp\u0003\u0002\u0002\u0002\u00bb}\u0003\u0002\u0002\u0002\u00bb",
    "\u008a\u0003\u0002\u0002\u0002\u00bb\u009f\u0003\u0002\u0002\u0002\u00bc",
    "\u0007\u0003\u0002\u0002\u0002\u00bd\u00be\u0005\f\u0007\u0002\u00be",
    "\u00bf\u0005\u0010\t\u0002\u00bf\u00c5\u0003\u0002\u0002\u0002\u00c0",
    "\u00c5\u0005:\u001e\u0002\u00c1\u00c5\u0005\u0010\t\u0002\u00c2\u00c5",
    "\u0005\f\u0007\u0002\u00c3\u00c5\u0005\u000e\b\u0002\u00c4\u00bd\u0003",
    "\u0002\u0002\u0002\u00c4\u00c0\u0003\u0002\u0002\u0002\u00c4\u00c1\u0003",
    "\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c4\u00c3\u0003",
    "\u0002\u0002\u0002\u00c5\t\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007",
    "\u0003\u0002\u0002\u00c7\u000b\u0003\u0002\u0002\u0002\u00c8\u00c9\t",
    "\u0002\u0002\u0002\u00c9\r\u0003\u0002\u0002\u0002\u00ca\u00cb\t\u0003",
    "\u0002\u0002\u00cb\u000f\u0003\u0002\u0002\u0002\u00cc\u00ce\t\u0004",
    "\u0002\u0002\u00cd\u00cc\u0003\u0002\u0002\u0002\u00ce\u00d1\u0003\u0002",
    "\u0002\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00cf\u00d0\u0003\u0002",
    "\u0002\u0002\u00d0\u00d2\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002",
    "\u0002\u0002\u00d2\u00e3\t\u0005\u0002\u0002\u00d3\u00e3\u0005\u0012",
    "\n\u0002\u00d4\u00e3\u0005\u0014\u000b\u0002\u00d5\u00e3\u0005\u0016",
    "\f\u0002\u00d6\u00e3\u0005\u0018\r\u0002\u00d7\u00e3\u0005\u001a\u000e",
    "\u0002\u00d8\u00e3\u0005\u001c\u000f\u0002\u00d9\u00e3\u0005\u001e\u0010",
    "\u0002\u00da\u00e3\u0005\u0012\n\u0002\u00db\u00e3\u0005 \u0011\u0002",
    "\u00dc\u00e3\u0005\"\u0012\u0002\u00dd\u00e3\u0005$\u0013\u0002\u00de",
    "\u00e3\u0005&\u0014\u0002\u00df\u00e3\u0005(\u0015\u0002\u00e0\u00e3",
    "\u0005*\u0016\u0002\u00e1\u00e3\u0005.\u0018\u0002\u00e2\u00cf\u0003",
    "\u0002\u0002\u0002\u00e2\u00d3\u0003\u0002\u0002\u0002\u00e2\u00d4\u0003",
    "\u0002\u0002\u0002\u00e2\u00d5\u0003\u0002\u0002\u0002\u00e2\u00d6\u0003",
    "\u0002\u0002\u0002\u00e2\u00d7\u0003\u0002\u0002\u0002\u00e2\u00d8\u0003",
    "\u0002\u0002\u0002\u00e2\u00d9\u0003\u0002\u0002\u0002\u00e2\u00da\u0003",
    "\u0002\u0002\u0002\u00e2\u00db\u0003\u0002\u0002\u0002\u00e2\u00dc\u0003",
    "\u0002\u0002\u0002\u00e2\u00dd\u0003\u0002\u0002\u0002\u00e2\u00de\u0003",
    "\u0002\u0002\u0002\u00e2\u00df\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003",
    "\u0002\u0002\u0002\u00e2\u00e1\u0003\u0002\u0002\u0002\u00e3\u0011\u0003",
    "\u0002\u0002\u0002\u00e4\u00e8\u0007+\u0002\u0002\u00e5\u00e7\u0007",
    "\t\u0002\u0002\u00e6\u00e5\u0003\u0002\u0002\u0002\u00e7\u00ea\u0003",
    "\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003",
    "\u0002\u0002\u0002\u00e9\u00eb\u0003\u0002\u0002\u0002\u00ea\u00e8\u0003",
    "\u0002\u0002\u0002\u00eb\u00ef\t\u0006\u0002\u0002\u00ec\u00ee\u0007",
    ".\u0002\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002\u00ee\u00f1\u0003",
    "\u0002\u0002\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003",
    "\u0002\u0002\u0002\u00f0\u0013\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003",
    "\u0002\u0002\u0002\u00f2\u00f6\u0007h\u0002\u0002\u00f3\u00f5\u0007",
    "\u0007\u0002\u0002\u00f4\u00f3\u0003\u0002\u0002\u0002\u00f5\u00f8\u0003",
    "\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f6\u00f7\u0003",
    "\u0002\u0002\u0002\u00f7\u00f9\u0003\u0002\u0002\u0002\u00f8\u00f6\u0003",
    "\u0002\u0002\u0002\u00f9\u00fa\u0007*\u0002\u0002\u00fa\u0015\u0003",
    "\u0002\u0002\u0002\u00fb\u00fc\u0007T\u0002\u0002\u00fc\u00fd\u0007",
    ")\u0002\u0002\u00fd\u0017\u0003\u0002\u0002\u0002\u00fe\u0102\u0007",
    "\u0015\u0002\u0002\u00ff\u0101\u0007\u0007\u0002\u0002\u0100\u00ff\u0003",
    "\u0002\u0002\u0002\u0101\u0104\u0003\u0002\u0002\u0002\u0102\u0100\u0003",
    "\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103\u0105\u0003",
    "\u0002\u0002\u0002\u0104\u0102\u0003\u0002\u0002\u0002\u0105\u0106\u0007",
    "*\u0002\u0002\u0106\u0019\u0003\u0002\u0002\u0002\u0107\u0108\u0007",
    "\u0014\u0002\u0002\u0108\u0109\u0007Y\u0002\u0002\u0109\u001b\u0003",
    "\u0002\u0002\u0002\u010a\u010b\u0007\u0013\u0002\u0002\u010b\u010c\u0007",
    "\u0012\u0002\u0002\u010c\u001d\u0003\u0002\u0002\u0002\u010d\u010e\u0007",
    "\u0011\u0002\u0002\u010e\u010f\u0007\u0012\u0002\u0002\u010f\u001f\u0003",
    "\u0002\u0002\u0002\u0110\u0111\u0007\u0010\u0002\u0002\u0111\u0112\u0007",
    "\u000f\u0002\u0002\u0112!\u0003\u0002\u0002\u0002\u0113\u0114\u0007",
    "(\u0002\u0002\u0114\u0115\u0007\u0010\u0002\u0002\u0115\u0116\u0007",
    "\f\u0002\u0002\u0116#\u0003\u0002\u0002\u0002\u0117\u0118\u0007\u000e",
    "\u0002\u0002\u0118\u0119\u0007\r\u0002\u0002\u0119%\u0003\u0002\u0002",
    "\u0002\u011a\u011b\u0007V\u0002\u0002\u011b\u011c\u0007Z\u0002\u0002",
    "\u011c\'\u0003\u0002\u0002\u0002\u011d\u011e\u0007T\u0002\u0002\u011e",
    "\u011f\u0007V\u0002\u0002\u011f)\u0003\u0002\u0002\u0002\u0120\u0121",
    "\u0007\u001f\u0002\u0002\u0121\u0122\u0007 \u0002\u0002\u0122+\u0003",
    "\u0002\u0002\u0002\u0123\u0124\t\u0007\u0002\u0002\u0124-\u0003\u0002",
    "\u0002\u0002\u0125\u012c\u0007P\u0002\u0002\u0126\u012c\u0007S\u0002",
    "\u0002\u0127\u012c\u00052\u001a\u0002\u0128\u012c\u00050\u0019\u0002",
    "\u0129\u012c\u00054\u001b\u0002\u012a\u012c\u00056\u001c\u0002\u012b",
    "\u0125\u0003\u0002\u0002\u0002\u012b\u0126\u0003\u0002\u0002\u0002\u012b",
    "\u0127\u0003\u0002\u0002\u0002\u012b\u0128\u0003\u0002\u0002\u0002\u012b",
    "\u0129\u0003\u0002\u0002\u0002\u012b\u012a\u0003\u0002\u0002\u0002\u012c",
    "/\u0003\u0002\u0002\u0002\u012d\u012e\u0007R\u0002\u0002\u012e\u012f",
    "\u0007P\u0002\u0002\u012f1\u0003\u0002\u0002\u0002\u0130\u0131\u0007",
    "R\u0002\u0002\u0131\u0132\u0007Q\u0002\u0002\u01323\u0003\u0002\u0002",
    "\u0002\u0133\u0135\u0007\u0007\u0002\u0002\u0134\u0133\u0003\u0002\u0002",
    "\u0002\u0135\u0138\u0003\u0002\u0002\u0002\u0136\u0134\u0003\u0002\u0002",
    "\u0002\u0136\u0137\u0003\u0002\u0002\u0002\u0137\u0139\u0003\u0002\u0002",
    "\u0002\u0138\u0136\u0003\u0002\u0002\u0002\u0139\u013d\u0007G\u0002",
    "\u0002\u013a\u013c\t\b\u0002\u0002\u013b\u013a\u0003\u0002\u0002\u0002",
    "\u013c\u013f\u0003\u0002\u0002\u0002\u013d\u013b\u0003\u0002\u0002\u0002",
    "\u013d\u013e\u0003\u0002\u0002\u0002\u013e\u0143\u0003\u0002\u0002\u0002",
    "\u013f\u013d\u0003\u0002\u0002\u0002\u0140\u0142\u0007\u0007\u0002\u0002",
    "\u0141\u0140\u0003\u0002\u0002\u0002\u0142\u0145\u0003\u0002\u0002\u0002",
    "\u0143\u0141\u0003\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002\u0002",
    "\u0144\u0149\u0003\u0002\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002",
    "\u0146\u0148\u0007G\u0002\u0002\u0147\u0146\u0003\u0002\u0002\u0002",
    "\u0148\u014b\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002\u0002",
    "\u0149\u014a\u0003\u0002\u0002\u0002\u014a\u014c\u0003\u0002\u0002\u0002",
    "\u014b\u0149\u0003\u0002\u0002\u0002\u014c\u014d\t\t\u0002\u0002\u014d",
    "5\u0003\u0002\u0002\u0002\u014e\u014f\u0007J\u0002\u0002\u014f\u0150",
    "\u0007I\u0002\u0002\u01507\u0003\u0002\u0002\u0002\u0151\u0153\u0007",
    "\u0006\u0002\u0002\u0152\u0151\u0003\u0002\u0002\u0002\u0153\u0156\u0003",
    "\u0002\u0002\u0002\u0154\u0152\u0003\u0002\u0002\u0002\u0154\u0155\u0003",
    "\u0002\u0002\u0002\u0155\u0157\u0003\u0002\u0002\u0002\u0156\u0154\u0003",
    "\u0002\u0002\u0002\u0157\u015b\u0007n\u0002\u0002\u0158\u015a\u0007",
    "\t\u0002\u0002\u0159\u0158\u0003\u0002\u0002\u0002\u015a\u015d\u0003",
    "\u0002\u0002\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015b\u015c\u0003",
    "\u0002\u0002\u0002\u015c\u015e\u0003\u0002\u0002\u0002\u015d\u015b\u0003",
    "\u0002\u0002\u0002\u015e\u015f\t\n\u0002\u0002\u015f9\u0003\u0002\u0002",
    "\u0002\u0160\u0162\u0005@!\u0002\u0161\u0160\u0003\u0002\u0002\u0002",
    "\u0162\u0163\u0003\u0002\u0002\u0002\u0163\u0161\u0003\u0002\u0002\u0002",
    "\u0163\u0164\u0003\u0002\u0002\u0002\u0164;\u0003\u0002\u0002\u0002",
    "\u0165\u0167\u0007w\u0002\u0002\u0166\u0165\u0003\u0002\u0002\u0002",
    "\u0167\u0168\u0003\u0002\u0002\u0002\u0168\u0166\u0003\u0002\u0002\u0002",
    "\u0168\u0169\u0003\u0002\u0002\u0002\u0169=\u0003\u0002\u0002\u0002",
    "\u016a\u016b\u0007w\u0002\u0002\u016b?\u0003\u0002\u0002\u0002\u016c",
    "\u016d\t\u000b\u0002\u0002\u016dA\u0003\u0002\u0002\u0002\'EJOU[bhn",
    "u{\u0082\u0088\u008e\u0094\u009a\u009f\u00a7\u00ad\u00b3\u00b9\u00bb",
    "\u00c4\u00cf\u00e2\u00e8\u00ef\u00f6\u0102\u012b\u0136\u013d\u0143\u0149",
    "\u0154\u015b\u0163\u0168"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'no'", null, "'quiero'", "'para'", null, "'que'", 
                     "'en'", "'mejor'", "'lo'", "'mundial'", "'psicologico'", 
                     "'thriller'", "'fria'", "'guerra'", "'dc'", null, "'marvel'", 
                     "'ciencia'", "'miniserie'", null, "'animacion'", "'pixar'", 
                     "'infantil'", null, null, "'distopia'", null, "'parodia'", 
                     "'super'", null, "'comic'", "'politica'", null, "'telenovela'", 
                     "'policiaco'", "'crimen'", "'sitcom'", null, "'negra'", 
                     null, "'basado'", null, null, null, null, "'intriga'", 
                     "'trhiller'", null, "'alegria'", "'tristeza'", "'odio'", 
                     null, "'envidia'", null, "'entusiasmo'", "'fuerte'", 
                     "'neutro'", "'peligroso'", null, "'egoista'", null, 
                     null, null, null, null, null, null, "'avaricia'", null, 
                     null, null, "'este'", null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, "'deportes'", null, null, null, null, null, 
                     "'engancharme'", null, null, null, null, "'ficha'", 
                     null, null, "'ahora'", null, null, null, "'hoy'", "'ver'", 
                     null, null, null, null, null, "'yo'", "'tu'", null, 
                     null, "'\n'" ];

var symbolicNames = [ null, "NO", "ES", "QUIERO", "PARA", "DE", "QUE", "EN", 
                      "MEJOR", "LO", "MUNDIAL", "PSICOLOGICO", "THILLER", 
                      "FRIA", "GUERRA", "DC", "COMICS", "MARVEL", "CIENCIA", 
                      "MINISERIE", "MELODRAMA", "ANIMACION", "PIXAR", "INFANTIL", 
                      "CORTOMETRAJE", "FANTASMAS", "DISTOPIA", "ESPIAS", 
                      "PARODIA", "SUPER", "HEROE", "COMIC", "POLITICA", 
                      "FANTASTICO", "TELENOVELA", "POLICIACO", "CRIMEN", 
                      "SITCOM", "SEGUNDA", "NEGRA", "TV", "BASADO", "HECHOS", 
                      "SITUACIONES", "REALES", "MONSTRUO", "INTRIGA", "THRILLER", 
                      "WESTER", "ALEGRIA", "TRISTEZA", "ODIO", "IRA", "ENVIDIA", 
                      "ENFADADO", "ENTUSIASMO", "FUERTE", "NEUTRO", "PELIGROSO", 
                      "SENSIBLE", "EGOISTA", "VENGANZA", "BIEN", "MAL", 
                      "IRRITABLE", "VIOLENCIA", "DEPRESION", "CULPA", "AVARICIA", 
                      "ARTIC", "DECADA", "ANNO", "ESTE", "CINCUENTA", "SESENTA", 
                      "SETENTA", "OCHENTA", "NOVENTA", "ESTRENO", "LANZAMIENTO", 
                      "ULTIMO", "ACTUAL", "COMEDIA", "MIEDO", "DRAMA", "AVENTURA", 
                      "ACCION", "FICCION", "ROMANTICA", "DEPORTES", "DOCUMENTAL", 
                      "ENTRETENIMIENTO", "PENSAR", "CLASICA", "SUSPENSE", 
                      "ENGANCHARME", "GENERO", "TITULO", "ACTOR", "DIRECTOR", 
                      "FICHA", "PELICULA", "SERIE", "AHORA", "HAYA", "MOSTRAR", 
                      "SUGERIRME", "HOY", "VER", "FAMILIA", "AMIGOS", "NOVIO", 
                      "MAYORES", "JOVENES", "YO", "TU", "NUMERO", "DIGITO", 
                      "EOL", "STRING", "WS", "PUNT" ];

var ruleNames =  [ "intents", "intent", "negacion", "elementos", "no", "tipoContenido", 
                   "tipoDatos", "tipoGenero", "basadoHechosReales", "serieTV", 
                   "comediaNegra", "miniserieDeTV", "cienciaFiccion", "marvelComics", 
                   "dcComics", "guerraFria", "segundaGuerraMundial", "thrillerPsicologico", 
                   "dramaRomantico", "comediaDramatica", "superHeroes", 
                   "tipoEmocion", "tipoTiempo", "ultimoEstreno", "ultimoLanzamiento", 
                   "deLasDecadas", "esteAnno", "tipoPersona", "terms", "numero", 
                   "digito", "term" ];

function BCNegParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

BCNegParser.prototype = Object.create(antlr4.Parser.prototype);
BCNegParser.prototype.constructor = BCNegParser;

Object.defineProperty(BCNegParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

BCNegParser.EOF = antlr4.Token.EOF;
BCNegParser.NO = 1;
BCNegParser.ES = 2;
BCNegParser.QUIERO = 3;
BCNegParser.PARA = 4;
BCNegParser.DE = 5;
BCNegParser.QUE = 6;
BCNegParser.EN = 7;
BCNegParser.MEJOR = 8;
BCNegParser.LO = 9;
BCNegParser.MUNDIAL = 10;
BCNegParser.PSICOLOGICO = 11;
BCNegParser.THILLER = 12;
BCNegParser.FRIA = 13;
BCNegParser.GUERRA = 14;
BCNegParser.DC = 15;
BCNegParser.COMICS = 16;
BCNegParser.MARVEL = 17;
BCNegParser.CIENCIA = 18;
BCNegParser.MINISERIE = 19;
BCNegParser.MELODRAMA = 20;
BCNegParser.ANIMACION = 21;
BCNegParser.PIXAR = 22;
BCNegParser.INFANTIL = 23;
BCNegParser.CORTOMETRAJE = 24;
BCNegParser.FANTASMAS = 25;
BCNegParser.DISTOPIA = 26;
BCNegParser.ESPIAS = 27;
BCNegParser.PARODIA = 28;
BCNegParser.SUPER = 29;
BCNegParser.HEROE = 30;
BCNegParser.COMIC = 31;
BCNegParser.POLITICA = 32;
BCNegParser.FANTASTICO = 33;
BCNegParser.TELENOVELA = 34;
BCNegParser.POLICIACO = 35;
BCNegParser.CRIMEN = 36;
BCNegParser.SITCOM = 37;
BCNegParser.SEGUNDA = 38;
BCNegParser.NEGRA = 39;
BCNegParser.TV = 40;
BCNegParser.BASADO = 41;
BCNegParser.HECHOS = 42;
BCNegParser.SITUACIONES = 43;
BCNegParser.REALES = 44;
BCNegParser.MONSTRUO = 45;
BCNegParser.INTRIGA = 46;
BCNegParser.THRILLER = 47;
BCNegParser.WESTER = 48;
BCNegParser.ALEGRIA = 49;
BCNegParser.TRISTEZA = 50;
BCNegParser.ODIO = 51;
BCNegParser.IRA = 52;
BCNegParser.ENVIDIA = 53;
BCNegParser.ENFADADO = 54;
BCNegParser.ENTUSIASMO = 55;
BCNegParser.FUERTE = 56;
BCNegParser.NEUTRO = 57;
BCNegParser.PELIGROSO = 58;
BCNegParser.SENSIBLE = 59;
BCNegParser.EGOISTA = 60;
BCNegParser.VENGANZA = 61;
BCNegParser.BIEN = 62;
BCNegParser.MAL = 63;
BCNegParser.IRRITABLE = 64;
BCNegParser.VIOLENCIA = 65;
BCNegParser.DEPRESION = 66;
BCNegParser.CULPA = 67;
BCNegParser.AVARICIA = 68;
BCNegParser.ARTIC = 69;
BCNegParser.DECADA = 70;
BCNegParser.ANNO = 71;
BCNegParser.ESTE = 72;
BCNegParser.CINCUENTA = 73;
BCNegParser.SESENTA = 74;
BCNegParser.SETENTA = 75;
BCNegParser.OCHENTA = 76;
BCNegParser.NOVENTA = 77;
BCNegParser.ESTRENO = 78;
BCNegParser.LANZAMIENTO = 79;
BCNegParser.ULTIMO = 80;
BCNegParser.ACTUAL = 81;
BCNegParser.COMEDIA = 82;
BCNegParser.MIEDO = 83;
BCNegParser.DRAMA = 84;
BCNegParser.AVENTURA = 85;
BCNegParser.ACCION = 86;
BCNegParser.FICCION = 87;
BCNegParser.ROMANTICA = 88;
BCNegParser.DEPORTES = 89;
BCNegParser.DOCUMENTAL = 90;
BCNegParser.ENTRETENIMIENTO = 91;
BCNegParser.PENSAR = 92;
BCNegParser.CLASICA = 93;
BCNegParser.SUSPENSE = 94;
BCNegParser.ENGANCHARME = 95;
BCNegParser.GENERO = 96;
BCNegParser.TITULO = 97;
BCNegParser.ACTOR = 98;
BCNegParser.DIRECTOR = 99;
BCNegParser.FICHA = 100;
BCNegParser.PELICULA = 101;
BCNegParser.SERIE = 102;
BCNegParser.AHORA = 103;
BCNegParser.HAYA = 104;
BCNegParser.MOSTRAR = 105;
BCNegParser.SUGERIRME = 106;
BCNegParser.HOY = 107;
BCNegParser.VER = 108;
BCNegParser.FAMILIA = 109;
BCNegParser.AMIGOS = 110;
BCNegParser.NOVIO = 111;
BCNegParser.MAYORES = 112;
BCNegParser.JOVENES = 113;
BCNegParser.YO = 114;
BCNegParser.TU = 115;
BCNegParser.NUMERO = 116;
BCNegParser.DIGITO = 117;
BCNegParser.EOL = 118;
BCNegParser.STRING = 119;
BCNegParser.WS = 120;
BCNegParser.PUNT = 121;

BCNegParser.RULE_intents = 0;
BCNegParser.RULE_intent = 1;
BCNegParser.RULE_negacion = 2;
BCNegParser.RULE_elementos = 3;
BCNegParser.RULE_no = 4;
BCNegParser.RULE_tipoContenido = 5;
BCNegParser.RULE_tipoDatos = 6;
BCNegParser.RULE_tipoGenero = 7;
BCNegParser.RULE_basadoHechosReales = 8;
BCNegParser.RULE_serieTV = 9;
BCNegParser.RULE_comediaNegra = 10;
BCNegParser.RULE_miniserieDeTV = 11;
BCNegParser.RULE_cienciaFiccion = 12;
BCNegParser.RULE_marvelComics = 13;
BCNegParser.RULE_dcComics = 14;
BCNegParser.RULE_guerraFria = 15;
BCNegParser.RULE_segundaGuerraMundial = 16;
BCNegParser.RULE_thrillerPsicologico = 17;
BCNegParser.RULE_dramaRomantico = 18;
BCNegParser.RULE_comediaDramatica = 19;
BCNegParser.RULE_superHeroes = 20;
BCNegParser.RULE_tipoEmocion = 21;
BCNegParser.RULE_tipoTiempo = 22;
BCNegParser.RULE_ultimoEstreno = 23;
BCNegParser.RULE_ultimoLanzamiento = 24;
BCNegParser.RULE_deLasDecadas = 25;
BCNegParser.RULE_esteAnno = 26;
BCNegParser.RULE_tipoPersona = 27;
BCNegParser.RULE_terms = 28;
BCNegParser.RULE_numero = 29;
BCNegParser.RULE_digito = 30;
BCNegParser.RULE_term = 31;

function IntentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_intents;
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
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitIntents(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.IntentsContext = IntentsContext;

BCNegParser.prototype.intents = function() {

    var localctx = new IntentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, BCNegParser.RULE_intents);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 64;
            this.intent();
            this.state = 67; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BCNegParser.NO) | (1 << BCNegParser.QUIERO) | (1 << BCNegParser.PARA) | (1 << BCNegParser.DE) | (1 << BCNegParser.QUE) | (1 << BCNegParser.LO) | (1 << BCNegParser.THILLER) | (1 << BCNegParser.GUERRA) | (1 << BCNegParser.DC) | (1 << BCNegParser.MARVEL) | (1 << BCNegParser.CIENCIA) | (1 << BCNegParser.MINISERIE) | (1 << BCNegParser.MELODRAMA) | (1 << BCNegParser.ANIMACION) | (1 << BCNegParser.PIXAR) | (1 << BCNegParser.INFANTIL) | (1 << BCNegParser.CORTOMETRAJE) | (1 << BCNegParser.FANTASMAS) | (1 << BCNegParser.DISTOPIA) | (1 << BCNegParser.ESPIAS) | (1 << BCNegParser.PARODIA) | (1 << BCNegParser.SUPER) | (1 << BCNegParser.COMIC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (BCNegParser.POLITICA - 32)) | (1 << (BCNegParser.FANTASTICO - 32)) | (1 << (BCNegParser.TELENOVELA - 32)) | (1 << (BCNegParser.POLICIACO - 32)) | (1 << (BCNegParser.CRIMEN - 32)) | (1 << (BCNegParser.SITCOM - 32)) | (1 << (BCNegParser.SEGUNDA - 32)) | (1 << (BCNegParser.BASADO - 32)) | (1 << (BCNegParser.MONSTRUO - 32)) | (1 << (BCNegParser.INTRIGA - 32)) | (1 << (BCNegParser.THRILLER - 32)) | (1 << (BCNegParser.WESTER - 32)))) !== 0) || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (BCNegParser.ARTIC - 69)) | (1 << (BCNegParser.ESTE - 69)) | (1 << (BCNegParser.ESTRENO - 69)) | (1 << (BCNegParser.ULTIMO - 69)) | (1 << (BCNegParser.ACTUAL - 69)) | (1 << (BCNegParser.COMEDIA - 69)) | (1 << (BCNegParser.MIEDO - 69)) | (1 << (BCNegParser.DRAMA - 69)) | (1 << (BCNegParser.AVENTURA - 69)) | (1 << (BCNegParser.ACCION - 69)) | (1 << (BCNegParser.ROMANTICA - 69)) | (1 << (BCNegParser.DEPORTES - 69)) | (1 << (BCNegParser.DOCUMENTAL - 69)) | (1 << (BCNegParser.ENTRETENIMIENTO - 69)) | (1 << (BCNegParser.PENSAR - 69)) | (1 << (BCNegParser.CLASICA - 69)) | (1 << (BCNegParser.SUSPENSE - 69)) | (1 << (BCNegParser.GENERO - 69)) | (1 << (BCNegParser.TITULO - 69)) | (1 << (BCNegParser.ACTOR - 69)) | (1 << (BCNegParser.DIRECTOR - 69)) | (1 << (BCNegParser.FICHA - 69)))) !== 0) || ((((_la - 101)) & ~0x1f) == 0 && ((1 << (_la - 101)) & ((1 << (BCNegParser.PELICULA - 101)) | (1 << (BCNegParser.SERIE - 101)) | (1 << (BCNegParser.NUMERO - 101)) | (1 << (BCNegParser.STRING - 101)))) !== 0));
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
    this.ruleIndex = BCNegParser.RULE_intent;
    return this;
}

IntentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntentContext.prototype.constructor = IntentContext;

IntentContext.prototype.negacion = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NegacionContext);
    } else {
        return this.getTypedRuleContext(NegacionContext,i);
    }
};

IntentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitIntent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.IntentContext = IntentContext;

BCNegParser.prototype.intent = function() {

    var localctx = new IntentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, BCNegParser.RULE_intent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 69;
        		this.negacion();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 72; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

function NegacionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_negacion;
    return this;
}

NegacionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NegacionContext.prototype.constructor = NegacionContext;


 
NegacionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function N1Context(parser, ctx) {
	NegacionContext.call(this, parser);
    NegacionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

N1Context.prototype = Object.create(NegacionContext.prototype);
N1Context.prototype.constructor = N1Context;

BCNegParser.N1Context = N1Context;

N1Context.prototype.no = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NoContext);
    } else {
        return this.getTypedRuleContext(NoContext,i);
    }
};

N1Context.prototype.elementos = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementosContext);
    } else {
        return this.getTypedRuleContext(ElementosContext,i);
    }
};
N1Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitN1(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function N2Context(parser, ctx) {
	NegacionContext.call(this, parser);
    NegacionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

N2Context.prototype = Object.create(NegacionContext.prototype);
N2Context.prototype.constructor = N2Context;

BCNegParser.N2Context = N2Context;

N2Context.prototype.no = function() {
    return this.getTypedRuleContext(NoContext,0);
};

N2Context.prototype.MEJOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.MEJOR);
    } else {
        return this.getToken(BCNegParser.MEJOR, i);
    }
};


N2Context.prototype.DE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.DE);
    } else {
        return this.getToken(BCNegParser.DE, i);
    }
};


N2Context.prototype.elementos = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementosContext);
    } else {
        return this.getTypedRuleContext(ElementosContext,i);
    }
};
N2Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitN2(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function N3Context(parser, ctx) {
	NegacionContext.call(this, parser);
    NegacionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

N3Context.prototype = Object.create(NegacionContext.prototype);
N3Context.prototype.constructor = N3Context;

BCNegParser.N3Context = N3Context;

N3Context.prototype.no = function() {
    return this.getTypedRuleContext(NoContext,0);
};

N3Context.prototype.ES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.ES);
    } else {
        return this.getToken(BCNegParser.ES, i);
    }
};


N3Context.prototype.elementos = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementosContext);
    } else {
        return this.getTypedRuleContext(ElementosContext,i);
    }
};
N3Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitN3(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function N4Context(parser, ctx) {
	NegacionContext.call(this, parser);
    NegacionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

N4Context.prototype = Object.create(NegacionContext.prototype);
N4Context.prototype.constructor = N4Context;

BCNegParser.N4Context = N4Context;

N4Context.prototype.no = function() {
    return this.getTypedRuleContext(NoContext,0);
};

N4Context.prototype.QUIERO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.QUIERO);
    } else {
        return this.getToken(BCNegParser.QUIERO, i);
    }
};


N4Context.prototype.elementos = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementosContext);
    } else {
        return this.getTypedRuleContext(ElementosContext,i);
    }
};
N4Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitN4(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function N5Context(parser, ctx) {
	NegacionContext.call(this, parser);
    NegacionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

N5Context.prototype = Object.create(NegacionContext.prototype);
N5Context.prototype.constructor = N5Context;

BCNegParser.N5Context = N5Context;

N5Context.prototype.QUIERO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.QUIERO);
    } else {
        return this.getToken(BCNegParser.QUIERO, i);
    }
};


N5Context.prototype.no = function() {
    return this.getTypedRuleContext(NoContext,0);
};

N5Context.prototype.elementos = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementosContext);
    } else {
        return this.getTypedRuleContext(ElementosContext,i);
    }
};
N5Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitN5(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function N6Context(parser, ctx) {
	NegacionContext.call(this, parser);
    NegacionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

N6Context.prototype = Object.create(NegacionContext.prototype);
N6Context.prototype.constructor = N6Context;

BCNegParser.N6Context = N6Context;

N6Context.prototype.QUE = function() {
    return this.getToken(BCNegParser.QUE, 0);
};

N6Context.prototype.QUIERO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.QUIERO);
    } else {
        return this.getToken(BCNegParser.QUIERO, i);
    }
};


N6Context.prototype.no = function() {
    return this.getTypedRuleContext(NoContext,0);
};

N6Context.prototype.LO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.LO);
    } else {
        return this.getToken(BCNegParser.LO, i);
    }
};


N6Context.prototype.ES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.ES);
    } else {
        return this.getToken(BCNegParser.ES, i);
    }
};


N6Context.prototype.elementos = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementosContext);
    } else {
        return this.getTypedRuleContext(ElementosContext,i);
    }
};
N6Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitN6(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BCNegParser.NegacionContext = NegacionContext;

BCNegParser.prototype.negacion = function() {

    var localctx = new NegacionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, BCNegParser.RULE_negacion);
    var _la = 0; // Token type
    try {
        this.state = 185;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            localctx = new N1Context(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 77;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCNegParser.NO) {
                this.state = 74;
                this.no();
                this.state = 79;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 81; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 80;
                this.elementos();
                this.state = 83; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BCNegParser.PARA) | (1 << BCNegParser.DE) | (1 << BCNegParser.QUE) | (1 << BCNegParser.THILLER) | (1 << BCNegParser.GUERRA) | (1 << BCNegParser.DC) | (1 << BCNegParser.MARVEL) | (1 << BCNegParser.CIENCIA) | (1 << BCNegParser.MINISERIE) | (1 << BCNegParser.MELODRAMA) | (1 << BCNegParser.ANIMACION) | (1 << BCNegParser.PIXAR) | (1 << BCNegParser.INFANTIL) | (1 << BCNegParser.CORTOMETRAJE) | (1 << BCNegParser.FANTASMAS) | (1 << BCNegParser.DISTOPIA) | (1 << BCNegParser.ESPIAS) | (1 << BCNegParser.PARODIA) | (1 << BCNegParser.SUPER) | (1 << BCNegParser.COMIC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (BCNegParser.POLITICA - 32)) | (1 << (BCNegParser.FANTASTICO - 32)) | (1 << (BCNegParser.TELENOVELA - 32)) | (1 << (BCNegParser.POLICIACO - 32)) | (1 << (BCNegParser.CRIMEN - 32)) | (1 << (BCNegParser.SITCOM - 32)) | (1 << (BCNegParser.SEGUNDA - 32)) | (1 << (BCNegParser.BASADO - 32)) | (1 << (BCNegParser.MONSTRUO - 32)) | (1 << (BCNegParser.INTRIGA - 32)) | (1 << (BCNegParser.THRILLER - 32)) | (1 << (BCNegParser.WESTER - 32)))) !== 0) || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (BCNegParser.ARTIC - 69)) | (1 << (BCNegParser.ESTE - 69)) | (1 << (BCNegParser.ESTRENO - 69)) | (1 << (BCNegParser.ULTIMO - 69)) | (1 << (BCNegParser.ACTUAL - 69)) | (1 << (BCNegParser.COMEDIA - 69)) | (1 << (BCNegParser.MIEDO - 69)) | (1 << (BCNegParser.DRAMA - 69)) | (1 << (BCNegParser.AVENTURA - 69)) | (1 << (BCNegParser.ACCION - 69)) | (1 << (BCNegParser.ROMANTICA - 69)) | (1 << (BCNegParser.DEPORTES - 69)) | (1 << (BCNegParser.DOCUMENTAL - 69)) | (1 << (BCNegParser.ENTRETENIMIENTO - 69)) | (1 << (BCNegParser.PENSAR - 69)) | (1 << (BCNegParser.CLASICA - 69)) | (1 << (BCNegParser.SUSPENSE - 69)) | (1 << (BCNegParser.GENERO - 69)) | (1 << (BCNegParser.TITULO - 69)) | (1 << (BCNegParser.ACTOR - 69)) | (1 << (BCNegParser.DIRECTOR - 69)) | (1 << (BCNegParser.FICHA - 69)))) !== 0) || ((((_la - 101)) & ~0x1f) == 0 && ((1 << (_la - 101)) & ((1 << (BCNegParser.PELICULA - 101)) | (1 << (BCNegParser.SERIE - 101)) | (1 << (BCNegParser.NUMERO - 101)) | (1 << (BCNegParser.STRING - 101)))) !== 0));
            this.state = 85;
            this.no();
            this.state = 89;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 86;
                    this.elementos(); 
                }
                this.state = 91;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
            }

            break;

        case 2:
            localctx = new N2Context(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 92;
            this.no();
            this.state = 96;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCNegParser.MEJOR) {
                this.state = 93;
                this.match(BCNegParser.MEJOR);
                this.state = 98;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 102;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 99;
                    this.match(BCNegParser.DE); 
                }
                this.state = 104;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
            }

            this.state = 106; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 105;
            		this.elementos();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 108; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 3:
            localctx = new N3Context(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 110;
            this.no();
            this.state = 111;
            this.match(BCNegParser.ES);
            this.state = 113; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 112;
                this.elementos();
                this.state = 115; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BCNegParser.PARA) | (1 << BCNegParser.DE) | (1 << BCNegParser.QUE) | (1 << BCNegParser.THILLER) | (1 << BCNegParser.GUERRA) | (1 << BCNegParser.DC) | (1 << BCNegParser.MARVEL) | (1 << BCNegParser.CIENCIA) | (1 << BCNegParser.MINISERIE) | (1 << BCNegParser.MELODRAMA) | (1 << BCNegParser.ANIMACION) | (1 << BCNegParser.PIXAR) | (1 << BCNegParser.INFANTIL) | (1 << BCNegParser.CORTOMETRAJE) | (1 << BCNegParser.FANTASMAS) | (1 << BCNegParser.DISTOPIA) | (1 << BCNegParser.ESPIAS) | (1 << BCNegParser.PARODIA) | (1 << BCNegParser.SUPER) | (1 << BCNegParser.COMIC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (BCNegParser.POLITICA - 32)) | (1 << (BCNegParser.FANTASTICO - 32)) | (1 << (BCNegParser.TELENOVELA - 32)) | (1 << (BCNegParser.POLICIACO - 32)) | (1 << (BCNegParser.CRIMEN - 32)) | (1 << (BCNegParser.SITCOM - 32)) | (1 << (BCNegParser.SEGUNDA - 32)) | (1 << (BCNegParser.BASADO - 32)) | (1 << (BCNegParser.MONSTRUO - 32)) | (1 << (BCNegParser.INTRIGA - 32)) | (1 << (BCNegParser.THRILLER - 32)) | (1 << (BCNegParser.WESTER - 32)))) !== 0) || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (BCNegParser.ARTIC - 69)) | (1 << (BCNegParser.ESTE - 69)) | (1 << (BCNegParser.ESTRENO - 69)) | (1 << (BCNegParser.ULTIMO - 69)) | (1 << (BCNegParser.ACTUAL - 69)) | (1 << (BCNegParser.COMEDIA - 69)) | (1 << (BCNegParser.MIEDO - 69)) | (1 << (BCNegParser.DRAMA - 69)) | (1 << (BCNegParser.AVENTURA - 69)) | (1 << (BCNegParser.ACCION - 69)) | (1 << (BCNegParser.ROMANTICA - 69)) | (1 << (BCNegParser.DEPORTES - 69)) | (1 << (BCNegParser.DOCUMENTAL - 69)) | (1 << (BCNegParser.ENTRETENIMIENTO - 69)) | (1 << (BCNegParser.PENSAR - 69)) | (1 << (BCNegParser.CLASICA - 69)) | (1 << (BCNegParser.SUSPENSE - 69)) | (1 << (BCNegParser.GENERO - 69)) | (1 << (BCNegParser.TITULO - 69)) | (1 << (BCNegParser.ACTOR - 69)) | (1 << (BCNegParser.DIRECTOR - 69)) | (1 << (BCNegParser.FICHA - 69)))) !== 0) || ((((_la - 101)) & ~0x1f) == 0 && ((1 << (_la - 101)) & ((1 << (BCNegParser.PELICULA - 101)) | (1 << (BCNegParser.SERIE - 101)) | (1 << (BCNegParser.NUMERO - 101)) | (1 << (BCNegParser.STRING - 101)))) !== 0));
            this.state = 117;
            this.match(BCNegParser.ES);
            this.state = 119; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 118;
            		this.elementos();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 121; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,9, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 4:
            localctx = new N4Context(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 123;
            this.no();
            this.state = 124;
            this.match(BCNegParser.QUIERO);
            this.state = 126; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 125;
                this.elementos();
                this.state = 128; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BCNegParser.PARA) | (1 << BCNegParser.DE) | (1 << BCNegParser.QUE) | (1 << BCNegParser.THILLER) | (1 << BCNegParser.GUERRA) | (1 << BCNegParser.DC) | (1 << BCNegParser.MARVEL) | (1 << BCNegParser.CIENCIA) | (1 << BCNegParser.MINISERIE) | (1 << BCNegParser.MELODRAMA) | (1 << BCNegParser.ANIMACION) | (1 << BCNegParser.PIXAR) | (1 << BCNegParser.INFANTIL) | (1 << BCNegParser.CORTOMETRAJE) | (1 << BCNegParser.FANTASMAS) | (1 << BCNegParser.DISTOPIA) | (1 << BCNegParser.ESPIAS) | (1 << BCNegParser.PARODIA) | (1 << BCNegParser.SUPER) | (1 << BCNegParser.COMIC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (BCNegParser.POLITICA - 32)) | (1 << (BCNegParser.FANTASTICO - 32)) | (1 << (BCNegParser.TELENOVELA - 32)) | (1 << (BCNegParser.POLICIACO - 32)) | (1 << (BCNegParser.CRIMEN - 32)) | (1 << (BCNegParser.SITCOM - 32)) | (1 << (BCNegParser.SEGUNDA - 32)) | (1 << (BCNegParser.BASADO - 32)) | (1 << (BCNegParser.MONSTRUO - 32)) | (1 << (BCNegParser.INTRIGA - 32)) | (1 << (BCNegParser.THRILLER - 32)) | (1 << (BCNegParser.WESTER - 32)))) !== 0) || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (BCNegParser.ARTIC - 69)) | (1 << (BCNegParser.ESTE - 69)) | (1 << (BCNegParser.ESTRENO - 69)) | (1 << (BCNegParser.ULTIMO - 69)) | (1 << (BCNegParser.ACTUAL - 69)) | (1 << (BCNegParser.COMEDIA - 69)) | (1 << (BCNegParser.MIEDO - 69)) | (1 << (BCNegParser.DRAMA - 69)) | (1 << (BCNegParser.AVENTURA - 69)) | (1 << (BCNegParser.ACCION - 69)) | (1 << (BCNegParser.ROMANTICA - 69)) | (1 << (BCNegParser.DEPORTES - 69)) | (1 << (BCNegParser.DOCUMENTAL - 69)) | (1 << (BCNegParser.ENTRETENIMIENTO - 69)) | (1 << (BCNegParser.PENSAR - 69)) | (1 << (BCNegParser.CLASICA - 69)) | (1 << (BCNegParser.SUSPENSE - 69)) | (1 << (BCNegParser.GENERO - 69)) | (1 << (BCNegParser.TITULO - 69)) | (1 << (BCNegParser.ACTOR - 69)) | (1 << (BCNegParser.DIRECTOR - 69)) | (1 << (BCNegParser.FICHA - 69)))) !== 0) || ((((_la - 101)) & ~0x1f) == 0 && ((1 << (_la - 101)) & ((1 << (BCNegParser.PELICULA - 101)) | (1 << (BCNegParser.SERIE - 101)) | (1 << (BCNegParser.NUMERO - 101)) | (1 << (BCNegParser.STRING - 101)))) !== 0));
            this.state = 130;
            this.match(BCNegParser.QUIERO);
            this.state = 132; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 131;
            		this.elementos();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 134; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 5:
            localctx = new N5Context(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 136;
            this.match(BCNegParser.QUIERO);
            this.state = 138; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 137;
                this.elementos();
                this.state = 140; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BCNegParser.PARA) | (1 << BCNegParser.DE) | (1 << BCNegParser.QUE) | (1 << BCNegParser.THILLER) | (1 << BCNegParser.GUERRA) | (1 << BCNegParser.DC) | (1 << BCNegParser.MARVEL) | (1 << BCNegParser.CIENCIA) | (1 << BCNegParser.MINISERIE) | (1 << BCNegParser.MELODRAMA) | (1 << BCNegParser.ANIMACION) | (1 << BCNegParser.PIXAR) | (1 << BCNegParser.INFANTIL) | (1 << BCNegParser.CORTOMETRAJE) | (1 << BCNegParser.FANTASMAS) | (1 << BCNegParser.DISTOPIA) | (1 << BCNegParser.ESPIAS) | (1 << BCNegParser.PARODIA) | (1 << BCNegParser.SUPER) | (1 << BCNegParser.COMIC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (BCNegParser.POLITICA - 32)) | (1 << (BCNegParser.FANTASTICO - 32)) | (1 << (BCNegParser.TELENOVELA - 32)) | (1 << (BCNegParser.POLICIACO - 32)) | (1 << (BCNegParser.CRIMEN - 32)) | (1 << (BCNegParser.SITCOM - 32)) | (1 << (BCNegParser.SEGUNDA - 32)) | (1 << (BCNegParser.BASADO - 32)) | (1 << (BCNegParser.MONSTRUO - 32)) | (1 << (BCNegParser.INTRIGA - 32)) | (1 << (BCNegParser.THRILLER - 32)) | (1 << (BCNegParser.WESTER - 32)))) !== 0) || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (BCNegParser.ARTIC - 69)) | (1 << (BCNegParser.ESTE - 69)) | (1 << (BCNegParser.ESTRENO - 69)) | (1 << (BCNegParser.ULTIMO - 69)) | (1 << (BCNegParser.ACTUAL - 69)) | (1 << (BCNegParser.COMEDIA - 69)) | (1 << (BCNegParser.MIEDO - 69)) | (1 << (BCNegParser.DRAMA - 69)) | (1 << (BCNegParser.AVENTURA - 69)) | (1 << (BCNegParser.ACCION - 69)) | (1 << (BCNegParser.ROMANTICA - 69)) | (1 << (BCNegParser.DEPORTES - 69)) | (1 << (BCNegParser.DOCUMENTAL - 69)) | (1 << (BCNegParser.ENTRETENIMIENTO - 69)) | (1 << (BCNegParser.PENSAR - 69)) | (1 << (BCNegParser.CLASICA - 69)) | (1 << (BCNegParser.SUSPENSE - 69)) | (1 << (BCNegParser.GENERO - 69)) | (1 << (BCNegParser.TITULO - 69)) | (1 << (BCNegParser.ACTOR - 69)) | (1 << (BCNegParser.DIRECTOR - 69)) | (1 << (BCNegParser.FICHA - 69)))) !== 0) || ((((_la - 101)) & ~0x1f) == 0 && ((1 << (_la - 101)) & ((1 << (BCNegParser.PELICULA - 101)) | (1 << (BCNegParser.SERIE - 101)) | (1 << (BCNegParser.NUMERO - 101)) | (1 << (BCNegParser.STRING - 101)))) !== 0));
            this.state = 142;
            this.no();
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCNegParser.QUIERO) {
                this.state = 143;
                this.match(BCNegParser.QUIERO);
                this.state = 148;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 150; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 149;
            		this.elementos();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 152; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,14, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;

        case 6:
            localctx = new N6Context(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCNegParser.LO) {
                this.state = 154;
                this.match(BCNegParser.LO);
                this.state = 159;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 160;
            this.match(BCNegParser.QUE);
            this.state = 161;
            this.match(BCNegParser.QUIERO);
            this.state = 165;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCNegParser.ES) {
                this.state = 162;
                this.match(BCNegParser.ES);
                this.state = 167;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 169; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 168;
                this.elementos();
                this.state = 171; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BCNegParser.PARA) | (1 << BCNegParser.DE) | (1 << BCNegParser.QUE) | (1 << BCNegParser.THILLER) | (1 << BCNegParser.GUERRA) | (1 << BCNegParser.DC) | (1 << BCNegParser.MARVEL) | (1 << BCNegParser.CIENCIA) | (1 << BCNegParser.MINISERIE) | (1 << BCNegParser.MELODRAMA) | (1 << BCNegParser.ANIMACION) | (1 << BCNegParser.PIXAR) | (1 << BCNegParser.INFANTIL) | (1 << BCNegParser.CORTOMETRAJE) | (1 << BCNegParser.FANTASMAS) | (1 << BCNegParser.DISTOPIA) | (1 << BCNegParser.ESPIAS) | (1 << BCNegParser.PARODIA) | (1 << BCNegParser.SUPER) | (1 << BCNegParser.COMIC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (BCNegParser.POLITICA - 32)) | (1 << (BCNegParser.FANTASTICO - 32)) | (1 << (BCNegParser.TELENOVELA - 32)) | (1 << (BCNegParser.POLICIACO - 32)) | (1 << (BCNegParser.CRIMEN - 32)) | (1 << (BCNegParser.SITCOM - 32)) | (1 << (BCNegParser.SEGUNDA - 32)) | (1 << (BCNegParser.BASADO - 32)) | (1 << (BCNegParser.MONSTRUO - 32)) | (1 << (BCNegParser.INTRIGA - 32)) | (1 << (BCNegParser.THRILLER - 32)) | (1 << (BCNegParser.WESTER - 32)))) !== 0) || ((((_la - 69)) & ~0x1f) == 0 && ((1 << (_la - 69)) & ((1 << (BCNegParser.ARTIC - 69)) | (1 << (BCNegParser.ESTE - 69)) | (1 << (BCNegParser.ESTRENO - 69)) | (1 << (BCNegParser.ULTIMO - 69)) | (1 << (BCNegParser.ACTUAL - 69)) | (1 << (BCNegParser.COMEDIA - 69)) | (1 << (BCNegParser.MIEDO - 69)) | (1 << (BCNegParser.DRAMA - 69)) | (1 << (BCNegParser.AVENTURA - 69)) | (1 << (BCNegParser.ACCION - 69)) | (1 << (BCNegParser.ROMANTICA - 69)) | (1 << (BCNegParser.DEPORTES - 69)) | (1 << (BCNegParser.DOCUMENTAL - 69)) | (1 << (BCNegParser.ENTRETENIMIENTO - 69)) | (1 << (BCNegParser.PENSAR - 69)) | (1 << (BCNegParser.CLASICA - 69)) | (1 << (BCNegParser.SUSPENSE - 69)) | (1 << (BCNegParser.GENERO - 69)) | (1 << (BCNegParser.TITULO - 69)) | (1 << (BCNegParser.ACTOR - 69)) | (1 << (BCNegParser.DIRECTOR - 69)) | (1 << (BCNegParser.FICHA - 69)))) !== 0) || ((((_la - 101)) & ~0x1f) == 0 && ((1 << (_la - 101)) & ((1 << (BCNegParser.PELICULA - 101)) | (1 << (BCNegParser.SERIE - 101)) | (1 << (BCNegParser.NUMERO - 101)) | (1 << (BCNegParser.STRING - 101)))) !== 0));
            this.state = 173;
            this.no();
            this.state = 177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===BCNegParser.QUIERO) {
                this.state = 174;
                this.match(BCNegParser.QUIERO);
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 181; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 180;
            		this.elementos();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 183; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
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

function ElementosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_elementos;
    return this;
}

ElementosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementosContext.prototype.constructor = ElementosContext;


 
ElementosContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function E5Context(parser, ctx) {
	ElementosContext.call(this, parser);
    ElementosContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E5Context.prototype = Object.create(ElementosContext.prototype);
E5Context.prototype.constructor = E5Context;

BCNegParser.E5Context = E5Context;

E5Context.prototype.tipoDatos = function() {
    return this.getTypedRuleContext(TipoDatosContext,0);
};
E5Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitE5(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E1Context(parser, ctx) {
	ElementosContext.call(this, parser);
    ElementosContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E1Context.prototype = Object.create(ElementosContext.prototype);
E1Context.prototype.constructor = E1Context;

BCNegParser.E1Context = E1Context;

E1Context.prototype.tipoContenido = function() {
    return this.getTypedRuleContext(TipoContenidoContext,0);
};

E1Context.prototype.tipoGenero = function() {
    return this.getTypedRuleContext(TipoGeneroContext,0);
};
E1Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitE1(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E2Context(parser, ctx) {
	ElementosContext.call(this, parser);
    ElementosContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E2Context.prototype = Object.create(ElementosContext.prototype);
E2Context.prototype.constructor = E2Context;

BCNegParser.E2Context = E2Context;

E2Context.prototype.terms = function() {
    return this.getTypedRuleContext(TermsContext,0);
};
E2Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitE2(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E3Context(parser, ctx) {
	ElementosContext.call(this, parser);
    ElementosContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E3Context.prototype = Object.create(ElementosContext.prototype);
E3Context.prototype.constructor = E3Context;

BCNegParser.E3Context = E3Context;

E3Context.prototype.tipoGenero = function() {
    return this.getTypedRuleContext(TipoGeneroContext,0);
};
E3Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitE3(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function E4Context(parser, ctx) {
	ElementosContext.call(this, parser);
    ElementosContext.prototype.copyFrom.call(this, ctx);
    return this;
}

E4Context.prototype = Object.create(ElementosContext.prototype);
E4Context.prototype.constructor = E4Context;

BCNegParser.E4Context = E4Context;

E4Context.prototype.tipoContenido = function() {
    return this.getTypedRuleContext(TipoContenidoContext,0);
};
E4Context.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitE4(this);
    } else {
        return visitor.visitChildren(this);
    }
};



BCNegParser.ElementosContext = ElementosContext;

BCNegParser.prototype.elementos = function() {

    var localctx = new ElementosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, BCNegParser.RULE_elementos);
    try {
        this.state = 194;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            localctx = new E1Context(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 187;
            this.tipoContenido();
            this.state = 188;
            this.tipoGenero();
            break;

        case 2:
            localctx = new E2Context(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.terms();
            break;

        case 3:
            localctx = new E3Context(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 191;
            this.tipoGenero();
            break;

        case 4:
            localctx = new E4Context(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 192;
            this.tipoContenido();
            break;

        case 5:
            localctx = new E5Context(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 193;
            this.tipoDatos();
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

function NoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_no;
    return this;
}

NoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NoContext.prototype.constructor = NoContext;

NoContext.prototype.NO = function() {
    return this.getToken(BCNegParser.NO, 0);
};

NoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitNo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.NoContext = NoContext;

BCNegParser.prototype.no = function() {

    var localctx = new NoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, BCNegParser.RULE_no);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(BCNegParser.NO);
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

function TipoContenidoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_tipoContenido;
    return this;
}

TipoContenidoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TipoContenidoContext.prototype.constructor = TipoContenidoContext;

TipoContenidoContext.prototype.PELICULA = function() {
    return this.getToken(BCNegParser.PELICULA, 0);
};

TipoContenidoContext.prototype.SERIE = function() {
    return this.getToken(BCNegParser.SERIE, 0);
};

TipoContenidoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitTipoContenido(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.TipoContenidoContext = TipoContenidoContext;

BCNegParser.prototype.tipoContenido = function() {

    var localctx = new TipoContenidoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, BCNegParser.RULE_tipoContenido);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        _la = this._input.LA(1);
        if(!(_la===BCNegParser.PELICULA || _la===BCNegParser.SERIE)) {
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

function TipoDatosContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_tipoDatos;
    return this;
}

TipoDatosContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TipoDatosContext.prototype.constructor = TipoDatosContext;

TipoDatosContext.prototype.GENERO = function() {
    return this.getToken(BCNegParser.GENERO, 0);
};

TipoDatosContext.prototype.TITULO = function() {
    return this.getToken(BCNegParser.TITULO, 0);
};

TipoDatosContext.prototype.ACTOR = function() {
    return this.getToken(BCNegParser.ACTOR, 0);
};

TipoDatosContext.prototype.DIRECTOR = function() {
    return this.getToken(BCNegParser.DIRECTOR, 0);
};

TipoDatosContext.prototype.FICHA = function() {
    return this.getToken(BCNegParser.FICHA, 0);
};

TipoDatosContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitTipoDatos(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.TipoDatosContext = TipoDatosContext;

BCNegParser.prototype.tipoDatos = function() {

    var localctx = new TipoDatosContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, BCNegParser.RULE_tipoDatos);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        _la = this._input.LA(1);
        if(!(((((_la - 96)) & ~0x1f) == 0 && ((1 << (_la - 96)) & ((1 << (BCNegParser.GENERO - 96)) | (1 << (BCNegParser.TITULO - 96)) | (1 << (BCNegParser.ACTOR - 96)) | (1 << (BCNegParser.DIRECTOR - 96)) | (1 << (BCNegParser.FICHA - 96)))) !== 0))) {
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

function TipoGeneroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_tipoGenero;
    return this;
}

TipoGeneroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TipoGeneroContext.prototype.constructor = TipoGeneroContext;

TipoGeneroContext.prototype.COMEDIA = function() {
    return this.getToken(BCNegParser.COMEDIA, 0);
};

TipoGeneroContext.prototype.MIEDO = function() {
    return this.getToken(BCNegParser.MIEDO, 0);
};

TipoGeneroContext.prototype.AVENTURA = function() {
    return this.getToken(BCNegParser.AVENTURA, 0);
};

TipoGeneroContext.prototype.DRAMA = function() {
    return this.getToken(BCNegParser.DRAMA, 0);
};

TipoGeneroContext.prototype.ACCION = function() {
    return this.getToken(BCNegParser.ACCION, 0);
};

TipoGeneroContext.prototype.ROMANTICA = function() {
    return this.getToken(BCNegParser.ROMANTICA, 0);
};

TipoGeneroContext.prototype.DEPORTES = function() {
    return this.getToken(BCNegParser.DEPORTES, 0);
};

TipoGeneroContext.prototype.DOCUMENTAL = function() {
    return this.getToken(BCNegParser.DOCUMENTAL, 0);
};

TipoGeneroContext.prototype.ENTRETENIMIENTO = function() {
    return this.getToken(BCNegParser.ENTRETENIMIENTO, 0);
};

TipoGeneroContext.prototype.PENSAR = function() {
    return this.getToken(BCNegParser.PENSAR, 0);
};

TipoGeneroContext.prototype.CLASICA = function() {
    return this.getToken(BCNegParser.CLASICA, 0);
};

TipoGeneroContext.prototype.SUSPENSE = function() {
    return this.getToken(BCNegParser.SUSPENSE, 0);
};

TipoGeneroContext.prototype.MONSTRUO = function() {
    return this.getToken(BCNegParser.MONSTRUO, 0);
};

TipoGeneroContext.prototype.INTRIGA = function() {
    return this.getToken(BCNegParser.INTRIGA, 0);
};

TipoGeneroContext.prototype.THRILLER = function() {
    return this.getToken(BCNegParser.THRILLER, 0);
};

TipoGeneroContext.prototype.WESTER = function() {
    return this.getToken(BCNegParser.WESTER, 0);
};

TipoGeneroContext.prototype.SITCOM = function() {
    return this.getToken(BCNegParser.SITCOM, 0);
};

TipoGeneroContext.prototype.CRIMEN = function() {
    return this.getToken(BCNegParser.CRIMEN, 0);
};

TipoGeneroContext.prototype.POLICIACO = function() {
    return this.getToken(BCNegParser.POLICIACO, 0);
};

TipoGeneroContext.prototype.FANTASTICO = function() {
    return this.getToken(BCNegParser.FANTASTICO, 0);
};

TipoGeneroContext.prototype.POLITICA = function() {
    return this.getToken(BCNegParser.POLITICA, 0);
};

TipoGeneroContext.prototype.COMIC = function() {
    return this.getToken(BCNegParser.COMIC, 0);
};

TipoGeneroContext.prototype.DISTOPIA = function() {
    return this.getToken(BCNegParser.DISTOPIA, 0);
};

TipoGeneroContext.prototype.ESPIAS = function() {
    return this.getToken(BCNegParser.ESPIAS, 0);
};

TipoGeneroContext.prototype.PARODIA = function() {
    return this.getToken(BCNegParser.PARODIA, 0);
};

TipoGeneroContext.prototype.TELENOVELA = function() {
    return this.getToken(BCNegParser.TELENOVELA, 0);
};

TipoGeneroContext.prototype.FANTASMAS = function() {
    return this.getToken(BCNegParser.FANTASMAS, 0);
};

TipoGeneroContext.prototype.CORTOMETRAJE = function() {
    return this.getToken(BCNegParser.CORTOMETRAJE, 0);
};

TipoGeneroContext.prototype.ANIMACION = function() {
    return this.getToken(BCNegParser.ANIMACION, 0);
};

TipoGeneroContext.prototype.INFANTIL = function() {
    return this.getToken(BCNegParser.INFANTIL, 0);
};

TipoGeneroContext.prototype.PIXAR = function() {
    return this.getToken(BCNegParser.PIXAR, 0);
};

TipoGeneroContext.prototype.MELODRAMA = function() {
    return this.getToken(BCNegParser.MELODRAMA, 0);
};

TipoGeneroContext.prototype.MARVEL = function() {
    return this.getToken(BCNegParser.MARVEL, 0);
};

TipoGeneroContext.prototype.DC = function() {
    return this.getToken(BCNegParser.DC, 0);
};

TipoGeneroContext.prototype.PARA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.PARA);
    } else {
        return this.getToken(BCNegParser.PARA, i);
    }
};


TipoGeneroContext.prototype.DE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.DE);
    } else {
        return this.getToken(BCNegParser.DE, i);
    }
};


TipoGeneroContext.prototype.QUE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.QUE);
    } else {
        return this.getToken(BCNegParser.QUE, i);
    }
};


TipoGeneroContext.prototype.basadoHechosReales = function() {
    return this.getTypedRuleContext(BasadoHechosRealesContext,0);
};

TipoGeneroContext.prototype.serieTV = function() {
    return this.getTypedRuleContext(SerieTVContext,0);
};

TipoGeneroContext.prototype.comediaNegra = function() {
    return this.getTypedRuleContext(ComediaNegraContext,0);
};

TipoGeneroContext.prototype.miniserieDeTV = function() {
    return this.getTypedRuleContext(MiniserieDeTVContext,0);
};

TipoGeneroContext.prototype.cienciaFiccion = function() {
    return this.getTypedRuleContext(CienciaFiccionContext,0);
};

TipoGeneroContext.prototype.marvelComics = function() {
    return this.getTypedRuleContext(MarvelComicsContext,0);
};

TipoGeneroContext.prototype.dcComics = function() {
    return this.getTypedRuleContext(DcComicsContext,0);
};

TipoGeneroContext.prototype.guerraFria = function() {
    return this.getTypedRuleContext(GuerraFriaContext,0);
};

TipoGeneroContext.prototype.segundaGuerraMundial = function() {
    return this.getTypedRuleContext(SegundaGuerraMundialContext,0);
};

TipoGeneroContext.prototype.thrillerPsicologico = function() {
    return this.getTypedRuleContext(ThrillerPsicologicoContext,0);
};

TipoGeneroContext.prototype.dramaRomantico = function() {
    return this.getTypedRuleContext(DramaRomanticoContext,0);
};

TipoGeneroContext.prototype.comediaDramatica = function() {
    return this.getTypedRuleContext(ComediaDramaticaContext,0);
};

TipoGeneroContext.prototype.superHeroes = function() {
    return this.getTypedRuleContext(SuperHeroesContext,0);
};

TipoGeneroContext.prototype.tipoTiempo = function() {
    return this.getTypedRuleContext(TipoTiempoContext,0);
};

TipoGeneroContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitTipoGenero(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.TipoGeneroContext = TipoGeneroContext;

BCNegParser.prototype.tipoGenero = function() {

    var localctx = new TipoGeneroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, BCNegParser.RULE_tipoGenero);
    var _la = 0; // Token type
    try {
        this.state = 224;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 205;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BCNegParser.PARA) | (1 << BCNegParser.DE) | (1 << BCNegParser.QUE))) !== 0)) {
                this.state = 202;
                _la = this._input.LA(1);
                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BCNegParser.PARA) | (1 << BCNegParser.DE) | (1 << BCNegParser.QUE))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 207;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 208;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BCNegParser.DC) | (1 << BCNegParser.MARVEL) | (1 << BCNegParser.MELODRAMA) | (1 << BCNegParser.ANIMACION) | (1 << BCNegParser.PIXAR) | (1 << BCNegParser.INFANTIL) | (1 << BCNegParser.CORTOMETRAJE) | (1 << BCNegParser.FANTASMAS) | (1 << BCNegParser.DISTOPIA) | (1 << BCNegParser.ESPIAS) | (1 << BCNegParser.PARODIA) | (1 << BCNegParser.COMIC))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (BCNegParser.POLITICA - 32)) | (1 << (BCNegParser.FANTASTICO - 32)) | (1 << (BCNegParser.TELENOVELA - 32)) | (1 << (BCNegParser.POLICIACO - 32)) | (1 << (BCNegParser.CRIMEN - 32)) | (1 << (BCNegParser.SITCOM - 32)) | (1 << (BCNegParser.MONSTRUO - 32)) | (1 << (BCNegParser.INTRIGA - 32)) | (1 << (BCNegParser.THRILLER - 32)) | (1 << (BCNegParser.WESTER - 32)))) !== 0) || ((((_la - 82)) & ~0x1f) == 0 && ((1 << (_la - 82)) & ((1 << (BCNegParser.COMEDIA - 82)) | (1 << (BCNegParser.MIEDO - 82)) | (1 << (BCNegParser.DRAMA - 82)) | (1 << (BCNegParser.AVENTURA - 82)) | (1 << (BCNegParser.ACCION - 82)) | (1 << (BCNegParser.ROMANTICA - 82)) | (1 << (BCNegParser.DEPORTES - 82)) | (1 << (BCNegParser.DOCUMENTAL - 82)) | (1 << (BCNegParser.ENTRETENIMIENTO - 82)) | (1 << (BCNegParser.PENSAR - 82)) | (1 << (BCNegParser.CLASICA - 82)) | (1 << (BCNegParser.SUSPENSE - 82)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 209;
            this.basadoHechosReales();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 210;
            this.serieTV();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 211;
            this.comediaNegra();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 212;
            this.miniserieDeTV();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 213;
            this.cienciaFiccion();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 214;
            this.marvelComics();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 215;
            this.dcComics();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 216;
            this.basadoHechosReales();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 217;
            this.guerraFria();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 218;
            this.segundaGuerraMundial();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 219;
            this.thrillerPsicologico();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 220;
            this.dramaRomantico();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 221;
            this.comediaDramatica();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 222;
            this.superHeroes();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 223;
            this.tipoTiempo();
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

function BasadoHechosRealesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_basadoHechosReales;
    return this;
}

BasadoHechosRealesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasadoHechosRealesContext.prototype.constructor = BasadoHechosRealesContext;

BasadoHechosRealesContext.prototype.BASADO = function() {
    return this.getToken(BCNegParser.BASADO, 0);
};

BasadoHechosRealesContext.prototype.HECHOS = function() {
    return this.getToken(BCNegParser.HECHOS, 0);
};

BasadoHechosRealesContext.prototype.SITUACIONES = function() {
    return this.getToken(BCNegParser.SITUACIONES, 0);
};

BasadoHechosRealesContext.prototype.EN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.EN);
    } else {
        return this.getToken(BCNegParser.EN, i);
    }
};


BasadoHechosRealesContext.prototype.REALES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.REALES);
    } else {
        return this.getToken(BCNegParser.REALES, i);
    }
};


BasadoHechosRealesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitBasadoHechosReales(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.BasadoHechosRealesContext = BasadoHechosRealesContext;

BCNegParser.prototype.basadoHechosReales = function() {

    var localctx = new BasadoHechosRealesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, BCNegParser.RULE_basadoHechosReales);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 226;
        this.match(BCNegParser.BASADO);
        this.state = 230;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BCNegParser.EN) {
            this.state = 227;
            this.match(BCNegParser.EN);
            this.state = 232;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 233;
        _la = this._input.LA(1);
        if(!(_la===BCNegParser.HECHOS || _la===BCNegParser.SITUACIONES)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BCNegParser.REALES) {
            this.state = 234;
            this.match(BCNegParser.REALES);
            this.state = 239;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function SerieTVContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_serieTV;
    return this;
}

SerieTVContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SerieTVContext.prototype.constructor = SerieTVContext;

SerieTVContext.prototype.SERIE = function() {
    return this.getToken(BCNegParser.SERIE, 0);
};

SerieTVContext.prototype.TV = function() {
    return this.getToken(BCNegParser.TV, 0);
};

SerieTVContext.prototype.DE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.DE);
    } else {
        return this.getToken(BCNegParser.DE, i);
    }
};


SerieTVContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitSerieTV(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.SerieTVContext = SerieTVContext;

BCNegParser.prototype.serieTV = function() {

    var localctx = new SerieTVContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, BCNegParser.RULE_serieTV);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(BCNegParser.SERIE);
        this.state = 244;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BCNegParser.DE) {
            this.state = 241;
            this.match(BCNegParser.DE);
            this.state = 246;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 247;
        this.match(BCNegParser.TV);
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

function ComediaNegraContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_comediaNegra;
    return this;
}

ComediaNegraContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComediaNegraContext.prototype.constructor = ComediaNegraContext;

ComediaNegraContext.prototype.COMEDIA = function() {
    return this.getToken(BCNegParser.COMEDIA, 0);
};

ComediaNegraContext.prototype.NEGRA = function() {
    return this.getToken(BCNegParser.NEGRA, 0);
};

ComediaNegraContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitComediaNegra(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.ComediaNegraContext = ComediaNegraContext;

BCNegParser.prototype.comediaNegra = function() {

    var localctx = new ComediaNegraContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, BCNegParser.RULE_comediaNegra);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(BCNegParser.COMEDIA);
        this.state = 250;
        this.match(BCNegParser.NEGRA);
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

function MiniserieDeTVContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_miniserieDeTV;
    return this;
}

MiniserieDeTVContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MiniserieDeTVContext.prototype.constructor = MiniserieDeTVContext;

MiniserieDeTVContext.prototype.MINISERIE = function() {
    return this.getToken(BCNegParser.MINISERIE, 0);
};

MiniserieDeTVContext.prototype.TV = function() {
    return this.getToken(BCNegParser.TV, 0);
};

MiniserieDeTVContext.prototype.DE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.DE);
    } else {
        return this.getToken(BCNegParser.DE, i);
    }
};


MiniserieDeTVContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitMiniserieDeTV(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.MiniserieDeTVContext = MiniserieDeTVContext;

BCNegParser.prototype.miniserieDeTV = function() {

    var localctx = new MiniserieDeTVContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, BCNegParser.RULE_miniserieDeTV);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.match(BCNegParser.MINISERIE);
        this.state = 256;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BCNegParser.DE) {
            this.state = 253;
            this.match(BCNegParser.DE);
            this.state = 258;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 259;
        this.match(BCNegParser.TV);
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

function CienciaFiccionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_cienciaFiccion;
    return this;
}

CienciaFiccionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CienciaFiccionContext.prototype.constructor = CienciaFiccionContext;

CienciaFiccionContext.prototype.CIENCIA = function() {
    return this.getToken(BCNegParser.CIENCIA, 0);
};

CienciaFiccionContext.prototype.FICCION = function() {
    return this.getToken(BCNegParser.FICCION, 0);
};

CienciaFiccionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitCienciaFiccion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.CienciaFiccionContext = CienciaFiccionContext;

BCNegParser.prototype.cienciaFiccion = function() {

    var localctx = new CienciaFiccionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, BCNegParser.RULE_cienciaFiccion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 261;
        this.match(BCNegParser.CIENCIA);
        this.state = 262;
        this.match(BCNegParser.FICCION);
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

function MarvelComicsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_marvelComics;
    return this;
}

MarvelComicsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MarvelComicsContext.prototype.constructor = MarvelComicsContext;

MarvelComicsContext.prototype.MARVEL = function() {
    return this.getToken(BCNegParser.MARVEL, 0);
};

MarvelComicsContext.prototype.COMICS = function() {
    return this.getToken(BCNegParser.COMICS, 0);
};

MarvelComicsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitMarvelComics(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.MarvelComicsContext = MarvelComicsContext;

BCNegParser.prototype.marvelComics = function() {

    var localctx = new MarvelComicsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, BCNegParser.RULE_marvelComics);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(BCNegParser.MARVEL);
        this.state = 265;
        this.match(BCNegParser.COMICS);
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

function DcComicsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_dcComics;
    return this;
}

DcComicsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DcComicsContext.prototype.constructor = DcComicsContext;

DcComicsContext.prototype.DC = function() {
    return this.getToken(BCNegParser.DC, 0);
};

DcComicsContext.prototype.COMICS = function() {
    return this.getToken(BCNegParser.COMICS, 0);
};

DcComicsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitDcComics(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.DcComicsContext = DcComicsContext;

BCNegParser.prototype.dcComics = function() {

    var localctx = new DcComicsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, BCNegParser.RULE_dcComics);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.match(BCNegParser.DC);
        this.state = 268;
        this.match(BCNegParser.COMICS);
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

function GuerraFriaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_guerraFria;
    return this;
}

GuerraFriaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GuerraFriaContext.prototype.constructor = GuerraFriaContext;

GuerraFriaContext.prototype.GUERRA = function() {
    return this.getToken(BCNegParser.GUERRA, 0);
};

GuerraFriaContext.prototype.FRIA = function() {
    return this.getToken(BCNegParser.FRIA, 0);
};

GuerraFriaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitGuerraFria(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.GuerraFriaContext = GuerraFriaContext;

BCNegParser.prototype.guerraFria = function() {

    var localctx = new GuerraFriaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, BCNegParser.RULE_guerraFria);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(BCNegParser.GUERRA);
        this.state = 271;
        this.match(BCNegParser.FRIA);
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

function SegundaGuerraMundialContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_segundaGuerraMundial;
    return this;
}

SegundaGuerraMundialContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegundaGuerraMundialContext.prototype.constructor = SegundaGuerraMundialContext;

SegundaGuerraMundialContext.prototype.SEGUNDA = function() {
    return this.getToken(BCNegParser.SEGUNDA, 0);
};

SegundaGuerraMundialContext.prototype.GUERRA = function() {
    return this.getToken(BCNegParser.GUERRA, 0);
};

SegundaGuerraMundialContext.prototype.MUNDIAL = function() {
    return this.getToken(BCNegParser.MUNDIAL, 0);
};

SegundaGuerraMundialContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitSegundaGuerraMundial(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.SegundaGuerraMundialContext = SegundaGuerraMundialContext;

BCNegParser.prototype.segundaGuerraMundial = function() {

    var localctx = new SegundaGuerraMundialContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, BCNegParser.RULE_segundaGuerraMundial);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(BCNegParser.SEGUNDA);
        this.state = 274;
        this.match(BCNegParser.GUERRA);
        this.state = 275;
        this.match(BCNegParser.MUNDIAL);
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

function ThrillerPsicologicoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_thrillerPsicologico;
    return this;
}

ThrillerPsicologicoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThrillerPsicologicoContext.prototype.constructor = ThrillerPsicologicoContext;

ThrillerPsicologicoContext.prototype.THILLER = function() {
    return this.getToken(BCNegParser.THILLER, 0);
};

ThrillerPsicologicoContext.prototype.PSICOLOGICO = function() {
    return this.getToken(BCNegParser.PSICOLOGICO, 0);
};

ThrillerPsicologicoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitThrillerPsicologico(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.ThrillerPsicologicoContext = ThrillerPsicologicoContext;

BCNegParser.prototype.thrillerPsicologico = function() {

    var localctx = new ThrillerPsicologicoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, BCNegParser.RULE_thrillerPsicologico);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(BCNegParser.THILLER);
        this.state = 278;
        this.match(BCNegParser.PSICOLOGICO);
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

function DramaRomanticoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_dramaRomantico;
    return this;
}

DramaRomanticoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DramaRomanticoContext.prototype.constructor = DramaRomanticoContext;

DramaRomanticoContext.prototype.DRAMA = function() {
    return this.getToken(BCNegParser.DRAMA, 0);
};

DramaRomanticoContext.prototype.ROMANTICA = function() {
    return this.getToken(BCNegParser.ROMANTICA, 0);
};

DramaRomanticoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitDramaRomantico(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.DramaRomanticoContext = DramaRomanticoContext;

BCNegParser.prototype.dramaRomantico = function() {

    var localctx = new DramaRomanticoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, BCNegParser.RULE_dramaRomantico);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.match(BCNegParser.DRAMA);
        this.state = 281;
        this.match(BCNegParser.ROMANTICA);
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

function ComediaDramaticaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_comediaDramatica;
    return this;
}

ComediaDramaticaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComediaDramaticaContext.prototype.constructor = ComediaDramaticaContext;

ComediaDramaticaContext.prototype.COMEDIA = function() {
    return this.getToken(BCNegParser.COMEDIA, 0);
};

ComediaDramaticaContext.prototype.DRAMA = function() {
    return this.getToken(BCNegParser.DRAMA, 0);
};

ComediaDramaticaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitComediaDramatica(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.ComediaDramaticaContext = ComediaDramaticaContext;

BCNegParser.prototype.comediaDramatica = function() {

    var localctx = new ComediaDramaticaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, BCNegParser.RULE_comediaDramatica);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(BCNegParser.COMEDIA);
        this.state = 284;
        this.match(BCNegParser.DRAMA);
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

function SuperHeroesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_superHeroes;
    return this;
}

SuperHeroesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuperHeroesContext.prototype.constructor = SuperHeroesContext;

SuperHeroesContext.prototype.SUPER = function() {
    return this.getToken(BCNegParser.SUPER, 0);
};

SuperHeroesContext.prototype.HEROE = function() {
    return this.getToken(BCNegParser.HEROE, 0);
};

SuperHeroesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitSuperHeroes(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.SuperHeroesContext = SuperHeroesContext;

BCNegParser.prototype.superHeroes = function() {

    var localctx = new SuperHeroesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, BCNegParser.RULE_superHeroes);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 286;
        this.match(BCNegParser.SUPER);
        this.state = 287;
        this.match(BCNegParser.HEROE);
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

function TipoEmocionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_tipoEmocion;
    return this;
}

TipoEmocionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TipoEmocionContext.prototype.constructor = TipoEmocionContext;

TipoEmocionContext.prototype.ALEGRIA = function() {
    return this.getToken(BCNegParser.ALEGRIA, 0);
};

TipoEmocionContext.prototype.TRISTEZA = function() {
    return this.getToken(BCNegParser.TRISTEZA, 0);
};

TipoEmocionContext.prototype.ODIO = function() {
    return this.getToken(BCNegParser.ODIO, 0);
};

TipoEmocionContext.prototype.IRA = function() {
    return this.getToken(BCNegParser.IRA, 0);
};

TipoEmocionContext.prototype.ENVIDIA = function() {
    return this.getToken(BCNegParser.ENVIDIA, 0);
};

TipoEmocionContext.prototype.ENFADADO = function() {
    return this.getToken(BCNegParser.ENFADADO, 0);
};

TipoEmocionContext.prototype.ENTUSIASMO = function() {
    return this.getToken(BCNegParser.ENTUSIASMO, 0);
};

TipoEmocionContext.prototype.FUERTE = function() {
    return this.getToken(BCNegParser.FUERTE, 0);
};

TipoEmocionContext.prototype.NEUTRO = function() {
    return this.getToken(BCNegParser.NEUTRO, 0);
};

TipoEmocionContext.prototype.PELIGROSO = function() {
    return this.getToken(BCNegParser.PELIGROSO, 0);
};

TipoEmocionContext.prototype.SENSIBLE = function() {
    return this.getToken(BCNegParser.SENSIBLE, 0);
};

TipoEmocionContext.prototype.EGOISTA = function() {
    return this.getToken(BCNegParser.EGOISTA, 0);
};

TipoEmocionContext.prototype.VENGANZA = function() {
    return this.getToken(BCNegParser.VENGANZA, 0);
};

TipoEmocionContext.prototype.BIEN = function() {
    return this.getToken(BCNegParser.BIEN, 0);
};

TipoEmocionContext.prototype.MAL = function() {
    return this.getToken(BCNegParser.MAL, 0);
};

TipoEmocionContext.prototype.IRRITABLE = function() {
    return this.getToken(BCNegParser.IRRITABLE, 0);
};

TipoEmocionContext.prototype.VIOLENCIA = function() {
    return this.getToken(BCNegParser.VIOLENCIA, 0);
};

TipoEmocionContext.prototype.DEPRESION = function() {
    return this.getToken(BCNegParser.DEPRESION, 0);
};

TipoEmocionContext.prototype.CULPA = function() {
    return this.getToken(BCNegParser.CULPA, 0);
};

TipoEmocionContext.prototype.AVARICIA = function() {
    return this.getToken(BCNegParser.AVARICIA, 0);
};

TipoEmocionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitTipoEmocion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.TipoEmocionContext = TipoEmocionContext;

BCNegParser.prototype.tipoEmocion = function() {

    var localctx = new TipoEmocionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, BCNegParser.RULE_tipoEmocion);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        _la = this._input.LA(1);
        if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (BCNegParser.ALEGRIA - 49)) | (1 << (BCNegParser.TRISTEZA - 49)) | (1 << (BCNegParser.ODIO - 49)) | (1 << (BCNegParser.IRA - 49)) | (1 << (BCNegParser.ENVIDIA - 49)) | (1 << (BCNegParser.ENFADADO - 49)) | (1 << (BCNegParser.ENTUSIASMO - 49)) | (1 << (BCNegParser.FUERTE - 49)) | (1 << (BCNegParser.NEUTRO - 49)) | (1 << (BCNegParser.PELIGROSO - 49)) | (1 << (BCNegParser.SENSIBLE - 49)) | (1 << (BCNegParser.EGOISTA - 49)) | (1 << (BCNegParser.VENGANZA - 49)) | (1 << (BCNegParser.BIEN - 49)) | (1 << (BCNegParser.MAL - 49)) | (1 << (BCNegParser.IRRITABLE - 49)) | (1 << (BCNegParser.VIOLENCIA - 49)) | (1 << (BCNegParser.DEPRESION - 49)) | (1 << (BCNegParser.CULPA - 49)) | (1 << (BCNegParser.AVARICIA - 49)))) !== 0))) {
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

function TipoTiempoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_tipoTiempo;
    return this;
}

TipoTiempoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TipoTiempoContext.prototype.constructor = TipoTiempoContext;

TipoTiempoContext.prototype.ESTRENO = function() {
    return this.getToken(BCNegParser.ESTRENO, 0);
};

TipoTiempoContext.prototype.ACTUAL = function() {
    return this.getToken(BCNegParser.ACTUAL, 0);
};

TipoTiempoContext.prototype.ultimoLanzamiento = function() {
    return this.getTypedRuleContext(UltimoLanzamientoContext,0);
};

TipoTiempoContext.prototype.ultimoEstreno = function() {
    return this.getTypedRuleContext(UltimoEstrenoContext,0);
};

TipoTiempoContext.prototype.deLasDecadas = function() {
    return this.getTypedRuleContext(DeLasDecadasContext,0);
};

TipoTiempoContext.prototype.esteAnno = function() {
    return this.getTypedRuleContext(EsteAnnoContext,0);
};

TipoTiempoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitTipoTiempo(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.TipoTiempoContext = TipoTiempoContext;

BCNegParser.prototype.tipoTiempo = function() {

    var localctx = new TipoTiempoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, BCNegParser.RULE_tipoTiempo);
    try {
        this.state = 297;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 291;
            this.match(BCNegParser.ESTRENO);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 292;
            this.match(BCNegParser.ACTUAL);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 293;
            this.ultimoLanzamiento();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 294;
            this.ultimoEstreno();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 295;
            this.deLasDecadas();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 296;
            this.esteAnno();
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

function UltimoEstrenoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_ultimoEstreno;
    return this;
}

UltimoEstrenoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UltimoEstrenoContext.prototype.constructor = UltimoEstrenoContext;

UltimoEstrenoContext.prototype.ULTIMO = function() {
    return this.getToken(BCNegParser.ULTIMO, 0);
};

UltimoEstrenoContext.prototype.ESTRENO = function() {
    return this.getToken(BCNegParser.ESTRENO, 0);
};

UltimoEstrenoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitUltimoEstreno(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.UltimoEstrenoContext = UltimoEstrenoContext;

BCNegParser.prototype.ultimoEstreno = function() {

    var localctx = new UltimoEstrenoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, BCNegParser.RULE_ultimoEstreno);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this.match(BCNegParser.ULTIMO);
        this.state = 300;
        this.match(BCNegParser.ESTRENO);
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

function UltimoLanzamientoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_ultimoLanzamiento;
    return this;
}

UltimoLanzamientoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UltimoLanzamientoContext.prototype.constructor = UltimoLanzamientoContext;

UltimoLanzamientoContext.prototype.ULTIMO = function() {
    return this.getToken(BCNegParser.ULTIMO, 0);
};

UltimoLanzamientoContext.prototype.LANZAMIENTO = function() {
    return this.getToken(BCNegParser.LANZAMIENTO, 0);
};

UltimoLanzamientoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitUltimoLanzamiento(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.UltimoLanzamientoContext = UltimoLanzamientoContext;

BCNegParser.prototype.ultimoLanzamiento = function() {

    var localctx = new UltimoLanzamientoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, BCNegParser.RULE_ultimoLanzamiento);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.match(BCNegParser.ULTIMO);
        this.state = 303;
        this.match(BCNegParser.LANZAMIENTO);
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

function DeLasDecadasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_deLasDecadas;
    return this;
}

DeLasDecadasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DeLasDecadasContext.prototype.constructor = DeLasDecadasContext;

DeLasDecadasContext.prototype.ARTIC = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.ARTIC);
    } else {
        return this.getToken(BCNegParser.ARTIC, i);
    }
};


DeLasDecadasContext.prototype.CINCUENTA = function() {
    return this.getToken(BCNegParser.CINCUENTA, 0);
};

DeLasDecadasContext.prototype.SESENTA = function() {
    return this.getToken(BCNegParser.SESENTA, 0);
};

DeLasDecadasContext.prototype.SETENTA = function() {
    return this.getToken(BCNegParser.SETENTA, 0);
};

DeLasDecadasContext.prototype.OCHENTA = function() {
    return this.getToken(BCNegParser.OCHENTA, 0);
};

DeLasDecadasContext.prototype.NOVENTA = function() {
    return this.getToken(BCNegParser.NOVENTA, 0);
};

DeLasDecadasContext.prototype.DE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.DE);
    } else {
        return this.getToken(BCNegParser.DE, i);
    }
};


DeLasDecadasContext.prototype.DECADA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.DECADA);
    } else {
        return this.getToken(BCNegParser.DECADA, i);
    }
};


DeLasDecadasContext.prototype.ANNO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.ANNO);
    } else {
        return this.getToken(BCNegParser.ANNO, i);
    }
};


DeLasDecadasContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitDeLasDecadas(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.DeLasDecadasContext = DeLasDecadasContext;

BCNegParser.prototype.deLasDecadas = function() {

    var localctx = new DeLasDecadasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, BCNegParser.RULE_deLasDecadas);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BCNegParser.DE) {
            this.state = 305;
            this.match(BCNegParser.DE);
            this.state = 310;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 311;
        this.match(BCNegParser.ARTIC);
        this.state = 315;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BCNegParser.DECADA || _la===BCNegParser.ANNO) {
            this.state = 312;
            _la = this._input.LA(1);
            if(!(_la===BCNegParser.DECADA || _la===BCNegParser.ANNO)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 317;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 321;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BCNegParser.DE) {
            this.state = 318;
            this.match(BCNegParser.DE);
            this.state = 323;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 327;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BCNegParser.ARTIC) {
            this.state = 324;
            this.match(BCNegParser.ARTIC);
            this.state = 329;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 330;
        _la = this._input.LA(1);
        if(!(((((_la - 73)) & ~0x1f) == 0 && ((1 << (_la - 73)) & ((1 << (BCNegParser.CINCUENTA - 73)) | (1 << (BCNegParser.SESENTA - 73)) | (1 << (BCNegParser.SETENTA - 73)) | (1 << (BCNegParser.OCHENTA - 73)) | (1 << (BCNegParser.NOVENTA - 73)))) !== 0))) {
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

function EsteAnnoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_esteAnno;
    return this;
}

EsteAnnoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EsteAnnoContext.prototype.constructor = EsteAnnoContext;

EsteAnnoContext.prototype.ESTE = function() {
    return this.getToken(BCNegParser.ESTE, 0);
};

EsteAnnoContext.prototype.ANNO = function() {
    return this.getToken(BCNegParser.ANNO, 0);
};

EsteAnnoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitEsteAnno(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.EsteAnnoContext = EsteAnnoContext;

BCNegParser.prototype.esteAnno = function() {

    var localctx = new EsteAnnoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, BCNegParser.RULE_esteAnno);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 332;
        this.match(BCNegParser.ESTE);
        this.state = 333;
        this.match(BCNegParser.ANNO);
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

function TipoPersonaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_tipoPersona;
    return this;
}

TipoPersonaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TipoPersonaContext.prototype.constructor = TipoPersonaContext;

TipoPersonaContext.prototype.VER = function() {
    return this.getToken(BCNegParser.VER, 0);
};

TipoPersonaContext.prototype.FAMILIA = function() {
    return this.getToken(BCNegParser.FAMILIA, 0);
};

TipoPersonaContext.prototype.AMIGOS = function() {
    return this.getToken(BCNegParser.AMIGOS, 0);
};

TipoPersonaContext.prototype.NOVIO = function() {
    return this.getToken(BCNegParser.NOVIO, 0);
};

TipoPersonaContext.prototype.MAYORES = function() {
    return this.getToken(BCNegParser.MAYORES, 0);
};

TipoPersonaContext.prototype.JOVENES = function() {
    return this.getToken(BCNegParser.JOVENES, 0);
};

TipoPersonaContext.prototype.PARA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.PARA);
    } else {
        return this.getToken(BCNegParser.PARA, i);
    }
};


TipoPersonaContext.prototype.EN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.EN);
    } else {
        return this.getToken(BCNegParser.EN, i);
    }
};


TipoPersonaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitTipoPersona(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.TipoPersonaContext = TipoPersonaContext;

BCNegParser.prototype.tipoPersona = function() {

    var localctx = new TipoPersonaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, BCNegParser.RULE_tipoPersona);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 338;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BCNegParser.PARA) {
            this.state = 335;
            this.match(BCNegParser.PARA);
            this.state = 340;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 341;
        this.match(BCNegParser.VER);
        this.state = 345;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===BCNegParser.EN) {
            this.state = 342;
            this.match(BCNegParser.EN);
            this.state = 347;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 348;
        _la = this._input.LA(1);
        if(!(((((_la - 109)) & ~0x1f) == 0 && ((1 << (_la - 109)) & ((1 << (BCNegParser.FAMILIA - 109)) | (1 << (BCNegParser.AMIGOS - 109)) | (1 << (BCNegParser.NOVIO - 109)) | (1 << (BCNegParser.MAYORES - 109)) | (1 << (BCNegParser.JOVENES - 109)))) !== 0))) {
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

function TermsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_terms;
    return this;
}

TermsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermsContext.prototype.constructor = TermsContext;

TermsContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

TermsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitTerms(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.TermsContext = TermsContext;

BCNegParser.prototype.terms = function() {

    var localctx = new TermsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, BCNegParser.RULE_terms);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 351; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 350;
        		this.term();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 353; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,35, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

function NumeroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_numero;
    return this;
}

NumeroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumeroContext.prototype.constructor = NumeroContext;

NumeroContext.prototype.DIGITO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(BCNegParser.DIGITO);
    } else {
        return this.getToken(BCNegParser.DIGITO, i);
    }
};


NumeroContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitNumero(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.NumeroContext = NumeroContext;

BCNegParser.prototype.numero = function() {

    var localctx = new NumeroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, BCNegParser.RULE_numero);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 356; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 355;
            this.match(BCNegParser.DIGITO);
            this.state = 358; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===BCNegParser.DIGITO);
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

function DigitoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_digito;
    return this;
}

DigitoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DigitoContext.prototype.constructor = DigitoContext;

DigitoContext.prototype.DIGITO = function() {
    return this.getToken(BCNegParser.DIGITO, 0);
};

DigitoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitDigito(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.DigitoContext = DigitoContext;

BCNegParser.prototype.digito = function() {

    var localctx = new DigitoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, BCNegParser.RULE_digito);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 360;
        this.match(BCNegParser.DIGITO);
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

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = BCNegParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.STRING = function() {
    return this.getToken(BCNegParser.STRING, 0);
};

TermContext.prototype.NUMERO = function() {
    return this.getToken(BCNegParser.NUMERO, 0);
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof BCNegVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




BCNegParser.TermContext = TermContext;

BCNegParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, BCNegParser.RULE_term);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 362;
        _la = this._input.LA(1);
        if(!(_la===BCNegParser.NUMERO || _la===BCNegParser.STRING)) {
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


exports.BCNegParser = BCNegParser;
