import { LRParser } from '@lezer/lr';
import { styleTags, tags } from '@lezer/highlight';

// This file was generated by lezer-generator. You probably shouldn't edit it.
const inf$1 = 165,
  nan$1 = 166,
  Bool$1 = 1,
  Ignoring$1 = 2,
  On$1 = 3,
  GroupLeft$1 = 4,
  GroupRight$1 = 5,
  Offset$1 = 6,
  Atan2$1 = 7,
  Avg$1 = 8,
  Bottomk$1 = 9,
  Count$1 = 10,
  CountValues$1 = 11,
  Group$1 = 12,
  Max$1 = 13,
  Min$1 = 14,
  OKCumSum$1 = 15,
  OKTop$1 = 16,
  OPCumSum$1 = 17,
  OPTop$1 = 18,
  Quantile$1 = 19,
  Stddev$1 = 20,
  Stdvar$1 = 21,
  Sum$1 = 22,
  Topk$1 = 23,
  By$1 = 24,
  Without$1 = 25,
  And$1 = 26,
  Or$1 = 27,
  Unless$1 = 28,
  Start$1 = 29,
  End$1 = 30;

// Copyright 2021 The Prometheus Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const keywordTokens = {
    inf: inf$1,
    nan: nan$1,
    bool: Bool$1,
    ignoring: Ignoring$1,
    on: On$1,
    group_left: GroupLeft$1,
    group_right: GroupRight$1,
    offset: Offset$1,
};

const specializeIdentifier = (value, stack) => {
    return keywordTokens[value.toLowerCase()] || -1;
};

const contextualKeywordTokens = {
    avg: Avg$1,
    atan2: Atan2$1,
    bottomk: Bottomk$1,
    count: Count$1,
    count_values: CountValues$1,
    group: Group$1,
    max: Max$1,
    min: Min$1,
    ok_cum_sum: OKCumSum$1,
    ok_top: OKTop$1,
    op_cum_sum: OPCumSum$1,
    op_top: OPTop$1,
    quantile: Quantile$1,
    stddev: Stddev$1,
    stdvar: Stdvar$1,
    sum: Sum$1,
    topk: Topk$1,
    by: By$1,
    without: Without$1,
    and: And$1,
    or: Or$1,
    unless: Unless$1,
    start: Start$1,
    end: End$1,
};

const extendIdentifier = (value, stack) => {
    return contextualKeywordTokens[value.toLowerCase()] || -1;
};

// Copyright 2022 The Prometheus Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const promQLHighLight = styleTags({
    LineComment: tags.comment,
    LabelName: tags.labelName,
    StringLiteral: tags.string,
    NumberLiteral: tags.number,
    Duration: tags.number,
    Identifier: tags.variableName,
    'Abs Absent AbsentOverTime Acos Acosh Asin Asinh Atan Atanh AvgOverTime Ceil Changes Clamp ClampMax ClampMin Cos Cosh CountOverTime DaysInMonth DayOfMonth DayOfWeek DayOfYear Deg Delta Deriv Exp Floor HistogramAvg HistogramCount HistogramFraction HistogramQuantile HistogramSum HoltWinters Hour Idelta Increase Irate LabelReplace LabelJoin LastOverTime Ln Log10 Log2 MaxOverTime MinOverTime Minute Month Pi PredictLinear PresentOverTime QuantileOverTime Rad Rate Resets Round Scalar Sgn Sin Sinh Sort SortDesc SortByLabel SortByLabelDesc Sqrt StddevOverTime StdvarOverTime OPDefined OKDefined OPReplaceNone OKReplaceNone OPZeroIfNone OKZeroIfNone SumOverTime Tan Tanh Time Timestamp Vector Year':
        tags.function(tags.variableName),
    'Avg Bottomk Count Count_values Group Max Min OPCumSum OpTop Quantile Stddev Stdvar Sum Topk': tags.operatorKeyword,
    'By Without Bool On Ignoring GroupLeft GroupRight Offset Start End': tags.modifier,
    'And Unless Or': tags.logicOperator,
    'Sub Add Mul Mod Div Atan2 Eql Neq Lte Lss Gte Gtr EqlRegex EqlSingle NeqRegex Pow At': tags.operator,
    UnaryOp: tags.arithmeticOperator,
    '( )': tags.paren,
    '[ ]': tags.squareBracket,
    '{ }': tags.brace,
    '⚠': tags.invalid,
});

// This file was generated by lezer-generator. You probably shouldn't edit it.
const spec_Identifier = {__proto__:null,absent_over_time:349, absent:351, abs:353, acos:355, acosh:357, asin:359, asinh:361, atan:363, atanh:365, avg_over_time:367, ceil:369, changes:371, clamp:373, clamp_max:375, clamp_min:377, cos:379, cosh:381, count_over_time:383, days_in_month:385, day_of_month:387, day_of_week:389, day_of_year:391, deg:393, delta:395, deriv:397, exp:399, floor:401, histogram_count:403, histogram_fraction:405, histogram_quantile:407, histogram_stddev:409, histogram_stdvar:411, histogram_sum:413, histogram_avg:415, holt_winters:417, hour:419, idelta:421, increase:423, irate:425, label_replace:427, label_join:429, last_over_time:431, ln:433, log10:435, log2:437, mad_over_time:439, max_over_time:441, min_over_time:443, minute:445, month:447, pi:449, predict_linear:451, present_over_time:453, quantile_over_time:455, rad:457, rate:459, resets:461, round:463, scalar:465, sgn:467, sin:469, sinh:471, sort:473, sort_desc:475, sort_by_label:477, sort_by_label_desc:479, sqrt:481, stddev_over_time:483, stdvar_over_time:485, op_defined:487, ok_defined:489, op_replace_none:491, ok_replace_none:493, op_zero_if_none:495, ok_zero_if_none:497, sum_over_time:499, tan:501, tanh:503, timestamp:505, time:507, vector:509, year:511};
const parser = LRParser.deserialize({
  version: 14,
  states: "9zOYQPOOO(ZQPOOOOQO'#DO'#DOO(`QPO'#C}Q(kQQOOOOQO'#Dg'#DgO(fQPO'#DfOOQO'#Fa'#FaO)xQPO'#FfOYQPO'#FcOYQPO'#FeO1SQSO'#FhO1_QQO'#FgOOQO'#Fg'#FgOOQO'#F{'#F{OOQO'#Dh'#DhOOQO'#Dj'#DjOOQO'#Dk'#DkOOQO'#Dl'#DlOOQO'#Dm'#DmOOQO'#Dn'#DnOOQO'#Do'#DoOOQO'#Dp'#DpOOQO'#Dq'#DqOOQO'#Dr'#DrOOQO'#Ds'#DsOOQO'#Dt'#DtOOQO'#Du'#DuOOQO'#Dv'#DvOOQO'#Dw'#DwOOQO'#Dx'#DxOOQO'#Dy'#DyOOQO'#Dz'#DzOOQO'#D{'#D{OOQO'#D|'#D|OOQO'#D}'#D}OOQO'#EO'#EOOOQO'#EP'#EPOOQO'#EQ'#EQOOQO'#ER'#EROOQO'#ES'#ESOOQO'#ET'#ETOOQO'#EU'#EUOOQO'#EV'#EVOOQO'#EW'#EWOOQO'#EX'#EXOOQO'#EY'#EYOOQO'#EZ'#EZOOQO'#E['#E[OOQO'#E]'#E]OOQO'#E^'#E^OOQO'#E_'#E_OOQO'#E`'#E`OOQO'#Ea'#EaOOQO'#Eb'#EbOOQO'#Ec'#EcOOQO'#Ed'#EdOOQO'#Ee'#EeOOQO'#Ef'#EfOOQO'#Eg'#EgOOQO'#Eh'#EhOOQO'#Ei'#EiOOQO'#Ej'#EjOOQO'#Ek'#EkOOQO'#El'#ElOOQO'#Em'#EmOOQO'#En'#EnOOQO'#Eo'#EoOOQO'#Ep'#EpOOQO'#Eq'#EqOOQO'#Er'#ErOOQO'#Es'#EsOOQO'#Et'#EtOOQO'#Eu'#EuOOQO'#Ev'#EvOOQO'#Ew'#EwOOQO'#Ex'#ExOOQO'#Ey'#EyOOQO'#Ez'#EzOOQO'#E{'#E{OOQO'#E|'#E|OOQO'#E}'#E}OOQO'#FO'#FOOOQO'#FP'#FPOOQO'#FQ'#FQOOQO'#FR'#FROOQO'#FS'#FSOOQO'#FT'#FTOOQO'#FU'#FUOOQO'#FV'#FVOOQO'#FW'#FWOOQO'#FX'#FXOOQO'#FY'#FYOOQO'#FZ'#FZOOQO'#F['#F[OOQO'#F]'#F]OOQO'#F^'#F^QOQPOOO2xQPO'#DPO2}QPO'#DUO(fQPO,59iO3UQQO,59iO4rQPO,59qO4rQPO,59qO4rQPO,59qO4rQPO,59qO4rQPO,59qO;|QQO,5;yO<RQQO,5;|O<ZQPO,5<ZOOQO,5:Q,5:QOOQO,5;{,5;{O<rQQO,5;}O<yQQO,5<POOQO'#DS'#DSO>aQPO'#FiO>oQPO,5<SOOQO,5<S,5<SO>{QPO,5<SOOQO,5<R,5<RO?TQSO'#DQOOQO,59k,59kOOQO,59p,59pO?`QQO,59pOOQO1G/T1G/TOOQO'#DX'#DXO2xQPO'#DYOOQO'#GP'#GPO?jQPO'#GPOYQPO1G/]OYQPO1G/]OYQPO1G/]OYQPO1G/]OYQPO1G/]OFqQSO1G1eOOQO1G1h1G1hOFyQQO1G1hOGOQPO'#FaOOQO'#Fq'#FqOOQO1G1u1G1uOGZQPO1G1uOOQO1G1i1G1iOOQO'#Fj'#FjOG`QPO,5<TOGeQPO,5<YOGjQSO1G1nOGuQPO1G1nOOQO1G1n1G1nOOQO,59l,59lOG}QPO,59lOYQPO'#FtOHVQPO1G/[OOQO1G/[1G/[OH_QPO,59tOOQO,5<k,5<kO!!pQQO7+$wO!#QQQO7+$wO!$fQQO7+$wO!$|QQO7+$wO!&eQQO7+$wOOQO7+'P7+'PO!'OQQO7+'UOOQO7+'S7+'SO!'WQPO7+'aOOQO1G1o1G1oOOQO1G1t1G1tO!']QPO,5<aOOQO,5<a,5<aOOQO7+'Y7+'YO!'qQSO7+'YOOQO-E9s-E9sO!'|QSO1G/WO!(XQPO1G/WOOQO1G/W1G/WO!(aQQO,5<`OOQO-E9r-E9rOOQO7+$v7+$vO!(kQPO1G/`OOQO<<Jp<<JpO!/lQPO<<JpOOQO<<J{<<J{OOQO<<Jt<<JtP!/qQSO'#FuOOQO,5<_,5<_OOQO7+$r7+$rO!/yQSO7+$rOOQO-E9q-E9qOOQO7+$z7+$zOOQOAN@[AN@[OOQO<<H^<<H^P!0UQSO'#Fs",
  stateData: "!0^~O$nOSoOS~OWQOXQOYQOZQO[QO]QO^QO_QO`QOaQObQOcQOdQOeQOfQOgQOw^O!][O$kVO$lVO$pXO$t_O$u`O$vaO$wbO$xcO$ydO$zeO${fO$|gO$}hO%OiO%PjO%QkO%RlO%SmO%TnO%UoO%VpO%WqO%XrO%YsO%ZtO%[uO%]vO%^wO%_xO%`yO%azO%b{O%c|O%d}O%e!OO%f!PO%g!QO%h!RO%i!SO%j!TO%k!UO%l!VO%m!WO%n!XO%o!YO%p!ZO%q![O%r!]O%s!^O%t!_O%u!`O%v!aO%w!bO%x!cO%y!dO%z!eO%{!fO%|!gO%}!hO&O!iO&P!jO&Q!kO&R!lO&S!mO&T!nO&U!oO&V!pO&W!qO&X!rO&Y!sO&Z!tO&[!uO&]!vO&^!wO&_!xO&`!yO&a!zO&b!{O&c!|O&d!}O&e#OO&f#PO&g#QO&h#RO&i#SO&lWO&mWO&nVO&pZO~O!]#TO~Oh#UOi#UO$p#VO~OU#`OV#YOj#]Ok#^Ol#]Oz#YO}#YO!O#YO!P#YO!Q#ZO!R#ZO!S#[O!T#[O!U#[O!V#[O!W#[O!X#[O$d#aO&j#_O~O$k#cO$l#cO&n#cOW$YXX$YXY$YXZ$YX[$YX]$YX^$YX_$YX`$YXa$YXb$YXc$YXd$YXe$YXf$YXg$YXw$YX!]$YX$k$YX$l$YX$p$YX$t$YX$u$YX$v$YX$w$YX$x$YX$y$YX$z$YX${$YX$|$YX$}$YX%O$YX%P$YX%Q$YX%R$YX%S$YX%T$YX%U$YX%V$YX%W$YX%X$YX%Y$YX%Z$YX%[$YX%]$YX%^$YX%_$YX%`$YX%a$YX%b$YX%c$YX%d$YX%e$YX%f$YX%g$YX%h$YX%i$YX%j$YX%k$YX%l$YX%m$YX%n$YX%o$YX%p$YX%q$YX%r$YX%s$YX%t$YX%u$YX%v$YX%w$YX%x$YX%y$YX%z$YX%{$YX%|$YX%}$YX&O$YX&P$YX&Q$YX&R$YX&S$YX&T$YX&U$YX&V$YX&W$YX&X$YX&Y$YX&Z$YX&[$YX&]$YX&^$YX&_$YX&`$YX&a$YX&b$YX&c$YX&d$YX&e$YX&f$YX&g$YX&h$YX&i$YX&l$YX&m$YX&n$YX&p$YX~Ou#gOw#fO&q#iO~O&pZOU$ZXV$ZXj$ZXk$ZXl$ZXz$ZX}$ZX!O$ZX!P$ZX!Q$ZX!R$ZX!S$ZX!T$ZX!U$ZX!V$ZX!W$ZX!X$ZX$d$ZX$j$ZX&j$ZX$r$ZX$q$ZX~O$p#lO~O$r#nO~PYOh#UOi#UOUqaVqajqakqalqazqa}qa!Oqa!Pqa!Qqa!Rqa!Sqa!Tqa!Uqa!Vqa!Wqa!Xqa$dqa$jqa&jqa$rqa$qqa~OP#qOQ#rOR#rOW$sPX$sPY$sPZ$sP[$sP]$sP^$sP_$sP`$sPa$sPb$sPc$sPd$sPe$sPf$sPg$sPw$sP!]$sP$k$sP$l$sP$p$sP$t$sP$u$sP$v$sP$w$sP$x$sP$y$sP$z$sP${$sP$|$sP$}$sP%O$sP%P$sP%Q$sP%R$sP%S$sP%T$sP%U$sP%V$sP%W$sP%X$sP%Y$sP%Z$sP%[$sP%]$sP%^$sP%_$sP%`$sP%a$sP%b$sP%c$sP%d$sP%e$sP%f$sP%g$sP%h$sP%i$sP%j$sP%k$sP%l$sP%m$sP%n$sP%o$sP%p$sP%q$sP%r$sP%s$sP%t$sP%u$sP%v$sP%w$sP%x$sP%y$sP%z$sP%{$sP%|$sP%}$sP&O$sP&P$sP&Q$sP&R$sP&S$sP&T$sP&U$sP&V$sP&W$sP&X$sP&Y$sP&Z$sP&[$sP&]$sP&^$sP&_$sP&`$sP&a$sP&b$sP&c$sP&d$sP&e$sP&f$sP&g$sP&h$sP&i$sP&l$sP&m$sP&n$sP&p$sP~O$S#zO~O!R#|O$S#{O~Om$OOn$OO$kVO$lVO&l#}O&m#}O&nVO~O$r$RO~P(kOz#YOU$XaV$Xaj$Xak$Xal$Xa}$Xa!O$Xa!P$Xa!Q$Xa!R$Xa!S$Xa!T$Xa!U$Xa!V$Xa!W$Xa!X$Xa$d$Xa$j$Xa&j$Xa$r$Xa$q$Xa~O!X$SO$_$SO$`$SO$a$SO~O!X$SO$_$SO$`$SO$a$SO$q$VO&q$XO~Ou$ZOw#fO$r$YO~O$q$[O$r$^O~P(kOQ#rOR#rOW$sXX$sXY$sXZ$sX[$sX]$sX^$sX_$sX`$sXa$sXb$sXc$sXd$sXe$sXf$sXg$sXw$sX!]$sX$k$sX$l$sX$p$sX$t$sX$u$sX$v$sX$w$sX$x$sX$y$sX$z$sX${$sX$|$sX$}$sX%O$sX%P$sX%Q$sX%R$sX%S$sX%T$sX%U$sX%V$sX%W$sX%X$sX%Y$sX%Z$sX%[$sX%]$sX%^$sX%_$sX%`$sX%a$sX%b$sX%c$sX%d$sX%e$sX%f$sX%g$sX%h$sX%i$sX%j$sX%k$sX%l$sX%m$sX%n$sX%o$sX%p$sX%q$sX%r$sX%s$sX%t$sX%u$sX%v$sX%w$sX%x$sX%y$sX%z$sX%{$sX%|$sX%}$sX&O$sX&P$sX&Q$sX&R$sX&S$sX&T$sX&U$sX&V$sX&W$sX&X$sX&Y$sX&Z$sX&[$sX&]$sX&^$sX&_$sX&`$sX&a$sX&b$sX&c$sX&d$sX&e$sX&f$sX&g$sX&h$sX&i$sX&l$sX&m$sX&n$sX&p$sX~O&k$fO&o$gO~O$S$hO~O$k#cO$l#cO&n#cO~O$p$iO~Ow$jO~Ow$kO~Ou#gOw#fO&q$nO~O$q$oO&q$nO~O$q$qO$r$sO~O$q$[O$r$vO~OS$wOT$wOW|aX|aY|aZ|a[|a]|a^|a_|a`|aa|ab|ac|ad|ae|af|ag|aw|a!]|a$k|a$l|a$p|a$t|a$u|a$v|a$w|a$x|a$y|a$z|a${|a$||a$}|a%O|a%P|a%Q|a%R|a%S|a%T|a%U|a%V|a%W|a%X|a%Y|a%Z|a%[|a%]|a%^|a%_|a%`|a%a|a%b|a%c|a%d|a%e|a%f|a%g|a%h|a%i|a%j|a%k|a%l|a%m|a%n|a%o|a%p|a%q|a%r|a%s|a%t|a%u|a%v|a%w|a%x|a%y|a%z|a%{|a%||a%}|a&O|a&P|a&Q|a&R|a&S|a&T|a&U|a&V|a&W|a&X|a&Y|a&Z|a&[|a&]|a&^|a&_|a&`|a&a|a&b|a&c|a&d|a&e|a&f|a&g|a&h|a&i|a&l|a&m|a&n|a&p|a~Oz#YOUyqjyqkyqlyq!Qyq!Ryq!Syq!Tyq!Uyq!Vyq!Wyq!Xyq$dyq$jyq&jyq$ryq$qyq~OVyq}yq!Oyq!Pyq~P! fOV#YO}#YO!O#YO!P#YO~P! fOV#YOz#YO}#YO!O#YO!P#YO!Q#ZO!R#ZOUyqjyqkyqlyq$dyq$jyq&jyq$ryq$qyq~O!Syq!Tyq!Uyq!Vyq!Wyq!Xyq~P!#bO!S#[O!T#[O!U#[O!V#[O!W#[O!X#[O~P!#bOV#YOj#]Ol#]Oz#YO}#YO!O#YO!P#YO!Q#ZO!R#ZO!S#[O!T#[O!U#[O!V#[O!W#[O!X#[O~OUyqkyq$dyq$jyq&jyq$ryq$qyq~P!%dO$S$yO&k$xO~O$r$zO~O!X$SO$_$SO$`$SO$a$SO$q$ia&q$ia~Ou#gOw#fO&q${O~Ou$}Ow#fO$r%OO~O$q%PO$r%OO~O$q$ha$r$ha~P(kO$p#lOW|iX|iY|iZ|i[|i]|i^|i_|i`|ia|ib|ic|id|ie|if|ig|iw|i!]|i$k|i$l|i$t|i$u|i$v|i$w|i$x|i$y|i$z|i${|i$||i$}|i%O|i%P|i%Q|i%R|i%S|i%T|i%U|i%V|i%W|i%X|i%Y|i%Z|i%[|i%]|i%^|i%_|i%`|i%a|i%b|i%c|i%d|i%e|i%f|i%g|i%h|i%i|i%j|i%k|i%l|i%m|i%n|i%o|i%p|i%q|i%r|i%s|i%t|i%u|i%v|i%w|i%x|i%y|i%z|i%{|i%||i%}|i&O|i&P|i&Q|i&R|i&S|i&T|i&U|i&V|i&W|i&X|i&Y|i&Z|i&[|i&]|i&^|i&_|i&`|i&a|i&b|i&c|i&d|i&e|i&f|i&g|i&h|i&i|i&l|i&m|i&n|i&p|i~O&k%SO~Ou#gOw#fO~Ou$}Ow#fO$r%TO~Ou$}Ow#fO~O",
  goto: ")t$tPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP$u%R%_%eP%nP&O$uP&X&`PPPPPPPPPPP$u&j&vP&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v&v$uP'S$u$u$u$u'c$u'o(O(WPPP(O$uP(_P(b(h(nPPPPP(uPPP)ee^OXY#V#u#v#w#x#y$[eROXY#V#u#v#w#x#y$[Q#WRR#p#XQ#m#UQ$_#rR%R$wQ#hZQ$Z#lU$l$V$o$|V$}$q%P%UQ#XRQ#bUR#p#WZ#t#Y#Z#[#]#^Y#s#Y#Z#[#]#^R$`#teUOXY#V#u#v#w#x#y$[eTOXY#V#u#v#w#x#y$[d^OXY#V#u#v#w#x#y$[R$P#aeYOXY#V#u#v#w#x#y$[d]OXY#V#u#v#w#x#y$[R#k[Q#jZV$m$V$o$|Q$T#gT$U#h$lR$Q#aQ$r$ZR%Q$rQ$]#oR$u$]S$W#h#jR$p$WQSOQ#dXQ#eYQ#o#VQ$a#uQ$b#vQ$c#wQ$d#xQ$e#yR$t$[Q#u#YQ#v#ZQ#w#[Q#x#]R#y#^",
  nodeNames: "⚠ Bool Ignoring On GroupLeft GroupRight Offset Atan2 Avg Bottomk Count CountValues Group Max Min OKCumSum OKTop OPCumSum OPTop Quantile Stddev Stdvar Sum Topk By Without And Or Unless Start End LineComment PromQL AggregateExpr AggregateOp AggregateModifier GroupingLabels LabelName QuotedLabelName StringLiteral FunctionCallBody BinaryExpr Pow BoolModifier MatchingModifierClause Mul Div Mod Add Sub Eql Gte Gtr Lte Lss Neq FunctionCall FunctionIdentifier AbsentOverTime Identifier Absent Abs Acos Acosh Asin Asinh Atan Atanh AvgOverTime Ceil Changes Clamp ClampMax ClampMin Cos Cosh CountOverTime DaysInMonth DayOfMonth DayOfWeek DayOfYear Deg Delta Deriv Exp Floor HistogramCount HistogramFraction HistogramQuantile HistogramStdDev HistogramStdVar HistogramSum HistogramAvg HoltWinters Hour Idelta Increase Irate LabelReplace LabelJoin LastOverTime Ln Log10 Log2 MadOverTime MaxOverTime MinOverTime Minute Month Pi PredictLinear PresentOverTime QuantileOverTime Rad Rate Resets Round Scalar Sgn Sin Sinh Sort SortDesc SortByLabel SortByLabelDesc Sqrt StddevOverTime StdvarOverTime OPDefined OKDefined OPReplaceNone OKReplaceNone OPZeroIfNone OKZeroIfNone SumOverTime Tan Tanh Timestamp Time Vector Year MatrixSelector Duration NumberLiteral OffsetExpr ParenExpr SubqueryExpr UnaryExpr UnaryOp VectorSelector LabelMatchers UnquotedLabelMatcher MatchOp EqlSingle EqlRegex NeqRegex QuotedLabelMatcher StepInvariantExpr At AtModifierPreprocessors MetricName",
  maxTerm: 263,
  nodeProps: [
    ["group", -12,33,39,41,56,141,143,144,145,146,147,149,157,"Expr"]
  ],
  propSources: [promQLHighLight],
  skippedNodes: [0,31],
  repeatNodeCount: 3,
  tokenData: "3s~RwX^#lpq#lqr$ars$tst&luv'Twx'Yxy({yz)Qz{)V{|)[|})c}!O)h!O!P)o!P!Q*o!Q!R*t!R![+l![!]0W!^!_1S!_!`1a!`!a1v!b!c2T!c!}2Y!}#O2p#P#Q2u#Q#R2z#R#S2Y#S#T3P#T#o2Y#o#p3i#q#r3n#y#z#l$f$g#l#BY#BZ#l$IS$I_#l$I|$JO#l$JT$JU#l$KV$KW#l&FU&FV#l~#qY$n~X^#lpq#l#y#z#l$f$g#l#BY#BZ#l$IS$I_#l$I|$JO#l$JT$JU#l$KV$KW#l&FU&FV#l~$dQ!_!`$j#r#s$o~$oO!X~~$tO$a~~$yWw~OY$tZr$trs%cs#O$t#O#P%h#P;'S$t;'S;=`&f<%lO$t~%hOw~~%kRO;'S$t;'S;=`%t;=`O$t~%yXw~OY$tZr$trs%cs#O$t#O#P%h#P;'S$t;'S;=`&f;=`<%l$t<%lO$t~&iP;=`<%l$t~&qSo~OY&lZ;'S&l;'S;=`&}<%lO&l~'QP;=`<%l&l~'YO!P~~'_Ww~OY'YZw'Ywx%cx#O'Y#O#P'w#P;'S'Y;'S;=`(u<%lO'Y~'zRO;'S'Y;'S;=`(T;=`O'Y~(YXw~OY'YZw'Ywx%cx#O'Y#O#P'w#P;'S'Y;'S;=`(u;=`<%l'Y<%lO'Y~(xP;=`<%l'Y~)QO$p~~)VO$r~~)[O}~R)cO&mP!QQ~)hO$q~R)oO&lP!RQP)rP!Q![)uP)zR&nP!Q![)u!g!h*T#X#Y*TP*WR{|*a}!O*a!Q![*gP*dP!Q![*gP*lP&nP!Q![*g~*tO!O~R*yZ&nP!O!P)u!Q![+l!g!h*T#W#X,a#X#Y*T#[#],x#a#b-^#g#h.Q#k#l.c#l#m/l#m#n.}R+qY&nP!O!P)u!Q![+l!g!h*T#W#X,a#X#Y*T#[#],x#a#b-^#g#h.Q#k#l.c#m#n.}Q,fP$SQ!Q![,iQ,lS!Q![,i#[#],x#a#b-^#g#h.QQ,}P$SQ!Q![-QQ-TR!Q![-Q#a#b-^#g#h.QQ-cQ$SQ!Q![-i#g#h-{Q-lR!Q![-i#a#b-u#g#h.QQ-xP#g#h-{Q.QO$SQQ.VP$SQ!Q![.YQ.]Q!Q![.Y#a#b-uQ.hP$SQ!Q![.kQ.nT!Q![.k#W#X,a#[#],x#a#b-^#g#h.QQ/SP$SQ!Q![/VQ/YU!Q![/V#W#X,a#[#],x#a#b-^#g#h.Q#k#l.cP/oR!Q![/x!c!i/x#T#Z/xP/}R&nP!Q![/x!c!i/x#T#Z/xV0_T&oS!]R!Q![0n![!]0n!c!}0n#R#S0n#T#o0nR0sT!]R!Q![0n![!]0n!c!}0n#R#S0n#T#o0n~1XP!W~!_!`1[~1aO!V~~1fQ$_P!_!`1l#r#s1qQ1qO!SQ~1vO$`~~1{P!U~!_!`2O~2TO!T~~2YO$d~V2aT!]RuS!Q![2Y![!]0n!c!}2Y#R#S2Y#T#o2Y~2uO&j~~2zO&k~~3POz~~3STO#S3P#S#T%c#T;'S3P;'S;=`3c<%lO3P~3fP;=`<%l3P~3nO&p~~3sO&q~",
  tokenizers: [0, 1, 2],
  topRules: {"PromQL":[0,32],"MetricName":[1,160]},
  specialized: [{term: 59, get: (value, stack) => (specializeIdentifier(value) << 1), external: specializeIdentifier},{term: 59, get: (value, stack) => (extendIdentifier(value) << 1) | 1, external: extendIdentifier, extend: true},{term: 59, get: (value) => spec_Identifier[value] || -1}],
  tokenPrec: 0
});
// This file was generated by lezer-generator. You probably shouldn't edit it.
const inf = 165,
  nan = 166,
  Bool = 1,
  Ignoring = 2,
  On = 3,
  GroupLeft = 4,
  GroupRight = 5,
  Offset = 6,
  Atan2 = 7,
  Avg = 8,
  Bottomk = 9,
  Count = 10,
  CountValues = 11,
  Group = 12,
  Max = 13,
  Min = 14,
  OKCumSum = 15,
  OKTop = 16,
  OPCumSum = 17,
  OPTop = 18,
  Quantile = 19,
  Stddev = 20,
  Stdvar = 21,
  Sum = 22,
  Topk = 23,
  By = 24,
  Without = 25,
  And = 26,
  Or = 27,
  Unless = 28,
  Start = 29,
  End = 30,
  LineComment = 31,
  PromQL = 32,
  AggregateExpr = 33,
  AggregateOp = 34,
  AggregateModifier = 35,
  GroupingLabels = 36,
  LabelName = 37,
  QuotedLabelName = 38,
  StringLiteral = 39,
  FunctionCallBody = 40,
  BinaryExpr = 41,
  Pow = 42,
  BoolModifier = 43,
  MatchingModifierClause = 44,
  Mul = 45,
  Div = 46,
  Mod = 47,
  Add = 48,
  Sub = 49,
  Eql = 50,
  Gte = 51,
  Gtr = 52,
  Lte = 53,
  Lss = 54,
  Neq = 55,
  FunctionCall = 56,
  FunctionIdentifier = 57,
  AbsentOverTime = 58,
  Identifier = 59,
  Absent = 60,
  Abs = 61,
  Acos = 62,
  Acosh = 63,
  Asin = 64,
  Asinh = 65,
  Atan = 66,
  Atanh = 67,
  AvgOverTime = 68,
  Ceil = 69,
  Changes = 70,
  Clamp = 71,
  ClampMax = 72,
  ClampMin = 73,
  Cos = 74,
  Cosh = 75,
  CountOverTime = 76,
  DaysInMonth = 77,
  DayOfMonth = 78,
  DayOfWeek = 79,
  DayOfYear = 80,
  Deg = 81,
  Delta = 82,
  Deriv = 83,
  Exp = 84,
  Floor = 85,
  HistogramCount = 86,
  HistogramFraction = 87,
  HistogramQuantile = 88,
  HistogramStdDev = 89,
  HistogramStdVar = 90,
  HistogramSum = 91,
  HistogramAvg = 92,
  HoltWinters = 93,
  Hour = 94,
  Idelta = 95,
  Increase = 96,
  Irate = 97,
  LabelReplace = 98,
  LabelJoin = 99,
  LastOverTime = 100,
  Ln = 101,
  Log10 = 102,
  Log2 = 103,
  MadOverTime = 104,
  MaxOverTime = 105,
  MinOverTime = 106,
  Minute = 107,
  Month = 108,
  Pi = 109,
  PredictLinear = 110,
  PresentOverTime = 111,
  QuantileOverTime = 112,
  Rad = 113,
  Rate = 114,
  Resets = 115,
  Round = 116,
  Scalar = 117,
  Sgn = 118,
  Sin = 119,
  Sinh = 120,
  Sort = 121,
  SortDesc = 122,
  SortByLabel = 123,
  SortByLabelDesc = 124,
  Sqrt = 125,
  StddevOverTime = 126,
  StdvarOverTime = 127,
  OPDefined = 128,
  OKDefined = 129,
  OPReplaceNone = 130,
  OKReplaceNone = 131,
  OPZeroIfNone = 132,
  OKZeroIfNone = 133,
  SumOverTime = 134,
  Tan = 135,
  Tanh = 136,
  Timestamp = 137,
  Time = 138,
  Vector = 139,
  Year = 140,
  MatrixSelector = 141,
  Duration = 142,
  NumberLiteral = 143,
  OffsetExpr = 144,
  ParenExpr = 145,
  SubqueryExpr = 146,
  UnaryExpr = 147,
  UnaryOp = 148,
  VectorSelector = 149,
  LabelMatchers = 150,
  UnquotedLabelMatcher = 151,
  MatchOp = 152,
  EqlSingle = 153,
  EqlRegex = 154,
  NeqRegex = 155,
  QuotedLabelMatcher = 156,
  StepInvariantExpr = 157,
  At = 158,
  AtModifierPreprocessors = 159,
  MetricName = 160;

export { Abs, Absent, AbsentOverTime, Acos, Acosh, Add, AggregateExpr, AggregateModifier, AggregateOp, And, Asin, Asinh, At, AtModifierPreprocessors, Atan, Atan2, Atanh, Avg, AvgOverTime, BinaryExpr, Bool, BoolModifier, Bottomk, By, Ceil, Changes, Clamp, ClampMax, ClampMin, Cos, Cosh, Count, CountOverTime, CountValues, DayOfMonth, DayOfWeek, DayOfYear, DaysInMonth, Deg, Delta, Deriv, Div, Duration, End, Eql, EqlRegex, EqlSingle, Exp, Floor, FunctionCall, FunctionCallBody, FunctionIdentifier, Group, GroupLeft, GroupRight, GroupingLabels, Gte, Gtr, HistogramAvg, HistogramCount, HistogramFraction, HistogramQuantile, HistogramStdDev, HistogramStdVar, HistogramSum, HoltWinters, Hour, Idelta, Identifier, Ignoring, Increase, Irate, LabelJoin, LabelMatchers, LabelName, LabelReplace, LastOverTime, LineComment, Ln, Log10, Log2, Lss, Lte, MadOverTime, MatchOp, MatchingModifierClause, MatrixSelector, Max, MaxOverTime, MetricName, Min, MinOverTime, Minute, Mod, Month, Mul, Neq, NeqRegex, NumberLiteral, OKCumSum, OKDefined, OKReplaceNone, OKTop, OKZeroIfNone, OPCumSum, OPDefined, OPReplaceNone, OPTop, OPZeroIfNone, Offset, OffsetExpr, On, Or, ParenExpr, Pi, Pow, PredictLinear, PresentOverTime, PromQL, Quantile, QuantileOverTime, QuotedLabelMatcher, QuotedLabelName, Rad, Rate, Resets, Round, Scalar, Sgn, Sin, Sinh, Sort, SortByLabel, SortByLabelDesc, SortDesc, Sqrt, Start, Stddev, StddevOverTime, Stdvar, StdvarOverTime, StepInvariantExpr, StringLiteral, Sub, SubqueryExpr, Sum, SumOverTime, Tan, Tanh, Time, Timestamp, Topk, UnaryExpr, UnaryOp, Unless, UnquotedLabelMatcher, Vector, VectorSelector, Without, Year, inf, nan, parser };
