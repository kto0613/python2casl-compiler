program	SPROGRAM	17	1
fibo	SIDENTIFIER	43	1
(	SLPAREN	33	1
input	SIDENTIFIER	43	1
,	SCOMMA	41	1
output	SIDENTIFIER	43	1
)	SRPAREN	34	1
;	SSEMICOLON	37	1
var	SVAR	21	2
NN	SIDENTIFIER	43	2
:	SCOLON	38	2
integer	SINTEGER	11	2
;	SSEMICOLON	37	2
procedure	SPROCEDURE	16	4
nacci	SIDENTIFIER	43	4
(	SLPAREN	33	4
fn1	SIDENTIFIER	43	4
,	SCOMMA	41	4
fn2	SIDENTIFIER	43	4
,	SCOMMA	41	4
n	SIDENTIFIER	43	4
:	SCOLON	38	4
integer	SINTEGER	11	4
)	SRPAREN	34	4
;	SSEMICOLON	37	4
var	SVAR	21	5
fn	SIDENTIFIER	43	5
:	SCOLON	38	5
integer	SINTEGER	11	5
;	SSEMICOLON	37	5
begin	SBEGIN	2	6
fn	SIDENTIFIER	43	7
:=	SASSIGN	40	7
fn1	SIDENTIFIER	43	7
+	SPLUS	30	7
fn2	SIDENTIFIER	43	7
;	SSEMICOLON	37	7
writeln	SWRITELN	23	8
(	SLPAREN	33	8
'F_'	SSTRING	45	8
,	SCOMMA	41	8
n	SIDENTIFIER	43	8
,	SCOMMA	41	8
' = '	SSTRING	45	8
,	SCOMMA	41	8
fn	SIDENTIFIER	43	8
)	SRPAREN	34	8
;	SSEMICOLON	37	8
if	SIF	10	9
n	SIDENTIFIER	43	9
<	SLESS	26	9
NN	SIDENTIFIER	43	9
then	STHEN	19	9
begin	SBEGIN	2	10
nacci	SIDENTIFIER	43	11
(	SLPAREN	33	11
fn	SIDENTIFIER	43	11
,	SCOMMA	41	11
fn1	SIDENTIFIER	43	11
,	SCOMMA	41	11
n	SIDENTIFIER	43	11
+	SPLUS	30	11
1	SCONSTANT	44	11
)	SRPAREN	34	11
end	SEND	8	12
end	SEND	8	13
;	SSEMICOLON	37	13
begin	SBEGIN	2	15
NN	SIDENTIFIER	43	16
:=	SASSIGN	40	16
23	SCONSTANT	44	16
;	SSEMICOLON	37	16
writeln	SWRITELN	23	17
(	SLPAREN	33	17
'Fibonacci Numbers'	SSTRING	45	17
)	SRPAREN	34	17
;	SSEMICOLON	37	17
writeln	SWRITELN	23	18
(	SLPAREN	33	18
'F_1 = 1'	SSTRING	45	18
)	SRPAREN	34	18
;	SSEMICOLON	37	18
writeln	SWRITELN	23	19
(	SLPAREN	33	19
'F_2 = 1'	SSTRING	45	19
)	SRPAREN	34	19
;	SSEMICOLON	37	19
nacci	SIDENTIFIER	43	20
(	SLPAREN	33	20
1	SCONSTANT	44	20
,	SCOMMA	41	20
1	SCONSTANT	44	20
,	SCOMMA	41	20
3	SCONSTANT	44	20
)	SRPAREN	34	20
end	SEND	8	21
.	SDOT	42	21
