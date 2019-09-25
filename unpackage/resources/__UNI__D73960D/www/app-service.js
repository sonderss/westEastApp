var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[0])
Z([3,'orderState uni-flex'])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'paymentState']],[1,0]])
Z(z[5])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'paymentState']],[1,1]])
Z([[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'paymentState']],[1,3]])
Z([[2,'!='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'paymentState']],[1,0]])
Z([[2,'||'],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'paymentState']],[1,1]],[[2,'=='],[[6],[[6],[[7],[3,'item']],[3,'$orig']],[3,'paymentState']],[1,2]]])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-popup__wrapper']],[[7],[3,'type']]],[[7],[3,'ani']]],[[2,'?:'],[[7],[3,'animation']],[1,'ani'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'custom']]],[1,'uni-custom'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,true]]]]]]]]]]])
Z(z[1])
Z([[4],[[5],[[5],[1,'uni-popup__wrapper-box']],[[2,'?:'],[[7],[3,'radius']],[1,'noradius'],[1,'radius']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'list uni-flex data-v-22bee3f4'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'fileList']])
Z(z[1])
Z([[7],[3,'item']])
Z([[2,'<'],[[6],[[7],[3,'fileList']],[3,'length']],[[7],[3,'limit']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'address']])
Z([3,'__i0__'])
Z([3,'item'])
Z(z[0])
Z([3,'address_id'])
Z([[6],[[7],[3,'item']],[3,'default']])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'newlyBox'])
Z([[7],[3,'deleteAdd']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'mpvueCityPicker'])
Z([[6],[[7],[3,'addressInfo']],[3,'address_code']])
Z([[7],[3,'themeColor']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'login-form data-v-6bf52a88'])
Z([[7],[3,'isRegister']])
Z([[7],[3,'translator']])
Z([[2,'!'],[[7],[3,'translator']]])
Z([[2,'!'],[[7],[3,'isRegister']]])
Z(z[1])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body data-v-7faee2e3'])
Z([[2,'>'],[[6],[[6],[[7],[3,'goods']],[3,'like']],[3,'length']],[1,0]])
Z([3,'__l'])
Z([3,'data-v-7faee2e3'])
Z([[6],[[7],[3,'goods']],[3,'like']])
Z([3,'1'])
Z([[2,'>'],[[6],[[7],[3,'shop_goods_list']],[3,'length']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'content'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'hideEmoji']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'index'])
Z([3,'row'])
Z([[7],[3,'msgList']])
Z(z[3])
Z(z[4])
Z([[2,'+'],[1,'msg'],[[6],[[7],[3,'row']],[3,'id']]])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'uid']],[[7],[3,'myuid']]])
Z([3,'left'])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'text']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'voice']])
Z([[2,'=='],[[6],[[7],[3,'row']],[3,'type']],[1,'img']])
Z([[2,'!='],[[6],[[7],[3,'row']],[3,'uid']],[[7],[3,'myuid']]])
Z([3,'right'])
Z(z[11])
Z(z[12])
Z(z[13])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'commentLists']])
Z([3,'commentBox'])
Z([[6],[[7],[3,'commentList']],[3,'category']])
Z([[6],[[7],[3,'commentList']],[3,'list']])
Z([3,'index'])
Z([3,'item'])
Z(z[3])
Z(z[4])
Z([3,'__e'])
Z([3,'commentList uni-flex uni-column'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'commDetail']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'saitu']])
Z(z[4])
Z([3,'i'])
Z(z[11])
Z(z[4])
Z([[2,'<'],[[7],[3,'index']],[1,3]])
Z([[7],[3,'is_loadingType']])
Z([3,'__l'])
Z([[7],[3,'contentText']])
Z([[7],[3,'loadingType']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'detail']])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-581ce2bc'])
Z([3,'confirmation-order data-v-581ce2bc'])
Z([3,'i'])
Z([3,'item'])
Z([[7],[3,'userCart']])
Z(z[2])
Z([[6],[[7],[3,'item']],[3,'haschecked']])
Z([3,'j'])
Z([3,'item2'])
Z([[6],[[7],[3,'item']],[3,'goods_list']])
Z(z[7])
Z([[6],[[7],[3,'item2']],[3,'checked']])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-581ce2bc vue-ref'])
Z([1,false])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'popup'])
Z([1,true])
Z([3,'bottom'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[12])
Z(z[14])
Z([3,'requestpayment'])
Z([[7],[3,'all_total_price']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-2d4eabf8'])
Z([[7],[3,'loadGoods']])
Z([3,'index-goods data-v-2d4eabf8'])
Z([[2,'>'],[[6],[[6],[[7],[3,'goods']],[3,'picture']],[3,'length']],[1,0]])
Z([[6],[[7],[3,'goods']],[3,'choice']])
Z([3,'__e'])
Z([3,'choice uni-flex data-v-2d4eabf8'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'togglePopup']],[[4],[[5],[1,'choice']]]]]]]]]]])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[6],[[7],[3,'goods']],[3,'choice']],[3,'imgTotal']])
Z([3,'*this'])
Z([[2,'<='],[[7],[3,'index']],[1,2]])
Z(z[5])
Z([3,'evaluate data-v-2d4eabf8'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'evaluate']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'goods']],[3,'repercussion']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[6],[[7],[3,'goods']],[3,'goodsinfo']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[6],[[7],[3,'goods']],[3,'like']],[3,'length']],[1,0]])
Z([3,'__l'])
Z(z[5])
Z([3,'data-v-2d4eabf8'])
Z([[6],[[7],[3,'goods']],[3,'like']])
Z([[4],[[5],[[4],[[5],[[5],[1,'^jump']],[[4],[[5],[[4],[[5],[1,'jumpUri']]]]]]]]])
Z([3,'1'])
Z(z[5])
Z([3,'shop uni-flex uni-column data-v-2d4eabf8'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'collection']],[[4],[[5],[[5],[[5],[1,'$0']],[1,'$1']],[1,'$2']]]],[[4],[[5],[[5],[[5],[1,'goods.title']],[1,'goods.picture.__$n0']],[1,'goods.price']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'iscollection']]])
Z([[7],[3,'iscollection']])
Z(z[19])
Z(z[5])
Z([3,'data-v-2d4eabf8 vue-ref'])
Z([1,false])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'popup'])
Z([3,'bottom'])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'isSelect']])
Z([[2,'>'],[[6],[[6],[[7],[3,'goods']],[3,'goods_parameter']],[3,'length']],[1,0]])
Z([[7],[3,'insufficient']])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-4ae552a4'])
Z([[7],[3,'goods_list']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-5d101fad'])
Z([3,'__l'])
Z([3,'swiperdot data-v-5d101fad'])
Z([[7],[3,'currentdot']])
Z([[7],[3,'home_banner_space']])
Z([3,'1'])
Z([[2,'!'],[[7],[3,'token']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'invoiceBox'])
Z([[7],[3,'isinvoice']])
Z([[7],[3,'InvoiceInformation']])
Z([3,'__l'])
Z([3,'vue-ref'])
Z([1,false])
Z([3,'popup'])
Z([1,true])
Z([3,'bottom'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'contentInfo']])
Z([[2,'!'],[[7],[3,'contentInfo']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-c37d8e38'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'newsList']])
Z([3,'pid'])
Z([3,'__e'])
Z([3,'tab_message1 data-v-c37d8e38'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'to_detail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'newsList']],[1,'pid']],[[6],[[7],[3,'item']],[3,'pid']]],[1,'pid']]]]]]]]]]]]]]])
Z([[7],[3,'showImg']])
Z([[7],[3,'show_404']])
Z([[7],[3,'show_loading']])
Z([3,'__l'])
Z(z[0])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-ea6e0f40'])
Z([[7],[3,'showList']])
Z(z[1])
Z(z[1])
Z(z[1])
Z(z[1])
Z(z[1])
Z([3,'__e'])
Z([3,'shou_btn data-v-ea6e0f40'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'isshow']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'border-bottom:6px solid #F1F1F1;padding:40rpx 0;color:#404040;position:relative;'])
Z([[7],[3,'showList3']])
Z([[7],[3,'showList1']])
Z([[7],[3,'showList2']])
Z([3,'__l'])
Z(z[0])
Z([[7],[3,'status']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'refundDetailWarp data-v-3237e03c'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'evaluateArray']])
Z(z[1])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-3237e03c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^starNum']],[[4],[[5],[[4],[[5],[1,'starsNum']]]]]]]]])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'score']])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[5])
Z(z[6])
Z(z[6])
Z(z[6])
Z(z[7])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onSuccess']],[[4],[[5],[[4],[[5],[1,'onSuccess']]]]]]]],[[4],[[5],[[5],[1,'^onError']],[[4],[[5],[[4],[[5],[1,'onError']]]]]]]],[[4],[[5],[[5],[1,'^onRemove']],[[4],[[5],[[4],[[5],[1,'onRemove']]]]]]]]])
Z([[7],[3,'fileList']])
Z([[7],[3,'name']])
Z([[7],[3,'url']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body-view uni-flex uni-column'])
Z([3,'__e'])
Z([3,'swiper-box-list'])
Z([[7],[3,'currentTab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z(z[1])
Z([3,'swiper-one-list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'loadMore']],[[4],[[5],[1,'$0']]]],[[4],[[5],[1,'currentTab']]]]]]]]]]])
Z([3,'true'])
Z([[2,'>'],[[6],[[7],[3,'orders']],[3,'length']],[1,0]])
Z([3,'__l'])
Z(z[1])
Z(z[1])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^payments']],[[4],[[5],[[4],[[5],[1,'rightOff']]]]]]]],[[4],[[5],[[5],[1,'^returngood']],[[4],[[5],[[4],[[5],[1,'returngoods']]]]]]]],[[4],[[5],[[5],[1,'^logistics']],[[4],[[5],[[4],[[5],[1,'logistic']]]]]]]],[[4],[[5],[[5],[1,'^jumpUri']],[[4],[[5],[[4],[[5],[1,'jump']]]]]]]]])
Z([[7],[3,'orders']])
Z([3,'1'])
Z(z[1])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[2,'>'],[[6],[[7],[3,'paymentsItem']],[3,'length']],[1,0]])
Z(z[11])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'^payments']],[[4],[[5],[[4],[[5],[1,'rightOff']]]]]]]]])
Z([[7],[3,'paymentsItem']])
Z([3,'2'])
Z(z[1])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[2,'>'],[[6],[[7],[3,'receiptsItem']],[3,'length']],[1,0]])
Z(z[11])
Z(z[1])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^returngood']],[[4],[[5],[[4],[[5],[1,'returngoods']]]]]]]],[[4],[[5],[[5],[1,'^logistics']],[[4],[[5],[[4],[[5],[1,'logistic']]]]]]]],[[4],[[5],[[5],[1,'^confirms']],[[4],[[5],[[4],[[5],[1,'confirm']]]]]]]]])
Z([[7],[3,'receiptsItem']])
Z([3,'3'])
Z(z[1])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[2,'>'],[[6],[[7],[3,'returnsItem']],[3,'length']],[1,0]])
Z(z[11])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^logistics']],[[4],[[5],[[4],[[5],[1,'logistic']]]]]]]],[[4],[[5],[[5],[1,'^confirms']],[[4],[[5],[[4],[[5],[1,'confirm']]]]]]]]])
Z([[7],[3,'returnsItem']])
Z([3,'4'])
Z(z[1])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[2,'>'],[[6],[[7],[3,'completesItem']],[3,'length']],[1,0]])
Z(z[11])
Z(z[1])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^logistics']],[[4],[[5],[[4],[[5],[1,'logistic']]]]]]]],[[4],[[5],[[5],[1,'^evaluates']],[[4],[[5],[[4],[[5],[1,'evaluate']]]]]]]]])
Z([[7],[3,'completesItem']])
Z([3,'5'])
Z(z[11])
Z([3,'vue-ref'])
Z([1,false])
Z([3,'popup'])
Z([1,true])
Z([3,'bottom'])
Z([3,'6'])
Z([[4],[[5],[1,'default']]])
Z(z[11])
Z(z[64])
Z(z[65])
Z([3,'refund'])
Z(z[67])
Z(z[68])
Z([3,'7'])
Z(z[70])
Z(z[11])
Z(z[64])
Z(z[65])
Z([3,'logistics'])
Z(z[67])
Z([3,'center'])
Z([3,'8'])
Z(z[70])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content data-v-c5a731d4'])
Z([3,'cont data-v-c5a731d4'])
Z([[2,'!'],[[7],[3,'show_result']]])
Z([3,'data-v-c5a731d4'])
Z([[2,'>'],[[6],[[7],[3,'history_list']],[3,'length']],[1,0]])
Z([[2,'>'],[[6],[[7],[3,'relevant_list']],[3,'length']],[1,0]])
Z([3,'__l'])
Z(z[3])
Z([[7],[3,'result_list']])
Z([3,'1'])
Z([[2,'&&'],[[7],[3,'show_search_guide']],[[2,'!='],[[7],[3,'search_txt']],[1,'']]])
Z([[7],[3,'show_voice_btn']])
Z(z[6])
Z([3,'__e'])
Z([3,'data-v-c5a731d4 vue-ref'])
Z([1,false])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'popup'])
Z([3,'bottom'])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([[2,'||'],[[2,'!'],[[7],[3,'voice_content']]],[[2,'=='],[[7],[3,'voice_content']],[[7],[3,'no_distinguish_txt']]]])
Z([[2,'!='],[[7],[3,'voice_content']],[[7],[3,'no_distinguish_txt']]])
Z([[2,'=='],[[7],[3,'voice_content']],[[7],[3,'no_distinguish_txt']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/evaluate-star/evaluate-star.wxml','./components/goods-list/goods-list.wxml','./components/guess-like/guess-like.wxml','./components/loading-show/loading-show.wxml','./components/mpvue-citypicker/mpvueCityPicker.wxml','./components/order-list/order-list.wxml','./components/request-payment/request-payment.wxml','./components/swiperDot/swiperDot.wxml','./components/uni-load-more/uni-load-more.wxml','./components/uni-popup/uni-popup.wxml','./components/uni-upload-image/uni-upload-image.wxml','./node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.wxml','./pages/address/address.wxml','./pages/address/newlyAdded.wxml','./pages/after_sale/after_sale_list.wxml','./pages/auth/login/login.wxml','./pages/auth/pwd/pwd.wxml','./pages/cart/cart.wxml','./pages/chat/chat.wxml','./pages/comment/comment.wxml','./pages/comment/commentDetail.wxml','./pages/confirmationOrder/confirmationOrder.wxml','./pages/detail/goodsinfo.wxml','./pages/goods_list/goods_list.wxml','./pages/index/index.wxml','./pages/invoice/invoice.wxml','./pages/message/message.wxml','./pages/message/systemMessage/index.wxml','./pages/myfix/myfix.wxml','./pages/myorder/evaluate.wxml','./pages/myorder/myorder.wxml','./pages/myorder/orderDetail.wxml','./pages/myorder/refundDetail.wxml','./pages/myorder/refundSuccess.wxml','./pages/myself/myself.wxml','./pages/scan/scan.wxml','./pages/search/search.wxml','./pages/send/send.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var hG=_v()
_(r,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_n('view')
_rz(z,tM,'class',4,oJ,cI,gg)
var eN=_v()
_(tM,eN)
if(_oz(z,5,oJ,cI,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,6,oJ,cI,gg)){bO.wxVkey=1
}
var oP=_v()
_(tM,oP)
if(_oz(z,7,oJ,cI,gg)){oP.wxVkey=1
}
var xQ=_v()
_(tM,xQ)
if(_oz(z,8,oJ,cI,gg)){xQ.wxVkey=1
}
var oR=_v()
_(tM,oR)
if(_oz(z,9,oJ,cI,gg)){oR.wxVkey=1
}
var fS=_v()
_(tM,fS)
if(_oz(z,10,oJ,cI,gg)){fS.wxVkey=1
}
var cT=_v()
_(tM,cT)
if(_oz(z,11,oJ,cI,gg)){cT.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
oP.wxXCkey=1
xQ.wxXCkey=1
oR.wxXCkey=1
fS.wxXCkey=1
cT.wxXCkey=1
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,2,oH,e,s,gg,hG,'item','index','index')
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var lY=_v()
_(r,lY)
if(_oz(z,0,e,s,gg)){lY.wxVkey=1
var aZ=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var t1=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var e2=_n('slot')
_(t1,e2)
_(aZ,t1)
_(lY,aZ)
}
lY.wxXCkey=1
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o4=_n('view')
_rz(z,o4,'class',0,e,s,gg)
var o6=_v()
_(o4,o6)
var f7=function(h9,c8,o0,gg){
var oBB=_v()
_(o0,oBB)
if(_oz(z,5,h9,c8,gg)){oBB.wxVkey=1
}
oBB.wxXCkey=1
return o0
}
o6.wxXCkey=2
_2z(z,3,f7,e,s,gg,o6,'item','index','index')
var x5=_v()
_(o4,x5)
if(_oz(z,6,e,s,gg)){x5.wxVkey=1
}
x5.wxXCkey=1
_(r,o4)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var tEB=_v()
_(r,tEB)
if(_oz(z,0,e,s,gg)){tEB.wxVkey=1
var eFB=_v()
_(tEB,eFB)
var bGB=function(xIB,oHB,oJB,gg){
var cLB=_v()
_(oJB,cLB)
if(_oz(z,5,xIB,oHB,gg)){cLB.wxVkey=1
}
cLB.wxXCkey=1
return oJB
}
eFB.wxXCkey=2
_2z(z,3,bGB,e,s,gg,eFB,'item','__i0__','address_id')
}
tEB.wxXCkey=1
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oNB=_n('view')
_rz(z,oNB,'class',0,e,s,gg)
var cOB=_v()
_(oNB,cOB)
if(_oz(z,1,e,s,gg)){cOB.wxVkey=1
}
var oPB=_mz(z,'mpvue-city-picker',['bind:__l',2,'bind:onConfirm',1,'class',2,'data-event-opts',3,'data-ref',4,'pickerValueDefault',5,'themeColor',6,'vueId',7],[],e,s,gg)
_(oNB,oPB)
cOB.wxXCkey=1
_(r,oNB)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var tSB=_n('view')
_rz(z,tSB,'class',0,e,s,gg)
var eTB=_v()
_(tSB,eTB)
if(_oz(z,1,e,s,gg)){eTB.wxVkey=1
}
var bUB=_v()
_(tSB,bUB)
if(_oz(z,2,e,s,gg)){bUB.wxVkey=1
}
var oVB=_v()
_(tSB,oVB)
if(_oz(z,3,e,s,gg)){oVB.wxVkey=1
}
var xWB=_v()
_(tSB,xWB)
if(_oz(z,4,e,s,gg)){xWB.wxVkey=1
}
var oXB=_v()
_(tSB,oXB)
if(_oz(z,5,e,s,gg)){oXB.wxVkey=1
}
eTB.wxXCkey=1
bUB.wxXCkey=1
oVB.wxXCkey=1
xWB.wxXCkey=1
oXB.wxXCkey=1
_(r,tSB)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var h1B=_n('view')
_rz(z,h1B,'class',0,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,1,e,s,gg)){o2B.wxVkey=1
var o4B=_mz(z,'guess-like',['bind:__l',2,'class',1,'content',2,'vueId',3],[],e,s,gg)
_(o2B,o4B)
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,6,e,s,gg)){c3B.wxVkey=1
}
o2B.wxXCkey=1
o2B.wxXCkey=3
c3B.wxXCkey=1
_(r,h1B)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var a6B=_mz(z,'view',['bindtouchstart',0,'class',1,'data-event-opts',1],[],e,s,gg)
var t7B=_v()
_(a6B,t7B)
var e8B=function(o0B,b9B,xAC,gg){
var fCC=_mz(z,'view',['class',7,'id',1],[],o0B,b9B,gg)
var cDC=_v()
_(fCC,cDC)
if(_oz(z,9,o0B,b9B,gg)){cDC.wxVkey=1
var oFC=_n('view')
_rz(z,oFC,'class',10,o0B,b9B,gg)
var cGC=_v()
_(oFC,cGC)
if(_oz(z,11,o0B,b9B,gg)){cGC.wxVkey=1
}
var oHC=_v()
_(oFC,oHC)
if(_oz(z,12,o0B,b9B,gg)){oHC.wxVkey=1
}
var lIC=_v()
_(oFC,lIC)
if(_oz(z,13,o0B,b9B,gg)){lIC.wxVkey=1
}
cGC.wxXCkey=1
oHC.wxXCkey=1
lIC.wxXCkey=1
_(cDC,oFC)
}
var hEC=_v()
_(fCC,hEC)
if(_oz(z,14,o0B,b9B,gg)){hEC.wxVkey=1
var aJC=_n('view')
_rz(z,aJC,'class',15,o0B,b9B,gg)
var tKC=_v()
_(aJC,tKC)
if(_oz(z,16,o0B,b9B,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(aJC,eLC)
if(_oz(z,17,o0B,b9B,gg)){eLC.wxVkey=1
}
var bMC=_v()
_(aJC,bMC)
if(_oz(z,18,o0B,b9B,gg)){bMC.wxVkey=1
}
tKC.wxXCkey=1
eLC.wxXCkey=1
bMC.wxXCkey=1
_(hEC,aJC)
}
cDC.wxXCkey=1
hEC.wxXCkey=1
_(xAC,fCC)
return xAC
}
t7B.wxXCkey=2
_2z(z,5,e8B,e,s,gg,t7B,'row','index','index')
_(r,a6B)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var xOC=_v()
_(r,xOC)
if(_oz(z,0,e,s,gg)){xOC.wxVkey=1
var oPC=_n('view')
_rz(z,oPC,'class',1,e,s,gg)
var fQC=_v()
_(oPC,fQC)
if(_oz(z,2,e,s,gg)){fQC.wxVkey=1
}
var cRC=_v()
_(oPC,cRC)
if(_oz(z,3,e,s,gg)){cRC.wxVkey=1
var oTC=_v()
_(cRC,oTC)
var cUC=function(lWC,oVC,aXC,gg){
var eZC=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],lWC,oVC,gg)
var b1C=_v()
_(eZC,b1C)
if(_oz(z,11,lWC,oVC,gg)){b1C.wxVkey=1
var o2C=_v()
_(b1C,o2C)
var x3C=function(f5C,o4C,c6C,gg){
var o8C=_v()
_(c6C,o8C)
if(_oz(z,16,f5C,o4C,gg)){o8C.wxVkey=1
}
o8C.wxXCkey=1
return c6C
}
o2C.wxXCkey=2
_2z(z,14,x3C,lWC,oVC,gg,o2C,'i','index','index')
}
b1C.wxXCkey=1
_(aXC,eZC)
return aXC
}
oTC.wxXCkey=2
_2z(z,6,cUC,e,s,gg,oTC,'item','index','index')
}
var hSC=_v()
_(oPC,hSC)
if(_oz(z,17,e,s,gg)){hSC.wxVkey=1
var c9C=_mz(z,'uni-load-more',['bind:__l',18,'contentText',1,'loadingType',2,'vueId',3],[],e,s,gg)
_(hSC,c9C)
}
fQC.wxXCkey=1
cRC.wxXCkey=1
hSC.wxXCkey=1
hSC.wxXCkey=3
_(xOC,oPC)
}
xOC.wxXCkey=1
xOC.wxXCkey=3
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var lAD=_v()
_(r,lAD)
if(_oz(z,0,e,s,gg)){lAD.wxVkey=1
}
lAD.wxXCkey=1
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var tCD=_n('view')
_rz(z,tCD,'class',0,e,s,gg)
var eDD=_n('view')
_rz(z,eDD,'class',1,e,s,gg)
var bED=_v()
_(eDD,bED)
var oFD=function(oHD,xGD,fID,gg){
var hKD=_v()
_(fID,hKD)
if(_oz(z,6,oHD,xGD,gg)){hKD.wxVkey=1
var oLD=_v()
_(hKD,oLD)
var cMD=function(lOD,oND,aPD,gg){
var eRD=_v()
_(aPD,eRD)
if(_oz(z,11,lOD,oND,gg)){eRD.wxVkey=1
}
eRD.wxXCkey=1
return aPD
}
oLD.wxXCkey=2
_2z(z,9,cMD,oHD,xGD,gg,oLD,'item2','j','j')
}
hKD.wxXCkey=1
return fID
}
bED.wxXCkey=2
_2z(z,4,oFD,e,s,gg,bED,'item','i','i')
var bSD=_mz(z,'uni-popup',['bind:__l',12,'bind:change',1,'class',2,'custom',3,'data-event-opts',4,'data-ref',5,'radius',6,'type',7,'vueId',8,'vueSlots',9],[],e,s,gg)
_(eDD,bSD)
_(tCD,eDD)
var oTD=_mz(z,'request-payment',['bind:__l',22,'class',1,'data-ref',2,'price',3,'vueId',4],[],e,s,gg)
_(tCD,oTD)
_(r,tCD)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oVD=_n('view')
_rz(z,oVD,'class',0,e,s,gg)
var fWD=_v()
_(oVD,fWD)
if(_oz(z,1,e,s,gg)){fWD.wxVkey=1
var cXD=_n('view')
_rz(z,cXD,'class',2,e,s,gg)
var hYD=_v()
_(cXD,hYD)
if(_oz(z,3,e,s,gg)){hYD.wxVkey=1
}
var oZD=_v()
_(cXD,oZD)
if(_oz(z,4,e,s,gg)){oZD.wxVkey=1
var l3D=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],e,s,gg)
var a4D=_v()
_(l3D,a4D)
var t5D=function(b7D,e6D,o8D,gg){
var o0D=_v()
_(o8D,o0D)
if(_oz(z,12,b7D,e6D,gg)){o0D.wxVkey=1
}
o0D.wxXCkey=1
return o8D
}
a4D.wxXCkey=2
_2z(z,10,t5D,e,s,gg,a4D,'item','index','*this')
_(oZD,l3D)
}
var fAE=_mz(z,'view',['bindtap',13,'class',1,'data-event-opts',2],[],e,s,gg)
var cBE=_v()
_(fAE,cBE)
if(_oz(z,16,e,s,gg)){cBE.wxVkey=1
}
cBE.wxXCkey=1
_(cXD,fAE)
var c1D=_v()
_(cXD,c1D)
if(_oz(z,17,e,s,gg)){c1D.wxVkey=1
}
var o2D=_v()
_(cXD,o2D)
if(_oz(z,18,e,s,gg)){o2D.wxVkey=1
var hCE=_mz(z,'guess-like',['bind:__l',19,'bind:jump',1,'class',2,'content',3,'data-event-opts',4,'vueId',5],[],e,s,gg)
_(o2D,hCE)
}
hYD.wxXCkey=1
oZD.wxXCkey=1
c1D.wxXCkey=1
o2D.wxXCkey=1
o2D.wxXCkey=3
_(fWD,cXD)
}
var oDE=_mz(z,'view',['bindtap',25,'class',1,'data-event-opts',2],[],e,s,gg)
var cEE=_v()
_(oDE,cEE)
if(_oz(z,28,e,s,gg)){cEE.wxVkey=1
}
var oFE=_v()
_(oDE,oFE)
if(_oz(z,29,e,s,gg)){oFE.wxVkey=1
}
cEE.wxXCkey=1
oFE.wxXCkey=1
_(oVD,oDE)
var lGE=_mz(z,'uni-popup',['bind:__l',30,'bind:change',1,'class',2,'custom',3,'data-event-opts',4,'data-ref',5,'type',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,39,e,s,gg)){aHE.wxVkey=1
}
else{aHE.wxVkey=2
var tIE=_v()
_(aHE,tIE)
if(_oz(z,40,e,s,gg)){tIE.wxVkey=1
var eJE=_v()
_(tIE,eJE)
if(_oz(z,41,e,s,gg)){eJE.wxVkey=1
}
eJE.wxXCkey=1
}
tIE.wxXCkey=1
}
aHE.wxXCkey=1
_(oVD,lGE)
fWD.wxXCkey=1
fWD.wxXCkey=3
_(r,oVD)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oLE=_mz(z,'goods-list',['bind:__l',0,'class',1,'list',1,'vueId',2],[],e,s,gg)
_(r,oLE)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var oNE=_n('view')
_rz(z,oNE,'class',0,e,s,gg)
var cPE=_mz(z,'swiper-dot',['bind:__l',1,'class',1,'current',2,'list',3,'vueId',4],[],e,s,gg)
_(oNE,cPE)
var fOE=_v()
_(oNE,fOE)
if(_oz(z,6,e,s,gg)){fOE.wxVkey=1
}
fOE.wxXCkey=1
_(r,oNE)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var oRE=_n('view')
_rz(z,oRE,'class',0,e,s,gg)
var cSE=_v()
_(oRE,cSE)
if(_oz(z,1,e,s,gg)){cSE.wxVkey=1
var oTE=_v()
_(cSE,oTE)
if(_oz(z,2,e,s,gg)){oTE.wxVkey=1
}
oTE.wxXCkey=1
}
else{cSE.wxVkey=2
}
var lUE=_mz(z,'uni-popup',['bind:__l',3,'class',1,'custom',2,'data-ref',3,'radius',4,'type',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,11,e,s,gg)){aVE.wxVkey=1
}
var tWE=_v()
_(lUE,tWE)
if(_oz(z,12,e,s,gg)){tWE.wxVkey=1
}
aVE.wxXCkey=1
tWE.wxXCkey=1
_(oRE,lUE)
cSE.wxXCkey=1
_(r,oRE)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var oZE=_n('view')
_rz(z,oZE,'class',0,e,s,gg)
var f3E=_v()
_(oZE,f3E)
var c4E=function(o6E,h5E,c7E,gg){
var l9E=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],o6E,h5E,gg)
var a0E=_v()
_(l9E,a0E)
if(_oz(z,8,o6E,h5E,gg)){a0E.wxVkey=1
}
a0E.wxXCkey=1
_(c7E,l9E)
return c7E
}
f3E.wxXCkey=2
_2z(z,3,c4E,e,s,gg,f3E,'item','__i0__','pid')
var x1E=_v()
_(oZE,x1E)
if(_oz(z,9,e,s,gg)){x1E.wxVkey=1
}
var o2E=_v()
_(oZE,o2E)
if(_oz(z,10,e,s,gg)){o2E.wxVkey=1
var tAF=_mz(z,'loading',['bind:__l',11,'class',1,'vueId',2],[],e,s,gg)
_(o2E,tAF)
}
x1E.wxXCkey=1
o2E.wxXCkey=1
o2E.wxXCkey=3
_(r,oZE)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var bCF=_n('view')
_rz(z,bCF,'class',0,e,s,gg)
var oDF=_v()
_(bCF,oDF)
if(_oz(z,1,e,s,gg)){oDF.wxVkey=1
}
var xEF=_v()
_(bCF,xEF)
if(_oz(z,2,e,s,gg)){xEF.wxVkey=1
}
var oFF=_v()
_(bCF,oFF)
if(_oz(z,3,e,s,gg)){oFF.wxVkey=1
}
var fGF=_v()
_(bCF,fGF)
if(_oz(z,4,e,s,gg)){fGF.wxVkey=1
}
var cHF=_v()
_(bCF,cHF)
if(_oz(z,5,e,s,gg)){cHF.wxVkey=1
}
var hIF=_v()
_(bCF,hIF)
if(_oz(z,6,e,s,gg)){hIF.wxVkey=1
}
var oJF=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var cKF=_v()
_(oJF,cKF)
if(_oz(z,11,e,s,gg)){cKF.wxVkey=1
}
var oLF=_v()
_(oJF,oLF)
if(_oz(z,12,e,s,gg)){oLF.wxVkey=1
}
var lMF=_v()
_(oJF,lMF)
if(_oz(z,13,e,s,gg)){lMF.wxVkey=1
}
cKF.wxXCkey=1
oLF.wxXCkey=1
lMF.wxXCkey=1
_(bCF,oJF)
var aNF=_mz(z,'uni-load-more',['bind:__l',14,'class',1,'status',2,'vueId',3],[],e,s,gg)
_(bCF,aNF)
oDF.wxXCkey=1
xEF.wxXCkey=1
oFF.wxXCkey=1
fGF.wxXCkey=1
cHF.wxXCkey=1
hIF.wxXCkey=1
_(r,bCF)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var ePF=_n('view')
_rz(z,ePF,'class',0,e,s,gg)
var bQF=_v()
_(ePF,bQF)
var oRF=function(oTF,xSF,fUF,gg){
var hWF=_mz(z,'evaluate-star',['bind:__l',5,'bind:starNum',1,'class',2,'data-event-opts',3,'index',4,'score',5,'vueId',6],[],oTF,xSF,gg)
_(fUF,hWF)
return fUF
}
bQF.wxXCkey=4
_2z(z,3,oRF,e,s,gg,bQF,'item','index','index')
var oXF=_mz(z,'uni-upload-image',['bind:__l',12,'bind:onError',1,'bind:onRemove',2,'bind:onSuccess',3,'class',4,'data-event-opts',5,'fileList',6,'name',7,'url',8,'vueId',9],[],e,s,gg)
_(ePF,oXF)
_(r,ePF)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var oZF=_n('view')
_rz(z,oZF,'class',0,e,s,gg)
var l1F=_mz(z,'swiper',['bindchange',1,'class',1,'current',2,'data-event-opts',3,'duration',4],[],e,s,gg)
var a2F=_mz(z,'scroll-view',['bindscrolltolower',6,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var t3F=_v()
_(a2F,t3F)
if(_oz(z,10,e,s,gg)){t3F.wxVkey=1
var e4F=_mz(z,'order-list',['bind:__l',11,'bind:jumpUri',1,'bind:logistics',2,'bind:payments',3,'bind:returngood',4,'data-event-opts',5,'list',6,'vueId',7],[],e,s,gg)
_(t3F,e4F)
}
t3F.wxXCkey=1
t3F.wxXCkey=3
_(l1F,a2F)
var b5F=_mz(z,'scroll-view',['bindscrolltolower',19,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var o6F=_v()
_(b5F,o6F)
if(_oz(z,23,e,s,gg)){o6F.wxVkey=1
var x7F=_mz(z,'order-list',['bind:__l',24,'bind:payments',1,'data-event-opts',2,'list',3,'vueId',4],[],e,s,gg)
_(o6F,x7F)
}
o6F.wxXCkey=1
o6F.wxXCkey=3
_(l1F,b5F)
var o8F=_mz(z,'scroll-view',['bindscrolltolower',29,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var f9F=_v()
_(o8F,f9F)
if(_oz(z,33,e,s,gg)){f9F.wxVkey=1
var c0F=_mz(z,'order-list',['bind:__l',34,'bind:confirms',1,'bind:logistics',2,'bind:returngood',3,'data-event-opts',4,'list',5,'vueId',6],[],e,s,gg)
_(f9F,c0F)
}
f9F.wxXCkey=1
f9F.wxXCkey=3
_(l1F,o8F)
var hAG=_mz(z,'scroll-view',['bindscrolltolower',41,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var oBG=_v()
_(hAG,oBG)
if(_oz(z,45,e,s,gg)){oBG.wxVkey=1
var cCG=_mz(z,'order-list',['bind:__l',46,'bind:confirms',1,'bind:logistics',2,'data-event-opts',3,'list',4,'vueId',5],[],e,s,gg)
_(oBG,cCG)
}
oBG.wxXCkey=1
oBG.wxXCkey=3
_(l1F,hAG)
var oDG=_mz(z,'scroll-view',['bindscrolltolower',52,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var lEG=_v()
_(oDG,lEG)
if(_oz(z,56,e,s,gg)){lEG.wxVkey=1
var aFG=_mz(z,'order-list',['bind:__l',57,'bind:evaluates',1,'bind:logistics',2,'data-event-opts',3,'list',4,'vueId',5],[],e,s,gg)
_(lEG,aFG)
}
lEG.wxXCkey=1
lEG.wxXCkey=3
_(l1F,oDG)
_(oZF,l1F)
var tGG=_mz(z,'uni-popup',['bind:__l',63,'class',1,'custom',2,'data-ref',3,'radius',4,'type',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(oZF,tGG)
var eHG=_mz(z,'uni-popup',['bind:__l',71,'class',1,'custom',2,'data-ref',3,'radius',4,'type',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(oZF,eHG)
var bIG=_mz(z,'uni-popup',['bind:__l',79,'class',1,'custom',2,'data-ref',3,'radius',4,'type',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(oZF,bIG)
_(r,oZF)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var oPG=_n('view')
_rz(z,oPG,'class',0,e,s,gg)
var lSG=_n('view')
_rz(z,lSG,'class',1,e,s,gg)
var aTG=_v()
_(lSG,aTG)
if(_oz(z,2,e,s,gg)){aTG.wxVkey=1
var tUG=_n('view')
_rz(z,tUG,'class',3,e,s,gg)
var eVG=_v()
_(tUG,eVG)
if(_oz(z,4,e,s,gg)){eVG.wxVkey=1
}
var bWG=_v()
_(tUG,bWG)
if(_oz(z,5,e,s,gg)){bWG.wxVkey=1
}
eVG.wxXCkey=1
bWG.wxXCkey=1
_(aTG,tUG)
}
else{aTG.wxVkey=2
var oXG=_mz(z,'goods-list',['bind:__l',6,'class',1,'list',2,'vueId',3],[],e,s,gg)
_(aTG,oXG)
}
aTG.wxXCkey=1
aTG.wxXCkey=3
_(oPG,lSG)
var cQG=_v()
_(oPG,cQG)
if(_oz(z,10,e,s,gg)){cQG.wxVkey=1
}
var oRG=_v()
_(oPG,oRG)
if(_oz(z,11,e,s,gg)){oRG.wxVkey=1
}
var xYG=_mz(z,'uni-popup',['bind:__l',12,'bind:change',1,'class',2,'custom',3,'data-event-opts',4,'data-ref',5,'type',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var oZG=_v()
_(xYG,oZG)
if(_oz(z,21,e,s,gg)){oZG.wxVkey=1
}
var f1G=_v()
_(xYG,f1G)
if(_oz(z,22,e,s,gg)){f1G.wxVkey=1
}
var c2G=_v()
_(xYG,c2G)
if(_oz(z,23,e,s,gg)){c2G.wxVkey=1
}
oZG.wxXCkey=1
f1G.wxXCkey=1
c2G.wxXCkey=1
_(oPG,xYG)
cQG.wxXCkey=1
oRG.wxXCkey=1
_(r,oPG)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/cart/cart","pages/send/send","pages/chat/chat","pages/message/message","pages/goods_list/goods_list","pages/scan/scan","pages/auth/login/login","pages/auth/pwd/pwd","pages/detail/goodsinfo","pages/comment/comment","pages/comment/commentDetail","pages/search/search","pages/confirmationOrder/confirmationOrder","pages/invoice/invoice","pages/address/address","pages/address/newlyAdded","pages/address/address","pages/myself/myself","pages/myorder/myorder","pages/after_sale/after_sale_list","pages/myorder/refundSuccess","pages/myorder/refundDetail","pages/myorder/evaluate","pages/myorder/orderDetail","pages/message/systemMessage/index","pages/myfix/myfix"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"东装西购","navigationBarBackgroundColor":"#000000","backgroundColor":"#000000"},"tabBar":{"color":"#4d4d4d","selectedColor":"#ff0000","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/img/icon_home.png","selectedIconPath":"static/img/icon_home_HL.png","text":"首页"},{"pagePath":"pages/send/send","iconPath":"static/img/icon_send_msg.png","selectedIconPath":"static/img/icon_send_msg_HL.png","text":"发贴"},{"pagePath":"pages/message/message","iconPath":"static/img/icon_message.png","selectedIconPath":"static/img/icon_message_HL.png","text":"消息"},{"pagePath":"pages/cart/cart","iconPath":"static/img/icon_cart.png","selectedIconPath":"static/img/icon_cart_HL.png","text":"购物车"},{"pagePath":"pages/myself/myself","iconPath":"static/img/icon_my.png","selectedIconPath":"static/img/icon_my_HL.png","text":"我的"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"eastWest自定义基座","compilerVersion":"2.3.3","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/evaluate-star/evaluate-star.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/evaluate-star/evaluate-star.wxml']=$gwx('./components/evaluate-star/evaluate-star.wxml');

__wxAppCode__['components/goods-list/goods-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/goods-list/goods-list.wxml']=$gwx('./components/goods-list/goods-list.wxml');

__wxAppCode__['components/guess-like/guess-like.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/guess-like/guess-like.wxml']=$gwx('./components/guess-like/guess-like.wxml');

__wxAppCode__['components/loading-show/loading-show.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/loading-show/loading-show.wxml']=$gwx('./components/loading-show/loading-show.wxml');

__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/mpvue-citypicker/mpvueCityPicker.wxml']=$gwx('./components/mpvue-citypicker/mpvueCityPicker.wxml');

__wxAppCode__['components/order-list/order-list.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/order-list/order-list.wxml']=$gwx('./components/order-list/order-list.wxml');

__wxAppCode__['components/request-payment/request-payment.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/request-payment/request-payment.wxml']=$gwx('./components/request-payment/request-payment.wxml');

__wxAppCode__['components/swiperDot/swiperDot.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/swiperDot/swiperDot.wxml']=$gwx('./components/swiperDot/swiperDot.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['components/uni-popup/uni-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['components/uni-upload-image/uni-upload-image.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-upload-image/uni-upload-image.wxml']=$gwx('./components/uni-upload-image/uni-upload-image.wxml');

__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.wxml']=$gwx('./node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.wxml');

__wxAppCode__['pages/address/address.json']={"navigationBarTitleText":"","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/address/address.wxml']=$gwx('./pages/address/address.wxml');

__wxAppCode__['pages/address/newlyAdded.json']={"navigationBarTitleText":"添加收货地址","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#f1f1f1","backgroundColor":"#f1f1f1","usingComponents":{"mpvue-city-picker":"/components/mpvue-citypicker/mpvueCityPicker"}};
__wxAppCode__['pages/address/newlyAdded.wxml']=$gwx('./pages/address/newlyAdded.wxml');

__wxAppCode__['pages/after_sale/after_sale_list.json']={"navigationBarTitleText":"退款售后","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#f2f2f2","backgroundColor":"#f2f2f2","usingComponents":{}};
__wxAppCode__['pages/after_sale/after_sale_list.wxml']=$gwx('./pages/after_sale/after_sale_list.wxml');

__wxAppCode__['pages/auth/login/login.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/auth/login/login.wxml']=$gwx('./pages/auth/login/login.wxml');

__wxAppCode__['pages/auth/pwd/pwd.json']={"navigationStyle":"custom","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/auth/pwd/pwd.wxml']=$gwx('./pages/auth/pwd/pwd.wxml');

__wxAppCode__['pages/cart/cart.json']={"navigationBarBackgroundColor":"#fff","navigationBarTitleText":"购物车","scrollIndicator":"none","titleNView":{"buttons":[{"type":"none","text":"编辑","width":"60px","fontSize":"15","float":"right","background":"#fff","color":"#000"}]},"usingComponents":{"guess-like":"/components/guess-like/guess-like"}};
__wxAppCode__['pages/cart/cart.wxml']=$gwx('./pages/cart/cart.wxml');

__wxAppCode__['pages/chat/chat.json']={"navigationBarBackgroundColor":"#fff","navigationBarTitleText":"","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/chat/chat.wxml']=$gwx('./pages/chat/chat.wxml');

__wxAppCode__['pages/comment/comment.json']={"navigationBarTitleText":"","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","bounce":"none","scrollIndicator":"none","titleNView":{"type":"default","buttons":[{"type":"share"}]},"usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/comment/comment.wxml']=$gwx('./pages/comment/comment.wxml');

__wxAppCode__['pages/comment/commentDetail.json']={"navigationBarTitleText":"评论详情","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/comment/commentDetail.wxml']=$gwx('./pages/comment/commentDetail.wxml');

__wxAppCode__['pages/confirmationOrder/confirmationOrder.json']={"navigationBarTitleText":"确认订单","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","usingComponents":{"uni-popup":"/components/uni-popup/uni-popup","request-payment":"/components/request-payment/request-payment"}};
__wxAppCode__['pages/confirmationOrder/confirmationOrder.wxml']=$gwx('./pages/confirmationOrder/confirmationOrder.wxml');

__wxAppCode__['pages/detail/goodsinfo.json']={"navigationBarTitleText":"商品信息","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","bounce":"none","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"share"}]},"usingComponents":{"uni-popup":"/components/uni-popup/uni-popup","guess-like":"/components/guess-like/guess-like"}};
__wxAppCode__['pages/detail/goodsinfo.wxml']=$gwx('./pages/detail/goodsinfo.wxml');

__wxAppCode__['pages/goods_list/goods_list.json']={"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#de0303","navigationBarTitleText":"","scrollIndicator":"none","titleNView":{"buttons":[{"type":"none","text":"搜索","width":"40px","fontSize":"12","float":"right","background":"#de0303","color":"#ffffff"}],"tags":[{"tag":"img","id":"img","src":"./static/img/search_bg.png","position":{"top":"8px","right":"5px","width":"50px","height":"28px"}}]},"usingComponents":{"goods-list":"/components/goods-list/goods-list"}};
__wxAppCode__['pages/goods_list/goods_list.wxml']=$gwx('./pages/goods_list/goods_list.wxml');

__wxAppCode__['pages/index/index.json']={"navigationStyle":"custom","navigationBarTextStyle":"white","scrollIndicator":"none","usingComponents":{"swiper-dot":"/components/swiperDot/swiperDot"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/invoice/invoice.json']={"navigationBarTitleText":"开具发票","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","usingComponents":{"uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/invoice/invoice.wxml']=$gwx('./pages/invoice/invoice.wxml');

__wxAppCode__['pages/message/message.json']={"navigationBarBackgroundColor":"#fff","navigationBarTitleText":"消息","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/message/message.wxml']=$gwx('./pages/message/message.wxml');

__wxAppCode__['pages/message/systemMessage/index.json']={"navigationBarTitleText":"","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#fff","backgroundColor":"#fff","usingComponents":{"loading":"/components/loading-show/loading-show"}};
__wxAppCode__['pages/message/systemMessage/index.wxml']=$gwx('./pages/message/systemMessage/index.wxml');

__wxAppCode__['pages/myfix/myfix.json']={"navigationBarTitleText":"","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#de0303","backgroundColor":"green","scrollIndicator":"none","enableDownRefresh":true,"titleNView":{"buttons":[{"type":"none","text":"搜索","width":"40px","fontSize":"12","float":"right","background":"#de0303","color":"#ffffff"}],"tags":[{"tag":"img","id":"img","src":"./static/img/search_bg.png","position":{"top":"8px","right":"5px","width":"50px","height":"28px"}}]},"usingComponents":{"uni-load-more":"/node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/myfix/myfix.wxml']=$gwx('./pages/myfix/myfix.wxml');

__wxAppCode__['pages/myorder/evaluate.json']={"navigationBarTitleText":"商品评价","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","usingComponents":{"evaluate-star":"/components/evaluate-star/evaluate-star","uni-upload-image":"/components/uni-upload-image/uni-upload-image"}};
__wxAppCode__['pages/myorder/evaluate.wxml']=$gwx('./pages/myorder/evaluate.wxml');

__wxAppCode__['pages/myorder/myorder.json']={"navigationBarTitleText":"我的订单","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#f2f2f2","backgroundColor":"#f2f2f2","bounce":"none","titleNView":{"buttons":[{"text":"发票","fontSize":"16px"}]},"usingComponents":{"order-list":"/components/order-list/order-list","uni-popup":"/components/uni-popup/uni-popup","request-payment":"/components/request-payment/request-payment"}};
__wxAppCode__['pages/myorder/myorder.wxml']=$gwx('./pages/myorder/myorder.wxml');

__wxAppCode__['pages/myorder/orderDetail.json']={"navigationBarTitleText":"订单详情","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#f2f2f2","backgroundColor":"#f2f2f2","usingComponents":{}};
__wxAppCode__['pages/myorder/orderDetail.wxml']=$gwx('./pages/myorder/orderDetail.wxml');

__wxAppCode__['pages/myorder/refundDetail.json']={"navigationBarTitleText":"退款详情","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/myorder/refundDetail.wxml']=$gwx('./pages/myorder/refundDetail.wxml');

__wxAppCode__['pages/myorder/refundSuccess.json']={"navigationBarTitleText":"提交成功","navigationBarTextStyle":"black","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff","usingComponents":{}};
__wxAppCode__['pages/myorder/refundSuccess.wxml']=$gwx('./pages/myorder/refundSuccess.wxml');

__wxAppCode__['pages/myself/myself.json']={"navigationStyle":"custom","navigationBarTextStyle":"white","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/myself/myself.wxml']=$gwx('./pages/myself/myself.wxml');

__wxAppCode__['pages/scan/scan.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/scan/scan.wxml']=$gwx('./pages/scan/scan.wxml');

__wxAppCode__['pages/search/search.json']={"navigationBarBackgroundColor":"#f1f1f1","navigationBarTitleText":"","scrollIndicator":"none","titleNView":{"searchInput":{"autoFocus":true,"align":"left","backgroundColor":"#ffffff","borderRadius":"10px"},"buttons":[{"type":"none","text":"搜索","width":"60px","fontSize":"12","float":"right","background":"#de0303","color":"#ffffff"}],"tags":[{"tag":"img","id":"img","src":"./static/img/search_bg.png","position":{"top":"8px","right":"5px","width":"50px","height":"28px"}}]},"usingComponents":{"uni-popup":"/components/uni-popup/uni-popup","goods-list":"/components/goods-list/goods-list"}};
__wxAppCode__['pages/search/search.wxml']=$gwx('./pages/search/search.wxml');

__wxAppCode__['pages/send/send.json']={"navigationBarBackgroundColor":"#fff","navigationBarTitleText":"发帖","scrollIndicator":"none","usingComponents":{}};
__wxAppCode__['pages/send/send.wxml']=$gwx('./pages/send/send.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0742":function(t,e,n){"use strict";(function(t,e,o){n("0947"),n("921b");var a=c(n("66fd")),u=c(n("13b4")),r=c(n("7099")),i=c(n("b11d"));function c(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("5b8e");try{var d=t.getSystemInfoSync();r.default.dispatch("save",{is_ios:"ios"==d.platform?"1":"0"}),r.default.dispatch("save",{screen_width:d.windowWidth}),r.default.dispatch("save",{screen_height:d.windowHeight})}catch(p){}t.getLocation({type:"gcj02",geocode:!0,complete:function(t){console.log(e(t," at main.js:20"))},success:function(t){console.log(e(t," at main.js:23")),i.default.is_empty(t.address)||(r.default.dispatch("save",{currentCity:t.address.city}),r.default.dispatch("save",{currentDistrict:t.address.district})),r.default.dispatch("save",{userPoint:{longitude:t.longitude,latitude:t.latitude}})},fail:function(t){}}),a.default.prototype.$store=r.default,a.default.prototype.now=Date.now||function(){return(new Date).getTime()},a.default.prototype.isArray=Array.isArray||function(t){return t instanceof Array},a.default.prototype.is_empty=i.default.is_empty,a.default.prototype.help=i.default.help,a.default.config.productionTip=!1,u.default.mpType="app";var s=new a.default(l({store:r.default},u.default));o(s).$mount()}).call(this,n("6e42")["default"],n("0de9")["default"],n("6e42")["createApp"])},"13b4":function(t,e,n){"use strict";n.r(e);var o=n("c446");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("d77a");var u,r,i=n("2877"),c=Object(i["a"])(o["default"],u,r,!1,null,null,null);e["default"]=c.exports},"15f9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){console.log(t("App Launch"," at App.vue:4"))},onShow:function(){console.log(t("App Show"," at App.vue:7"))},onHide:function(){console.log(t("App Hide"," at App.vue:10"))}};e.default=n}).call(this,n("0de9")["default"])},"2f45":function(t,e,n){},c446:function(t,e,n){"use strict";n.r(e);var o=n("15f9"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},d77a:function(t,e,n){"use strict";var o=n("2f45"),a=n.n(o);a.a}},[["0742","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function o(o) {
    for (var t, r, s = o[0], a = o[1], l = o[2], p = 0, c = []; p < s.length; p++) {
      r = s[p], i[r] && c.push(i[r][0]), i[r] = 0;
    }

    for (t in a) {
      Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }

    m && m(o);

    while (c.length) {
      c.shift()();
    }

    return u.push.apply(u, l || []), n();
  }

  function n() {
    for (var e, o = 0; o < u.length; o++) {
      for (var n = u[o], t = !0, r = 1; r < n.length; r++) {
        var s = n[r];
        0 !== i[s] && (t = !1);
      }

      t && (u.splice(o--, 1), e = a(a.s = n[0]));
    }

    return e;
  }

  var t = {},
      r = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      u = [];

  function s(e) {
    return a.p + "" + e + ".js";
  }

  function a(o) {
    if (t[o]) return t[o].exports;
    var n = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
  }

  a.e = function (e) {
    var o = [],
        n = {
      "components/swiperDot/swiperDot": 1,
      "components/guess-like/guess-like": 1,
      "components/goods-list/goods-list": 1,
      "components/uni-popup/uni-popup": 1,
      "components/uni-load-more/uni-load-more": 1,
      "components/request-payment/request-payment": 1,
      "components/mpvue-citypicker/mpvueCityPicker": 1,
      "components/order-list/order-list": 1,
      "components/evaluate-star/evaluate-star": 1,
      "components/uni-upload-image/uni-upload-image": 1,
      "components/loading-show/loading-show": 1,
      "node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more": 1
    };
    r[e] ? o.push(r[e]) : 0 !== r[e] && n[e] && o.push(r[e] = new Promise(function (o, n) {
      for (var t = ({
        "components/swiperDot/swiperDot": "components/swiperDot/swiperDot",
        "components/guess-like/guess-like": "components/guess-like/guess-like",
        "components/goods-list/goods-list": "components/goods-list/goods-list",
        "components/uni-popup/uni-popup": "components/uni-popup/uni-popup",
        "components/uni-load-more/uni-load-more": "components/uni-load-more/uni-load-more",
        "components/request-payment/request-payment": "components/request-payment/request-payment",
        "components/mpvue-citypicker/mpvueCityPicker": "components/mpvue-citypicker/mpvueCityPicker",
        "components/order-list/order-list": "components/order-list/order-list",
        "components/evaluate-star/evaluate-star": "components/evaluate-star/evaluate-star",
        "components/uni-upload-image/uni-upload-image": "components/uni-upload-image/uni-upload-image",
        "components/loading-show/loading-show": "components/loading-show/loading-show",
        "node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more": "node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more"
      }[e] || e) + ".wxss", i = a.p + t, u = document.getElementsByTagName("link"), s = 0; s < u.length; s++) {
        var l = u[s],
            p = l.getAttribute("data-href") || l.getAttribute("href");
        if ("stylesheet" === l.rel && (p === t || p === i)) return o();
      }

      var c = document.getElementsByTagName("style");

      for (s = 0; s < c.length; s++) {
        l = c[s], p = l.getAttribute("data-href");
        if (p === t || p === i) return o();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = o, m.onerror = function (o) {
        var t = o && o.target && o.target.src || i,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
        u.request = t, delete r[e], m.parentNode.removeChild(m), n(u);
      }, m.href = i;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(m);
    }).then(function () {
      r[e] = 0;
    }));
    var t = i[e];
    if (0 !== t) if (t) o.push(t[2]);else {
      var u = new Promise(function (o, n) {
        t = i[e] = [o, n];
      });
      o.push(t[2] = u);
      var l,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, a.nc && p.setAttribute("nonce", a.nc), p.src = s(e), l = function l(o) {
        p.onerror = p.onload = null, clearTimeout(c);
        var n = i[e];

        if (0 !== n) {
          if (n) {
            var t = o && ("load" === o.type ? "missing" : o.type),
                r = o && o.target && o.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + t + ": " + r + ")");
            u.type = t, u.request = r, n[1](u);
          }

          i[e] = void 0;
        }
      };
      var c = setTimeout(function () {
        l({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = l, document.head.appendChild(p);
    }
    return Promise.all(o);
  }, a.m = e, a.c = t, a.d = function (e, o, n) {
    a.o(e, o) || Object.defineProperty(e, o, {
      enumerable: !0,
      get: n
    });
  }, a.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, a.t = function (e, o) {
    if (1 & o && (e = a(e)), 8 & o) return e;
    if (4 & o && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (a.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & o && "string" != typeof e) for (var t in e) {
      a.d(n, t, function (o) {
        return e[o];
      }.bind(null, t));
    }
    return n;
  }, a.n = function (e) {
    var o = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return a.d(o, "a", o), o;
  }, a.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o);
  }, a.p = "/", a.oe = function (e) {
    throw console.error(e), e;
  };
  var l = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = l.push.bind(l);
  l.push = o, l = l.slice();

  for (var c = 0; c < l.length; c++) {
    o(l[c]);
  }

  var m = p;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0947":function(e,l,a){},"0de9":function(e,l,a){"use strict";function t(e){var l=Object.prototype.toString.call(e);return l.substring(8,l.length-1)}function n(){for(var e=arguments.length,l=new Array(e),a=0;a<e;a++)l[a]=arguments[a];var n=l.map(function(e){var l=Object.prototype.toString.call(e);if("[object object]"===l.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(n){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var a=t(e).toUpperCase();e="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+e+"---END:"+a+"---":String(e)}return e}),u="";if(n.length>1){var r=n.pop();u=n.join("---COMMA---"),0===r.indexOf(" at ")?u+=r:u+="---COMMA---"+r}else u=n[0];return u}Object.defineProperty(l,"__esModule",{value:!0}),l.default=n},"188a":function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[{label:"市辖区",value:"1101"}],[{label:"市辖区",value:"1201"}],[{label:"石家庄市",value:"1301"},{label:"唐山市",value:"1302"},{label:"秦皇岛市",value:"1303"},{label:"邯郸市",value:"1304"},{label:"邢台市",value:"1305"},{label:"保定市",value:"1306"},{label:"张家口市",value:"1307"},{label:"承德市",value:"1308"},{label:"沧州市",value:"1309"},{label:"廊坊市",value:"1310"},{label:"衡水市",value:"1311"}],[{label:"太原市",value:"1401"},{label:"大同市",value:"1402"},{label:"阳泉市",value:"1403"},{label:"长治市",value:"1404"},{label:"晋城市",value:"1405"},{label:"朔州市",value:"1406"},{label:"晋中市",value:"1407"},{label:"运城市",value:"1408"},{label:"忻州市",value:"1409"},{label:"临汾市",value:"1410"},{label:"吕梁市",value:"1411"}],[{label:"呼和浩特市",value:"1501"},{label:"包头市",value:"1502"},{label:"乌海市",value:"1503"},{label:"赤峰市",value:"1504"},{label:"通辽市",value:"1505"},{label:"鄂尔多斯市",value:"1506"},{label:"呼伦贝尔市",value:"1507"},{label:"巴彦淖尔市",value:"1508"},{label:"乌兰察布市",value:"1509"},{label:"兴安盟",value:"1522"},{label:"锡林郭勒盟",value:"1525"},{label:"阿拉善盟",value:"1529"}],[{label:"沈阳市",value:"2101"},{label:"大连市",value:"2102"},{label:"鞍山市",value:"2103"},{label:"抚顺市",value:"2104"},{label:"本溪市",value:"2105"},{label:"丹东市",value:"2106"},{label:"锦州市",value:"2107"},{label:"营口市",value:"2108"},{label:"阜新市",value:"2109"},{label:"辽阳市",value:"2110"},{label:"盘锦市",value:"2111"},{label:"铁岭市",value:"2112"},{label:"朝阳市",value:"2113"},{label:"葫芦岛市",value:"2114"}],[{label:"长春市",value:"2201"},{label:"吉林市",value:"2202"},{label:"四平市",value:"2203"},{label:"辽源市",value:"2204"},{label:"通化市",value:"2205"},{label:"白山市",value:"2206"},{label:"松原市",value:"2207"},{label:"白城市",value:"2208"},{label:"延边朝鲜族自治州",value:"2224"}],[{label:"哈尔滨市",value:"2301"},{label:"齐齐哈尔市",value:"2302"},{label:"鸡西市",value:"2303"},{label:"鹤岗市",value:"2304"},{label:"双鸭山市",value:"2305"},{label:"大庆市",value:"2306"},{label:"伊春市",value:"2307"},{label:"佳木斯市",value:"2308"},{label:"七台河市",value:"2309"},{label:"牡丹江市",value:"2310"},{label:"黑河市",value:"2311"},{label:"绥化市",value:"2312"},{label:"大兴安岭地区",value:"2327"}],[{label:"市辖区",value:"3101"}],[{label:"南京市",value:"3201"},{label:"无锡市",value:"3202"},{label:"徐州市",value:"3203"},{label:"常州市",value:"3204"},{label:"苏州市",value:"3205"},{label:"南通市",value:"3206"},{label:"连云港市",value:"3207"},{label:"淮安市",value:"3208"},{label:"盐城市",value:"3209"},{label:"扬州市",value:"3210"},{label:"镇江市",value:"3211"},{label:"泰州市",value:"3212"},{label:"宿迁市",value:"3213"}],[{label:"杭州市",value:"3301"},{label:"宁波市",value:"3302"},{label:"温州市",value:"3303"},{label:"嘉兴市",value:"3304"},{label:"湖州市",value:"3305"},{label:"绍兴市",value:"3306"},{label:"金华市",value:"3307"},{label:"衢州市",value:"3308"},{label:"舟山市",value:"3309"},{label:"台州市",value:"3310"},{label:"丽水市",value:"3311"}],[{label:"合肥市",value:"3401"},{label:"芜湖市",value:"3402"},{label:"蚌埠市",value:"3403"},{label:"淮南市",value:"3404"},{label:"马鞍山市",value:"3405"},{label:"淮北市",value:"3406"},{label:"铜陵市",value:"3407"},{label:"安庆市",value:"3408"},{label:"黄山市",value:"3410"},{label:"滁州市",value:"3411"},{label:"阜阳市",value:"3412"},{label:"宿州市",value:"3413"},{label:"六安市",value:"3415"},{label:"亳州市",value:"3416"},{label:"池州市",value:"3417"},{label:"宣城市",value:"3418"}],[{label:"福州市",value:"3501"},{label:"厦门市",value:"3502"},{label:"莆田市",value:"3503"},{label:"三明市",value:"3504"},{label:"泉州市",value:"3505"},{label:"漳州市",value:"3506"},{label:"南平市",value:"3507"},{label:"龙岩市",value:"3508"},{label:"宁德市",value:"3509"}],[{label:"南昌市",value:"3601"},{label:"景德镇市",value:"3602"},{label:"萍乡市",value:"3603"},{label:"九江市",value:"3604"},{label:"新余市",value:"3605"},{label:"鹰潭市",value:"3606"},{label:"赣州市",value:"3607"},{label:"吉安市",value:"3608"},{label:"宜春市",value:"3609"},{label:"抚州市",value:"3610"},{label:"上饶市",value:"3611"}],[{label:"济南市",value:"3701"},{label:"青岛市",value:"3702"},{label:"淄博市",value:"3703"},{label:"枣庄市",value:"3704"},{label:"东营市",value:"3705"},{label:"烟台市",value:"3706"},{label:"潍坊市",value:"3707"},{label:"济宁市",value:"3708"},{label:"泰安市",value:"3709"},{label:"威海市",value:"3710"},{label:"日照市",value:"3711"},{label:"莱芜市",value:"3712"},{label:"临沂市",value:"3713"},{label:"德州市",value:"3714"},{label:"聊城市",value:"3715"},{label:"滨州市",value:"3716"},{label:"菏泽市",value:"3717"}],[{label:"郑州市",value:"4101"},{label:"开封市",value:"4102"},{label:"洛阳市",value:"4103"},{label:"平顶山市",value:"4104"},{label:"安阳市",value:"4105"},{label:"鹤壁市",value:"4106"},{label:"新乡市",value:"4107"},{label:"焦作市",value:"4108"},{label:"濮阳市",value:"4109"},{label:"许昌市",value:"4110"},{label:"漯河市",value:"4111"},{label:"三门峡市",value:"4112"},{label:"南阳市",value:"4113"},{label:"商丘市",value:"4114"},{label:"信阳市",value:"4115"},{label:"周口市",value:"4116"},{label:"驻马店市",value:"4117"},{label:"省直辖县级行政区划",value:"4190"}],[{label:"武汉市",value:"4201"},{label:"黄石市",value:"4202"},{label:"十堰市",value:"4203"},{label:"宜昌市",value:"4205"},{label:"襄阳市",value:"4206"},{label:"鄂州市",value:"4207"},{label:"荆门市",value:"4208"},{label:"孝感市",value:"4209"},{label:"荆州市",value:"4210"},{label:"黄冈市",value:"4211"},{label:"咸宁市",value:"4212"},{label:"随州市",value:"4213"},{label:"恩施土家族苗族自治州",value:"4228"},{label:"省直辖县级行政区划",value:"4290"}],[{label:"长沙市",value:"4301"},{label:"株洲市",value:"4302"},{label:"湘潭市",value:"4303"},{label:"衡阳市",value:"4304"},{label:"邵阳市",value:"4305"},{label:"岳阳市",value:"4306"},{label:"常德市",value:"4307"},{label:"张家界市",value:"4308"},{label:"益阳市",value:"4309"},{label:"郴州市",value:"4310"},{label:"永州市",value:"4311"},{label:"怀化市",value:"4312"},{label:"娄底市",value:"4313"},{label:"湘西土家族苗族自治州",value:"4331"}],[{label:"广州市",value:"4401"},{label:"韶关市",value:"4402"},{label:"深圳市",value:"4403"},{label:"珠海市",value:"4404"},{label:"汕头市",value:"4405"},{label:"佛山市",value:"4406"},{label:"江门市",value:"4407"},{label:"湛江市",value:"4408"},{label:"茂名市",value:"4409"},{label:"肇庆市",value:"4412"},{label:"惠州市",value:"4413"},{label:"梅州市",value:"4414"},{label:"汕尾市",value:"4415"},{label:"河源市",value:"4416"},{label:"阳江市",value:"4417"},{label:"清远市",value:"4418"},{label:"东莞市",value:"4419"},{label:"中山市",value:"4420"},{label:"潮州市",value:"4451"},{label:"揭阳市",value:"4452"},{label:"云浮市",value:"4453"}],[{label:"南宁市",value:"4501"},{label:"柳州市",value:"4502"},{label:"桂林市",value:"4503"},{label:"梧州市",value:"4504"},{label:"北海市",value:"4505"},{label:"防城港市",value:"4506"},{label:"钦州市",value:"4507"},{label:"贵港市",value:"4508"},{label:"玉林市",value:"4509"},{label:"百色市",value:"4510"},{label:"贺州市",value:"4511"},{label:"河池市",value:"4512"},{label:"来宾市",value:"4513"},{label:"崇左市",value:"4514"}],[{label:"海口市",value:"4601"},{label:"三亚市",value:"4602"},{label:"三沙市",value:"4603"},{label:"儋州市",value:"4604"},{label:"省直辖县级行政区划",value:"4690"}],[{label:"市辖区",value:"5001"},{label:"县",value:"5002"}],[{label:"成都市",value:"5101"},{label:"自贡市",value:"5103"},{label:"攀枝花市",value:"5104"},{label:"泸州市",value:"5105"},{label:"德阳市",value:"5106"},{label:"绵阳市",value:"5107"},{label:"广元市",value:"5108"},{label:"遂宁市",value:"5109"},{label:"内江市",value:"5110"},{label:"乐山市",value:"5111"},{label:"南充市",value:"5113"},{label:"眉山市",value:"5114"},{label:"宜宾市",value:"5115"},{label:"广安市",value:"5116"},{label:"达州市",value:"5117"},{label:"雅安市",value:"5118"},{label:"巴中市",value:"5119"},{label:"资阳市",value:"5120"},{label:"阿坝藏族羌族自治州",value:"5132"},{label:"甘孜藏族自治州",value:"5133"},{label:"凉山彝族自治州",value:"5134"}],[{label:"贵阳市",value:"5201"},{label:"六盘水市",value:"5202"},{label:"遵义市",value:"5203"},{label:"安顺市",value:"5204"},{label:"毕节市",value:"5205"},{label:"铜仁市",value:"5206"},{label:"黔西南布依族苗族自治州",value:"5223"},{label:"黔东南苗族侗族自治州",value:"5226"},{label:"黔南布依族苗族自治州",value:"5227"}],[{label:"昆明市",value:"5301"},{label:"曲靖市",value:"5303"},{label:"玉溪市",value:"5304"},{label:"保山市",value:"5305"},{label:"昭通市",value:"5306"},{label:"丽江市",value:"5307"},{label:"普洱市",value:"5308"},{label:"临沧市",value:"5309"},{label:"楚雄彝族自治州",value:"5323"},{label:"红河哈尼族彝族自治州",value:"5325"},{label:"文山壮族苗族自治州",value:"5326"},{label:"西双版纳傣族自治州",value:"5328"},{label:"大理白族自治州",value:"5329"},{label:"德宏傣族景颇族自治州",value:"5331"},{label:"怒江傈僳族自治州",value:"5333"},{label:"迪庆藏族自治州",value:"5334"}],[{label:"拉萨市",value:"5401"},{label:"日喀则市",value:"5402"},{label:"昌都市",value:"5403"},{label:"林芝市",value:"5404"},{label:"山南市",value:"5405"},{label:"那曲地区",value:"5424"},{label:"阿里地区",value:"5425"}],[{label:"西安市",value:"6101"},{label:"铜川市",value:"6102"},{label:"宝鸡市",value:"6103"},{label:"咸阳市",value:"6104"},{label:"渭南市",value:"6105"},{label:"延安市",value:"6106"},{label:"汉中市",value:"6107"},{label:"榆林市",value:"6108"},{label:"安康市",value:"6109"},{label:"商洛市",value:"6110"}],[{label:"兰州市",value:"6201"},{label:"嘉峪关市",value:"6202"},{label:"金昌市",value:"6203"},{label:"白银市",value:"6204"},{label:"天水市",value:"6205"},{label:"武威市",value:"6206"},{label:"张掖市",value:"6207"},{label:"平凉市",value:"6208"},{label:"酒泉市",value:"6209"},{label:"庆阳市",value:"6210"},{label:"定西市",value:"6211"},{label:"陇南市",value:"6212"},{label:"临夏回族自治州",value:"6229"},{label:"甘南藏族自治州",value:"6230"}],[{label:"西宁市",value:"6301"},{label:"海东市",value:"6302"},{label:"海北藏族自治州",value:"6322"},{label:"黄南藏族自治州",value:"6323"},{label:"海南藏族自治州",value:"6325"},{label:"果洛藏族自治州",value:"6326"},{label:"玉树藏族自治州",value:"6327"},{label:"海西蒙古族藏族自治州",value:"6328"}],[{label:"银川市",value:"6401"},{label:"石嘴山市",value:"6402"},{label:"吴忠市",value:"6403"},{label:"固原市",value:"6404"},{label:"中卫市",value:"6405"}],[{label:"乌鲁木齐市",value:"6501"},{label:"克拉玛依市",value:"6502"},{label:"吐鲁番市",value:"6504"},{label:"哈密市",value:"6505"},{label:"昌吉回族自治州",value:"6523"},{label:"博尔塔拉蒙古自治州",value:"6527"},{label:"巴音郭楞蒙古自治州",value:"6528"},{label:"阿克苏地区",value:"6529"},{label:"克孜勒苏柯尔克孜自治州",value:"6530"},{label:"喀什地区",value:"6531"},{label:"和田地区",value:"6532"},{label:"伊犁哈萨克自治州",value:"6540"},{label:"塔城地区",value:"6542"},{label:"阿勒泰地区",value:"6543"},{label:"自治区直辖县级行政区划",value:"6590"}],[{label:"台北",value:"6601"},{label:"高雄",value:"6602"},{label:"基隆",value:"6603"},{label:"台中",value:"6604"},{label:"台南",value:"6605"},{label:"新竹",value:"6606"},{label:"嘉义",value:"6607"},{label:"宜兰",value:"6608"},{label:"桃园",value:"6609"},{label:"苗栗",value:"6610"},{label:"彰化",value:"6611"},{label:"南投",value:"6612"},{label:"云林",value:"6613"},{label:"屏东",value:"6614"},{label:"台东",value:"6615"},{label:"花莲",value:"6616"},{label:"澎湖",value:"6617"}],[{label:"香港岛",value:"6701"},{label:"九龙",value:"6702"},{label:"新界",value:"6703"}],[{label:"澳门半岛",value:"6801"},{label:"氹仔岛",value:"6802"},{label:"路环岛",value:"6803"},{label:"路氹城",value:"6804"}]],n=t;l.default=n},"1b42":function(e,l,a){},2598:function(e,l,a){},2877:function(e,l,a){"use strict";function t(e,l,a,t,n,u,r,o){var i,v="function"===typeof e?e.options:e;if(l&&(v.render=l,v.staticRenderFns=a,v._compiled=!0),t&&(v.functional=!0),u&&(v._scopeId="data-v-"+u),r?(i=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},v._ssrRegister=i):n&&(i=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),i)if(v.functional){v._injectStyles=i;var b=v.render;v.render=function(e,l){return i.call(l),b(e,l)}}else{var s=v.beforeCreate;v.beforeCreate=s?[].concat(s,i):[i]}return{exports:e,options:v}}a.d(l,"a",function(){return t})},"2f62":function(e,l,a){"use strict";a.r(l),a.d(l,"Store",function(){return p}),a.d(l,"install",function(){return E}),a.d(l,"mapState",function(){return $}),a.d(l,"mapMutations",function(){return j}),a.d(l,"mapGetters",function(){return T}),a.d(l,"mapActions",function(){return P}),a.d(l,"createNamespacedHelpers",function(){return R});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var t=function(e){var l=Number(e.version.split(".")[0]);if(l>=2)e.mixin({beforeCreate:t});else{var a=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[t].concat(e.init):t,a.call(this,e)}}function t(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}},n="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function u(e){n&&(e._devtoolHook=n,n.emit("vuex:init",e),n.on("vuex:travel-to-state",function(l){e.replaceState(l)}),e.subscribe(function(e,l){n.emit("vuex:mutation",e,l)}))}function r(e,l){Object.keys(e).forEach(function(a){return l(e[a],a)})}function o(e){return null!==e&&"object"===typeof e}function i(e){return e&&"function"===typeof e.then}var v=function(e,l){this.runtime=l,this._children=Object.create(null),this._rawModule=e;var a=e.state;this.state=("function"===typeof a?a():a)||{}},b={namespaced:{configurable:!0}};b.namespaced.get=function(){return!!this._rawModule.namespaced},v.prototype.addChild=function(e,l){this._children[e]=l},v.prototype.removeChild=function(e){delete this._children[e]},v.prototype.getChild=function(e){return this._children[e]},v.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},v.prototype.forEachChild=function(e){r(this._children,e)},v.prototype.forEachGetter=function(e){this._rawModule.getters&&r(this._rawModule.getters,e)},v.prototype.forEachAction=function(e){this._rawModule.actions&&r(this._rawModule.actions,e)},v.prototype.forEachMutation=function(e){this._rawModule.mutations&&r(this._rawModule.mutations,e)},Object.defineProperties(v.prototype,b);var s=function(e){this.register([],e,!1)};function c(e,l,a){if(l.update(a),a.modules)for(var t in a.modules){if(!l.getChild(t))return void 0;c(e.concat(t),l.getChild(t),a.modules[t])}}s.prototype.get=function(e){return e.reduce(function(e,l){return e.getChild(l)},this.root)},s.prototype.getNamespace=function(e){var l=this.root;return e.reduce(function(e,a){return l=l.getChild(a),e+(l.namespaced?a+"/":"")},"")},s.prototype.update=function(e){c([],this.root,e)},s.prototype.register=function(e,l,a){var t=this;void 0===a&&(a=!0);var n=new v(l,a);if(0===e.length)this.root=n;else{var u=this.get(e.slice(0,-1));u.addChild(e[e.length-1],n)}l.modules&&r(l.modules,function(l,n){t.register(e.concat(n),l,a)})},s.prototype.unregister=function(e){var l=this.get(e.slice(0,-1)),a=e[e.length-1];l.getChild(a).runtime&&l.removeChild(a)};var f;var p=function(e){var l=this;void 0===e&&(e={}),!f&&"undefined"!==typeof window&&window.Vue&&E(window.Vue);var a=e.plugins;void 0===a&&(a=[]);var t=e.strict;void 0===t&&(t=!1);var n=e.state;void 0===n&&(n={}),"function"===typeof n&&(n=n()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new s(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var r=this,o=this,i=o.dispatch,v=o.commit;this.dispatch=function(e,l){return i.call(r,e,l)},this.commit=function(e,l,a){return v.call(r,e,l,a)},this.strict=t,y(this,n,[],this._modules.root),m(this,n),a.forEach(function(e){return e(l)}),f.config.devtools&&u(this)},h={state:{configurable:!0}};function d(e,l){return l.indexOf(e)<0&&l.push(e),function(){var a=l.indexOf(e);a>-1&&l.splice(a,1)}}function g(e,l){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var a=e.state;y(e,a,[],e._modules.root,!0),m(e,a,l)}function m(e,l,a){var t=e._vm;e.getters={};var n=e._wrappedGetters,u={};r(n,function(l,a){u[a]=function(){return l(e)},Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})});var o=f.config.silent;f.config.silent=!0,e._vm=new f({data:{$$state:l},computed:u}),f.config.silent=o,e.strict&&O(e),t&&(a&&e._withCommit(function(){t._data.$$state=null}),f.nextTick(function(){return t.$destroy()}))}function y(e,l,a,t,n){var u=!a.length,r=e._modules.getNamespace(a);if(t.namespaced&&(e._modulesNamespaceMap[r]=t),!u&&!n){var o=S(l,a.slice(0,-1)),i=a[a.length-1];e._withCommit(function(){f.set(o,i,t.state)})}var v=t.context=_(e,r,a);t.forEachMutation(function(l,a){var t=r+a;w(e,t,l,v)}),t.forEachAction(function(l,a){var t=l.root?a:r+a,n=l.handler||l;k(e,t,n,v)}),t.forEachGetter(function(l,a){var t=r+a;A(e,t,l,v)}),t.forEachChild(function(t,u){y(e,l,a.concat(u),t,n)})}function _(e,l,a){var t=""===l,n={dispatch:t?e.dispatch:function(a,t,n){var u=C(a,t,n),r=u.payload,o=u.options,i=u.type;return o&&o.root||(i=l+i),e.dispatch(i,r)},commit:t?e.commit:function(a,t,n){var u=C(a,t,n),r=u.payload,o=u.options,i=u.type;o&&o.root||(i=l+i),e.commit(i,r,o)}};return Object.defineProperties(n,{getters:{get:t?function(){return e.getters}:function(){return x(e,l)}},state:{get:function(){return S(e.state,a)}}}),n}function x(e,l){var a={},t=l.length;return Object.keys(e.getters).forEach(function(n){if(n.slice(0,t)===l){var u=n.slice(t);Object.defineProperty(a,u,{get:function(){return e.getters[n]},enumerable:!0})}}),a}function w(e,l,a,t){var n=e._mutations[l]||(e._mutations[l]=[]);n.push(function(l){a.call(e,t.state,l)})}function k(e,l,a,t){var n=e._actions[l]||(e._actions[l]=[]);n.push(function(l,n){var u=a.call(e,{dispatch:t.dispatch,commit:t.commit,getters:t.getters,state:t.state,rootGetters:e.getters,rootState:e.state},l,n);return i(u)||(u=Promise.resolve(u)),e._devtoolHook?u.catch(function(l){throw e._devtoolHook.emit("vuex:error",l),l}):u})}function A(e,l,a,t){e._wrappedGetters[l]||(e._wrappedGetters[l]=function(e){return a(t.state,t.getters,e.state,e.getters)})}function O(e){e._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function S(e,l){return l.length?l.reduce(function(e,l){return e[l]},e):e}function C(e,l,a){return o(e)&&e.type&&(a=l,l=e,e=e.type),{type:e,payload:l,options:a}}function E(e){f&&e===f||(f=e,t(f))}h.state.get=function(){return this._vm._data.$$state},h.state.set=function(e){0},p.prototype.commit=function(e,l,a){var t=this,n=C(e,l,a),u=n.type,r=n.payload,o=(n.options,{type:u,payload:r}),i=this._mutations[u];i&&(this._withCommit(function(){i.forEach(function(e){e(r)})}),this._subscribers.forEach(function(e){return e(o,t.state)}))},p.prototype.dispatch=function(e,l){var a=this,t=C(e,l),n=t.type,u=t.payload,r={type:n,payload:u},o=this._actions[n];if(o)return this._actionSubscribers.forEach(function(e){return e(r,a.state)}),o.length>1?Promise.all(o.map(function(e){return e(u)})):o[0](u)},p.prototype.subscribe=function(e){return d(e,this._subscribers)},p.prototype.subscribeAction=function(e){return d(e,this._actionSubscribers)},p.prototype.watch=function(e,l,a){var t=this;return this._watcherVM.$watch(function(){return e(t.state,t.getters)},l,a)},p.prototype.replaceState=function(e){var l=this;this._withCommit(function(){l._vm._data.$$state=e})},p.prototype.registerModule=function(e,l,a){void 0===a&&(a={}),"string"===typeof e&&(e=[e]),this._modules.register(e,l),y(this,this.state,e,this._modules.get(e),a.preserveState),m(this,this.state)},p.prototype.unregisterModule=function(e){var l=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var a=S(l.state,e.slice(0,-1));f.delete(a,e[e.length-1])}),g(this)},p.prototype.hotUpdate=function(e){this._modules.update(e),g(this,!0)},p.prototype._withCommit=function(e){var l=this._committing;this._committing=!0,e(),this._committing=l},Object.defineProperties(p.prototype,h);var $=I(function(e,l){var a={};return D(l).forEach(function(l){var t=l.key,n=l.val;a[t]=function(){var l=this.$store.state,a=this.$store.getters;if(e){var t=M(this.$store,"mapState",e);if(!t)return;l=t.context.state,a=t.context.getters}return"function"===typeof n?n.call(this,l,a):l[n]},a[t].vuex=!0}),a}),j=I(function(e,l){var a={};return D(l).forEach(function(l){var t=l.key,n=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.commit;if(e){var u=M(this.$store,"mapMutations",e);if(!u)return;t=u.context.commit}return"function"===typeof n?n.apply(this,[t].concat(l)):t.apply(this.$store,[n].concat(l))}}),a}),T=I(function(e,l){var a={};return D(l).forEach(function(l){var t=l.key,n=l.val;n=e+n,a[t]=function(){if(!e||M(this.$store,"mapGetters",e))return this.$store.getters[n]},a[t].vuex=!0}),a}),P=I(function(e,l){var a={};return D(l).forEach(function(l){var t=l.key,n=l.val;a[t]=function(){var l=[],a=arguments.length;while(a--)l[a]=arguments[a];var t=this.$store.dispatch;if(e){var u=M(this.$store,"mapActions",e);if(!u)return;t=u.context.dispatch}return"function"===typeof n?n.apply(this,[t].concat(l)):t.apply(this.$store,[n].concat(l))}}),a}),R=function(e){return{mapState:$.bind(null,e),mapGetters:T.bind(null,e),mapMutations:j.bind(null,e),mapActions:P.bind(null,e)}};function D(e){return Array.isArray(e)?e.map(function(e){return{key:e,val:e}}):Object.keys(e).map(function(l){return{key:l,val:e[l]}})}function I(e){return function(l,a){return"string"!==typeof l?(a=l,l=""):"/"!==l.charAt(l.length-1)&&(l+="/"),e(l,a)}}function M(e,l,a){var t=e._modulesNamespaceMap[a];return t}var N={Store:p,install:E,version:"3.0.1",mapState:$,mapMutations:j,mapGetters:T,mapActions:P,createNamespacedHelpers:R};l["default"]=N},"3e50":function(e,l,a){"use strict";(function(l,a){var t;function n(){var e=0,l=plus.ios.import("PHPhotoLibrary"),a=l.authorizationStatus();return e=0===a?null:3==a?1:0,plus.ios.deleteObject(l),e}function u(){var e=0,l=plus.ios.import("AVCaptureDevice"),a=l.authorizationStatusForMediaType("vide");return e=0===a?null:3==a?1:0,plus.ios.deleteObject(l),e}function r(){var e=0,l=plus.ios.import("CLLocationManager"),a=l.locationServicesEnabled(),t=l.authorizationStatus();return e=a?0===t?null:3===t||4===t?1:0:2,plus.ios.deleteObject(l),e}function o(){var e=0,a=plus.ios.import("UIApplication"),t=a.sharedApplication(),n=0;if(t.currentUserNotificationSettings){var u=t.currentUserNotificationSettings();n=u.plusGetAttribute("types"),0==n?(e=0,console.log(l("推送权限没有开启"," at common\\permission.js:63"))):(e=1,console.log(l("已经开启推送功能!"," at common\\permission.js:66"))),plus.ios.deleteObject(u)}else n=t.enabledRemoteNotificationTypes(),0==n?(e=3,console.log(l("推送权限没有开启!"," at common\\permission.js:73"))):(e=4,console.log(l("已经开启推送功能!"," at common\\permission.js:76")));return plus.ios.deleteObject(t),plus.ios.deleteObject(a),e}function i(){var e=0,l=plus.ios.import("CNContactStore");l.authorizationStatusForEntityType(0);return e=0===authStatus?null:3==authStatus?1:0,plus.ios.deleteObject(l),e}function v(){var e=null,a=plus.ios.import("AVAudioSession"),t=a.sharedInstance(),n=t.recordPermission();return console.log(l("permissionStatus:"+n," at common\\permission.js:104")),e=1970168948===n?null:1735552628===n?1:0,plus.ios.deleteObject(a),e}function b(){var e=null,a=plus.ios.import("EKEventStore"),t=a.authorizationStatusForEntityType(0);return 3==t?(e=1,console.log(l("日历权限已经开启"," at common\\permission.js:122"))):console.log(l("日历权限没有开启"," at common\\permission.js:124")),plus.ios.deleteObject(a),e}function s(){var e=null,a=plus.ios.import("EKEventStore"),t=a.authorizationStatusForEntityType(1);return 3==t?(e=1,console.log(l("备忘录权限已经开启"," at common\\permission.js:136"))):console.log(l("备忘录权限没有开启"," at common\\permission.js:138")),plus.ios.deleteObject(a),e}function c(e){return new Promise(function(l,a){switch(e){case"push":l(o());break;case"location":l(r());break;case"record":l(v());break;case"camera":l(u());break;case"album":l(n());break;case"contact":l(i());break;case"calendar":l(b());break;case"memo":l(s());break;default:l(0);break}})}function f(e){return new Promise(function(a,t){plus.android.requestPermissions([e],function(e){for(var t=0,n=0;n<e.granted.length;n++){var u=e.granted[n];console.log(l("已获取的权限："+u," at common\\permission.js:187")),t=1}for(n=0;n<e.deniedPresent.length;n++){var r=e.deniedPresent[n];console.log(l("拒绝本次申请的权限："+r," at common\\permission.js:192")),t=0}for(n=0;n<e.deniedAlways.length;n++){var o=e.deniedAlways[n];console.log(l("永久拒绝申请的权限："+o," at common\\permission.js:197")),t=-1}a(t)},function(e){a({code:e.code,message:e.message})})})}function p(){if(d.isIOS){var e=plus.ios.import("UIApplication"),l=e.sharedApplication(),a=plus.ios.import("NSURL"),t=a.URLWithString("app-settings:");l.openURL(t),plus.ios.deleteObject(t),plus.ios.deleteObject(a),plus.ios.deleteObject(l)}else{var n=plus.android.importClass("android.content.Intent"),u=plus.android.importClass("android.provider.Settings"),r=plus.android.importClass("android.net.Uri"),o=plus.android.runtimeMainActivity(),i=new n;i.setAction(u.ACTION_APPLICATION_DETAILS_SETTINGS);var v=r.fromParts("package",o.getPackageName(),null);i.setData(v),o.startActivity(i)}}function h(){var e=plus.ios.import("UIApplication"),l=e.sharedApplication(),a=plus.ios.import("NSURL"),t=a.URLWithString("App-prefs:root=General");l.openURL(t),plus.ios.deleteObject(t),plus.ios.deleteObject(a),plus.ios.deleteObject(l)}var d={get isIOS(){return"boolean"===typeof t?t:t="ios"===a.getSystemInfoSync().platform},requestIOS:c,requestAndroid:f,gotoAppSetting:p,gotoiOSSetting:h};e.exports=d}).call(this,a("0de9")["default"],a("6e42")["default"])},"5a51":function(e,l,a){"use strict";var t;function n(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var u=(t={"北京":"101010100","海淀":"101010200","朝阳":"101010300","顺义":"101010400","怀柔":"101010500","通州":"101010600","昌平":"101010700","延庆":"101010800","丰台":"101010900","石景山":"101011000","大兴":"101011100","房山":"101011200","密云":"101011300","门头沟":"101011400","平谷":"101011500","八达岭":"101011600","佛爷顶":"101011700","汤河口":"101011800","密云上甸子":"101011900","斋堂":"101012000","霞云岭":"101012100","上海":"101020100","闵行":"101020200","宝山":"101020300","川沙":"101020400","嘉定":"101020500","南汇":"101020600","金山":"101020700","青浦":"101020800","松江":"101020900","奉贤":"101021000","崇明":"101021100","陈家镇":"101021101","引水船":"101021102","徐家汇":"101021200","浦东":"101021300","天津":"101030100","武清":"101030200","宝坻":"101030300","东丽":"101030400","西青":"101030500","北辰":"101030600","宁河":"101030700","汉沽":"101030800","静海":"101030900","津南":"101031000","塘沽":"101031100","大港":"101031200","平台":"101031300","蓟县":"101031400","重庆":"101040100","永川":"101040200","合川":"101040300","南川":"101040400","江津":"101040500","万盛":"101040600","渝北":"101040700","北碚":"101040800","巴南":"101040900","长寿":"101041000","黔江":"101041100","万州天城":"101041200","万州龙宝":"101041300","涪陵":"101041400","开县":"101041500","城口":"101041600","云阳":"101041700","巫溪":"101041800","奉节":"101041900","巫山":"101042000","潼南":"101042100","垫江":"101042200","梁平":"101042300","忠县":"101042400","石柱":"101042500","大足":"101042600","荣昌":"101042700","铜梁":"101042800","璧山":"101042900","丰都":"101043000","武隆":"101043100","彭水":"101043200","綦江":"101043300","酉阳":"101043400","金佛山":"101043500","秀山":"101043600","沙坪坝":"101043700","哈尔滨":"101050101","双城":"101050102","呼兰":"101050103","阿城":"101050104","宾县":"101050105","依兰":"101050106","巴彦":"101050107","通河":"101050108","方正":"101050109","延寿":"101050110","尚志":"101050111","五常":"101050112","木兰":"101050113","齐齐哈尔":"101050201","讷河":"101050202","龙江":"101050203","甘南":"101050204","富裕":"101050205","依安":"101050206","拜泉":"101050207","克山":"101050208","克东":"101050209","泰来":"101050210","牡丹江":"101050301","海林":"101050302","穆棱":"101050303","林口":"101050304","绥芬河":"101050305","宁安":"101050306","东宁":"101050307","佳木斯":"101050401","汤原":"101050402","抚远":"101050403","桦川":"101050404","桦南":"101050405","同江":"101050406","富锦":"101050407","绥化":"101050501","肇东":"101050502","安达":"101050503","海伦":"101050504","明水":"101050505","望奎":"101050506","兰西":"101050507","青冈":"101050508","庆安":"101050509","绥棱":"101050510","黑河":"101050601","嫩江":"101050602","孙吴":"101050603","逊克":"101050604","五大连池":"101050605","北安":"101050606","大兴安岭":"101050701","塔河":"101050702","漠河":"101050703","呼玛":"101050704","呼中":"101050705","新林":"101050706","阿木尔":"101050707","加格达奇":"101050708","伊春":"101050801","乌伊岭":"101050802","五营":"101050803","铁力":"101050804","嘉荫":"101050805","大庆":"101050901","林甸":"101050902","肇州":"101050903","肇源":"101050904","杜蒙":"101050905","七台河":"101051002","勃利":"101051003","鸡西":"101051101","虎林":"101051102","密山":"101051103","鸡东":"101051104","鹤岗":"101051201","绥滨":"101051202","萝北":"101051203","双鸭山":"101051301","集贤":"101051302","宝清":"101051303","饶河":"101051304","长春":"101060101","农安":"101060102","德惠":"101060103","九台":"101060104","榆树":"101060105","双阳":"101060106","吉林":"101060201","舒兰":"101060202","永吉":"101060203","蛟河":"101060204","磐石":"101060205","桦甸":"101060206","烟筒山":"101060207","延吉":"101060301","敦化":"101060302","安图":"101060303","汪清":"101060304","和龙":"101060305","天池":"101060306","龙井":"101060307","珲春":"101060308","图们":"101060309"},n(t,"松江","101060310"),n(t,"罗子沟","101060311"),n(t,"延边","101060312"),n(t,"四平","101060401"),n(t,"双辽","101060402"),n(t,"梨树","101060403"),n(t,"公主岭","101060404"),n(t,"伊通","101060405"),n(t,"孤家子","101060406"),n(t,"通化","101060501"),n(t,"梅河口","101060502"),n(t,"柳河","101060503"),n(t,"辉南","101060504"),n(t,"集安","101060505"),n(t,"通化县","101060506"),n(t,"白城","101060601"),n(t,"洮南","101060602"),n(t,"大安","101060603"),n(t,"镇赉","101060604"),n(t,"通榆","101060605"),n(t,"辽源","101060701"),n(t,"东丰","101060702"),n(t,"松原","101060801"),n(t,"乾安","101060802"),n(t,"前郭","101060803"),n(t,"长岭","101060804"),n(t,"扶余","101060805"),n(t,"白山","101060901"),n(t,"靖宇","101060902"),n(t,"临江","101060903"),n(t,"东岗","101060904"),n(t,"长白","101060905"),n(t,"沈阳","101070101"),n(t,"苏家屯","101070102"),n(t,"辽中","101070103"),n(t,"康平","101070104"),n(t,"法库","101070105"),n(t,"新民","101070106"),n(t,"于洪","101070107"),n(t,"新城子","101070108"),n(t,"大连","101070201"),n(t,"瓦房店","101070202"),n(t,"金州","101070203"),n(t,"普兰店","101070204"),n(t,"旅顺","101070205"),n(t,"长海","101070206"),n(t,"庄河","101070207"),n(t,"皮口","101070208"),n(t,"海洋岛","101070209"),n(t,"鞍山","101070301"),n(t,"台安","101070302"),n(t,"岫岩","101070303"),n(t,"海城","101070304"),n(t,"抚顺","101070401"),n(t,"清原","101070403"),n(t,"章党","101070404"),n(t,"本溪","101070501"),n(t,"本溪县","101070502"),n(t,"草河口","101070503"),n(t,"桓仁","101070504"),n(t,"丹东","101070601"),n(t,"凤城","101070602"),n(t,"宽甸","101070603"),n(t,"东港","101070604"),n(t,"东沟","101070605"),n(t,"锦州","101070701"),n(t,"凌海","101070702"),n(t,"北宁","101070703"),n(t,"义县","101070704"),n(t,"黑山","101070705"),n(t,"北镇","101070706"),n(t,"营口","101070801"),n(t,"大石桥","101070802"),n(t,"盖州","101070803"),n(t,"阜新","101070901"),n(t,"彰武","101070902"),n(t,"辽阳","101071001"),n(t,"辽阳县","101071002"),n(t,"灯塔","101071003"),n(t,"铁岭","101071101"),n(t,"开原","101071102"),n(t,"昌图","101071103"),n(t,"西丰","101071104"),n(t,"朝阳","101071201"),n(t,"建平","101071202"),n(t,"凌源","101071203"),n(t,"喀左","101071204"),n(t,"北票","101071205"),n(t,"羊山","101071206"),n(t,"建平县","101071207"),n(t,"盘锦","101071301"),n(t,"大洼","101071302"),n(t,"盘山","101071303"),n(t,"葫芦岛","101071401"),n(t,"建昌","101071402"),n(t,"绥中","101071403"),n(t,"兴城","101071404"),n(t,"呼和浩特","101080101"),n(t,"土默特左旗","101080102"),n(t,"托克托","101080103"),n(t,"和林格尔","101080104"),n(t,"清水河","101080105"),n(t,"呼和浩特市郊区","101080106"),n(t,"武川","101080107"),n(t,"包头","101080201"),n(t,"白云鄂博","101080202"),n(t,"满都拉","101080203"),n(t,"土默特右旗","101080204"),n(t,"固阳","101080205"),n(t,"达尔罕茂明安联合旗","101080206"),n(t,"石拐","101080207"),n(t,"乌海","101080301"),n(t,"集宁","101080401"),n(t,"卓资","101080402"),n(t,"化德","101080403"),n(t,"商都","101080404"),n(t,"希拉穆仁","101080405"),n(t,"兴和","101080406"),n(t,"凉城","101080407"),n(t,"察哈尔右翼前旗","101080408"),n(t,"察哈尔右翼中旗","101080409"),n(t,"察哈尔右翼后旗","101080410"),n(t,"四子王旗","101080411"),n(t,"丰镇","101080412"),n(t,"通辽","101080501"),n(t,"舍伯吐","101080502"),n(t,"科尔沁左翼中旗","101080503"),n(t,"科尔沁左翼后旗","101080504"),n(t,"青龙山","101080505"),n(t,"开鲁","101080506"),n(t,"库伦旗","101080507"),n(t,"奈曼旗","101080508"),n(t,"扎鲁特旗","101080509"),n(t,"高力板","101080510"),n(t,"巴雅尔吐胡硕","101080511"),n(t,"通辽钱家店","101080512"),n(t,"赤峰","101080601"),n(t,"赤峰郊区站","101080602"),n(t,"阿鲁科尔沁旗","101080603"),n(t,"浩尔吐","101080604"),n(t,"巴林左旗","101080605"),n(t,"巴林右旗","101080606"),n(t,"林西","101080607"),n(t,"克什克腾旗","101080608"),n(t,"翁牛特旗","101080609"),n(t,"岗子","101080610"),n(t,"喀喇沁旗","101080611"),n(t,"八里罕","101080612"),n(t,"宁城","101080613"),n(t,"敖汉旗","101080614"),n(t,"宝过图","101080615"),n(t,"鄂尔多斯","101080701"),n(t,"达拉特旗","101080703"),n(t,"准格尔旗","101080704"),n(t,"鄂托克前旗","101080705"),n(t,"河南","101080706"),n(t,"伊克乌素","101080707"),n(t,"鄂托克旗","101080708"),n(t,"杭锦旗","101080709"),n(t,"乌审旗","101080710"),n(t,"伊金霍洛旗","101080711"),n(t,"乌审召","101080712"),n(t,"东胜","101080713"),n(t,"临河","101080801"),n(t,"五原","101080802"),n(t,"磴口","101080803"),n(t,"乌拉特前旗","101080804"),n(t,"大佘太","101080805"),n(t,"乌拉特中旗","101080806"),n(t,"乌拉特后旗","101080807"),n(t,"海力素","101080808"),n(t,"那仁宝力格","101080809"),n(t,"杭锦后旗","101080810"),n(t,"巴盟农试站","101080811"),n(t,"锡林浩特","101080901"),n(t,"朝克乌拉","101080902"),n(t,"二连浩特","101080903"),n(t,"阿巴嘎旗","101080904"),n(t,"伊和郭勒","101080905"),n(t,"苏尼特左旗","101080906"),n(t,"苏尼特右旗","101080907"),n(t,"朱日和","101080908"),n(t,"东乌珠穆沁旗","101080909"),n(t,"西乌珠穆沁旗","101080910"),n(t,"太仆寺旗","101080911"),n(t,"镶黄旗","101080912"),n(t,"正镶白旗","101080913"),n(t,"正兰旗","101080914"),n(t,"多伦","101080915"),n(t,"博克图","101080916"),n(t,"乌拉盖","101080917"),n(t,"白日乌拉","101080918"),n(t,"那日图","101080919"),n(t,"呼伦贝尔","101081000"),n(t,"海拉尔","101081001"),n(t,"小二沟","101081002"),n(t,"阿荣旗","101081003"),n(t,"莫力达瓦旗","101081004"),n(t,"鄂伦春旗","101081005"),n(t,"鄂温克旗","101081006"),n(t,"陈巴尔虎旗","101081007"),n(t,"新巴尔虎左旗","101081008"),n(t,"新巴尔虎右旗","101081009"),n(t,"满洲里","101081010"),n(t,"牙克石","101081011"),n(t,"扎兰屯","101081012"),n(t,"额尔古纳","101081014"),n(t,"根河","101081015"),n(t,"图里河","101081016"),n(t,"乌兰浩特","101081101"),n(t,"阿尔山","101081102"),n(t,"科尔沁右翼中旗","101081103"),n(t,"胡尔勒","101081104"),n(t,"扎赉特旗","101081105"),n(t,"索伦","101081106"),n(t,"突泉","101081107"),n(t,"霍林郭勒","101081108"),n(t,"阿拉善左旗","101081201"),n(t,"阿拉善右旗","101081202"),n(t,"额济纳旗","101081203"),n(t,"拐子湖","101081204"),n(t,"吉兰太","101081205"),n(t,"锡林高勒","101081206"),n(t,"头道湖","101081207"),n(t,"中泉子","101081208"),n(t,"巴彦诺尔贡","101081209"),n(t,"雅布赖","101081210"),n(t,"乌斯太","101081211"),n(t,"孪井滩","101081212"),n(t,"石家庄","101090101"),n(t,"井陉","101090102"),n(t,"正定","101090103"),n(t,"栾城","101090104"),n(t,"行唐","101090105"),n(t,"灵寿","101090106"),n(t,"高邑","101090107"),n(t,"深泽","101090108"),n(t,"赞皇","101090109"),n(t,"无极","101090110"),n(t,"平山","101090111"),n(t,"元氏","101090112"),n(t,"赵县","101090113"),n(t,"辛集","101090114"),n(t,"藁城","101090115"),n(t,"晋洲","101090116"),n(t,"新乐","101090117"),n(t,"保定","101090201"),n(t,"满城","101090202"),n(t,"阜平","101090203"),n(t,"徐水","101090204"),n(t,"唐县","101090205"),n(t,"高阳","101090206"),n(t,"容城","101090207"),n(t,"紫荆关","101090208"),n(t,"涞源","101090209"),n(t,"望都","101090210"),n(t,"安新","101090211"),n(t,"易县","101090212"),n(t,"涞水","101090213"),n(t,"曲阳","101090214"),n(t,"蠡县","101090215"),n(t,"顺平","101090216"),n(t,"雄县","101090217"),n(t,"涿州","101090218"),n(t,"定州","101090219"),n(t,"安国","101090220"),n(t,"高碑店","101090221"),n(t,"张家口","101090301"),n(t,"宣化","101090302"),n(t,"张北","101090303"),n(t,"康保","101090304"),n(t,"沽源","101090305"),n(t,"尚义","101090306"),n(t,"蔚县","101090307"),n(t,"阳原","101090308"),n(t,"怀安","101090309"),n(t,"万全","101090310"),n(t,"怀来","101090311"),n(t,"涿鹿","101090312"),n(t,"赤城","101090313"),n(t,"崇礼","101090314"),n(t,"承德","101090402"),n(t,"承德县","101090403"),n(t,"兴隆","101090404"),n(t,"平泉","101090405"),n(t,"滦平","101090406"),n(t,"隆化","101090407"),n(t,"丰宁","101090408"),n(t,"宽城","101090409"),n(t,"围场","101090410"),n(t,"塞罕坎","101090411"),n(t,"唐山","101090501"),n(t,"丰南","101090502"),n(t,"丰润","101090503"),n(t,"滦县","101090504"),n(t,"滦南","101090505"),n(t,"乐亭","101090506"),n(t,"迁西","101090507"),n(t,"玉田","101090508"),n(t,"唐海","101090509"),n(t,"遵化","101090510"),n(t,"迁安","101090511"),n(t,"廊坊","101090601"),n(t,"固安","101090602"),n(t,"永清","101090603"),n(t,"香河","101090604"),n(t,"大城","101090605"),n(t,"文安","101090606"),n(t,"大厂","101090607"),n(t,"霸州","101090608"),n(t,"三河","101090609"),n(t,"沧州","101090701"),n(t,"青县","101090702"),n(t,"东光","101090703"),n(t,"海兴","101090704"),n(t,"盐山","101090705"),n(t,"肃宁","101090706"),n(t,"南皮","101090707"),n(t,"吴桥","101090708"),n(t,"献县","101090709"),n(t,"孟村","101090710"),n(t,"泊头","101090711"),n(t,"任丘","101090712"),n(t,"黄骅","101090713"),n(t,"河间","101090714"),n(t,"曹妃甸","101090715"),n(t,"衡水","101090801"),n(t,"枣强","101090802"),n(t,"武邑","101090803"),n(t,"武强","101090804"),n(t,"饶阳","101090805"),n(t,"安平","101090806"),n(t,"故城","101090807"),n(t,"景县","101090808"),n(t,"阜城","101090809"),n(t,"冀州","101090810"),n(t,"深州","101090811"),n(t,"邢台","101090901"),n(t,"临城","101090902"),n(t,"邢台县浆水","101090903"),n(t,"内邱","101090904"),n(t,"柏乡","101090905"),n(t,"隆尧","101090906"),n(t,"南和","101090907"),n(t,"宁晋","101090908"),n(t,"巨鹿","101090909"),n(t,"新河","101090910"),n(t,"广宗","101090911"),n(t,"平乡","101090912"),n(t,"威县","101090913"),n(t,"清河","101090914"),n(t,"临西","101090915"),n(t,"南宫","101090916"),n(t,"沙河","101090917"),n(t,"任县","101090918"),n(t,"邯郸","101091001"),n(t,"峰峰","101091002"),n(t,"临漳","101091003"),n(t,"成安","101091004"),n(t,"大名","101091005"),n(t,"涉县","101091006"),n(t,"磁县","101091007"),n(t,"肥乡","101091008"),n(t,"永年","101091009"),n(t,"邱县","101091010"),n(t,"鸡泽","101091011"),n(t,"广平","101091012"),n(t,"馆陶","101091013"),n(t,"魏县","101091014"),n(t,"曲周","101091015"),n(t,"武安","101091016"),n(t,"秦皇岛","101091101"),n(t,"青龙","101091102"),n(t,"昌黎","101091103"),n(t,"抚宁","101091104"),n(t,"卢龙","101091105"),n(t,"北戴河","101091106"),n(t,"太原","101100101"),n(t,"清徐","101100102"),n(t,"阳曲","101100103"),n(t,"娄烦","101100104"),n(t,"太原古交区","101100105"),n(t,"太原北郊","101100106"),n(t,"太原南郊","101100107"),n(t,"大同","101100201"),n(t,"阳高","101100202"),n(t,"大同县","101100203"),n(t,"天镇","101100204"),n(t,"广灵","101100205"),n(t,"灵邱","101100206"),n(t,"浑源","101100207"),n(t,"左云","101100208"),n(t,"阳泉","101100301"),n(t,"盂县","101100302"),n(t,"平定","101100303"),n(t,"晋中","101100401"),n(t,"榆次","101100402"),n(t,"榆社","101100403"),n(t,"左权","101100404"),n(t,"和顺","101100405"),n(t,"昔阳","101100406"),n(t,"寿阳","101100407"),n(t,"太谷","101100408"),n(t,"祁县","101100409"),n(t,"平遥","101100410"),n(t,"灵石","101100411"),n(t,"介休","101100412"),n(t,"长治","101100501"),n(t,"黎城","101100502"),n(t,"屯留","101100503"),n(t,"潞城","101100504"),n(t,"襄垣","101100505"),n(t,"平顺","101100506"),n(t,"武乡","101100507"),n(t,"沁县","101100508"),n(t,"长子","101100509"),n(t,"沁源","101100510"),n(t,"壶关","101100511"),n(t,"晋城","101100601"),n(t,"沁水","101100602"),n(t,"阳城","101100603"),n(t,"陵川","101100604"),n(t,"高平","101100605"),n(t,"临汾","101100701"),n(t,"曲沃","101100702"),n(t,"永和","101100703"),n(t,"隰县","101100704"),n(t,"大宁","101100705"),n(t,"吉县","101100706"),n(t,"襄汾","101100707"),n(t,"蒲县","101100708"),n(t,"汾西","101100709"),n(t,"洪洞","101100710"),n(t,"霍州","101100711"),n(t,"乡宁","101100712"),n(t,"翼城","101100713"),n(t,"侯马","101100714"),n(t,"浮山","101100715"),n(t,"安泽","101100716"),n(t,"古县","101100717"),n(t,"运城","101100801"),n(t,"临猗","101100802"),n(t,"稷山","101100803"),n(t,"万荣","101100804"),n(t,"河津","101100805"),n(t,"新绛","101100806"),n(t,"绛县","101100807"),n(t,"闻喜","101100808"),n(t,"垣曲","101100809"),n(t,"永济","101100810"),n(t,"芮城","101100811"),n(t,"夏县","101100812"),n(t,"平陆","101100813"),n(t,"朔州","101100901"),n(t,"平鲁","101100902"),n(t,"山阴","101100903"),n(t,"右玉","101100904"),n(t,"应县","101100905"),n(t,"怀仁","101100906"),n(t,"忻州","101101001"),n(t,"定襄","101101002"),n(t,"五台县豆村","101101003"),n(t,"河曲","101101004"),n(t,"偏关","101101005"),n(t,"神池","101101006"),n(t,"宁武","101101007"),n(t,"代县","101101008"),n(t,"繁峙","101101009"),n(t,"五台山","101101010"),n(t,"保德","101101011"),n(t,"静乐","101101012"),n(t,"岢岚","101101013"),n(t,"五寨","101101014"),n(t,"原平","101101015"),n(t,"吕梁","101101100"),n(t,"离石","101101101"),n(t,"临县","101101102"),n(t,"兴县","101101103"),n(t,"岚县","101101104"),n(t,"柳林","101101105"),n(t,"石楼","101101106"),n(t,"方山","101101107"),n(t,"交口","101101108"),n(t,"中阳","101101109"),n(t,"孝义","101101110"),n(t,"汾阳","101101111"),n(t,"文水","101101112"),n(t,"交城","101101113"),n(t,"西安","101110101"),n(t,"长安","101110102"),n(t,"临潼","101110103"),n(t,"蓝田","101110104"),n(t,"周至","101110105"),n(t,"户县","101110106"),n(t,"高陵","101110107"),n(t,"杨凌","101110108"),n(t,"咸阳","101110200"),n(t,"三原","101110201"),n(t,"礼泉","101110202"),n(t,"永寿","101110203"),n(t,"淳化","101110204"),n(t,"泾阳","101110205"),n(t,"武功","101110206"),n(t,"乾县","101110207"),n(t,"彬县","101110208"),n(t,"长武","101110209"),n(t,"旬邑","101110210"),n(t,"兴平","101110211"),n(t,"延安","101110300"),n(t,"延长","101110301"),n(t,"延川","101110302"),n(t,"子长","101110303"),n(t,"宜川","101110304"),n(t,"富县","101110305"),n(t,"志丹","101110306"),n(t,"安塞","101110307"),n(t,"甘泉","101110308"),n(t,"洛川","101110309"),n(t,"黄陵","101110310"),n(t,"黄龙","101110311"),n(t,"吴起","101110312"),n(t,"榆林","101110401"),n(t,"府谷","101110402"),n(t,"神木","101110403"),n(t,"佳县","101110404"),n(t,"定边","101110405"),n(t,"靖边","101110406"),n(t,"横山","101110407"),n(t,"米脂","101110408"),n(t,"子洲","101110409"),n(t,"绥德","101110410"),n(t,"吴堡","101110411"),n(t,"清涧","101110412"),n(t,"渭南","101110501"),n(t,"华县","101110502"),n(t,"潼关","101110503"),n(t,"大荔","101110504"),n(t,"白水","101110505"),n(t,"富平","101110506"),n(t,"蒲城","101110507"),n(t,"澄城","101110508"),n(t,"合阳","101110509"),n(t,"韩城","101110510"),n(t,"华阴","101110511"),n(t,"华山","101110512"),n(t,"商洛","101110601"),n(t,"洛南","101110602"),n(t,"柞水","101110603"),n(t,"镇安","101110605"),n(t,"丹凤","101110606"),n(t,"商南","101110607"),n(t,"山阳","101110608"),n(t,"安康","101110701"),n(t,"紫阳","101110702"),n(t,"石泉","101110703"),n(t,"汉阴","101110704"),n(t,"旬阳","101110705"),n(t,"岚皋","101110706"),n(t,"平利","101110707"),n(t,"白河","101110708"),n(t,"镇坪","101110709"),n(t,"宁陕","101110710"),n(t,"汉中","101110801"),n(t,"略阳","101110802"),n(t,"勉县","101110803"),n(t,"留坝","101110804"),n(t,"洋县","101110805"),n(t,"城固","101110806"),n(t,"西乡","101110807"),n(t,"佛坪","101110808"),n(t,"宁强","101110809"),n(t,"南郑","101110810"),n(t,"镇巴","101110811"),n(t,"宝鸡","101110901"),n(t,"宝鸡县","101110902"),n(t,"千阳","101110903"),n(t,"麟游","101110904"),n(t,"岐山","101110905"),n(t,"凤翔","101110906"),n(t,"扶风","101110907"),n(t,"眉县","101110908"),n(t,"太白","101110909"),n(t,"凤县","101110910"),n(t,"陇县","101110911"),n(t,"铜川","101111001"),n(t,"耀县","101111002"),n(t,"宜君","101111003"),n(t,"济南","101120101"),n(t,"长清","101120102"),n(t,"商河","101120103"),n(t,"章丘","101120104"),n(t,"平阴","101120105"),n(t,"济阳","101120106"),n(t,"青岛","101120201"),n(t,"崂山","101120202"),n(t,"潮连岛","101120203"),n(t,"即墨","101120204"),n(t,"胶州","101120205"),n(t,"胶南","101120206"),n(t,"莱西","101120207"),n(t,"平度","101120208"),n(t,"淄博","101120301"),n(t,"淄川","101120302"),n(t,"博山","101120303"),n(t,"高青","101120304"),n(t,"周村","101120305"),n(t,"沂源","101120306"),n(t,"桓台","101120307"),n(t,"临淄","101120308"),n(t,"德州","101120401"),n(t,"武城","101120402"),n(t,"临邑","101120403"),n(t,"陵县","101120404"),n(t,"齐河","101120405"),n(t,"乐陵","101120406"),n(t,"庆云","101120407"),n(t,"平原","101120408"),n(t,"宁津","101120409"),n(t,"夏津","101120410"),n(t,"禹城","101120411"),n(t,"烟台","101120501"),n(t,"莱州","101120502"),n(t,"长岛","101120503"),n(t,"蓬莱","101120504"),n(t,"龙口","101120505"),n(t,"招远","101120506"),n(t,"栖霞","101120507"),n(t,"福山","101120508"),n(t,"牟平","101120509"),n(t,"莱阳","101120510"),n(t,"海阳","101120511"),n(t,"千里岩","101120512"),n(t,"潍坊","101120601"),n(t,"青州","101120602"),n(t,"寿光","101120603"),n(t,"临朐","101120604"),n(t,"昌乐","101120605"),n(t,"昌邑","101120606"),n(t,"安丘","101120607"),n(t,"高密","101120608"),n(t,"诸城","101120609"),n(t,"济宁","101120701"),n(t,"嘉祥","101120702"),n(t,"微山","101120703"),n(t,"鱼台","101120704"),n(t,"兖州","101120705"),n(t,"金乡","101120706"),n(t,"汶上","101120707"),n(t,"泗水","101120708"),n(t,"梁山","101120709"),n(t,"曲阜","101120710"),n(t,"邹城","101120711"),n(t,"泰安","101120801"),n(t,"新泰","101120802"),n(t,"泰山","101120803"),n(t,"肥城","101120804"),n(t,"东平","101120805"),n(t,"宁阳","101120806"),n(t,"临沂","101120901"),n(t,"莒南","101120902"),n(t,"沂南","101120903"),n(t,"苍山","101120904"),n(t,"临沭","101120905"),n(t,"郯城","101120906"),n(t,"蒙阴","101120907"),n(t,"平邑","101120908"),n(t,"费县","101120909"),n(t,"沂水","101120910"),n(t,"马站","101120911"),n(t,"菏泽","101121001"),n(t,"鄄城","101121002"),n(t,"郓城","101121003"),n(t,"东明","101121004"),n(t,"定陶","101121005"),n(t,"巨野","101121006"),n(t,"曹县","101121007"),n(t,"成武","101121008"),n(t,"单县","101121009"),n(t,"滨州","101121101"),n(t,"博兴","101121102"),n(t,"无棣","101121103"),n(t,"阳信","101121104"),n(t,"惠民","101121105"),n(t,"沾化","101121106"),n(t,"邹平","101121107"),n(t,"东营","101121201"),n(t,"河口","101121202"),n(t,"垦利","101121203"),n(t,"利津","101121204"),n(t,"广饶","101121205"),n(t,"威海","101121301"),n(t,"文登","101121302"),n(t,"荣成","101121303"),n(t,"乳山","101121304"),n(t,"成山头","101121305"),n(t,"石岛","101121306"),n(t,"枣庄","101121401"),n(t,"薛城","101121402"),n(t,"峄城","101121403"),n(t,"台儿庄","101121404"),n(t,"滕州","101121405"),n(t,"日照","101121501"),n(t,"五莲","101121502"),n(t,"莒县","101121503"),n(t,"莱芜","101121601"),n(t,"聊城","101121701"),n(t,"冠县","101121702"),n(t,"阳谷","101121703"),n(t,"高唐","101121704"),n(t,"茌平","101121705"),n(t,"东阿","101121706"),n(t,"临清","101121707"),n(t,"朝城","101121708"),n(t,"莘县","101121709"),n(t,"乌鲁木齐","101130101"),n(t,"蔡家湖","101130102"),n(t,"小渠子","101130103"),n(t,"巴仑台","101130104"),n(t,"达坂城","101130105"),n(t,"十三间房气象站","101130106"),n(t,"天山大西沟","101130107"),n(t,"乌鲁木齐牧试站","101130108"),n(t,"天池","101130109"),n(t,"白杨沟","101130110"),n(t,"克拉玛依","101130201"),n(t,"石河子","101130301"),n(t,"炮台","101130302"),n(t,"莫索湾","101130303"),n(t,"乌兰乌苏","101130304"),n(t,"昌吉","101130401"),n(t,"呼图壁","101130402"),n(t,"米泉","101130403"),n(t,"阜康","101130404"),n(t,"吉木萨尔","101130405"),n(t,"奇台","101130406"),n(t,"玛纳斯","101130407"),n(t,"木垒","101130408"),n(t,"北塔山","101130409"),n(t,"吐鲁番","101130501"),n(t,"托克逊","101130502"),n(t,"吐鲁番东坎","101130503"),n(t,"鄯善","101130504"),n(t,"红柳河","101130505"),n(t,"库尔勒","101130601"),n(t,"轮台","101130602"),n(t,"尉犁","101130603"),n(t,"若羌","101130604"),n(t,"且末","101130605"),n(t,"和静","101130606"),n(t,"焉耆","101130607"),n(t,"和硕","101130608"),n(t,"库米什","101130609"),n(t,"巴音布鲁克","101130610"),n(t,"铁干里克","101130611"),n(t,"博湖","101130612"),n(t,"塔中","101130613"),n(t,"阿拉尔","101130701"),n(t,"阿克苏","101130801"),n(t,"乌什","101130802"),n(t,"温宿","101130803"),n(t,"拜城","101130804"),n(t,"新和","101130805"),n(t,"沙雅","101130806"),n(t,"库车","101130807"),n(t,"柯坪","101130808"),n(t,"阿瓦提","101130809"),n(t,"喀什","101130901"),n(t,"英吉沙","101130902"),n(t,"塔什库尔干","101130903"),n(t,"麦盖提","101130904"),n(t,"莎车","101130905"),n(t,"叶城","101130906"),n(t,"泽普","101130907"),n(t,"巴楚","101130908"),n(t,"岳普湖","101130909"),n(t,"伽师","101130910"),n(t,"伊宁","101131001"),n(t,"察布查尔","101131002"),n(t,"尼勒克","101131003"),n(t,"伊宁县","101131004"),n(t,"巩留","101131005"),n(t,"新源","101131006"),n(t,"昭苏","101131007"),n(t,"特克斯","101131008"),n(t,"霍城","101131009"),n(t,"霍尔果斯","101131010"),n(t,"塔城","101131101"),n(t,"裕民","101131102"),n(t,"额敏","101131103"),n(t,"和布克赛尔","101131104"),n(t,"托里","101131105"),n(t,"乌苏","101131106"),n(t,"沙湾","101131107"),n(t,"和丰","101131108"),n(t,"哈密","101131201"),n(t,"沁城","101131202"),n(t,"巴里坤","101131203"),n(t,"伊吾","101131204"),n(t,"淖毛湖","101131205"),n(t,"和田","101131301"),n(t,"皮山","101131302"),n(t,"策勒","101131303"),n(t,"墨玉","101131304"),n(t,"洛浦","101131305"),n(t,"民丰","101131306"),n(t,"于田","101131307"),n(t,"阿勒泰","101131401"),n(t,"哈巴河","101131402"),n(t,"一八五团","101131403"),n(t,"黑山头","101131404"),n(t,"吉木乃","101131405"),n(t,"布尔津","101131406"),n(t,"福海","101131407"),n(t,"富蕴","101131408"),n(t,"青河","101131409"),n(t,"安德河","101131410"),n(t,"阿图什","101131501"),n(t,"乌恰","101131502"),n(t,"阿克陶","101131503"),n(t,"阿合奇","101131504"),n(t,"吐尔尕特","101131505"),n(t,"博乐","101131601"),n(t,"温泉","101131602"),n(t,"精河","101131603"),n(t,"阿拉山口","101131606"),n(t,"拉萨","101140101"),n(t,"当雄","101140102"),n(t,"尼木","101140103"),n(t,"墨竹贡卡","101140104"),n(t,"日喀则","101140201"),n(t,"拉孜","101140202"),n(t,"南木林","101140203"),n(t,"聂拉木","101140204"),n(t,"定日","101140205"),n(t,"江孜","101140206"),n(t,"帕里","101140207"),n(t,"山南","101140301"),n(t,"贡嘎","101140302"),n(t,"琼结","101140303"),n(t,"加查","101140304"),n(t,"浪卡子","101140305"),n(t,"错那","101140306"),n(t,"隆子","101140307"),n(t,"泽当","101140308"),n(t,"林芝","101140401"),n(t,"波密","101140402"),n(t,"米林","101140403"),n(t,"察隅","101140404"),n(t,"昌都","101140501"),n(t,"丁青","101140502"),n(t,"类乌齐","101140503"),n(t,"洛隆","101140504"),n(t,"左贡","101140505"),n(t,"芒康","101140506"),n(t,"八宿","101140507"),n(t,"那曲","101140601"),n(t,"嘉黎","101140603"),n(t,"班戈","101140604"),n(t,"安多","101140605"),n(t,"索县","101140606"),n(t,"比如","101140607"),n(t,"阿里","101140701"),n(t,"改则","101140702"),n(t,"申扎","101140703"),n(t,"狮泉河","101140704"),n(t,"普兰","101140705"),n(t,"西宁","101150101"),n(t,"大通","101150102"),n(t,"湟源","101150103"),n(t,"湟中","101150104"),n(t,"铁卜加","101150105"),n(t,"铁卜加寺","101150106"),n(t,"中心站","101150107"),n(t,"海东","101150201"),n(t,"乐都","101150202"),n(t,"民和","101150203"),n(t,"互助","101150204"),n(t,"化隆","101150205"),n(t,"循化","101150206"),n(t,"冷湖","101150207"),n(t,"平安","101150208"),n(t,"黄南","101150301"),n(t,"尖扎","101150302"),n(t,"泽库","101150303"),n(t,"河南","101150304"),n(t,"海南","101150401"),n(t,"江西沟","101150402"),n(t,"贵德","101150404"),n(t,"河卡","101150405"),n(t,"兴海","101150406"),n(t,"贵南","101150407"),n(t,"同德","101150408"),n(t,"共和","101150409"),n(t,"果洛","101150501"),n(t,"班玛","101150502"),n(t,"甘德","101150503"),n(t,"达日","101150504"),n(t,"久治","101150505"),n(t,"玛多","101150506"),n(t,"清水河","101150507"),n(t,"玛沁","101150508"),n(t,"玉树","101150601"),n(t,"托托河","101150602"),n(t,"治多","101150603"),n(t,"杂多","101150604"),n(t,"囊谦","101150605"),n(t,"曲麻莱","101150606"),n(t,"海西","101150701"),n(t,"格尔木","101150702"),n(t,"察尔汉","101150703"),n(t,"野牛沟","101150704"),n(t,"五道梁","101150705"),n(t,"小灶火","101150706"),n(t,"天峻","101150708"),n(t,"乌兰","101150709"),n(t,"都兰","101150710"),n(t,"诺木洪","101150711"),n(t,"茫崖","101150712"),n(t,"大柴旦","101150713"),n(t,"茶卡","101150714"),n(t,"香日德","101150715"),n(t,"德令哈","101150716"),n(t,"海北","101150801"),n(t,"门源","101150802"),n(t,"祁连","101150803"),n(t,"海晏","101150804"),n(t,"托勒","101150805"),n(t,"刚察","101150806"),n(t,"兰州","101160101"),n(t,"皋兰","101160102"),n(t,"永登","101160103"),n(t,"榆中","101160104"),n(t,"定西","101160201"),n(t,"通渭","101160202"),n(t,"陇西","101160203"),n(t,"渭源","101160204"),n(t,"临洮","101160205"),n(t,"漳县","101160206"),n(t,"岷县","101160207"),n(t,"安定","101160208"),n(t,"平凉","101160301"),n(t,"泾川","101160302"),n(t,"灵台","101160303"),n(t,"崇信","101160304"),n(t,"华亭","101160305"),n(t,"庄浪","101160306"),n(t,"静宁","101160307"),n(t,"崆峒","101160308"),n(t,"庆阳","101160401"),n(t,"西峰","101160402"),n(t,"环县","101160403"),n(t,"华池","101160404"),n(t,"合水","101160405"),n(t,"正宁","101160406"),n(t,"宁县","101160407"),n(t,"镇原","101160408"),n(t,"庆城","101160409"),n(t,"武威","101160501"),n(t,"民勤","101160502"),n(t,"古浪","101160503"),n(t,"乌鞘岭","101160504"),n(t,"天祝","101160505"),n(t,"金昌","101160601"),n(t,"永昌","101160602"),n(t,"张掖","101160701"),n(t,"肃南","101160702"),n(t,"民乐","101160703"),n(t,"临泽","101160704"),n(t,"高台","101160705"),n(t,"山丹","101160706"),n(t,"酒泉","101160801"),n(t,"鼎新","101160802"),n(t,"金塔","101160803"),n(t,"马鬃山","101160804"),n(t,"瓜州","101160805"),n(t,"肃北","101160806"),n(t,"玉门镇","101160807"),n(t,"敦煌","101160808"),n(t,"天水","101160901"),n(t,"北道区","101160902"),n(t,"清水","101160903"),n(t,"秦安","101160904"),n(t,"甘谷","101160905"),n(t,"武山","101160906"),n(t,"张家川","101160907"),n(t,"麦积","101160908"),n(t,"武都","101161001"),n(t,"成县","101161002"),n(t,"文县","101161003"),n(t,"宕昌","101161004"),n(t,"康县","101161005"),n(t,"西和","101161006"),n(t,"礼县","101161007"),n(t,"徽县","101161008"),n(t,"两当","101161009"),n(t,"临夏","101161101"),n(t,"康乐","101161102"),n(t,"永靖","101161103"),n(t,"广河","101161104"),n(t,"和政","101161105"),n(t,"东乡","101161106"),n(t,"合作","101161201"),n(t,"临潭","101161202"),n(t,"卓尼","101161203"),n(t,"舟曲","101161204"),n(t,"迭部","101161205"),n(t,"玛曲","101161206"),n(t,"碌曲","101161207"),n(t,"夏河","101161208"),n(t,"白银","101161301"),n(t,"靖远","101161302"),n(t,"会宁","101161303"),n(t,"华家岭","101161304"),n(t,"景泰","101161305"),n(t,"银川","101170101"),n(t,"永宁","101170102"),n(t,"灵武","101170103"),n(t,"贺兰","101170104"),n(t,"石嘴山","101170201"),n(t,"惠农","101170202"),n(t,"平罗","101170203"),n(t,"陶乐","101170204"),n(t,"石炭井","101170205"),n(t,"大武口","101170206"),n(t,"吴忠","101170301"),n(t,"同心","101170302"),n(t,"盐池","101170303"),n(t,"韦州","101170304"),n(t,"麻黄山","101170305"),n(t,"青铜峡","101170306"),n(t,"固原","101170401"),n(t,"西吉","101170402"),n(t,"隆德","101170403"),n(t,"泾源","101170404"),n(t,"六盘山","101170405"),n(t,"彭阳","101170406"),n(t,"中卫","101170501"),n(t,"中宁","101170502"),n(t,"兴仁堡","101170503"),n(t,"海原","101170504"),n(t,"郑州","101180101"),n(t,"巩义","101180102"),n(t,"荥阳","101180103"),n(t,"登封","101180104"),n(t,"新密","101180105"),n(t,"新郑","101180106"),n(t,"中牟","101180107"),n(t,"郑州农试站","101180108"),n(t,"安阳","101180201"),n(t,"汤阴","101180202"),n(t,"滑县","101180203"),n(t,"内黄","101180204"),n(t,"林州","101180205"),n(t,"新乡","101180301"),n(t,"获嘉","101180302"),n(t,"原阳","101180303"),n(t,"辉县","101180304"),n(t,"卫辉","101180305"),n(t,"延津","101180306"),n(t,"封丘","101180307"),n(t,"长垣","101180308"),n(t,"许昌","101180401"),n(t,"鄢陵","101180402"),n(t,"襄城","101180403"),n(t,"长葛","101180404"),n(t,"禹州","101180405"),n(t,"平顶山","101180501"),n(t,"郏县","101180502"),n(t,"宝丰","101180503"),n(t,"汝州","101180504"),n(t,"叶县","101180505"),n(t,"舞钢","101180506"),n(t,"鲁山","101180507"),n(t,"信阳","101180601"),n(t,"息县","101180602"),n(t,"罗山","101180603"),n(t,"光山","101180604"),n(t,"新县","101180605"),n(t,"淮滨","101180606"),n(t,"潢川","101180607"),n(t,"固始","101180608"),n(t,"商城","101180609"),n(t,"鸡公山","101180610"),n(t,"信阳地区农试站","101180611"),n(t,"南阳","101180701"),n(t,"南召","101180702"),n(t,"方城","101180703"),n(t,"社旗","101180704"),n(t,"西峡","101180705"),n(t,"内乡","101180706"),n(t,"镇平","101180707"),n(t,"淅川","101180708"),n(t,"新野","101180709"),n(t,"唐河","101180710"),n(t,"邓州","101180711"),n(t,"桐柏","101180712"),n(t,"开封","101180801"),n(t,"杞县","101180802"),n(t,"尉氏","101180803"),n(t,"通许","101180804"),n(t,"兰考","101180805"),n(t,"洛阳","101180901"),n(t,"新安","101180902"),n(t,"孟津","101180903"),n(t,"宜阳","101180904"),n(t,"洛宁","101180905"),n(t,"伊川","101180906"),n(t,"嵩县","101180907"),n(t,"偃师","101180908"),n(t,"栾川","101180909"),n(t,"汝阳","101180910"),n(t,"商丘","101181001"),n(t,"睢阳区","101181002"),n(t,"睢县","101181003"),n(t,"民权","101181004"),n(t,"虞城","101181005"),n(t,"柘城","101181006"),n(t,"宁陵","101181007"),n(t,"夏邑","101181008"),n(t,"永城","101181009"),n(t,"焦作","101181101"),n(t,"修武","101181102"),n(t,"武陟","101181103"),n(t,"沁阳","101181104"),n(t,"博爱","101181106"),n(t,"温县","101181107"),n(t,"孟州","101181108"),n(t,"鹤壁","101181201"),n(t,"浚县","101181202"),n(t,"淇县","101181203"),n(t,"濮阳","101181301"),n(t,"台前","101181302"),n(t,"南乐","101181303"),n(t,"清丰","101181304"),n(t,"范县","101181305"),n(t,"周口","101181401"),n(t,"扶沟","101181402"),n(t,"太康","101181403"),n(t,"淮阳","101181404"),n(t,"西华","101181405"),n(t,"商水","101181406"),n(t,"项城","101181407"),n(t,"郸城","101181408"),n(t,"鹿邑","101181409"),n(t,"沈丘","101181410"),n(t,"黄泛区","101181411"),n(t,"漯河","101181501"),n(t,"临颍","101181502"),n(t,"舞阳","101181503"),n(t,"驻马店","101181601"),n(t,"西平","101181602"),n(t,"遂平","101181603"),n(t,"上蔡","101181604"),n(t,"汝南","101181605"),n(t,"泌阳","101181606"),n(t,"平舆","101181607"),n(t,"新蔡","101181608"),n(t,"确山","101181609"),n(t,"正阳","101181610"),n(t,"三门峡","101181701"),n(t,"灵宝","101181702"),n(t,"渑池","101181703"),n(t,"卢氏","101181704"),n(t,"济源","101181801"),n(t,"南京","101190101"),n(t,"溧水","101190102"),n(t,"高淳","101190103"),n(t,"江宁","101190104"),n(t,"六合","101190105"),n(t,"江浦","101190106"),n(t,"浦口","101190107"),n(t,"无锡","101190201"),n(t,"江阴","101190202"),n(t,"宜兴","101190203"),n(t,"镇江","101190301"),n(t,"丹阳","101190302"),n(t,"扬中","101190303"),n(t,"句容","101190304"),n(t,"丹徒","101190305"),n(t,"苏州","101190401"),n(t,"常熟","101190402"),n(t,"张家港","101190403"),n(t,"昆山","101190404"),n(t,"吴县东山","101190405"),n(t,"吴县","101190406"),n(t,"吴江","101190407"),n(t,"太仓","101190408"),n(t,"南通","101190501"),n(t,"海安","101190502"),n(t,"如皋","101190503"),n(t,"如东","101190504"),n(t,"吕泗","101190505"),n(t,"吕泗渔场","101190506"),n(t,"启东","101190507"),n(t,"海门","101190508"),n(t,"通州","101190509"),n(t,"扬州","101190601"),n(t,"宝应","101190602"),n(t,"仪征","101190603"),n(t,"高邮","101190604"),n(t,"江都","101190605"),n(t,"邗江","101190606"),n(t,"盐城","101190701"),n(t,"响水","101190702"),n(t,"滨海","101190703"),n(t,"阜宁","101190704"),n(t,"射阳","101190705"),n(t,"建湖","101190706"),n(t,"东台","101190707"),n(t,"大丰","101190708"),n(t,"盐都","101190709"),n(t,"徐州","101190801"),n(t,"徐州农试站","101190802"),n(t,"丰县","101190803"),n(t,"沛县","101190804"),n(t,"邳州","101190805"),n(t,"睢宁","101190806"),n(t,"新沂","101190807"),n(t,"淮安","101190901"),n(t,"金湖","101190902"),n(t,"盱眙","101190903"),n(t,"洪泽","101190904"),n(t,"涟水","101190905"),n(t,"淮阴县","101190906"),n(t,"淮阴","101190907"),n(t,"楚州","101190908"),n(t,"连云港","101191001"),n(t,"东海","101191002"),n(t,"赣榆","101191003"),n(t,"灌云","101191004"),n(t,"灌南","101191005"),n(t,"西连岛","101191006"),n(t,"燕尾港","101191007"),n(t,"常州","101191101"),n(t,"溧阳","101191102"),n(t,"金坛","101191103"),n(t,"泰州","101191201"),n(t,"兴化","101191202"),n(t,"泰兴","101191203"),n(t,"姜堰","101191204"),n(t,"靖江","101191205"),n(t,"宿迁","101191301"),n(t,"沭阳","101191302"),n(t,"泗阳","101191303"),n(t,"泗洪","101191304"),n(t,"武汉","101200101"),n(t,"蔡甸","101200102"),n(t,"黄陂","101200103"),n(t,"新洲","101200104"),n(t,"江夏","101200105"),n(t,"襄樊","101200201"),n(t,"襄阳","101200202"),n(t,"保康","101200203"),n(t,"南漳","101200204"),n(t,"宜城","101200205"),n(t,"老河口","101200206"),n(t,"谷城","101200207"),n(t,"枣阳","101200208"),n(t,"鄂州","101200301"),n(t,"孝感","101200401"),n(t,"安陆","101200402"),n(t,"云梦","101200403"),n(t,"大悟","101200404"),n(t,"应城","101200405"),n(t,"汉川","101200406"),n(t,"黄冈","101200501"),n(t,"红安","101200502"),n(t,"麻城","101200503"),n(t,"罗田","101200504"),n(t,"英山","101200505"),n(t,"浠水","101200506"),n(t,"蕲春","101200507"),n(t,"黄梅","101200508"),n(t,"武穴","101200509"),n(t,"黄石","101200601"),n(t,"大冶","101200602"),n(t,"阳新","101200603"),n(t,"咸宁","101200701"),n(t,"赤壁","101200702"),n(t,"嘉鱼","101200703"),n(t,"崇阳","101200704"),n(t,"通城","101200705"),n(t,"通山","101200706"),n(t,"荆州","101200801"),n(t,"江陵","101200802"),n(t,"公安","101200803"),n(t,"石首","101200804"),n(t,"监利","101200805"),n(t,"洪湖","101200806"),n(t,"松滋","101200807"),n(t,"宜昌","101200901"),n(t,"远安","101200902"),n(t,"秭归","101200903"),n(t,"兴山","101200904"),n(t,"宜昌县","101200905"),n(t,"五峰","101200906"),n(t,"当阳","101200907"),n(t,"长阳","101200908"),n(t,"宜都","101200909"),n(t,"枝江","101200910"),n(t,"三峡","101200911"),n(t,"夷陵","101200912"),n(t,"恩施","101201001"),n(t,"利川","101201002"),n(t,"建始","101201003"),n(t,"咸丰","101201004"),n(t,"宣恩","101201005"),n(t,"鹤峰","101201006"),n(t,"来凤","101201007"),n(t,"巴东","101201008"),n(t,"绿葱坡","101201009"),n(t,"十堰","101201101"),n(t,"竹溪","101201102"),n(t,"郧西","101201103"),n(t,"郧县","101201104"),n(t,"竹山","101201105"),n(t,"房县","101201106"),n(t,"丹江口","101201107"),n(t,"神农架","101201201"),n(t,"随州","101201301"),n(t,"广水","101201302"),n(t,"荆门","101201401"),n(t,"钟祥","101201402"),n(t,"京山","101201403"),n(t,"天门","101201501"),n(t,"仙桃","101201601"),n(t,"潜江","101201701"),n(t,"杭州","101210101"),n(t,"萧山","101210102"),n(t,"桐庐","101210103"),n(t,"淳安","101210104"),n(t,"建德","101210105"),n(t,"余杭","101210106"),n(t,"临安","101210107"),n(t,"富阳","101210108"),n(t,"湖州","101210201"),n(t,"长兴","101210202"),n(t,"安吉","101210203"),n(t,"德清","101210204"),n(t,"嘉兴","101210301"),n(t,"嘉善","101210302"),n(t,"海宁","101210303"),n(t,"桐乡","101210304"),n(t,"平湖","101210305"),n(t,"海盐","101210306"),n(t,"宁波","101210401"),n(t,"慈溪","101210403"),n(t,"余姚","101210404"),n(t,"奉化","101210405"),n(t,"象山","101210406"),n(t,"石浦","101210407"),n(t,"宁海","101210408"),n(t,"鄞县","101210409"),n(t,"北仑","101210410"),n(t,"鄞州","101210411"),n(t,"镇海","101210412"),n(t,"绍兴","101210501"),n(t,"诸暨","101210502"),n(t,"上虞","101210503"),n(t,"新昌","101210504"),n(t,"嵊州","101210505"),n(t,"台州","101210601"),n(t,"括苍山","101210602"),n(t,"玉环","101210603"),n(t,"三门","101210604"),n(t,"天台","101210605"),n(t,"仙居","101210606"),n(t,"温岭","101210607"),n(t,"大陈","101210608"),n(t,"洪家","101210609"),n(t,"温州","101210701"),n(t,"泰顺","101210702"),n(t,"文成","101210703"),n(t,"平阳","101210704"),n(t,"瑞安","101210705"),n(t,"洞头","101210706"),n(t,"乐清","101210707"),n(t,"永嘉","101210708"),n(t,"苍南","101210709"),n(t,"丽水","101210801"),n(t,"遂昌","101210802"),n(t,"龙泉","101210803"),n(t,"缙云","101210804"),n(t,"青田","101210805"),n(t,"云和","101210806"),n(t,"庆元","101210807"),n(t,"金华","101210901"),n(t,"浦江","101210902"),n(t,"兰溪","101210903"),n(t,"义乌","101210904"),n(t,"东阳","101210905"),n(t,"武义","101210906"),n(t,"永康","101210907"),n(t,"磐安","101210908"),n(t,"衢州","101211001"),n(t,"常山","101211002"),n(t,"开化","101211003"),n(t,"龙游","101211004"),n(t,"江山","101211005"),n(t,"舟山","101211101"),n(t,"嵊泗","101211102"),n(t,"嵊山","101211103"),n(t,"岱山","101211104"),n(t,"普陀","101211105"),n(t,"定海","101211106"),n(t,"合肥","101220101"),n(t,"长丰","101220102"),n(t,"肥东","101220103"),n(t,"肥西","101220104"),n(t,"蚌埠","101220201"),n(t,"怀远","101220202"),n(t,"固镇","101220203"),n(t,"五河","101220204"),n(t,"芜湖","101220301"),n(t,"繁昌","101220302"),n(t,"芜湖县","101220303"),n(t,"南陵","101220304"),n(t,"淮南","101220401"),n(t,"凤台","101220402"),n(t,"马鞍山","101220501"),n(t,"当涂","101220502"),n(t,"安庆","101220601"),n(t,"枞阳","101220602"),n(t,"太湖","101220603"),n(t,"潜山","101220604"),n(t,"怀宁","101220605"),n(t,"宿松","101220606"),n(t,"望江","101220607"),n(t,"岳西","101220608"),n(t,"桐城","101220609"),n(t,"宿州","101220701"),n(t,"砀山","101220702"),n(t,"灵璧","101220703"),n(t,"泗县","101220704"),n(t,"萧县","101220705"),n(t,"阜阳","101220801"),n(t,"阜南","101220802"),n(t,"颍上","101220803"),n(t,"临泉","101220804"),n(t,"界首","101220805"),n(t,"太和","101220806"),n(t,"亳州","101220901"),n(t,"涡阳","101220902"),n(t,"利辛","101220903"),n(t,"蒙城","101220904"),n(t,"黄山站","101221001"),n(t,"黄山区","101221002"),n(t,"屯溪","101221003"),n(t,"祁门","101221004"),n(t,"黟县","101221005"),n(t,"歙县","101221006"),n(t,"休宁","101221007"),n(t,"黄山市","101221008"),n(t,"滁州","101221101"),n(t,"凤阳","101221102"),n(t,"明光","101221103"),n(t,"定远","101221104"),n(t,"全椒","101221105"),n(t,"来安","101221106"),n(t,"天长","101221107"),n(t,"淮北","101221201"),n(t,"濉溪","101221202"),n(t,"铜陵","101221301"),n(t,"宣城","101221401"),n(t,"泾县","101221402"),n(t,"旌德","101221403"),n(t,"宁国","101221404"),n(t,"绩溪","101221405"),n(t,"广德","101221406"),n(t,"郎溪","101221407"),n(t,"六安","101221501"),n(t,"霍邱","101221502"),n(t,"寿县","101221503"),n(t,"南溪","101221504"),n(t,"金寨","101221505"),n(t,"霍山","101221506"),n(t,"舒城","101221507"),n(t,"巢湖","101221601"),n(t,"庐江","101221602"),n(t,"无为","101221603"),n(t,"含山","101221604"),n(t,"和县","101221605"),n(t,"池州","101221701"),n(t,"东至","101221702"),n(t,"青阳","101221703"),n(t,"九华山","101221704"),n(t,"石台","101221705"),n(t,"福州","101230101"),n(t,"闽清","101230102"),n(t,"闽侯","101230103"),n(t,"罗源","101230104"),n(t,"连江","101230105"),n(t,"马祖","101230106"),n(t,"永泰","101230107"),n(t,"平潭","101230108"),n(t,"福州郊区","101230109"),n(t,"长乐","101230110"),n(t,"福清","101230111"),n(t,"平潭海峡大桥","101230112"),n(t,"厦门","101230201"),n(t,"同安","101230202"),n(t,"宁德","101230301"),n(t,"古田","101230302"),n(t,"霞浦","101230303"),n(t,"寿宁","101230304"),n(t,"周宁","101230305"),n(t,"福安","101230306"),n(t,"柘荣","101230307"),n(t,"福鼎","101230308"),n(t,"屏南","101230309"),n(t,"莆田","101230401"),n(t,"仙游","101230402"),n(t,"秀屿港","101230403"),n(t,"泉州","101230501"),n(t,"安溪","101230502"),n(t,"九仙山","101230503"),n(t,"永春","101230504"),n(t,"德化","101230505"),n(t,"南安","101230506"),n(t,"崇武","101230507"),n(t,"金山","101230508"),n(t,"晋江","101230509"),n(t,"漳州","101230601"),n(t,"长泰","101230602"),n(t,"南靖","101230603"),n(t,"平和","101230604"),n(t,"龙海","101230605"),n(t,"漳浦","101230606"),n(t,"诏安","101230607"),n(t,"东山","101230608"),n(t,"云霄","101230609"),n(t,"华安","101230610"),n(t,"龙岩","101230701"),n(t,"长汀","101230702"),n(t,"连城","101230703"),n(t,"武平","101230704"),n(t,"上杭","101230705"),n(t,"永定","101230706"),n(t,"漳平","101230707"),n(t,"三明","101230801"),n(t,"宁化","101230802"),n(t,"清流","101230803"),n(t,"泰宁","101230804"),n(t,"将乐","101230805"),n(t,"建宁","101230806"),n(t,"明溪","101230807"),n(t,"沙县","101230808"),n(t,"尤溪","101230809"),n(t,"永安","101230810"),n(t,"大田","101230811"),n(t,"南平","101230901"),n(t,"顺昌","101230902"),n(t,"光泽","101230903"),n(t,"邵武","101230904"),n(t,"武夷山","101230905"),n(t,"浦城","101230906"),n(t,"建阳","101230907"),n(t,"松溪","101230908"),n(t,"政和","101230909"),n(t,"建瓯","101230910"),n(t,"南昌","101240101"),n(t,"新建","101240102"),n(t,"南昌县","101240103"),n(t,"安义","101240104"),n(t,"进贤","101240105"),n(t,"莲塘","101240106"),n(t,"九江","101240201"),n(t,"瑞昌","101240202"),n(t,"庐山","101240203"),n(t,"武宁","101240204"),n(t,"德安","101240205"),n(t,"永修","101240206"),n(t,"湖口","101240207"),n(t,"彭泽","101240208"),n(t,"星子","101240209"),n(t,"都昌","101240210"),n(t,"棠荫","101240211"),n(t,"修水","101240212"),n(t,"上饶","101240301"),n(t,"鄱阳","101240302"),n(t,"婺源","101240303"),n(t,"康山","101240304"),n(t,"余干","101240305"),n(t,"万年","101240306"),n(t,"德兴","101240307"),n(t,"上饶县","101240308"),n(t,"弋阳","101240309"),n(t,"横峰","101240310"),n(t,"铅山","101240311"),n(t,"玉山","101240312"),n(t,"广丰","101240313"),n(t,"波阳","101240314"),n(t,"抚州","101240401"),n(t,"广昌","101240402"),n(t,"乐安","101240403"),n(t,"崇仁","101240404"),n(t,"金溪","101240405"),n(t,"资溪","101240406"),n(t,"宜黄","101240407"),n(t,"南城","101240408"),n(t,"南丰","101240409"),n(t,"黎川","101240410"),n(t,"东乡","101240411"),n(t,"宜春","101240501"),n(t,"铜鼓","101240502"),n(t,"宜丰","101240503"),n(t,"万载","101240504"),n(t,"上高","101240505"),n(t,"靖安","101240506"),n(t,"奉新","101240507"),n(t,"高安","101240508"),n(t,"樟树","101240509"),n(t,"丰城","101240510"),n(t,"吉安","101240601"),n(t,"吉安县","101240602"),n(t,"吉水","101240603"),n(t,"新干","101240604"),n(t,"峡江","101240605"),n(t,"永丰","101240606"),n(t,"永新","101240607"),n(t,"井冈山","101240608"),n(t,"万安","101240609"),n(t,"遂川","101240610"),n(t,"泰和","101240611"),n(t,"安福","101240612"),n(t,"宁冈","101240613"),n(t,"赣州","101240701"),n(t,"崇义","101240702"),n(t,"上犹","101240703"),n(t,"南康","101240704"),n(t,"大余","101240705"),n(t,"信丰","101240706"),n(t,"宁都","101240707"),n(t,"石城","101240708"),n(t,"瑞金","101240709"),n(t,"于都","101240710"),n(t,"会昌","101240711"),n(t,"安远","101240712"),n(t,"全南","101240713"),n(t,"龙南","101240714"),n(t,"定南","101240715"),n(t,"寻乌","101240716"),n(t,"兴国","101240717"),n(t,"景德镇","101240801"),n(t,"乐平","101240802"),n(t,"萍乡","101240901"),n(t,"莲花","101240902"),n(t,"新余","101241001"),n(t,"分宜","101241002"),n(t,"鹰潭","101241101"),n(t,"余江","101241102"),n(t,"贵溪","101241103"),n(t,"长沙","101250101"),n(t,"宁乡","101250102"),n(t,"浏阳","101250103"),n(t,"马坡岭","101250104"),n(t,"湘潭","101250201"),n(t,"韶山","101250202"),n(t,"湘乡","101250203"),n(t,"株洲","101250301"),n(t,"攸县","101250302"),n(t,"醴陵","101250303"),n(t,"株洲县","101250304"),n(t,"茶陵","101250305"),n(t,"炎陵","101250306"),n(t,"衡阳","101250401"),n(t,"衡山","101250402"),n(t,"衡东","101250403"),n(t,"祁东","101250404"),n(t,"衡阳县","101250405"),n(t,"常宁","101250406"),n(t,"衡南","101250407"),n(t,"耒阳","101250408"),n(t,"南岳","101250409"),n(t,"郴州","101250501"),n(t,"桂阳","101250502"),n(t,"嘉禾","101250503"),n(t,"宜章","101250504"),n(t,"临武","101250505"),n(t,"桥口","101250506"),n(t,"资兴","101250507"),n(t,"汝城","101250508"),n(t,"安仁","101250509"),n(t,"永兴","101250510"),n(t,"桂东","101250511"),n(t,"常德","101250601"),n(t,"安乡","101250602"),n(t,"桃源","101250603"),n(t,"汉寿","101250604"),n(t,"澧县","101250605"),n(t,"临澧","101250606"),n(t,"石门","101250607"),n(t,"益阳","101250700"),n(t,"赫山区","101250701"),n(t,"南县","101250702"),n(t,"桃江","101250703"),n(t,"安化","101250704"),n(t,"沅江","101250705"),n(t,"娄底","101250801"),n(t,"双峰","101250802"),n(t,"冷水江","101250803"),n(t,"冷水滩","101250804"),n(t,"新化","101250805"),n(t,"涟源","101250806"),n(t,"邵阳","101250901"),n(t,"隆回","101250902"),n(t,"洞口","101250903"),n(t,"新邵","101250904"),n(t,"邵东","101250905"),n(t,"绥宁","101250906"),n(t,"新宁","101250907"),n(t,"武冈","101250908"),n(t,"城步","101250909"),n(t,"邵阳县","101250910"),n(t,"岳阳","101251001"),n(t,"华容","101251002"),n(t,"湘阴","101251003"),n(t,"汨罗","101251004"),n(t,"平江","101251005"),n(t,"临湘","101251006"),n(t,"张家界","101251101"),n(t,"桑植","101251102"),n(t,"慈利","101251103"),n(t,"怀化","101251201"),n(t,"鹤城区","101251202"),n(t,"沅陵","101251203"),n(t,"辰溪","101251204"),n(t,"靖州","101251205"),n(t,"会同","101251206"),n(t,"通道","101251207"),n(t,"麻阳","101251208"),n(t,"新晃","101251209"),n(t,"芷江","101251210"),n(t,"溆浦","101251211"),n(t,"黔阳","101251301"),n(t,"洪江","101251302"),n(t,"永州","101251401"),n(t,"祁阳","101251402"),n(t,"东安","101251403"),n(t,"双牌","101251404"),n(t,"道县","101251405"),n(t,"宁远","101251406"),n(t,"江永","101251407"),n(t,"蓝山","101251408"),n(t,"新田","101251409"),n(t,"江华","101251410"),n(t,"吉首","101251501"),n(t,"保靖","101251502"),n(t,"永顺","101251503"),n(t,"古丈","101251504"),n(t,"凤凰","101251505"),n(t,"泸溪","101251506"),n(t,"龙山","101251507"),n(t,"花垣","101251508"),n(t,"贵阳","101260101"),n(t,"白云","101260102"),n(t,"花溪","101260103"),n(t,"乌当","101260104"),n(t,"息烽","101260105"),n(t,"开阳","101260106"),n(t,"修文","101260107"),n(t,"清镇","101260108"),n(t,"遵义","101260201"),n(t,"遵义县","101260202"),n(t,"仁怀","101260203"),n(t,"绥阳","101260204"),n(t,"湄潭","101260205"),n(t,"凤冈","101260206"),n(t,"桐梓","101260207"),n(t,"赤水","101260208"),n(t,"习水","101260209"),n(t,"道真","101260210"),n(t,"正安","101260211"),n(t,"务川","101260212"),n(t,"余庆","101260213"),n(t,"汇川","101260214"),n(t,"安顺","101260301"),n(t,"普定","101260302"),n(t,"镇宁","101260303"),n(t,"平坝","101260304"),n(t,"紫云","101260305"),n(t,"关岭","101260306"),n(t,"都匀","101260401"),n(t,"贵定","101260402"),n(t,"瓮安","101260403"),n(t,"长顺","101260404"),n(t,"福泉","101260405"),n(t,"惠水","101260406"),n(t,"龙里","101260407"),n(t,"罗甸","101260408"),n(t,"平塘","101260409"),n(t,"独山","101260410"),n(t,"三都","101260411"),n(t,"荔波","101260412"),n(t,"凯里","101260501"),n(t,"岑巩","101260502"),n(t,"施秉","101260503"),n(t,"镇远","101260504"),n(t,"黄平","101260505"),n(t,"黄平旧洲","101260506"),n(t,"麻江","101260507"),n(t,"丹寨","101260508"),n(t,"三穗","101260509"),n(t,"台江","101260510"),n(t,"剑河","101260511"),n(t,"雷山","101260512"),n(t,"黎平","101260513"),n(t,"天柱","101260514"),n(t,"锦屏","101260515"),n(t,"榕江","101260516"),n(t,"从江","101260517"),n(t,"炉山","101260518"),n(t,"铜仁","101260601"),n(t,"江口","101260602"),n(t,"玉屏","101260603"),n(t,"万山","101260604"),n(t,"思南","101260605"),n(t,"塘头","101260606"),n(t,"印江","101260607"),n(t,"石阡","101260608"),n(t,"沿河","101260609"),n(t,"德江","101260610"),n(t,"松桃","101260611"),n(t,"毕节","101260701"),n(t,"赫章","101260702"),n(t,"金沙","101260703"),n(t,"威宁","101260704"),n(t,"大方","101260705"),n(t,"纳雍","101260706"),n(t,"织金","101260707"),n(t,"六盘水","101260801"),n(t,"六枝","101260802"),n(t,"水城","101260803"),n(t,"盘县","101260804"),n(t,"黔西","101260901"),n(t,"晴隆","101260902"),n(t,"兴仁","101260903"),n(t,"贞丰","101260904"),n(t,"望谟","101260905"),n(t,"兴义","101260906"),n(t,"安龙","101260907"),n(t,"册亨","101260908"),n(t,"普安","101260909"),n(t,"成都","101270101"),n(t,"龙泉驿","101270102"),n(t,"新都","101270103"),n(t,"温江","101270104"),n(t,"金堂","101270105"),n(t,"双流","101270106"),n(t,"郫县","101270107"),n(t,"大邑","101270108"),n(t,"蒲江","101270109"),n(t,"新津","101270110"),n(t,"都江堰","101270111"),n(t,"彭州","101270112"),n(t,"邛崃","101270113"),n(t,"崇州","101270114"),n(t,"崇庆","101270115"),n(t,"彭县","101270116"),n(t,"攀枝花","101270201"),n(t,"仁和","101270202"),n(t,"米易","101270203"),n(t,"盐边","101270204"),n(t,"自贡","101270301"),n(t,"富顺","101270302"),n(t,"荣县","101270303"),n(t,"绵阳","101270401"),n(t,"三台","101270402"),n(t,"盐亭","101270403"),n(t,"安县","101270404"),n(t,"梓潼","101270405"),n(t,"北川","101270406"),n(t,"平武","101270407"),n(t,"江油","101270408"),n(t,"南充","101270501"),n(t,"南部","101270502"),n(t,"营山","101270503"),n(t,"蓬安","101270504"),n(t,"仪陇","101270505"),n(t,"西充","101270506"),n(t,"阆中","101270507"),n(t,"达州","101270601"),n(t,"宣汉","101270602"),n(t,"开江","101270603"),n(t,"大竹","101270604"),n(t,"渠县","101270605"),n(t,"万源","101270606"),n(t,"达川","101270607"),n(t,"遂宁","101270701"),n(t,"蓬溪","101270702"),n(t,"射洪","101270703"),n(t,"广安","101270801"),n(t,"岳池","101270802"),n(t,"武胜","101270803"),n(t,"邻水","101270804"),n(t,"华蓥山","101270805"),n(t,"巴中","101270901"),n(t,"通江","101270902"),n(t,"南江","101270903"),n(t,"平昌","101270904"),n(t,"泸州","101271001"),n(t,"泸县","101271003"),n(t,"合江","101271004"),n(t,"叙永","101271005"),n(t,"古蔺","101271006"),n(t,"纳溪","101271007"),n(t,"宜宾","101271101"),n(t,"宜宾农试站","101271102"),n(t,"宜宾县","101271103"),n(t,"南溪","101271104"),n(t,"江安","101271105"),n(t,"长宁","101271106"),n(t,"高县","101271107"),n(t,"珙县","101271108"),n(t,"筠连","101271109"),n(t,"兴文","101271110"),n(t,"屏山","101271111"),n(t,"内江","101271201"),n(t,"东兴","101271202"),n(t,"威远","101271203"),n(t,"资中","101271204"),n(t,"隆昌","101271205"),n(t,"资阳","101271301"),n(t,"安岳","101271302"),n(t,"乐至","101271303"),n(t,"简阳","101271304"),n(t,"乐山","101271401"),n(t,"犍为","101271402"),n(t,"井研","101271403"),n(t,"夹江","101271404"),n(t,"沐川","101271405"),n(t,"峨边","101271406"),n(t,"马边","101271407"),n(t,"峨眉","101271408"),n(t,"峨眉山","101271409"),n(t,"眉山","101271501"),n(t,"仁寿","101271502"),n(t,"彭山","101271503"),n(t,"洪雅","101271504"),n(t,"丹棱","101271505"),n(t,"青神","101271506"),n(t,"凉山","101271601"),n(t,"木里","101271603"),n(t,"盐源","101271604"),n(t,"德昌","101271605"),n(t,"会理","101271606"),n(t,"会东","101271607"),n(t,"宁南","101271608"),n(t,"普格","101271609"),n(t,"西昌","101271610"),n(t,"金阳","101271611"),n(t,"昭觉","101271612"),n(t,"喜德","101271613"),n(t,"冕宁","101271614"),n(t,"越西","101271615"),n(t,"甘洛","101271616"),n(t,"雷波","101271617"),n(t,"美姑","101271618"),n(t,"布拖","101271619"),n(t,"雅安","101271701"),n(t,"名山","101271702"),n(t,"荣经","101271703"),n(t,"汉源","101271704"),n(t,"石棉","101271705"),n(t,"天全","101271706"),n(t,"芦山","101271707"),n(t,"宝兴","101271708"),n(t,"甘孜","101271801"),n(t,"康定","101271802"),n(t,"泸定","101271803"),n(t,"丹巴","101271804"),n(t,"九龙","101271805"),n(t,"雅江","101271806"),n(t,"道孚","101271807"),n(t,"炉霍","101271808"),n(t,"新龙","101271809"),n(t,"德格","101271810"),n(t,"白玉","101271811"),n(t,"石渠","101271812"),n(t,"色达","101271813"),n(t,"理塘","101271814"),n(t,"巴塘","101271815"),n(t,"乡城","101271816"),n(t,"稻城","101271817"),n(t,"得荣","101271818"),n(t,"阿坝","101271901"),n(t,"汶川","101271902"),n(t,"理县","101271903"),n(t,"茂县","101271904"),n(t,"松潘","101271905"),n(t,"九寨沟","101271906"),n(t,"金川","101271907"),n(t,"小金","101271908"),n(t,"黑水","101271909"),n(t,"马尔康","101271910"),n(t,"壤塘","101271911"),n(t,"若尔盖","101271912"),n(t,"红原","101271913"),n(t,"南坪","101271914"),n(t,"德阳","101272001"),n(t,"中江","101272002"),n(t,"广汉","101272003"),n(t,"什邡","101272004"),n(t,"绵竹","101272005"),n(t,"罗江","101272006"),n(t,"广元","101272101"),n(t,"旺苍","101272102"),n(t,"青川","101272103"),n(t,"剑阁","101272104"),n(t,"苍溪","101272105"),n(t,"广州","101280101"),n(t,"番禺","101280102"),n(t,"从化","101280103"),n(t,"增城","101280104"),n(t,"花都","101280105"),n(t,"天河","101280106"),n(t,"韶关","101280201"),n(t,"乳源","101280202"),n(t,"始兴","101280203"),n(t,"翁源","101280204"),n(t,"乐昌","101280205"),n(t,"仁化","101280206"),n(t,"南雄","101280207"),n(t,"新丰","101280208"),n(t,"曲江","101280209"),n(t,"惠州","101280301"),n(t,"博罗","101280302"),n(t,"惠阳","101280303"),n(t,"惠东","101280304"),n(t,"龙门","101280305"),n(t,"梅州","101280401"),n(t,"兴宁","101280402"),n(t,"蕉岭","101280403"),n(t,"大埔","101280404"),n(t,"丰顺","101280406"),n(t,"平远","101280407"),n(t,"五华","101280408"),n(t,"梅县","101280409"),n(t,"汕头","101280501"),n(t,"潮阳","101280502"),n(t,"澄海","101280503"),n(t,"南澳","101280504"),n(t,"云澳","101280505"),n(t,"南澎岛","101280506"),n(t,"深圳","101280601"),n(t,"珠海","101280701"),n(t,"斗门","101280702"),n(t,"黄茅洲","101280703"),n(t,"佛山","101280800"),n(t,"顺德","101280801"),n(t,"三水","101280802"),n(t,"南海","101280803"),n(t,"肇庆","101280901"),n(t,"广宁","101280902"),n(t,"四会","101280903"),n(t,"德庆","101280905"),n(t,"怀集","101280906"),n(t,"封开","101280907"),n(t,"高要","101280908"),n(t,"湛江","101281001"),n(t,"吴川","101281002"),n(t,"雷州","101281003"),n(t,"徐闻","101281004"),n(t,"廉江","101281005"),n(t,"硇洲","101281006"),n(t,"遂溪","101281007"),n(t,"江门","101281101"),n(t,"开平","101281103"),n(t,"新会","101281104"),n(t,"恩平","101281105"),n(t,"台山","101281106"),n(t,"上川岛","101281107"),n(t,"鹤山","101281108"),n(t,"河源","101281201"),n(t,"紫金","101281202"),n(t,"连平","101281203"),n(t,"和平","101281204"),n(t,"龙川","101281205"),n(t,"清远","101281301"),n(t,"连南","101281302"),n(t,"连州","101281303"),n(t,"连山","101281304"),n(t,"阳山","101281305"),n(t,"佛冈","101281306"),n(t,"英德","101281307"),n(t,"云浮","101281401"),n(t,"罗定","101281402"),n(t,"新兴","101281403"),n(t,"郁南","101281404"),n(t,"潮州","101281501"),n(t,"饶平","101281502"),n(t,"东莞","101281601"),n(t,"中山","101281701"),n(t,"阳江","101281801"),n(t,"阳春","101281802"),n(t,"揭阳","101281901"),n(t,"揭西","101281902"),n(t,"普宁","101281903"),n(t,"惠来","101281904"),n(t,"茂名","101282001"),n(t,"高州","101282002"),n(t,"化州","101282003"),n(t,"电白","101282004"),n(t,"信宜","101282005"),n(t,"汕尾","101282101"),n(t,"海丰","101282102"),n(t,"陆丰","101282103"),n(t,"遮浪","101282104"),n(t,"东沙岛","101282105"),n(t,"昆明","101290101"),n(t,"昆明农试站","101290102"),n(t,"东川","101290103"),n(t,"寻甸","101290104"),n(t,"晋宁","101290105"),n(t,"宜良","101290106"),n(t,"石林","101290107"),n(t,"呈贡","101290108"),n(t,"富民","101290109"),n(t,"嵩明","101290110"),n(t,"禄劝","101290111"),n(t,"安宁","101290112"),n(t,"太华山","101290113"),n(t,"河口","101290114"),n(t,"大理","101290201"),n(t,"云龙","101290202"),n(t,"漾鼻","101290203"),n(t,"永平","101290204"),n(t,"宾川","101290205"),n(t,"弥渡","101290206"),n(t,"祥云","101290207"),n(t,"魏山","101290208"),n(t,"剑川","101290209"),n(t,"洱源","101290210"),n(t,"鹤庆","101290211"),n(t,"南涧","101290212"),n(t,"红河","101290301"),n(t,"石屏","101290302"),n(t,"建水","101290303"),n(t,"弥勒","101290304"),n(t,"元阳","101290305"),n(t,"绿春","101290306"),n(t,"开远","101290307"),n(t,"个旧","101290308"),n(t,"蒙自","101290309"),n(t,"屏边","101290310"),n(t,"泸西","101290311"),n(t,"金平","101290312"),n(t,"曲靖","101290401"),n(t,"沾益","101290402"),n(t,"陆良","101290403"),n(t,"富源","101290404"),n(t,"马龙","101290405"),n(t,"师宗","101290406"),n(t,"罗平","101290407"),n(t,"会泽","101290408"),n(t,"宣威","101290409"),n(t,"保山","101290501"),n(t,"富宁","101290502"),n(t,"龙陵","101290503"),n(t,"施甸","101290504"),n(t,"昌宁","101290505"),n(t,"腾冲","101290506"),n(t,"文山","101290601"),n(t,"西畴","101290602"),n(t,"马关","101290603"),n(t,"麻栗坡","101290604"),n(t,"砚山","101290605"),n(t,"邱北","101290606"),n(t,"广南","101290607"),n(t,"玉溪","101290701"),n(t,"澄江","101290702"),n(t,"江川","101290703"),n(t,"通海","101290704"),n(t,"华宁","101290705"),n(t,"新平","101290706"),n(t,"易门","101290707"),n(t,"峨山","101290708"),n(t,"元江","101290709"),n(t,"楚雄","101290801"),n(t,"大姚","101290802"),n(t,"元谋","101290803"),n(t,"姚安","101290804"),n(t,"牟定","101290805"),n(t,"南华","101290806"),n(t,"武定","101290807"),n(t,"禄丰","101290808"),n(t,"双柏","101290809"),n(t,"永仁","101290810"),n(t,"普洱","101290901"),n(t,"景谷","101290902"),n(t,"景东","101290903"),n(t,"澜沧","101290904"),n(t,"普洱","101290905"),n(t,"墨江","101290906"),n(t,"江城","101290907"),n(t,"孟连","101290908"),n(t,"西盟","101290909"),n(t,"镇源","101290910"),n(t,"镇沅","101290911"),n(t,"宁洱","101290912"),n(t,"昭通","101291001"),n(t,"鲁甸","101291002"),n(t,"彝良","101291003"),n(t,"镇雄","101291004"),n(t,"威信","101291005"),n(t,"巧家","101291006"),n(t,"绥江","101291007"),n(t,"永善","101291008"),n(t,"盐津","101291009"),n(t,"大关","101291010"),n(t,"临沧","101291101"),n(t,"沧源","101291102"),n(t,"耿马","101291103"),n(t,"双江","101291104"),n(t,"凤庆","101291105"),n(t,"永德","101291106"),n(t,"云县","101291107"),n(t,"镇康","101291108"),n(t,"怒江","101291201"),n(t,"福贡","101291203"),n(t,"兰坪","101291204"),n(t,"泸水","101291205"),n(t,"六库","101291206"),n(t,"贡山","101291207"),n(t,"香格里拉","101291301"),n(t,"德钦","101291302"),n(t,"维西","101291303"),n(t,"中甸","101291304"),n(t,"丽江","101291401"),n(t,"永胜","101291402"),n(t,"华坪","101291403"),n(t,"宁蒗","101291404"),n(t,"德宏","101291501"),n(t,"潞江坝","101291502"),n(t,"陇川","101291503"),n(t,"盈江","101291504"),n(t,"畹町镇","101291505"),n(t,"瑞丽","101291506"),n(t,"梁河","101291507"),n(t,"潞西","101291508"),n(t,"景洪","101291601"),n(t,"大勐龙","101291602"),n(t,"勐海","101291603"),n(t,"景洪电站","101291604"),n(t,"勐腊","101291605"),n(t,"南宁","101300101"),n(t,"南宁城区","101300102"),n(t,"邕宁","101300103"),n(t,"横县","101300104"),n(t,"隆安","101300105"),n(t,"马山","101300106"),n(t,"上林","101300107"),n(t,"武鸣","101300108"),n(t,"宾阳","101300109"),n(t,"硕龙","101300110"),n(t,"崇左","101300201"),n(t,"天等","101300202"),n(t,"龙州","101300203"),n(t,"凭祥","101300204"),n(t,"大新","101300205"),n(t,"扶绥","101300206"),n(t,"宁明","101300207"),n(t,"海渊","101300208"),n(t,"柳州","101300301"),n(t,"柳城","101300302"),n(t,"沙塘","101300303"),n(t,"鹿寨","101300304"),n(t,"柳江","101300305"),n(t,"融安","101300306"),n(t,"融水","101300307"),n(t,"三江","101300308"),n(t,"来宾","101300401"),n(t,"忻城","101300402"),n(t,"金秀","101300403"),n(t,"象州","101300404"),n(t,"武宣","101300405"),n(t,"桂林","101300501"),n(t,"桂林农试站","101300502"),n(t,"龙胜","101300503"),n(t,"永福","101300504"),n(t,"临桂","101300505"),n(t,"兴安","101300506"),n(t,"灵川","101300507"),n(t,"全州","101300508"),n(t,"灌阳","101300509"),n(t,"阳朔","101300510"),n(t,"恭城","101300511"),n(t,"平乐","101300512"),n(t,"荔浦","101300513"),n(t,"资源","101300514"),n(t,"梧州","101300601"),n(t,"藤县","101300602"),n(t,"太平","101300603"),n(t,"苍梧","101300604"),n(t,"蒙山","101300605"),n(t,"岑溪","101300606"),n(t,"贺州","101300701"),n(t,"昭平","101300702"),n(t,"富川","101300703"),n(t,"钟山","101300704"),n(t,"信都","101300705"),n(t,"贵港","101300801"),n(t,"桂平","101300802"),n(t,"平南","101300803"),n(t,"玉林","101300901"),n(t,"博白","101300902"),n(t,"北流","101300903"),n(t,"容县","101300904"),n(t,"陆川","101300905"),n(t,"百色","101301001"),n(t,"那坡","101301002"),n(t,"田阳","101301003"),n(t,"德保","101301004"),n(t,"靖西","101301005"),n(t,"田东","101301006"),n(t,"平果","101301007"),n(t,"隆林","101301008"),n(t,"西林","101301009"),n(t,"乐业","101301010"),n(t,"凌云","101301011"),n(t,"田林","101301012"),n(t,"钦州","101301101"),n(t,"浦北","101301102"),n(t,"灵山","101301103"),n(t,"河池","101301201"),n(t,"天峨","101301202"),n(t,"东兰","101301203"),n(t,"巴马","101301204"),n(t,"环江","101301205"),n(t,"罗城","101301206"),n(t,"宜州","101301207"),n(t,"凤山","101301208"),n(t,"南丹","101301209"),n(t,"都安","101301210"),n(t,"北海","101301301"),n(t,"合浦","101301302"),n(t,"涠洲岛","101301303"),n(t,"防城港","101301401"),n(t,"上思","101301402"),n(t,"东兴","101301403"),n(t,"板栏","101301404"),n(t,"防城","101301405"),n(t,"海口","101310101"),n(t,"琼山","101310102"),n(t,"三亚","101310201"),n(t,"东方","101310202"),n(t,"临高","101310203"),n(t,"澄迈","101310204"),n(t,"儋州","101310205"),n(t,"昌江","101310206"),n(t,"白沙","101310207"),n(t,"琼中","101310208"),n(t,"定安","101310209"),n(t,"屯昌","101310210"),n(t,"琼海","101310211"),n(t,"文昌","101310212"),n(t,"清兰","101310213"),n(t,"保亭","101310214"),n(t,"万宁","101310215"),n(t,"陵水","101310216"),n(t,"西沙","101310217"),n(t,"珊瑚岛","101310218"),n(t,"永署礁","101310219"),n(t,"南沙岛","101310220"),n(t,"乐东","101310221"),n(t,"五指山","101310222"),n(t,"通什","101310223"),n(t,"香港","101320101"),n(t,"九龙","101320102"),n(t,"新界","101320103"),n(t,"中环","101320104"),n(t,"铜锣湾","101320105"),n(t,"澳门","101330101"),n(t,"台北县","101340101"),n(t,"台北市","101340102"),n(t,"高雄","101340201"),n(t,"东港","101340202"),n(t,"大武","101340203"),n(t,"恒春","101340204"),n(t,"兰屿","101340205"),n(t,"台南","101340301"),n(t,"台中","101340401"),n(t,"桃园","101340501"),n(t,"新竹县","101340601"),n(t,"新竹市","101340602"),n(t,"公馆","101340603"),n(t,"宜兰","101340701"),n(t,"马公","101340801"),n(t,"东吉屿","101340802"),n(t,"嘉义","101340901"),n(t,"阿里山","101340902"),n(t,"玉山","101340903"),n(t,"新港","101340904"),t);l.default=u},"5b8e":function(e,l,a){"use strict";var t=n(a("6d50"));function n(e){return e&&e.__esModule?e:{default:e}}var u=t.default.mock({"list|5-9":[{"pid|+1":0,desc:"@ctitle(3,5)",area:"@city()",fangzi:"一室一厅",price:"@natural(1,5)",fengge:"简约风",gongsi:"哈哈网络",img:"../../static/img/myfix/04.png"}]});t.default.mock("http://www.baidu.com/api1",u);var r=t.default.mock({"list|3":[{"pid|+1":0,img:"@pick(['../../../static/img/message/toux.png','../../../static/img/message/touxiang.png'])",title:"@pick(['张三评论了您的留言', '李四点赞了你的评论', '张三点赞了你的评论'])",date:"@pick(['17:00', '昨天', '前天'])"}]});t.default.mock("https://www.baidu.com/api3",r)},"66fd":function(e,l,a){"use strict";a.r(l),function(e){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function t(e){return void 0===e||null===e}function n(e){return void 0!==e&&null!==e}function u(e){return!0===e}function r(e){return!1===e}function o(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function i(e){return null!==e&&"object"===typeof e}var v=Object.prototype.toString;function b(e){return"[object Object]"===v.call(e)}function s(e){return"[object RegExp]"===v.call(e)}function c(e){var l=parseFloat(String(e));return l>=0&&Math.floor(l)===l&&isFinite(e)}function f(e){return n(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function p(e){return null==e?"":Array.isArray(e)||b(e)&&e.toString===v?JSON.stringify(e,null,2):String(e)}function h(e){var l=parseFloat(e);return isNaN(l)?e:l}function d(e,l){for(var a=Object.create(null),t=e.split(","),n=0;n<t.length;n++)a[t[n]]=!0;return l?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}d("slot,component",!0);var g=d("key,ref,slot,slot-scope,is");function m(e,l){if(e.length){var a=e.indexOf(l);if(a>-1)return e.splice(a,1)}}var y=Object.prototype.hasOwnProperty;function _(e,l){return y.call(e,l)}function x(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,k=x(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),A=x(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),O=/\B([A-Z])/g,S=x(function(e){return e.replace(O,"-$1").toLowerCase()});function C(e,l){function a(a){var t=arguments.length;return t?t>1?e.apply(l,arguments):e.call(l,a):e.call(l)}return a._length=e.length,a}function E(e,l){return e.bind(l)}var $=Function.prototype.bind?E:C;function j(e,l){l=l||0;var a=e.length-l,t=new Array(a);while(a--)t[a]=e[a+l];return t}function T(e,l){for(var a in l)e[a]=l[a];return e}function P(e){for(var l={},a=0;a<e.length;a++)e[a]&&T(l,e[a]);return l}function R(e,l,a){}var D=function(e,l,a){return!1},I=function(e){return e};function M(e,l){if(e===l)return!0;var a=i(e),t=i(l);if(!a||!t)return!a&&!t&&String(e)===String(l);try{var n=Array.isArray(e),u=Array.isArray(l);if(n&&u)return e.length===l.length&&e.every(function(e,a){return M(e,l[a])});if(e instanceof Date&&l instanceof Date)return e.getTime()===l.getTime();if(n||u)return!1;var r=Object.keys(e),o=Object.keys(l);return r.length===o.length&&r.every(function(a){return M(e[a],l[a])})}catch(v){return!1}}function N(e,l){for(var a=0;a<e.length;a++)if(M(e[a],l))return a;return-1}function B(e){var l=!1;return function(){l||(l=!0,e.apply(this,arguments))}}var L=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:R,parsePlatformTagName:I,mustUseProp:D,async:!0,_lifecycleHooks:q},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function U(e){var l=(e+"").charCodeAt(0);return 36===l||95===l}function V(e,l,a,t){Object.defineProperty(e,l,{value:a,enumerable:!!t,writable:!0,configurable:!0})}var z=new RegExp("[^"+H.source+".$_\\d]");function G(e){if(!z.test(e)){var l=e.split(".");return function(e){for(var a=0;a<l.length;a++){if(!e)return;e=e[l[a]]}return e}}}var J,W="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),ee=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),le=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),ae=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var te={};Object.defineProperty(te,"passive",{get:function(){}}),window.addEventListener("test-passive",null,te)}catch(en){}var ne=function(){return void 0===J&&(J=!K&&!X&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),J},ue=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function re(e){return"function"===typeof e&&/native code/.test(e.toString())}var oe,ie="undefined"!==typeof Symbol&&re(Symbol)&&"undefined"!==typeof Reflect&&re(Reflect.ownKeys);oe="undefined"!==typeof Set&&re(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var ve=R,be=0,se=function(){this.id=be++,this.subs=[]};function ce(e){se.SharedObject.targetStack.push(e),se.SharedObject.target=e}function fe(){se.SharedObject.targetStack.pop(),se.SharedObject.target=se.SharedObject.targetStack[se.SharedObject.targetStack.length-1]}se.prototype.addSub=function(e){this.subs.push(e)},se.prototype.removeSub=function(e){m(this.subs,e)},se.prototype.depend=function(){se.SharedObject.target&&se.SharedObject.target.addDep(this)},se.prototype.notify=function(){var e=this.subs.slice();for(var l=0,a=e.length;l<a;l++)e[l].update()},se.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},se.SharedObject.target=null,se.SharedObject.targetStack=[];var pe=function(e,l,a,t,n,u,r,o){this.tag=e,this.data=l,this.children=a,this.text=t,this.elm=n,this.ns=void 0,this.context=u,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=l&&l.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=o,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},he={child:{configurable:!0}};he.child.get=function(){return this.componentInstance},Object.defineProperties(pe.prototype,he);var de=function(e){void 0===e&&(e="");var l=new pe;return l.text=e,l.isComment=!0,l};function ge(e){return new pe(void 0,void 0,void 0,String(e))}function me(e){var l=new pe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return l.ns=e.ns,l.isStatic=e.isStatic,l.key=e.key,l.isComment=e.isComment,l.fnContext=e.fnContext,l.fnOptions=e.fnOptions,l.fnScopeId=e.fnScopeId,l.asyncMeta=e.asyncMeta,l.isCloned=!0,l}var ye=Array.prototype,_e=Object.create(ye),xe=["push","pop","shift","unshift","splice","sort","reverse"];xe.forEach(function(e){var l=ye[e];V(_e,e,function(){var a=[],t=arguments.length;while(t--)a[t]=arguments[t];var n,u=l.apply(this,a),r=this.__ob__;switch(e){case"push":case"unshift":n=a;break;case"splice":n=a.slice(2);break}return n&&r.observeArray(n),r.dep.notify(),u})});var we=Object.getOwnPropertyNames(_e),ke=!0;function Ae(e){ke=e}var Oe=function(e){this.value=e,this.dep=new se,this.vmCount=0,V(e,"__ob__",this),Array.isArray(e)?(W?e.push!==e.__proto__.push?Ce(e,_e,we):Se(e,_e):Ce(e,_e,we),this.observeArray(e)):this.walk(e)};function Se(e,l){e.__proto__=l}function Ce(e,l,a){for(var t=0,n=a.length;t<n;t++){var u=a[t];V(e,u,l[u])}}function Ee(e,l){var a;if(i(e)&&!(e instanceof pe))return _(e,"__ob__")&&e.__ob__ instanceof Oe?a=e.__ob__:ke&&!ne()&&(Array.isArray(e)||b(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new Oe(e)),l&&a&&a.vmCount++,a}function $e(e,l,a,t,n){var u=new se,r=Object.getOwnPropertyDescriptor(e,l);if(!r||!1!==r.configurable){var o=r&&r.get,i=r&&r.set;o&&!i||2!==arguments.length||(a=e[l]);var v=!n&&Ee(a);Object.defineProperty(e,l,{enumerable:!0,configurable:!0,get:function(){var l=o?o.call(e):a;return se.SharedObject.target&&(u.depend(),v&&(v.dep.depend(),Array.isArray(l)&&Pe(l))),l},set:function(l){var t=o?o.call(e):a;l===t||l!==l&&t!==t||o&&!i||(i?i.call(e,l):a=l,v=!n&&Ee(l),u.notify())}})}}function je(e,l,a){if(Array.isArray(e)&&c(l))return e.length=Math.max(e.length,l),e.splice(l,1,a),a;if(l in e&&!(l in Object.prototype))return e[l]=a,a;var t=e.__ob__;return e._isVue||t&&t.vmCount?a:t?($e(t.value,l,a),t.dep.notify(),a):(e[l]=a,a)}function Te(e,l){if(Array.isArray(e)&&c(l))e.splice(l,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||_(e,l)&&(delete e[l],a&&a.dep.notify())}}function Pe(e){for(var l=void 0,a=0,t=e.length;a<t;a++)l=e[a],l&&l.__ob__&&l.__ob__.dep.depend(),Array.isArray(l)&&Pe(l)}Oe.prototype.walk=function(e){for(var l=Object.keys(e),a=0;a<l.length;a++)$e(e,l[a])},Oe.prototype.observeArray=function(e){for(var l=0,a=e.length;l<a;l++)Ee(e[l])};var Re=F.optionMergeStrategies;function De(e,l){if(!l)return e;for(var a,t,n,u=ie?Reflect.ownKeys(l):Object.keys(l),r=0;r<u.length;r++)a=u[r],"__ob__"!==a&&(t=e[a],n=l[a],_(e,a)?t!==n&&b(t)&&b(n)&&De(t,n):je(e,a,n));return e}function Ie(e,l,a){return a?function(){var t="function"===typeof l?l.call(a,a):l,n="function"===typeof e?e.call(a,a):e;return t?De(t,n):n}:l?e?function(){return De("function"===typeof l?l.call(this,this):l,"function"===typeof e?e.call(this,this):e)}:l:e}function Me(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?Ne(a):a}function Ne(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function Be(e,l,a,t){var n=Object.create(e||null);return l?T(n,l):n}Re.data=function(e,l,a){return a?Ie(e,l,a):l&&"function"!==typeof l?e:Ie(e,l)},q.forEach(function(e){Re[e]=Me}),L.forEach(function(e){Re[e+"s"]=Be}),Re.watch=function(e,l,a,t){if(e===ae&&(e=void 0),l===ae&&(l=void 0),!l)return Object.create(e||null);if(!e)return l;var n={};for(var u in T(n,e),l){var r=n[u],o=l[u];r&&!Array.isArray(r)&&(r=[r]),n[u]=r?r.concat(o):Array.isArray(o)?o:[o]}return n},Re.props=Re.methods=Re.inject=Re.computed=function(e,l,a,t){if(!e)return l;var n=Object.create(null);return T(n,e),l&&T(n,l),n},Re.provide=Ie;var Le=function(e,l){return void 0===l?e:l};function qe(e,l){var a=e.props;if(a){var t,n,u,r={};if(Array.isArray(a)){t=a.length;while(t--)n=a[t],"string"===typeof n&&(u=k(n),r[u]={type:null})}else if(b(a))for(var o in a)n=a[o],u=k(o),r[u]=b(n)?n:{type:n};else 0;e.props=r}}function Fe(e,l){var a=e.inject;if(a){var t=e.inject={};if(Array.isArray(a))for(var n=0;n<a.length;n++)t[a[n]]={from:a[n]};else if(b(a))for(var u in a){var r=a[u];t[u]=b(r)?T({from:u},r):{from:r}}else 0}}function He(e){var l=e.directives;if(l)for(var a in l){var t=l[a];"function"===typeof t&&(l[a]={bind:t,update:t})}}function Ue(e,l,a){if("function"===typeof l&&(l=l.options),qe(l,a),Fe(l,a),He(l),!l._base&&(l.extends&&(e=Ue(e,l.extends,a)),l.mixins))for(var t=0,n=l.mixins.length;t<n;t++)e=Ue(e,l.mixins[t],a);var u,r={};for(u in e)o(u);for(u in l)_(e,u)||o(u);function o(t){var n=Re[t]||Le;r[t]=n(e[t],l[t],a,t)}return r}function Ve(e,l,a,t){if("string"===typeof a){var n=e[l];if(_(n,a))return n[a];var u=k(a);if(_(n,u))return n[u];var r=A(u);if(_(n,r))return n[r];var o=n[a]||n[u]||n[r];return o}}function ze(e,l,a,t){var n=l[e],u=!_(a,e),r=a[e],o=Ke(Boolean,n.type);if(o>-1)if(u&&!_(n,"default"))r=!1;else if(""===r||r===S(e)){var i=Ke(String,n.type);(i<0||o<i)&&(r=!0)}if(void 0===r){r=Ge(t,n,e);var v=ke;Ae(!0),Ee(r),Ae(v)}return r}function Ge(e,l,a){if(_(l,"default")){var t=l.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof t&&"Function"!==Je(l.type)?t.call(e):t}}function Je(e){var l=e&&e.toString().match(/^\s*function (\w+)/);return l?l[1]:""}function We(e,l){return Je(e)===Je(l)}function Ke(e,l){if(!Array.isArray(l))return We(l,e)?0:-1;for(var a=0,t=l.length;a<t;a++)if(We(l[a],e))return a;return-1}function Xe(e,l,a){ce();try{if(l){var t=l;while(t=t.$parent){var n=t.$options.errorCaptured;if(n)for(var u=0;u<n.length;u++)try{var r=!1===n[u].call(t,e,l,a);if(r)return}catch(en){Ze(en,t,"errorCaptured hook")}}}Ze(e,l,a)}finally{fe()}}function Ye(e,l,a,t,n){var u;try{u=a?e.apply(l,a):e.call(l),u&&!u._isVue&&f(u)&&!u._handled&&(u.catch(function(e){return Xe(e,t,n+" (Promise/async)")}),u._handled=!0)}catch(en){Xe(en,t,n)}return u}function Ze(e,l,a){if(F.errorHandler)try{return F.errorHandler.call(null,e,l,a)}catch(en){en!==e&&Qe(en,null,"config.errorHandler")}Qe(e,l,a)}function Qe(e,l,a){if(!K&&!X||"undefined"===typeof console)throw e;console.error(e)}var el,ll=[],al=!1;function tl(){al=!1;var e=ll.slice(0);ll.length=0;for(var l=0;l<e.length;l++)e[l]()}if("undefined"!==typeof Promise&&re(Promise)){var nl=Promise.resolve();el=function(){nl.then(tl),le&&setTimeout(R)}}else if(Q||"undefined"===typeof MutationObserver||!re(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())el="undefined"!==typeof setImmediate&&re(setImmediate)?function(){setImmediate(tl)}:function(){setTimeout(tl,0)};else{var ul=1,rl=new MutationObserver(tl),ol=document.createTextNode(String(ul));rl.observe(ol,{characterData:!0}),el=function(){ul=(ul+1)%2,ol.data=String(ul)}}function il(e,l){var a;if(ll.push(function(){if(e)try{e.call(l)}catch(en){Xe(en,l,"nextTick")}else a&&a(l)}),al||(al=!0,el()),!e&&"undefined"!==typeof Promise)return new Promise(function(e){a=e})}var vl=new oe;function bl(e){sl(e,vl),vl.clear()}function sl(e,l){var a,t,n=Array.isArray(e);if(!(!n&&!i(e)||Object.isFrozen(e)||e instanceof pe)){if(e.__ob__){var u=e.__ob__.dep.id;if(l.has(u))return;l.add(u)}if(n){a=e.length;while(a--)sl(e[a],l)}else{t=Object.keys(e),a=t.length;while(a--)sl(e[t[a]],l)}}}var cl=x(function(e){var l="&"===e.charAt(0);e=l?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var t="!"===e.charAt(0);return e=t?e.slice(1):e,{name:e,once:a,capture:t,passive:l}});function fl(e,l){function a(){var e=arguments,t=a.fns;if(!Array.isArray(t))return Ye(t,null,arguments,l,"v-on handler");for(var n=t.slice(),u=0;u<n.length;u++)Ye(n[u],null,e,l,"v-on handler")}return a.fns=e,a}function pl(e,l,a,n,r,o){var i,v,b,s;for(i in e)v=e[i],b=l[i],s=cl(i),t(v)||(t(b)?(t(v.fns)&&(v=e[i]=fl(v,o)),u(s.once)&&(v=e[i]=r(s.name,v,s.capture)),a(s.name,v,s.capture,s.passive,s.params)):v!==b&&(b.fns=v,e[i]=b));for(i in l)t(e[i])&&(s=cl(i),n(s.name,l[i],s.capture))}function hl(e,l,a){var u=l.options.props;if(!t(u)){var r={},o=e.attrs,i=e.props;if(n(o)||n(i))for(var v in u){var b=S(v);dl(r,i,v,b,!0)||dl(r,o,v,b,!1)}return r}}function dl(e,l,a,t,u){if(n(l)){if(_(l,a))return e[a]=l[a],u||delete l[a],!0;if(_(l,t))return e[a]=l[t],u||delete l[t],!0}return!1}function gl(e){for(var l=0;l<e.length;l++)if(Array.isArray(e[l]))return Array.prototype.concat.apply([],e);return e}function ml(e){return o(e)?[ge(e)]:Array.isArray(e)?_l(e):void 0}function yl(e){return n(e)&&n(e.text)&&r(e.isComment)}function _l(e,l){var a,r,i,v,b=[];for(a=0;a<e.length;a++)r=e[a],t(r)||"boolean"===typeof r||(i=b.length-1,v=b[i],Array.isArray(r)?r.length>0&&(r=_l(r,(l||"")+"_"+a),yl(r[0])&&yl(v)&&(b[i]=ge(v.text+r[0].text),r.shift()),b.push.apply(b,r)):o(r)?yl(v)?b[i]=ge(v.text+r):""!==r&&b.push(ge(r)):yl(r)&&yl(v)?b[i]=ge(v.text+r.text):(u(e._isVList)&&n(r.tag)&&t(r.key)&&n(l)&&(r.key="__vlist"+l+"_"+a+"__"),b.push(r)));return b}function xl(e){var l=e.$options.provide;l&&(e._provided="function"===typeof l?l.call(e):l)}function wl(e){var l=kl(e.$options.inject,e);l&&(Ae(!1),Object.keys(l).forEach(function(a){$e(e,a,l[a])}),Ae(!0))}function kl(e,l){if(e){for(var a=Object.create(null),t=ie?Reflect.ownKeys(e):Object.keys(e),n=0;n<t.length;n++){var u=t[n];if("__ob__"!==u){var r=e[u].from,o=l;while(o){if(o._provided&&_(o._provided,r)){a[u]=o._provided[r];break}o=o.$parent}if(!o)if("default"in e[u]){var i=e[u].default;a[u]="function"===typeof i?i.call(l):i}else 0}}return a}}function Al(e,l){if(!e||!e.length)return{};for(var a={},t=0,n=e.length;t<n;t++){var u=e[t],r=u.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,u.context!==l&&u.fnContext!==l||!r||null==r.slot)u.asyncMeta&&u.asyncMeta.data&&"page"===u.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(u):(a.default||(a.default=[])).push(u);else{var o=r.slot,i=a[o]||(a[o]=[]);"template"===u.tag?i.push.apply(i,u.children||[]):i.push(u)}}for(var v in a)a[v].every(Ol)&&delete a[v];return a}function Ol(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Sl(e,l,t){var n,u=Object.keys(l).length>0,r=e?!!e.$stable:!u,o=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(r&&t&&t!==a&&o===t.$key&&!u&&!t.$hasNormal)return t;for(var i in n={},e)e[i]&&"$"!==i[0]&&(n[i]=Cl(l,i,e[i]))}else n={};for(var v in l)v in n||(n[v]=El(l,v));return e&&Object.isExtensible(e)&&(e._normalized=n),V(n,"$stable",r),V(n,"$key",o),V(n,"$hasNormal",u),n}function Cl(e,l,a){var t=function(){var e=arguments.length?a.apply(null,arguments):a({});return e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:ml(e),e&&(0===e.length||1===e.length&&e[0].isComment)?void 0:e};return a.proxy&&Object.defineProperty(e,l,{get:t,enumerable:!0,configurable:!0}),t}function El(e,l){return function(){return e[l]}}function $l(e,l){var a,t,u,r,o;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),t=0,u=e.length;t<u;t++)a[t]=l(e[t],t);else if("number"===typeof e)for(a=new Array(e),t=0;t<e;t++)a[t]=l(t+1,t);else if(i(e))if(ie&&e[Symbol.iterator]){a=[];var v=e[Symbol.iterator](),b=v.next();while(!b.done)a.push(l(b.value,a.length)),b=v.next()}else for(r=Object.keys(e),a=new Array(r.length),t=0,u=r.length;t<u;t++)o=r[t],a[t]=l(e[o],o,t);return n(a)||(a=[]),a._isVList=!0,a}function jl(e,l,a,t){var n,u=this.$scopedSlots[e];u?(a=a||{},t&&(a=T(T({},t),a)),n=u(a)||l):n=this.$slots[e]||l;var r=a&&a.slot;return r?this.$createElement("template",{slot:r},n):n}function Tl(e){return Ve(this.$options,"filters",e,!0)||I}function Pl(e,l){return Array.isArray(e)?-1===e.indexOf(l):e!==l}function Rl(e,l,a,t,n){var u=F.keyCodes[l]||a;return n&&t&&!F.keyCodes[l]?Pl(n,t):u?Pl(u,e):t?S(t)!==l:void 0}function Dl(e,l,a,t,n){if(a)if(i(a)){var u;Array.isArray(a)&&(a=P(a));var r=function(r){if("class"===r||"style"===r||g(r))u=e;else{var o=e.attrs&&e.attrs.type;u=t||F.mustUseProp(l,o,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var i=k(r),v=S(r);if(!(i in u)&&!(v in u)&&(u[r]=a[r],n)){var b=e.on||(e.on={});b["update:"+r]=function(e){a[r]=e}}};for(var o in a)r(o)}else;return e}function Il(e,l){var a=this._staticTrees||(this._staticTrees=[]),t=a[e];return t&&!l?t:(t=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Nl(t,"__static__"+e,!1),t)}function Ml(e,l,a){return Nl(e,"__once__"+l+(a?"_"+a:""),!0),e}function Nl(e,l,a){if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]&&"string"!==typeof e[t]&&Bl(e[t],l+"_"+t,a);else Bl(e,l,a)}function Bl(e,l,a){e.isStatic=!0,e.key=l,e.isOnce=a}function Ll(e,l){if(l)if(b(l)){var a=e.on=e.on?T({},e.on):{};for(var t in l){var n=a[t],u=l[t];a[t]=n?[].concat(n,u):u}}else;return e}function ql(e,l,a,t){l=l||{$stable:!a};for(var n=0;n<e.length;n++){var u=e[n];Array.isArray(u)?ql(u,l,a):u&&(u.proxy&&(u.fn.proxy=!0),l[u.key]=u.fn)}return t&&(l.$key=t),l}function Fl(e,l){for(var a=0;a<l.length;a+=2){var t=l[a];"string"===typeof t&&t&&(e[l[a]]=l[a+1])}return e}function Hl(e,l){return"string"===typeof e?l+e:e}function Ul(e){e._o=Ml,e._n=h,e._s=p,e._l=$l,e._t=jl,e._q=M,e._i=N,e._m=Il,e._f=Tl,e._k=Rl,e._b=Dl,e._v=ge,e._e=de,e._u=ql,e._g=Ll,e._d=Fl,e._p=Hl}function Vl(e,l,t,n,r){var o,i=this,v=r.options;_(n,"_uid")?(o=Object.create(n),o._original=n):(o=n,n=n._original);var b=u(v._compiled),s=!b;this.data=e,this.props=l,this.children=t,this.parent=n,this.listeners=e.on||a,this.injections=kl(v.inject,n),this.slots=function(){return i.$slots||Sl(e.scopedSlots,i.$slots=Al(t,n)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Sl(e.scopedSlots,this.slots())}}),b&&(this.$options=v,this.$slots=this.slots(),this.$scopedSlots=Sl(e.scopedSlots,this.$slots)),v._scopeId?this._c=function(e,l,a,t){var u=ta(o,e,l,a,t,s);return u&&!Array.isArray(u)&&(u.fnScopeId=v._scopeId,u.fnContext=n),u}:this._c=function(e,l,a,t){return ta(o,e,l,a,t,s)}}function zl(e,l,t,u,r){var o=e.options,i={},v=o.props;if(n(v))for(var b in v)i[b]=ze(b,v,l||a);else n(t.attrs)&&Jl(i,t.attrs),n(t.props)&&Jl(i,t.props);var s=new Vl(t,i,r,u,e),c=o.render.call(null,s._c,s);if(c instanceof pe)return Gl(c,t,s.parent,o,s);if(Array.isArray(c)){for(var f=ml(c)||[],p=new Array(f.length),h=0;h<f.length;h++)p[h]=Gl(f[h],t,s.parent,o,s);return p}}function Gl(e,l,a,t,n){var u=me(e);return u.fnContext=a,u.fnOptions=t,l.slot&&((u.data||(u.data={})).slot=l.slot),u}function Jl(e,l){for(var a in l)e[k(a)]=l[a]}Ul(Vl.prototype);var Wl={init:function(e,l){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;Wl.prepatch(a,a)}else{var t=e.componentInstance=Yl(e,wa);t.$mount(l?e.elm:void 0,l)}},prepatch:function(e,l){var a=l.componentOptions,t=l.componentInstance=e.componentInstance;Sa(t,a.propsData,a.listeners,l,a.children)},insert:function(e){var l=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,ja(a,"mounted")),e.data.keepAlive&&(l._isMounted?Ha(a):Ea(a,!0))},destroy:function(e){var l=e.componentInstance;l._isDestroyed||(e.data.keepAlive?$a(l,!0):l.$destroy())}},Kl=Object.keys(Wl);function Xl(e,l,a,r,o){if(!t(e)){var v=a.$options._base;if(i(e)&&(e=v.extend(e)),"function"===typeof e){var b;if(t(e.cid)&&(b=e,e=fa(b,v),void 0===e))return ca(b,l,a,r,o);l=l||{},st(e),n(l.model)&&ea(e.options,l);var s=hl(l,e,o);if(u(e.options.functional))return zl(e,s,l,a,r);var c=l.on;if(l.on=l.nativeOn,u(e.options.abstract)){var f=l.slot;l={},f&&(l.slot=f)}Zl(l);var p=e.options.name||o,h=new pe("vue-component-"+e.cid+(p?"-"+p:""),l,void 0,void 0,void 0,a,{Ctor:e,propsData:s,listeners:c,tag:o,children:r},b);return h}}}function Yl(e,l){var a={_isComponent:!0,_parentVnode:e,parent:l},t=e.data.inlineTemplate;return n(t)&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),new e.componentOptions.Ctor(a)}function Zl(e){for(var l=e.hook||(e.hook={}),a=0;a<Kl.length;a++){var t=Kl[a],n=l[t],u=Wl[t];n===u||n&&n._merged||(l[t]=n?Ql(u,n):u)}}function Ql(e,l){var a=function(a,t){e(a,t),l(a,t)};return a._merged=!0,a}function ea(e,l){var a=e.model&&e.model.prop||"value",t=e.model&&e.model.event||"input";(l.attrs||(l.attrs={}))[a]=l.model.value;var u=l.on||(l.on={}),r=u[t],o=l.model.callback;n(r)?(Array.isArray(r)?-1===r.indexOf(o):r!==o)&&(u[t]=[o].concat(r)):u[t]=o}var la=1,aa=2;function ta(e,l,a,t,n,r){return(Array.isArray(a)||o(a))&&(n=t,t=a,a=void 0),u(r)&&(n=aa),na(e,l,a,t,n)}function na(e,l,a,t,u){if(n(a)&&n(a.__ob__))return de();if(n(a)&&n(a.is)&&(l=a.is),!l)return de();var r,o,i;(Array.isArray(t)&&"function"===typeof t[0]&&(a=a||{},a.scopedSlots={default:t[0]},t.length=0),u===aa?t=ml(t):u===la&&(t=gl(t)),"string"===typeof l)?(o=e.$vnode&&e.$vnode.ns||F.getTagNamespace(l),r=F.isReservedTag(l)?new pe(F.parsePlatformTagName(l),a,t,void 0,void 0,e):a&&a.pre||!n(i=Ve(e.$options,"components",l))?new pe(l,a,t,void 0,void 0,e):Xl(i,a,e,t,l)):r=Xl(l,a,e,t);return Array.isArray(r)?r:n(r)?(n(o)&&ua(r,o),n(a)&&ra(a),r):de()}function ua(e,l,a){if(e.ns=l,"foreignObject"===e.tag&&(l=void 0,a=!0),n(e.children))for(var r=0,o=e.children.length;r<o;r++){var i=e.children[r];n(i.tag)&&(t(i.ns)||u(a)&&"svg"!==i.tag)&&ua(i,l,a)}}function ra(e){i(e.style)&&bl(e.style),i(e.class)&&bl(e.class)}function oa(e){e._vnode=null,e._staticTrees=null;var l=e.$options,t=e.$vnode=l._parentVnode,n=t&&t.context;e.$slots=Al(l._renderChildren,n),e.$scopedSlots=a,e._c=function(l,a,t,n){return ta(e,l,a,t,n,!1)},e.$createElement=function(l,a,t,n){return ta(e,l,a,t,n,!0)};var u=t&&t.data;$e(e,"$attrs",u&&u.attrs||a,null,!0),$e(e,"$listeners",l._parentListeners||a,null,!0)}var ia,va=null;function ba(e){Ul(e.prototype),e.prototype.$nextTick=function(e){return il(e,this)},e.prototype._render=function(){var e,l=this,a=l.$options,t=a.render,n=a._parentVnode;n&&(l.$scopedSlots=Sl(n.data.scopedSlots,l.$slots,l.$scopedSlots)),l.$vnode=n;try{va=l,e=t.call(l._renderProxy,l.$createElement)}catch(en){Xe(en,l,"render"),e=l._vnode}finally{va=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof pe||(e=de()),e.parent=n,e}}function sa(e,l){return(e.__esModule||ie&&"Module"===e[Symbol.toStringTag])&&(e=e.default),i(e)?l.extend(e):e}function ca(e,l,a,t,n){var u=de();return u.asyncFactory=e,u.asyncMeta={data:l,context:a,children:t,tag:n},u}function fa(e,l){if(u(e.error)&&n(e.errorComp))return e.errorComp;if(n(e.resolved))return e.resolved;var a=va;if(a&&n(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),u(e.loading)&&n(e.loadingComp))return e.loadingComp;if(a&&!n(e.owners)){var r=e.owners=[a],o=!0,v=null,b=null;a.$on("hook:destroyed",function(){return m(r,a)});var s=function(e){for(var l=0,a=r.length;l<a;l++)r[l].$forceUpdate();e&&(r.length=0,null!==v&&(clearTimeout(v),v=null),null!==b&&(clearTimeout(b),b=null))},c=B(function(a){e.resolved=sa(a,l),o?r.length=0:s(!0)}),p=B(function(l){n(e.errorComp)&&(e.error=!0,s(!0))}),h=e(c,p);return i(h)&&(f(h)?t(e.resolved)&&h.then(c,p):f(h.component)&&(h.component.then(c,p),n(h.error)&&(e.errorComp=sa(h.error,l)),n(h.loading)&&(e.loadingComp=sa(h.loading,l),0===h.delay?e.loading=!0:v=setTimeout(function(){v=null,t(e.resolved)&&t(e.error)&&(e.loading=!0,s(!1))},h.delay||200)),n(h.timeout)&&(b=setTimeout(function(){b=null,t(e.resolved)&&p(null)},h.timeout)))),o=!1,e.loading?e.loadingComp:e.resolved}}function pa(e){return e.isComment&&e.asyncFactory}function ha(e){if(Array.isArray(e))for(var l=0;l<e.length;l++){var a=e[l];if(n(a)&&(n(a.componentOptions)||pa(a)))return a}}function da(e){e._events=Object.create(null),e._hasHookEvent=!1;var l=e.$options._parentListeners;l&&_a(e,l)}function ga(e,l){ia.$on(e,l)}function ma(e,l){ia.$off(e,l)}function ya(e,l){var a=ia;return function t(){var n=l.apply(null,arguments);null!==n&&a.$off(e,t)}}function _a(e,l,a){ia=e,pl(l,a||{},ga,ma,ya,e),ia=void 0}function xa(e){var l=/^hook:/;e.prototype.$on=function(e,a){var t=this;if(Array.isArray(e))for(var n=0,u=e.length;n<u;n++)t.$on(e[n],a);else(t._events[e]||(t._events[e]=[])).push(a),l.test(e)&&(t._hasHookEvent=!0);return t},e.prototype.$once=function(e,l){var a=this;function t(){a.$off(e,t),l.apply(a,arguments)}return t.fn=l,a.$on(e,t),a},e.prototype.$off=function(e,l){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var t=0,n=e.length;t<n;t++)a.$off(e[t],l);return a}var u,r=a._events[e];if(!r)return a;if(!l)return a._events[e]=null,a;var o=r.length;while(o--)if(u=r[o],u===l||u.fn===l){r.splice(o,1);break}return a},e.prototype.$emit=function(e){var l=this,a=l._events[e];if(a){a=a.length>1?j(a):a;for(var t=j(arguments,1),n='event handler for "'+e+'"',u=0,r=a.length;u<r;u++)Ye(a[u],l,t,l,n)}return l}}var wa=null;function ka(e){var l=wa;return wa=e,function(){wa=l}}function Aa(e){var l=e.$options,a=l.parent;if(a&&!l.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Oa(e){e.prototype._update=function(e,l){var a=this,t=a.$el,n=a._vnode,u=ka(a);a._vnode=e,a.$el=n?a.__patch__(n,e):a.__patch__(a.$el,e,l,!1),u(),t&&(t.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){ja(e,"beforeDestroy"),e._isBeingDestroyed=!0;var l=e.$parent;!l||l._isBeingDestroyed||e.$options.abstract||m(l.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),ja(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Sa(e,l,t,n,u){var r=n.data.scopedSlots,o=e.$scopedSlots,i=!!(r&&!r.$stable||o!==a&&!o.$stable||r&&e.$scopedSlots.$key!==r.$key),v=!!(u||e.$options._renderChildren||i);if(e.$options._parentVnode=n,e.$vnode=n,e._vnode&&(e._vnode.parent=n),e.$options._renderChildren=u,e.$attrs=n.data.attrs||a,e.$listeners=t||a,l&&e.$options.props){Ae(!1);for(var b=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var f=s[c],p=e.$options.props;b[f]=ze(f,p,l,e)}Ae(!0),e.$options.propsData=l}t=t||a;var h=e.$options._parentListeners;e.$options._parentListeners=t,_a(e,t,h),v&&(e.$slots=Al(u,n.context),e.$forceUpdate())}function Ca(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Ea(e,l){if(l){if(e._directInactive=!1,Ca(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Ea(e.$children[a]);ja(e,"activated")}}function $a(e,l){if((!l||(e._directInactive=!0,!Ca(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)$a(e.$children[a]);ja(e,"deactivated")}}function ja(e,l){ce();var a=e.$options[l],t=l+" hook";if(a)for(var n=0,u=a.length;n<u;n++)Ye(a[n],e,null,e,t);e._hasHookEvent&&e.$emit("hook:"+l),fe()}var Ta=[],Pa=[],Ra={},Da=!1,Ia=!1,Ma=0;function Na(){Ma=Ta.length=Pa.length=0,Ra={},Da=Ia=!1}var Ba=Date.now;if(K&&!Q){var La=window.performance;La&&"function"===typeof La.now&&Ba()>document.createEvent("Event").timeStamp&&(Ba=function(){return La.now()})}function qa(){var e,l;for(Ba(),Ia=!0,Ta.sort(function(e,l){return e.id-l.id}),Ma=0;Ma<Ta.length;Ma++)e=Ta[Ma],e.before&&e.before(),l=e.id,Ra[l]=null,e.run();var a=Pa.slice(),t=Ta.slice();Na(),Ua(a),Fa(t),ue&&F.devtools&&ue.emit("flush")}function Fa(e){var l=e.length;while(l--){var a=e[l],t=a.vm;t._watcher===a&&t._isMounted&&!t._isDestroyed&&ja(t,"updated")}}function Ha(e){e._inactive=!1,Pa.push(e)}function Ua(e){for(var l=0;l<e.length;l++)e[l]._inactive=!0,Ea(e[l],!0)}function Va(e){var l=e.id;if(null==Ra[l]){if(Ra[l]=!0,Ia){var a=Ta.length-1;while(a>Ma&&Ta[a].id>e.id)a--;Ta.splice(a+1,0,e)}else Ta.push(e);Da||(Da=!0,il(qa))}}var za=0,Ga=function(e,l,a,t,n){this.vm=e,n&&(e._watcher=this),e._watchers.push(this),t?(this.deep=!!t.deep,this.user=!!t.user,this.lazy=!!t.lazy,this.sync=!!t.sync,this.before=t.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++za,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new oe,this.newDepIds=new oe,this.expression="","function"===typeof l?this.getter=l:(this.getter=G(l),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};Ga.prototype.get=function(){var e;ce(this);var l=this.vm;try{e=this.getter.call(l,l)}catch(en){if(!this.user)throw en;Xe(en,l,'getter for watcher "'+this.expression+'"')}finally{this.deep&&bl(e),fe(),this.cleanupDeps()}return e},Ga.prototype.addDep=function(e){var l=e.id;this.newDepIds.has(l)||(this.newDepIds.add(l),this.newDeps.push(e),this.depIds.has(l)||e.addSub(this))},Ga.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var l=this.deps[e];this.newDepIds.has(l.id)||l.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Ga.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Va(this)},Ga.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||i(e)||this.deep){var l=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,l)}catch(en){Xe(en,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,l)}}},Ga.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ga.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},Ga.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var Ja={enumerable:!0,configurable:!0,get:R,set:R};function Wa(e,l,a){Ja.get=function(){return this[l][a]},Ja.set=function(e){this[l][a]=e},Object.defineProperty(e,a,Ja)}function Ka(e){e._watchers=[];var l=e.$options;l.props&&Xa(e,l.props),l.methods&&nt(e,l.methods),l.data?Ya(e):Ee(e._data={},!0),l.computed&&et(e,l.computed),l.watch&&l.watch!==ae&&ut(e,l.watch)}function Xa(e,l){var a=e.$options.propsData||{},t=e._props={},n=e.$options._propKeys=[],u=!e.$parent;u||Ae(!1);var r=function(u){n.push(u);var r=ze(u,l,a,e);$e(t,u,r),u in e||Wa(e,"_props",u)};for(var o in l)r(o);Ae(!0)}function Ya(e){var l=e.$options.data;l=e._data="function"===typeof l?Za(l,e):l||{},b(l)||(l={});var a=Object.keys(l),t=e.$options.props,n=(e.$options.methods,a.length);while(n--){var u=a[n];0,t&&_(t,u)||U(u)||Wa(e,"_data",u)}Ee(l,!0)}function Za(e,l){ce();try{return e.call(l,l)}catch(en){return Xe(en,l,"data()"),{}}finally{fe()}}var Qa={lazy:!0};function et(e,l){var a=e._computedWatchers=Object.create(null),t=ne();for(var n in l){var u=l[n],r="function"===typeof u?u:u.get;0,t||(a[n]=new Ga(e,r||R,R,Qa)),n in e||lt(e,n,u)}}function lt(e,l,a){var t=!ne();"function"===typeof a?(Ja.get=t?at(l):tt(a),Ja.set=R):(Ja.get=a.get?t&&!1!==a.cache?at(l):tt(a.get):R,Ja.set=a.set||R),Object.defineProperty(e,l,Ja)}function at(e){return function(){var l=this._computedWatchers&&this._computedWatchers[e];if(l)return l.dirty&&l.evaluate(),se.SharedObject.target&&l.depend(),l.value}}function tt(e){return function(){return e.call(this,this)}}function nt(e,l){e.$options.props;for(var a in l)e[a]="function"!==typeof l[a]?R:$(l[a],e)}function ut(e,l){for(var a in l){var t=l[a];if(Array.isArray(t))for(var n=0;n<t.length;n++)rt(e,a,t[n]);else rt(e,a,t)}}function rt(e,l,a,t){return b(a)&&(t=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(l,a,t)}function ot(e){var l={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",l),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=je,e.prototype.$delete=Te,e.prototype.$watch=function(e,l,a){var t=this;if(b(l))return rt(t,e,l,a);a=a||{},a.user=!0;var n=new Ga(t,e,l,a);if(a.immediate)try{l.call(t,n.value)}catch(u){Xe(u,t,'callback for immediate watcher "'+n.expression+'"')}return function(){n.teardown()}}}var it=0;function vt(e){e.prototype._init=function(e){var l=this;l._uid=it++,l._isVue=!0,e&&e._isComponent?bt(l,e):l.$options=Ue(st(l.constructor),e||{},l),l._renderProxy=l,l._self=l,Aa(l),da(l),oa(l),ja(l,"beforeCreate"),"mp-toutiao"!==l.mpHost&&wl(l),Ka(l),"mp-toutiao"!==l.mpHost&&xl(l),"mp-toutiao"!==l.mpHost&&ja(l,"created"),l.$options.el&&l.$mount(l.$options.el)}}function bt(e,l){var a=e.$options=Object.create(e.constructor.options),t=l._parentVnode;a.parent=l.parent,a._parentVnode=t;var n=t.componentOptions;a.propsData=n.propsData,a._parentListeners=n.listeners,a._renderChildren=n.children,a._componentTag=n.tag,l.render&&(a.render=l.render,a.staticRenderFns=l.staticRenderFns)}function st(e){var l=e.options;if(e.super){var a=st(e.super),t=e.superOptions;if(a!==t){e.superOptions=a;var n=ct(e);n&&T(e.extendOptions,n),l=e.options=Ue(a,e.extendOptions),l.name&&(l.components[l.name]=e)}}return l}function ct(e){var l,a=e.options,t=e.sealedOptions;for(var n in a)a[n]!==t[n]&&(l||(l={}),l[n]=a[n]);return l}function ft(e){this._init(e)}function pt(e){e.use=function(e){var l=this._installedPlugins||(this._installedPlugins=[]);if(l.indexOf(e)>-1)return this;var a=j(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),l.push(e),this}}function ht(e){e.mixin=function(e){return this.options=Ue(this.options,e),this}}function dt(e){e.cid=0;var l=1;e.extend=function(e){e=e||{};var a=this,t=a.cid,n=e._Ctor||(e._Ctor={});if(n[t])return n[t];var u=e.name||a.options.name;var r=function(e){this._init(e)};return r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.cid=l++,r.options=Ue(a.options,e),r["super"]=a,r.options.props&&gt(r),r.options.computed&&mt(r),r.extend=a.extend,r.mixin=a.mixin,r.use=a.use,L.forEach(function(e){r[e]=a[e]}),u&&(r.options.components[u]=r),r.superOptions=a.options,r.extendOptions=e,r.sealedOptions=T({},r.options),n[t]=r,r}}function gt(e){var l=e.options.props;for(var a in l)Wa(e.prototype,"_props",a)}function mt(e){var l=e.options.computed;for(var a in l)lt(e.prototype,a,l[a])}function yt(e){L.forEach(function(l){e[l]=function(e,a){return a?("component"===l&&b(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===l&&"function"===typeof a&&(a={bind:a,update:a}),this.options[l+"s"][e]=a,a):this.options[l+"s"][e]}})}function _t(e){return e&&(e.Ctor.options.name||e.tag)}function xt(e,l){return Array.isArray(e)?e.indexOf(l)>-1:"string"===typeof e?e.split(",").indexOf(l)>-1:!!s(e)&&e.test(l)}function wt(e,l){var a=e.cache,t=e.keys,n=e._vnode;for(var u in a){var r=a[u];if(r){var o=_t(r.componentOptions);o&&!l(o)&&kt(a,u,t,n)}}}function kt(e,l,a,t){var n=e[l];!n||t&&n.tag===t.tag||n.componentInstance.$destroy(),e[l]=null,m(a,l)}vt(ft),ot(ft),xa(ft),Oa(ft),ba(ft);var At=[String,RegExp,Array],Ot={name:"keep-alive",abstract:!0,props:{include:At,exclude:At,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)kt(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(l){wt(e,function(e){return xt(l,e)})}),this.$watch("exclude",function(l){wt(e,function(e){return!xt(l,e)})})},render:function(){var e=this.$slots.default,l=ha(e),a=l&&l.componentOptions;if(a){var t=_t(a),n=this,u=n.include,r=n.exclude;if(u&&(!t||!xt(u,t))||r&&t&&xt(r,t))return l;var o=this,i=o.cache,v=o.keys,b=null==l.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):l.key;i[b]?(l.componentInstance=i[b].componentInstance,m(v,b),v.push(b)):(i[b]=l,v.push(b),this.max&&v.length>parseInt(this.max)&&kt(i,v[0],v,this._vnode)),l.data.keepAlive=!0}return l||e&&e[0]}},St={KeepAlive:Ot};function Ct(e){var l={get:function(){return F}};Object.defineProperty(e,"config",l),e.util={warn:ve,extend:T,mergeOptions:Ue,defineReactive:$e},e.set=je,e.delete=Te,e.nextTick=il,e.observable=function(e){return Ee(e),e},e.options=Object.create(null),L.forEach(function(l){e.options[l+"s"]=Object.create(null)}),e.options._base=e,T(e.options.components,St),pt(e),ht(e),dt(e),yt(e)}Ct(ft),Object.defineProperty(ft.prototype,"$isServer",{get:ne}),Object.defineProperty(ft.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(ft,"FunctionalRenderContext",{value:Vl}),ft.version="2.6.10";var Et="[object Array]",$t="[object Object]";function jt(e,l){var a={};return Tt(e,l),Pt(e,l,"",a),a}function Tt(e,l){if(e!==l){var a=Dt(e),t=Dt(l);if(a==$t&&t==$t){if(Object.keys(e).length>=Object.keys(l).length)for(var n in l){var u=e[n];void 0===u?e[n]=null:Tt(u,l[n])}}else a==Et&&t==Et&&e.length>=l.length&&l.forEach(function(l,a){Tt(e[a],l)})}}function Pt(e,l,a,t){if(e!==l){var n=Dt(e),u=Dt(l);if(n==$t)if(u!=$t||Object.keys(e).length<Object.keys(l).length)Rt(t,a,e);else{var r=function(n){var u=e[n],r=l[n],o=Dt(u),i=Dt(r);if(o!=Et&&o!=$t)u!=l[n]&&Rt(t,(""==a?"":a+".")+n,u);else if(o==Et)i!=Et?Rt(t,(""==a?"":a+".")+n,u):u.length<r.length?Rt(t,(""==a?"":a+".")+n,u):u.forEach(function(e,l){Pt(e,r[l],(""==a?"":a+".")+n+"["+l+"]",t)});else if(o==$t)if(i!=$t||Object.keys(u).length<Object.keys(r).length)Rt(t,(""==a?"":a+".")+n,u);else for(var v in u)Pt(u[v],r[v],(""==a?"":a+".")+n+"."+v,t)};for(var o in e)r(o)}else n==Et?u!=Et?Rt(t,a,e):e.length<l.length?Rt(t,a,e):e.forEach(function(e,n){Pt(e,l[n],a+"["+n+"]",t)}):Rt(t,a,e)}}function Rt(e,l,a){e[l]=a}function Dt(e){return Object.prototype.toString.call(e)}function It(e){if(e.__next_tick_callbacks&&e.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var l=e.$scope;console.log("["+ +new Date+"]["+(l.is||l.route)+"]["+e._uid+"]:flushCallbacks["+e.__next_tick_callbacks.length+"]")}var a=e.__next_tick_callbacks.slice(0);e.__next_tick_callbacks.length=0;for(var t=0;t<a.length;t++)a[t]()}}function Mt(e){return Ta.find(function(l){return e._watcher===l})}function Nt(e,l){if(!e.__next_tick_pending&&!Mt(e)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=e.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+e._uid+"]:nextVueTick")}return il(l,e)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var t=e.$scope;console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+e._uid+"]:nextMPTick")}var n;if(e.__next_tick_callbacks||(e.__next_tick_callbacks=[]),e.__next_tick_callbacks.push(function(){if(l)try{l.call(e)}catch(en){Xe(en,e,"nextTick")}else n&&n(e)}),!l&&"undefined"!==typeof Promise)return new Promise(function(e){n=e})}function Bt(e){var l=Object.create(null),a=[].concat(Object.keys(e._data||{}),Object.keys(e._computedWatchers||{}));return a.reduce(function(l,a){return l[a]=e[a],l},l),Object.assign(l,e.$mp.data||{}),Array.isArray(e.$options.behaviors)&&-1!==e.$options.behaviors.indexOf("uni://form-field")&&(l["name"]=e.name,l["value"]=e.value),JSON.parse(JSON.stringify(l))}var Lt=function(e,l){var a=this;if(null!==l&&("page"===this.mpType||"component"===this.mpType)){var t=this.$scope,n=Object.create(null);try{n=Bt(this)}catch(o){console.error(o)}n.__webviewId__=t.data.__webviewId__;var u=Object.create(null);Object.keys(n).forEach(function(e){u[e]=t.data[e]});var r=jt(n,u);Object.keys(r).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(t.is||t.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,t.setData(r,function(){a.__next_tick_pending=!1,It(a)})):It(this)}};function qt(){}function Ft(e,l,a){if(!e.mpType)return e;"app"===e.mpType&&(e.$options.render=qt),e.$options.render||(e.$options.render=qt),"mp-toutiao"!==e.mpHost&&ja(e,"beforeMount");var t=function(){e._update(e._render(),a)};return new Ga(e,t,R,{before:function(){e._isMounted&&!e._isDestroyed&&ja(e,"beforeUpdate")}},!0),a=!1,e}function Ht(e,l){return n(e)||n(l)?Ut(e,Vt(l)):""}function Ut(e,l){return e?l?e+" "+l:e:l||""}function Vt(e){return Array.isArray(e)?zt(e):i(e)?Gt(e):"string"===typeof e?e:""}function zt(e){for(var l,a="",t=0,u=e.length;t<u;t++)n(l=Vt(e[t]))&&""!==l&&(a&&(a+=" "),a+=l);return a}function Gt(e){var l="";for(var a in e)e[a]&&(l&&(l+=" "),l+=a);return l}var Jt=x(function(e){var l={},a=/;(?![^(]*\))/g,t=/:(.+)/;return e.split(a).forEach(function(e){if(e){var a=e.split(t);a.length>1&&(l[a[0].trim()]=a[1].trim())}}),l});function Wt(e){return Array.isArray(e)?P(e):"string"===typeof e?Jt(e):e}var Kt=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xt(e,l){var a=l.split("."),t=a[0];return 0===t.indexOf("__$n")&&(t=parseInt(t.replace("__$n",""))),1===a.length?e[t]:Xt(e[t],a.slice(1).join("."))}function Yt(e){e.config.errorHandler=function(e){console.error(e)};var l=e.prototype.$emit;e.prototype.$emit=function(e){return this.$scope&&e&&this.$scope["triggerEvent"](e,{__args__:j(arguments,1)}),l.apply(this,arguments)},e.prototype.$nextTick=function(e){return Nt(this,e)},Kt.forEach(function(l){e.prototype[l]=function(e){if(this.$scope)return this.$scope[l](e)}}),e.prototype.__init_provide=xl,e.prototype.__init_injections=wl,e.prototype.__call_hook=function(e,l){var a=this;ce();var t,n=a.$options[e],u=e+" hook";if(n)for(var r=0,o=n.length;r<o;r++)t=Ye(n[r],a,l?[l]:null,a,u);return a._hasHookEvent&&a.$emit("hook:"+e),fe(),t},e.prototype.__set_model=function(e,l,a,t){Array.isArray(t)&&(-1!==t.indexOf("trim")&&(a=a.trim()),-1!==t.indexOf("number")&&(a=this._n(a))),e||(e=this),e[l]=a},e.prototype.__set_sync=function(e,l,a){e||(e=this),e[l]=a},e.prototype.__get_orig=function(e){return b(e)&&e["$orig"]||e},e.prototype.__get_value=function(e,l){return Xt(l||this,e)},e.prototype.__get_class=function(e,l){return Ht(l,e)},e.prototype.__get_style=function(e,l){if(!e&&!l)return"";var a=Wt(e),t=l?T(l,a):a;return Object.keys(t).map(function(e){return S(e)+":"+t[e]}).join(";")},e.prototype.__map=function(e,l){var a,t,n,u,r;if(Array.isArray(e)){for(a=new Array(e.length),t=0,n=e.length;t<n;t++)a[t]=l(e[t],t);return a}if(i(e)){for(u=Object.keys(e),a=Object.create(null),t=0,n=u.length;t<n;t++)r=u[t],a[r]=l(e[r],r,t);return a}return[]}}var Zt=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Qt(e){var l=e.extend;e.extend=function(e){e=e||{};var a=e.methods;return a&&Object.keys(a).forEach(function(l){-1!==Zt.indexOf(l)&&(e[l]=a[l],delete a[l])}),l.call(this,e)};var a=e.config.optionMergeStrategies,t=a.created;Zt.forEach(function(e){a[e]=t}),e.prototype.__lifecycle_hooks__=Zt}ft.prototype.__patch__=Lt,ft.prototype.$mount=function(e,l){return Ft(this,e,l)},Qt(ft),Yt(ft),l["default"]=ft}.call(this,a("c8ba"))},"6d50":function(module,exports,__webpack_require__){"use strict";(function(e,l){module.exports=l()})(0,function(){return function(e){var l={};function a(t){if(l[t])return l[t].exports;var n=l[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}return a.m=e,a.c=l,a.p="",a(0)}([function(e,l,a){var t,n=a(1),u=a(3),r=a(5),o=a(20),i=a(23),v=a(25);"undefined"!==typeof window&&(t=a(27))
/*!
          Mock - 模拟请求 & 模拟数据
          https://github.com/nuysoft/Mock
          墨智 mozhi.gyy@taobao.com nuysoft@gmail.com
      */;var b={Handler:n,Random:r,Util:u,XHR:t,RE:o,toJSONSchema:i,valid:v,heredoc:u.heredoc,setup:function(e){return t.setup(e)},_mocked:{},version:"1.0.1-beta3"};t&&(t.Mock=b),b.mock=function(e,l,a){return 1===arguments.length?n.gen(e):(2===arguments.length&&(a=l,l=void 0),t&&(window.XMLHttpRequest=t),b._mocked[e+(l||"")]={rurl:e,rtype:l,template:a},b)},e.exports=b},function(module,exports,__webpack_require__){var Constant=__webpack_require__(2),Util=__webpack_require__(3),Parser=__webpack_require__(4),Random=__webpack_require__(5),RE=__webpack_require__(20),Handler={extend:Util.extend,gen:function(e,l,a){l=void 0==l?"":l+"",a=a||{},a={path:a.path||[Constant.GUID],templatePath:a.templatePath||[Constant.GUID++],currentContext:a.currentContext,templateCurrentContext:a.templateCurrentContext||e,root:a.root||a.currentContext,templateRoot:a.templateRoot||a.templateCurrentContext||e};var t,n=Parser.parse(l),u=Util.type(e);return Handler[u]?(t=Handler[u]({type:u,template:e,name:l,parsedName:l?l.replace(Constant.RE_KEY,"$1"):l,rule:n,context:a}),a.root||(a.root=t),t):e}};Handler.extend({array:function(e){var l,a,t=[];if(0===e.template.length)return t;if(e.rule.parameters)if(1===e.rule.min&&void 0===e.rule.max)e.context.path.push(e.name),e.context.templatePath.push(e.name),t=Random.pick(Handler.gen(e.template,void 0,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();else if(e.rule.parameters[2])e.template.__order_index=e.template.__order_index||0,e.context.path.push(e.name),e.context.templatePath.push(e.name),t=Handler.gen(e.template,void 0,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})[e.template.__order_index%e.template.length],e.template.__order_index+=+e.rule.parameters[2],e.context.path.pop(),e.context.templatePath.pop();else for(l=0;l<e.rule.count;l++)for(a=0;a<e.template.length;a++)e.context.path.push(t.length),e.context.templatePath.push(a),t.push(Handler.gen(e.template[a],t.length,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();else for(l=0;l<e.template.length;l++)e.context.path.push(l),e.context.templatePath.push(l),t.push(Handler.gen(e.template[l],l,{path:e.context.path,templatePath:e.context.templatePath,currentContext:t,templateCurrentContext:e.template,root:e.context.root||t,templateRoot:e.context.templateRoot||e.template})),e.context.path.pop(),e.context.templatePath.pop();return t},object:function(e){var l,a,t,n,u,r,o={};if(void 0!=e.rule.min)for(l=Util.keys(e.template),l=Random.shuffle(l),l=l.slice(0,e.rule.count),r=0;r<l.length;r++)t=l[r],n=t.replace(Constant.RE_KEY,"$1"),e.context.path.push(n),e.context.templatePath.push(t),o[n]=Handler.gen(e.template[t],t,{path:e.context.path,templatePath:e.context.templatePath,currentContext:o,templateCurrentContext:e.template,root:e.context.root||o,templateRoot:e.context.templateRoot||e.template}),e.context.path.pop(),e.context.templatePath.pop();else{for(t in l=[],a=[],e.template)("function"===typeof e.template[t]?a:l).push(t);for(l=l.concat(a),r=0;r<l.length;r++)t=l[r],n=t.replace(Constant.RE_KEY,"$1"),e.context.path.push(n),e.context.templatePath.push(t),o[n]=Handler.gen(e.template[t],t,{path:e.context.path,templatePath:e.context.templatePath,currentContext:o,templateCurrentContext:e.template,root:e.context.root||o,templateRoot:e.context.templateRoot||e.template}),e.context.path.pop(),e.context.templatePath.pop(),u=t.match(Constant.RE_KEY),u&&u[2]&&"number"===Util.type(e.template[t])&&(e.template[t]+=parseInt(u[2],10))}return o},number:function(e){var l,a;if(e.rule.decimal){e.template+="",a=e.template.split("."),a[0]=e.rule.range?e.rule.count:a[0],a[1]=(a[1]||"").slice(0,e.rule.dcount);while(a[1].length<e.rule.dcount)a[1]+=a[1].length<e.rule.dcount-1?Random.character("number"):Random.character("123456789");l=parseFloat(a.join("."),10)}else l=e.rule.range&&!e.rule.parameters[2]?e.rule.count:e.template;return l},boolean:function(e){var l;return l=e.rule.parameters?Random.bool(e.rule.min,e.rule.max,e.template):e.template,l},string:function(e){var l,a,t,n,u="";if(e.template.length){for(void 0==e.rule.count&&(u+=e.template),l=0;l<e.rule.count;l++)u+=e.template;for(a=u.match(Constant.RE_PLACEHOLDER)||[],l=0;l<a.length;l++)if(t=a[l],/^\\/.test(t))a.splice(l--,1);else{if(n=Handler.placeholder(t,e.context.currentContext,e.context.templateCurrentContext,e),1===a.length&&t===u&&typeof n!==typeof u){u=n;break}u=u.replace(t,n)}}else u=e.rule.range?Random.string(e.rule.count):e.template;return u},function:function(e){return e.template.call(e.context.currentContext,e)},regexp:function(e){var l="";void 0==e.rule.count&&(l+=e.template.source);for(var a=0;a<e.rule.count;a++)l+=e.template.source;return RE.Handler.gen(RE.Parser.parse(l))}}),Handler.extend({_all:function(){var e={};for(var l in Random)e[l.toLowerCase()]=l;return e},placeholder:function placeholder(_placeholder,obj,templateContext,options){Constant.RE_PLACEHOLDER.exec("");var parts=Constant.RE_PLACEHOLDER.exec(_placeholder),key=parts&&parts[1],lkey=key&&key.toLowerCase(),okey=this._all()[lkey],params=parts&&parts[2]||"",pathParts=this.splitPathToArray(key);try{params=eval("(function(){ return [].splice.call(arguments, 0 ) })("+params+")")}catch(error){params=parts[2].split(/,\s*/)}if(obj&&key in obj)return obj[key];if("/"===key.charAt(0)||pathParts.length>1)return this.getValueByKeyPath(key,options);if(templateContext&&"object"===typeof templateContext&&key in templateContext&&_placeholder!==templateContext[key])return templateContext[key]=Handler.gen(templateContext[key],key,{currentContext:obj,templateCurrentContext:templateContext}),templateContext[key];if(!(key in Random)&&!(lkey in Random)&&!(okey in Random))return _placeholder;for(var i=0;i<params.length;i++)Constant.RE_PLACEHOLDER.exec(""),Constant.RE_PLACEHOLDER.test(params[i])&&(params[i]=Handler.placeholder(params[i],obj,templateContext,options));var handle=Random[key]||Random[lkey]||Random[okey];switch(Util.type(handle)){case"array":return Random.pick(handle);case"function":handle.options=options;var re=handle.apply(Random,params);return void 0===re&&(re=""),delete handle.options,re}},getValueByKeyPath:function(e,l){var a=e,t=this.splitPathToArray(e),n=[];"/"===e.charAt(0)?n=[l.context.path[0]].concat(this.normalizePath(t)):t.length>1&&(n=l.context.path.slice(0),n.pop(),n=this.normalizePath(n.concat(t))),e=t[t.length-1];for(var u=l.context.root,r=l.context.templateRoot,o=1;o<n.length-1;o++)u=u[n[o]],r=r[n[o]];return u&&e in u?u[e]:r&&"object"===typeof r&&e in r&&a!==r[e]?(r[e]=Handler.gen(r[e],e,{currentContext:u,templateCurrentContext:r}),r[e]):void 0},normalizePath:function(e){for(var l=[],a=0;a<e.length;a++)switch(e[a]){case"..":l.pop();break;case".":break;default:l.push(e[a])}return l},splitPathToArray:function(e){var l=e.split(/\/+/);return l[l.length-1]||(l=l.slice(0,-1)),l[0]||(l=l.slice(1)),l}}),module.exports=Handler},function(e,l){e.exports={GUID:1,RE_KEY:/(.+)\|(?:\+(\d+)|([\+\-]?\d+-?[\+\-]?\d*)?(?:\.(\d+-?\d*))?)/,RE_RANGE:/([\+\-]?\d+)-?([\+\-]?\d+)?/,RE_PLACEHOLDER:/\\*@([^@#%&()\?\s]+)(?:\((.*?)\))?/g}},function(e,l){var a={extend:function(){var e,l,t,n,u,r=arguments[0]||{},o=1,i=arguments.length;for(1===i&&(r=this,o=0);o<i;o++)if(e=arguments[o],e)for(l in e)t=r[l],n=e[l],r!==n&&void 0!==n&&(a.isArray(n)||a.isObject(n)?(a.isArray(n)&&(u=t&&a.isArray(t)?t:[]),a.isObject(n)&&(u=t&&a.isObject(t)?t:{}),r[l]=a.extend(u,n)):r[l]=n);return r},each:function(e,l,a){var t,n;if("number"===this.type(e))for(t=0;t<e;t++)l(t,t);else if(e.length===+e.length){for(t=0;t<e.length;t++)if(!1===l.call(a,e[t],t,e))break}else for(n in e)if(!1===l.call(a,e[n],n,e))break},type:function(e){return null===e||void 0===e?String(e):Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1].toLowerCase()}};a.each("String Object Array RegExp Function".split(" "),function(e){a["is"+e]=function(l){return a.type(l)===e.toLowerCase()}}),a.isObjectOrArray=function(e){return a.isObject(e)||a.isArray(e)},a.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},a.keys=function(e){var l=[];for(var a in e)e.hasOwnProperty(a)&&l.push(a);return l},a.values=function(e){var l=[];for(var a in e)e.hasOwnProperty(a)&&l.push(e[a]);return l},a.heredoc=function(e){return e.toString().replace(/^[^\/]+\/\*!?/,"").replace(/\*\/[^\/]+$/,"").replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")},a.noop=function(){},e.exports=a},function(e,l,a){var t=a(2),n=a(5);e.exports={parse:function(e){e=void 0==e?"":e+"";var l=(e||"").match(t.RE_KEY),a=l&&l[3]&&l[3].match(t.RE_RANGE),u=a&&a[1]&&parseInt(a[1],10),r=a&&a[2]&&parseInt(a[2],10),o=a?a[2]?n.integer(u,r):parseInt(a[1],10):void 0,i=l&&l[4]&&l[4].match(t.RE_RANGE),v=i&&i[1]&&parseInt(i[1],10),b=i&&i[2]&&parseInt(i[2],10),s=i?!i[2]&&parseInt(i[1],10)||n.integer(v,b):void 0,c={parameters:l,range:a,min:u,max:r,count:o,decimal:i,dmin:v,dmax:b,dcount:s};for(var f in c)if(void 0!=c[f])return c;return{}}}},function(e,l,a){var t=a(3),n={extend:t.extend};n.extend(a(6)),n.extend(a(7)),n.extend(a(8)),n.extend(a(10)),n.extend(a(13)),n.extend(a(15)),n.extend(a(16)),n.extend(a(17)),n.extend(a(14)),n.extend(a(19)),e.exports=n},function(e,l){e.exports={boolean:function(e,l,a){return void 0!==a?(e="undefined"===typeof e||isNaN(e)?1:parseInt(e,10),l="undefined"===typeof l||isNaN(l)?1:parseInt(l,10),Math.random()>1/(e+l)*e?!a:a):Math.random()>=.5},bool:function(e,l,a){return this.boolean(e,l,a)},natural:function(e,l){return e="undefined"!==typeof e?parseInt(e,10):0,l="undefined"!==typeof l?parseInt(l,10):9007199254740992,Math.round(Math.random()*(l-e))+e},integer:function(e,l){return e="undefined"!==typeof e?parseInt(e,10):-9007199254740992,l="undefined"!==typeof l?parseInt(l,10):9007199254740992,Math.round(Math.random()*(l-e))+e},int:function(e,l){return this.integer(e,l)},float:function(e,l,a,t){a=void 0===a?0:a,a=Math.max(Math.min(a,17),0),t=void 0===t?17:t,t=Math.max(Math.min(t,17),0);for(var n=this.integer(e,l)+".",u=0,r=this.natural(a,t);u<r;u++)n+=u<r-1?this.character("number"):this.character("123456789");return parseFloat(n,10)},character:function(e){var l={lower:"abcdefghijklmnopqrstuvwxyz",upper:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",number:"0123456789",symbol:"!@#$%^&*()[]"};return l.alpha=l.lower+l.upper,l["undefined"]=l.lower+l.upper+l.number+l.symbol,e=l[(""+e).toLowerCase()]||e,e.charAt(this.natural(0,e.length-1))},char:function(e){return this.character(e)},string:function(e,l,a){var t;switch(arguments.length){case 0:t=this.natural(3,7);break;case 1:t=e,e=void 0;break;case 2:"string"===typeof arguments[0]?t=l:(t=this.natural(e,l),e=void 0);break;case 3:t=this.natural(l,a);break}for(var n="",u=0;u<t;u++)n+=this.character(e);return n},str:function(){return this.string.apply(this,arguments)},range:function(e,l,a){arguments.length<=1&&(l=e||0,e=0),a=arguments[2]||1,e=+e,l=+l,a=+a;var t=Math.max(Math.ceil((l-e)/a),0),n=0,u=new Array(t);while(n<t)u[n++]=e,e+=a;return u}}},function(e,l){var a={yyyy:"getFullYear",yy:function(e){return(""+e.getFullYear()).slice(2)},y:"yy",MM:function(e){var l=e.getMonth()+1;return l<10?"0"+l:l},M:function(e){return e.getMonth()+1},dd:function(e){var l=e.getDate();return l<10?"0"+l:l},d:"getDate",HH:function(e){var l=e.getHours();return l<10?"0"+l:l},H:"getHours",hh:function(e){var l=e.getHours()%12;return l<10?"0"+l:l},h:function(e){return e.getHours()%12},mm:function(e){var l=e.getMinutes();return l<10?"0"+l:l},m:"getMinutes",ss:function(e){var l=e.getSeconds();return l<10?"0"+l:l},s:"getSeconds",SS:function(e){var l=e.getMilliseconds();return l<10&&"00"+l||l<100&&"0"+l||l},S:"getMilliseconds",A:function(e){return e.getHours()<12?"AM":"PM"},a:function(e){return e.getHours()<12?"am":"pm"},T:"getTime"};e.exports={_patternLetters:a,_rformat:new RegExp(function(){var e=[];for(var l in a)e.push(l);return"("+e.join("|")+")"}(),"g"),_formatDate:function(e,l){return l.replace(this._rformat,function l(t,n){return"function"===typeof a[n]?a[n](e):a[n]in a?l(t,a[n]):e[a[n]]()})},_randomDate:function(e,l){return e=void 0===e?new Date(0):e,l=void 0===l?new Date:l,new Date(Math.random()*(l.getTime()-e.getTime()))},date:function(e){return e=e||"yyyy-MM-dd",this._formatDate(this._randomDate(),e)},time:function(e){return e=e||"HH:mm:ss",this._formatDate(this._randomDate(),e)},datetime:function(e){return e=e||"yyyy-MM-dd HH:mm:ss",this._formatDate(this._randomDate(),e)},now:function(e,l){1===arguments.length&&(/year|month|day|hour|minute|second|week/.test(e)||(l=e,e="")),e=(e||"").toLowerCase(),l=l||"yyyy-MM-dd HH:mm:ss";var a=new Date;switch(e){case"year":a.setMonth(0);case"month":a.setDate(1);case"week":case"day":a.setHours(0);case"hour":a.setMinutes(0);case"minute":a.setSeconds(0);case"second":a.setMilliseconds(0)}switch(e){case"week":a.setDate(a.getDate()-a.getDay())}return this._formatDate(a,l)}}},function(e,l,a){(function(e){e.exports={_adSize:["300x250","250x250","240x400","336x280","180x150","720x300","468x60","234x60","88x31","120x90","120x60","120x240","125x125","728x90","160x600","120x600","300x600"],_screenSize:["320x200","320x240","640x480","800x480","800x480","1024x600","1024x768","1280x800","1440x900","1920x1200","2560x1600"],_videoSize:["720x480","768x576","1280x720","1920x1080"],image:function(e,l,a,t,n){return 4===arguments.length&&(n=t,t=void 0),3===arguments.length&&(n=a,a=void 0),e||(e=this.pick(this._adSize)),l&&~l.indexOf("#")&&(l=l.slice(1)),a&&~a.indexOf("#")&&(a=a.slice(1)),"http://dummyimage.com/"+e+(l?"/"+l:"")+(a?"/"+a:"")+(t?"."+t:"")+(n?"&text="+n:"")},img:function(){return this.image.apply(this,arguments)},_brandColors:{"4ormat":"#fb0a2a","500px":"#02adea","About.me (blue)":"#00405d","About.me (yellow)":"#ffcc33",Addvocate:"#ff6138",Adobe:"#ff0000",Aim:"#fcd20b",Amazon:"#e47911",Android:"#a4c639","Angie's List":"#7fbb00",AOL:"#0060a3",Atlassian:"#003366",Behance:"#053eff","Big Cartel":"#97b538",bitly:"#ee6123",Blogger:"#fc4f08",Boeing:"#0039a6","Booking.com":"#003580",Carbonmade:"#613854",Cheddar:"#ff7243","Code School":"#3d4944",Delicious:"#205cc0",Dell:"#3287c1",Designmoo:"#e54a4f",Deviantart:"#4e6252","Designer News":"#2d72da",Devour:"#fd0001",DEWALT:"#febd17","Disqus (blue)":"#59a3fc","Disqus (orange)":"#db7132",Dribbble:"#ea4c89",Dropbox:"#3d9ae8",Drupal:"#0c76ab",Dunked:"#2a323a",eBay:"#89c507",Ember:"#f05e1b",Engadget:"#00bdf6",Envato:"#528036",Etsy:"#eb6d20",Evernote:"#5ba525","Fab.com":"#dd0017",Facebook:"#3b5998",Firefox:"#e66000","Flickr (blue)":"#0063dc","Flickr (pink)":"#ff0084",Forrst:"#5b9a68",Foursquare:"#25a0ca",Garmin:"#007cc3",GetGlue:"#2d75a2",Gimmebar:"#f70078",GitHub:"#171515","Google Blue":"#0140ca","Google Green":"#16a61e","Google Red":"#dd1812","Google Yellow":"#fcca03","Google+":"#dd4b39",Grooveshark:"#f77f00",Groupon:"#82b548","Hacker News":"#ff6600",HelloWallet:"#0085ca","Heroku (light)":"#c7c5e6","Heroku (dark)":"#6567a5",HootSuite:"#003366",Houzz:"#73ba37",HTML5:"#ec6231",IKEA:"#ffcc33",IMDb:"#f3ce13",Instagram:"#3f729b",Intel:"#0071c5",Intuit:"#365ebf",Kickstarter:"#76cc1e",kippt:"#e03500",Kodery:"#00af81",LastFM:"#c3000d",LinkedIn:"#0e76a8",Livestream:"#cf0005",Lumo:"#576396",Mixpanel:"#a086d3",Meetup:"#e51937",Nokia:"#183693",NVIDIA:"#76b900",Opera:"#cc0f16",Path:"#e41f11","PayPal (dark)":"#1e477a","PayPal (light)":"#3b7bbf",Pinboard:"#0000e6",Pinterest:"#c8232c",PlayStation:"#665cbe",Pocket:"#ee4056",Prezi:"#318bff",Pusha:"#0f71b4",Quora:"#a82400","QUOTE.fm":"#66ceff",Rdio:"#008fd5",Readability:"#9c0000","Red Hat":"#cc0000",Resource:"#7eb400",Rockpack:"#0ba6ab",Roon:"#62b0d9",RSS:"#ee802f",Salesforce:"#1798c1",Samsung:"#0c4da2",Shopify:"#96bf48",Skype:"#00aff0",Snagajob:"#f47a20",Softonic:"#008ace",SoundCloud:"#ff7700","Space Box":"#f86960",Spotify:"#81b71a",Sprint:"#fee100",Squarespace:"#121212",StackOverflow:"#ef8236",Staples:"#cc0000","Status Chart":"#d7584f",Stripe:"#008cdd",StudyBlue:"#00afe1",StumbleUpon:"#f74425","T-Mobile":"#ea0a8e",Technorati:"#40a800","The Next Web":"#ef4423",Treehouse:"#5cb868",Trulia:"#5eab1f",Tumblr:"#34526f","Twitch.tv":"#6441a5",Twitter:"#00acee",TYPO3:"#ff8700",Ubuntu:"#dd4814",Ustream:"#3388ff",Verizon:"#ef1d1d",Vimeo:"#86c9ef",Vine:"#00a478",Virb:"#06afd8","Virgin Media":"#cc0000",Wooga:"#5b009c","WordPress (blue)":"#21759b","WordPress (orange)":"#d54e21","WordPress (grey)":"#464646",Wunderlist:"#2b88d9",XBOX:"#9bc848",XING:"#126567","Yahoo!":"#720e9e",Yandex:"#ffcc00",Yelp:"#c41200",YouTube:"#c4302b",Zalongo:"#5498dc",Zendesk:"#78a300",Zerply:"#9dcc7a",Zootool:"#5e8b1d"},_brandNames:function(){var e=[];for(var l in this._brandColors)e.push(l);return e},dataImage:function(l,a){var t;if("undefined"!==typeof document)t=document.createElement("canvas");else{var n=e.require("canvas");t=new n}var u=t&&t.getContext&&t.getContext("2d");if(!t||!u)return"";l||(l=this.pick(this._adSize)),a=void 0!==a?a:l,l=l.split("x");var r=parseInt(l[0],10),o=parseInt(l[1],10),i=this._brandColors[this.pick(this._brandNames())],v="#FFF",b=14,s="sans-serif";return t.width=r,t.height=o,u.textAlign="center",u.textBaseline="middle",u.fillStyle=i,u.fillRect(0,0,r,o),u.fillStyle=v,u.font="bold "+b+"px "+s,u.fillText(a,r/2,o/2,r),t.toDataURL("image/png")}}}).call(l,a(9)(e))},function(e,l){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,l,a){var t=a(11),n=a(12);e.exports={color:function(e){return e||n[e]?n[e].nicer:this.hex()},hex:function(){var e=this._goldenRatioColor(),l=t.hsv2rgb(e),a=t.rgb2hex(l[0],l[1],l[2]);return a},rgb:function(){var e=this._goldenRatioColor(),l=t.hsv2rgb(e);return"rgb("+parseInt(l[0],10)+", "+parseInt(l[1],10)+", "+parseInt(l[2],10)+")"},rgba:function(){var e=this._goldenRatioColor(),l=t.hsv2rgb(e);return"rgba("+parseInt(l[0],10)+", "+parseInt(l[1],10)+", "+parseInt(l[2],10)+", "+Math.random().toFixed(2)+")"},hsl:function(){var e=this._goldenRatioColor(),l=t.hsv2hsl(e);return"hsl("+parseInt(l[0],10)+", "+parseInt(l[1],10)+", "+parseInt(l[2],10)+")"},_goldenRatioColor:function(e,l){return this._goldenRatio=.618033988749895,this._hue=this._hue||Math.random(),this._hue+=this._goldenRatio,this._hue%=1,"number"!==typeof e&&(e=.5),"number"!==typeof l&&(l=.95),[360*this._hue,100*e,100*l]}}},function(e,l){e.exports={rgb2hsl:function(e){var l,a,t,n=e[0]/255,u=e[1]/255,r=e[2]/255,o=Math.min(n,u,r),i=Math.max(n,u,r),v=i-o;return i==o?l=0:n==i?l=(u-r)/v:u==i?l=2+(r-n)/v:r==i&&(l=4+(n-u)/v),l=Math.min(60*l,360),l<0&&(l+=360),t=(o+i)/2,a=i==o?0:t<=.5?v/(i+o):v/(2-i-o),[l,100*a,100*t]},rgb2hsv:function(e){var l,a,t,n=e[0],u=e[1],r=e[2],o=Math.min(n,u,r),i=Math.max(n,u,r),v=i-o;return a=0===i?0:v/i*1e3/10,i==o?l=0:n==i?l=(u-r)/v:u==i?l=2+(r-n)/v:r==i&&(l=4+(n-u)/v),l=Math.min(60*l,360),l<0&&(l+=360),t=i/255*1e3/10,[l,a,t]},hsl2rgb:function(e){var l,a,t,n,u,r=e[0]/360,o=e[1]/100,i=e[2]/100;if(0===o)return u=255*i,[u,u,u];a=i<.5?i*(1+o):i+o-i*o,l=2*i-a,n=[0,0,0];for(var v=0;v<3;v++)t=r+1/3*-(v-1),t<0&&t++,t>1&&t--,u=6*t<1?l+6*(a-l)*t:2*t<1?a:3*t<2?l+(a-l)*(2/3-t)*6:l,n[v]=255*u;return n},hsl2hsv:function(e){var l,a,t=e[0],n=e[1]/100,u=e[2]/100;return u*=2,n*=u<=1?u:2-u,a=(u+n)/2,l=2*n/(u+n),[t,100*l,100*a]},hsv2rgb:function(e){var l=e[0]/60,a=e[1]/100,t=e[2]/100,n=Math.floor(l)%6,u=l-Math.floor(l),r=255*t*(1-a),o=255*t*(1-a*u),i=255*t*(1-a*(1-u));switch(t*=255,n){case 0:return[t,i,r];case 1:return[o,t,r];case 2:return[r,t,i];case 3:return[r,o,t];case 4:return[i,r,t];case 5:return[t,r,o]}},hsv2hsl:function(e){var l,a,t=e[0],n=e[1]/100,u=e[2]/100;return a=(2-n)*u,l=n*u,l/=a<=1?a:2-a,a/=2,[t,100*l,100*a]},rgb2hex:function(e,l,a){return"#"+((256+e<<8|l)<<8|a).toString(16).slice(1)},hex2rgb:function(e){return e="0x"+e.slice(1).replace(e.length>4?e:/./g,"$&$&")|0,[e>>16,e>>8&255,255&e]}}},function(e,l){e.exports={navy:{value:"#000080",nicer:"#001F3F"},blue:{value:"#0000ff",nicer:"#0074D9"},aqua:{value:"#00ffff",nicer:"#7FDBFF"},teal:{value:"#008080",nicer:"#39CCCC"},olive:{value:"#008000",nicer:"#3D9970"},green:{value:"#008000",nicer:"#2ECC40"},lime:{value:"#00ff00",nicer:"#01FF70"},yellow:{value:"#ffff00",nicer:"#FFDC00"},orange:{value:"#ffa500",nicer:"#FF851B"},red:{value:"#ff0000",nicer:"#FF4136"},maroon:{value:"#800000",nicer:"#85144B"},fuchsia:{value:"#ff00ff",nicer:"#F012BE"},purple:{value:"#800080",nicer:"#B10DC9"},silver:{value:"#c0c0c0",nicer:"#DDDDDD"},gray:{value:"#808080",nicer:"#AAAAAA"},black:{value:"#000000",nicer:"#111111"},white:{value:"#FFFFFF",nicer:"#FFFFFF"}}},function(e,l,a){var t=a(6),n=a(14);function u(e,l,a,n){return void 0===a?t.natural(e,l):void 0===n?a:t.natural(parseInt(a,10),parseInt(n,10))}e.exports={paragraph:function(e,l){for(var a=u(3,7,e,l),t=[],n=0;n<a;n++)t.push(this.sentence());return t.join(" ")},cparagraph:function(e,l){for(var a=u(3,7,e,l),t=[],n=0;n<a;n++)t.push(this.csentence());return t.join("")},sentence:function(e,l){for(var a=u(12,18,e,l),t=[],r=0;r<a;r++)t.push(this.word());return n.capitalize(t.join(" "))+"."},csentence:function(e,l){for(var a=u(12,18,e,l),t=[],n=0;n<a;n++)t.push(this.cword());return t.join("")+"。"},word:function(e,l){for(var a=u(3,10,e,l),n="",r=0;r<a;r++)n+=t.character("lower");return n},cword:function(e,l,a){var t,n="的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取据处队南给色光门即保治北造百规热领七海口东导器压志世金增争济阶油思术极交受联什认六共权收证改清己美再采转更单风切打白教速花带安场身车例真务具万每目至达走积示议声报斗完类八离华名确才科张信马节话米整空元况今集温传土许步群广石记需段研界拉林律叫且究观越织装影算低持音众书布复容儿须际商非验连断深难近矿千周委素技备半办青省列习响约支般史感劳便团往酸历市克何除消构府称太准精值号率族维划选标写存候毛亲快效斯院查江型眼王按格养易置派层片始却专状育厂京识适属圆包火住调满县局照参红细引听该铁价严龙飞";switch(arguments.length){case 0:e=n,t=1;break;case 1:"string"===typeof arguments[0]?t=1:(t=e,e=n);break;case 2:"string"===typeof arguments[0]?t=l:(t=this.natural(e,l),e=n);break;case 3:t=this.natural(l,a);break}for(var u="",r=0;r<t;r++)u+=e.charAt(this.natural(0,e.length-1));return u},title:function(e,l){for(var a=u(3,7,e,l),t=[],n=0;n<a;n++)t.push(this.capitalize(this.word()));return t.join(" ")},ctitle:function(e,l){for(var a=u(3,7,e,l),t=[],n=0;n<a;n++)t.push(this.cword());return t.join("")}}},function(e,l,a){var t=a(3);e.exports={capitalize:function(e){return(e+"").charAt(0).toUpperCase()+(e+"").substr(1)},upper:function(e){return(e+"").toUpperCase()},lower:function(e){return(e+"").toLowerCase()},pick:function(e,l,a){return t.isArray(e)?(void 0===l&&(l=1),void 0===a&&(a=l)):(e=[].slice.call(arguments),l=1,a=1),1===l&&1===a?e[this.natural(0,e.length-1)]:this.shuffle(e,l,a)},shuffle:function(e,l,a){e=e||[];for(var t=e.slice(0),n=[],u=0,r=t.length,o=0;o<r;o++)u=this.natural(0,t.length-1),n.push(t[u]),t.splice(u,1);switch(arguments.length){case 0:case 1:return n;case 2:a=l;case 3:return l=parseInt(l,10),a=parseInt(a,10),n.slice(0,this.natural(l,a))}},order:function e(l){e.cache=e.cache||{},arguments.length>1&&(l=[].slice.call(arguments,0));var a=e.options,t=a.context.templatePath.join("."),n=e.cache[t]=e.cache[t]||{index:0,array:l};return n.array[n.index++%n.array.length]}}},function(e,l){e.exports={first:function(){var e=["James","John","Robert","Michael","William","David","Richard","Charles","Joseph","Thomas","Christopher","Daniel","Paul","Mark","Donald","George","Kenneth","Steven","Edward","Brian","Ronald","Anthony","Kevin","Jason","Matthew","Gary","Timothy","Jose","Larry","Jeffrey","Frank","Scott","Eric"].concat(["Mary","Patricia","Linda","Barbara","Elizabeth","Jennifer","Maria","Susan","Margaret","Dorothy","Lisa","Nancy","Karen","Betty","Helen","Sandra","Donna","Carol","Ruth","Sharon","Michelle","Laura","Sarah","Kimberly","Deborah","Jessica","Shirley","Cynthia","Angela","Melissa","Brenda","Amy","Anna"]);return this.pick(e)},last:function(){var e=["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Rodriguez","Wilson","Martinez","Anderson","Taylor","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen"];return this.pick(e)},name:function(e){return this.first()+" "+(e?this.first()+" ":"")+this.last()},cfirst:function(){var e="王 李 张 刘 陈 杨 赵 黄 周 吴 徐 孙 胡 朱 高 林 何 郭 马 罗 梁 宋 郑 谢 韩 唐 冯 于 董 萧 程 曹 袁 邓 许 傅 沈 曾 彭 吕 苏 卢 蒋 蔡 贾 丁 魏 薛 叶 阎 余 潘 杜 戴 夏 锺 汪 田 任 姜 范 方 石 姚 谭 廖 邹 熊 金 陆 郝 孔 白 崔 康 毛 邱 秦 江 史 顾 侯 邵 孟 龙 万 段 雷 钱 汤 尹 黎 易 常 武 乔 贺 赖 龚 文".split(" ");return this.pick(e)},clast:function(){var e="伟 芳 娜 秀英 敏 静 丽 强 磊 军 洋 勇 艳 杰 娟 涛 明 超 秀兰 霞 平 刚 桂英".split(" ");return this.pick(e)},cname:function(){return this.cfirst()+this.clast()}}},function(e,l){e.exports={url:function(e,l){return(e||this.protocol())+"://"+(l||this.domain())+"/"+this.word()},protocol:function(){return this.pick("http ftp gopher mailto mid cid news nntp prospero telnet rlogin tn3270 wais".split(" "))},domain:function(e){return this.word()+"."+(e||this.tld())},tld:function(){return this.pick("com net org edu gov int mil cn com.cn net.cn gov.cn org.cn 中国 中国互联.公司 中国互联.网络 tel biz cc tv info name hk mobi asia cd travel pro museum coop aero ad ae af ag ai al am an ao aq ar as at au aw az ba bb bd be bf bg bh bi bj bm bn bo br bs bt bv bw by bz ca cc cf cg ch ci ck cl cm cn co cq cr cu cv cx cy cz de dj dk dm do dz ec ee eg eh es et ev fi fj fk fm fo fr ga gb gd ge gf gh gi gl gm gn gp gr gt gu gw gy hk hm hn hr ht hu id ie il in io iq ir is it jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md mg mh ml mm mn mo mp mq mr ms mt mv mw mx my mz na nc ne nf ng ni nl no np nr nt nu nz om qa pa pe pf pg ph pk pl pm pn pr pt pw py re ro ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr st su sy sz tc td tf tg th tj tk tm tn to tp tr tt tv tw tz ua ug uk us uy va vc ve vg vn vu wf ws ye yu za zm zr zw".split(" "))},email:function(e){return this.character("lower")+"."+this.word()+"@"+(e||this.word()+"."+this.tld())},ip:function(){return this.natural(0,255)+"."+this.natural(0,255)+"."+this.natural(0,255)+"."+this.natural(0,255)}}},function(e,l,a){var t=a(18),n=["东北","华北","华东","华中","华南","西南","西北"];e.exports={region:function(){return this.pick(n)},province:function(){return this.pick(t).name},city:function(e){var l=this.pick(t),a=this.pick(l.children);return e?[l.name,a.name].join(" "):a.name},county:function(e){var l=this.pick(t),a=this.pick(l.children),n=this.pick(a.children)||{name:"-"};return e?[l.name,a.name,n.name].join(" "):n.name},zip:function(e){for(var l="",a=0;a<(e||6);a++)l+=this.natural(0,9);return l}}},function(e,l){var a={110000:"北京",110100:"北京市",110101:"东城区",110102:"西城区",110105:"朝阳区",110106:"丰台区",110107:"石景山区",110108:"海淀区",110109:"门头沟区",110111:"房山区",110112:"通州区",110113:"顺义区",110114:"昌平区",110115:"大兴区",110116:"怀柔区",110117:"平谷区",110228:"密云县",110229:"延庆县",110230:"其它区",120000:"天津",120100:"天津市",120101:"和平区",120102:"河东区",120103:"河西区",120104:"南开区",120105:"河北区",120106:"红桥区",120110:"东丽区",120111:"西青区",120112:"津南区",120113:"北辰区",120114:"武清区",120115:"宝坻区",120116:"滨海新区",120221:"宁河县",120223:"静海县",120225:"蓟县",120226:"其它区",130000:"河北省",130100:"石家庄市",130102:"长安区",130103:"桥东区",130104:"桥西区",130105:"新华区",130107:"井陉矿区",130108:"裕华区",130121:"井陉县",130123:"正定县",130124:"栾城县",130125:"行唐县",130126:"灵寿县",130127:"高邑县",130128:"深泽县",130129:"赞皇县",130130:"无极县",130131:"平山县",130132:"元氏县",130133:"赵县",130181:"辛集市",130182:"藁城市",130183:"晋州市",130184:"新乐市",130185:"鹿泉市",130186:"其它区",130200:"唐山市",130202:"路南区",130203:"路北区",130204:"古冶区",130205:"开平区",130207:"丰南区",130208:"丰润区",130223:"滦县",130224:"滦南县",130225:"乐亭县",130227:"迁西县",130229:"玉田县",130230:"曹妃甸区",130281:"遵化市",130283:"迁安市",130284:"其它区",130300:"秦皇岛市",130302:"海港区",130303:"山海关区",130304:"北戴河区",130321:"青龙满族自治县",130322:"昌黎县",130323:"抚宁县",130324:"卢龙县",130398:"其它区",130400:"邯郸市",130402:"邯山区",130403:"丛台区",130404:"复兴区",130406:"峰峰矿区",130421:"邯郸县",130423:"临漳县",130424:"成安县",130425:"大名县",130426:"涉县",130427:"磁县",130428:"肥乡县",130429:"永年县",130430:"邱县",130431:"鸡泽县",130432:"广平县",130433:"馆陶县",130434:"魏县",130435:"曲周县",130481:"武安市",130482:"其它区",130500:"邢台市",130502:"桥东区",130503:"桥西区",130521:"邢台县",130522:"临城县",130523:"内丘县",130524:"柏乡县",130525:"隆尧县",130526:"任县",130527:"南和县",130528:"宁晋县",130529:"巨鹿县",130530:"新河县",130531:"广宗县",130532:"平乡县",130533:"威县",130534:"清河县",130535:"临西县",130581:"南宫市",130582:"沙河市",130583:"其它区",130600:"保定市",130602:"新市区",130603:"北市区",130604:"南市区",130621:"满城县",130622:"清苑县",130623:"涞水县",130624:"阜平县",130625:"徐水县",130626:"定兴县",130627:"唐县",130628:"高阳县",130629:"容城县",130630:"涞源县",130631:"望都县",130632:"安新县",130633:"易县",130634:"曲阳县",130635:"蠡县",130636:"顺平县",130637:"博野县",130638:"雄县",130681:"涿州市",130682:"定州市",130683:"安国市",130684:"高碑店市",130699:"其它区",130700:"张家口市",130702:"桥东区",130703:"桥西区",130705:"宣化区",130706:"下花园区",130721:"宣化县",130722:"张北县",130723:"康保县",130724:"沽源县",130725:"尚义县",130726:"蔚县",130727:"阳原县",130728:"怀安县",130729:"万全县",130730:"怀来县",130731:"涿鹿县",130732:"赤城县",130733:"崇礼县",130734:"其它区",130800:"承德市",130802:"双桥区",130803:"双滦区",130804:"鹰手营子矿区",130821:"承德县",130822:"兴隆县",130823:"平泉县",130824:"滦平县",130825:"隆化县",130826:"丰宁满族自治县",130827:"宽城满族自治县",130828:"围场满族蒙古族自治县",130829:"其它区",130900:"沧州市",130902:"新华区",130903:"运河区",130921:"沧县",130922:"青县",130923:"东光县",130924:"海兴县",130925:"盐山县",130926:"肃宁县",130927:"南皮县",130928:"吴桥县",130929:"献县",130930:"孟村回族自治县",130981:"泊头市",130982:"任丘市",130983:"黄骅市",130984:"河间市",130985:"其它区",131000:"廊坊市",131002:"安次区",131003:"广阳区",131022:"固安县",131023:"永清县",131024:"香河县",131025:"大城县",131026:"文安县",131028:"大厂回族自治县",131081:"霸州市",131082:"三河市",131083:"其它区",131100:"衡水市",131102:"桃城区",131121:"枣强县",131122:"武邑县",131123:"武强县",131124:"饶阳县",131125:"安平县",131126:"故城县",131127:"景县",131128:"阜城县",131181:"冀州市",131182:"深州市",131183:"其它区",140000:"山西省",140100:"太原市",140105:"小店区",140106:"迎泽区",140107:"杏花岭区",140108:"尖草坪区",140109:"万柏林区",140110:"晋源区",140121:"清徐县",140122:"阳曲县",140123:"娄烦县",140181:"古交市",140182:"其它区",140200:"大同市",140202:"城区",140203:"矿区",140211:"南郊区",140212:"新荣区",140221:"阳高县",140222:"天镇县",140223:"广灵县",140224:"灵丘县",140225:"浑源县",140226:"左云县",140227:"大同县",140228:"其它区",140300:"阳泉市",140302:"城区",140303:"矿区",140311:"郊区",140321:"平定县",140322:"盂县",140323:"其它区",140400:"长治市",140421:"长治县",140423:"襄垣县",140424:"屯留县",140425:"平顺县",140426:"黎城县",140427:"壶关县",140428:"长子县",140429:"武乡县",140430:"沁县",140431:"沁源县",140481:"潞城市",140482:"城区",140483:"郊区",140485:"其它区",140500:"晋城市",140502:"城区",140521:"沁水县",140522:"阳城县",140524:"陵川县",140525:"泽州县",140581:"高平市",140582:"其它区",140600:"朔州市",140602:"朔城区",140603:"平鲁区",140621:"山阴县",140622:"应县",140623:"右玉县",140624:"怀仁县",140625:"其它区",140700:"晋中市",140702:"榆次区",140721:"榆社县",140722:"左权县",140723:"和顺县",140724:"昔阳县",140725:"寿阳县",140726:"太谷县",140727:"祁县",140728:"平遥县",140729:"灵石县",140781:"介休市",140782:"其它区",140800:"运城市",140802:"盐湖区",140821:"临猗县",140822:"万荣县",140823:"闻喜县",140824:"稷山县",140825:"新绛县",140826:"绛县",140827:"垣曲县",140828:"夏县",140829:"平陆县",140830:"芮城县",140881:"永济市",140882:"河津市",140883:"其它区",140900:"忻州市",140902:"忻府区",140921:"定襄县",140922:"五台县",140923:"代县",140924:"繁峙县",140925:"宁武县",140926:"静乐县",140927:"神池县",140928:"五寨县",140929:"岢岚县",140930:"河曲县",140931:"保德县",140932:"偏关县",140981:"原平市",140982:"其它区",141000:"临汾市",141002:"尧都区",141021:"曲沃县",141022:"翼城县",141023:"襄汾县",141024:"洪洞县",141025:"古县",141026:"安泽县",141027:"浮山县",141028:"吉县",141029:"乡宁县",141030:"大宁县",141031:"隰县",141032:"永和县",141033:"蒲县",141034:"汾西县",141081:"侯马市",141082:"霍州市",141083:"其它区",141100:"吕梁市",141102:"离石区",141121:"文水县",141122:"交城县",141123:"兴县",141124:"临县",141125:"柳林县",141126:"石楼县",141127:"岚县",141128:"方山县",141129:"中阳县",141130:"交口县",141181:"孝义市",141182:"汾阳市",141183:"其它区",150000:"内蒙古自治区",150100:"呼和浩特市",150102:"新城区",150103:"回民区",150104:"玉泉区",150105:"赛罕区",150121:"土默特左旗",150122:"托克托县",150123:"和林格尔县",150124:"清水河县",150125:"武川县",150126:"其它区",150200:"包头市",150202:"东河区",150203:"昆都仑区",150204:"青山区",150205:"石拐区",150206:"白云鄂博矿区",150207:"九原区",150221:"土默特右旗",150222:"固阳县",150223:"达尔罕茂明安联合旗",150224:"其它区",150300:"乌海市",150302:"海勃湾区",150303:"海南区",150304:"乌达区",150305:"其它区",150400:"赤峰市",150402:"红山区",150403:"元宝山区",150404:"松山区",150421:"阿鲁科尔沁旗",150422:"巴林左旗",150423:"巴林右旗",150424:"林西县",150425:"克什克腾旗",150426:"翁牛特旗",150428:"喀喇沁旗",150429:"宁城县",150430:"敖汉旗",150431:"其它区",150500:"通辽市",150502:"科尔沁区",150521:"科尔沁左翼中旗",150522:"科尔沁左翼后旗",150523:"开鲁县",150524:"库伦旗",150525:"奈曼旗",150526:"扎鲁特旗",150581:"霍林郭勒市",150582:"其它区",150600:"鄂尔多斯市",150602:"东胜区",150621:"达拉特旗",150622:"准格尔旗",150623:"鄂托克前旗",150624:"鄂托克旗",150625:"杭锦旗",150626:"乌审旗",150627:"伊金霍洛旗",150628:"其它区",150700:"呼伦贝尔市",150702:"海拉尔区",150703:"扎赉诺尔区",150721:"阿荣旗",150722:"莫力达瓦达斡尔族自治旗",150723:"鄂伦春自治旗",150724:"鄂温克族自治旗",150725:"陈巴尔虎旗",150726:"新巴尔虎左旗",150727:"新巴尔虎右旗",150781:"满洲里市",150782:"牙克石市",150783:"扎兰屯市",150784:"额尔古纳市",150785:"根河市",150786:"其它区",150800:"巴彦淖尔市",150802:"临河区",150821:"五原县",150822:"磴口县",150823:"乌拉特前旗",150824:"乌拉特中旗",150825:"乌拉特后旗",150826:"杭锦后旗",150827:"其它区",150900:"乌兰察布市",150902:"集宁区",150921:"卓资县",150922:"化德县",150923:"商都县",150924:"兴和县",150925:"凉城县",150926:"察哈尔右翼前旗",150927:"察哈尔右翼中旗",150928:"察哈尔右翼后旗",150929:"四子王旗",150981:"丰镇市",150982:"其它区",152200:"兴安盟",152201:"乌兰浩特市",152202:"阿尔山市",152221:"科尔沁右翼前旗",152222:"科尔沁右翼中旗",152223:"扎赉特旗",152224:"突泉县",152225:"其它区",152500:"锡林郭勒盟",152501:"二连浩特市",152502:"锡林浩特市",152522:"阿巴嘎旗",152523:"苏尼特左旗",152524:"苏尼特右旗",152525:"东乌珠穆沁旗",152526:"西乌珠穆沁旗",152527:"太仆寺旗",152528:"镶黄旗",152529:"正镶白旗",152530:"正蓝旗",152531:"多伦县",152532:"其它区",152900:"阿拉善盟",152921:"阿拉善左旗",152922:"阿拉善右旗",152923:"额济纳旗",152924:"其它区",210000:"辽宁省",210100:"沈阳市",210102:"和平区",210103:"沈河区",210104:"大东区",210105:"皇姑区",210106:"铁西区",210111:"苏家屯区",210112:"东陵区",210113:"新城子区",210114:"于洪区",210122:"辽中县",210123:"康平县",210124:"法库县",210181:"新民市",210184:"沈北新区",210185:"其它区",210200:"大连市",210202:"中山区",210203:"西岗区",210204:"沙河口区",210211:"甘井子区",210212:"旅顺口区",210213:"金州区",210224:"长海县",210281:"瓦房店市",210282:"普兰店市",210283:"庄河市",210298:"其它区",210300:"鞍山市",210302:"铁东区",210303:"铁西区",210304:"立山区",210311:"千山区",210321:"台安县",210323:"岫岩满族自治县",210381:"海城市",210382:"其它区",210400:"抚顺市",210402:"新抚区",210403:"东洲区",210404:"望花区",210411:"顺城区",210421:"抚顺县",210422:"新宾满族自治县",210423:"清原满族自治县",210424:"其它区",210500:"本溪市",210502:"平山区",210503:"溪湖区",210504:"明山区",210505:"南芬区",210521:"本溪满族自治县",210522:"桓仁满族自治县",210523:"其它区",210600:"丹东市",210602:"元宝区",210603:"振兴区",210604:"振安区",210624:"宽甸满族自治县",210681:"东港市",210682:"凤城市",210683:"其它区",210700:"锦州市",210702:"古塔区",210703:"凌河区",210711:"太和区",210726:"黑山县",210727:"义县",210781:"凌海市",210782:"北镇市",210783:"其它区",210800:"营口市",210802:"站前区",210803:"西市区",210804:"鲅鱼圈区",210811:"老边区",210881:"盖州市",210882:"大石桥市",210883:"其它区",210900:"阜新市",210902:"海州区",210903:"新邱区",210904:"太平区",210905:"清河门区",210911:"细河区",210921:"阜新蒙古族自治县",210922:"彰武县",210923:"其它区",211000:"辽阳市",211002:"白塔区",211003:"文圣区",211004:"宏伟区",211005:"弓长岭区",211011:"太子河区",211021:"辽阳县",211081:"灯塔市",211082:"其它区",211100:"盘锦市",211102:"双台子区",211103:"兴隆台区",211121:"大洼县",211122:"盘山县",211123:"其它区",211200:"铁岭市",211202:"银州区",211204:"清河区",211221:"铁岭县",211223:"西丰县",211224:"昌图县",211281:"调兵山市",211282:"开原市",211283:"其它区",211300:"朝阳市",211302:"双塔区",211303:"龙城区",211321:"朝阳县",211322:"建平县",211324:"喀喇沁左翼蒙古族自治县",211381:"北票市",211382:"凌源市",211383:"其它区",211400:"葫芦岛市",211402:"连山区",211403:"龙港区",211404:"南票区",211421:"绥中县",211422:"建昌县",211481:"兴城市",211482:"其它区",220000:"吉林省",220100:"长春市",220102:"南关区",220103:"宽城区",220104:"朝阳区",220105:"二道区",220106:"绿园区",220112:"双阳区",220122:"农安县",220181:"九台市",220182:"榆树市",220183:"德惠市",220188:"其它区",220200:"吉林市",220202:"昌邑区",220203:"龙潭区",220204:"船营区",220211:"丰满区",220221:"永吉县",220281:"蛟河市",220282:"桦甸市",220283:"舒兰市",220284:"磐石市",220285:"其它区",220300:"四平市",220302:"铁西区",220303:"铁东区",220322:"梨树县",220323:"伊通满族自治县",220381:"公主岭市",220382:"双辽市",220383:"其它区",220400:"辽源市",220402:"龙山区",220403:"西安区",220421:"东丰县",220422:"东辽县",220423:"其它区",220500:"通化市",220502:"东昌区",220503:"二道江区",220521:"通化县",220523:"辉南县",220524:"柳河县",220581:"梅河口市",220582:"集安市",220583:"其它区",220600:"白山市",220602:"浑江区",220621:"抚松县",220622:"靖宇县",220623:"长白朝鲜族自治县",220625:"江源区",220681:"临江市",220682:"其它区",220700:"松原市",220702:"宁江区",220721:"前郭尔罗斯蒙古族自治县",220722:"长岭县",220723:"乾安县",220724:"扶余市",220725:"其它区",220800:"白城市",220802:"洮北区",220821:"镇赉县",220822:"通榆县",220881:"洮南市",220882:"大安市",220883:"其它区",222400:"延边朝鲜族自治州",222401:"延吉市",222402:"图们市",222403:"敦化市",222404:"珲春市",222405:"龙井市",222406:"和龙市",222424:"汪清县",222426:"安图县",222427:"其它区",230000:"黑龙江省",230100:"哈尔滨市",230102:"道里区",230103:"南岗区",230104:"道外区",230106:"香坊区",230108:"平房区",230109:"松北区",230111:"呼兰区",230123:"依兰县",230124:"方正县",230125:"宾县",230126:"巴彦县",230127:"木兰县",230128:"通河县",230129:"延寿县",230181:"阿城区",230182:"双城市",230183:"尚志市",230184:"五常市",230186:"其它区",230200:"齐齐哈尔市",230202:"龙沙区",230203:"建华区",230204:"铁锋区",230205:"昂昂溪区",230206:"富拉尔基区",230207:"碾子山区",230208:"梅里斯达斡尔族区",230221:"龙江县",230223:"依安县",230224:"泰来县",230225:"甘南县",230227:"富裕县",230229:"克山县",230230:"克东县",230231:"拜泉县",230281:"讷河市",230282:"其它区",230300:"鸡西市",230302:"鸡冠区",230303:"恒山区",230304:"滴道区",230305:"梨树区",230306:"城子河区",230307:"麻山区",230321:"鸡东县",230381:"虎林市",230382:"密山市",230383:"其它区",230400:"鹤岗市",230402:"向阳区",230403:"工农区",230404:"南山区",230405:"兴安区",230406:"东山区",230407:"兴山区",230421:"萝北县",230422:"绥滨县",230423:"其它区",230500:"双鸭山市",230502:"尖山区",230503:"岭东区",230505:"四方台区",230506:"宝山区",230521:"集贤县",230522:"友谊县",230523:"宝清县",230524:"饶河县",230525:"其它区",230600:"大庆市",230602:"萨尔图区",230603:"龙凤区",230604:"让胡路区",230605:"红岗区",230606:"大同区",230621:"肇州县",230622:"肇源县",230623:"林甸县",230624:"杜尔伯特蒙古族自治县",230625:"其它区",230700:"伊春市",230702:"伊春区",230703:"南岔区",230704:"友好区",230705:"西林区",230706:"翠峦区",230707:"新青区",230708:"美溪区",230709:"金山屯区",230710:"五营区",230711:"乌马河区",230712:"汤旺河区",230713:"带岭区",230714:"乌伊岭区",230715:"红星区",230716:"上甘岭区",230722:"嘉荫县",230781:"铁力市",230782:"其它区",230800:"佳木斯市",230803:"向阳区",230804:"前进区",230805:"东风区",230811:"郊区",230822:"桦南县",230826:"桦川县",230828:"汤原县",230833:"抚远县",230881:"同江市",230882:"富锦市",230883:"其它区",230900:"七台河市",230902:"新兴区",230903:"桃山区",230904:"茄子河区",230921:"勃利县",230922:"其它区",231000:"牡丹江市",231002:"东安区",231003:"阳明区",231004:"爱民区",231005:"西安区",231024:"东宁县",231025:"林口县",231081:"绥芬河市",231083:"海林市",231084:"宁安市",231085:"穆棱市",231086:"其它区",231100:"黑河市",231102:"爱辉区",231121:"嫩江县",231123:"逊克县",231124:"孙吴县",231181:"北安市",231182:"五大连池市",231183:"其它区",231200:"绥化市",231202:"北林区",231221:"望奎县",231222:"兰西县",231223:"青冈县",231224:"庆安县",231225:"明水县",231226:"绥棱县",231281:"安达市",231282:"肇东市",231283:"海伦市",231284:"其它区",232700:"大兴安岭地区",232702:"松岭区",232703:"新林区",232704:"呼中区",232721:"呼玛县",232722:"塔河县",232723:"漠河县",232724:"加格达奇区",232725:"其它区",310000:"上海",310100:"上海市",310101:"黄浦区",310104:"徐汇区",310105:"长宁区",310106:"静安区",310107:"普陀区",310108:"闸北区",310109:"虹口区",310110:"杨浦区",310112:"闵行区",310113:"宝山区",310114:"嘉定区",310115:"浦东新区",310116:"金山区",310117:"松江区",310118:"青浦区",310120:"奉贤区",310230:"崇明县",310231:"其它区",320000:"江苏省",320100:"南京市",320102:"玄武区",320104:"秦淮区",320105:"建邺区",320106:"鼓楼区",320111:"浦口区",320113:"栖霞区",320114:"雨花台区",320115:"江宁区",320116:"六合区",320124:"溧水区",320125:"高淳区",320126:"其它区",320200:"无锡市",320202:"崇安区",320203:"南长区",320204:"北塘区",320205:"锡山区",320206:"惠山区",320211:"滨湖区",320281:"江阴市",320282:"宜兴市",320297:"其它区",320300:"徐州市",320302:"鼓楼区",320303:"云龙区",320305:"贾汪区",320311:"泉山区",320321:"丰县",320322:"沛县",320323:"铜山区",320324:"睢宁县",320381:"新沂市",320382:"邳州市",320383:"其它区",320400:"常州市",320402:"天宁区",320404:"钟楼区",320405:"戚墅堰区",320411:"新北区",320412:"武进区",320481:"溧阳市",320482:"金坛市",320483:"其它区",320500:"苏州市",320505:"虎丘区",320506:"吴中区",320507:"相城区",320508:"姑苏区",320581:"常熟市",320582:"张家港市",320583:"昆山市",320584:"吴江区",320585:"太仓市",320596:"其它区",320600:"南通市",320602:"崇川区",320611:"港闸区",320612:"通州区",320621:"海安县",320623:"如东县",320681:"启东市",320682:"如皋市",320684:"海门市",320694:"其它区",320700:"连云港市",320703:"连云区",320705:"新浦区",320706:"海州区",320721:"赣榆县",320722:"东海县",320723:"灌云县",320724:"灌南县",320725:"其它区",320800:"淮安市",320802:"清河区",320803:"淮安区",320804:"淮阴区",320811:"清浦区",320826:"涟水县",320829:"洪泽县",320830:"盱眙县",320831:"金湖县",320832:"其它区",320900:"盐城市",320902:"亭湖区",320903:"盐都区",320921:"响水县",320922:"滨海县",320923:"阜宁县",320924:"射阳县",320925:"建湖县",320981:"东台市",320982:"大丰市",320983:"其它区",321000:"扬州市",321002:"广陵区",321003:"邗江区",321023:"宝应县",321081:"仪征市",321084:"高邮市",321088:"江都区",321093:"其它区",321100:"镇江市",321102:"京口区",321111:"润州区",321112:"丹徒区",321181:"丹阳市",321182:"扬中市",321183:"句容市",321184:"其它区",321200:"泰州市",321202:"海陵区",321203:"高港区",321281:"兴化市",321282:"靖江市",321283:"泰兴市",321284:"姜堰区",321285:"其它区",321300:"宿迁市",321302:"宿城区",321311:"宿豫区",321322:"沭阳县",321323:"泗阳县",321324:"泗洪县",321325:"其它区",330000:"浙江省",330100:"杭州市",330102:"上城区",330103:"下城区",330104:"江干区",330105:"拱墅区",330106:"西湖区",330108:"滨江区",330109:"萧山区",330110:"余杭区",330122:"桐庐县",330127:"淳安县",330182:"建德市",330183:"富阳市",330185:"临安市",330186:"其它区",330200:"宁波市",330203:"海曙区",330204:"江东区",330205:"江北区",330206:"北仑区",330211:"镇海区",330212:"鄞州区",330225:"象山县",330226:"宁海县",330281:"余姚市",330282:"慈溪市",330283:"奉化市",330284:"其它区",330300:"温州市",330302:"鹿城区",330303:"龙湾区",330304:"瓯海区",330322:"洞头县",330324:"永嘉县",330326:"平阳县",330327:"苍南县",330328:"文成县",330329:"泰顺县",330381:"瑞安市",330382:"乐清市",330383:"其它区",330400:"嘉兴市",330402:"南湖区",330411:"秀洲区",330421:"嘉善县",330424:"海盐县",330481:"海宁市",330482:"平湖市",330483:"桐乡市",330484:"其它区",330500:"湖州市",330502:"吴兴区",330503:"南浔区",330521:"德清县",330522:"长兴县",330523:"安吉县",330524:"其它区",330600:"绍兴市",330602:"越城区",330621:"绍兴县",330624:"新昌县",330681:"诸暨市",330682:"上虞市",330683:"嵊州市",330684:"其它区",330700:"金华市",330702:"婺城区",330703:"金东区",330723:"武义县",330726:"浦江县",330727:"磐安县",330781:"兰溪市",330782:"义乌市",330783:"东阳市",330784:"永康市",330785:"其它区",330800:"衢州市",330802:"柯城区",330803:"衢江区",330822:"常山县",330824:"开化县",330825:"龙游县",330881:"江山市",330882:"其它区",330900:"舟山市",330902:"定海区",330903:"普陀区",330921:"岱山县",330922:"嵊泗县",330923:"其它区",331000:"台州市",331002:"椒江区",331003:"黄岩区",331004:"路桥区",331021:"玉环县",331022:"三门县",331023:"天台县",331024:"仙居县",331081:"温岭市",331082:"临海市",331083:"其它区",331100:"丽水市",331102:"莲都区",331121:"青田县",331122:"缙云县",331123:"遂昌县",331124:"松阳县",331125:"云和县",331126:"庆元县",331127:"景宁畲族自治县",331181:"龙泉市",331182:"其它区",340000:"安徽省",340100:"合肥市",340102:"瑶海区",340103:"庐阳区",340104:"蜀山区",340111:"包河区",340121:"长丰县",340122:"肥东县",340123:"肥西县",340192:"其它区",340200:"芜湖市",340202:"镜湖区",340203:"弋江区",340207:"鸠江区",340208:"三山区",340221:"芜湖县",340222:"繁昌县",340223:"南陵县",340224:"其它区",340300:"蚌埠市",340302:"龙子湖区",340303:"蚌山区",340304:"禹会区",340311:"淮上区",340321:"怀远县",340322:"五河县",340323:"固镇县",340324:"其它区",340400:"淮南市",340402:"大通区",340403:"田家庵区",340404:"谢家集区",340405:"八公山区",340406:"潘集区",340421:"凤台县",340422:"其它区",340500:"马鞍山市",340503:"花山区",340504:"雨山区",340506:"博望区",340521:"当涂县",340522:"其它区",340600:"淮北市",340602:"杜集区",340603:"相山区",340604:"烈山区",340621:"濉溪县",340622:"其它区",340700:"铜陵市",340702:"铜官山区",340703:"狮子山区",340711:"郊区",340721:"铜陵县",340722:"其它区",340800:"安庆市",340802:"迎江区",340803:"大观区",340811:"宜秀区",340822:"怀宁县",340823:"枞阳县",340824:"潜山县",340825:"太湖县",340826:"宿松县",340827:"望江县",340828:"岳西县",340881:"桐城市",340882:"其它区",341000:"黄山市",341002:"屯溪区",341003:"黄山区",341004:"徽州区",341021:"歙县",341022:"休宁县",341023:"黟县",341024:"祁门县",341025:"其它区",341100:"滁州市",341102:"琅琊区",341103:"南谯区",341122:"来安县",341124:"全椒县",341125:"定远县",341126:"凤阳县",341181:"天长市",341182:"明光市",341183:"其它区",341200:"阜阳市",341202:"颍州区",341203:"颍东区",341204:"颍泉区",341221:"临泉县",341222:"太和县",341225:"阜南县",341226:"颍上县",341282:"界首市",341283:"其它区",341300:"宿州市",341302:"埇桥区",341321:"砀山县",341322:"萧县",341323:"灵璧县",341324:"泗县",341325:"其它区",341400:"巢湖市",341421:"庐江县",341422:"无为县",341423:"含山县",341424:"和县",341500:"六安市",341502:"金安区",341503:"裕安区",341521:"寿县",341522:"霍邱县",341523:"舒城县",341524:"金寨县",341525:"霍山县",341526:"其它区",341600:"亳州市",341602:"谯城区",341621:"涡阳县",341622:"蒙城县",341623:"利辛县",341624:"其它区",341700:"池州市",341702:"贵池区",341721:"东至县",341722:"石台县",341723:"青阳县",341724:"其它区",341800:"宣城市",341802:"宣州区",341821:"郎溪县",341822:"广德县",341823:"泾县",341824:"绩溪县",341825:"旌德县",341881:"宁国市",341882:"其它区",350000:"福建省",350100:"福州市",350102:"鼓楼区",350103:"台江区",350104:"仓山区",350105:"马尾区",350111:"晋安区",350121:"闽侯县",350122:"连江县",350123:"罗源县",350124:"闽清县",350125:"永泰县",350128:"平潭县",350181:"福清市",350182:"长乐市",350183:"其它区",350200:"厦门市",350203:"思明区",350205:"海沧区",350206:"湖里区",350211:"集美区",350212:"同安区",350213:"翔安区",350214:"其它区",350300:"莆田市",350302:"城厢区",350303:"涵江区",350304:"荔城区",350305:"秀屿区",350322:"仙游县",350323:"其它区",350400:"三明市",350402:"梅列区",350403:"三元区",350421:"明溪县",350423:"清流县",350424:"宁化县",350425:"大田县",350426:"尤溪县",350427:"沙县",350428:"将乐县",350429:"泰宁县",350430:"建宁县",350481:"永安市",350482:"其它区",350500:"泉州市",350502:"鲤城区",350503:"丰泽区",350504:"洛江区",350505:"泉港区",350521:"惠安县",350524:"安溪县",350525:"永春县",350526:"德化县",350527:"金门县",350581:"石狮市",350582:"晋江市",350583:"南安市",350584:"其它区",350600:"漳州市",350602:"芗城区",350603:"龙文区",350622:"云霄县",350623:"漳浦县",350624:"诏安县",350625:"长泰县",350626:"东山县",350627:"南靖县",350628:"平和县",350629:"华安县",350681:"龙海市",350682:"其它区",350700:"南平市",350702:"延平区",350721:"顺昌县",350722:"浦城县",350723:"光泽县",350724:"松溪县",350725:"政和县",350781:"邵武市",350782:"武夷山市",350783:"建瓯市",350784:"建阳市",350785:"其它区",350800:"龙岩市",350802:"新罗区",350821:"长汀县",350822:"永定县",350823:"上杭县",350824:"武平县",350825:"连城县",350881:"漳平市",350882:"其它区",350900:"宁德市",350902:"蕉城区",350921:"霞浦县",350922:"古田县",350923:"屏南县",350924:"寿宁县",350925:"周宁县",350926:"柘荣县",350981:"福安市",350982:"福鼎市",350983:"其它区",360000:"江西省",360100:"南昌市",360102:"东湖区",360103:"西湖区",360104:"青云谱区",360105:"湾里区",360111:"青山湖区",360121:"南昌县",360122:"新建县",360123:"安义县",360124:"进贤县",360128:"其它区",360200:"景德镇市",360202:"昌江区",360203:"珠山区",360222:"浮梁县",360281:"乐平市",360282:"其它区",360300:"萍乡市",360302:"安源区",360313:"湘东区",360321:"莲花县",360322:"上栗县",360323:"芦溪县",360324:"其它区",360400:"九江市",360402:"庐山区",360403:"浔阳区",360421:"九江县",360423:"武宁县",360424:"修水县",360425:"永修县",360426:"德安县",360427:"星子县",360428:"都昌县",360429:"湖口县",360430:"彭泽县",360481:"瑞昌市",360482:"其它区",360483:"共青城市",360500:"新余市",360502:"渝水区",360521:"分宜县",360522:"其它区",360600:"鹰潭市",360602:"月湖区",360622:"余江县",360681:"贵溪市",360682:"其它区",360700:"赣州市",360702:"章贡区",360721:"赣县",360722:"信丰县",360723:"大余县",360724:"上犹县",360725:"崇义县",360726:"安远县",360727:"龙南县",360728:"定南县",360729:"全南县",360730:"宁都县",360731:"于都县",360732:"兴国县",360733:"会昌县",360734:"寻乌县",360735:"石城县",360781:"瑞金市",360782:"南康市",360783:"其它区",360800:"吉安市",360802:"吉州区",360803:"青原区",360821:"吉安县",360822:"吉水县",360823:"峡江县",360824:"新干县",360825:"永丰县",360826:"泰和县",360827:"遂川县",360828:"万安县",360829:"安福县",360830:"永新县",360881:"井冈山市",360882:"其它区",360900:"宜春市",360902:"袁州区",360921:"奉新县",360922:"万载县",360923:"上高县",360924:"宜丰县",360925:"靖安县",360926:"铜鼓县",360981:"丰城市",360982:"樟树市",360983:"高安市",360984:"其它区",361000:"抚州市",361002:"临川区",361021:"南城县",361022:"黎川县",361023:"南丰县",361024:"崇仁县",361025:"乐安县",361026:"宜黄县",361027:"金溪县",361028:"资溪县",361029:"东乡县",361030:"广昌县",361031:"其它区",361100:"上饶市",361102:"信州区",361121:"上饶县",361122:"广丰县",361123:"玉山县",361124:"铅山县",361125:"横峰县",361126:"弋阳县",361127:"余干县",361128:"鄱阳县",361129:"万年县",361130:"婺源县",361181:"德兴市",361182:"其它区",370000:"山东省",370100:"济南市",370102:"历下区",370103:"市中区",370104:"槐荫区",370105:"天桥区",370112:"历城区",370113:"长清区",370124:"平阴县",370125:"济阳县",370126:"商河县",370181:"章丘市",370182:"其它区",370200:"青岛市",370202:"市南区",370203:"市北区",370211:"黄岛区",370212:"崂山区",370213:"李沧区",370214:"城阳区",370281:"胶州市",370282:"即墨市",370283:"平度市",370285:"莱西市",370286:"其它区",370300:"淄博市",370302:"淄川区",370303:"张店区",370304:"博山区",370305:"临淄区",370306:"周村区",370321:"桓台县",370322:"高青县",370323:"沂源县",370324:"其它区",370400:"枣庄市",370402:"市中区",370403:"薛城区",370404:"峄城区",370405:"台儿庄区",370406:"山亭区",370481:"滕州市",370482:"其它区",370500:"东营市",370502:"东营区",370503:"河口区",370521:"垦利县",370522:"利津县",370523:"广饶县",370591:"其它区",370600:"烟台市",370602:"芝罘区",370611:"福山区",370612:"牟平区",370613:"莱山区",370634:"长岛县",370681:"龙口市",370682:"莱阳市",370683:"莱州市",370684:"蓬莱市",370685:"招远市",370686:"栖霞市",370687:"海阳市",370688:"其它区",370700:"潍坊市",370702:"潍城区",370703:"寒亭区",370704:"坊子区",370705:"奎文区",370724:"临朐县",370725:"昌乐县",370781:"青州市",370782:"诸城市",370783:"寿光市",370784:"安丘市",370785:"高密市",370786:"昌邑市",370787:"其它区",370800:"济宁市",370802:"市中区",370811:"任城区",370826:"微山县",370827:"鱼台县",370828:"金乡县",370829:"嘉祥县",370830:"汶上县",370831:"泗水县",370832:"梁山县",370881:"曲阜市",370882:"兖州市",370883:"邹城市",370884:"其它区",370900:"泰安市",370902:"泰山区",370903:"岱岳区",370921:"宁阳县",370923:"东平县",370982:"新泰市",370983:"肥城市",370984:"其它区",371000:"威海市",371002:"环翠区",371081:"文登市",371082:"荣成市",371083:"乳山市",371084:"其它区",371100:"日照市",371102:"东港区",371103:"岚山区",371121:"五莲县",371122:"莒县",371123:"其它区",371200:"莱芜市",371202:"莱城区",371203:"钢城区",371204:"其它区",371300:"临沂市",371302:"兰山区",371311:"罗庄区",371312:"河东区",371321:"沂南县",371322:"郯城县",371323:"沂水县",371324:"苍山县",371325:"费县",371326:"平邑县",371327:"莒南县",371328:"蒙阴县",371329:"临沭县",371330:"其它区",371400:"德州市",371402:"德城区",371421:"陵县",371422:"宁津县",371423:"庆云县",371424:"临邑县",371425:"齐河县",371426:"平原县",371427:"夏津县",371428:"武城县",371481:"乐陵市",371482:"禹城市",371483:"其它区",371500:"聊城市",371502:"东昌府区",371521:"阳谷县",371522:"莘县",371523:"茌平县",371524:"东阿县",371525:"冠县",371526:"高唐县",371581:"临清市",371582:"其它区",371600:"滨州市",371602:"滨城区",371621:"惠民县",371622:"阳信县",371623:"无棣县",371624:"沾化县",371625:"博兴县",371626:"邹平县",371627:"其它区",371700:"菏泽市",371702:"牡丹区",371721:"曹县",371722:"单县",371723:"成武县",371724:"巨野县",371725:"郓城县",371726:"鄄城县",371727:"定陶县",371728:"东明县",371729:"其它区",410000:"河南省",410100:"郑州市",410102:"中原区",410103:"二七区",410104:"管城回族区",410105:"金水区",410106:"上街区",410108:"惠济区",410122:"中牟县",410181:"巩义市",410182:"荥阳市",410183:"新密市",410184:"新郑市",410185:"登封市",410188:"其它区",410200:"开封市",410202:"龙亭区",410203:"顺河回族区",410204:"鼓楼区",410205:"禹王台区",410211:"金明区",410221:"杞县",410222:"通许县",410223:"尉氏县",410224:"开封县",410225:"兰考县",410226:"其它区",410300:"洛阳市",410302:"老城区",410303:"西工区",410304:"瀍河回族区",410305:"涧西区",410306:"吉利区",410307:"洛龙区",410322:"孟津县",410323:"新安县",410324:"栾川县",410325:"嵩县",410326:"汝阳县",410327:"宜阳县",410328:"洛宁县",410329:"伊川县",410381:"偃师市",410400:"平顶山市",410402:"新华区",410403:"卫东区",410404:"石龙区",410411:"湛河区",410421:"宝丰县",410422:"叶县",410423:"鲁山县",410425:"郏县",410481:"舞钢市",410482:"汝州市",410483:"其它区",410500:"安阳市",410502:"文峰区",410503:"北关区",410505:"殷都区",410506:"龙安区",410522:"安阳县",410523:"汤阴县",410526:"滑县",410527:"内黄县",410581:"林州市",410582:"其它区",410600:"鹤壁市",410602:"鹤山区",410603:"山城区",410611:"淇滨区",410621:"浚县",410622:"淇县",410623:"其它区",410700:"新乡市",410702:"红旗区",410703:"卫滨区",410704:"凤泉区",410711:"牧野区",410721:"新乡县",410724:"获嘉县",410725:"原阳县",410726:"延津县",410727:"封丘县",410728:"长垣县",410781:"卫辉市",410782:"辉县市",410783:"其它区",410800:"焦作市",410802:"解放区",410803:"中站区",410804:"马村区",410811:"山阳区",410821:"修武县",410822:"博爱县",410823:"武陟县",410825:"温县",410881:"济源市",410882:"沁阳市",410883:"孟州市",410884:"其它区",410900:"濮阳市",410902:"华龙区",410922:"清丰县",410923:"南乐县",410926:"范县",410927:"台前县",410928:"濮阳县",410929:"其它区",411000:"许昌市",411002:"魏都区",411023:"许昌县",411024:"鄢陵县",411025:"襄城县",411081:"禹州市",411082:"长葛市",411083:"其它区",411100:"漯河市",411102:"源汇区",411103:"郾城区",411104:"召陵区",411121:"舞阳县",411122:"临颍县",411123:"其它区",411200:"三门峡市",411202:"湖滨区",411221:"渑池县",411222:"陕县",411224:"卢氏县",411281:"义马市",411282:"灵宝市",411283:"其它区",411300:"南阳市",411302:"宛城区",411303:"卧龙区",411321:"南召县",411322:"方城县",411323:"西峡县",411324:"镇平县",411325:"内乡县",411326:"淅川县",411327:"社旗县",411328:"唐河县",411329:"新野县",411330:"桐柏县",411381:"邓州市",411382:"其它区",411400:"商丘市",411402:"梁园区",411403:"睢阳区",411421:"民权县",411422:"睢县",411423:"宁陵县",411424:"柘城县",411425:"虞城县",411426:"夏邑县",411481:"永城市",411482:"其它区",411500:"信阳市",411502:"浉河区",411503:"平桥区",411521:"罗山县",411522:"光山县",411523:"新县",411524:"商城县",411525:"固始县",411526:"潢川县",411527:"淮滨县",411528:"息县",411529:"其它区",411600:"周口市",411602:"川汇区",411621:"扶沟县",411622:"西华县",411623:"商水县",411624:"沈丘县",411625:"郸城县",411626:"淮阳县",411627:"太康县",411628:"鹿邑县",411681:"项城市",411682:"其它区",411700:"驻马店市",411702:"驿城区",411721:"西平县",411722:"上蔡县",411723:"平舆县",411724:"正阳县",411725:"确山县",411726:"泌阳县",411727:"汝南县",411728:"遂平县",411729:"新蔡县",411730:"其它区",420000:"湖北省",420100:"武汉市",420102:"江岸区",420103:"江汉区",420104:"硚口区",420105:"汉阳区",420106:"武昌区",420107:"青山区",420111:"洪山区",420112:"东西湖区",420113:"汉南区",420114:"蔡甸区",420115:"江夏区",420116:"黄陂区",420117:"新洲区",420118:"其它区",420200:"黄石市",420202:"黄石港区",420203:"西塞山区",420204:"下陆区",420205:"铁山区",420222:"阳新县",420281:"大冶市",420282:"其它区",420300:"十堰市",420302:"茅箭区",420303:"张湾区",420321:"郧县",420322:"郧西县",420323:"竹山县",420324:"竹溪县",420325:"房县",420381:"丹江口市",420383:"其它区",420500:"宜昌市",420502:"西陵区",420503:"伍家岗区",420504:"点军区",420505:"猇亭区",420506:"夷陵区",420525:"远安县",420526:"兴山县",420527:"秭归县",420528:"长阳土家族自治县",420529:"五峰土家族自治县",420581:"宜都市",420582:"当阳市",420583:"枝江市",420584:"其它区",420600:"襄阳市",420602:"襄城区",420606:"樊城区",420607:"襄州区",420624:"南漳县",420625:"谷城县",420626:"保康县",420682:"老河口市",420683:"枣阳市",420684:"宜城市",420685:"其它区",420700:"鄂州市",420702:"梁子湖区",420703:"华容区",420704:"鄂城区",420705:"其它区",420800:"荆门市",420802:"东宝区",420804:"掇刀区",420821:"京山县",420822:"沙洋县",420881:"钟祥市",420882:"其它区",420900:"孝感市",420902:"孝南区",420921:"孝昌县",420922:"大悟县",420923:"云梦县",420981:"应城市",420982:"安陆市",420984:"汉川市",420985:"其它区",421000:"荆州市",421002:"沙市区",421003:"荆州区",421022:"公安县",421023:"监利县",421024:"江陵县",421081:"石首市",421083:"洪湖市",421087:"松滋市",421088:"其它区",421100:"黄冈市",421102:"黄州区",421121:"团风县",421122:"红安县",421123:"罗田县",421124:"英山县",421125:"浠水县",421126:"蕲春县",421127:"黄梅县",421181:"麻城市",421182:"武穴市",421183:"其它区",421200:"咸宁市",421202:"咸安区",421221:"嘉鱼县",421222:"通城县",421223:"崇阳县",421224:"通山县",421281:"赤壁市",421283:"其它区",421300:"随州市",421302:"曾都区",421321:"随县",421381:"广水市",421382:"其它区",422800:"恩施土家族苗族自治州",422801:"恩施市",422802:"利川市",422822:"建始县",422823:"巴东县",422825:"宣恩县",422826:"咸丰县",422827:"来凤县",422828:"鹤峰县",422829:"其它区",429004:"仙桃市",429005:"潜江市",429006:"天门市",429021:"神农架林区",430000:"湖南省",430100:"长沙市",430102:"芙蓉区",430103:"天心区",430104:"岳麓区",430105:"开福区",430111:"雨花区",430121:"长沙县",430122:"望城区",430124:"宁乡县",430181:"浏阳市",430182:"其它区",430200:"株洲市",430202:"荷塘区",430203:"芦淞区",430204:"石峰区",430211:"天元区",430221:"株洲县",430223:"攸县",430224:"茶陵县",430225:"炎陵县",430281:"醴陵市",430282:"其它区",430300:"湘潭市",430302:"雨湖区",430304:"岳塘区",430321:"湘潭县",430381:"湘乡市",430382:"韶山市",430383:"其它区",430400:"衡阳市",430405:"珠晖区",430406:"雁峰区",430407:"石鼓区",430408:"蒸湘区",430412:"南岳区",430421:"衡阳县",430422:"衡南县",430423:"衡山县",430424:"衡东县",430426:"祁东县",430481:"耒阳市",430482:"常宁市",430483:"其它区",430500:"邵阳市",430502:"双清区",430503:"大祥区",430511:"北塔区",430521:"邵东县",430522:"新邵县",430523:"邵阳县",430524:"隆回县",430525:"洞口县",430527:"绥宁县",430528:"新宁县",430529:"城步苗族自治县",430581:"武冈市",430582:"其它区",430600:"岳阳市",430602:"岳阳楼区",430603:"云溪区",430611:"君山区",430621:"岳阳县",430623:"华容县",430624:"湘阴县",430626:"平江县",430681:"汨罗市",430682:"临湘市",430683:"其它区",430700:"常德市",430702:"武陵区",430703:"鼎城区",430721:"安乡县",430722:"汉寿县",430723:"澧县",430724:"临澧县",430725:"桃源县",430726:"石门县",430781:"津市市",430782:"其它区",430800:"张家界市",430802:"永定区",430811:"武陵源区",430821:"慈利县",430822:"桑植县",430823:"其它区",430900:"益阳市",430902:"资阳区",430903:"赫山区",430921:"南县",430922:"桃江县",430923:"安化县",430981:"沅江市",430982:"其它区",431000:"郴州市",431002:"北湖区",431003:"苏仙区",431021:"桂阳县",431022:"宜章县",431023:"永兴县",431024:"嘉禾县",431025:"临武县",431026:"汝城县",431027:"桂东县",431028:"安仁县",431081:"资兴市",431082:"其它区",431100:"永州市",431102:"零陵区",431103:"冷水滩区",431121:"祁阳县",431122:"东安县",431123:"双牌县",431124:"道县",431125:"江永县",431126:"宁远县",431127:"蓝山县",431128:"新田县",431129:"江华瑶族自治县",431130:"其它区",431200:"怀化市",431202:"鹤城区",431221:"中方县",431222:"沅陵县",431223:"辰溪县",431224:"溆浦县",431225:"会同县",431226:"麻阳苗族自治县",431227:"新晃侗族自治县",431228:"芷江侗族自治县",431229:"靖州苗族侗族自治县",431230:"通道侗族自治县",431281:"洪江市",431282:"其它区",431300:"娄底市",431302:"娄星区",431321:"双峰县",431322:"新化县",431381:"冷水江市",431382:"涟源市",431383:"其它区",433100:"湘西土家族苗族自治州",433101:"吉首市",433122:"泸溪县",433123:"凤凰县",433124:"花垣县",433125:"保靖县",433126:"古丈县",433127:"永顺县",433130:"龙山县",433131:"其它区",440000:"广东省",440100:"广州市",440103:"荔湾区",440104:"越秀区",440105:"海珠区",440106:"天河区",440111:"白云区",440112:"黄埔区",440113:"番禺区",440114:"花都区",440115:"南沙区",440116:"萝岗区",440183:"增城市",440184:"从化市",440189:"其它区",440200:"韶关市",440203:"武江区",440204:"浈江区",440205:"曲江区",440222:"始兴县",440224:"仁化县",440229:"翁源县",440232:"乳源瑶族自治县",440233:"新丰县",440281:"乐昌市",440282:"南雄市",440283:"其它区",440300:"深圳市",440303:"罗湖区",440304:"福田区",440305:"南山区",440306:"宝安区",440307:"龙岗区",440308:"盐田区",440309:"其它区",440320:"光明新区",440321:"坪山新区",440322:"大鹏新区",440323:"龙华新区",440400:"珠海市",440402:"香洲区",440403:"斗门区",440404:"金湾区",440488:"其它区",440500:"汕头市",440507:"龙湖区",440511:"金平区",440512:"濠江区",440513:"潮阳区",440514:"潮南区",440515:"澄海区",440523:"南澳县",440524:"其它区",440600:"佛山市",440604:"禅城区",440605:"南海区",440606:"顺德区",440607:"三水区",440608:"高明区",440609:"其它区",440700:"江门市",440703:"蓬江区",440704:"江海区",440705:"新会区",440781:"台山市",440783:"开平市",440784:"鹤山市",440785:"恩平市",440786:"其它区",440800:"湛江市",440802:"赤坎区",440803:"霞山区",440804:"坡头区",440811:"麻章区",440823:"遂溪县",440825:"徐闻县",440881:"廉江市",440882:"雷州市",440883:"吴川市",440884:"其它区",440900:"茂名市",440902:"茂南区",440903:"茂港区",440923:"电白县",440981:"高州市",440982:"化州市",440983:"信宜市",440984:"其它区",441200:"肇庆市",441202:"端州区",441203:"鼎湖区",441223:"广宁县",441224:"怀集县",441225:"封开县",441226:"德庆县",441283:"高要市",441284:"四会市",441285:"其它区",441300:"惠州市",441302:"惠城区",441303:"惠阳区",441322:"博罗县",441323:"惠东县",441324:"龙门县",441325:"其它区",441400:"梅州市",441402:"梅江区",441421:"梅县",441422:"大埔县",441423:"丰顺县",441424:"五华县",441426:"平远县",441427:"蕉岭县",441481:"兴宁市",441482:"其它区",441500:"汕尾市",441502:"城区",441521:"海丰县",441523:"陆河县",441581:"陆丰市",441582:"其它区",441600:"河源市",441602:"源城区",441621:"紫金县",441622:"龙川县",441623:"连平县",441624:"和平县",441625:"东源县",441626:"其它区",441700:"阳江市",441702:"江城区",441721:"阳西县",441723:"阳东县",441781:"阳春市",441782:"其它区",441800:"清远市",441802:"清城区",441821:"佛冈县",441823:"阳山县",441825:"连山壮族瑶族自治县",441826:"连南瑶族自治县",441827:"清新区",441881:"英德市",441882:"连州市",441883:"其它区",441900:"东莞市",442000:"中山市",442101:"东沙群岛",445100:"潮州市",445102:"湘桥区",445121:"潮安区",445122:"饶平县",445186:"其它区",445200:"揭阳市",445202:"榕城区",445221:"揭东区",445222:"揭西县",445224:"惠来县",445281:"普宁市",445285:"其它区",445300:"云浮市",445302:"云城区",445321:"新兴县",445322:"郁南县",445323:"云安县",445381:"罗定市",445382:"其它区",450000:"广西壮族自治区",450100:"南宁市",450102:"兴宁区",450103:"青秀区",450105:"江南区",450107:"西乡塘区",450108:"良庆区",450109:"邕宁区",450122:"武鸣县",450123:"隆安县",450124:"马山县",450125:"上林县",450126:"宾阳县",450127:"横县",450128:"其它区",450200:"柳州市",450202:"城中区",450203:"鱼峰区",450204:"柳南区",450205:"柳北区",450221:"柳江县",450222:"柳城县",450223:"鹿寨县",450224:"融安县",450225:"融水苗族自治县",450226:"三江侗族自治县",450227:"其它区",450300:"桂林市",450302:"秀峰区",450303:"叠彩区",450304:"象山区",450305:"七星区",450311:"雁山区",450321:"阳朔县",450322:"临桂区",450323:"灵川县",450324:"全州县",450325:"兴安县",450326:"永福县",450327:"灌阳县",450328:"龙胜各族自治县",450329:"资源县",450330:"平乐县",450331:"荔浦县",450332:"恭城瑶族自治县",450333:"其它区",450400:"梧州市",450403:"万秀区",450405:"长洲区",450406:"龙圩区",450421:"苍梧县",450422:"藤县",450423:"蒙山县",450481:"岑溪市",450482:"其它区",450500:"北海市",450502:"海城区",450503:"银海区",450512:"铁山港区",450521:"合浦县",450522:"其它区",450600:"防城港市",450602:"港口区",450603:"防城区",450621:"上思县",450681:"东兴市",450682:"其它区",450700:"钦州市",450702:"钦南区",450703:"钦北区",450721:"灵山县",450722:"浦北县",450723:"其它区",450800:"贵港市",450802:"港北区",450803:"港南区",450804:"覃塘区",450821:"平南县",450881:"桂平市",450882:"其它区",450900:"玉林市",450902:"玉州区",450903:"福绵区",450921:"容县",450922:"陆川县",450923:"博白县",450924:"兴业县",450981:"北流市",450982:"其它区",451000:"百色市",451002:"右江区",451021:"田阳县",451022:"田东县",451023:"平果县",451024:"德保县",451025:"靖西县",451026:"那坡县",451027:"凌云县",451028:"乐业县",451029:"田林县",451030:"西林县",451031:"隆林各族自治县",451032:"其它区",451100:"贺州市",451102:"八步区",451119:"平桂管理区",451121:"昭平县",451122:"钟山县",451123:"富川瑶族自治县",451124:"其它区",451200:"河池市",451202:"金城江区",451221:"南丹县",451222:"天峨县",451223:"凤山县",451224:"东兰县",451225:"罗城仫佬族自治县",451226:"环江毛南族自治县",451227:"巴马瑶族自治县",451228:"都安瑶族自治县",451229:"大化瑶族自治县",451281:"宜州市",451282:"其它区",451300:"来宾市",451302:"兴宾区",451321:"忻城县",451322:"象州县",451323:"武宣县",451324:"金秀瑶族自治县",451381:"合山市",451382:"其它区",451400:"崇左市",451402:"江州区",451421:"扶绥县",451422:"宁明县",451423:"龙州县",451424:"大新县",451425:"天等县",451481:"凭祥市",451482:"其它区",460000:"海南省",460100:"海口市",460105:"秀英区",460106:"龙华区",460107:"琼山区",460108:"美兰区",460109:"其它区",460200:"三亚市",460300:"三沙市",460321:"西沙群岛",460322:"南沙群岛",460323:"中沙群岛的岛礁及其海域",469001:"五指山市",469002:"琼海市",469003:"儋州市",469005:"文昌市",469006:"万宁市",469007:"东方市",469025:"定安县",469026:"屯昌县",469027:"澄迈县",469028:"临高县",469030:"白沙黎族自治县",469031:"昌江黎族自治县",469033:"乐东黎族自治县",469034:"陵水黎族自治县",469035:"保亭黎族苗族自治县",469036:"琼中黎族苗族自治县",471005:"其它区",500000:"重庆",500100:"重庆市",500101:"万州区",500102:"涪陵区",500103:"渝中区",500104:"大渡口区",500105:"江北区",500106:"沙坪坝区",500107:"九龙坡区",500108:"南岸区",500109:"北碚区",500110:"万盛区",500111:"双桥区",500112:"渝北区",500113:"巴南区",500114:"黔江区",500115:"长寿区",500222:"綦江区",500223:"潼南县",500224:"铜梁县",500225:"大足区",500226:"荣昌县",500227:"璧山县",500228:"梁平县",500229:"城口县",500230:"丰都县",500231:"垫江县",500232:"武隆县",500233:"忠县",500234:"开县",500235:"云阳县",500236:"奉节县",500237:"巫山县",500238:"巫溪县",500240:"石柱土家族自治县",500241:"秀山土家族苗族自治县",500242:"酉阳土家族苗族自治县",500243:"彭水苗族土家族自治县",500381:"江津区",500382:"合川区",500383:"永川区",500384:"南川区",500385:"其它区",510000:"四川省",510100:"成都市",510104:"锦江区",510105:"青羊区",510106:"金牛区",510107:"武侯区",510108:"成华区",510112:"龙泉驿区",510113:"青白江区",510114:"新都区",510115:"温江区",510121:"金堂县",510122:"双流县",510124:"郫县",510129:"大邑县",510131:"蒲江县",510132:"新津县",510181:"都江堰市",510182:"彭州市",510183:"邛崃市",510184:"崇州市",510185:"其它区",510300:"自贡市",510302:"自流井区",510303:"贡井区",510304:"大安区",510311:"沿滩区",510321:"荣县",510322:"富顺县",510323:"其它区",510400:"攀枝花市",510402:"东区",510403:"西区",510411:"仁和区",510421:"米易县",510422:"盐边县",510423:"其它区",510500:"泸州市",510502:"江阳区",510503:"纳溪区",510504:"龙马潭区",510521:"泸县",510522:"合江县",510524:"叙永县",510525:"古蔺县",510526:"其它区",510600:"德阳市",510603:"旌阳区",510623:"中江县",510626:"罗江县",510681:"广汉市",510682:"什邡市",510683:"绵竹市",510684:"其它区",510700:"绵阳市",510703:"涪城区",510704:"游仙区",510722:"三台县",510723:"盐亭县",510724:"安县",510725:"梓潼县",510726:"北川羌族自治县",510727:"平武县",510781:"江油市",510782:"其它区",510800:"广元市",510802:"利州区",510811:"昭化区",510812:"朝天区",510821:"旺苍县",510822:"青川县",510823:"剑阁县",510824:"苍溪县",510825:"其它区",510900:"遂宁市",510903:"船山区",510904:"安居区",510921:"蓬溪县",510922:"射洪县",510923:"大英县",510924:"其它区",511000:"内江市",511002:"市中区",511011:"东兴区",511024:"威远县",511025:"资中县",511028:"隆昌县",511029:"其它区",511100:"乐山市",511102:"市中区",511111:"沙湾区",511112:"五通桥区",511113:"金口河区",511123:"犍为县",511124:"井研县",511126:"夹江县",511129:"沐川县",511132:"峨边彝族自治县",511133:"马边彝族自治县",511181:"峨眉山市",511182:"其它区",511300:"南充市",511302:"顺庆区",511303:"高坪区",511304:"嘉陵区",511321:"南部县",511322:"营山县",511323:"蓬安县",511324:"仪陇县",511325:"西充县",511381:"阆中市",511382:"其它区",511400:"眉山市",511402:"东坡区",511421:"仁寿县",511422:"彭山县",511423:"洪雅县",511424:"丹棱县",511425:"青神县",511426:"其它区",511500:"宜宾市",511502:"翠屏区",511521:"宜宾县",511522:"南溪区",511523:"江安县",511524:"长宁县",511525:"高县",511526:"珙县",511527:"筠连县",511528:"兴文县",511529:"屏山县",511530:"其它区",511600:"广安市",511602:"广安区",511603:"前锋区",511621:"岳池县",511622:"武胜县",511623:"邻水县",511681:"华蓥市",511683:"其它区",511700:"达州市",511702:"通川区",511721:"达川区",511722:"宣汉县",511723:"开江县",511724:"大竹县",511725:"渠县",511781:"万源市",511782:"其它区",511800:"雅安市",511802:"雨城区",511821:"名山区",511822:"荥经县",511823:"汉源县",511824:"石棉县",511825:"天全县",511826:"芦山县",511827:"宝兴县",511828:"其它区",511900:"巴中市",511902:"巴州区",511903:"恩阳区",511921:"通江县",511922:"南江县",511923:"平昌县",511924:"其它区",512000:"资阳市",512002:"雁江区",512021:"安岳县",512022:"乐至县",512081:"简阳市",512082:"其它区",513200:"阿坝藏族羌族自治州",513221:"汶川县",513222:"理县",513223:"茂县",513224:"松潘县",513225:"九寨沟县",513226:"金川县",513227:"小金县",513228:"黑水县",513229:"马尔康县",513230:"壤塘县",513231:"阿坝县",513232:"若尔盖县",513233:"红原县",513234:"其它区",513300:"甘孜藏族自治州",513321:"康定县",513322:"泸定县",513323:"丹巴县",513324:"九龙县",513325:"雅江县",513326:"道孚县",513327:"炉霍县",513328:"甘孜县",513329:"新龙县",513330:"德格县",513331:"白玉县",513332:"石渠县",513333:"色达县",513334:"理塘县",513335:"巴塘县",513336:"乡城县",513337:"稻城县",513338:"得荣县",513339:"其它区",513400:"凉山彝族自治州",513401:"西昌市",513422:"木里藏族自治县",513423:"盐源县",513424:"德昌县",513425:"会理县",513426:"会东县",513427:"宁南县",513428:"普格县",513429:"布拖县",513430:"金阳县",513431:"昭觉县",513432:"喜德县",513433:"冕宁县",513434:"越西县",513435:"甘洛县",513436:"美姑县",513437:"雷波县",513438:"其它区",520000:"贵州省",520100:"贵阳市",520102:"南明区",520103:"云岩区",520111:"花溪区",520112:"乌当区",520113:"白云区",520121:"开阳县",520122:"息烽县",520123:"修文县",520151:"观山湖区",520181:"清镇市",520182:"其它区",520200:"六盘水市",520201:"钟山区",520203:"六枝特区",520221:"水城县",520222:"盘县",520223:"其它区",520300:"遵义市",520302:"红花岗区",520303:"汇川区",520321:"遵义县",520322:"桐梓县",520323:"绥阳县",520324:"正安县",520325:"道真仡佬族苗族自治县",520326:"务川仡佬族苗族自治县",520327:"凤冈县",520328:"湄潭县",520329:"余庆县",520330:"习水县",520381:"赤水市",520382:"仁怀市",520383:"其它区",520400:"安顺市",520402:"西秀区",520421:"平坝县",520422:"普定县",520423:"镇宁布依族苗族自治县",520424:"关岭布依族苗族自治县",520425:"紫云苗族布依族自治县",520426:"其它区",522200:"铜仁市",522201:"碧江区",522222:"江口县",522223:"玉屏侗族自治县",522224:"石阡县",522225:"思南县",522226:"印江土家族苗族自治县",522227:"德江县",522228:"沿河土家族自治县",522229:"松桃苗族自治县",522230:"万山区",522231:"其它区",522300:"黔西南布依族苗族自治州",522301:"兴义市",522322:"兴仁县",522323:"普安县",522324:"晴隆县",522325:"贞丰县",522326:"望谟县",522327:"册亨县",522328:"安龙县",522329:"其它区",522400:"毕节市",522401:"七星关区",522422:"大方县",522423:"黔西县",522424:"金沙县",522425:"织金县",522426:"纳雍县",522427:"威宁彝族回族苗族自治县",522428:"赫章县",522429:"其它区",522600:"黔东南苗族侗族自治州",522601:"凯里市",522622:"黄平县",522623:"施秉县",522624:"三穗县",522625:"镇远县",522626:"岑巩县",522627:"天柱县",522628:"锦屏县",522629:"剑河县",522630:"台江县",522631:"黎平县",522632:"榕江县",522633:"从江县",522634:"雷山县",522635:"麻江县",522636:"丹寨县",522637:"其它区",522700:"黔南布依族苗族自治州",522701:"都匀市",522702:"福泉市",522722:"荔波县",522723:"贵定县",522725:"瓮安县",522726:"独山县",522727:"平塘县",522728:"罗甸县",522729:"长顺县",522730:"龙里县",522731:"惠水县",522732:"三都水族自治县",522733:"其它区",530000:"云南省",530100:"昆明市",530102:"五华区",530103:"盘龙区",530111:"官渡区",530112:"西山区",530113:"东川区",530121:"呈贡区",530122:"晋宁县",530124:"富民县",530125:"宜良县",530126:"石林彝族自治县",530127:"嵩明县",530128:"禄劝彝族苗族自治县",530129:"寻甸回族彝族自治县",530181:"安宁市",530182:"其它区",530300:"曲靖市",530302:"麒麟区",530321:"马龙县",530322:"陆良县",530323:"师宗县",530324:"罗平县",530325:"富源县",530326:"会泽县",530328:"沾益县",530381:"宣威市",530382:"其它区",530400:"玉溪市",530402:"红塔区",530421:"江川县",530422:"澄江县",530423:"通海县",530424:"华宁县",530425:"易门县",530426:"峨山彝族自治县",530427:"新平彝族傣族自治县",530428:"元江哈尼族彝族傣族自治县",530429:"其它区",530500:"保山市",530502:"隆阳区",530521:"施甸县",530522:"腾冲县",530523:"龙陵县",530524:"昌宁县",530525:"其它区",530600:"昭通市",530602:"昭阳区",530621:"鲁甸县",530622:"巧家县",530623:"盐津县",530624:"大关县",530625:"永善县",530626:"绥江县",530627:"镇雄县",530628:"彝良县",530629:"威信县",530630:"水富县",530631:"其它区",530700:"丽江市",530702:"古城区",530721:"玉龙纳西族自治县",530722:"永胜县",530723:"华坪县",530724:"宁蒗彝族自治县",530725:"其它区",530800:"普洱市",530802:"思茅区",530821:"宁洱哈尼族彝族自治县",530822:"墨江哈尼族自治县",530823:"景东彝族自治县",530824:"景谷傣族彝族自治县",530825:"镇沅彝族哈尼族拉祜族自治县",530826:"江城哈尼族彝族自治县",530827:"孟连傣族拉祜族佤族自治县",530828:"澜沧拉祜族自治县",530829:"西盟佤族自治县",530830:"其它区",530900:"临沧市",530902:"临翔区",530921:"凤庆县",530922:"云县",530923:"永德县",530924:"镇康县",530925:"双江拉祜族佤族布朗族傣族自治县",530926:"耿马傣族佤族自治县",530927:"沧源佤族自治县",530928:"其它区",532300:"楚雄彝族自治州",532301:"楚雄市",532322:"双柏县",532323:"牟定县",532324:"南华县",532325:"姚安县",532326:"大姚县",532327:"永仁县",532328:"元谋县",532329:"武定县",532331:"禄丰县",532332:"其它区",532500:"红河哈尼族彝族自治州",532501:"个旧市",532502:"开远市",532522:"蒙自市",532523:"屏边苗族自治县",532524:"建水县",532525:"石屏县",532526:"弥勒市",532527:"泸西县",532528:"元阳县",532529:"红河县",532530:"金平苗族瑶族傣族自治县",532531:"绿春县",532532:"河口瑶族自治县",532533:"其它区",532600:"文山壮族苗族自治州",532621:"文山市",532622:"砚山县",532623:"西畴县",532624:"麻栗坡县",532625:"马关县",532626:"丘北县",532627:"广南县",532628:"富宁县",532629:"其它区",532800:"西双版纳傣族自治州",532801:"景洪市",532822:"勐海县",532823:"勐腊县",532824:"其它区",532900:"大理白族自治州",532901:"大理市",532922:"漾濞彝族自治县",532923:"祥云县",532924:"宾川县",532925:"弥渡县",532926:"南涧彝族自治县",532927:"巍山彝族回族自治县",532928:"永平县",532929:"云龙县",532930:"洱源县",532931:"剑川县",532932:"鹤庆县",532933:"其它区",533100:"德宏傣族景颇族自治州",533102:"瑞丽市",533103:"芒市",533122:"梁河县",533123:"盈江县",533124:"陇川县",533125:"其它区",533300:"怒江傈僳族自治州",533321:"泸水县",533323:"福贡县",533324:"贡山独龙族怒族自治县",533325:"兰坪白族普米族自治县",533326:"其它区",533400:"迪庆藏族自治州",533421:"香格里拉县",533422:"德钦县",533423:"维西傈僳族自治县",533424:"其它区",540000:"西藏自治区",540100:"拉萨市",540102:"城关区",540121:"林周县",540122:"当雄县",540123:"尼木县",540124:"曲水县",540125:"堆龙德庆县",540126:"达孜县",540127:"墨竹工卡县",540128:"其它区",542100:"昌都地区",542121:"昌都县",542122:"江达县",542123:"贡觉县",542124:"类乌齐县",542125:"丁青县",542126:"察雅县",542127:"八宿县",542128:"左贡县",542129:"芒康县",542132:"洛隆县",542133:"边坝县",542134:"其它区",542200:"山南地区",542221:"乃东县",542222:"扎囊县",542223:"贡嘎县",542224:"桑日县",542225:"琼结县",542226:"曲松县",542227:"措美县",542228:"洛扎县",542229:"加查县",542231:"隆子县",542232:"错那县",542233:"浪卡子县",542234:"其它区",542300:"日喀则地区",542301:"日喀则市",542322:"南木林县",542323:"江孜县",542324:"定日县",542325:"萨迦县",542326:"拉孜县",542327:"昂仁县",542328:"谢通门县",542329:"白朗县",542330:"仁布县",542331:"康马县",542332:"定结县",542333:"仲巴县",542334:"亚东县",542335:"吉隆县",542336:"聂拉木县",542337:"萨嘎县",542338:"岗巴县",542339:"其它区",542400:"那曲地区",542421:"那曲县",542422:"嘉黎县",542423:"比如县",542424:"聂荣县",542425:"安多县",542426:"申扎县",542427:"索县",542428:"班戈县",542429:"巴青县",542430:"尼玛县",542431:"其它区",542432:"双湖县",542500:"阿里地区",542521:"普兰县",542522:"札达县",542523:"噶尔县",542524:"日土县",542525:"革吉县",542526:"改则县",542527:"措勤县",542528:"其它区",542600:"林芝地区",542621:"林芝县",542622:"工布江达县",542623:"米林县",542624:"墨脱县",542625:"波密县",542626:"察隅县",542627:"朗县",542628:"其它区",610000:"陕西省",610100:"西安市",610102:"新城区",610103:"碑林区",610104:"莲湖区",610111:"灞桥区",610112:"未央区",610113:"雁塔区",610114:"阎良区",610115:"临潼区",610116:"长安区",610122:"蓝田县",610124:"周至县",610125:"户县",610126:"高陵县",610127:"其它区",610200:"铜川市",610202:"王益区",610203:"印台区",610204:"耀州区",610222:"宜君县",610223:"其它区",610300:"宝鸡市",610302:"渭滨区",610303:"金台区",610304:"陈仓区",610322:"凤翔县",610323:"岐山县",610324:"扶风县",610326:"眉县",610327:"陇县",610328:"千阳县",610329:"麟游县",610330:"凤县",610331:"太白县",610332:"其它区",610400:"咸阳市",610402:"秦都区",610403:"杨陵区",610404:"渭城区",610422:"三原县",610423:"泾阳县",610424:"乾县",610425:"礼泉县",610426:"永寿县",610427:"彬县",610428:"长武县",610429:"旬邑县",610430:"淳化县",610431:"武功县",610481:"兴平市",610482:"其它区",610500:"渭南市",610502:"临渭区",610521:"华县",610522:"潼关县",610523:"大荔县",610524:"合阳县",610525:"澄城县",610526:"蒲城县",610527:"白水县",610528:"富平县",610581:"韩城市",610582:"华阴市",610583:"其它区",610600:"延安市",610602:"宝塔区",610621:"延长县",610622:"延川县",610623:"子长县",610624:"安塞县",610625:"志丹县",610626:"吴起县",610627:"甘泉县",610628:"富县",610629:"洛川县",610630:"宜川县",610631:"黄龙县",610632:"黄陵县",610633:"其它区",610700:"汉中市",610702:"汉台区",610721:"南郑县",610722:"城固县",610723:"洋县",610724:"西乡县",610725:"勉县",610726:"宁强县",610727:"略阳县",610728:"镇巴县",610729:"留坝县",610730:"佛坪县",610731:"其它区",610800:"榆林市",610802:"榆阳区",610821:"神木县",610822:"府谷县",610823:"横山县",610824:"靖边县",610825:"定边县",610826:"绥德县",610827:"米脂县",610828:"佳县",610829:"吴堡县",610830:"清涧县",610831:"子洲县",610832:"其它区",610900:"安康市",610902:"汉滨区",610921:"汉阴县",610922:"石泉县",610923:"宁陕县",610924:"紫阳县",610925:"岚皋县",610926:"平利县",610927:"镇坪县",610928:"旬阳县",610929:"白河县",610930:"其它区",611000:"商洛市",611002:"商州区",611021:"洛南县",611022:"丹凤县",611023:"商南县",611024:"山阳县",611025:"镇安县",611026:"柞水县",611027:"其它区",620000:"甘肃省",620100:"兰州市",620102:"城关区",620103:"七里河区",620104:"西固区",620105:"安宁区",620111:"红古区",620121:"永登县",620122:"皋兰县",620123:"榆中县",620124:"其它区",620200:"嘉峪关市",620300:"金昌市",620302:"金川区",620321:"永昌县",620322:"其它区",620400:"白银市",620402:"白银区",620403:"平川区",620421:"靖远县",620422:"会宁县",620423:"景泰县",620424:"其它区",620500:"天水市",620502:"秦州区",620503:"麦积区",620521:"清水县",620522:"秦安县",620523:"甘谷县",620524:"武山县",620525:"张家川回族自治县",620526:"其它区",620600:"武威市",620602:"凉州区",620621:"民勤县",620622:"古浪县",620623:"天祝藏族自治县",620624:"其它区",620700:"张掖市",620702:"甘州区",620721:"肃南裕固族自治县",620722:"民乐县",620723:"临泽县",620724:"高台县",620725:"山丹县",620726:"其它区",620800:"平凉市",620802:"崆峒区",620821:"泾川县",620822:"灵台县",620823:"崇信县",620824:"华亭县",620825:"庄浪县",620826:"静宁县",620827:"其它区",620900:"酒泉市",620902:"肃州区",620921:"金塔县",620922:"瓜州县",620923:"肃北蒙古族自治县",620924:"阿克塞哈萨克族自治县",620981:"玉门市",620982:"敦煌市",620983:"其它区",621000:"庆阳市",621002:"西峰区",621021:"庆城县",621022:"环县",621023:"华池县",621024:"合水县",621025:"正宁县",621026:"宁县",621027:"镇原县",621028:"其它区",621100:"定西市",621102:"安定区",621121:"通渭县",621122:"陇西县",621123:"渭源县",621124:"临洮县",621125:"漳县",621126:"岷县",621127:"其它区",621200:"陇南市",621202:"武都区",621221:"成县",621222:"文县",621223:"宕昌县",621224:"康县",621225:"西和县",621226:"礼县",621227:"徽县",621228:"两当县",621229:"其它区",622900:"临夏回族自治州",622901:"临夏市",622921:"临夏县",622922:"康乐县",622923:"永靖县",622924:"广河县",622925:"和政县",622926:"东乡族自治县",622927:"积石山保安族东乡族撒拉族自治县",622928:"其它区",623000:"甘南藏族自治州",623001:"合作市",623021:"临潭县",623022:"卓尼县",623023:"舟曲县",623024:"迭部县",623025:"玛曲县",623026:"碌曲县",623027:"夏河县",623028:"其它区",630000:"青海省",630100:"西宁市",630102:"城东区",630103:"城中区",630104:"城西区",630105:"城北区",630121:"大通回族土族自治县",630122:"湟中县",630123:"湟源县",630124:"其它区",632100:"海东市",632121:"平安县",632122:"民和回族土族自治县",632123:"乐都区",632126:"互助土族自治县",632127:"化隆回族自治县",632128:"循化撒拉族自治县",632129:"其它区",632200:"海北藏族自治州",632221:"门源回族自治县",632222:"祁连县",632223:"海晏县",632224:"刚察县",632225:"其它区",632300:"黄南藏族自治州",632321:"同仁县",632322:"尖扎县",632323:"泽库县",632324:"河南蒙古族自治县",632325:"其它区",632500:"海南藏族自治州",632521:"共和县",632522:"同德县",632523:"贵德县",632524:"兴海县",632525:"贵南县",632526:"其它区",632600:"果洛藏族自治州",632621:"玛沁县",632622:"班玛县",632623:"甘德县",632624:"达日县",632625:"久治县",632626:"玛多县",632627:"其它区",632700:"玉树藏族自治州",632721:"玉树市",632722:"杂多县",632723:"称多县",632724:"治多县",632725:"囊谦县",632726:"曲麻莱县",632727:"其它区",632800:"海西蒙古族藏族自治州",632801:"格尔木市",632802:"德令哈市",632821:"乌兰县",632822:"都兰县",632823:"天峻县",632824:"其它区",640000:"宁夏回族自治区",640100:"银川市",640104:"兴庆区",640105:"西夏区",640106:"金凤区",640121:"永宁县",640122:"贺兰县",640181:"灵武市",640182:"其它区",640200:"石嘴山市",640202:"大武口区",640205:"惠农区",640221:"平罗县",640222:"其它区",640300:"吴忠市",640302:"利通区",640303:"红寺堡区",640323:"盐池县",640324:"同心县",640381:"青铜峡市",640382:"其它区",640400:"固原市",640402:"原州区",640422:"西吉县",640423:"隆德县",640424:"泾源县",640425:"彭阳县",640426:"其它区",640500:"中卫市",640502:"沙坡头区",640521:"中宁县",640522:"海原县",640523:"其它区",650000:"新疆维吾尔自治区",650100:"乌鲁木齐市",650102:"天山区",650103:"沙依巴克区",650104:"新市区",650105:"水磨沟区",650106:"头屯河区",650107:"达坂城区",650109:"米东区",650121:"乌鲁木齐县",650122:"其它区",650200:"克拉玛依市",650202:"独山子区",650203:"克拉玛依区",650204:"白碱滩区",650205:"乌尔禾区",650206:"其它区",652100:"吐鲁番地区",652101:"吐鲁番市",652122:"鄯善县",652123:"托克逊县",652124:"其它区",652200:"哈密地区",652201:"哈密市",652222:"巴里坤哈萨克自治县",652223:"伊吾县",652224:"其它区",652300:"昌吉回族自治州",652301:"昌吉市",652302:"阜康市",652323:"呼图壁县",652324:"玛纳斯县",652325:"奇台县",652327:"吉木萨尔县",652328:"木垒哈萨克自治县",652329:"其它区",652700:"博尔塔拉蒙古自治州",652701:"博乐市",652702:"阿拉山口市",652722:"精河县",652723:"温泉县",652724:"其它区",652800:"巴音郭楞蒙古自治州",652801:"库尔勒市",652822:"轮台县",652823:"尉犁县",652824:"若羌县",652825:"且末县",652826:"焉耆回族自治县",652827:"和静县",652828:"和硕县",652829:"博湖县",652830:"其它区",652900:"阿克苏地区",652901:"阿克苏市",652922:"温宿县",652923:"库车县",652924:"沙雅县",652925:"新和县",652926:"拜城县",652927:"乌什县",652928:"阿瓦提县",652929:"柯坪县",652930:"其它区",653000:"克孜勒苏柯尔克孜自治州",653001:"阿图什市",653022:"阿克陶县",653023:"阿合奇县",653024:"乌恰县",653025:"其它区",653100:"喀什地区",653101:"喀什市",653121:"疏附县",653122:"疏勒县",653123:"英吉沙县",653124:"泽普县",653125:"莎车县",653126:"叶城县",653127:"麦盖提县",653128:"岳普湖县",653129:"伽师县",653130:"巴楚县",653131:"塔什库尔干塔吉克自治县",653132:"其它区",653200:"和田地区",653201:"和田市",653221:"和田县",653222:"墨玉县",653223:"皮山县",653224:"洛浦县",653225:"策勒县",653226:"于田县",653227:"民丰县",653228:"其它区",654000:"伊犁哈萨克自治州",654002:"伊宁市",654003:"奎屯市",654021:"伊宁县",654022:"察布查尔锡伯自治县",654023:"霍城县",654024:"巩留县",654025:"新源县",654026:"昭苏县",654027:"特克斯县",654028:"尼勒克县",654029:"其它区",654200:"塔城地区",654201:"塔城市",654202:"乌苏市",654221:"额敏县",654223:"沙湾县",654224:"托里县",654225:"裕民县",654226:"和布克赛尔蒙古自治县",654227:"其它区",654300:"阿勒泰地区",654301:"阿勒泰市",654321:"布尔津县",654322:"富蕴县",654323:"福海县",654324:"哈巴河县",654325:"青河县",654326:"吉木乃县",654327:"其它区",659001:"石河子市",659002:"阿拉尔市",659003:"图木舒克市",659004:"五家渠市",710000:"台湾",710100:"台北市",710101:"中正区",710102:"大同区",710103:"中山区",710104:"松山区",710105:"大安区",710106:"万华区",710107:"信义区",710108:"士林区",710109:"北投区",710110:"内湖区",710111:"南港区",710112:"文山区",710113:"其它区",710200:"高雄市",710201:"新兴区",710202:"前金区",710203:"芩雅区",710204:"盐埕区",710205:"鼓山区",710206:"旗津区",710207:"前镇区",710208:"三民区",710209:"左营区",710210:"楠梓区",710211:"小港区",710212:"其它区",710241:"苓雅区",710242:"仁武区",710243:"大社区",710244:"冈山区",710245:"路竹区",710246:"阿莲区",710247:"田寮区",710248:"燕巢区",710249:"桥头区",710250:"梓官区",710251:"弥陀区",710252:"永安区",710253:"湖内区",710254:"凤山区",710255:"大寮区",710256:"林园区",710257:"鸟松区",710258:"大树区",710259:"旗山区",710260:"美浓区",710261:"六龟区",710262:"内门区",710263:"杉林区",710264:"甲仙区",710265:"桃源区",710266:"那玛夏区",710267:"茂林区",710268:"茄萣区",710300:"台南市",710301:"中西区",710302:"东区",710303:"南区",710304:"北区",710305:"安平区",710306:"安南区",710307:"其它区",710339:"永康区",710340:"归仁区",710341:"新化区",710342:"左镇区",710343:"玉井区",710344:"楠西区",710345:"南化区",710346:"仁德区",710347:"关庙区",710348:"龙崎区",710349:"官田区",710350:"麻豆区",710351:"佳里区",710352:"西港区",710353:"七股区",710354:"将军区",710355:"学甲区",710356:"北门区",710357:"新营区",710358:"后壁区",710359:"白河区",710360:"东山区",710361:"六甲区",710362:"下营区",710363:"柳营区",710364:"盐水区",710365:"善化区",710366:"大内区",710367:"山上区",710368:"新市区",710369:"安定区",710400:"台中市",710401:"中区",710402:"东区",710403:"南区",710404:"西区",710405:"北区",710406:"北屯区",710407:"西屯区",710408:"南屯区",710409:"其它区",710431:"太平区",710432:"大里区",710433:"雾峰区",710434:"乌日区",710435:"丰原区",710436:"后里区",710437:"石冈区",710438:"东势区",710439:"和平区",710440:"新社区",710441:"潭子区",710442:"大雅区",710443:"神冈区",710444:"大肚区",710445:"沙鹿区",710446:"龙井区",710447:"梧栖区",710448:"清水区",710449:"大甲区",710450:"外埔区",710451:"大安区",710500:"金门县",710507:"金沙镇",710508:"金湖镇",710509:"金宁乡",710510:"金城镇",710511:"烈屿乡",710512:"乌坵乡",710600:"南投县",710614:"南投市",710615:"中寮乡",710616:"草屯镇",710617:"国姓乡",710618:"埔里镇",710619:"仁爱乡",710620:"名间乡",710621:"集集镇",710622:"水里乡",710623:"鱼池乡",710624:"信义乡",710625:"竹山镇",710626:"鹿谷乡",710700:"基隆市",710701:"仁爱区",710702:"信义区",710703:"中正区",710704:"中山区",710705:"安乐区",710706:"暖暖区",710707:"七堵区",710708:"其它区",710800:"新竹市",710801:"东区",710802:"北区",710803:"香山区",710804:"其它区",710900:"嘉义市",710901:"东区",710902:"西区",710903:"其它区",711100:"新北市",711130:"万里区",711131:"金山区",711132:"板桥区",711133:"汐止区",711134:"深坑区",711135:"石碇区",711136:"瑞芳区",711137:"平溪区",711138:"双溪区",711139:"贡寮区",711140:"新店区",711141:"坪林区",711142:"乌来区",711143:"永和区",711144:"中和区",711145:"土城区",711146:"三峡区",711147:"树林区",711148:"莺歌区",711149:"三重区",711150:"新庄区",711151:"泰山区",711152:"林口区",711153:"芦洲区",711154:"五股区",711155:"八里区",711156:"淡水区",711157:"三芝区",711158:"石门区",711200:"宜兰县",711214:"宜兰市",711215:"头城镇",711216:"礁溪乡",711217:"壮围乡",711218:"员山乡",711219:"罗东镇",711220:"三星乡",711221:"大同乡",711222:"五结乡",711223:"冬山乡",711224:"苏澳镇",711225:"南澳乡",711226:"钓鱼台",711300:"新竹县",711314:"竹北市",711315:"湖口乡",711316:"新丰乡",711317:"新埔镇",711318:"关西镇",711319:"芎林乡",711320:"宝山乡",711321:"竹东镇",711322:"五峰乡",711323:"横山乡",711324:"尖石乡",711325:"北埔乡",711326:"峨眉乡",711400:"桃园县",711414:"中坜市",711415:"平镇市",711416:"龙潭乡",711417:"杨梅市",711418:"新屋乡",711419:"观音乡",711420:"桃园市",711421:"龟山乡",711422:"八德市",711423:"大溪镇",711424:"复兴乡",711425:"大园乡",711426:"芦竹乡",711500:"苗栗县",711519:"竹南镇",711520:"头份镇",711521:"三湾乡",711522:"南庄乡",711523:"狮潭乡",711524:"后龙镇",711525:"通霄镇",711526:"苑里镇",711527:"苗栗市",711528:"造桥乡",711529:"头屋乡",711530:"公馆乡",711531:"大湖乡",711532:"泰安乡",711533:"铜锣乡",711534:"三义乡",711535:"西湖乡",711536:"卓兰镇",711700:"彰化县",711727:"彰化市",711728:"芬园乡",711729:"花坛乡",711730:"秀水乡",711731:"鹿港镇",711732:"福兴乡",711733:"线西乡",711734:"和美镇",711735:"伸港乡",711736:"员林镇",711737:"社头乡",711738:"永靖乡",711739:"埔心乡",711740:"溪湖镇",711741:"大村乡",711742:"埔盐乡",711743:"田中镇",711744:"北斗镇",711745:"田尾乡",711746:"埤头乡",711747:"溪州乡",711748:"竹塘乡",711749:"二林镇",711750:"大城乡",711751:"芳苑乡",711752:"二水乡",711900:"嘉义县",711919:"番路乡",711920:"梅山乡",711921:"竹崎乡",711922:"阿里山乡",711923:"中埔乡",711924:"大埔乡",711925:"水上乡",711926:"鹿草乡",711927:"太保市",711928:"朴子市",711929:"东石乡",711930:"六脚乡",711931:"新港乡",711932:"民雄乡",711933:"大林镇",711934:"溪口乡",711935:"义竹乡",711936:"布袋镇",712100:"云林县",712121:"斗南镇",712122:"大埤乡",712123:"虎尾镇",712124:"土库镇",712125:"褒忠乡",712126:"东势乡",712127:"台西乡",712128:"仑背乡",712129:"麦寮乡",712130:"斗六市",712131:"林内乡",712132:"古坑乡",712133:"莿桐乡",712134:"西螺镇",712135:"二仑乡",712136:"北港镇",712137:"水林乡",712138:"口湖乡",712139:"四湖乡",712140:"元长乡",712400:"屏东县",712434:"屏东市",712435:"三地门乡",712436:"雾台乡",712437:"玛家乡",712438:"九如乡",712439:"里港乡",712440:"高树乡",712441:"盐埔乡",712442:"长治乡",712443:"麟洛乡",712444:"竹田乡",712445:"内埔乡",712446:"万丹乡",712447:"潮州镇",712448:"泰武乡",712449:"来义乡",712450:"万峦乡",712451:"崁顶乡",712452:"新埤乡",712453:"南州乡",712454:"林边乡",712455:"东港镇",712456:"琉球乡",712457:"佳冬乡",712458:"新园乡",712459:"枋寮乡",712460:"枋山乡",712461:"春日乡",712462:"狮子乡",712463:"车城乡",712464:"牡丹乡",712465:"恒春镇",712466:"满州乡",712500:"台东县",712517:"台东市",712518:"绿岛乡",712519:"兰屿乡",712520:"延平乡",712521:"卑南乡",712522:"鹿野乡",712523:"关山镇",712524:"海端乡",712525:"池上乡",712526:"东河乡",712527:"成功镇",712528:"长滨乡",712529:"金峰乡",712530:"大武乡",712531:"达仁乡",712532:"太麻里乡",712600:"花莲县",712615:"花莲市",712616:"新城乡",712617:"太鲁阁",712618:"秀林乡",712619:"吉安乡",712620:"寿丰乡",712621:"凤林镇",712622:"光复乡",712623:"丰滨乡",712624:"瑞穗乡",712625:"万荣乡",712626:"玉里镇",712627:"卓溪乡",712628:"富里乡",712700:"澎湖县",712707:"马公市",712708:"西屿乡",712709:"望安乡",712710:"七美乡",712711:"白沙乡",712712:"湖西乡",712800:"连江县",712805:"南竿乡",712806:"北竿乡",712807:"莒光乡",712808:"东引乡",810000:"香港特别行政区",810100:"香港岛",810101:"中西区",810102:"湾仔",810103:"东区",810104:"南区",810200:"九龙",810201:"九龙城区",810202:"油尖旺区",810203:"深水埗区",810204:"黄大仙区",810205:"观塘区",810300:"新界",810301:"北区",810302:"大埔区",810303:"沙田区",810304:"西贡区",810305:"元朗区",810306:"屯门区",810307:"荃湾区",810308:"葵青区",810309:"离岛区",820000:"澳门特别行政区",820100:"澳门半岛",820200:"离岛",990000:"海外",990100:"海外"};function t(e){for(var l,a={},t=0;t<e.length;t++)l=e[t],l&&l.id&&(a[l.id]=l);for(var n=[],u=0;u<e.length;u++)if(l=e[u],l)if(void 0!=l.pid||void 0!=l.parentId){var r=a[l.pid]||a[l.parentId];r&&(r.children||(r.children=[]),r.children.push(l))}else n.push(l);return n}var n=function(){var e=[];for(var l in a){var n="0000"===l.slice(2,6)?void 0:"00"==l.slice(4,6)?l.slice(0,2)+"0000":l.slice(0,4)+"00";e.push({id:l,pid:n,name:a[l]})}return t(e)}();e.exports=n},function(e,l,a){var t=a(18);e.exports={d4:function(){return this.natural(1,4)},d6:function(){return this.natural(1,6)},d8:function(){return this.natural(1,8)},d12:function(){return this.natural(1,12)},d20:function(){return this.natural(1,20)},d100:function(){return this.natural(1,100)},guid:function(){var e="abcdefABCDEF1234567890",l=this.string(e,8)+"-"+this.string(e,4)+"-"+this.string(e,4)+"-"+this.string(e,4)+"-"+this.string(e,12);return l},uuid:function(){return this.guid()},id:function(){var e,l=0,a=["7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"],n=["1","0","X","9","8","7","6","5","4","3","2"];e=this.pick(t).id+this.date("yyyyMMdd")+this.string("number",3);for(var u=0;u<e.length;u++)l+=e[u]*a[u];return e+=n[l%11],e},increment:function(){var e=0;return function(l){return e+=+l||1}}(),inc:function(e){return this.increment(e)}}},function(e,l,a){var t=a(21),n=a(22);e.exports={Parser:t,Handler:n}},function(e,l){function a(e){this.type=e,this.offset=a.offset(),this.text=a.text()}function t(e,l){a.call(this,"alternate"),this.left=e,this.right=l}function n(e){a.call(this,"match"),this.body=e.filter(Boolean)}function u(e,l){a.call(this,e),this.body=l}function r(e){u.call(this,"capture-group"),this.index=y[this.offset]||(y[this.offset]=m++),this.body=e}function o(e,l){a.call(this,"quantified"),this.body=e,this.quantifier=l}function i(e,l){a.call(this,"quantifier"),this.min=e,this.max=l,this.greedy=!0}function v(e,l){a.call(this,"charset"),this.invert=e,this.body=l}function b(e,l){a.call(this,"range"),this.start=e,this.end=l}function s(e){a.call(this,"literal"),this.body=e,this.escaped=this.body!=this.text}function c(e){a.call(this,"unicode"),this.code=e.toUpperCase()}function f(e){a.call(this,"hex"),this.code=e.toUpperCase()}function p(e){a.call(this,"octal"),this.code=e.toUpperCase()}function h(e){a.call(this,"back-reference"),this.code=e.toUpperCase()}function d(e){a.call(this,"control-character"),this.code=e.toUpperCase()}var g=function(){function e(e,l){function a(){this.constructor=e}a.prototype=l.prototype,e.prototype=new a}function l(e,l,a,t,n){function u(e,l){function a(e){function l(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(e){return"\\x0"+l(e)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(e){return"\\x"+l(e)}).replace(/[\u0180-\u0FFF]/g,function(e){return"\\u0"+l(e)}).replace(/[\u1080-\uFFFF]/g,function(e){return"\\u"+l(e)})}var t,n;switch(e.length){case 0:t="end of input";break;case 1:t=e[0];break;default:t=e.slice(0,-1).join(", ")+" or "+e[e.length-1]}return n=l?'"'+a(l)+'"':"end of input","Expected "+t+" but "+n+" found."}this.expected=e,this.found=l,this.offset=a,this.line=t,this.column=n,this.name="SyntaxError",this.message=u(e,l)}function g(e){function g(){return e.substring(Za,Ya)}function m(){return Za}function y(l){function a(l,a,t){var n,u;for(n=a;t>n;n++)u=e.charAt(n),"\n"===u?(l.seenCR||l.line++,l.column=1,l.seenCR=!1):"\r"===u||"\u2028"===u||"\u2029"===u?(l.line++,l.column=1,l.seenCR=!0):(l.column++,l.seenCR=!1)}return Qa!==l&&(Qa>l&&(Qa=0,et={line:1,column:1,seenCR:!1}),a(et,Qa,l),Qa=l),et}function _(e){lt>Ya||(Ya>lt&&(lt=Ya,at=[]),at.push(e))}function x(e){var l=0;for(e.sort();l<e.length;)e[l-1]===e[l]?e.splice(l,1):l++}function w(){var l,a,t,n,u;return l=Ya,a=k(),null!==a?(t=Ya,124===e.charCodeAt(Ya)?(n=Oe,Ya++):(n=null,0===tt&&_(Se)),null!==n?(u=w(),null!==u?(n=[n,u],t=n):(Ya=t,t=ke)):(Ya=t,t=ke),null===t&&(t=Ae),null!==t?(Za=l,a=Ce(a,t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke),l}function k(){var e,l,a,t,n;if(e=Ya,l=O(),null===l&&(l=Ae),null!==l)if(a=Ya,tt++,t=E(),tt--,null===t?a=Ae:(Ya=a,a=ke),null!==a){for(t=[],n=C(),null===n&&(n=A());null!==n;)t.push(n),n=C(),null===n&&(n=A());null!==t?(n=S(),null===n&&(n=Ae),null!==n?(Za=e,l=Ee(l,t,n),null===l?(Ya=e,e=l):e=l):(Ya=e,e=ke)):(Ya=e,e=ke)}else Ya=e,e=ke;else Ya=e,e=ke;return e}function A(){var e;return e=B(),null===e&&(e=U(),null===e&&(e=W())),e}function O(){var l,a;return l=Ya,94===e.charCodeAt(Ya)?(a=$e,Ya++):(a=null,0===tt&&_(je)),null!==a&&(Za=l,a=Te()),null===a?(Ya=l,l=a):l=a,l}function S(){var l,a;return l=Ya,36===e.charCodeAt(Ya)?(a=Pe,Ya++):(a=null,0===tt&&_(Re)),null!==a&&(Za=l,a=De()),null===a?(Ya=l,l=a):l=a,l}function C(){var e,l,a;return e=Ya,l=A(),null!==l?(a=E(),null!==a?(Za=e,l=Ie(l,a),null===l?(Ya=e,e=l):e=l):(Ya=e,e=ke)):(Ya=e,e=ke),e}function E(){var e,l,a;return tt++,e=Ya,l=$(),null!==l?(a=M(),null===a&&(a=Ae),null!==a?(Za=e,l=Ne(l,a),null===l?(Ya=e,e=l):e=l):(Ya=e,e=ke)):(Ya=e,e=ke),tt--,null===e&&(l=null,0===tt&&_(Me)),e}function $(){var e;return e=j(),null===e&&(e=T(),null===e&&(e=P(),null===e&&(e=R(),null===e&&(e=D(),null===e&&(e=I()))))),e}function j(){var l,a,t,n,u,r;return l=Ya,123===e.charCodeAt(Ya)?(a=Be,Ya++):(a=null,0===tt&&_(Le)),null!==a?(t=N(),null!==t?(44===e.charCodeAt(Ya)?(n=qe,Ya++):(n=null,0===tt&&_(Fe)),null!==n?(u=N(),null!==u?(125===e.charCodeAt(Ya)?(r=He,Ya++):(r=null,0===tt&&_(Ue)),null!==r?(Za=l,a=Ve(t,u),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke)):(Ya=l,l=ke)):(Ya=l,l=ke)):(Ya=l,l=ke),l}function T(){var l,a,t,n;return l=Ya,123===e.charCodeAt(Ya)?(a=Be,Ya++):(a=null,0===tt&&_(Le)),null!==a?(t=N(),null!==t?(e.substr(Ya,2)===ze?(n=ze,Ya+=2):(n=null,0===tt&&_(Ge)),null!==n?(Za=l,a=Je(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke)):(Ya=l,l=ke),l}function P(){var l,a,t,n;return l=Ya,123===e.charCodeAt(Ya)?(a=Be,Ya++):(a=null,0===tt&&_(Le)),null!==a?(t=N(),null!==t?(125===e.charCodeAt(Ya)?(n=He,Ya++):(n=null,0===tt&&_(Ue)),null!==n?(Za=l,a=We(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke)):(Ya=l,l=ke),l}function R(){var l,a;return l=Ya,43===e.charCodeAt(Ya)?(a=Ke,Ya++):(a=null,0===tt&&_(Xe)),null!==a&&(Za=l,a=Ye()),null===a?(Ya=l,l=a):l=a,l}function D(){var l,a;return l=Ya,42===e.charCodeAt(Ya)?(a=Ze,Ya++):(a=null,0===tt&&_(Qe)),null!==a&&(Za=l,a=el()),null===a?(Ya=l,l=a):l=a,l}function I(){var l,a;return l=Ya,63===e.charCodeAt(Ya)?(a=ll,Ya++):(a=null,0===tt&&_(al)),null!==a&&(Za=l,a=tl()),null===a?(Ya=l,l=a):l=a,l}function M(){var l;return 63===e.charCodeAt(Ya)?(l=ll,Ya++):(l=null,0===tt&&_(al)),l}function N(){var l,a,t;if(l=Ya,a=[],nl.test(e.charAt(Ya))?(t=e.charAt(Ya),Ya++):(t=null,0===tt&&_(ul)),null!==t)for(;null!==t;)a.push(t),nl.test(e.charAt(Ya))?(t=e.charAt(Ya),Ya++):(t=null,0===tt&&_(ul));else a=ke;return null!==a&&(Za=l,a=rl(a)),null===a?(Ya=l,l=a):l=a,l}function B(){var l,a,t,n;return l=Ya,40===e.charCodeAt(Ya)?(a=ol,Ya++):(a=null,0===tt&&_(il)),null!==a?(t=F(),null===t&&(t=H(),null===t&&(t=q(),null===t&&(t=L()))),null!==t?(41===e.charCodeAt(Ya)?(n=vl,Ya++):(n=null,0===tt&&_(bl)),null!==n?(Za=l,a=sl(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke)):(Ya=l,l=ke),l}function L(){var e,l;return e=Ya,l=w(),null!==l&&(Za=e,l=cl(l)),null===l?(Ya=e,e=l):e=l,e}function q(){var l,a,t;return l=Ya,e.substr(Ya,2)===fl?(a=fl,Ya+=2):(a=null,0===tt&&_(pl)),null!==a?(t=w(),null!==t?(Za=l,a=hl(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke),l}function F(){var l,a,t;return l=Ya,e.substr(Ya,2)===dl?(a=dl,Ya+=2):(a=null,0===tt&&_(gl)),null!==a?(t=w(),null!==t?(Za=l,a=ml(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke),l}function H(){var l,a,t;return l=Ya,e.substr(Ya,2)===yl?(a=yl,Ya+=2):(a=null,0===tt&&_(_l)),null!==a?(t=w(),null!==t?(Za=l,a=xl(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke),l}function U(){var l,a,t,n,u;if(tt++,l=Ya,91===e.charCodeAt(Ya)?(a=kl,Ya++):(a=null,0===tt&&_(Al)),null!==a)if(94===e.charCodeAt(Ya)?(t=$e,Ya++):(t=null,0===tt&&_(je)),null===t&&(t=Ae),null!==t){for(n=[],u=V(),null===u&&(u=z());null!==u;)n.push(u),u=V(),null===u&&(u=z());null!==n?(93===e.charCodeAt(Ya)?(u=Ol,Ya++):(u=null,0===tt&&_(Sl)),null!==u?(Za=l,a=Cl(t,n),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke)}else Ya=l,l=ke;else Ya=l,l=ke;return tt--,null===l&&(a=null,0===tt&&_(wl)),l}function V(){var l,a,t,n;return tt++,l=Ya,a=z(),null!==a?(45===e.charCodeAt(Ya)?(t=$l,Ya++):(t=null,0===tt&&_(jl)),null!==t?(n=z(),null!==n?(Za=l,a=Tl(a,n),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke)):(Ya=l,l=ke),tt--,null===l&&(a=null,0===tt&&_(El)),l}function z(){var e;return tt++,e=J(),null===e&&(e=G()),tt--,null===e&&(null,0===tt&&_(Pl)),e}function G(){var l,a;return l=Ya,Rl.test(e.charAt(Ya))?(a=e.charAt(Ya),Ya++):(a=null,0===tt&&_(Dl)),null!==a&&(Za=l,a=Il(a)),null===a?(Ya=l,l=a):l=a,l}function J(){var e;return e=Z(),null===e&&(e=ce(),null===e&&(e=le(),null===e&&(e=ae(),null===e&&(e=te(),null===e&&(e=ne(),null===e&&(e=ue(),null===e&&(e=re(),null===e&&(e=oe(),null===e&&(e=ie(),null===e&&(e=ve(),null===e&&(e=be(),null===e&&(e=se(),null===e&&(e=pe(),null===e&&(e=he(),null===e&&(e=de(),null===e&&(e=ge(),null===e&&(e=me()))))))))))))))))),e}function W(){var e;return e=K(),null===e&&(e=Y(),null===e&&(e=X())),e}function K(){var l,a;return l=Ya,46===e.charCodeAt(Ya)?(a=Ml,Ya++):(a=null,0===tt&&_(Nl)),null!==a&&(Za=l,a=Bl()),null===a?(Ya=l,l=a):l=a,l}function X(){var l,a;return tt++,l=Ya,ql.test(e.charAt(Ya))?(a=e.charAt(Ya),Ya++):(a=null,0===tt&&_(Fl)),null!==a&&(Za=l,a=Il(a)),null===a?(Ya=l,l=a):l=a,tt--,null===l&&(a=null,0===tt&&_(Ll)),l}function Y(){var e;return e=Q(),null===e&&(e=ee(),null===e&&(e=ce(),null===e&&(e=le(),null===e&&(e=ae(),null===e&&(e=te(),null===e&&(e=ne(),null===e&&(e=ue(),null===e&&(e=re(),null===e&&(e=oe(),null===e&&(e=ie(),null===e&&(e=ve(),null===e&&(e=be(),null===e&&(e=se(),null===e&&(e=fe(),null===e&&(e=pe(),null===e&&(e=he(),null===e&&(e=de(),null===e&&(e=ge(),null===e&&(e=me()))))))))))))))))))),e}function Z(){var l,a;return l=Ya,e.substr(Ya,2)===Hl?(a=Hl,Ya+=2):(a=null,0===tt&&_(Ul)),null!==a&&(Za=l,a=Vl()),null===a?(Ya=l,l=a):l=a,l}function Q(){var l,a;return l=Ya,e.substr(Ya,2)===Hl?(a=Hl,Ya+=2):(a=null,0===tt&&_(Ul)),null!==a&&(Za=l,a=zl()),null===a?(Ya=l,l=a):l=a,l}function ee(){var l,a;return l=Ya,e.substr(Ya,2)===Gl?(a=Gl,Ya+=2):(a=null,0===tt&&_(Jl)),null!==a&&(Za=l,a=Wl()),null===a?(Ya=l,l=a):l=a,l}function le(){var l,a;return l=Ya,e.substr(Ya,2)===Kl?(a=Kl,Ya+=2):(a=null,0===tt&&_(Xl)),null!==a&&(Za=l,a=Yl()),null===a?(Ya=l,l=a):l=a,l}function ae(){var l,a;return l=Ya,e.substr(Ya,2)===Zl?(a=Zl,Ya+=2):(a=null,0===tt&&_(Ql)),null!==a&&(Za=l,a=ea()),null===a?(Ya=l,l=a):l=a,l}function te(){var l,a;return l=Ya,e.substr(Ya,2)===la?(a=la,Ya+=2):(a=null,0===tt&&_(aa)),null!==a&&(Za=l,a=ta()),null===a?(Ya=l,l=a):l=a,l}function ne(){var l,a;return l=Ya,e.substr(Ya,2)===na?(a=na,Ya+=2):(a=null,0===tt&&_(ua)),null!==a&&(Za=l,a=ra()),null===a?(Ya=l,l=a):l=a,l}function ue(){var l,a;return l=Ya,e.substr(Ya,2)===oa?(a=oa,Ya+=2):(a=null,0===tt&&_(ia)),null!==a&&(Za=l,a=va()),null===a?(Ya=l,l=a):l=a,l}function re(){var l,a;return l=Ya,e.substr(Ya,2)===ba?(a=ba,Ya+=2):(a=null,0===tt&&_(sa)),null!==a&&(Za=l,a=ca()),null===a?(Ya=l,l=a):l=a,l}function oe(){var l,a;return l=Ya,e.substr(Ya,2)===fa?(a=fa,Ya+=2):(a=null,0===tt&&_(pa)),null!==a&&(Za=l,a=ha()),null===a?(Ya=l,l=a):l=a,l}function ie(){var l,a;return l=Ya,e.substr(Ya,2)===da?(a=da,Ya+=2):(a=null,0===tt&&_(ga)),null!==a&&(Za=l,a=ma()),null===a?(Ya=l,l=a):l=a,l}function ve(){var l,a;return l=Ya,e.substr(Ya,2)===ya?(a=ya,Ya+=2):(a=null,0===tt&&_(_a)),null!==a&&(Za=l,a=xa()),null===a?(Ya=l,l=a):l=a,l}function be(){var l,a;return l=Ya,e.substr(Ya,2)===wa?(a=wa,Ya+=2):(a=null,0===tt&&_(ka)),null!==a&&(Za=l,a=Aa()),null===a?(Ya=l,l=a):l=a,l}function se(){var l,a;return l=Ya,e.substr(Ya,2)===Oa?(a=Oa,Ya+=2):(a=null,0===tt&&_(Sa)),null!==a&&(Za=l,a=Ca()),null===a?(Ya=l,l=a):l=a,l}function ce(){var l,a,t;return l=Ya,e.substr(Ya,2)===Ea?(a=Ea,Ya+=2):(a=null,0===tt&&_($a)),null!==a?(e.length>Ya?(t=e.charAt(Ya),Ya++):(t=null,0===tt&&_(ja)),null!==t?(Za=l,a=Ta(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke),l}function fe(){var l,a,t;return l=Ya,92===e.charCodeAt(Ya)?(a=Pa,Ya++):(a=null,0===tt&&_(Ra)),null!==a?(Da.test(e.charAt(Ya))?(t=e.charAt(Ya),Ya++):(t=null,0===tt&&_(Ia)),null!==t?(Za=l,a=Ma(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke),l}function pe(){var l,a,t,n;if(l=Ya,e.substr(Ya,2)===Na?(a=Na,Ya+=2):(a=null,0===tt&&_(Ba)),null!==a){if(t=[],La.test(e.charAt(Ya))?(n=e.charAt(Ya),Ya++):(n=null,0===tt&&_(qa)),null!==n)for(;null!==n;)t.push(n),La.test(e.charAt(Ya))?(n=e.charAt(Ya),Ya++):(n=null,0===tt&&_(qa));else t=ke;null!==t?(Za=l,a=Fa(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)}else Ya=l,l=ke;return l}function he(){var l,a,t,n;if(l=Ya,e.substr(Ya,2)===Ha?(a=Ha,Ya+=2):(a=null,0===tt&&_(Ua)),null!==a){if(t=[],Va.test(e.charAt(Ya))?(n=e.charAt(Ya),Ya++):(n=null,0===tt&&_(za)),null!==n)for(;null!==n;)t.push(n),Va.test(e.charAt(Ya))?(n=e.charAt(Ya),Ya++):(n=null,0===tt&&_(za));else t=ke;null!==t?(Za=l,a=Ga(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)}else Ya=l,l=ke;return l}function de(){var l,a,t,n;if(l=Ya,e.substr(Ya,2)===Ja?(a=Ja,Ya+=2):(a=null,0===tt&&_(Wa)),null!==a){if(t=[],Va.test(e.charAt(Ya))?(n=e.charAt(Ya),Ya++):(n=null,0===tt&&_(za)),null!==n)for(;null!==n;)t.push(n),Va.test(e.charAt(Ya))?(n=e.charAt(Ya),Ya++):(n=null,0===tt&&_(za));else t=ke;null!==t?(Za=l,a=Ka(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)}else Ya=l,l=ke;return l}function ge(){var l,a;return l=Ya,e.substr(Ya,2)===Na?(a=Na,Ya+=2):(a=null,0===tt&&_(Ba)),null!==a&&(Za=l,a=Xa()),null===a?(Ya=l,l=a):l=a,l}function me(){var l,a,t;return l=Ya,92===e.charCodeAt(Ya)?(a=Pa,Ya++):(a=null,0===tt&&_(Ra)),null!==a?(e.length>Ya?(t=e.charAt(Ya),Ya++):(t=null,0===tt&&_(ja)),null!==t?(Za=l,a=Il(t),null===a?(Ya=l,l=a):l=a):(Ya=l,l=ke)):(Ya=l,l=ke),l}var ye,_e=arguments.length>1?arguments[1]:{},xe={regexp:w},we=w,ke=null,Ae="",Oe="|",Se='"|"',Ce=function(e,l){return l?new t(e,l[1]):e},Ee=function(e,l,a){return new n([e].concat(l).concat([a]))},$e="^",je='"^"',Te=function(){return new a("start")},Pe="$",Re='"$"',De=function(){return new a("end")},Ie=function(e,l){return new o(e,l)},Me="Quantifier",Ne=function(e,l){return l&&(e.greedy=!1),e},Be="{",Le='"{"',qe=",",Fe='","',He="}",Ue='"}"',Ve=function(e,l){return new i(e,l)},ze=",}",Ge='",}"',Je=function(e){return new i(e,1/0)},We=function(e){return new i(e,e)},Ke="+",Xe='"+"',Ye=function(){return new i(1,1/0)},Ze="*",Qe='"*"',el=function(){return new i(0,1/0)},ll="?",al='"?"',tl=function(){return new i(0,1)},nl=/^[0-9]/,ul="[0-9]",rl=function(e){return+e.join("")},ol="(",il='"("',vl=")",bl='")"',sl=function(e){return e},cl=function(e){return new r(e)},fl="?:",pl='"?:"',hl=function(e){return new u("non-capture-group",e)},dl="?=",gl='"?="',ml=function(e){return new u("positive-lookahead",e)},yl="?!",_l='"?!"',xl=function(e){return new u("negative-lookahead",e)},wl="CharacterSet",kl="[",Al='"["',Ol="]",Sl='"]"',Cl=function(e,l){return new v(!!e,l)},El="CharacterRange",$l="-",jl='"-"',Tl=function(e,l){return new b(e,l)},Pl="Character",Rl=/^[^\\\]]/,Dl="[^\\\\\\]]",Il=function(e){return new s(e)},Ml=".",Nl='"."',Bl=function(){return new a("any-character")},Ll="Literal",ql=/^[^|\\\/.[()?+*$\^]/,Fl="[^|\\\\\\/.[()?+*$\\^]",Hl="\\b",Ul='"\\\\b"',Vl=function(){return new a("backspace")},zl=function(){return new a("word-boundary")},Gl="\\B",Jl='"\\\\B"',Wl=function(){return new a("non-word-boundary")},Kl="\\d",Xl='"\\\\d"',Yl=function(){return new a("digit")},Zl="\\D",Ql='"\\\\D"',ea=function(){return new a("non-digit")},la="\\f",aa='"\\\\f"',ta=function(){return new a("form-feed")},na="\\n",ua='"\\\\n"',ra=function(){return new a("line-feed")},oa="\\r",ia='"\\\\r"',va=function(){return new a("carriage-return")},ba="\\s",sa='"\\\\s"',ca=function(){return new a("white-space")},fa="\\S",pa='"\\\\S"',ha=function(){return new a("non-white-space")},da="\\t",ga='"\\\\t"',ma=function(){return new a("tab")},ya="\\v",_a='"\\\\v"',xa=function(){return new a("vertical-tab")},wa="\\w",ka='"\\\\w"',Aa=function(){return new a("word")},Oa="\\W",Sa='"\\\\W"',Ca=function(){return new a("non-word")},Ea="\\c",$a='"\\\\c"',ja="any character",Ta=function(e){return new d(e)},Pa="\\",Ra='"\\\\"',Da=/^[1-9]/,Ia="[1-9]",Ma=function(e){return new h(e)},Na="\\0",Ba='"\\\\0"',La=/^[0-7]/,qa="[0-7]",Fa=function(e){return new p(e.join(""))},Ha="\\x",Ua='"\\\\x"',Va=/^[0-9a-fA-F]/,za="[0-9a-fA-F]",Ga=function(e){return new f(e.join(""))},Ja="\\u",Wa='"\\\\u"',Ka=function(e){return new c(e.join(""))},Xa=function(){return new a("null-character")},Ya=0,Za=0,Qa=0,et={line:1,column:1,seenCR:!1},lt=0,at=[],tt=0;if("startRule"in _e){if(!(_e.startRule in xe))throw new Error("Can't start parsing from rule \""+_e.startRule+'".');we=xe[_e.startRule]}if(a.offset=m,a.text=g,ye=we(),null!==ye&&Ya===e.length)return ye;throw x(at),Za=Math.max(Ya,lt),new l(at,Za<e.length?e.charAt(Za):null,Za,y(Za).line,y(Za).column)}return e(l,Error),{SyntaxError:l,parse:g}}(),m=1,y={};e.exports=g},function(e,l,a){var t=a(3),n=a(5),u={extend:t.extend},r=f(97,122),o=f(65,90),i=f(48,57),v=f(32,47)+f(58,64)+f(91,96)+f(123,126),b=f(32,126),s=" \f\n\r\t\v \u2028\u2029",c={"\\w":r+o+i+"_","\\W":v.replace("_",""),"\\s":s,"\\S":function(){for(var e=b,l=0;l<s.length;l++)e=e.replace(s[l],"");return e}(),"\\d":i,"\\D":r+o+v};function f(e,l){for(var a="",t=e;t<=l;t++)a+=String.fromCharCode(t);return a}u.gen=function(e,l,a){return a=a||{guid:1},u[e.type]?u[e.type](e,l,a):u.token(e,l,a)},u.extend({token:function(e,l,a){switch(e.type){case"start":case"end":return"";case"any-character":return n.character();case"backspace":return"";case"word-boundary":return"";case"non-word-boundary":break;case"digit":return n.pick(i.split(""));case"non-digit":return n.pick((r+o+v).split(""));case"form-feed":break;case"line-feed":return e.body||e.text;case"carriage-return":break;case"white-space":return n.pick(s.split(""));case"non-white-space":return n.pick((r+o+i).split(""));case"tab":break;case"vertical-tab":break;case"word":return n.pick((r+o+i).split(""));case"non-word":return n.pick(v.replace("_","").split(""));case"null-character":break}return e.body||e.text},alternate:function(e,l,a){return this.gen(n.boolean()?e.left:e.right,l,a)},match:function(e,l,a){l="";for(var t=0;t<e.body.length;t++)l+=this.gen(e.body[t],l,a);return l},"capture-group":function(e,l,a){return l=this.gen(e.body,l,a),a[a.guid++]=l,l},"non-capture-group":function(e,l,a){return this.gen(e.body,l,a)},"positive-lookahead":function(e,l,a){return this.gen(e.body,l,a)},"negative-lookahead":function(e,l,a){return""},quantified:function(e,l,a){l="";for(var t=this.quantifier(e.quantifier),n=0;n<t;n++)l+=this.gen(e.body,l,a);return l},quantifier:function(e,l,a){var t=Math.max(e.min,0),u=isFinite(e.max)?e.max:t+n.integer(3,7);return n.integer(t,u)},charset:function(e,l,a){if(e.invert)return this["invert-charset"](e,l,a);var t=n.pick(e.body);return this.gen(t,l,a)},"invert-charset":function(e,l,a){for(var t,u=b,r=0;r<e.body.length;r++)switch(t=e.body[r],t.type){case"literal":u=u.replace(t.body,"");break;case"range":for(var o=this.gen(t.start,l,a).charCodeAt(),i=this.gen(t.end,l,a).charCodeAt(),v=o;v<=i;v++)u=u.replace(String.fromCharCode(v),"");default:var s=c[t.text];if(s)for(var f=0;f<=s.length;f++)u=u.replace(s[f],"")}return n.pick(u.split(""))},range:function(e,l,a){var t=this.gen(e.start,l,a).charCodeAt(),u=this.gen(e.end,l,a).charCodeAt();return String.fromCharCode(n.integer(t,u))},literal:function(e,l,a){return e.escaped?e.body:e.text},unicode:function(e,l,a){return String.fromCharCode(parseInt(e.code,16))},hex:function(e,l,a){return String.fromCharCode(parseInt(e.code,16))},octal:function(e,l,a){return String.fromCharCode(parseInt(e.code,8))},"back-reference":function(e,l,a){return a[e.code]||""},CONTROL_CHARACTER_MAP:function(){for(var e="@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \\ ] ^ _".split(" "),l="\0        \b \t \n \v \f \r                  ".split(" "),a={},t=0;t<e.length;t++)a[e[t]]=l[t];return a}(),"control-character":function(e,l,a){return this.CONTROL_CHARACTER_MAP[e.code]}}),e.exports=u},function(e,l,a){e.exports=a(24)},function(e,l,a){var t=a(2),n=a(3),u=a(4);function r(e,l,a){a=a||[];var o={name:"string"===typeof l?l.replace(t.RE_KEY,"$1"):l,template:e,type:n.type(e),rule:u.parse(l)};switch(o.path=a.slice(0),o.path.push(void 0===l?"ROOT":o.name),o.type){case"array":o.items=[],n.each(e,function(e,l){o.items.push(r(e,l,o.path))});break;case"object":o.properties=[],n.each(e,function(e,l){o.properties.push(r(e,l,o.path))});break}return o}e.exports=r},function(e,l,a){e.exports=a(26)},function(e,l,a){var t=a(2),n=a(3),u=a(23);function r(e,l){for(var a=u(e),t=o.diff(a,l),n=0;n<t.length;n++);return t}var o={diff:function(e,l,a){var t=[];return this.name(e,l,a,t)&&this.type(e,l,a,t)&&(this.value(e,l,a,t),this.properties(e,l,a,t),this.items(e,l,a,t)),t},name:function(e,l,a,t){var n=t.length;return i.equal("name",e.path,a+"",e.name+"",t),t.length===n},type:function(e,l,a,u){var r=u.length;switch(e.type){case"string":if(e.template.match(t.RE_PLACEHOLDER))return!0;break;case"array":if(e.rule.parameters){if(void 0!==e.rule.min&&void 0===e.rule.max&&1===e.rule.count)return!0;if(e.rule.parameters[2])return!0}break;case"function":return!0}return i.equal("type",e.path,n.type(l),e.type,u),u.length===r},value:function(e,l,a,n){var u,r=n.length,o=e.rule,v=e.type;if("object"===v||"array"===v||"function"===v)return!0;if(!o.parameters){switch(v){case"regexp":return i.match("value",e.path,l,e.template,n),n.length===r;case"string":if(e.template.match(t.RE_PLACEHOLDER))return n.length===r;break}return i.equal("value",e.path,l,e.template,n),n.length===r}switch(v){case"number":var b=(l+"").split(".");b[0]=+b[0],void 0!==o.min&&void 0!==o.max&&(i.greaterThanOrEqualTo("value",e.path,b[0],Math.min(o.min,o.max),n),i.lessThanOrEqualTo("value",e.path,b[0],Math.max(o.min,o.max),n)),void 0!==o.min&&void 0===o.max&&i.equal("value",e.path,b[0],o.min,n,"[value] "+a),o.decimal&&(void 0!==o.dmin&&void 0!==o.dmax&&(i.greaterThanOrEqualTo("value",e.path,b[1].length,o.dmin,n),i.lessThanOrEqualTo("value",e.path,b[1].length,o.dmax,n)),void 0!==o.dmin&&void 0===o.dmax&&i.equal("value",e.path,b[1].length,o.dmin,n));break;case"boolean":break;case"string":u=l.match(new RegExp(e.template,"g")),u=u?u.length:0,void 0!==o.min&&void 0!==o.max&&(i.greaterThanOrEqualTo("repeat count",e.path,u,o.min,n),i.lessThanOrEqualTo("repeat count",e.path,u,o.max,n)),void 0!==o.min&&void 0===o.max&&i.equal("repeat count",e.path,u,o.min,n);break;case"regexp":u=l.match(new RegExp(e.template.source.replace(/^\^|\$$/g,""),"g")),u=u?u.length:0,void 0!==o.min&&void 0!==o.max&&(i.greaterThanOrEqualTo("repeat count",e.path,u,o.min,n),i.lessThanOrEqualTo("repeat count",e.path,u,o.max,n)),void 0!==o.min&&void 0===o.max&&i.equal("repeat count",e.path,u,o.min,n);break}return n.length===r},properties:function(e,l,a,t){var u=t.length,r=e.rule,o=n.keys(l);if(e.properties){if(e.rule.parameters?(void 0!==r.min&&void 0!==r.max&&(i.greaterThanOrEqualTo("properties length",e.path,o.length,Math.min(r.min,r.max),t),i.lessThanOrEqualTo("properties length",e.path,o.length,Math.max(r.min,r.max),t)),void 0!==r.min&&void 0===r.max&&1!==r.count&&i.equal("properties length",e.path,o.length,r.min,t)):i.equal("properties length",e.path,o.length,e.properties.length,t),t.length!==u)return!1;for(var v=0;v<o.length;v++)t.push.apply(t,this.diff(function(){var l;return n.each(e.properties,function(e){e.name===o[v]&&(l=e)}),l||e.properties[v]}(),l[o[v]],o[v]));return t.length===u}},items:function(e,l,a,t){var n=t.length;if(e.items){var u=e.rule;if(e.rule.parameters){if(void 0!==u.min&&void 0!==u.max&&(i.greaterThanOrEqualTo("items",e.path,l.length,Math.min(u.min,u.max)*e.items.length,t,"[{utype}] array is too short: {path} must have at least {expected} elements but instance has {actual} elements"),i.lessThanOrEqualTo("items",e.path,l.length,Math.max(u.min,u.max)*e.items.length,t,"[{utype}] array is too long: {path} must have at most {expected} elements but instance has {actual} elements")),void 0!==u.min&&void 0===u.max){if(1===u.count)return t.length===n;i.equal("items length",e.path,l.length,u.min*e.items.length,t)}if(u.parameters[2])return t.length===n}else i.equal("items length",e.path,l.length,e.items.length,t);if(t.length!==n)return!1;for(var r=0;r<l.length;r++)t.push.apply(t,this.diff(e.items[r%e.items.length],l[r],r%e.items.length));return t.length===n}}},i={message:function(e){return(e.message||"[{utype}] Expect {path}'{ltype} {action} {expected}, but is {actual}").replace("{utype}",e.type.toUpperCase()).replace("{ltype}",e.type.toLowerCase()).replace("{path}",n.isArray(e.path)&&e.path.join(".")||e.path).replace("{action}",e.action).replace("{expected}",e.expected).replace("{actual}",e.actual)},equal:function(e,l,a,t,n,u){if(a===t)return!0;switch(e){case"type":if("regexp"===t&&"string"===a)return!0;break}var r={path:l,type:e,actual:a,expected:t,action:"is equal to",message:u};return r.message=i.message(r),n.push(r),!1},match:function(e,l,a,t,n,u){if(t.test(a))return!0;var r={path:l,type:e,actual:a,expected:t,action:"matches",message:u};return r.message=i.message(r),n.push(r),!1},notEqual:function(e,l,a,t,n,u){if(a!==t)return!0;var r={path:l,type:e,actual:a,expected:t,action:"is not equal to",message:u};return r.message=i.message(r),n.push(r),!1},greaterThan:function(e,l,a,t,n,u){if(a>t)return!0;var r={path:l,type:e,actual:a,expected:t,action:"is greater than",message:u};return r.message=i.message(r),n.push(r),!1},lessThan:function(e,l,a,t,n,u){if(a<t)return!0;var r={path:l,type:e,actual:a,expected:t,action:"is less to",message:u};return r.message=i.message(r),n.push(r),!1},greaterThanOrEqualTo:function(e,l,a,t,n,u){if(a>=t)return!0;var r={path:l,type:e,actual:a,expected:t,action:"is greater than or equal to",message:u};return r.message=i.message(r),n.push(r),!1},lessThanOrEqualTo:function(e,l,a,t,n,u){if(a<=t)return!0;var r={path:l,type:e,actual:a,expected:t,action:"is less than or equal to",message:u};return r.message=i.message(r),n.push(r),!1}};r.Diff=o,r.Assert=i,e.exports=r},function(e,l,a){e.exports=a(28)},function(e,l,a){var t=a(3);window._XMLHttpRequest=window.XMLHttpRequest,window._ActiveXObject=window.ActiveXObject;try{new window.Event("custom")}catch(f){window.Event=function(e,l,a,t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,l,a,t),n}}var n={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},u="readystatechange loadstart progress abort error load timeout loadend".split(" "),r="timeout withCredentials".split(" "),o="readyState responseURL status statusText responseType response responseText responseXML".split(" "),i={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",300:"Multiple Choice",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported"};function v(){this.custom={events:{},requestHeaders:{},responseHeaders:{}}}function b(){var e=function(){var e=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,l=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,a=location.href,t=l.exec(a.toLowerCase())||[];return e.test(t[1])}();return window.ActiveXObject?!e&&l()||a():l();function l(){try{return new window._XMLHttpRequest}catch(e){}}function a(){try{return new window._ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}}function s(e){for(var l in v.Mock._mocked){var a=v.Mock._mocked[l];if((!a.rurl||n(a.rurl,e.url))&&(!a.rtype||n(a.rtype,e.type.toLowerCase())))return a}function n(e,l){return"string"===t.type(e)?e===l:"regexp"===t.type(e)?e.test(l):void 0}}function c(e,l){return t.isFunction(e.template)?e.template(l):v.Mock.mock(e.template)}v._settings={timeout:"10-100"},v.setup=function(e){return t.extend(v._settings,e),v._settings},t.extend(v,n),t.extend(v.prototype,n),v.prototype.mock=!0,v.prototype.match=!1,t.extend(v.prototype,{open:function(e,l,a,n,i){var c=this;t.extend(this.custom,{method:e,url:l,async:"boolean"!==typeof a||a,username:n,password:i,options:{url:l,type:e}}),this.custom.timeout=function(e){if("number"===typeof e)return e;if("string"===typeof e&&!~e.indexOf("-"))return parseInt(e,10);if("string"===typeof e&&~e.indexOf("-")){var l=e.split("-"),a=parseInt(l[0],10),t=parseInt(l[1],10);return Math.round(Math.random()*(t-a))+a}}(v._settings.timeout);var f=s(this.custom.options);function p(e){for(var l=0;l<o.length;l++)try{c[o[l]]=h[o[l]]}catch(a){}c.dispatchEvent(new Event(e.type))}if(f)this.match=!0,this.custom.template=f,this.readyState=v.OPENED,this.dispatchEvent(new Event("readystatechange"));else{var h=b();this.custom.xhr=h;for(var d=0;d<u.length;d++)h.addEventListener(u[d],p);n?h.open(e,l,a,n,i):h.open(e,l,a);for(var g=0;g<r.length;g++)try{h[r[g]]=c[r[g]]}catch(m){}}},setRequestHeader:function(e,l){if(this.match){var a=this.custom.requestHeaders;a[e]?a[e]+=","+l:a[e]=l}else this.custom.xhr.setRequestHeader(e,l)},timeout:0,withCredentials:!1,upload:{},send:function(e){var l=this;function a(){l.readyState=v.HEADERS_RECEIVED,l.dispatchEvent(new Event("readystatechange")),l.readyState=v.LOADING,l.dispatchEvent(new Event("readystatechange")),l.status=200,l.statusText=i[200],l.response=l.responseText=JSON.stringify(c(l.custom.template,l.custom.options),null,4),l.readyState=v.DONE,l.dispatchEvent(new Event("readystatechange")),l.dispatchEvent(new Event("load")),l.dispatchEvent(new Event("loadend"))}this.custom.options.body=e,this.match?(this.setRequestHeader("X-Requested-With","MockXMLHttpRequest"),this.dispatchEvent(new Event("loadstart")),this.custom.async?setTimeout(a,this.custom.timeout):a()):this.custom.xhr.send(e)},abort:function(){this.match?(this.readyState=v.UNSENT,this.dispatchEvent(new Event("abort",!1,!1,this)),this.dispatchEvent(new Event("error",!1,!1,this))):this.custom.xhr.abort()}}),t.extend(v.prototype,{responseURL:"",status:v.UNSENT,statusText:"",getResponseHeader:function(e){return this.match?this.custom.responseHeaders[e.toLowerCase()]:this.custom.xhr.getResponseHeader(e)},getAllResponseHeaders:function(){if(!this.match)return this.custom.xhr.getAllResponseHeaders();var e=this.custom.responseHeaders,l="";for(var a in e)e.hasOwnProperty(a)&&(l+=a+": "+e[a]+"\r\n");return l},overrideMimeType:function(){},responseType:"",response:null,responseText:"",responseXML:null}),t.extend(v.prototype,{addEventListener:function(e,l){var a=this.custom.events;a[e]||(a[e]=[]),a[e].push(l)},removeEventListener:function(e,l){for(var a=this.custom.events[e]||[],t=0;t<a.length;t++)a[t]===l&&a.splice(t--,1)},dispatchEvent:function(e){for(var l=this.custom.events[e.type]||[],a=0;a<l.length;a++)l[a].call(this,e);var t="on"+e.type;this[t]&&this[t](e)}}),e.exports=v}])})},"6e42":function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.createApp=pl,l.createComponent=Al,l.createPage=kl,l.default=void 0;var t=n(a("66fd"));function n(e){return e&&e.__esModule?e:{default:e}}function u(e,l){return i(e)||o(e,l)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(e,l){var a=[],t=!0,n=!1,u=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0)if(a.push(r.value),l&&a.length===l)break}catch(i){n=!0,u=i}finally{try{t||null==o["return"]||o["return"]()}finally{if(n)throw u}}return a}function i(e){if(Array.isArray(e))return e}function v(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function b(e){return f(e)||c(e)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function f(e){if(Array.isArray(e)){for(var l=0,a=new Array(e.length);l<e.length;l++)a[l]=e[l];return a}}var p=Object.prototype.toString,h=Object.prototype.hasOwnProperty;function d(e){return"function"===typeof e}function g(e){return"string"===typeof e}function m(e){return"[object Object]"===p.call(e)}function y(e,l){return h.call(e,l)}function _(){}function x(e){var l=Object.create(null);return function(a){var t=l[a];return t||(l[a]=e(a))}}var w=/-(\w)/g,k=x(function(e){return e.replace(w,function(e,l){return l?l.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],O={},S={};function C(e,l){var a=l?e?e.concat(l):Array.isArray(l)?l:[l]:e;return a?E(a):a}function E(e){for(var l=[],a=0;a<e.length;a++)-1===l.indexOf(e[a])&&l.push(e[a]);return l}function $(e,l){var a=e.indexOf(l);-1!==a&&e.splice(a,1)}function j(e,l){Object.keys(l).forEach(function(a){-1!==A.indexOf(a)&&d(l[a])&&(e[a]=C(e[a],l[a]))})}function T(e,l){e&&l&&Object.keys(l).forEach(function(a){-1!==A.indexOf(a)&&d(l[a])&&$(e[a],l[a])})}function P(e,l){"string"===typeof e&&m(l)?j(S[e]||(S[e]={}),l):m(e)&&j(O,e)}function R(e,l){"string"===typeof e?m(l)?T(S[e],l):delete S[e]:m(e)&&T(O,e)}function D(e){return function(l){return e(l)||l}}function I(e){return!!e&&("object"===typeof e||"function"===typeof e)&&"function"===typeof e.then}function M(e,l){for(var a=!1,t=0;t<e.length;t++){var n=e[t];if(a)a=Promise.then(D(n));else{var u=n(l);if(I(u)&&(a=Promise.resolve(u)),!1===u)return{then:function(){}}}}return a||{then:function(e){return e(l)}}}function N(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(e[a])){var t=l[a];l[a]=function(l){M(e[a],l).then(function(e){return d(t)&&t(e)||e})}}}),l}function B(e,l){var a=[];Array.isArray(O.returnValue)&&a.push.apply(a,b(O.returnValue));var t=S[e];return t&&Array.isArray(t.returnValue)&&a.push.apply(a,b(t.returnValue)),a.forEach(function(e){l=e(l)||l}),l}function L(e){var l=Object.create(null);Object.keys(O).forEach(function(e){"returnValue"!==e&&(l[e]=O[e].slice())});var a=S[e];return a&&Object.keys(a).forEach(function(e){"returnValue"!==e&&(l[e]=(l[e]||[]).concat(a[e]))}),l}function q(e,l,a){for(var t=arguments.length,n=new Array(t>3?t-3:0),u=3;u<t;u++)n[u-3]=arguments[u];var r=L(e);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var o=M(r.invoke,a);return o.then(function(e){return l.apply(void 0,[N(r,e)].concat(n))})}return l.apply(void 0,[N(r,a)].concat(n))}return l.apply(void 0,[a].concat(n))}var F={returnValue:function(e){return I(e)?e.then(function(e){return e[1]}).catch(function(e){return e[0]}):e}},H=/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,U=/^create|Manager$/,V=/^on/;function z(e){return U.test(e)}function G(e){return H.test(e)}function J(e){return V.test(e)}function W(e){return e.then(function(e){return[null,e]}).catch(function(e){return[e]})}function K(e){return!(z(e)||G(e)||J(e))}function X(e,l){return K(e)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),u=1;u<t;u++)n[u-1]=arguments[u];return d(a.success)||d(a.fail)||d(a.complete)?B(e,q.apply(void 0,[e,l,a].concat(n))):B(e,W(new Promise(function(t,u){q.apply(void 0,[e,l,Object.assign({},a,{success:t,fail:u})].concat(n)),Promise.prototype.finally||(Promise.prototype.finally=function(e){var l=this.constructor;return this.then(function(a){return l.resolve(e()).then(function(){return a})},function(a){return l.resolve(e()).then(function(){throw a})})})})))}:l}var Y=1e-4,Z=750,Q=!1,ee=0,le=0;function ae(){var e=wx.getSystemInfoSync(),l=e.platform,a=e.pixelRatio,t=e.windowWidth;ee=t,le=a,Q="ios"===l}function te(e,l){if(0===ee&&ae(),e=Number(e),0===e)return 0;var a=e/Z*(l||ee);return a<0&&(a=-a),a=Math.floor(a+Y),0===a?1!==le&&Q?.5:1:e<0?-a:a}var ne={promiseInterceptor:F},ue=Object.freeze({upx2px:te,interceptors:ne,addInterceptor:P,removeInterceptor:R}),re={},oe=[],ie=[],ve=["success","fail","cancel","complete"];function be(e,l,a){return function(t){return l(ce(e,t,a))}}function se(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(l)){var u=!0===n?l:{};for(var r in d(a)&&(a=a(l,u)||{}),l)if(y(a,r)){var o=a[r];d(o)&&(o=o(l[r],l,u)),o?g(o)?u[o]=l[r]:m(o)&&(u[o.name?o.name:r]=o.value):console.warn("app-plus ".concat(e,"暂不支持").concat(r))}else-1!==ve.indexOf(r)?u[r]=be(e,l[r],t):n||(u[r]=l[r]);return u}return d(l)&&(l=be(e,l,t)),l}function ce(e,l,a){var t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(re.returnValue)&&(l=re.returnValue(e,l)),se(e,l,a,{},t)}function fe(e,l){if(y(re,e)){var a=re[e];return a?function(l,t){var n=a;d(a)&&(n=a(l)),l=se(e,l,n.args,n.returnValue);var u=[l];"undefined"!==typeof t&&u.push(t);var r=wx[n.name||e].apply(wx,u);return G(e)?ce(e,r,n.returnValue,z(e)):r}:function(){console.error("app-plus 暂不支持".concat(e))}}return l}var pe=Object.create(null),he=["subscribePush","unsubscribePush","onPush","offPush","share"];function de(e){return function(l){var a=l.fail,t=l.complete,n={errMsg:"".concat(e,":fail:暂不支持 ").concat(e," 方法")};d(a)&&a(n),d(t)&&t(n)}}he.forEach(function(e){pe[e]=de(e)});var ge=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return e||(e=new t.default),e};var e}();function me(e,l,a){return e[l].apply(e,a)}function ye(){return me(ge(),"$on",Array.prototype.slice.call(arguments))}function _e(){return me(ge(),"$off",Array.prototype.slice.call(arguments))}function xe(){return me(ge(),"$once",Array.prototype.slice.call(arguments))}function we(){return me(ge(),"$emit",Array.prototype.slice.call(arguments))}var ke=Object.freeze({$on:ye,$off:_e,$once:xe,$emit:we});function Ae(e){e.$processed=!0,e.postMessage=function(l){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:l},e.id)};var l=[];if(e.onMessage=function(e){l.push(e)},e.$consumeMessage=function(e){l.forEach(function(l){return l(e)})},e.__uniapp_mask_id){var a=e.__uniapp_mask,t=plus.webview.getWebviewById(e.__uniapp_mask_id);t=t.parent()||t;var n=e.show,u=e.hide,r=e.close,o=function(){t.setStyle({mask:a})},i=function(){t.setStyle({mask:"none"})};e.show=function(){o();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return n.apply(e,a)},e.hide=function(){i();for(var l=arguments.length,a=new Array(l),t=0;t<l;t++)a[t]=arguments[t];return u.apply(e,a)},e.close=function(){i(),l=[];for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return r.apply(e,t)}}}function Oe(e){var l=plus.webview.getWebviewById(e);return l&&!l.$processed&&Ae(l),l}function Se(e){return"undefined"!==typeof weex?weex.requireModule(e):__requireNativePlugin__(e)}var Ce=Object.freeze({requireNativePlugin:Se,getSubNVueById:Oe}),Ee=Page,$e=Component,je=/:/g,Te=x(function(e){return k(e.replace(je,"-"))});function Pe(e){if(wx.canIUse("nextTick")){var l=e.triggerEvent;e.triggerEvent=function(a){for(var t=arguments.length,n=new Array(t>1?t-1:0),u=1;u<t;u++)n[u-1]=arguments[u];return l.apply(e,[Te(a)].concat(n))}}}function Re(e,l){var a=l[e];l[e]=a?function(){Pe(this);for(var e=arguments.length,l=new Array(e),t=0;t<e;t++)l[t]=arguments[t];return a.apply(this,l)}:function(){Pe(this)}}Page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Re("onLoad",e),Ee(e)},Component=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Re("created",e),$e(e)};var De=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ie(e,l){var a=e.$mp[e.mpType];l.forEach(function(l){y(a,l)&&(e[l]=a[l])})}function Me(e,l){if(!l)return!0;if(t.default.options&&Array.isArray(t.default.options[e]))return!0;if(l=l.default||l,d(l))return!!d(l.extendOptions[e])||!!(l.super&&l.super.options&&Array.isArray(l.super.options[e]));if(d(l[e]))return!0;var a=l.mixins;return Array.isArray(a)?!!a.find(function(l){return Me(e,l)}):void 0}function Ne(e,l,a){l.forEach(function(l){Me(l,a)&&(e[l]=function(e){return this.$vm&&this.$vm.__call_hook(l,e)})})}function Be(e,l){var a;return l=l.default||l,d(l)?(a=l,l=a.extendOptions):a=e.extend(l),[a,l]}function Le(e,l){if(Array.isArray(l)&&l.length){var a=Object.create(null);l.forEach(function(e){a[e]=!0}),e.$scopedSlots=e.$slots=a}}function qe(e,l){e=(e||"").split(",");var a=e.length;1===a?l._$vueId=e[0]:2===a&&(l._$vueId=e[0],l._$vuePid=e[1])}function Fe(e,l){var a=e.data||{},t=e.methods||{};if("function"===typeof a)try{a=a.call(l)}catch(n){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(n){}return m(a)||(a={}),Object.keys(t).forEach(function(e){-1!==l.__lifecycle_hooks__.indexOf(e)||y(a,e)||(a[e]=t[e])}),a}var He=[String,Number,Boolean,Object,Array,null];function Ue(e){return function(l,a){this.$vm&&(this.$vm[e]=l)}}function Ve(e,l){var a=e["behaviors"],t=e["extends"],n=e["mixins"],u=e["props"];u||(e["props"]=u=[]);var r=[];return Array.isArray(a)&&a.forEach(function(e){r.push(e.replace("uni://","wx".concat("://"))),"uni://form-field"===e&&(Array.isArray(u)?(u.push("name"),u.push("value")):(u["name"]={type:String,default:""},u["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(t)&&t.props&&r.push(l({properties:Ge(t.props,!0)})),Array.isArray(n)&&n.forEach(function(e){m(e)&&e.props&&r.push(l({properties:Ge(e.props,!0)}))}),r}function ze(e,l,a,t){return Array.isArray(l)&&1===l.length?l[0]:l}function Ge(e){var l=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return l||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(e,l){var a=Object.create(null);e.forEach(function(e){a[e]=!0}),this.setData({$slots:a})}}),Array.isArray(e)?e.forEach(function(e){a[e]={type:null,observer:Ue(e)}}):m(e)&&Object.keys(e).forEach(function(l){var t=e[l];if(m(t)){var n=t["default"];d(n)&&(n=n()),t.type=ze(l,t.type),a[l]={type:-1!==He.indexOf(t.type)?t.type:null,value:n,observer:Ue(l)}}else{var u=ze(l,t);a[l]={type:-1!==He.indexOf(u)?u:null,observer:Ue(l)}}}),a}function Je(e){try{e.mp=JSON.parse(JSON.stringify(e))}catch(l){}return e.stopPropagation=_,e.preventDefault=_,e.target=e.target||{},y(e,"detail")||(e.detail={}),m(e.detail)&&(e.target=Object.assign({},e.target,e.detail)),e}function We(e,l){var a=e;return l.forEach(function(l){var t=l[0],n=l[2];if(t||"undefined"!==typeof n){var u=l[1],r=l[3],o=t?e.__get_value(t,a):a;Number.isInteger(o)?a=n:u?Array.isArray(o)?a=o.find(function(l){return e.__get_value(u,l)===n}):m(o)?a=Object.keys(o).find(function(l){return e.__get_value(u,o[l])===n}):console.error("v-for 暂不支持循环数据：",o):a=o[n],r&&(a=e.__get_value(r,a))}}),a}function Ke(e,l,a){var t={};return Array.isArray(l)&&l.length&&l.forEach(function(l,n){"string"===typeof l?l?"$event"===l?t["$"+n]=a:0===l.indexOf("$event.")?t["$"+n]=e.__get_value(l.replace("$event.",""),a):t["$"+n]=e.__get_value(l):t["$"+n]=e:t["$"+n]=We(e,l)}),t}function Xe(e){for(var l={},a=1;a<e.length;a++){var t=e[a];l[t[0]]=t[1]}return l}function Ye(e,l){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0,u=arguments.length>5?arguments[5]:void 0,r=!1;if(n&&(r=l.currentTarget&&l.currentTarget.dataset&&"wx"===l.currentTarget.dataset.comType,!a.length))return r?[l]:l.detail.__args__||l.detail;var o=Ke(e,t,l),i=[];return a.forEach(function(e){"$event"===e?"__set_model"!==u||n?n&&!r?i.push(l.detail.__args__[0]):i.push(l):i.push(l.target.value):Array.isArray(e)&&"o"===e[0]?i.push(Xe(e)):"string"===typeof e&&y(o,e)?i.push(o[e]):i.push(e)}),i}var Ze="~",Qe="^";function el(e,l){return e===l||"regionchange"===l&&("begin"===e||"end"===e)}function ll(e){var l=this;e=Je(e);var a=(e.currentTarget||e.target).dataset;if(!a)return console.warn("事件信息不存在");var t=a.eventOpts||a["event-opts"];if(!t)return console.warn("事件信息不存在");var n=e.type,u=[];return t.forEach(function(a){var t=a[0],r=a[1],o=t.charAt(0)===Qe;t=o?t.slice(1):t;var i=t.charAt(0)===Ze;t=i?t.slice(1):t,r&&el(n,t)&&r.forEach(function(a){var t=a[0];if(t){var n=l.$vm;n.$options.generic&&n.$parent&&n.$parent.$parent&&(n=n.$parent.$parent);var r=n[t];if(!d(r))throw new Error(" _vm.".concat(t," is not a function"));if(i){if(r.once)return;r.once=!0}u.push(r.apply(n,Ye(l.$vm,e,a[1],a[2],o,t)))}})}),"input"===n&&1===u.length&&"undefined"!==typeof u[0]?u[0]:void 0}var al=["onShow","onHide","onError","onPageNotFound"];function tl(e,l){var a=l.mocks,n=l.initRefs;e.$options.store&&(t.default.prototype.$store=e.$options.store),t.default.prototype.mpHost="app-plus",t.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=v({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(n(this),Ie(this,a)))}});var u={onLaunch:function(l){this.$vm||(this.$vm=e,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",l),this.$vm.__call_hook("onLaunch",l))}};return u.globalData=e.$options.globalData||{},Ne(u,al),u}var nl=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ul(e,l){var a=e.$children,t=a.find(function(e){return e.$scope._$vueId===l});if(t)return t;for(var n=a.length-1;n>=0;n--)if(t=ul(a[n],l),t)return t}function rl(e){return Behavior(e)}function ol(){return!!this.route}function il(e){this.triggerEvent("__l",e)}function vl(e){var l=e.$scope;Object.defineProperty(e,"$refs",{get:function(){var e={},a=l.selectAllComponents(".vue-ref");a.forEach(function(l){var a=l.dataset.ref;e[a]=l.$vm||l});var t=l.selectAllComponents(".vue-ref-in-for");return t.forEach(function(l){var a=l.dataset.ref;e[a]||(e[a]=[]),e[a].push(l.$vm||l)}),e}})}function bl(e){var l,a=e.detail||e.value,t=a.vuePid,n=a.vueOptions;t&&(l=ul(this.$vm,t)),l||(l=this.$vm),n.parent=l}function sl(e){return tl(e,{mocks:nl,initRefs:vl})}var cl=["onUniNViewMessage"];function fl(e){var l=sl(e);return Ne(l,cl),l}function pl(e){return App(fl(e)),e}function hl(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l.isPage,n=l.initRelation,r=Be(t.default,e),o=u(r,2),i=o[0],v=o[1],b={options:{multipleSlots:!0,addGlobalClass:!0},data:Fe(v,t.default.prototype),behaviors:Ve(v,rl),properties:Ge(v.props,!1,v.__file),lifetimes:{attached:function(){var e=this.properties,l={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:e};qe(e.vueId,this),n.call(this,{vuePid:this._$vuePid,vueOptions:l}),this.$vm=new i(l),Le(this.$vm,e.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(e){this.$vm&&this.$vm.__call_hook("onPageShow",e)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(e){this.$vm&&this.$vm.__call_hook("onPageResize",e)}},methods:{__l:bl,__e:ll}};return Array.isArray(v.wxsCallMethods)&&v.wxsCallMethods.forEach(function(e){b.methods[e]=function(l){return this.$vm[e](l)}}),a?b:[b,i]}function dl(e){return hl(e,{isPage:ol,initRelation:il})}function gl(e){var l=dl(e);return l.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},l}var ml=["onShow","onHide","onUnload"];function yl(e,l){l.isPage,l.initRelation;var a=gl(e);return Ne(a.methods,ml,e),a.methods.onLoad=function(e){this.$vm.$mp.query=e,this.$vm.__call_hook("onLoad",e)},a}function _l(e){return yl(e,{isPage:ol,initRelation:il})}ml.push.apply(ml,De);var xl=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function wl(e){var l=_l(e);return Ne(l.methods,xl),l}function kl(e){return Component(wl(e))}function Al(e){return Component(gl(e))}oe.forEach(function(e){re[e]=!1}),ie.forEach(function(e){var l=re[e]&&re[e].name?re[e].name:e;wx.canIUse(l)||(re[e]=!1)});var Ol={};Object.keys(ue).forEach(function(e){Ol[e]=ue[e]}),Object.keys(ke).forEach(function(e){Ol[e]=ke[e]}),Object.keys(Ce).forEach(function(e){Ol[e]=X(e,Ce[e])}),Object.keys(wx).forEach(function(e){(y(wx,e)||y(re,e))&&(Ol[e]=X(e,fe(e,wx[e])))}),"undefined"!==typeof e&&(e.uni=Ol,e.UniEmitter=ke),wx.createApp=pl,wx.createPage=kl,wx.createComponent=Al;var Sl=Ol,Cl=Sl;l.default=Cl}).call(this,a("c8ba"))},7099:function(e,l,a){"use strict";(function(e){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=u(a("66fd")),n=u(a("2f62"));function u(e){return e&&e.__esModule?e:{default:e}}t.default.use(n.default);var r=new n.default.Store({state:{forcedLogin:!0,userName:"",is_ios:!1,token:"",currentCity:"",currentDistrict:"",userPoint:{},userInfo:{},red_info:{},shopMoney:0,mywallet:{},redDetail:{},couponLists:[],balanceAll:0,conversion:0,price:0,ddb:0,screen_width:0,screen_height:0,collections:[],editAddress:{},buy_now_obj:{}},mutations:{login:function(e,l){e.userName=l||"新用户"},logout:function(e){e.userName=""},save:function(e,l){for(var a in l)e[a]=l[a]},clear:function(l,a){l[a]="",console.log(e("clear"," at store\\index.js:49"))}},actions:{save:function(e,l){e.commit("save",l)},clear:function(e,l){e.commit("clear",l)}}}),o=r;l.default=o}).call(this,a("0de9")["default"])},8189:function(e){e.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-23320190923002",_inBundle:!1,_integrity:"sha512-MnftsvgOac3q1FCOBPzivbFn8GNQFo7D2DY325HeEZyFCWgx5GEwHpGYjT1PQU6v7DaDn0ruxa3ObdpUIYbmZw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-23320190923002.tgz",_shasum:"0c400c140ca0b3c05f52d25f11583cf05a0c4e9a",_spec:"@dcloudio/uni-stat@next",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"fed4c73fb9142a1b277dd79313939cad90693d3e",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-23320190923002"}},"921b":function(e,l,a){"use strict";(function(e){var l=a("8189");function t(e,l){return!l||"object"!==typeof l&&"function"!==typeof l?n(e):l}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function r(e,l){if("function"!==typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&o(e,l)}function o(e,l){return o=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},o(e,l)}function i(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}function v(e,l){for(var a=0;a<l.length;a++){var t=l[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function b(e,l,a){return l&&v(e.prototype,l),a&&v(e,a),e}var s=l.version,c="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",p=1800,h=300,d=10,g="__DC_STAT_UUID",m="__DC_UUID_VALUE";function y(){var l="";if("n"===k()){try{l=plus.runtime.getDCloudId()}catch(a){l=""}return l}try{l=e.getStorageSync(g)}catch(a){l=m}if(!l){l=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(g,l)}catch(a){e.setStorageSync(g,m)}}return l}var _=function(e){var l=Object.keys(e),a=l.sort(),t={},n="";for(var u in a)t[a[u]]=e[a[u]],n+=a[u]+"="+e[a[u]]+"&";return{sign:"",options:n.substr(0,n.length-1)}},x=function(e){var l="";for(var a in e)l+=a+"="+e[a]+"&";return l.substr(0,l.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},k=function(){var e={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return e["app-plus"]},A=function(){var l="";return"wx"!==k()&&"qq"!==k()||(l=e.getAccountInfoSync().miniProgram.appId||""),l},O=function(){return"n"===k()?plus.runtime.version:""},S=function(){var e=k(),l="";return"n"===e&&(l=plus.runtime.channel),l},C=function(l){var a=k(),t="";return l||("wx"===a&&(t=e.getLaunchOptionsSync().scene),t)},E="First__Visit__Time",$="Last__Visit__Time",j=function(){var l=e.getStorageSync(E),a=0;return l?a=l:(a=w(),e.setStorageSync(E,a),e.removeStorageSync($)),a},T=function(){var l=e.getStorageSync($),a=0;return a=l||"",e.setStorageSync($,w()),a},P="__page__residence__time",R=0,D=0,I=function(){return R=w(),"n"===k()&&e.setStorageSync(P,w()),R},M=function(){return D=w(),"n"===k()&&(R=e.getStorageSync(P)),D-R},N="Total__Visit__Count",B=function(){var l=e.getStorageSync(N),a=1;return l&&(a=l,a++),e.setStorageSync(N,a),a},L=function(e){var l={};for(var a in e)l[a]=encodeURIComponent(e[a]);return l},q=0,F=0,H=function(){var e=(new Date).getTime();return q=e,F=0,e},U=function(){var e=(new Date).getTime();return F=e,e},V=function(e){var l=0;if(0!==q&&(l=F-q),l=parseInt(l/1e3),l=l<1?1:l,"app"===e){var a=l>h;return{residenceTime:l,overtime:a}}if("page"===e){var t=l>p;return{residenceTime:l,overtime:t}}return{residenceTime:l}},z=function(){var e=getCurrentPages(),l=e[e.length-1],a=l.$vm;return"bd"===k()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},G=function(e){var l=getCurrentPages(),a=l[l.length-1],t=a.$vm,n=e._query,u=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return e._query="","bd"===k()?t.$mp&&t.$mp.page.is+u:t.$scope&&t.$scope.route+u||t.$mp&&t.$mp.page.route+u},J=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},W=function(e,l){return e?"string"!==typeof e?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):e.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof l&&"object"!==typeof l?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof l&&l.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===e&&"string"!==typeof l?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=a("b949").default,X=a("f4ef").default||a("f4ef"),Y=e.getSystemInfoSync(),Z=function(){function l(){i(this,l),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:y(),ut:k(),mpn:A(),ak:X.appid,usv:s,v:O(),ch:S(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return b(l,[{key:"_applicationShow",value:function(){if(this.__licationHide){U();var e=V("app");if(e.overtime){var l={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(l)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,l){this.__licationHide=!0,U();var a=V();H();var t=G(this);this._sendHideRequest({urlref:t,urlref_ts:a.residenceTime},l)}},{key:"_pageShow",value:function(){var e=G(this),l=z();if(this._navigationBarTitle.config=K&&K.pages[l]&&K.pages[l].titleNView&&K.pages[l].titleNView.titleText||K&&K.pages[l]&&K.pages[l].navigationBarTitleText||"",this.__licationShow)return H(),this.__licationShow=!1,void(this._lastPageRoute=e);U(),this._lastPageRoute=e;var a=V("page");if(a.overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}H()}},{key:"_pageHide",value:function(){if(!this.__licationHide){U();var e=V("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var l=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+l||"",this.statData.t=w(),this.statData.sc=C(e.scene),this.statData.fvts=j(),this.statData.lvts=T(),this.statData.tvc=B(),"n"===k()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var l=e.url,a=e.urlref,t=e.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:l,tt:this.statData.tt,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(e,l){var a=e.urlref,t=e.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:t,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n,l)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=e.key,a=void 0===l?"":l,t=e.value,n=void 0===t?"":t,u=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:u,ch:this.statData.ch,e_n:a,e_v:"object"===typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var l=this;e.getNetworkType({success:function(e){l.statData.net=e.networkType,l.getLocation()}})}},{key:"getProperty",value:function(){var e=this;plus.runtime.getProperty(plus.runtime.appid,function(l){e.statData.v=l.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var l=this;X.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(l.statData.cn=e.address.country,l.statData.pn=e.address.province,l.statData.ct=e.address.city),l.statData.lat=e.latitude,l.statData.lng=e.longitude,l.request(l.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(l,a){var t=this,n=w(),u=this._navigationBarTitle;l.ttn=u.page,l.ttpj=u.config,l.ttc=u.report;var r=this._reportingRequestData;if("n"===k()&&(r=e.getStorageSync("__UNI__STAT__DATA")||{}),r[l.lt]||(r[l.lt]=[]),r[l.lt].push(l),"n"===k()&&e.setStorageSync("__UNI__STAT__DATA",r),!(M()<d)||a){var o=this._reportingRequestData;"n"===k()&&(o=e.getStorageSync("__UNI__STAT__DATA")),I();var i=[],v=[],b=[],c=function(e){var l=o[e];l.forEach(function(l){var a=x(l);0===e?i.push(a):3===e?b.push(a):v.push(a)})};for(var f in o)c(f);i.push.apply(i,v.concat(b));var p={usv:s,t:n,requests:JSON.stringify(i)};this._reportingRequestData={},"n"===k()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==l.ut?"n"!==k()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){t._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(l){var a=this;e.request({url:c,method:"POST",data:l,success:function(){},fail:function(e){++a._retry<3&&setTimeout(function(){a._sendRequest(l)},1e3)}})}},{key:"imageRequest",value:function(e){var l=new Image,a=_(L(e)).options;l.src=f+"?"+a}},{key:"sendEvent",value:function(e,l){W(e,l)||("title"!==e?this._sendEventRequest({key:e,value:"object"===typeof l?JSON.stringify(l):l},1):this._navigationBarTitle.report=l)}}]),l}(),Q=function(l){function a(){var l;return i(this,a),l=t(this,u(a).call(this)),l.instance=null,"function"===typeof e.addInterceptor&&(l.addInterceptorInit(),l.interceptLogin(),l.interceptShare(!0),l.interceptRequestPayment()),l}return r(a,l),b(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),b(a,[{key:"addInterceptorInit",value:function(){var l=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){l._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var l=this;e.addInterceptor("login",{complete:function(){l._login()}})}},{key:"interceptShare",value:function(l){var a=this;l?e.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var l=this;e.addInterceptor("requestPayment",{success:function(){l._payment("pay_success")},fail:function(){l._payment("pay_fail")}})}},{key:"report",value:function(e,l){this.self=l,I(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,l){if(!l.$scope&&!l.$mp){var a=getCurrentPages();l.$scope=a[a.length-1]}this.self=l,this._query=e}},{key:"show",value:function(e){this.self=e,J(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,J(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var l="";l=e.message?e.stack:JSON.stringify(e);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:l,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}}]),a}(Z),ee=Q.getInstance(),le=!1,ae={onLaunch:function(e){ee.report(e,this)},onReady:function(){ee.ready(this)},onLoad:function(e){if(ee.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var l=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return ee.interceptShare(!1),l.call(this,e)}}},onShow:function(){le=!1,ee.show(this)},onHide:function(){le=!0,ee.hide(this)},onUnload:function(){le?le=!1:ee.hide(this)},onError:function(e){ee.error(e)}};function te(){var l=a("66fd");(l.default||l).mixin(ae),e.report=function(e,l){ee.sendEvent(e,l)}}te()}).call(this,a("6e42")["default"])},"96cf":function(e,l){!function(l){"use strict";var a,t=Object.prototype,n=t.hasOwnProperty,u="function"===typeof Symbol?Symbol:{},r=u.iterator||"@@iterator",o=u.asyncIterator||"@@asyncIterator",i=u.toStringTag||"@@toStringTag",v="object"===typeof e,b=l.regeneratorRuntime;if(b)v&&(e.exports=b);else{b=l.regeneratorRuntime=v?e.exports:{},b.wrap=_;var s="suspendedStart",c="suspendedYield",f="executing",p="completed",h={},d={};d[r]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(P([])));m&&m!==t&&n.call(m,r)&&(d=m);var y=A.prototype=w.prototype=Object.create(d);k.prototype=y.constructor=A,A.constructor=k,A[i]=k.displayName="GeneratorFunction",b.isGeneratorFunction=function(e){var l="function"===typeof e&&e.constructor;return!!l&&(l===k||"GeneratorFunction"===(l.displayName||l.name))},b.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,A):(e.__proto__=A,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(y),e},b.awrap=function(e){return{__await:e}},O(S.prototype),S.prototype[o]=function(){return this},b.AsyncIterator=S,b.async=function(e,l,a,t){var n=new S(_(e,l,a,t));return b.isGeneratorFunction(l)?n:n.next().then(function(e){return e.done?e.value:n.next()})},O(y),y[i]="Generator",y[r]=function(){return this},y.toString=function(){return"[object Generator]"},b.keys=function(e){var l=[];for(var a in e)l.push(a);return l.reverse(),function a(){while(l.length){var t=l.pop();if(t in e)return a.value=t,a.done=!1,a}return a.done=!0,a}},b.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach(j),!e)for(var l in this)"t"===l.charAt(0)&&n.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=a)},stop:function(){this.done=!0;var e=this.tryEntries[0],l=e.completion;if("throw"===l.type)throw l.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var l=this;function t(t,n){return o.type="throw",o.arg=e,l.next=t,n&&(l.method="next",l.arg=a),!!n}for(var u=this.tryEntries.length-1;u>=0;--u){var r=this.tryEntries[u],o=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var i=n.call(r,"catchLoc"),v=n.call(r,"finallyLoc");if(i&&v){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!v)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,l){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc<=this.prev&&n.call(t,"finallyLoc")&&this.prev<t.finallyLoc){var u=t;break}}u&&("break"===e||"continue"===e)&&u.tryLoc<=l&&l<=u.finallyLoc&&(u=null);var r=u?u.completion:{};return r.type=e,r.arg=l,u?(this.method="next",this.next=u.finallyLoc,h):this.complete(r)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),h},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),h}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc===e){var t=a.completion;if("throw"===t.type){var n=t.arg;j(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,l,t){return this.delegate={iterator:P(e),resultName:l,nextLoc:t},"next"===this.method&&(this.arg=a),h}}}function _(e,l,a,t){var n=l&&l.prototype instanceof w?l:w,u=Object.create(n.prototype),r=new T(t||[]);return u._invoke=C(e,a,r),u}function x(e,l,a){try{return{type:"normal",arg:e.call(l,a)}}catch(t){return{type:"throw",arg:t}}}function w(){}function k(){}function A(){}function O(e){["next","throw","return"].forEach(function(l){e[l]=function(e){return this._invoke(l,e)}})}function S(e){function l(a,t,u,r){var o=x(e[a],e,t);if("throw"!==o.type){var i=o.arg,v=i.value;return v&&"object"===typeof v&&n.call(v,"__await")?Promise.resolve(v.__await).then(function(e){l("next",e,u,r)},function(e){l("throw",e,u,r)}):Promise.resolve(v).then(function(e){i.value=e,u(i)},function(e){return l("throw",e,u,r)})}r(o.arg)}var a;function t(e,t){function n(){return new Promise(function(a,n){l(e,t,a,n)})}return a=a?a.then(n,n):n()}this._invoke=t}function C(e,l,a){var t=s;return function(n,u){if(t===f)throw new Error("Generator is already running");if(t===p){if("throw"===n)throw u;return R()}a.method=n,a.arg=u;while(1){var r=a.delegate;if(r){var o=E(r,a);if(o){if(o===h)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(t===s)throw t=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);t=f;var i=x(e,l,a);if("normal"===i.type){if(t=a.done?p:c,i.arg===h)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(t=p,a.method="throw",a.arg=i.arg)}}}function E(e,l){var t=e.iterator[l.method];if(t===a){if(l.delegate=null,"throw"===l.method){if(e.iterator.return&&(l.method="return",l.arg=a,E(e,l),"throw"===l.method))return h;l.method="throw",l.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=x(t,e.iterator,l.arg);if("throw"===n.type)return l.method="throw",l.arg=n.arg,l.delegate=null,h;var u=n.arg;return u?u.done?(l[e.resultName]=u.value,l.next=e.nextLoc,"return"!==l.method&&(l.method="next",l.arg=a),l.delegate=null,h):u:(l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,h)}function $(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function j(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function P(e){if(e){var l=e[r];if(l)return l.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var t=-1,u=function l(){while(++t<e.length)if(n.call(e,t))return l.value=e[t],l.done=!1,l;return l.value=a,l.done=!0,l};return u.next=u}}return{next:R}}function R(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(e,l,a){e.exports=a("bbdd")},b11d:function(e,l,a){"use strict";(function(e,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=function(){var l=function(){};return l.log=function(e,l){},l.load=function(l,a){return e.getStorageSync(l)},l.save=function(l,t,n){n=!0,n?e.setStorage({key:l,data:t,success:function(){console.log(a("success"," at common\\util.js:31"))}}):e.setStorage({key:l,data:JSON.stringify(t),success:function(){console.log(a("success"," at common\\util.js:23"))}})},l.remove=function(l){e.removeStorage({key:l,success:function(e){}})},l.confirm=function(l,a,t,n){n=n||["确认","取消"],t=t||"提示";var u=[];"function"==typeof a?(u.push(a),u.push("")):u=a,e.showModal({title:t,content:l,cancelText:n[1],confirmText:n[0],success:function(e){e.confirm?a():e.cancel}})},l.toast=function(l){e.showToast({title:l,duration:2e3})},l}(),n=function(e){return new Date(1e3*parseInt(e)).toLocaleString("chinese",{hour12:!1}).replace(/年|月/g,"-").replace(/日/g," ").replace(/上午|下午| GMT /g,"").replace(/\//g,"-")},u=function(e){e=e.replace(/-/g,"/",e);var l=Date.now(),a=new Date(e).getTime(),t=parseInt((l-a)/1e3),n="刚刚";return t<30?n="刚刚":t<3600?n=parseInt(t/60)+"分钟前":t<86400?n=parseInt(t/3600)+"小时前":t<2592e3?n=parseInt(t/86400)+"天前":t<94608e4?n=parseInt(t/1296e3)+"月前":t<47304e5&&(n=parseInt(t/47304e4)+"年前"),n},r=function(e){return"undefined"==typeof e||("string"==typeof e&&(""==e||"undefined"==e||"0"==e)||("object"==typeof e&&null==e||("object"==typeof e&&("{}"==JSON.stringify(e)||"[]"==JSON.stringify(e))||"boolean"==typeof e&&!e)))},o={is_empty:r,beforeTime:u,strtodate:n,help:t};l.default=o}).call(this,a("6e42")["default"],a("0de9")["default"])},b48a:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[[[{label:"东城区",value:"110101"},{label:"西城区",value:"110102"},{label:"朝阳区",value:"110105"},{label:"丰台区",value:"110106"},{label:"石景山区",value:"110107"},{label:"海淀区",value:"110108"},{label:"门头沟区",value:"110109"},{label:"房山区",value:"110111"},{label:"通州区",value:"110112"},{label:"顺义区",value:"110113"},{label:"昌平区",value:"110114"},{label:"大兴区",value:"110115"},{label:"怀柔区",value:"110116"},{label:"平谷区",value:"110117"},{label:"密云区",value:"110118"},{label:"延庆区",value:"110119"}]],[[{label:"和平区",value:"120101"},{label:"河东区",value:"120102"},{label:"河西区",value:"120103"},{label:"南开区",value:"120104"},{label:"河北区",value:"120105"},{label:"红桥区",value:"120106"},{label:"东丽区",value:"120110"},{label:"西青区",value:"120111"},{label:"津南区",value:"120112"},{label:"北辰区",value:"120113"},{label:"武清区",value:"120114"},{label:"宝坻区",value:"120115"},{label:"滨海新区",value:"120116"},{label:"宁河区",value:"120117"},{label:"静海区",value:"120118"},{label:"蓟州区",value:"120119"}]],[[{label:"长安区",value:"130102"},{label:"桥西区",value:"130104"},{label:"新华区",value:"130105"},{label:"井陉矿区",value:"130107"},{label:"裕华区",value:"130108"},{label:"藁城区",value:"130109"},{label:"鹿泉区",value:"130110"},{label:"栾城区",value:"130111"},{label:"井陉县",value:"130121"},{label:"正定县",value:"130123"},{label:"行唐县",value:"130125"},{label:"灵寿县",value:"130126"},{label:"高邑县",value:"130127"},{label:"深泽县",value:"130128"},{label:"赞皇县",value:"130129"},{label:"无极县",value:"130130"},{label:"平山县",value:"130131"},{label:"元氏县",value:"130132"},{label:"赵县",value:"130133"},{label:"石家庄高新技术产业开发区",value:"130171"},{label:"石家庄循环化工园区",value:"130172"},{label:"辛集市",value:"130181"},{label:"晋州市",value:"130183"},{label:"新乐市",value:"130184"}],[{label:"路南区",value:"130202"},{label:"路北区",value:"130203"},{label:"古冶区",value:"130204"},{label:"开平区",value:"130205"},{label:"丰南区",value:"130207"},{label:"丰润区",value:"130208"},{label:"曹妃甸区",value:"130209"},{label:"滦县",value:"130223"},{label:"滦南县",value:"130224"},{label:"乐亭县",value:"130225"},{label:"迁西县",value:"130227"},{label:"玉田县",value:"130229"},{label:"唐山市芦台经济技术开发区",value:"130271"},{label:"唐山市汉沽管理区",value:"130272"},{label:"唐山高新技术产业开发区",value:"130273"},{label:"河北唐山海港经济开发区",value:"130274"},{label:"遵化市",value:"130281"},{label:"迁安市",value:"130283"}],[{label:"海港区",value:"130302"},{label:"山海关区",value:"130303"},{label:"北戴河区",value:"130304"},{label:"抚宁区",value:"130306"},{label:"青龙满族自治县",value:"130321"},{label:"昌黎县",value:"130322"},{label:"卢龙县",value:"130324"},{label:"秦皇岛市经济技术开发区",value:"130371"},{label:"北戴河新区",value:"130372"}],[{label:"邯山区",value:"130402"},{label:"丛台区",value:"130403"},{label:"复兴区",value:"130404"},{label:"峰峰矿区",value:"130406"},{label:"肥乡区",value:"130407"},{label:"永年区",value:"130408"},{label:"临漳县",value:"130423"},{label:"成安县",value:"130424"},{label:"大名县",value:"130425"},{label:"涉县",value:"130426"},{label:"磁县",value:"130427"},{label:"邱县",value:"130430"},{label:"鸡泽县",value:"130431"},{label:"广平县",value:"130432"},{label:"馆陶县",value:"130433"},{label:"魏县",value:"130434"},{label:"曲周县",value:"130435"},{label:"邯郸经济技术开发区",value:"130471"},{label:"邯郸冀南新区",value:"130473"},{label:"武安市",value:"130481"}],[{label:"桥东区",value:"130502"},{label:"桥西区",value:"130503"},{label:"邢台县",value:"130521"},{label:"临城县",value:"130522"},{label:"内丘县",value:"130523"},{label:"柏乡县",value:"130524"},{label:"隆尧县",value:"130525"},{label:"任县",value:"130526"},{label:"南和县",value:"130527"},{label:"宁晋县",value:"130528"},{label:"巨鹿县",value:"130529"},{label:"新河县",value:"130530"},{label:"广宗县",value:"130531"},{label:"平乡县",value:"130532"},{label:"威县",value:"130533"},{label:"清河县",value:"130534"},{label:"临西县",value:"130535"},{label:"河北邢台经济开发区",value:"130571"},{label:"南宫市",value:"130581"},{label:"沙河市",value:"130582"}],[{label:"竞秀区",value:"130602"},{label:"莲池区",value:"130606"},{label:"满城区",value:"130607"},{label:"清苑区",value:"130608"},{label:"徐水区",value:"130609"},{label:"涞水县",value:"130623"},{label:"阜平县",value:"130624"},{label:"定兴县",value:"130626"},{label:"唐县",value:"130627"},{label:"高阳县",value:"130628"},{label:"容城县",value:"130629"},{label:"涞源县",value:"130630"},{label:"望都县",value:"130631"},{label:"安新县",value:"130632"},{label:"易县",value:"130633"},{label:"曲阳县",value:"130634"},{label:"蠡县",value:"130635"},{label:"顺平县",value:"130636"},{label:"博野县",value:"130637"},{label:"雄县",value:"130638"},{label:"保定高新技术产业开发区",value:"130671"},{label:"保定白沟新城",value:"130672"},{label:"涿州市",value:"130681"},{label:"定州市",value:"130682"},{label:"安国市",value:"130683"},{label:"高碑店市",value:"130684"}],[{label:"桥东区",value:"130702"},{label:"桥西区",value:"130703"},{label:"宣化区",value:"130705"},{label:"下花园区",value:"130706"},{label:"万全区",value:"130708"},{label:"崇礼区",value:"130709"},{label:"张北县",value:"130722"},{label:"康保县",value:"130723"},{label:"沽源县",value:"130724"},{label:"尚义县",value:"130725"},{label:"蔚县",value:"130726"},{label:"阳原县",value:"130727"},{label:"怀安县",value:"130728"},{label:"怀来县",value:"130730"},{label:"涿鹿县",value:"130731"},{label:"赤城县",value:"130732"},{label:"张家口市高新技术产业开发区",value:"130771"},{label:"张家口市察北管理区",value:"130772"},{label:"张家口市塞北管理区",value:"130773"}],[{label:"双桥区",value:"130802"},{label:"双滦区",value:"130803"},{label:"鹰手营子矿区",value:"130804"},{label:"承德县",value:"130821"},{label:"兴隆县",value:"130822"},{label:"滦平县",value:"130824"},{label:"隆化县",value:"130825"},{label:"丰宁满族自治县",value:"130826"},{label:"宽城满族自治县",value:"130827"},{label:"围场满族蒙古族自治县",value:"130828"},{label:"承德高新技术产业开发区",value:"130871"},{label:"平泉市",value:"130881"}],[{label:"新华区",value:"130902"},{label:"运河区",value:"130903"},{label:"沧县",value:"130921"},{label:"青县",value:"130922"},{label:"东光县",value:"130923"},{label:"海兴县",value:"130924"},{label:"盐山县",value:"130925"},{label:"肃宁县",value:"130926"},{label:"南皮县",value:"130927"},{label:"吴桥县",value:"130928"},{label:"献县",value:"130929"},{label:"孟村回族自治县",value:"130930"},{label:"河北沧州经济开发区",value:"130971"},{label:"沧州高新技术产业开发区",value:"130972"},{label:"沧州渤海新区",value:"130973"},{label:"泊头市",value:"130981"},{label:"任丘市",value:"130982"},{label:"黄骅市",value:"130983"},{label:"河间市",value:"130984"}],[{label:"安次区",value:"131002"},{label:"广阳区",value:"131003"},{label:"固安县",value:"131022"},{label:"永清县",value:"131023"},{label:"香河县",value:"131024"},{label:"大城县",value:"131025"},{label:"文安县",value:"131026"},{label:"大厂回族自治县",value:"131028"},{label:"廊坊经济技术开发区",value:"131071"},{label:"霸州市",value:"131081"},{label:"三河市",value:"131082"}],[{label:"桃城区",value:"131102"},{label:"冀州区",value:"131103"},{label:"枣强县",value:"131121"},{label:"武邑县",value:"131122"},{label:"武强县",value:"131123"},{label:"饶阳县",value:"131124"},{label:"安平县",value:"131125"},{label:"故城县",value:"131126"},{label:"景县",value:"131127"},{label:"阜城县",value:"131128"},{label:"河北衡水经济开发区",value:"131171"},{label:"衡水滨湖新区",value:"131172"},{label:"深州市",value:"131182"}]],[[{label:"小店区",value:"140105"},{label:"迎泽区",value:"140106"},{label:"杏花岭区",value:"140107"},{label:"尖草坪区",value:"140108"},{label:"万柏林区",value:"140109"},{label:"晋源区",value:"140110"},{label:"清徐县",value:"140121"},{label:"阳曲县",value:"140122"},{label:"娄烦县",value:"140123"},{label:"山西转型综合改革示范区",value:"140171"},{label:"古交市",value:"140181"}],[{label:"城区",value:"140202"},{label:"矿区",value:"140203"},{label:"南郊区",value:"140211"},{label:"新荣区",value:"140212"},{label:"阳高县",value:"140221"},{label:"天镇县",value:"140222"},{label:"广灵县",value:"140223"},{label:"灵丘县",value:"140224"},{label:"浑源县",value:"140225"},{label:"左云县",value:"140226"},{label:"大同县",value:"140227"},{label:"山西大同经济开发区",value:"140271"}],[{label:"城区",value:"140302"},{label:"矿区",value:"140303"},{label:"郊区",value:"140311"},{label:"平定县",value:"140321"},{label:"盂县",value:"140322"},{label:"山西阳泉经济开发区",value:"140371"}],[{label:"城区",value:"140402"},{label:"郊区",value:"140411"},{label:"长治县",value:"140421"},{label:"襄垣县",value:"140423"},{label:"屯留县",value:"140424"},{label:"平顺县",value:"140425"},{label:"黎城县",value:"140426"},{label:"壶关县",value:"140427"},{label:"长子县",value:"140428"},{label:"武乡县",value:"140429"},{label:"沁县",value:"140430"},{label:"沁源县",value:"140431"},{label:"山西长治高新技术产业园区",value:"140471"},{label:"潞城市",value:"140481"}],[{label:"城区",value:"140502"},{label:"沁水县",value:"140521"},{label:"阳城县",value:"140522"},{label:"陵川县",value:"140524"},{label:"泽州县",value:"140525"},{label:"高平市",value:"140581"}],[{label:"朔城区",value:"140602"},{label:"平鲁区",value:"140603"},{label:"山阴县",value:"140621"},{label:"应县",value:"140622"},{label:"右玉县",value:"140623"},{label:"怀仁县",value:"140624"},{label:"山西朔州经济开发区",value:"140671"}],[{label:"榆次区",value:"140702"},{label:"榆社县",value:"140721"},{label:"左权县",value:"140722"},{label:"和顺县",value:"140723"},{label:"昔阳县",value:"140724"},{label:"寿阳县",value:"140725"},{label:"太谷县",value:"140726"},{label:"祁县",value:"140727"},{label:"平遥县",value:"140728"},{label:"灵石县",value:"140729"},{label:"介休市",value:"140781"}],[{label:"盐湖区",value:"140802"},{label:"临猗县",value:"140821"},{label:"万荣县",value:"140822"},{label:"闻喜县",value:"140823"},{label:"稷山县",value:"140824"},{label:"新绛县",value:"140825"},{label:"绛县",value:"140826"},{label:"垣曲县",value:"140827"},{label:"夏县",value:"140828"},{label:"平陆县",value:"140829"},{label:"芮城县",value:"140830"},{label:"永济市",value:"140881"},{label:"河津市",value:"140882"}],[{label:"忻府区",value:"140902"},{label:"定襄县",value:"140921"},{label:"五台县",value:"140922"},{label:"代县",value:"140923"},{label:"繁峙县",value:"140924"},{label:"宁武县",value:"140925"},{label:"静乐县",value:"140926"},{label:"神池县",value:"140927"},{label:"五寨县",value:"140928"},{label:"岢岚县",value:"140929"},{label:"河曲县",value:"140930"},{label:"保德县",value:"140931"},{label:"偏关县",value:"140932"},{label:"五台山风景名胜区",value:"140971"},{label:"原平市",value:"140981"}],[{label:"尧都区",value:"141002"},{label:"曲沃县",value:"141021"},{label:"翼城县",value:"141022"},{label:"襄汾县",value:"141023"},{label:"洪洞县",value:"141024"},{label:"古县",value:"141025"},{label:"安泽县",value:"141026"},{label:"浮山县",value:"141027"},{label:"吉县",value:"141028"},{label:"乡宁县",value:"141029"},{label:"大宁县",value:"141030"},{label:"隰县",value:"141031"},{label:"永和县",value:"141032"},{label:"蒲县",value:"141033"},{label:"汾西县",value:"141034"},{label:"侯马市",value:"141081"},{label:"霍州市",value:"141082"}],[{label:"离石区",value:"141102"},{label:"文水县",value:"141121"},{label:"交城县",value:"141122"},{label:"兴县",value:"141123"},{label:"临县",value:"141124"},{label:"柳林县",value:"141125"},{label:"石楼县",value:"141126"},{label:"岚县",value:"141127"},{label:"方山县",value:"141128"},{label:"中阳县",value:"141129"},{label:"交口县",value:"141130"},{label:"孝义市",value:"141181"},{label:"汾阳市",value:"141182"}]],[[{label:"新城区",value:"150102"},{label:"回民区",value:"150103"},{label:"玉泉区",value:"150104"},{label:"赛罕区",value:"150105"},{label:"土默特左旗",value:"150121"},{label:"托克托县",value:"150122"},{label:"和林格尔县",value:"150123"},{label:"清水河县",value:"150124"},{label:"武川县",value:"150125"},{label:"呼和浩特金海工业园区",value:"150171"},{label:"呼和浩特经济技术开发区",value:"150172"}],[{label:"东河区",value:"150202"},{label:"昆都仑区",value:"150203"},{label:"青山区",value:"150204"},{label:"石拐区",value:"150205"},{label:"白云鄂博矿区",value:"150206"},{label:"九原区",value:"150207"},{label:"土默特右旗",value:"150221"},{label:"固阳县",value:"150222"},{label:"达尔罕茂明安联合旗",value:"150223"},{label:"包头稀土高新技术产业开发区",value:"150271"}],[{label:"海勃湾区",value:"150302"},{label:"海南区",value:"150303"},{label:"乌达区",value:"150304"}],[{label:"红山区",value:"150402"},{label:"元宝山区",value:"150403"},{label:"松山区",value:"150404"},{label:"阿鲁科尔沁旗",value:"150421"},{label:"巴林左旗",value:"150422"},{label:"巴林右旗",value:"150423"},{label:"林西县",value:"150424"},{label:"克什克腾旗",value:"150425"},{label:"翁牛特旗",value:"150426"},{label:"喀喇沁旗",value:"150428"},{label:"宁城县",value:"150429"},{label:"敖汉旗",value:"150430"}],[{label:"科尔沁区",value:"150502"},{label:"科尔沁左翼中旗",value:"150521"},{label:"科尔沁左翼后旗",value:"150522"},{label:"开鲁县",value:"150523"},{label:"库伦旗",value:"150524"},{label:"奈曼旗",value:"150525"},{label:"扎鲁特旗",value:"150526"},{label:"通辽经济技术开发区",value:"150571"},{label:"霍林郭勒市",value:"150581"}],[{label:"东胜区",value:"150602"},{label:"康巴什区",value:"150603"},{label:"达拉特旗",value:"150621"},{label:"准格尔旗",value:"150622"},{label:"鄂托克前旗",value:"150623"},{label:"鄂托克旗",value:"150624"},{label:"杭锦旗",value:"150625"},{label:"乌审旗",value:"150626"},{label:"伊金霍洛旗",value:"150627"}],[{label:"海拉尔区",value:"150702"},{label:"扎赉诺尔区",value:"150703"},{label:"阿荣旗",value:"150721"},{label:"莫力达瓦达斡尔族自治旗",value:"150722"},{label:"鄂伦春自治旗",value:"150723"},{label:"鄂温克族自治旗",value:"150724"},{label:"陈巴尔虎旗",value:"150725"},{label:"新巴尔虎左旗",value:"150726"},{label:"新巴尔虎右旗",value:"150727"},{label:"满洲里市",value:"150781"},{label:"牙克石市",value:"150782"},{label:"扎兰屯市",value:"150783"},{label:"额尔古纳市",value:"150784"},{label:"根河市",value:"150785"}],[{label:"临河区",value:"150802"},{label:"五原县",value:"150821"},{label:"磴口县",value:"150822"},{label:"乌拉特前旗",value:"150823"},{label:"乌拉特中旗",value:"150824"},{label:"乌拉特后旗",value:"150825"},{label:"杭锦后旗",value:"150826"}],[{label:"集宁区",value:"150902"},{label:"卓资县",value:"150921"},{label:"化德县",value:"150922"},{label:"商都县",value:"150923"},{label:"兴和县",value:"150924"},{label:"凉城县",value:"150925"},{label:"察哈尔右翼前旗",value:"150926"},{label:"察哈尔右翼中旗",value:"150927"},{label:"察哈尔右翼后旗",value:"150928"},{label:"四子王旗",value:"150929"},{label:"丰镇市",value:"150981"}],[{label:"乌兰浩特市",value:"152201"},{label:"阿尔山市",value:"152202"},{label:"科尔沁右翼前旗",value:"152221"},{label:"科尔沁右翼中旗",value:"152222"},{label:"扎赉特旗",value:"152223"},{label:"突泉县",value:"152224"}],[{label:"二连浩特市",value:"152501"},{label:"锡林浩特市",value:"152502"},{label:"阿巴嘎旗",value:"152522"},{label:"苏尼特左旗",value:"152523"},{label:"苏尼特右旗",value:"152524"},{label:"东乌珠穆沁旗",value:"152525"},{label:"西乌珠穆沁旗",value:"152526"},{label:"太仆寺旗",value:"152527"},{label:"镶黄旗",value:"152528"},{label:"正镶白旗",value:"152529"},{label:"正蓝旗",value:"152530"},{label:"多伦县",value:"152531"},{label:"乌拉盖管委会",value:"152571"}],[{label:"阿拉善左旗",value:"152921"},{label:"阿拉善右旗",value:"152922"},{label:"额济纳旗",value:"152923"},{label:"内蒙古阿拉善经济开发区",value:"152971"}]],[[{label:"和平区",value:"210102"},{label:"沈河区",value:"210103"},{label:"大东区",value:"210104"},{label:"皇姑区",value:"210105"},{label:"铁西区",value:"210106"},{label:"苏家屯区",value:"210111"},{label:"浑南区",value:"210112"},{label:"沈北新区",value:"210113"},{label:"于洪区",value:"210114"},{label:"辽中区",value:"210115"},{label:"康平县",value:"210123"},{label:"法库县",value:"210124"},{label:"新民市",value:"210181"}],[{label:"中山区",value:"210202"},{label:"西岗区",value:"210203"},{label:"沙河口区",value:"210204"},{label:"甘井子区",value:"210211"},{label:"旅顺口区",value:"210212"},{label:"金州区",value:"210213"},{label:"普兰店区",value:"210214"},{label:"长海县",value:"210224"},{label:"瓦房店市",value:"210281"},{label:"庄河市",value:"210283"}],[{label:"铁东区",value:"210302"},{label:"铁西区",value:"210303"},{label:"立山区",value:"210304"},{label:"千山区",value:"210311"},{label:"台安县",value:"210321"},{label:"岫岩满族自治县",value:"210323"},{label:"海城市",value:"210381"}],[{label:"新抚区",value:"210402"},{label:"东洲区",value:"210403"},{label:"望花区",value:"210404"},{label:"顺城区",value:"210411"},{label:"抚顺县",value:"210421"},{label:"新宾满族自治县",value:"210422"},{label:"清原满族自治县",value:"210423"}],[{label:"平山区",value:"210502"},{label:"溪湖区",value:"210503"},{label:"明山区",value:"210504"},{label:"南芬区",value:"210505"},{label:"本溪满族自治县",value:"210521"},{label:"桓仁满族自治县",value:"210522"}],[{label:"元宝区",value:"210602"},{label:"振兴区",value:"210603"},{label:"振安区",value:"210604"},{label:"宽甸满族自治县",value:"210624"},{label:"东港市",value:"210681"},{label:"凤城市",value:"210682"}],[{label:"古塔区",value:"210702"},{label:"凌河区",value:"210703"},{label:"太和区",value:"210711"},{label:"黑山县",value:"210726"},{label:"义县",value:"210727"},{label:"凌海市",value:"210781"},{label:"北镇市",value:"210782"}],[{label:"站前区",value:"210802"},{label:"西市区",value:"210803"},{label:"鲅鱼圈区",value:"210804"},{label:"老边区",value:"210811"},{label:"盖州市",value:"210881"},{label:"大石桥市",value:"210882"}],[{label:"海州区",value:"210902"},{label:"新邱区",value:"210903"},{label:"太平区",value:"210904"},{label:"清河门区",value:"210905"},{label:"细河区",value:"210911"},{label:"阜新蒙古族自治县",value:"210921"},{label:"彰武县",value:"210922"}],[{label:"白塔区",value:"211002"},{label:"文圣区",value:"211003"},{label:"宏伟区",value:"211004"},{label:"弓长岭区",value:"211005"},{label:"太子河区",value:"211011"},{label:"辽阳县",value:"211021"},{label:"灯塔市",value:"211081"}],[{label:"双台子区",value:"211102"},{label:"兴隆台区",value:"211103"},{label:"大洼区",value:"211104"},{label:"盘山县",value:"211122"}],[{label:"银州区",value:"211202"},{label:"清河区",value:"211204"},{label:"铁岭县",value:"211221"},{label:"西丰县",value:"211223"},{label:"昌图县",value:"211224"},{label:"调兵山市",value:"211281"},{label:"开原市",value:"211282"}],[{label:"双塔区",value:"211302"},{label:"龙城区",value:"211303"},{label:"朝阳县",value:"211321"},{label:"建平县",value:"211322"},{label:"喀喇沁左翼蒙古族自治县",value:"211324"},{label:"北票市",value:"211381"},{label:"凌源市",value:"211382"}],[{label:"连山区",value:"211402"},{label:"龙港区",value:"211403"},{label:"南票区",value:"211404"},{label:"绥中县",value:"211421"},{label:"建昌县",value:"211422"},{label:"兴城市",value:"211481"}]],[[{label:"南关区",value:"220102"},{label:"宽城区",value:"220103"},{label:"朝阳区",value:"220104"},{label:"二道区",value:"220105"},{label:"绿园区",value:"220106"},{label:"双阳区",value:"220112"},{label:"九台区",value:"220113"},{label:"农安县",value:"220122"},{label:"长春经济技术开发区",value:"220171"},{label:"长春净月高新技术产业开发区",value:"220172"},{label:"长春高新技术产业开发区",value:"220173"},{label:"长春汽车经济技术开发区",value:"220174"},{label:"榆树市",value:"220182"},{label:"德惠市",value:"220183"}],[{label:"昌邑区",value:"220202"},{label:"龙潭区",value:"220203"},{label:"船营区",value:"220204"},{label:"丰满区",value:"220211"},{label:"永吉县",value:"220221"},{label:"吉林经济开发区",value:"220271"},{label:"吉林高新技术产业开发区",value:"220272"},{label:"吉林中国新加坡食品区",value:"220273"},{label:"蛟河市",value:"220281"},{label:"桦甸市",value:"220282"},{label:"舒兰市",value:"220283"},{label:"磐石市",value:"220284"}],[{label:"铁西区",value:"220302"},{label:"铁东区",value:"220303"},{label:"梨树县",value:"220322"},{label:"伊通满族自治县",value:"220323"},{label:"公主岭市",value:"220381"},{label:"双辽市",value:"220382"}],[{label:"龙山区",value:"220402"},{label:"西安区",value:"220403"},{label:"东丰县",value:"220421"},{label:"东辽县",value:"220422"}],[{label:"东昌区",value:"220502"},{label:"二道江区",value:"220503"},{label:"通化县",value:"220521"},{label:"辉南县",value:"220523"},{label:"柳河县",value:"220524"},{label:"梅河口市",value:"220581"},{label:"集安市",value:"220582"}],[{label:"浑江区",value:"220602"},{label:"江源区",value:"220605"},{label:"抚松县",value:"220621"},{label:"靖宇县",value:"220622"},{label:"长白朝鲜族自治县",value:"220623"},{label:"临江市",value:"220681"}],[{label:"宁江区",value:"220702"},{label:"前郭尔罗斯蒙古族自治县",value:"220721"},{label:"长岭县",value:"220722"},{label:"乾安县",value:"220723"},{label:"吉林松原经济开发区",value:"220771"},{label:"扶余市",value:"220781"}],[{label:"洮北区",value:"220802"},{label:"镇赉县",value:"220821"},{label:"通榆县",value:"220822"},{label:"吉林白城经济开发区",value:"220871"},{label:"洮南市",value:"220881"},{label:"大安市",value:"220882"}],[{label:"延吉市",value:"222401"},{label:"图们市",value:"222402"},{label:"敦化市",value:"222403"},{label:"珲春市",value:"222404"},{label:"龙井市",value:"222405"},{label:"和龙市",value:"222406"},{label:"汪清县",value:"222424"},{label:"安图县",value:"222426"}]],[[{label:"道里区",value:"230102"},{label:"南岗区",value:"230103"},{label:"道外区",value:"230104"},{label:"平房区",value:"230108"},{label:"松北区",value:"230109"},{label:"香坊区",value:"230110"},{label:"呼兰区",value:"230111"},{label:"阿城区",value:"230112"},{label:"双城区",value:"230113"},{label:"依兰县",value:"230123"},{label:"方正县",value:"230124"},{label:"宾县",value:"230125"},{label:"巴彦县",value:"230126"},{label:"木兰县",value:"230127"},{label:"通河县",value:"230128"},{label:"延寿县",value:"230129"},{label:"尚志市",value:"230183"},{label:"五常市",value:"230184"}],[{label:"龙沙区",value:"230202"},{label:"建华区",value:"230203"},{label:"铁锋区",value:"230204"},{label:"昂昂溪区",value:"230205"},{label:"富拉尔基区",value:"230206"},{label:"碾子山区",value:"230207"},{label:"梅里斯达斡尔族区",value:"230208"},{label:"龙江县",value:"230221"},{label:"依安县",value:"230223"},{label:"泰来县",value:"230224"},{label:"甘南县",value:"230225"},{label:"富裕县",value:"230227"},{label:"克山县",value:"230229"},{label:"克东县",value:"230230"},{label:"拜泉县",value:"230231"},{label:"讷河市",value:"230281"}],[{label:"鸡冠区",value:"230302"},{label:"恒山区",value:"230303"},{label:"滴道区",value:"230304"},{label:"梨树区",value:"230305"},{label:"城子河区",value:"230306"},{label:"麻山区",value:"230307"},{label:"鸡东县",value:"230321"},{label:"虎林市",value:"230381"},{label:"密山市",value:"230382"}],[{label:"向阳区",value:"230402"},{label:"工农区",value:"230403"},{label:"南山区",value:"230404"},{label:"兴安区",value:"230405"},{label:"东山区",value:"230406"},{label:"兴山区",value:"230407"},{label:"萝北县",value:"230421"},{label:"绥滨县",value:"230422"}],[{label:"尖山区",value:"230502"},{label:"岭东区",value:"230503"},{label:"四方台区",value:"230505"},{label:"宝山区",value:"230506"},{label:"集贤县",value:"230521"},{label:"友谊县",value:"230522"},{label:"宝清县",value:"230523"},{label:"饶河县",value:"230524"}],[{label:"萨尔图区",value:"230602"},{label:"龙凤区",value:"230603"},{label:"让胡路区",value:"230604"},{label:"红岗区",value:"230605"},{label:"大同区",value:"230606"},{label:"肇州县",value:"230621"},{label:"肇源县",value:"230622"},{label:"林甸县",value:"230623"},{label:"杜尔伯特蒙古族自治县",value:"230624"},{label:"大庆高新技术产业开发区",value:"230671"}],[{label:"伊春区",value:"230702"},{label:"南岔区",value:"230703"},{label:"友好区",value:"230704"},{label:"西林区",value:"230705"},{label:"翠峦区",value:"230706"},{label:"新青区",value:"230707"},{label:"美溪区",value:"230708"},{label:"金山屯区",value:"230709"},{label:"五营区",value:"230710"},{label:"乌马河区",value:"230711"},{label:"汤旺河区",value:"230712"},{label:"带岭区",value:"230713"},{label:"乌伊岭区",value:"230714"},{label:"红星区",value:"230715"},{label:"上甘岭区",value:"230716"},{label:"嘉荫县",value:"230722"},{label:"铁力市",value:"230781"}],[{label:"向阳区",value:"230803"},{label:"前进区",value:"230804"},{label:"东风区",value:"230805"},{label:"郊区",value:"230811"},{label:"桦南县",value:"230822"},{label:"桦川县",value:"230826"},{label:"汤原县",value:"230828"},{label:"同江市",value:"230881"},{label:"富锦市",value:"230882"},{label:"抚远市",value:"230883"}],[{label:"新兴区",value:"230902"},{label:"桃山区",value:"230903"},{label:"茄子河区",value:"230904"},{label:"勃利县",value:"230921"}],[{label:"东安区",value:"231002"},{label:"阳明区",value:"231003"},{label:"爱民区",value:"231004"},{label:"西安区",value:"231005"},{label:"林口县",value:"231025"},{label:"牡丹江经济技术开发区",value:"231071"},{label:"绥芬河市",value:"231081"},{label:"海林市",value:"231083"},{label:"宁安市",value:"231084"},{label:"穆棱市",value:"231085"},{label:"东宁市",value:"231086"}],[{label:"爱辉区",value:"231102"},{label:"嫩江县",value:"231121"},{label:"逊克县",value:"231123"},{label:"孙吴县",value:"231124"},{label:"北安市",value:"231181"},{label:"五大连池市",value:"231182"}],[{label:"北林区",value:"231202"},{label:"望奎县",value:"231221"},{label:"兰西县",value:"231222"},{label:"青冈县",value:"231223"},{label:"庆安县",value:"231224"},{label:"明水县",value:"231225"},{label:"绥棱县",value:"231226"},{label:"安达市",value:"231281"},{label:"肇东市",value:"231282"},{label:"海伦市",value:"231283"}],[{label:"加格达奇区",value:"232701"},{label:"松岭区",value:"232702"},{label:"新林区",value:"232703"},{label:"呼中区",value:"232704"},{label:"呼玛县",value:"232721"},{label:"塔河县",value:"232722"},{label:"漠河县",value:"232723"}]],[[{label:"黄浦区",value:"310101"},{label:"徐汇区",value:"310104"},{label:"长宁区",value:"310105"},{label:"静安区",value:"310106"},{label:"普陀区",value:"310107"},{label:"虹口区",value:"310109"},{label:"杨浦区",value:"310110"},{label:"闵行区",value:"310112"},{label:"宝山区",value:"310113"},{label:"嘉定区",value:"310114"},{label:"浦东新区",value:"310115"},{label:"金山区",value:"310116"},{label:"松江区",value:"310117"},{label:"青浦区",value:"310118"},{label:"奉贤区",value:"310120"},{label:"崇明区",value:"310151"}]],[[{label:"玄武区",value:"320102"},{label:"秦淮区",value:"320104"},{label:"建邺区",value:"320105"},{label:"鼓楼区",value:"320106"},{label:"浦口区",value:"320111"},{label:"栖霞区",value:"320113"},{label:"雨花台区",value:"320114"},{label:"江宁区",value:"320115"},{label:"六合区",value:"320116"},{label:"溧水区",value:"320117"},{label:"高淳区",value:"320118"}],[{label:"锡山区",value:"320205"},{label:"惠山区",value:"320206"},{label:"滨湖区",value:"320211"},{label:"梁溪区",value:"320213"},{label:"新吴区",value:"320214"},{label:"江阴市",value:"320281"},{label:"宜兴市",value:"320282"}],[{label:"鼓楼区",value:"320302"},{label:"云龙区",value:"320303"},{label:"贾汪区",value:"320305"},{label:"泉山区",value:"320311"},{label:"铜山区",value:"320312"},{label:"丰县",value:"320321"},{label:"沛县",value:"320322"},{label:"睢宁县",value:"320324"},{label:"徐州经济技术开发区",value:"320371"},{label:"新沂市",value:"320381"},{label:"邳州市",value:"320382"}],[{label:"天宁区",value:"320402"},{label:"钟楼区",value:"320404"},{label:"新北区",value:"320411"},{label:"武进区",value:"320412"},{label:"金坛区",value:"320413"},{label:"溧阳市",value:"320481"}],[{label:"虎丘区",value:"320505"},{label:"吴中区",value:"320506"},{label:"相城区",value:"320507"},{label:"姑苏区",value:"320508"},{label:"吴江区",value:"320509"},{label:"苏州工业园区",value:"320571"},{label:"常熟市",value:"320581"},{label:"张家港市",value:"320582"},{label:"昆山市",value:"320583"},{label:"太仓市",value:"320585"}],[{label:"崇川区",value:"320602"},{label:"港闸区",value:"320611"},{label:"通州区",value:"320612"},{label:"海安县",value:"320621"},{label:"如东县",value:"320623"},{label:"南通经济技术开发区",value:"320671"},{label:"启东市",value:"320681"},{label:"如皋市",value:"320682"},{label:"海门市",value:"320684"}],[{label:"连云区",value:"320703"},{label:"海州区",value:"320706"},{label:"赣榆区",value:"320707"},{label:"东海县",value:"320722"},{label:"灌云县",value:"320723"},{label:"灌南县",value:"320724"},{label:"连云港经济技术开发区",value:"320771"},{label:"连云港高新技术产业开发区",value:"320772"}],[{label:"淮安区",value:"320803"},{label:"淮阴区",value:"320804"},{label:"清江浦区",value:"320812"},{label:"洪泽区",value:"320813"},{label:"涟水县",value:"320826"},{label:"盱眙县",value:"320830"},{label:"金湖县",value:"320831"},{label:"淮安经济技术开发区",value:"320871"}],[{label:"亭湖区",value:"320902"},{label:"盐都区",value:"320903"},{label:"大丰区",value:"320904"},{label:"响水县",value:"320921"},{label:"滨海县",value:"320922"},{label:"阜宁县",value:"320923"},{label:"射阳县",value:"320924"},{label:"建湖县",value:"320925"},{label:"盐城经济技术开发区",value:"320971"},{label:"东台市",value:"320981"}],[{label:"广陵区",value:"321002"},{label:"邗江区",value:"321003"},{label:"江都区",value:"321012"},{label:"宝应县",value:"321023"},{label:"扬州经济技术开发区",value:"321071"},{label:"仪征市",value:"321081"},{label:"高邮市",value:"321084"}],[{label:"京口区",value:"321102"},{label:"润州区",value:"321111"},{label:"丹徒区",value:"321112"},{label:"镇江新区",value:"321171"},{label:"丹阳市",value:"321181"},{label:"扬中市",value:"321182"},{label:"句容市",value:"321183"}],[{label:"海陵区",value:"321202"},{label:"高港区",value:"321203"},{label:"姜堰区",value:"321204"},{label:"泰州医药高新技术产业开发区",value:"321271"},{label:"兴化市",value:"321281"},{label:"靖江市",value:"321282"},{label:"泰兴市",value:"321283"}],[{label:"宿城区",value:"321302"},{label:"宿豫区",value:"321311"},{label:"沭阳县",value:"321322"},{label:"泗阳县",value:"321323"},{label:"泗洪县",value:"321324"},{label:"宿迁经济技术开发区",value:"321371"}]],[[{label:"上城区",value:"330102"},{label:"下城区",value:"330103"},{label:"江干区",value:"330104"},{label:"拱墅区",value:"330105"},{label:"西湖区",value:"330106"},{label:"滨江区",value:"330108"},{label:"萧山区",value:"330109"},{label:"余杭区",value:"330110"},{label:"富阳区",value:"330111"},{label:"临安区",value:"330112"},{label:"桐庐县",value:"330122"},{label:"淳安县",value:"330127"},{label:"建德市",value:"330182"}],[{label:"海曙区",value:"330203"},{label:"江北区",value:"330205"},{label:"北仑区",value:"330206"},{label:"镇海区",value:"330211"},{label:"鄞州区",value:"330212"},{label:"奉化区",value:"330213"},{label:"象山县",value:"330225"},{label:"宁海县",value:"330226"},{label:"余姚市",value:"330281"},{label:"慈溪市",value:"330282"}],[{label:"鹿城区",value:"330302"},{label:"龙湾区",value:"330303"},{label:"瓯海区",value:"330304"},{label:"洞头区",value:"330305"},{label:"永嘉县",value:"330324"},{label:"平阳县",value:"330326"},{label:"苍南县",value:"330327"},{label:"文成县",value:"330328"},{label:"泰顺县",value:"330329"},{label:"温州经济技术开发区",value:"330371"},{label:"瑞安市",value:"330381"},{label:"乐清市",value:"330382"}],[{label:"南湖区",value:"330402"},{label:"秀洲区",value:"330411"},{label:"嘉善县",value:"330421"},{label:"海盐县",value:"330424"},{label:"海宁市",value:"330481"},{label:"平湖市",value:"330482"},{label:"桐乡市",value:"330483"}],[{label:"吴兴区",value:"330502"},{label:"南浔区",value:"330503"},{label:"德清县",value:"330521"},{label:"长兴县",value:"330522"},{label:"安吉县",value:"330523"}],[{label:"越城区",value:"330602"},{label:"柯桥区",value:"330603"},{label:"上虞区",value:"330604"},{label:"新昌县",value:"330624"},{label:"诸暨市",value:"330681"},{label:"嵊州市",value:"330683"}],[{label:"婺城区",value:"330702"},{label:"金东区",value:"330703"},{label:"武义县",value:"330723"},{label:"浦江县",value:"330726"},{label:"磐安县",value:"330727"},{label:"兰溪市",value:"330781"},{label:"义乌市",value:"330782"},{label:"东阳市",value:"330783"},{label:"永康市",value:"330784"}],[{label:"柯城区",value:"330802"},{label:"衢江区",value:"330803"},{label:"常山县",value:"330822"},{label:"开化县",value:"330824"},{label:"龙游县",value:"330825"},{label:"江山市",value:"330881"}],[{label:"定海区",value:"330902"},{label:"普陀区",value:"330903"},{label:"岱山县",value:"330921"},{label:"嵊泗县",value:"330922"}],[{label:"椒江区",value:"331002"},{label:"黄岩区",value:"331003"},{label:"路桥区",value:"331004"},{label:"三门县",value:"331022"},{label:"天台县",value:"331023"},{label:"仙居县",value:"331024"},{label:"温岭市",value:"331081"},{label:"临海市",value:"331082"},{label:"玉环市",value:"331083"}],[{label:"莲都区",value:"331102"},{label:"青田县",value:"331121"},{label:"缙云县",value:"331122"},{label:"遂昌县",value:"331123"},{label:"松阳县",value:"331124"},{label:"云和县",value:"331125"},{label:"庆元县",value:"331126"},{label:"景宁畲族自治县",value:"331127"},{label:"龙泉市",value:"331181"}]],[[{label:"瑶海区",value:"340102"},{label:"庐阳区",value:"340103"},{label:"蜀山区",value:"340104"},{label:"包河区",value:"340111"},{label:"长丰县",value:"340121"},{label:"肥东县",value:"340122"},{label:"肥西县",value:"340123"},{label:"庐江县",value:"340124"},{label:"合肥高新技术产业开发区",value:"340171"},{label:"合肥经济技术开发区",value:"340172"},{label:"合肥新站高新技术产业开发区",value:"340173"},{label:"巢湖市",value:"340181"}],[{label:"镜湖区",value:"340202"},{label:"弋江区",value:"340203"},{label:"鸠江区",value:"340207"},{label:"三山区",value:"340208"},{label:"芜湖县",value:"340221"},{label:"繁昌县",value:"340222"},{label:"南陵县",value:"340223"},{label:"无为县",value:"340225"},{label:"芜湖经济技术开发区",value:"340271"},{label:"安徽芜湖长江大桥经济开发区",value:"340272"}],[{label:"龙子湖区",value:"340302"},{label:"蚌山区",value:"340303"},{label:"禹会区",value:"340304"},{label:"淮上区",value:"340311"},{label:"怀远县",value:"340321"},{label:"五河县",value:"340322"},{label:"固镇县",value:"340323"},{label:"蚌埠市高新技术开发区",value:"340371"},{label:"蚌埠市经济开发区",value:"340372"}],[{label:"大通区",value:"340402"},{label:"田家庵区",value:"340403"},{label:"谢家集区",value:"340404"},{label:"八公山区",value:"340405"},{label:"潘集区",value:"340406"},{label:"凤台县",value:"340421"},{label:"寿县",value:"340422"}],[{label:"花山区",value:"340503"},{label:"雨山区",value:"340504"},{label:"博望区",value:"340506"},{label:"当涂县",value:"340521"},{label:"含山县",value:"340522"},{label:"和县",value:"340523"}],[{label:"杜集区",value:"340602"},{label:"相山区",value:"340603"},{label:"烈山区",value:"340604"},{label:"濉溪县",value:"340621"}],[{label:"铜官区",value:"340705"},{label:"义安区",value:"340706"},{label:"郊区",value:"340711"},{label:"枞阳县",value:"340722"}],[{label:"迎江区",value:"340802"},{label:"大观区",value:"340803"},{label:"宜秀区",value:"340811"},{label:"怀宁县",value:"340822"},{label:"潜山县",value:"340824"},{label:"太湖县",value:"340825"},{label:"宿松县",value:"340826"},{label:"望江县",value:"340827"},{label:"岳西县",value:"340828"},{label:"安徽安庆经济开发区",value:"340871"},{label:"桐城市",value:"340881"}],[{label:"屯溪区",value:"341002"},{label:"黄山区",value:"341003"},{label:"徽州区",value:"341004"},{label:"歙县",value:"341021"},{label:"休宁县",value:"341022"},{label:"黟县",value:"341023"},{label:"祁门县",value:"341024"}],[{label:"琅琊区",value:"341102"},{label:"南谯区",value:"341103"},{label:"来安县",value:"341122"},{label:"全椒县",value:"341124"},{label:"定远县",value:"341125"},{label:"凤阳县",value:"341126"},{label:"苏滁现代产业园",value:"341171"},{label:"滁州经济技术开发区",value:"341172"},{label:"天长市",value:"341181"},{label:"明光市",value:"341182"}],[{label:"颍州区",value:"341202"},{label:"颍东区",value:"341203"},{label:"颍泉区",value:"341204"},{label:"临泉县",value:"341221"},{label:"太和县",value:"341222"},{label:"阜南县",value:"341225"},{label:"颍上县",value:"341226"},{label:"阜阳合肥现代产业园区",value:"341271"},{label:"阜阳经济技术开发区",value:"341272"},{label:"界首市",value:"341282"}],[{label:"埇桥区",value:"341302"},{label:"砀山县",value:"341321"},{label:"萧县",value:"341322"},{label:"灵璧县",value:"341323"},{label:"泗县",value:"341324"},{label:"宿州马鞍山现代产业园区",value:"341371"},{label:"宿州经济技术开发区",value:"341372"}],[{label:"金安区",value:"341502"},{label:"裕安区",value:"341503"},{label:"叶集区",value:"341504"},{label:"霍邱县",value:"341522"},{label:"舒城县",value:"341523"},{label:"金寨县",value:"341524"},{label:"霍山县",value:"341525"}],[{label:"谯城区",value:"341602"},{label:"涡阳县",value:"341621"},{label:"蒙城县",value:"341622"},{label:"利辛县",value:"341623"}],[{label:"贵池区",value:"341702"},{label:"东至县",value:"341721"},{label:"石台县",value:"341722"},{label:"青阳县",value:"341723"}],[{label:"宣州区",value:"341802"},{label:"郎溪县",value:"341821"},{label:"广德县",value:"341822"},{label:"泾县",value:"341823"},{label:"绩溪县",value:"341824"},{label:"旌德县",value:"341825"},{label:"宣城市经济开发区",value:"341871"},{label:"宁国市",value:"341881"}]],[[{label:"鼓楼区",value:"350102"},{label:"台江区",value:"350103"},{label:"仓山区",value:"350104"},{label:"马尾区",value:"350105"},{label:"晋安区",value:"350111"},{label:"闽侯县",value:"350121"},{label:"连江县",value:"350122"},{label:"罗源县",value:"350123"},{label:"闽清县",value:"350124"},{label:"永泰县",value:"350125"},{label:"平潭县",value:"350128"},{label:"福清市",value:"350181"},{label:"长乐市",value:"350182"}],[{label:"思明区",value:"350203"},{label:"海沧区",value:"350205"},{label:"湖里区",value:"350206"},{label:"集美区",value:"350211"},{label:"同安区",value:"350212"},{label:"翔安区",value:"350213"}],[{label:"城厢区",value:"350302"},{label:"涵江区",value:"350303"},{label:"荔城区",value:"350304"},{label:"秀屿区",value:"350305"},{label:"仙游县",value:"350322"}],[{label:"梅列区",value:"350402"},{label:"三元区",value:"350403"},{label:"明溪县",value:"350421"},{label:"清流县",value:"350423"},{label:"宁化县",value:"350424"},{label:"大田县",value:"350425"},{label:"尤溪县",value:"350426"},{label:"沙县",value:"350427"},{label:"将乐县",value:"350428"},{label:"泰宁县",value:"350429"},{label:"建宁县",value:"350430"},{label:"永安市",value:"350481"}],[{label:"鲤城区",value:"350502"},{label:"丰泽区",value:"350503"},{label:"洛江区",value:"350504"},{label:"泉港区",value:"350505"},{label:"惠安县",value:"350521"},{label:"安溪县",value:"350524"},{label:"永春县",value:"350525"},{label:"德化县",value:"350526"},{label:"金门县",value:"350527"},{label:"石狮市",value:"350581"},{label:"晋江市",value:"350582"},{label:"南安市",value:"350583"}],[{label:"芗城区",value:"350602"},{label:"龙文区",value:"350603"},{label:"云霄县",value:"350622"},{label:"漳浦县",value:"350623"},{label:"诏安县",value:"350624"},{label:"长泰县",value:"350625"},{label:"东山县",value:"350626"},{label:"南靖县",value:"350627"},{label:"平和县",value:"350628"},{label:"华安县",value:"350629"},{label:"龙海市",value:"350681"}],[{label:"延平区",value:"350702"},{label:"建阳区",value:"350703"},{label:"顺昌县",value:"350721"},{label:"浦城县",value:"350722"},{label:"光泽县",value:"350723"},{label:"松溪县",value:"350724"},{label:"政和县",value:"350725"},{label:"邵武市",value:"350781"},{label:"武夷山市",value:"350782"},{label:"建瓯市",value:"350783"}],[{label:"新罗区",value:"350802"},{label:"永定区",value:"350803"},{label:"长汀县",value:"350821"},{label:"上杭县",value:"350823"},{label:"武平县",value:"350824"},{label:"连城县",value:"350825"},{label:"漳平市",value:"350881"}],[{label:"蕉城区",value:"350902"},{label:"霞浦县",value:"350921"},{label:"古田县",value:"350922"},{label:"屏南县",value:"350923"},{label:"寿宁县",value:"350924"},{label:"周宁县",value:"350925"},{label:"柘荣县",value:"350926"},{label:"福安市",value:"350981"},{label:"福鼎市",value:"350982"}]],[[{label:"东湖区",value:"360102"},{label:"西湖区",value:"360103"},{label:"青云谱区",value:"360104"},{label:"湾里区",value:"360105"},{label:"青山湖区",value:"360111"},{label:"新建区",value:"360112"},{label:"南昌县",value:"360121"},{label:"安义县",value:"360123"},{label:"进贤县",value:"360124"}],[{label:"昌江区",value:"360202"},{label:"珠山区",value:"360203"},{label:"浮梁县",value:"360222"},{label:"乐平市",value:"360281"}],[{label:"安源区",value:"360302"},{label:"湘东区",value:"360313"},{label:"莲花县",value:"360321"},{label:"上栗县",value:"360322"},{label:"芦溪县",value:"360323"}],[{label:"濂溪区",value:"360402"},{label:"浔阳区",value:"360403"},{label:"柴桑区",value:"360404"},{label:"武宁县",value:"360423"},{label:"修水县",value:"360424"},{label:"永修县",value:"360425"},{label:"德安县",value:"360426"},{label:"都昌县",value:"360428"},{label:"湖口县",value:"360429"},{label:"彭泽县",value:"360430"},{label:"瑞昌市",value:"360481"},{label:"共青城市",value:"360482"},{label:"庐山市",value:"360483"}],[{label:"渝水区",value:"360502"},{label:"分宜县",value:"360521"}],[{label:"月湖区",value:"360602"},{label:"余江县",value:"360622"},{label:"贵溪市",value:"360681"}],[{label:"章贡区",value:"360702"},{label:"南康区",value:"360703"},{label:"赣县区",value:"360704"},{label:"信丰县",value:"360722"},{label:"大余县",value:"360723"},{label:"上犹县",value:"360724"},{label:"崇义县",value:"360725"},{label:"安远县",value:"360726"},{label:"龙南县",value:"360727"},{label:"定南县",value:"360728"},{label:"全南县",value:"360729"},{label:"宁都县",value:"360730"},{label:"于都县",value:"360731"},{label:"兴国县",value:"360732"},{label:"会昌县",value:"360733"},{label:"寻乌县",value:"360734"},{label:"石城县",value:"360735"},{label:"瑞金市",value:"360781"}],[{label:"吉州区",value:"360802"},{label:"青原区",value:"360803"},{label:"吉安县",value:"360821"},{label:"吉水县",value:"360822"},{label:"峡江县",value:"360823"},{label:"新干县",value:"360824"},{label:"永丰县",value:"360825"},{label:"泰和县",value:"360826"},{label:"遂川县",value:"360827"},{label:"万安县",value:"360828"},{label:"安福县",value:"360829"},{label:"永新县",value:"360830"},{label:"井冈山市",value:"360881"}],[{label:"袁州区",value:"360902"},{label:"奉新县",value:"360921"},{label:"万载县",value:"360922"},{label:"上高县",value:"360923"},{label:"宜丰县",value:"360924"},{label:"靖安县",value:"360925"},{label:"铜鼓县",value:"360926"},{label:"丰城市",value:"360981"},{label:"樟树市",value:"360982"},{label:"高安市",value:"360983"}],[{label:"临川区",value:"361002"},{label:"东乡区",value:"361003"},{label:"南城县",value:"361021"},{label:"黎川县",value:"361022"},{label:"南丰县",value:"361023"},{label:"崇仁县",value:"361024"},{label:"乐安县",value:"361025"},{label:"宜黄县",value:"361026"},{label:"金溪县",value:"361027"},{label:"资溪县",value:"361028"},{label:"广昌县",value:"361030"}],[{label:"信州区",value:"361102"},{label:"广丰区",value:"361103"},{label:"上饶县",value:"361121"},{label:"玉山县",value:"361123"},{label:"铅山县",value:"361124"},{label:"横峰县",value:"361125"},{label:"弋阳县",value:"361126"},{label:"余干县",value:"361127"},{label:"鄱阳县",value:"361128"},{label:"万年县",value:"361129"},{label:"婺源县",value:"361130"},{label:"德兴市",value:"361181"}]],[[{label:"历下区",value:"370102"},{label:"市中区",value:"370103"},{label:"槐荫区",value:"370104"},{label:"天桥区",value:"370105"},{label:"历城区",value:"370112"},{label:"长清区",value:"370113"},{label:"章丘区",value:"370114"},{label:"平阴县",value:"370124"},{label:"济阳县",value:"370125"},{label:"商河县",value:"370126"},{label:"济南高新技术产业开发区",value:"370171"}],[{label:"市南区",value:"370202"},{label:"市北区",value:"370203"},{label:"黄岛区",value:"370211"},{label:"崂山区",value:"370212"},{label:"李沧区",value:"370213"},{label:"城阳区",value:"370214"},{label:"即墨区",value:"370215"},{label:"青岛高新技术产业开发区",value:"370271"},{label:"胶州市",value:"370281"},{label:"平度市",value:"370283"},{label:"莱西市",value:"370285"}],[{label:"淄川区",value:"370302"},{label:"张店区",value:"370303"},{label:"博山区",value:"370304"},{label:"临淄区",value:"370305"},{label:"周村区",value:"370306"},{label:"桓台县",value:"370321"},{label:"高青县",value:"370322"},{label:"沂源县",value:"370323"}],[{label:"市中区",value:"370402"},{label:"薛城区",value:"370403"},{label:"峄城区",value:"370404"},{label:"台儿庄区",value:"370405"},{label:"山亭区",value:"370406"},{label:"滕州市",value:"370481"}],[{label:"东营区",value:"370502"},{label:"河口区",value:"370503"},{label:"垦利区",value:"370505"},{label:"利津县",value:"370522"},{label:"广饶县",value:"370523"},{label:"东营经济技术开发区",value:"370571"},{label:"东营港经济开发区",value:"370572"}],[{label:"芝罘区",value:"370602"},{label:"福山区",value:"370611"},{label:"牟平区",value:"370612"},{label:"莱山区",value:"370613"},{label:"长岛县",value:"370634"},{label:"烟台高新技术产业开发区",value:"370671"},{label:"烟台经济技术开发区",value:"370672"},{label:"龙口市",value:"370681"},{label:"莱阳市",value:"370682"},{label:"莱州市",value:"370683"},{label:"蓬莱市",value:"370684"},{label:"招远市",value:"370685"},{label:"栖霞市",value:"370686"},{label:"海阳市",value:"370687"}],[{label:"潍城区",value:"370702"},{label:"寒亭区",value:"370703"},{label:"坊子区",value:"370704"},{label:"奎文区",value:"370705"},{label:"临朐县",value:"370724"},{label:"昌乐县",value:"370725"},{label:"潍坊滨海经济技术开发区",value:"370772"},{label:"青州市",value:"370781"},{label:"诸城市",value:"370782"},{label:"寿光市",value:"370783"},{label:"安丘市",value:"370784"},{label:"高密市",value:"370785"},{label:"昌邑市",value:"370786"}],[{label:"任城区",value:"370811"},{label:"兖州区",value:"370812"},{label:"微山县",value:"370826"},{label:"鱼台县",value:"370827"},{label:"金乡县",value:"370828"},{label:"嘉祥县",value:"370829"},{label:"汶上县",value:"370830"},{label:"泗水县",value:"370831"},{label:"梁山县",value:"370832"},{label:"济宁高新技术产业开发区",value:"370871"},{label:"曲阜市",value:"370881"},{label:"邹城市",value:"370883"}],[{label:"泰山区",value:"370902"},{label:"岱岳区",value:"370911"},{label:"宁阳县",value:"370921"},{label:"东平县",value:"370923"},{label:"新泰市",value:"370982"},{label:"肥城市",value:"370983"}],[{label:"环翠区",value:"371002"},{label:"文登区",value:"371003"},{label:"威海火炬高技术产业开发区",value:"371071"},{label:"威海经济技术开发区",value:"371072"},{label:"威海临港经济技术开发区",value:"371073"},{label:"荣成市",value:"371082"},{label:"乳山市",value:"371083"}],[{label:"东港区",value:"371102"},{label:"岚山区",value:"371103"},{label:"五莲县",value:"371121"},{label:"莒县",value:"371122"},{label:"日照经济技术开发区",value:"371171"},{label:"日照国际海洋城",value:"371172"}],[{label:"莱城区",value:"371202"},{label:"钢城区",value:"371203"}],[{label:"兰山区",value:"371302"},{label:"罗庄区",value:"371311"},{label:"河东区",value:"371312"},{label:"沂南县",value:"371321"},{label:"郯城县",value:"371322"},{label:"沂水县",value:"371323"},{label:"兰陵县",value:"371324"},{label:"费县",value:"371325"},{label:"平邑县",value:"371326"},{label:"莒南县",value:"371327"},{label:"蒙阴县",value:"371328"},{label:"临沭县",value:"371329"},{label:"临沂高新技术产业开发区",value:"371371"},{label:"临沂经济技术开发区",value:"371372"},{label:"临沂临港经济开发区",value:"371373"}],[{label:"德城区",value:"371402"},{label:"陵城区",value:"371403"},{label:"宁津县",value:"371422"},{label:"庆云县",value:"371423"},{label:"临邑县",value:"371424"},{label:"齐河县",value:"371425"},{label:"平原县",value:"371426"},{label:"夏津县",value:"371427"},{label:"武城县",value:"371428"},{label:"德州经济技术开发区",value:"371471"},{label:"德州运河经济开发区",value:"371472"},{label:"乐陵市",value:"371481"},{label:"禹城市",value:"371482"}],[{label:"东昌府区",value:"371502"},{label:"阳谷县",value:"371521"},{label:"莘县",value:"371522"},{label:"茌平县",value:"371523"},{label:"东阿县",value:"371524"},{label:"冠县",value:"371525"},{label:"高唐县",value:"371526"},{label:"临清市",value:"371581"}],[{label:"滨城区",value:"371602"},{label:"沾化区",value:"371603"},{label:"惠民县",value:"371621"},{label:"阳信县",value:"371622"},{label:"无棣县",value:"371623"},{label:"博兴县",value:"371625"},{label:"邹平县",value:"371626"}],[{label:"牡丹区",value:"371702"},{label:"定陶区",value:"371703"},{label:"曹县",value:"371721"},{label:"单县",value:"371722"},{label:"成武县",value:"371723"},{label:"巨野县",value:"371724"},{label:"郓城县",value:"371725"},{label:"鄄城县",value:"371726"},{label:"东明县",value:"371728"},{label:"菏泽经济技术开发区",value:"371771"},{label:"菏泽高新技术开发区",value:"371772"}]],[[{label:"中原区",value:"410102"},{label:"二七区",value:"410103"},{label:"管城回族区",value:"410104"},{label:"金水区",value:"410105"},{label:"上街区",value:"410106"},{label:"惠济区",value:"410108"},{label:"中牟县",value:"410122"},{label:"郑州经济技术开发区",value:"410171"},{label:"郑州高新技术产业开发区",value:"410172"},{label:"郑州航空港经济综合实验区",value:"410173"},{label:"巩义市",value:"410181"},{label:"荥阳市",value:"410182"},{label:"新密市",value:"410183"},{label:"新郑市",value:"410184"},{label:"登封市",value:"410185"}],[{label:"龙亭区",value:"410202"},{label:"顺河回族区",value:"410203"},{label:"鼓楼区",value:"410204"},{label:"禹王台区",value:"410205"},{label:"祥符区",value:"410212"},{label:"杞县",value:"410221"},{label:"通许县",value:"410222"},{label:"尉氏县",value:"410223"},{label:"兰考县",value:"410225"}],[{label:"老城区",value:"410302"},{label:"西工区",value:"410303"},{label:"瀍河回族区",value:"410304"},{label:"涧西区",value:"410305"},{label:"吉利区",value:"410306"},{label:"洛龙区",value:"410311"},{label:"孟津县",value:"410322"},{label:"新安县",value:"410323"},{label:"栾川县",value:"410324"},{label:"嵩县",value:"410325"},{label:"汝阳县",value:"410326"},{label:"宜阳县",value:"410327"},{label:"洛宁县",value:"410328"},{label:"伊川县",value:"410329"},{label:"洛阳高新技术产业开发区",value:"410371"},{label:"偃师市",value:"410381"}],[{label:"新华区",value:"410402"},{label:"卫东区",value:"410403"},{label:"石龙区",value:"410404"},{label:"湛河区",value:"410411"},{label:"宝丰县",value:"410421"},{label:"叶县",value:"410422"},{label:"鲁山县",value:"410423"},{label:"郏县",value:"410425"},{label:"平顶山高新技术产业开发区",value:"410471"},{label:"平顶山市新城区",value:"410472"},{label:"舞钢市",value:"410481"},{label:"汝州市",value:"410482"}],[{label:"文峰区",value:"410502"},{label:"北关区",value:"410503"},{label:"殷都区",value:"410505"},{label:"龙安区",value:"410506"},{label:"安阳县",value:"410522"},{label:"汤阴县",value:"410523"},{label:"滑县",value:"410526"},{label:"内黄县",value:"410527"},{label:"安阳高新技术产业开发区",value:"410571"},{label:"林州市",value:"410581"}],[{label:"鹤山区",value:"410602"},{label:"山城区",value:"410603"},{label:"淇滨区",value:"410611"},{label:"浚县",value:"410621"},{label:"淇县",value:"410622"},{label:"鹤壁经济技术开发区",value:"410671"}],[{label:"红旗区",value:"410702"},{label:"卫滨区",value:"410703"},{label:"凤泉区",value:"410704"},{label:"牧野区",value:"410711"},{label:"新乡县",value:"410721"},{label:"获嘉县",value:"410724"},{label:"原阳县",value:"410725"},{label:"延津县",value:"410726"},{label:"封丘县",value:"410727"},{label:"长垣县",value:"410728"},{label:"新乡高新技术产业开发区",value:"410771"},{label:"新乡经济技术开发区",value:"410772"},{label:"新乡市平原城乡一体化示范区",value:"410773"},{label:"卫辉市",value:"410781"},{label:"辉县市",value:"410782"}],[{label:"解放区",value:"410802"},{label:"中站区",value:"410803"},{label:"马村区",value:"410804"},{label:"山阳区",value:"410811"},{label:"修武县",value:"410821"},{label:"博爱县",value:"410822"},{label:"武陟县",value:"410823"},{label:"温县",value:"410825"},{label:"焦作城乡一体化示范区",value:"410871"},{label:"沁阳市",value:"410882"},{label:"孟州市",value:"410883"}],[{label:"华龙区",value:"410902"},{label:"清丰县",value:"410922"},{label:"南乐县",value:"410923"},{label:"范县",value:"410926"},{label:"台前县",value:"410927"},{label:"濮阳县",value:"410928"},{label:"河南濮阳工业园区",value:"410971"},{label:"濮阳经济技术开发区",value:"410972"}],[{label:"魏都区",value:"411002"},{label:"建安区",value:"411003"},{label:"鄢陵县",value:"411024"},{label:"襄城县",value:"411025"},{label:"许昌经济技术开发区",value:"411071"},{label:"禹州市",value:"411081"},{label:"长葛市",value:"411082"}],[{label:"源汇区",value:"411102"},{label:"郾城区",value:"411103"},{label:"召陵区",value:"411104"},{label:"舞阳县",value:"411121"},{label:"临颍县",value:"411122"},{label:"漯河经济技术开发区",value:"411171"}],[{label:"湖滨区",value:"411202"},{label:"陕州区",value:"411203"},{label:"渑池县",value:"411221"},{label:"卢氏县",value:"411224"},{label:"河南三门峡经济开发区",value:"411271"},{label:"义马市",value:"411281"},{label:"灵宝市",value:"411282"}],[{label:"宛城区",value:"411302"},{label:"卧龙区",value:"411303"},{label:"南召县",value:"411321"},{label:"方城县",value:"411322"},{label:"西峡县",value:"411323"},{label:"镇平县",value:"411324"},{label:"内乡县",value:"411325"},{label:"淅川县",value:"411326"},{label:"社旗县",value:"411327"},{label:"唐河县",value:"411328"},{label:"新野县",value:"411329"},{label:"桐柏县",value:"411330"},{label:"南阳高新技术产业开发区",value:"411371"},{label:"南阳市城乡一体化示范区",value:"411372"},{label:"邓州市",value:"411381"}],[{label:"梁园区",value:"411402"},{label:"睢阳区",value:"411403"},{label:"民权县",value:"411421"},{label:"睢县",value:"411422"},{label:"宁陵县",value:"411423"},{label:"柘城县",value:"411424"},{label:"虞城县",value:"411425"},{label:"夏邑县",value:"411426"},{label:"豫东综合物流产业聚集区",value:"411471"},{label:"河南商丘经济开发区",value:"411472"},{label:"永城市",value:"411481"}],[{label:"浉河区",value:"411502"},{label:"平桥区",value:"411503"},{label:"罗山县",value:"411521"},{label:"光山县",value:"411522"},{label:"新县",value:"411523"},{label:"商城县",value:"411524"},{label:"固始县",value:"411525"},{label:"潢川县",value:"411526"},{label:"淮滨县",value:"411527"},{label:"息县",value:"411528"},{label:"信阳高新技术产业开发区",value:"411571"}],[{label:"川汇区",value:"411602"},{label:"扶沟县",value:"411621"},{label:"西华县",value:"411622"},{label:"商水县",value:"411623"},{label:"沈丘县",value:"411624"},{label:"郸城县",value:"411625"},{label:"淮阳县",value:"411626"},{label:"太康县",value:"411627"},{label:"鹿邑县",value:"411628"},{label:"河南周口经济开发区",value:"411671"},{label:"项城市",value:"411681"}],[{label:"驿城区",value:"411702"},{label:"西平县",value:"411721"},{label:"上蔡县",value:"411722"},{label:"平舆县",value:"411723"},{label:"正阳县",value:"411724"},{label:"确山县",value:"411725"},{label:"泌阳县",value:"411726"},{label:"汝南县",value:"411727"},{label:"遂平县",value:"411728"},{label:"新蔡县",value:"411729"},{label:"河南驻马店经济开发区",value:"411771"}],[{label:"济源市",value:"419001"}]],[[{label:"江岸区",value:"420102"},{label:"江汉区",value:"420103"},{label:"硚口区",value:"420104"},{label:"汉阳区",value:"420105"},{label:"武昌区",value:"420106"},{label:"青山区",value:"420107"},{label:"洪山区",value:"420111"},{label:"东西湖区",value:"420112"},{label:"汉南区",value:"420113"},{label:"蔡甸区",value:"420114"},{label:"江夏区",value:"420115"},{label:"黄陂区",value:"420116"},{label:"新洲区",value:"420117"}],[{label:"黄石港区",value:"420202"},{label:"西塞山区",value:"420203"},{label:"下陆区",value:"420204"},{label:"铁山区",value:"420205"},{label:"阳新县",value:"420222"},{label:"大冶市",value:"420281"}],[{label:"茅箭区",value:"420302"},{label:"张湾区",value:"420303"},{label:"郧阳区",value:"420304"},{label:"郧西县",value:"420322"},{label:"竹山县",value:"420323"},{label:"竹溪县",value:"420324"},{label:"房县",value:"420325"},{label:"丹江口市",value:"420381"}],[{label:"西陵区",value:"420502"},{label:"伍家岗区",value:"420503"},{label:"点军区",value:"420504"},{label:"猇亭区",value:"420505"},{label:"夷陵区",value:"420506"},{label:"远安县",value:"420525"},{label:"兴山县",value:"420526"},{label:"秭归县",value:"420527"},{label:"长阳土家族自治县",value:"420528"},{label:"五峰土家族自治县",value:"420529"},{label:"宜都市",value:"420581"},{label:"当阳市",value:"420582"},{label:"枝江市",value:"420583"}],[{label:"襄城区",value:"420602"},{label:"樊城区",value:"420606"},{label:"襄州区",value:"420607"},{label:"南漳县",value:"420624"},{label:"谷城县",value:"420625"},{label:"保康县",value:"420626"},{label:"老河口市",value:"420682"},{label:"枣阳市",value:"420683"},{label:"宜城市",value:"420684"}],[{label:"梁子湖区",value:"420702"},{label:"华容区",value:"420703"},{label:"鄂城区",value:"420704"}],[{label:"东宝区",value:"420802"},{label:"掇刀区",value:"420804"},{label:"京山县",value:"420821"},{label:"沙洋县",value:"420822"},{label:"钟祥市",value:"420881"}],[{label:"孝南区",value:"420902"},{label:"孝昌县",value:"420921"},{label:"大悟县",value:"420922"},{label:"云梦县",value:"420923"},{label:"应城市",value:"420981"},{label:"安陆市",value:"420982"},{label:"汉川市",value:"420984"}],[{label:"沙市区",value:"421002"},{label:"荆州区",value:"421003"},{label:"公安县",value:"421022"},{label:"监利县",value:"421023"},{label:"江陵县",value:"421024"},{label:"荆州经济技术开发区",value:"421071"},{label:"石首市",value:"421081"},{label:"洪湖市",value:"421083"},{label:"松滋市",value:"421087"}],[{label:"黄州区",value:"421102"},{label:"团风县",value:"421121"},{label:"红安县",value:"421122"},{label:"罗田县",value:"421123"},{label:"英山县",value:"421124"},{label:"浠水县",value:"421125"},{label:"蕲春县",value:"421126"},{label:"黄梅县",value:"421127"},{label:"龙感湖管理区",value:"421171"},{label:"麻城市",value:"421181"},{label:"武穴市",value:"421182"}],[{label:"咸安区",value:"421202"},{label:"嘉鱼县",value:"421221"},{label:"通城县",value:"421222"},{label:"崇阳县",value:"421223"},{label:"通山县",value:"421224"},{label:"赤壁市",value:"421281"}],[{label:"曾都区",value:"421303"},{label:"随县",value:"421321"},{label:"广水市",value:"421381"}],[{label:"恩施市",value:"422801"},{label:"利川市",value:"422802"},{label:"建始县",value:"422822"},{label:"巴东县",value:"422823"},{label:"宣恩县",value:"422825"},{label:"咸丰县",value:"422826"},{label:"来凤县",value:"422827"},{label:"鹤峰县",value:"422828"}],[{label:"仙桃市",value:"429004"},{label:"潜江市",value:"429005"},{label:"天门市",value:"429006"},{label:"神农架林区",value:"429021"}]],[[{label:"芙蓉区",value:"430102"},{label:"天心区",value:"430103"},{label:"岳麓区",value:"430104"},{label:"开福区",value:"430105"},{label:"雨花区",value:"430111"},{label:"望城区",value:"430112"},{label:"长沙县",value:"430121"},{label:"浏阳市",value:"430181"},{label:"宁乡市",value:"430182"}],[{label:"荷塘区",value:"430202"},{label:"芦淞区",value:"430203"},{label:"石峰区",value:"430204"},{label:"天元区",value:"430211"},{label:"株洲县",value:"430221"},{label:"攸县",value:"430223"},{label:"茶陵县",value:"430224"},{label:"炎陵县",value:"430225"},{label:"云龙示范区",value:"430271"},{label:"醴陵市",value:"430281"}],[{label:"雨湖区",value:"430302"},{label:"岳塘区",value:"430304"},{label:"湘潭县",value:"430321"},{label:"湖南湘潭高新技术产业园区",value:"430371"},{label:"湘潭昭山示范区",value:"430372"},{label:"湘潭九华示范区",value:"430373"},{label:"湘乡市",value:"430381"},{label:"韶山市",value:"430382"}],[{label:"珠晖区",value:"430405"},{label:"雁峰区",value:"430406"},{label:"石鼓区",value:"430407"},{label:"蒸湘区",value:"430408"},{label:"南岳区",value:"430412"},{label:"衡阳县",value:"430421"},{label:"衡南县",value:"430422"},{label:"衡山县",value:"430423"},{label:"衡东县",value:"430424"},{label:"祁东县",value:"430426"},{label:"衡阳综合保税区",value:"430471"},{label:"湖南衡阳高新技术产业园区",value:"430472"},{label:"湖南衡阳松木经济开发区",value:"430473"},{label:"耒阳市",value:"430481"},{label:"常宁市",value:"430482"}],[{label:"双清区",value:"430502"},{label:"大祥区",value:"430503"},{label:"北塔区",value:"430511"},{label:"邵东县",value:"430521"},{label:"新邵县",value:"430522"},{label:"邵阳县",value:"430523"},{label:"隆回县",value:"430524"},{label:"洞口县",value:"430525"},{label:"绥宁县",value:"430527"},{label:"新宁县",value:"430528"},{label:"城步苗族自治县",value:"430529"},{label:"武冈市",value:"430581"}],[{label:"岳阳楼区",value:"430602"},{label:"云溪区",value:"430603"},{label:"君山区",value:"430611"},{label:"岳阳县",value:"430621"},{label:"华容县",value:"430623"},{label:"湘阴县",value:"430624"},{label:"平江县",value:"430626"},{label:"岳阳市屈原管理区",value:"430671"},{label:"汨罗市",value:"430681"},{label:"临湘市",value:"430682"}],[{label:"武陵区",value:"430702"},{label:"鼎城区",value:"430703"},{label:"安乡县",value:"430721"},{label:"汉寿县",value:"430722"},{label:"澧县",value:"430723"},{label:"临澧县",value:"430724"},{label:"桃源县",value:"430725"},{label:"石门县",value:"430726"},{label:"常德市西洞庭管理区",value:"430771"},{label:"津市市",value:"430781"}],[{label:"永定区",value:"430802"},{label:"武陵源区",value:"430811"},{label:"慈利县",value:"430821"},{label:"桑植县",value:"430822"}],[{label:"资阳区",value:"430902"},{label:"赫山区",value:"430903"},{label:"南县",value:"430921"},{label:"桃江县",value:"430922"},{label:"安化县",value:"430923"},{label:"益阳市大通湖管理区",value:"430971"},{label:"湖南益阳高新技术产业园区",value:"430972"},{label:"沅江市",value:"430981"}],[{label:"北湖区",value:"431002"},{label:"苏仙区",value:"431003"},{label:"桂阳县",value:"431021"},{label:"宜章县",value:"431022"},{label:"永兴县",value:"431023"},{label:"嘉禾县",value:"431024"},{label:"临武县",value:"431025"},{label:"汝城县",value:"431026"},{label:"桂东县",value:"431027"},{label:"安仁县",value:"431028"},{label:"资兴市",value:"431081"}],[{label:"零陵区",value:"431102"},{label:"冷水滩区",value:"431103"},{label:"祁阳县",value:"431121"},{label:"东安县",value:"431122"},{label:"双牌县",value:"431123"},{label:"道县",value:"431124"},{label:"江永县",value:"431125"},{label:"宁远县",value:"431126"},{label:"蓝山县",value:"431127"},{label:"新田县",value:"431128"},{label:"江华瑶族自治县",value:"431129"},{label:"永州经济技术开发区",value:"431171"},{label:"永州市金洞管理区",value:"431172"},{label:"永州市回龙圩管理区",value:"431173"}],[{label:"鹤城区",value:"431202"},{label:"中方县",value:"431221"},{label:"沅陵县",value:"431222"},{label:"辰溪县",value:"431223"},{label:"溆浦县",value:"431224"},{label:"会同县",value:"431225"},{label:"麻阳苗族自治县",value:"431226"},{label:"新晃侗族自治县",value:"431227"},{label:"芷江侗族自治县",value:"431228"},{label:"靖州苗族侗族自治县",value:"431229"},{label:"通道侗族自治县",value:"431230"},{label:"怀化市洪江管理区",value:"431271"},{label:"洪江市",value:"431281"}],[{label:"娄星区",value:"431302"},{label:"双峰县",value:"431321"},{label:"新化县",value:"431322"},{label:"冷水江市",value:"431381"},{label:"涟源市",value:"431382"}],[{label:"吉首市",value:"433101"},{label:"泸溪县",value:"433122"},{label:"凤凰县",value:"433123"},{label:"花垣县",value:"433124"},{label:"保靖县",value:"433125"},{label:"古丈县",value:"433126"},{label:"永顺县",value:"433127"},{label:"龙山县",value:"433130"},{label:"湖南吉首经济开发区",value:"433172"},{label:"湖南永顺经济开发区",value:"433173"}]],[[{label:"荔湾区",value:"440103"},{label:"越秀区",value:"440104"},{label:"海珠区",value:"440105"},{label:"天河区",value:"440106"},{label:"白云区",value:"440111"},{label:"黄埔区",value:"440112"},{label:"番禺区",value:"440113"},{label:"花都区",value:"440114"},{label:"南沙区",value:"440115"},{label:"从化区",value:"440117"},{label:"增城区",value:"440118"}],[{label:"武江区",value:"440203"},{label:"浈江区",value:"440204"},{label:"曲江区",value:"440205"},{label:"始兴县",value:"440222"},{label:"仁化县",value:"440224"},{label:"翁源县",value:"440229"},{label:"乳源瑶族自治县",value:"440232"},{label:"新丰县",value:"440233"},{label:"乐昌市",value:"440281"},{label:"南雄市",value:"440282"}],[{label:"罗湖区",value:"440303"},{label:"福田区",value:"440304"},{label:"南山区",value:"440305"},{label:"宝安区",value:"440306"},{label:"龙岗区",value:"440307"},{label:"盐田区",value:"440308"},{label:"龙华区",value:"440309"},{label:"坪山区",value:"440310"}],[{label:"香洲区",value:"440402"},{label:"斗门区",value:"440403"},{label:"金湾区",value:"440404"}],[{label:"龙湖区",value:"440507"},{label:"金平区",value:"440511"},{label:"濠江区",value:"440512"},{label:"潮阳区",value:"440513"},{label:"潮南区",value:"440514"},{label:"澄海区",value:"440515"},{label:"南澳县",value:"440523"}],[{label:"禅城区",value:"440604"},{label:"南海区",value:"440605"},{label:"顺德区",value:"440606"},{label:"三水区",value:"440607"},{label:"高明区",value:"440608"}],[{label:"蓬江区",value:"440703"},{label:"江海区",value:"440704"},{label:"新会区",value:"440705"},{label:"台山市",value:"440781"},{label:"开平市",value:"440783"},{label:"鹤山市",value:"440784"},{label:"恩平市",value:"440785"}],[{label:"赤坎区",value:"440802"},{label:"霞山区",value:"440803"},{label:"坡头区",value:"440804"},{label:"麻章区",value:"440811"},{label:"遂溪县",value:"440823"},{label:"徐闻县",value:"440825"},{label:"廉江市",value:"440881"},{label:"雷州市",value:"440882"},{label:"吴川市",value:"440883"}],[{label:"茂南区",value:"440902"},{label:"电白区",value:"440904"},{label:"高州市",value:"440981"},{label:"化州市",value:"440982"},{label:"信宜市",value:"440983"}],[{label:"端州区",value:"441202"},{label:"鼎湖区",value:"441203"},{label:"高要区",value:"441204"},{label:"广宁县",value:"441223"},{label:"怀集县",value:"441224"},{label:"封开县",value:"441225"},{label:"德庆县",value:"441226"},{label:"四会市",value:"441284"}],[{label:"惠城区",value:"441302"},{label:"惠阳区",value:"441303"},{label:"博罗县",value:"441322"},{label:"惠东县",value:"441323"},{label:"龙门县",value:"441324"}],[{label:"梅江区",value:"441402"},{label:"梅县区",value:"441403"},{label:"大埔县",value:"441422"},{label:"丰顺县",value:"441423"},{label:"五华县",value:"441424"},{label:"平远县",value:"441426"},{label:"蕉岭县",value:"441427"},{label:"兴宁市",value:"441481"}],[{label:"城区",value:"441502"},{label:"海丰县",value:"441521"},{label:"陆河县",value:"441523"},{label:"陆丰市",value:"441581"}],[{label:"源城区",value:"441602"},{label:"紫金县",value:"441621"},{label:"龙川县",value:"441622"},{label:"连平县",value:"441623"},{label:"和平县",value:"441624"},{label:"东源县",value:"441625"}],[{label:"江城区",value:"441702"},{label:"阳东区",value:"441704"},{label:"阳西县",value:"441721"},{label:"阳春市",value:"441781"}],[{label:"清城区",value:"441802"},{label:"清新区",value:"441803"},{label:"佛冈县",value:"441821"},{label:"阳山县",value:"441823"},{label:"连山壮族瑶族自治县",value:"441825"},{label:"连南瑶族自治县",value:"441826"},{label:"英德市",value:"441881"},{label:"连州市",value:"441882"}],[{label:"东莞市",value:"441900"}],[{label:"中山市",value:"442000"}],[{label:"湘桥区",value:"445102"},{label:"潮安区",value:"445103"},{label:"饶平县",value:"445122"}],[{label:"榕城区",value:"445202"},{label:"揭东区",value:"445203"},{label:"揭西县",value:"445222"},{label:"惠来县",value:"445224"},{label:"普宁市",value:"445281"}],[{label:"云城区",value:"445302"},{label:"云安区",value:"445303"},{label:"新兴县",value:"445321"},{label:"郁南县",value:"445322"},{label:"罗定市",value:"445381"}]],[[{label:"兴宁区",value:"450102"},{label:"青秀区",value:"450103"},{label:"江南区",value:"450105"},{label:"西乡塘区",value:"450107"},{label:"良庆区",value:"450108"},{label:"邕宁区",value:"450109"},{label:"武鸣区",value:"450110"},{label:"隆安县",value:"450123"},{label:"马山县",value:"450124"},{label:"上林县",value:"450125"},{label:"宾阳县",value:"450126"},{label:"横县",value:"450127"}],[{label:"城中区",value:"450202"},{label:"鱼峰区",value:"450203"},{label:"柳南区",value:"450204"},{label:"柳北区",value:"450205"},{label:"柳江区",value:"450206"},{label:"柳城县",value:"450222"},{label:"鹿寨县",value:"450223"},{label:"融安县",value:"450224"},{label:"融水苗族自治县",value:"450225"},{label:"三江侗族自治县",value:"450226"}],[{label:"秀峰区",value:"450302"},{label:"叠彩区",value:"450303"},{label:"象山区",value:"450304"},{label:"七星区",value:"450305"},{label:"雁山区",value:"450311"},{label:"临桂区",value:"450312"},{label:"阳朔县",value:"450321"},{label:"灵川县",value:"450323"},{label:"全州县",value:"450324"},{label:"兴安县",value:"450325"},{label:"永福县",value:"450326"},{label:"灌阳县",value:"450327"},{label:"龙胜各族自治县",value:"450328"},{label:"资源县",value:"450329"},{label:"平乐县",value:"450330"},{label:"荔浦县",value:"450331"},{label:"恭城瑶族自治县",value:"450332"}],[{label:"万秀区",value:"450403"},{label:"长洲区",value:"450405"},{label:"龙圩区",value:"450406"},{label:"苍梧县",value:"450421"},{label:"藤县",value:"450422"},{label:"蒙山县",value:"450423"},{label:"岑溪市",value:"450481"}],[{label:"海城区",value:"450502"},{label:"银海区",value:"450503"},{label:"铁山港区",value:"450512"},{label:"合浦县",value:"450521"}],[{label:"港口区",value:"450602"},{label:"防城区",value:"450603"},{label:"上思县",value:"450621"},{label:"东兴市",value:"450681"}],[{label:"钦南区",value:"450702"},{label:"钦北区",value:"450703"},{label:"灵山县",value:"450721"},{label:"浦北县",value:"450722"}],[{label:"港北区",value:"450802"},{label:"港南区",value:"450803"},{label:"覃塘区",value:"450804"},{label:"平南县",value:"450821"},{label:"桂平市",value:"450881"}],[{label:"玉州区",value:"450902"},{label:"福绵区",value:"450903"},{label:"容县",value:"450921"},{label:"陆川县",value:"450922"},{label:"博白县",value:"450923"},{label:"兴业县",value:"450924"},{label:"北流市",value:"450981"}],[{label:"右江区",value:"451002"},{label:"田阳县",value:"451021"},{label:"田东县",value:"451022"},{label:"平果县",value:"451023"},{label:"德保县",value:"451024"},{label:"那坡县",value:"451026"},{label:"凌云县",value:"451027"},{label:"乐业县",value:"451028"},{label:"田林县",value:"451029"},{label:"西林县",value:"451030"},{label:"隆林各族自治县",value:"451031"},{label:"靖西市",value:"451081"}],[{label:"八步区",value:"451102"},{label:"平桂区",value:"451103"},{label:"昭平县",value:"451121"},{label:"钟山县",value:"451122"},{label:"富川瑶族自治县",value:"451123"}],[{label:"金城江区",value:"451202"},{label:"宜州区",value:"451203"},{label:"南丹县",value:"451221"},{label:"天峨县",value:"451222"},{label:"凤山县",value:"451223"},{label:"东兰县",value:"451224"},{label:"罗城仫佬族自治县",value:"451225"},{label:"环江毛南族自治县",value:"451226"},{label:"巴马瑶族自治县",value:"451227"},{label:"都安瑶族自治县",value:"451228"},{label:"大化瑶族自治县",value:"451229"}],[{label:"兴宾区",value:"451302"},{label:"忻城县",value:"451321"},{label:"象州县",value:"451322"},{label:"武宣县",value:"451323"},{label:"金秀瑶族自治县",value:"451324"},{label:"合山市",value:"451381"}],[{label:"江州区",value:"451402"},{label:"扶绥县",value:"451421"},{label:"宁明县",value:"451422"},{label:"龙州县",value:"451423"},{label:"大新县",value:"451424"},{label:"天等县",value:"451425"},{label:"凭祥市",value:"451481"}]],[[{label:"秀英区",value:"460105"},{label:"龙华区",value:"460106"},{label:"琼山区",value:"460107"},{label:"美兰区",value:"460108"}],[{label:"海棠区",value:"460202"},{label:"吉阳区",value:"460203"},{label:"天涯区",value:"460204"},{label:"崖州区",value:"460205"}],[{label:"西沙群岛",value:"460321"},{label:"南沙群岛",value:"460322"},{label:"中沙群岛的岛礁及其海域",value:"460323"}],[{label:"儋州市",value:"460400"}],[{label:"五指山市",value:"469001"},{label:"琼海市",value:"469002"},{label:"文昌市",value:"469005"},{label:"万宁市",value:"469006"},{label:"东方市",value:"469007"},{label:"定安县",value:"469021"},{label:"屯昌县",value:"469022"},{label:"澄迈县",value:"469023"},{label:"临高县",value:"469024"},{label:"白沙黎族自治县",value:"469025"},{label:"昌江黎族自治县",value:"469026"},{label:"乐东黎族自治县",value:"469027"},{label:"陵水黎族自治县",value:"469028"},{label:"保亭黎族苗族自治县",value:"469029"},{label:"琼中黎族苗族自治县",value:"469030"}]],[[{label:"万州区",value:"500101"},{label:"涪陵区",value:"500102"},{label:"渝中区",value:"500103"},{label:"大渡口区",value:"500104"},{label:"江北区",value:"500105"},{label:"沙坪坝区",value:"500106"},{label:"九龙坡区",value:"500107"},{label:"南岸区",value:"500108"},{label:"北碚区",value:"500109"},{label:"綦江区",value:"500110"},{label:"大足区",value:"500111"},{label:"渝北区",value:"500112"},{label:"巴南区",value:"500113"},{label:"黔江区",value:"500114"},{label:"长寿区",value:"500115"},{label:"江津区",value:"500116"},{label:"合川区",value:"500117"},{label:"永川区",value:"500118"},{label:"南川区",value:"500119"},{label:"璧山区",value:"500120"},{label:"铜梁区",value:"500151"},{label:"潼南区",value:"500152"},{label:"荣昌区",value:"500153"},{label:"开州区",value:"500154"},{label:"梁平区",value:"500155"},{label:"武隆区",value:"500156"}],[{label:"城口县",value:"500229"},{label:"丰都县",value:"500230"},{label:"垫江县",value:"500231"},{label:"忠县",value:"500233"},{label:"云阳县",value:"500235"},{label:"奉节县",value:"500236"},{label:"巫山县",value:"500237"},{label:"巫溪县",value:"500238"},{label:"石柱土家族自治县",value:"500240"},{label:"秀山土家族苗族自治县",value:"500241"},{label:"酉阳土家族苗族自治县",value:"500242"},{label:"彭水苗族土家族自治县",value:"500243"}]],[[{label:"锦江区",value:"510104"},{label:"青羊区",value:"510105"},{label:"金牛区",value:"510106"},{label:"武侯区",value:"510107"},{label:"成华区",value:"510108"},{label:"龙泉驿区",value:"510112"},{label:"青白江区",value:"510113"},{label:"新都区",value:"510114"},{label:"温江区",value:"510115"},{label:"双流区",value:"510116"},{label:"郫都区",value:"510117"},{label:"金堂县",value:"510121"},{label:"大邑县",value:"510129"},{label:"蒲江县",value:"510131"},{label:"新津县",value:"510132"},{label:"都江堰市",value:"510181"},{label:"彭州市",value:"510182"},{label:"邛崃市",value:"510183"},{label:"崇州市",value:"510184"},{label:"简阳市",value:"510185"}],[{label:"自流井区",value:"510302"},{label:"贡井区",value:"510303"},{label:"大安区",value:"510304"},{label:"沿滩区",value:"510311"},{label:"荣县",value:"510321"},{label:"富顺县",value:"510322"}],[{label:"东区",value:"510402"},{label:"西区",value:"510403"},{label:"仁和区",value:"510411"},{label:"米易县",value:"510421"},{label:"盐边县",value:"510422"}],[{label:"江阳区",value:"510502"},{label:"纳溪区",value:"510503"},{label:"龙马潭区",value:"510504"},{label:"泸县",value:"510521"},{label:"合江县",value:"510522"},{label:"叙永县",value:"510524"},{label:"古蔺县",value:"510525"}],[{label:"旌阳区",value:"510603"},{label:"罗江区",value:"510604"},{label:"中江县",value:"510623"},{label:"广汉市",value:"510681"},{label:"什邡市",value:"510682"},{label:"绵竹市",value:"510683"}],[{label:"涪城区",value:"510703"},{label:"游仙区",value:"510704"},{label:"安州区",value:"510705"},{label:"三台县",value:"510722"},{label:"盐亭县",value:"510723"},{label:"梓潼县",value:"510725"},{label:"北川羌族自治县",value:"510726"},{label:"平武县",value:"510727"},{label:"江油市",value:"510781"}],[{label:"利州区",value:"510802"},{label:"昭化区",value:"510811"},{label:"朝天区",value:"510812"},{label:"旺苍县",value:"510821"},{label:"青川县",value:"510822"},{label:"剑阁县",value:"510823"},{label:"苍溪县",value:"510824"}],[{label:"船山区",value:"510903"},{label:"安居区",value:"510904"},{label:"蓬溪县",value:"510921"},{label:"射洪县",value:"510922"},{label:"大英县",value:"510923"}],[{label:"市中区",value:"511002"},{label:"东兴区",value:"511011"},{label:"威远县",value:"511024"},{label:"资中县",value:"511025"},{label:"内江经济开发区",value:"511071"},{label:"隆昌市",value:"511083"}],[{label:"市中区",value:"511102"},{label:"沙湾区",value:"511111"},{label:"五通桥区",value:"511112"},{label:"金口河区",value:"511113"},{label:"犍为县",value:"511123"},{label:"井研县",value:"511124"},{label:"夹江县",value:"511126"},{label:"沐川县",value:"511129"},{label:"峨边彝族自治县",value:"511132"},{label:"马边彝族自治县",value:"511133"},{label:"峨眉山市",value:"511181"}],[{label:"顺庆区",value:"511302"},{label:"高坪区",value:"511303"},{label:"嘉陵区",value:"511304"},{label:"南部县",value:"511321"},{label:"营山县",value:"511322"},{label:"蓬安县",value:"511323"},{label:"仪陇县",value:"511324"},{label:"西充县",value:"511325"},{label:"阆中市",value:"511381"}],[{label:"东坡区",value:"511402"},{label:"彭山区",value:"511403"},{label:"仁寿县",value:"511421"},{label:"洪雅县",value:"511423"},{label:"丹棱县",value:"511424"},{label:"青神县",value:"511425"}],[{label:"翠屏区",value:"511502"},{label:"南溪区",value:"511503"},{label:"宜宾县",value:"511521"},{label:"江安县",value:"511523"},{label:"长宁县",value:"511524"},{label:"高县",value:"511525"},{label:"珙县",value:"511526"},{label:"筠连县",value:"511527"},{label:"兴文县",value:"511528"},{label:"屏山县",value:"511529"}],[{label:"广安区",value:"511602"},{label:"前锋区",value:"511603"},{label:"岳池县",value:"511621"},{label:"武胜县",value:"511622"},{label:"邻水县",value:"511623"},{label:"华蓥市",value:"511681"}],[{label:"通川区",value:"511702"},{label:"达川区",value:"511703"},{label:"宣汉县",value:"511722"},{label:"开江县",value:"511723"},{label:"大竹县",value:"511724"},{label:"渠县",value:"511725"},{label:"达州经济开发区",value:"511771"},{label:"万源市",value:"511781"}],[{label:"雨城区",value:"511802"},{label:"名山区",value:"511803"},{label:"荥经县",value:"511822"},{label:"汉源县",value:"511823"},{label:"石棉县",value:"511824"},{label:"天全县",value:"511825"},{label:"芦山县",value:"511826"},{label:"宝兴县",value:"511827"}],[{label:"巴州区",value:"511902"},{label:"恩阳区",value:"511903"},{label:"通江县",value:"511921"},{label:"南江县",value:"511922"},{label:"平昌县",value:"511923"},{label:"巴中经济开发区",value:"511971"}],[{label:"雁江区",value:"512002"},{label:"安岳县",value:"512021"},{label:"乐至县",value:"512022"}],[{label:"马尔康市",value:"513201"},{label:"汶川县",value:"513221"},{label:"理县",value:"513222"},{label:"茂县",value:"513223"},{label:"松潘县",value:"513224"},{label:"九寨沟县",value:"513225"},{label:"金川县",value:"513226"},{label:"小金县",value:"513227"},{label:"黑水县",value:"513228"},{label:"壤塘县",value:"513230"},{label:"阿坝县",value:"513231"},{label:"若尔盖县",value:"513232"},{label:"红原县",value:"513233"}],[{label:"康定市",value:"513301"},{label:"泸定县",value:"513322"},{label:"丹巴县",value:"513323"},{label:"九龙县",value:"513324"},{label:"雅江县",value:"513325"},{label:"道孚县",value:"513326"},{label:"炉霍县",value:"513327"},{label:"甘孜县",value:"513328"},{label:"新龙县",value:"513329"},{label:"德格县",value:"513330"},{label:"白玉县",value:"513331"},{label:"石渠县",value:"513332"},{label:"色达县",value:"513333"},{label:"理塘县",value:"513334"},{label:"巴塘县",value:"513335"},{label:"乡城县",value:"513336"},{label:"稻城县",value:"513337"},{label:"得荣县",value:"513338"}],[{label:"西昌市",value:"513401"},{label:"木里藏族自治县",value:"513422"},{label:"盐源县",value:"513423"},{label:"德昌县",value:"513424"},{label:"会理县",value:"513425"},{label:"会东县",value:"513426"},{label:"宁南县",value:"513427"},{label:"普格县",value:"513428"},{label:"布拖县",value:"513429"},{label:"金阳县",value:"513430"},{label:"昭觉县",value:"513431"},{label:"喜德县",value:"513432"},{label:"冕宁县",value:"513433"},{label:"越西县",value:"513434"},{label:"甘洛县",value:"513435"},{label:"美姑县",value:"513436"},{label:"雷波县",value:"513437"}]],[[{label:"南明区",value:"520102"},{label:"云岩区",value:"520103"},{label:"花溪区",value:"520111"},{label:"乌当区",value:"520112"},{label:"白云区",value:"520113"},{label:"观山湖区",value:"520115"},{label:"开阳县",value:"520121"},{label:"息烽县",value:"520122"},{label:"修文县",value:"520123"},{label:"清镇市",value:"520181"}],[{label:"钟山区",value:"520201"},{label:"六枝特区",value:"520203"},{label:"水城县",value:"520221"},{label:"盘州市",value:"520281"}],[{label:"红花岗区",value:"520302"},{label:"汇川区",value:"520303"},{label:"播州区",value:"520304"},{label:"桐梓县",value:"520322"},{label:"绥阳县",value:"520323"},{label:"正安县",value:"520324"},{label:"道真仡佬族苗族自治县",value:"520325"},{label:"务川仡佬族苗族自治县",value:"520326"},{label:"凤冈县",value:"520327"},{label:"湄潭县",value:"520328"},{label:"余庆县",value:"520329"},{label:"习水县",value:"520330"},{label:"赤水市",value:"520381"},{label:"仁怀市",value:"520382"}],[{label:"西秀区",value:"520402"},{label:"平坝区",value:"520403"},{label:"普定县",value:"520422"},{label:"镇宁布依族苗族自治县",value:"520423"},{label:"关岭布依族苗族自治县",value:"520424"},{label:"紫云苗族布依族自治县",value:"520425"}],[{label:"七星关区",value:"520502"},{label:"大方县",value:"520521"},{label:"黔西县",value:"520522"},{label:"金沙县",value:"520523"},{label:"织金县",value:"520524"},{label:"纳雍县",value:"520525"},{label:"威宁彝族回族苗族自治县",value:"520526"},{label:"赫章县",value:"520527"}],[{label:"碧江区",value:"520602"},{label:"万山区",value:"520603"},{label:"江口县",value:"520621"},{label:"玉屏侗族自治县",value:"520622"},{label:"石阡县",value:"520623"},{label:"思南县",value:"520624"},{label:"印江土家族苗族自治县",value:"520625"},{label:"德江县",value:"520626"},{label:"沿河土家族自治县",value:"520627"},{label:"松桃苗族自治县",value:"520628"}],[{label:"兴义市",value:"522301"},{label:"兴仁县",value:"522322"},{label:"普安县",value:"522323"},{label:"晴隆县",value:"522324"},{label:"贞丰县",value:"522325"},{label:"望谟县",value:"522326"},{label:"册亨县",value:"522327"},{label:"安龙县",value:"522328"}],[{label:"凯里市",value:"522601"},{label:"黄平县",value:"522622"},{label:"施秉县",value:"522623"},{label:"三穗县",value:"522624"},{label:"镇远县",value:"522625"},{label:"岑巩县",value:"522626"},{label:"天柱县",value:"522627"},{label:"锦屏县",value:"522628"},{label:"剑河县",value:"522629"},{label:"台江县",value:"522630"},{label:"黎平县",value:"522631"},{label:"榕江县",value:"522632"},{label:"从江县",value:"522633"},{label:"雷山县",value:"522634"},{label:"麻江县",value:"522635"},{label:"丹寨县",value:"522636"}],[{label:"都匀市",value:"522701"},{label:"福泉市",value:"522702"},{label:"荔波县",value:"522722"},{label:"贵定县",value:"522723"},{label:"瓮安县",value:"522725"},{label:"独山县",value:"522726"},{label:"平塘县",value:"522727"},{label:"罗甸县",value:"522728"},{label:"长顺县",value:"522729"},{label:"龙里县",value:"522730"},{label:"惠水县",value:"522731"},{label:"三都水族自治县",value:"522732"}]],[[{label:"五华区",value:"530102"},{label:"盘龙区",value:"530103"},{label:"官渡区",value:"530111"},{label:"西山区",value:"530112"},{label:"东川区",value:"530113"},{label:"呈贡区",value:"530114"},{label:"晋宁区",value:"530115"},{label:"富民县",value:"530124"},{label:"宜良县",value:"530125"},{label:"石林彝族自治县",value:"530126"},{label:"嵩明县",value:"530127"},{label:"禄劝彝族苗族自治县",value:"530128"},{label:"寻甸回族彝族自治县",value:"530129"},{label:"安宁市",value:"530181"}],[{label:"麒麟区",value:"530302"},{label:"沾益区",value:"530303"},{label:"马龙县",value:"530321"},{label:"陆良县",value:"530322"},{label:"师宗县",value:"530323"},{label:"罗平县",value:"530324"},{label:"富源县",value:"530325"},{label:"会泽县",value:"530326"},{label:"宣威市",value:"530381"}],[{label:"红塔区",value:"530402"},{label:"江川区",value:"530403"},{label:"澄江县",value:"530422"},{label:"通海县",value:"530423"},{label:"华宁县",value:"530424"},{label:"易门县",value:"530425"},{label:"峨山彝族自治县",value:"530426"},{label:"新平彝族傣族自治县",value:"530427"},{label:"元江哈尼族彝族傣族自治县",value:"530428"}],[{label:"隆阳区",value:"530502"},{label:"施甸县",value:"530521"},{label:"龙陵县",value:"530523"},{label:"昌宁县",value:"530524"},{label:"腾冲市",value:"530581"}],[{label:"昭阳区",value:"530602"},{label:"鲁甸县",value:"530621"},{label:"巧家县",value:"530622"},{label:"盐津县",value:"530623"},{label:"大关县",value:"530624"},{label:"永善县",value:"530625"},{label:"绥江县",value:"530626"},{label:"镇雄县",value:"530627"},{label:"彝良县",value:"530628"},{label:"威信县",value:"530629"},{label:"水富县",value:"530630"}],[{label:"古城区",value:"530702"},{label:"玉龙纳西族自治县",value:"530721"},{label:"永胜县",value:"530722"},{label:"华坪县",value:"530723"},{label:"宁蒗彝族自治县",value:"530724"}],[{label:"思茅区",value:"530802"},{label:"宁洱哈尼族彝族自治县",value:"530821"},{label:"墨江哈尼族自治县",value:"530822"},{label:"景东彝族自治县",value:"530823"},{label:"景谷傣族彝族自治县",value:"530824"},{label:"镇沅彝族哈尼族拉祜族自治县",value:"530825"},{label:"江城哈尼族彝族自治县",value:"530826"},{label:"孟连傣族拉祜族佤族自治县",value:"530827"},{label:"澜沧拉祜族自治县",value:"530828"},{label:"西盟佤族自治县",value:"530829"}],[{label:"临翔区",value:"530902"},{label:"凤庆县",value:"530921"},{label:"云县",value:"530922"},{label:"永德县",value:"530923"},{label:"镇康县",value:"530924"},{label:"双江拉祜族佤族布朗族傣族自治县",value:"530925"},{label:"耿马傣族佤族自治县",value:"530926"},{label:"沧源佤族自治县",value:"530927"}],[{label:"楚雄市",value:"532301"},{label:"双柏县",value:"532322"},{label:"牟定县",value:"532323"},{label:"南华县",value:"532324"},{label:"姚安县",value:"532325"},{label:"大姚县",value:"532326"},{label:"永仁县",value:"532327"},{label:"元谋县",value:"532328"},{label:"武定县",value:"532329"},{label:"禄丰县",value:"532331"}],[{label:"个旧市",value:"532501"},{label:"开远市",value:"532502"},{label:"蒙自市",value:"532503"},{label:"弥勒市",value:"532504"},{label:"屏边苗族自治县",value:"532523"},{label:"建水县",value:"532524"},{label:"石屏县",value:"532525"},{label:"泸西县",value:"532527"},{label:"元阳县",value:"532528"},{label:"红河县",value:"532529"},{label:"金平苗族瑶族傣族自治县",value:"532530"},{label:"绿春县",value:"532531"},{label:"河口瑶族自治县",value:"532532"}],[{label:"文山市",value:"532601"},{label:"砚山县",value:"532622"},{label:"西畴县",value:"532623"},{label:"麻栗坡县",value:"532624"},{label:"马关县",value:"532625"},{label:"丘北县",value:"532626"},{label:"广南县",value:"532627"},{label:"富宁县",value:"532628"}],[{label:"景洪市",value:"532801"},{label:"勐海县",value:"532822"},{label:"勐腊县",value:"532823"}],[{label:"大理市",value:"532901"},{label:"漾濞彝族自治县",value:"532922"},{label:"祥云县",value:"532923"},{label:"宾川县",value:"532924"},{label:"弥渡县",value:"532925"},{label:"南涧彝族自治县",value:"532926"},{label:"巍山彝族回族自治县",value:"532927"},{label:"永平县",value:"532928"},{label:"云龙县",value:"532929"},{label:"洱源县",value:"532930"},{label:"剑川县",value:"532931"},{label:"鹤庆县",value:"532932"}],[{label:"瑞丽市",value:"533102"},{label:"芒市",value:"533103"},{label:"梁河县",value:"533122"},{label:"盈江县",value:"533123"},{label:"陇川县",value:"533124"}],[{label:"泸水市",value:"533301"},{label:"福贡县",value:"533323"},{label:"贡山独龙族怒族自治县",value:"533324"},{label:"兰坪白族普米族自治县",value:"533325"}],[{label:"香格里拉市",value:"533401"},{label:"德钦县",value:"533422"},{label:"维西傈僳族自治县",value:"533423"}]],[[{label:"城关区",value:"540102"},{label:"堆龙德庆区",value:"540103"},{label:"林周县",value:"540121"},{label:"当雄县",value:"540122"},{label:"尼木县",value:"540123"},{label:"曲水县",value:"540124"},{label:"达孜县",value:"540126"},{label:"墨竹工卡县",value:"540127"},{label:"格尔木藏青工业园区",value:"540171"},{label:"拉萨经济技术开发区",value:"540172"},{label:"西藏文化旅游创意园区",value:"540173"},{label:"达孜工业园区",value:"540174"}],[{label:"桑珠孜区",value:"540202"},{label:"南木林县",value:"540221"},{label:"江孜县",value:"540222"},{label:"定日县",value:"540223"},{label:"萨迦县",value:"540224"},{label:"拉孜县",value:"540225"},{label:"昂仁县",value:"540226"},{label:"谢通门县",value:"540227"},{label:"白朗县",value:"540228"},{label:"仁布县",value:"540229"},{label:"康马县",value:"540230"},{label:"定结县",value:"540231"},{label:"仲巴县",value:"540232"},{label:"亚东县",value:"540233"},{label:"吉隆县",value:"540234"},{label:"聂拉木县",value:"540235"},{label:"萨嘎县",value:"540236"},{label:"岗巴县",value:"540237"}],[{label:"卡若区",value:"540302"},{label:"江达县",value:"540321"},{label:"贡觉县",value:"540322"},{label:"类乌齐县",value:"540323"},{label:"丁青县",value:"540324"},{label:"察雅县",value:"540325"},{label:"八宿县",value:"540326"},{label:"左贡县",value:"540327"},{label:"芒康县",value:"540328"},{label:"洛隆县",value:"540329"},{label:"边坝县",value:"540330"}],[{label:"巴宜区",value:"540402"},{label:"工布江达县",value:"540421"},{label:"米林县",value:"540422"},{label:"墨脱县",value:"540423"},{label:"波密县",value:"540424"},{label:"察隅县",value:"540425"},{label:"朗县",value:"540426"}],[{label:"乃东区",value:"540502"},{label:"扎囊县",value:"540521"},{label:"贡嘎县",value:"540522"},{label:"桑日县",value:"540523"},{label:"琼结县",value:"540524"},{label:"曲松县",value:"540525"},{label:"措美县",value:"540526"},{label:"洛扎县",value:"540527"},{label:"加查县",value:"540528"},{label:"隆子县",value:"540529"},{label:"错那县",value:"540530"},{label:"浪卡子县",value:"540531"}],[{label:"那曲县",value:"542421"},{label:"嘉黎县",value:"542422"},{label:"比如县",value:"542423"},{label:"聂荣县",value:"542424"},{label:"安多县",value:"542425"},{label:"申扎县",value:"542426"},{label:"索县",value:"542427"},{label:"班戈县",value:"542428"},{label:"巴青县",value:"542429"},{label:"尼玛县",value:"542430"},{label:"双湖县",value:"542431"}],[{label:"普兰县",value:"542521"},{label:"札达县",value:"542522"},{label:"噶尔县",value:"542523"},{label:"日土县",value:"542524"},{label:"革吉县",value:"542525"},{label:"改则县",value:"542526"},{label:"措勤县",value:"542527"}]],[[{label:"新城区",value:"610102"},{label:"碑林区",value:"610103"},{label:"莲湖区",value:"610104"},{label:"灞桥区",value:"610111"},{label:"未央区",value:"610112"},{label:"雁塔区",value:"610113"},{label:"阎良区",value:"610114"},{label:"临潼区",value:"610115"},{label:"长安区",value:"610116"},{label:"高陵区",value:"610117"},{label:"鄠邑区",value:"610118"},{label:"蓝田县",value:"610122"},{label:"周至县",value:"610124"}],[{label:"王益区",value:"610202"},{label:"印台区",value:"610203"},{label:"耀州区",value:"610204"},{label:"宜君县",value:"610222"}],[{label:"渭滨区",value:"610302"},{label:"金台区",value:"610303"},{label:"陈仓区",value:"610304"},{label:"凤翔县",value:"610322"},{label:"岐山县",value:"610323"},{label:"扶风县",value:"610324"},{label:"眉县",value:"610326"},{label:"陇县",value:"610327"},{label:"千阳县",value:"610328"},{label:"麟游县",value:"610329"},{label:"凤县",value:"610330"},{label:"太白县",value:"610331"}],[{label:"秦都区",value:"610402"},{label:"杨陵区",value:"610403"},{label:"渭城区",value:"610404"},{label:"三原县",value:"610422"},{label:"泾阳县",value:"610423"},{label:"乾县",value:"610424"},{label:"礼泉县",value:"610425"},{label:"永寿县",value:"610426"},{label:"彬县",value:"610427"},{label:"长武县",value:"610428"},{label:"旬邑县",value:"610429"},{label:"淳化县",value:"610430"},{label:"武功县",value:"610431"},{label:"兴平市",value:"610481"}],[{label:"临渭区",value:"610502"},{label:"华州区",value:"610503"},{label:"潼关县",value:"610522"},{label:"大荔县",value:"610523"},{label:"合阳县",value:"610524"},{label:"澄城县",value:"610525"},{label:"蒲城县",value:"610526"},{label:"白水县",value:"610527"},{label:"富平县",value:"610528"},{label:"韩城市",value:"610581"},{label:"华阴市",value:"610582"}],[{label:"宝塔区",value:"610602"},{label:"安塞区",value:"610603"},{label:"延长县",value:"610621"},{label:"延川县",value:"610622"},{label:"子长县",value:"610623"},{label:"志丹县",value:"610625"},{label:"吴起县",value:"610626"},{label:"甘泉县",value:"610627"},{label:"富县",value:"610628"},{label:"洛川县",value:"610629"},{label:"宜川县",value:"610630"},{label:"黄龙县",value:"610631"},{label:"黄陵县",value:"610632"}],[{label:"汉台区",value:"610702"},{label:"南郑区",value:"610703"},{label:"城固县",value:"610722"},{label:"洋县",value:"610723"},{label:"西乡县",value:"610724"},{label:"勉县",value:"610725"},{label:"宁强县",value:"610726"},{label:"略阳县",value:"610727"},{label:"镇巴县",value:"610728"},{label:"留坝县",value:"610729"},{label:"佛坪县",value:"610730"}],[{label:"榆阳区",value:"610802"},{label:"横山区",value:"610803"},{label:"府谷县",value:"610822"},{label:"靖边县",value:"610824"},{label:"定边县",value:"610825"},{label:"绥德县",value:"610826"},{label:"米脂县",value:"610827"},{label:"佳县",value:"610828"},{label:"吴堡县",value:"610829"},{label:"清涧县",value:"610830"},{label:"子洲县",value:"610831"},{label:"神木市",value:"610881"}],[{label:"汉滨区",value:"610902"},{label:"汉阴县",value:"610921"},{label:"石泉县",value:"610922"},{label:"宁陕县",value:"610923"},{label:"紫阳县",value:"610924"},{label:"岚皋县",value:"610925"},{label:"平利县",value:"610926"},{label:"镇坪县",value:"610927"},{label:"旬阳县",value:"610928"},{label:"白河县",value:"610929"}],[{label:"商州区",value:"611002"},{label:"洛南县",value:"611021"},{label:"丹凤县",value:"611022"},{label:"商南县",value:"611023"},{label:"山阳县",value:"611024"},{label:"镇安县",value:"611025"},{label:"柞水县",value:"611026"}]],[[{label:"城关区",value:"620102"},{label:"七里河区",value:"620103"},{label:"西固区",value:"620104"},{label:"安宁区",value:"620105"},{label:"红古区",value:"620111"},{label:"永登县",value:"620121"},{label:"皋兰县",value:"620122"},{label:"榆中县",value:"620123"},{label:"兰州新区",value:"620171"}],[{label:"嘉峪关市",value:"620201"}],[{label:"金川区",value:"620302"},{label:"永昌县",value:"620321"}],[{label:"白银区",value:"620402"},{label:"平川区",value:"620403"},{label:"靖远县",value:"620421"},{label:"会宁县",value:"620422"},{label:"景泰县",value:"620423"}],[{label:"秦州区",value:"620502"},{label:"麦积区",value:"620503"},{label:"清水县",value:"620521"},{label:"秦安县",value:"620522"},{label:"甘谷县",value:"620523"},{label:"武山县",value:"620524"},{label:"张家川回族自治县",value:"620525"}],[{label:"凉州区",value:"620602"},{label:"民勤县",value:"620621"},{label:"古浪县",value:"620622"},{label:"天祝藏族自治县",value:"620623"}],[{label:"甘州区",value:"620702"},{label:"肃南裕固族自治县",value:"620721"},{label:"民乐县",value:"620722"},{label:"临泽县",value:"620723"},{label:"高台县",value:"620724"},{label:"山丹县",value:"620725"}],[{label:"崆峒区",value:"620802"},{label:"泾川县",value:"620821"},{label:"灵台县",value:"620822"},{label:"崇信县",value:"620823"},{label:"华亭县",value:"620824"},{label:"庄浪县",value:"620825"},{label:"静宁县",value:"620826"},{label:"平凉工业园区",value:"620871"}],[{label:"肃州区",value:"620902"},{label:"金塔县",value:"620921"},{label:"瓜州县",value:"620922"},{label:"肃北蒙古族自治县",value:"620923"},{label:"阿克塞哈萨克族自治县",value:"620924"},{label:"玉门市",value:"620981"},{label:"敦煌市",value:"620982"}],[{label:"西峰区",value:"621002"},{label:"庆城县",value:"621021"},{label:"环县",value:"621022"},{label:"华池县",value:"621023"},{label:"合水县",value:"621024"},{label:"正宁县",value:"621025"},{label:"宁县",value:"621026"},{label:"镇原县",value:"621027"}],[{label:"安定区",value:"621102"},{label:"通渭县",value:"621121"},{label:"陇西县",value:"621122"},{label:"渭源县",value:"621123"},{label:"临洮县",value:"621124"},{label:"漳县",value:"621125"},{label:"岷县",value:"621126"}],[{label:"武都区",value:"621202"},{label:"成县",value:"621221"},{label:"文县",value:"621222"},{label:"宕昌县",value:"621223"},{label:"康县",value:"621224"},{label:"西和县",value:"621225"},{label:"礼县",value:"621226"},{label:"徽县",value:"621227"},{label:"两当县",value:"621228"}],[{label:"临夏市",value:"622901"},{label:"临夏县",value:"622921"},{label:"康乐县",value:"622922"},{label:"永靖县",value:"622923"},{label:"广河县",value:"622924"},{label:"和政县",value:"622925"},{label:"东乡族自治县",value:"622926"},{label:"积石山保安族东乡族撒拉族自治县",value:"622927"}],[{label:"合作市",value:"623001"},{label:"临潭县",value:"623021"},{label:"卓尼县",value:"623022"},{label:"舟曲县",value:"623023"},{label:"迭部县",value:"623024"},{label:"玛曲县",value:"623025"},{label:"碌曲县",value:"623026"},{label:"夏河县",value:"623027"}]],[[{label:"城东区",value:"630102"},{label:"城中区",value:"630103"},{label:"城西区",value:"630104"},{label:"城北区",value:"630105"},{label:"大通回族土族自治县",value:"630121"},{label:"湟中县",value:"630122"},{label:"湟源县",value:"630123"}],[{label:"乐都区",value:"630202"},{label:"平安区",value:"630203"},{label:"民和回族土族自治县",value:"630222"},{label:"互助土族自治县",value:"630223"},{label:"化隆回族自治县",value:"630224"},{label:"循化撒拉族自治县",value:"630225"}],[{label:"门源回族自治县",value:"632221"},{label:"祁连县",value:"632222"},{label:"海晏县",value:"632223"},{label:"刚察县",value:"632224"}],[{label:"同仁县",value:"632321"},{label:"尖扎县",value:"632322"},{label:"泽库县",value:"632323"},{label:"河南蒙古族自治县",value:"632324"}],[{label:"共和县",value:"632521"},{label:"同德县",value:"632522"},{label:"贵德县",value:"632523"},{label:"兴海县",value:"632524"},{label:"贵南县",value:"632525"}],[{label:"玛沁县",value:"632621"},{label:"班玛县",value:"632622"},{label:"甘德县",value:"632623"},{label:"达日县",value:"632624"},{label:"久治县",value:"632625"},{label:"玛多县",value:"632626"}],[{label:"玉树市",value:"632701"},{label:"杂多县",value:"632722"},{label:"称多县",value:"632723"},{label:"治多县",value:"632724"},{label:"囊谦县",value:"632725"},{label:"曲麻莱县",value:"632726"}],[{label:"格尔木市",value:"632801"},{label:"德令哈市",value:"632802"},{label:"乌兰县",value:"632821"},{label:"都兰县",value:"632822"},{label:"天峻县",value:"632823"},{label:"大柴旦行政委员会",value:"632857"},{label:"冷湖行政委员会",value:"632858"},{label:"茫崖行政委员会",value:"632859"}]],[[{label:"兴庆区",value:"640104"},{label:"西夏区",value:"640105"},{label:"金凤区",value:"640106"},{label:"永宁县",value:"640121"},{label:"贺兰县",value:"640122"},{label:"灵武市",value:"640181"}],[{label:"大武口区",value:"640202"},{label:"惠农区",value:"640205"},{label:"平罗县",value:"640221"}],[{label:"利通区",value:"640302"},{label:"红寺堡区",value:"640303"},{label:"盐池县",value:"640323"},{label:"同心县",value:"640324"},{label:"青铜峡市",value:"640381"}],[{label:"原州区",value:"640402"},{label:"西吉县",value:"640422"},{label:"隆德县",value:"640423"},{label:"泾源县",value:"640424"},{label:"彭阳县",value:"640425"}],[{label:"沙坡头区",value:"640502"},{label:"中宁县",value:"640521"},{label:"海原县",value:"640522"}]],[[{label:"天山区",value:"650102"},{label:"沙依巴克区",value:"650103"},{label:"新市区",value:"650104"},{label:"水磨沟区",value:"650105"},{label:"头屯河区",value:"650106"},{label:"达坂城区",value:"650107"},{label:"米东区",value:"650109"},{label:"乌鲁木齐县",value:"650121"},{label:"乌鲁木齐经济技术开发区",value:"650171"},{label:"乌鲁木齐高新技术产业开发区",value:"650172"}],[{label:"独山子区",value:"650202"},{label:"克拉玛依区",value:"650203"},{label:"白碱滩区",value:"650204"},{label:"乌尔禾区",value:"650205"}],[{label:"高昌区",value:"650402"},{label:"鄯善县",value:"650421"},{label:"托克逊县",value:"650422"}],[{label:"伊州区",value:"650502"},{label:"巴里坤哈萨克自治县",value:"650521"},{label:"伊吾县",value:"650522"}],[{label:"昌吉市",value:"652301"},{label:"阜康市",value:"652302"},{label:"呼图壁县",value:"652323"},{label:"玛纳斯县",value:"652324"},{label:"奇台县",value:"652325"},{label:"吉木萨尔县",value:"652327"},{label:"木垒哈萨克自治县",value:"652328"}],[{label:"博乐市",value:"652701"},{label:"阿拉山口市",value:"652702"},{label:"精河县",value:"652722"},{label:"温泉县",value:"652723"}],[{label:"库尔勒市",value:"652801"},{label:"轮台县",value:"652822"},{label:"尉犁县",value:"652823"},{label:"若羌县",value:"652824"},{label:"且末县",value:"652825"},{label:"焉耆回族自治县",value:"652826"},{label:"和静县",value:"652827"},{label:"和硕县",value:"652828"},{label:"博湖县",value:"652829"},{label:"库尔勒经济技术开发区",value:"652871"}],[{label:"阿克苏市",value:"652901"},{label:"温宿县",value:"652922"},{label:"库车县",value:"652923"},{label:"沙雅县",value:"652924"},{label:"新和县",value:"652925"},{label:"拜城县",value:"652926"},{label:"乌什县",value:"652927"},{label:"阿瓦提县",value:"652928"},{label:"柯坪县",value:"652929"}],[{label:"阿图什市",value:"653001"},{label:"阿克陶县",value:"653022"},{label:"阿合奇县",value:"653023"},{label:"乌恰县",value:"653024"}],[{label:"喀什市",value:"653101"},{label:"疏附县",value:"653121"},{label:"疏勒县",value:"653122"},{label:"英吉沙县",value:"653123"},{label:"泽普县",value:"653124"},{label:"莎车县",value:"653125"},{label:"叶城县",value:"653126"},{label:"麦盖提县",value:"653127"},{label:"岳普湖县",value:"653128"},{label:"伽师县",value:"653129"},{label:"巴楚县",value:"653130"},{label:"塔什库尔干塔吉克自治县",value:"653131"}],[{label:"和田市",value:"653201"},{label:"和田县",value:"653221"},{label:"墨玉县",value:"653222"},{label:"皮山县",value:"653223"},{label:"洛浦县",value:"653224"},{label:"策勒县",value:"653225"},{label:"于田县",value:"653226"},{label:"民丰县",value:"653227"}],[{label:"伊宁市",value:"654002"},{label:"奎屯市",value:"654003"},{label:"霍尔果斯市",value:"654004"},{label:"伊宁县",value:"654021"},{label:"察布查尔锡伯自治县",value:"654022"},{label:"霍城县",value:"654023"},{label:"巩留县",value:"654024"},{label:"新源县",value:"654025"},{label:"昭苏县",value:"654026"},{label:"特克斯县",value:"654027"},{label:"尼勒克县",value:"654028"}],[{label:"塔城市",value:"654201"},{label:"乌苏市",value:"654202"},{label:"额敏县",value:"654221"},{label:"沙湾县",value:"654223"},{label:"托里县",value:"654224"},{label:"裕民县",value:"654225"},{label:"和布克赛尔蒙古自治县",value:"654226"}],[{label:"阿勒泰市",value:"654301"},{label:"布尔津县",value:"654321"},{label:"富蕴县",value:"654322"},{label:"福海县",value:"654323"},{label:"哈巴河县",value:"654324"},{label:"青河县",value:"654325"},{label:"吉木乃县",value:"654326"}],[{label:"石河子市",value:"659001"},{label:"阿拉尔市",value:"659002"},{label:"图木舒克市",value:"659003"},{label:"五家渠市",value:"659004"},{label:"铁门关市",value:"659006"}]],[[{label:"台北",value:"660101"}],[{label:"高雄",value:"660201"}],[{label:"基隆",value:"660301"}],[{label:"台中",value:"660401"}],[{label:"台南",value:"660501"}],[{label:"新竹",value:"660601"}],[{label:"嘉义",value:"660701"}],[{label:"宜兰",value:"660801"}],[{label:"桃园",value:"660901"}],[{label:"苗栗",value:"661001"}],[{label:"彰化",value:"661101"}],[{label:"南投",value:"661201"}],[{label:"云林",value:"661301"}],[{label:"屏东",value:"661401"}],[{label:"台东",value:"661501"}],[{label:"花莲",value:"661601"}],[{label:"澎湖",value:"661701"}]],[[{label:"香港岛",value:"670101"}],[{label:"九龙",value:"670201"}],[{label:"新界",value:"670301"}]],[[{label:"澳门半岛",value:"680101"}],[{label:"氹仔岛",value:"680201"}],[{label:"路环岛",value:"680301"}],[{label:"路氹城",value:"680401"}]]],n=t;l.default=n},b949:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={pages:{"pages/index/index":{navigationStyle:"custom",navigationBarTextStyle:"white",scrollIndicator:"none"},"pages/cart/cart":{navigationBarBackgroundColor:"#fff",navigationBarTitleText:"购物车",scrollIndicator:"none",titleNView:{buttons:[{type:"none",text:"编辑",width:"60px",fontSize:"15",float:"right",background:"#fff",color:"#000"}]}},"pages/send/send":{navigationBarBackgroundColor:"#fff",navigationBarTitleText:"发帖",scrollIndicator:"none"},"pages/chat/chat":{navigationBarBackgroundColor:"#fff",navigationBarTitleText:"",scrollIndicator:"none"},"pages/message/message":{navigationBarBackgroundColor:"#fff",navigationBarTitleText:"消息",scrollIndicator:"none"},"pages/goods_list/goods_list":{navigationBarTextStyle:"white",navigationBarBackgroundColor:"#de0303",navigationBarTitleText:"",scrollIndicator:"none",titleNView:{buttons:[{type:"none",text:"搜索",width:"40px",fontSize:"12",float:"right",background:"#de0303",color:"#ffffff"}],tags:[{tag:"img",id:"img",src:"./static/img/search_bg.png",position:{top:"8px",right:"5px",width:"50px",height:"28px"}}]}},"pages/scan/scan":{navigationStyle:"custom"},"pages/auth/login/login":{navigationStyle:"custom"},"pages/auth/pwd/pwd":{navigationStyle:"custom",bounce:"none"},"pages/detail/goodsinfo":{navigationBarTitleText:"商品信息",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff",bounce:"none",scrollIndicator:"none",titleNView:{type:"transparent",buttons:[{type:"share"}]}},"pages/comment/comment":{navigationBarTitleText:"",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff",bounce:"none",scrollIndicator:"none",titleNView:{type:"default",buttons:[{type:"share"}]}},"pages/comment/commentDetail":{navigationBarTitleText:"评论详情",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff",bounce:"none"},"pages/search/search":{navigationBarBackgroundColor:"#f1f1f1",navigationBarTitleText:"",scrollIndicator:"none",titleNView:{searchInput:{autoFocus:!0,align:"left",backgroundColor:"#ffffff",borderRadius:"10px"},buttons:[{type:"none",text:"搜索",width:"60px",fontSize:"12",float:"right",background:"#de0303",color:"#ffffff"}],tags:[{tag:"img",id:"img",src:"./static/img/search_bg.png",position:{top:"8px",right:"5px",width:"50px",height:"28px"}}]}},"pages/confirmationOrder/confirmationOrder":{navigationBarTitleText:"确认订单",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff"},"pages/invoice/invoice":{navigationBarTitleText:"开具发票",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff"},"pages/address/address":{navigationBarTitleText:"",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff",usingComponents:{}},"pages/address/newlyAdded":{navigationBarTitleText:"添加收货地址",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#f1f1f1",backgroundColor:"#f1f1f1"},"pages/myself/myself":{navigationStyle:"custom",navigationBarTextStyle:"white",scrollIndicator:"none"},"pages/myorder/myorder":{navigationBarTitleText:"我的订单",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#f2f2f2",backgroundColor:"#f2f2f2",bounce:"none",titleNView:{buttons:[{text:"发票",fontSize:"16px"}]}},"pages/after_sale/after_sale_list":{navigationBarTitleText:"退款售后",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#f2f2f2",backgroundColor:"#f2f2f2"},"pages/myorder/refundSuccess":{navigationBarTitleText:"提交成功",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff"},"pages/myorder/refundDetail":{navigationBarTitleText:"退款详情",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff"},"pages/myorder/evaluate":{navigationBarTitleText:"商品评价",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff"},"pages/myorder/orderDetail":{navigationBarTitleText:"订单详情",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#f2f2f2",backgroundColor:"#f2f2f2"},"pages/message/systemMessage/index":{navigationBarTitleText:"",navigationBarTextStyle:"black",navigationBarBackgroundColor:"#fff",backgroundColor:"#fff"},"pages/myfix/myfix":{navigationBarTitleText:"",navigationBarTextStyle:"white",navigationBarBackgroundColor:"#de0303",backgroundColor:"green",scrollIndicator:"none",enableDownRefresh:!0,titleNView:{buttons:[{type:"none",text:"搜索",width:"40px",fontSize:"12",float:"right",background:"#de0303",color:"#ffffff"}],tags:[{tag:"img",id:"img",src:"./static/img/search_bg.png",position:{top:"8px",right:"5px",width:"50px",height:"28px"}}]}}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"东装西购",navigationBarBackgroundColor:"#000000",backgroundColor:"#000000"}};l.default=t},bbdd:function(e,l,a){var t=function(){return this||"object"===typeof self&&self}()||Function("return this")(),n=t.regeneratorRuntime&&Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime")>=0,u=n&&t.regeneratorRuntime;if(t.regeneratorRuntime=void 0,e.exports=a("96cf"),n)t.regeneratorRuntime=u;else try{delete t.regeneratorRuntime}catch(r){t.regeneratorRuntime=void 0}},bc7c:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=[{label:"北京市",value:"11"},{label:"天津市",value:"12"},{label:"河北省",value:"13"},{label:"山西省",value:"14"},{label:"内蒙古自治区",value:"15"},{label:"辽宁省",value:"21"},{label:"吉林省",value:"22"},{label:"黑龙江省",value:"23"},{label:"上海市",value:"31"},{label:"江苏省",value:"32"},{label:"浙江省",value:"33"},{label:"安徽省",value:"34"},{label:"福建省",value:"35"},{label:"江西省",value:"36"},{label:"山东省",value:"37"},{label:"河南省",value:"41"},{label:"湖北省",value:"42"},{label:"湖南省",value:"43"},{label:"广东省",value:"44"},{label:"广西壮族自治区",value:"45"},{label:"海南省",value:"46"},{label:"重庆市",value:"50"},{label:"四川省",value:"51"},{label:"贵州省",value:"52"},{label:"云南省",value:"53"},{label:"西藏自治区",value:"54"},{label:"陕西省",value:"61"},{label:"甘肃省",value:"62"},{label:"青海省",value:"63"},{label:"宁夏回族自治区",value:"64"},{label:"新疆维吾尔自治区",value:"65"},{label:"台湾",value:"66"},{label:"香港",value:"67"},{label:"澳门",value:"68"}],n=t;l.default=n},c8ba:function(e,l){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"===typeof window&&(a=window)}e.exports=a},f4ef:function(e,l,a){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t={appid:"__UNI__D73960D"};l.default=t}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/evaluate-star/evaluate-star';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/evaluate-star/evaluate-star.js';

define('components/evaluate-star/evaluate-star.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/evaluate-star/evaluate-star"], {
  "299d": function d(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var n = {
        name: "evaluateStar",
        props: {
          score: {
            type: [Number, String],
            default: "0"
          },
          index: {
            type: [Number, String],
            default: "0"
          }
        },
        data: function data() {
          return {
            scores: 0
          };
        },
        computed: {
          starArrs: function starArrs() {
            for (var t = [], e = parseInt(this.scores), n = 0; n < e; n++) {
              t.push("/static/img/myorder/redStars.png");
            }

            while (t.length < 5) {
              t.push("/static/img/myorder/stars.png");
            }

            return t;
          }
        },
        onLoad: function onLoad() {
          this.scores = this.score;
        },
        methods: {
          onRate: function onRate(e, n) {
            t.hideKeyboard(), this.scores = e + 1, this.$emit("starNum", {
              i: e,
              index: n
            });
          }
        }
      };
      e.default = n;
    }).call(this, n("6e42")["default"]);
  },
  "3a82": function a82(t, e, n) {
    "use strict";

    var r = function r() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        a = [];

    n.d(e, "a", function () {
      return r;
    }), n.d(e, "b", function () {
      return a;
    });
  },
  "6e71": function e71(t, e, n) {},
  dd77: function dd77(t, e, n) {
    "use strict";

    var r = n("6e71"),
        a = n.n(r);
    a.a;
  },
  dfc4: function dfc4(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("299d"),
        a = n.n(r);

    for (var u in r) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(u);
    }

    e["default"] = a.a;
  },
  e61b: function e61b(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("3a82"),
        a = n("dfc4");

    for (var u in a) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return a[t];
        });
      }(u);
    }

    n("dd77");
    var s = n("2877"),
        i = Object(s["a"])(a["default"], r["a"], r["b"], !1, null, null, null);
    e["default"] = i.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/evaluate-star/evaluate-star-create-component', {
  'components/evaluate-star/evaluate-star-create-component': function componentsEvaluateStarEvaluateStarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e61b"));
  }
}, [['components/evaluate-star/evaluate-star-create-component']]]);
});
require('components/evaluate-star/evaluate-star.js');
__wxRoute = 'components/goods-list/goods-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/goods-list/goods-list.js';

define('components/goods-list/goods-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/goods-list/goods-list"], {
  "26ba": function ba(t, n, e) {
    "use strict";

    var u = e("81e2"),
        o = e.n(u);
    o.a;
  },
  "32f8": function f8(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("c51e"),
        o = e.n(u);

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    n["default"] = o.a;
  },
  "81e2": function e2(t, n, e) {},
  a755: function a755(t, n, e) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return u;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  c51e: function c51e(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        data: function data() {
          return {};
        },
        props: {
          list: {
            default: function _default() {
              return [];
            }
          }
        },
        created: function created() {},
        methods: {
          link_goods_detail: function link_goods_detail(n) {
            t.navigateTo({
              url: "/pages/detail/goodsinfo?itemid=" + n,
              success: function success(t) {},
              fail: function fail() {},
              complete: function complete() {}
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  e455: function e455(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("a755"),
        o = e("32f8");

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    e("26ba");
    var i = e("2877"),
        c = Object(i["a"])(o["default"], u["a"], u["b"], !1, null, "ae417d50", null);
    n["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/goods-list/goods-list-create-component', {
  'components/goods-list/goods-list-create-component': function componentsGoodsListGoodsListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e455"));
  }
}, [['components/goods-list/goods-list-create-component']]]);
});
require('components/goods-list/goods-list.js');
__wxRoute = 'components/guess-like/guess-like';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/guess-like/guess-like.js';

define('components/guess-like/guess-like.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/guess-like/guess-like"], {
  2960: function _(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return a;
    });
  },
  "31de": function de(n, t, e) {
    "use strict";

    var u = e("6343"),
        a = e.n(u);
    a.a;
  },
  6343: function _(n, t, e) {},
  a9e2: function a9e2(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("2960"),
        a = e("ecdf");

    for (var c in a) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(c);
    }

    e("31de");
    var r = e("2877"),
        i = Object(r["a"])(a["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = i.exports;
  },
  bcba: function bcba(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "GuessLike",
      props: ["content"],
      data: function data() {
        return {};
      },
      methods: {
        handleClick: function handleClick(n) {
          this.$emit("jump", n);
        }
      }
    };
    t.default = u;
  },
  ecdf: function ecdf(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("bcba"),
        a = e.n(u);

    for (var c in u) {
      "default" !== c && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(c);
    }

    t["default"] = a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/guess-like/guess-like-create-component', {
  'components/guess-like/guess-like-create-component': function componentsGuessLikeGuessLikeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a9e2"));
  }
}, [['components/guess-like/guess-like-create-component']]]);
});
require('components/guess-like/guess-like.js');
__wxRoute = 'components/loading-show/loading-show';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/loading-show/loading-show.js';

define('components/loading-show/loading-show.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/loading-show/loading-show"], {
  "00ea": function ea(n, t, e) {
    "use strict";

    var a = function a() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        u = [];

    e.d(t, "a", function () {
      return a;
    }), e.d(t, "b", function () {
      return u;
    });
  },
  2325: function _(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("00ea"),
        u = e("5916");

    for (var o in u) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(o);
    }

    e("c2e8");
    var r = e("2877"),
        c = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, "3522d8a7", null);
    t["default"] = c.exports;
  },
  5916: function _(n, t, e) {
    "use strict";

    e.r(t);
    var a = e("d2dd"),
        u = e.n(a);

    for (var o in a) {
      "default" !== o && function (n) {
        e.d(t, n, function () {
          return a[n];
        });
      }(o);
    }

    t["default"] = u.a;
  },
  "8b08": function b08(n, t, e) {},
  c2e8: function c2e8(n, t, e) {
    "use strict";

    var a = e("8b08"),
        u = e.n(a);
    u.a;
  },
  d2dd: function d2dd(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var a = {
      name: "loading_show"
    };
    t.default = a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/loading-show/loading-show-create-component', {
  'components/loading-show/loading-show-create-component': function componentsLoadingShowLoadingShowCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2325"));
  }
}, [['components/loading-show/loading-show-create-component']]]);
});
require('components/loading-show/loading-show.js');
__wxRoute = 'components/mpvue-citypicker/mpvueCityPicker';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mpvue-citypicker/mpvueCityPicker.js';

define('components/mpvue-citypicker/mpvueCityPicker.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mpvue-citypicker/mpvueCityPicker"], {
  "06af": function af(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("4084"),
        u = i.n(a);

    for (var l in a) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(l);
    }

    e["default"] = u.a;
  },
  "0e3c": function e3c(t, e, i) {
    "use strict";

    i.r(e);
    var a = i("ddd8"),
        u = i("06af");

    for (var l in u) {
      "default" !== l && function (t) {
        i.d(e, t, function () {
          return u[t];
        });
      }(l);
    }

    i("a751");
    var n = i("2877"),
        c = Object(n["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  "37a7": function a7(t, e, i) {},
  4084: function _(t, e, i) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var a = n(i("bc7c")),
        u = n(i("188a")),
        l = n(i("b48a"));

    function n(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var c = {
      data: function data() {
        return {
          pickerValue: [0, 0, 0],
          provinceDataList: [],
          cityDataList: [],
          areaDataList: [],
          showPicker: !1
        };
      },
      created: function created() {
        this.init();
      },
      props: {
        pickerValueDefault: {
          type: Array,
          default: function _default() {
            return [0, 0, 0];
          }
        },
        themeColor: String
      },
      watch: {
        pickerValueDefault: function pickerValueDefault() {
          this.init();
        }
      },
      methods: {
        init: function init() {
          this.handPickValueDefault(), this.provinceDataList = a.default, this.cityDataList = u.default[this.pickerValueDefault[0]], this.areaDataList = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]], this.pickerValue = this.pickerValueDefault;
        },
        show: function show() {
          var t = this;
          setTimeout(function () {
            t.showPicker = !0;
          }, 0);
        },
        maskClick: function maskClick() {
          this.pickerCancel();
        },
        pickerCancel: function pickerCancel() {
          this.showPicker = !1, this._$emit("onCancel");
        },
        pickerConfirm: function pickerConfirm(t) {
          this.showPicker = !1, this._$emit("onConfirm");
        },
        showPickerView: function showPickerView() {
          this.showPicker = !0;
        },
        handPickValueDefault: function handPickValueDefault() {
          this.pickerValueDefault !== [0, 0, 0] && (this.pickerValueDefault[0] > a.default.length - 1 && (this.pickerValueDefault[0] = a.default.length - 1), this.pickerValueDefault[1] > u.default[this.pickerValueDefault[0]].length - 1 && (this.pickerValueDefault[1] = u.default[this.pickerValueDefault[0]].length - 1), this.pickerValueDefault[2] > l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1 && (this.pickerValueDefault[2] = l.default[this.pickerValueDefault[0]][this.pickerValueDefault[1]].length - 1));
        },
        pickerChange: function pickerChange(t) {
          var e = t.mp.detail.value;
          this.pickerValue[0] !== e[0] ? (this.cityDataList = u.default[e[0]], this.areaDataList = l.default[e[0]][0], e[1] = 0, e[2] = 0) : this.pickerValue[1] !== e[1] && (this.areaDataList = l.default[e[0]][e[1]], e[2] = 0), this.pickerValue = e, this._$emit("onChange");
        },
        _$emit: function _$emit(t) {
          var e = {
            label: this._getLabel(),
            value: this.pickerValue,
            cityCode: this._getCityCode()
          };
          this.$emit(t, e);
        },
        _getLabel: function _getLabel() {
          var t = this.provinceDataList[this.pickerValue[0]].label + "-" + this.cityDataList[this.pickerValue[1]].label + "-" + this.areaDataList[this.pickerValue[2]].label;
          return t;
        },
        _getCityCode: function _getCityCode() {
          return this.areaDataList[this.pickerValue[2]].value;
        }
      }
    };
    e.default = c;
  },
  a751: function a751(t, e, i) {
    "use strict";

    var a = i("37a7"),
        u = i.n(a);
    u.a;
  },
  ddd8: function ddd8(t, e, i) {
    "use strict";

    var a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    i.d(e, "a", function () {
      return a;
    }), i.d(e, "b", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mpvue-citypicker/mpvueCityPicker-create-component', {
  'components/mpvue-citypicker/mpvueCityPicker-create-component': function componentsMpvueCitypickerMpvueCityPickerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0e3c"));
  }
}, [['components/mpvue-citypicker/mpvueCityPicker-create-component']]]);
});
require('components/mpvue-citypicker/mpvueCityPicker.js');
__wxRoute = 'components/order-list/order-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/order-list/order-list.js';

define('components/order-list/order-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/order-list/order-list"], {
  "1ebd": function ebd(t, e, n) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = {
        props: ["list"],
        data: function data() {
          return {};
        },
        methods: {
          paymentStates: function paymentStates(t) {
            var e;

            switch (t) {
              case 0:
                e = "待付款";
                break;

              case 1:
                e = "待发货";
                break;

              case 2:
                e = "待收货";
                break;

              case 3:
                e = "待评价";
            }

            return e;
          },
          cancel: function cancel(e, i) {
            var r = this;
            t.showModal({
              title: "取消订单",
              content: "确认要取消该笔订单吗？",
              cancelText: "暂不取消",
              confirmText: "确定取消",
              confirmColor: "#f00",
              success: function success(t) {
                t.confirm && (console.log(n(e, i, " at components\\order-list\\order-list.vue:90")), r.list.splice(i, 1));
              }
            });
          },
          payment: function payment(t, e) {
            this.$emit("payments", {
              order_id: t,
              index: e
            });
          },
          returngoods: function returngoods(t, e) {
            this.$emit("returngood", {
              order_id: t,
              index: e
            });
          },
          aftersale: function aftersale(t) {},
          see: function see(t) {
            this.$emit("logistics", t);
          },
          confirm: function confirm(t, e) {
            this.$emit("confirms", {
              order_id: t,
              index: e
            });
          },
          evaluate: function evaluate(t) {
            this.$emit("evaluates", t);
          },
          jump: function jump(t) {
            this.$emit("jumpUri");
          }
        }
      };
      e.default = i;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  "2bc5": function bc5(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("eba7"),
        r = n("7fa9");

    for (var o in r) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(o);
    }

    n("6cc5");
    var a = n("2877"),
        c = Object(a["a"])(r["default"], i["a"], i["b"], !1, null, null, null);
    e["default"] = c.exports;
  },
  "3be6": function be6(t, e, n) {},
  "6cc5": function cc5(t, e, n) {
    "use strict";

    var i = n("3be6"),
        r = n.n(i);
    r.a;
  },
  "7fa9": function fa9(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("1ebd"),
        r = n.n(i);

    for (var o in i) {
      "default" !== o && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(o);
    }

    e["default"] = r.a;
  },
  eba7: function eba7(t, e, n) {
    "use strict";

    var i = function i() {
      var t = this,
          e = t.$createElement,
          n = (t._self._c, t.__map(t.list, function (e, n) {
        var i = t.paymentStates(e.paymentState);
        return {
          $orig: t.__get_orig(e),
          m0: i
        };
      }));
      t.$mp.data = Object.assign({}, {
        $root: {
          l0: n
        }
      });
    },
        r = [];

    n.d(e, "a", function () {
      return i;
    }), n.d(e, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/order-list/order-list-create-component', {
  'components/order-list/order-list-create-component': function componentsOrderListOrderListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("2bc5"));
  }
}, [['components/order-list/order-list-create-component']]]);
});
require('components/order-list/order-list.js');
__wxRoute = 'components/request-payment/request-payment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/request-payment/request-payment.js';

define('components/request-payment/request-payment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/request-payment/request-payment"], {
  "01c2": function c2(e, t, n) {
    "use strict";

    var o = n("269d"),
        a = n.n(o);
    a.a;
  },
  1375: function _(e, t, n) {
    "use strict";

    n.r(t);
    var o = n("3ed7"),
        a = n("a97d");

    for (var s in a) {
      "default" !== s && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(s);
    }

    n("01c2");
    var r = n("2877"),
        u = Object(r["a"])(a["default"], o["a"], o["b"], !1, null, "b0ba6150", null);
    t["default"] = u.exports;
  },
  "269d": function d(e, t, n) {},
  "3ed7": function ed7(e, t, n) {
    "use strict";

    var o = function o() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "a", function () {
      return o;
    }), n.d(t, "b", function () {
      return a;
    });
  },
  a97d: function a97d(e, t, n) {
    "use strict";

    n.r(t);
    var o = n("b9bb"),
        a = n.n(o);

    for (var s in o) {
      "default" !== s && function (e) {
        n.d(t, e, function () {
          return o[e];
        });
      }(s);
    }

    t["default"] = a.a;
  },
  b9bb: function b9bb(e, t, n) {
    "use strict";

    (function (e, o) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a = s(n("a34a"));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function r(e, t, n, o, a, s, r) {
        try {
          var u = e[s](r),
              c = u.value;
        } catch (i) {
          return void n(i);
        }

        u.done ? t(c) : Promise.resolve(c).then(o, a);
      }

      function u(e) {
        return function () {
          var t = this,
              n = arguments;
          return new Promise(function (o, a) {
            var s = e.apply(t, n);

            function u(e) {
              r(s, o, a, u, c, "next", e);
            }

            function c(e) {
              r(s, o, a, u, c, "throw", e);
            }

            u(void 0);
          });
        };
      }

      var c = {
        data: function data() {
          return {
            title: "request-payment",
            loading: !1,
            providerList: []
          };
        },
        props: {
          price: {
            type: Number,
            default: function _default() {
              return 0;
            }
          }
        },
        created: function created() {
          var t = this;
          console.log(e("获取", " at components\\request-payment\\request-payment.vue:25")), o.getProvider({
            service: "payment",
            success: function success(n) {
              console.log(e("payment success:" + JSON.stringify(n), " at components\\request-payment\\request-payment.vue:30"));
              var o = [];
              n.provider.map(function (e) {
                switch (e) {
                  case "alipay":
                    o.push({
                      name: "支付宝",
                      id: e,
                      loading: !1
                    });
                    break;

                  case "wxpay":
                    o.push({
                      name: "微信",
                      id: e,
                      loading: !1
                    });
                    break;

                  default:
                    break;
                }
              }), t.providerList = o;
            },
            fail: function fail(t) {
              console.log(e("获取支付通道失败：", t, " at components\\request-payment\\request-payment.vue:55"));
            }
          });
        },
        methods: {
          pay_func: function pay_func(e) {
            for (var t in this.providerList) {
              e == this.providerList[t].name && this.requestPayment(this.providerList[t], t);
            }
          },
          weixinPay: function weixinPay() {
            var t = this;
            console.log(e("发起支付", " at components\\request-payment\\request-payment.vue:71")), this.loading = !0, o.login({
              success: function success(n) {
                console.log(e("login success", n, " at components\\request-payment\\request-payment.vue:75")), o.request({
                  url: "https://unidemo.dcloud.net.cn/payment/wx/mp?code=".concat(n.code, "&amount=").concat(t.price),
                  success: function success(n) {
                    if (console.log(e("pay request success", n, " at components\\request-payment\\request-payment.vue:79")), 200 === n.statusCode) {
                      if (0 === n.data.ret) {
                        console.log(e("得到接口prepay_id", n.data.payment, " at components\\request-payment\\request-payment.vue:88"));
                        var a = n.data.payment;
                        o.requestPayment({
                          timeStamp: a.timeStamp,
                          nonceStr: a.nonceStr,
                          package: a.package,
                          signType: "MD5",
                          paySign: a.paySign,
                          success: function success(e) {
                            o.showToast({
                              title: "支付成功"
                            });
                          },
                          fail: function fail(e) {
                            o.showModal({
                              content: "支付失败,原因为: " + e.errMsg,
                              showCancel: !1
                            });
                          },
                          complete: function complete() {
                            t.loading = !1;
                          }
                        });
                      } else o.showModal({
                        content: n.data.desc,
                        showCancel: !1
                      });
                    } else o.showModal({
                      content: "支付失败，请重试！",
                      showCancel: !1
                    });
                  },
                  fail: function fail(n) {
                    console.log(e("fail", n, " at components\\request-payment\\request-payment.vue:120")), t.loading = !1, o.showModal({
                      content: "支付失败,原因为: " + n.errMsg,
                      showCancel: !1
                    });
                  }
                });
              },
              fail: function fail(n) {
                console.log(e("fail", n, " at components\\request-payment\\request-payment.vue:130")), t.loading = !1, o.showModal({
                  content: "支付失败,原因为: " + n.errMsg,
                  showCancel: !1
                });
              }
            });
          },
          requestPayment: function () {
            var t = u(a.default.mark(function t(n, s) {
              var r,
                  u = this;
              return a.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return this.providerList[s].loading = !0, t.next = 3, this.getOrderInfo(n.id);

                    case 3:
                      if (r = t.sent, console.log(e("得到订单信息", r, " at components\\request-payment\\request-payment.vue:142")), 200 === r.statusCode) {
                        t.next = 9;
                        break;
                      }

                      return console.log(e("获得订单信息失败", r, " at components\\request-payment\\request-payment.vue:144")), o.showModal({
                        content: "获得订单信息失败",
                        showCancel: !1
                      }), t.abrupt("return");

                    case 9:
                      o.requestPayment({
                        provider: n.id,
                        orderInfo: r.data,
                        success: function success(t) {
                          console.log(e("success", t, " at components\\request-payment\\request-payment.vue:155")), o.showToast({
                            title: "支付成功"
                          });
                        },
                        fail: function fail(t) {
                          console.log(e("fail", t, " at components\\request-payment\\request-payment.vue:161")), o.showModal({
                            content: "支付失败,原因为: " + t.errMsg,
                            showCancel: !1
                          });
                        },
                        complete: function complete() {
                          u.providerList[s].loading = !1;
                        }
                      });

                    case 10:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function n(e, n) {
              return t.apply(this, arguments);
            }

            return n;
          }(),
          getOrderInfo: function getOrderInfo(e) {
            var t = "";
            t = plus.runtime.appid;
            var n = "https://demo.dcloud.net.cn/payment/?payid=" + e + "&appid=" + t + "&total=" + this.price;
            return new Promise(function (e) {
              o.request({
                url: n,
                success: function success(t) {
                  e(t);
                },
                fail: function fail(t) {
                  e(t);
                }
              });
            });
          },
          priceChange: function priceChange(t) {
            console.log(e(t.detail.value, " at components\\request-payment\\request-payment.vue:191")), this.price = t.detail.value;
          }
        }
      };
      t.default = c;
    }).call(this, n("0de9")["default"], n("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/request-payment/request-payment-create-component', {
  'components/request-payment/request-payment-create-component': function componentsRequestPaymentRequestPaymentCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1375"));
  }
}, [['components/request-payment/request-payment-create-component']]]);
});
require('components/request-payment/request-payment.js');
__wxRoute = 'components/swiperDot/swiperDot';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/swiperDot/swiperDot.js';

define('components/swiperDot/swiperDot.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/swiperDot/swiperDot"], {
  "177b": function b(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("c911"),
        r = u.n(e);

    for (var a in e) {
      "default" !== a && function (t) {
        u.d(n, t, function () {
          return e[t];
        });
      }(a);
    }

    n["default"] = r.a;
  },
  "9a42": function a42(t, n, u) {
    "use strict";

    var e = u("b690"),
        r = u.n(e);
    r.a;
  },
  b690: function b690(t, n, u) {},
  c1d9: function c1d9(t, n, u) {
    "use strict";

    u.r(n);
    var e = u("d5bf"),
        r = u("177b");

    for (var a in r) {
      "default" !== a && function (t) {
        u.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    u("9a42");
    var c = u("2877"),
        o = Object(c["a"])(r["default"], e["a"], e["b"], !1, null, null, null);
    n["default"] = o.exports;
  },
  c911: function c911(t, n, u) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var e = {
      props: ["list", "current"],
      data: function data() {
        return {};
      }
    };
    n.default = e;
  },
  d5bf: function d5bf(t, n, u) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    u.d(n, "a", function () {
      return e;
    }), u.d(n, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/swiperDot/swiperDot-create-component', {
  'components/swiperDot/swiperDot-create-component': function componentsSwiperDotSwiperDotCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c1d9"));
  }
}, [['components/swiperDot/swiperDot-create-component']]]);
});
require('components/swiperDot/swiperDot.js');
__wxRoute = 'components/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-load-more/uni-load-more.js';

define('components/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-load-more/uni-load-more"], {
  "040b": function b(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "0eb7": function eb7(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("040b"),
        u = e("419d");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("a7ff");
    var a = e("2877"),
        f = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = f.exports;
  },
  "419d": function d(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("fe14"),
        u = e.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "63c8": function c8(t, n, e) {},
  a7ff: function a7ff(t, n, e) {
    "use strict";

    var o = e("63c8"),
        u = e.n(o);
    u.a;
  },
  fe14: function fe14(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "load-more",
      props: {
        loadingType: {
          type: Number,
          default: 0
        },
        showImage: {
          type: Boolean,
          default: !0
        },
        color: {
          type: String,
          default: "#777777"
        },
        contentText: {
          type: Object,
          default: function _default() {
            return {
              contentdown: "上拉显示更多",
              contentrefresh: "正在加载...",
              contentnomore: "没有更多数据了"
            };
          }
        }
      },
      data: function data() {
        return {};
      }
    };
    n.default = o;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-load-more/uni-load-more-create-component', {
  'components/uni-load-more/uni-load-more-create-component': function componentsUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0eb7"));
  }
}, [['components/uni-load-more/uni-load-more-create-component']]]);
});
require('components/uni-load-more/uni-load-more.js');
__wxRoute = 'components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/uni-popup.js';

define('components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/uni-popup"], {
  "027a": function a(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !1
        },
        maskClick: {
          type: Boolean,
          default: !0
        },
        show: {
          type: Boolean,
          default: !0
        },
        radius: {
          type: Boolean,
          default: !1
        }
      },
      data: function data() {
        return {
          ani: "",
          showPopup: !1
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        open: function open() {
          var t = this;
          this.$emit("change", {
            show: !0
          }), this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "uni-" + t.type;
            }, 30);
          });
        },
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  },
  "187f": function f(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  3087: function _(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("187f"),
        u = e("75c0");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("c0a8");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  "75c0": function c0(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("027a"),
        u = e.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  "7c22": function c22(t, n, e) {},
  c0a8: function c0a8(t, n, e) {
    "use strict";

    var o = e("7c22"),
        u = e.n(o);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/uni-popup-create-component', {
  'components/uni-popup/uni-popup-create-component': function componentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3087"));
  }
}, [['components/uni-popup/uni-popup-create-component']]]);
});
require('components/uni-popup/uni-popup.js');
__wxRoute = 'components/uni-upload-image/uni-upload-image';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-upload-image/uni-upload-image.js';

define('components/uni-upload-image/uni-upload-image.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-upload-image/uni-upload-image"], {
  "03d6": function d6(e, t, n) {
    "use strict";

    var a = function a() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        u = [];

    n.d(t, "a", function () {
      return a;
    }), n.d(t, "b", function () {
      return u;
    });
  },
  "07f7": function f7(e, t, n) {
    "use strict";

    (function (e) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = {
        props: {
          limit: {
            type: Number,
            default: 9
          },
          url: {
            type: String,
            required: !0
          },
          name: {
            type: String,
            default: "file"
          },
          formData: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          header: {
            type: Object,
            default: function _default() {
              return {};
            }
          },
          fileList: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {};
        },
        methods: {
          chooseImage: function chooseImage() {
            var t = this;
            e.hideKeyboard(), e.chooseImage({
              count: 9,
              sizeType: ["original", "compressed"],
              sourceType: ["album", "camera "],
              success: function success(n) {
                e.uploadFile({
                  url: t.url,
                  name: t.name,
                  filePath: n.tempFilePaths[0],
                  formData: t.formData,
                  header: t.header,
                  success: function success(e) {
                    t.$emit("on-success", JSON.parse(e.data));
                  }
                });
              },
              fail: function fail(e) {
                t.$emit("on-error", e);
              }
            });
          },
          handleRemove: function handleRemove(e) {
            this.$emit("on-remove", e);
          }
        }
      };
      t.default = n;
    }).call(this, n("6e42")["default"]);
  },
  "2ba5": function ba5(e, t, n) {
    "use strict";

    var a = n("e24f"),
        u = n.n(a);
    u.a;
  },
  "6a67": function a67(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("07f7"),
        u = n.n(a);

    for (var r in a) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return a[e];
        });
      }(r);
    }

    t["default"] = u.a;
  },
  a871: function a871(e, t, n) {
    "use strict";

    n.r(t);
    var a = n("03d6"),
        u = n("6a67");

    for (var r in u) {
      "default" !== r && function (e) {
        n.d(t, e, function () {
          return u[e];
        });
      }(r);
    }

    n("2ba5");
    var i = n("2877"),
        o = Object(i["a"])(u["default"], a["a"], a["b"], !1, null, "22bee3f4", null);
    t["default"] = o.exports;
  },
  e24f: function e24f(e, t, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-upload-image/uni-upload-image-create-component', {
  'components/uni-upload-image/uni-upload-image-create-component': function componentsUniUploadImageUniUploadImageCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("a871"));
  }
}, [['components/uni-upload-image/uni-upload-image-create-component']]]);
});
require('components/uni-upload-image/uni-upload-image.js');
__wxRoute = 'node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.js';

define('node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more"], {
  "3f0f": function f0f(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("7dbc"),
        u = e("6f97");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("736c");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  5052: function _(t, n, e) {},
  "6f97": function f97(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("9fe0"),
        u = e.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  "736c": function c(t, n, e) {
    "use strict";

    var o = e("5052"),
        u = e.n(o);
    u.a;
  },
  "7dbc": function dbc(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "9fe0": function fe0(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniLoadMore",
      props: {
        status: {
          type: String,
          default: "more"
        },
        showIcon: {
          type: Boolean,
          default: !0
        },
        color: {
          type: String,
          default: "#777777"
        },
        contentText: {
          type: Object,
          default: function _default() {
            return {
              contentdown: "上拉显示更多",
              contentrefresh: "正在加载...",
              contentnomore: "没有更多数据了"
            };
          }
        }
      },
      data: function data() {
        return {};
      }
    };
    n.default = o;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more-create-component', {
  'node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more-create-component': function nodeModulesDcloudioUniUiLibUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3f0f"));
  }
}, [['node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more-create-component']]]);
});
require('node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{3572:function(t,i,e){},5816:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c;t._isMounted||(t.e0=function(i){t.tab_num=1},t.e1=function(i){t.tab_num=2},t.e2=function(i){t.tab_num=3},t.e3=function(i){t.tab_num=4},t.e4=function(i){t.show_search_btn=!1},t.e5=function(i){t.show_search_btn=!0})},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},9000:function(t,i,e){"use strict";(function(t,n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e("2f62"),a=s(e("5a51"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{},n=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.forEach(function(i){g(t,i,e[i])})}return t}function g(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var m=function(){return e.e("components/swiperDot/swiperDot").then(e.bind(null,"c1d9"))},r={data:function(){return{currentdot:0,tab_num:1,autoplay:!0,interval:5e3,duration:300,indicatorDots:!0,title:"首页",city_id:{},wendu:"",home_banner_list:["/static/img/home/banner/1.png","/static/img/home/banner/2.png","/static/img/home/banner/3.png","/static/img/home/banner/4.png"],lazy_load_left:["/static/img/home/sayspace/1124.png","/static/img/home/sayspace/1126.png","/static/img/home/sayspace/1126.png"],lazy_load_right:["/static/img/home/sayspace/1126.png","/static/img/home/sayspace/1126.png","/static/img/home/sayspace/1124.png"],home_banner_space:["/static/img/home/sayspace/01.png","/static/img/home/sayspace/01.png","/static/img/home/sayspace/01.png","/static/img/home/sayspace/01.png"],store_img_list:[["/static/img/home/store_img1.png","/static/img/home/store_img2.png","/static/img/home/store_img3.png","/static/img/home/store_img4.png"],["/static/img/home/store_img1.png","/static/img/home/store_img2.png","/static/img/home/store_img3.png","/static/img/home/store_img4.png"],["/static/img/home/store_img1.png","/static/img/home/store_img2.png","/static/img/home/store_img3.png","/static/img/home/store_img4.png"]],swiper_list:["/static/img/home/swiper_img1.png","/static/img/home/swiper_img1.png","/static/img/home/swiper_img1.png"],suit_img_list:[["/static/img/home/suit_img1.png","/static/img/home/suit_img2.png","/static/img/home/suit_img3.png"],["/static/img/home/suit_img1.png","/static/img/home/suit_img2.png","/static/img/home/suit_img3.png"],["/static/img/home/suit_img1.png","/static/img/home/suit_img2.png","/static/img/home/suit_img3.png"]],sign_img_list:[["/static/img/home/sign_img1.png","/static/img/home/sign_img2.png","/static/img/home/sign_img3.png"],["/static/img/home/sign_img1.png","/static/img/home/sign_img2.png","/static/img/home/sign_img3.png"],["/static/img/home/sign_img1.png","/static/img/home/sign_img2.png","/static/img/home/sign_img3.png"]],headerTop:0,opacity:1,home_animation_top:0,show_search_btn:!1,total_box_margin:!1,small_header:!1,small_header_Y:0,content_height:0,temp_content_height:null}},components:{swiperDot:m},onLoad:function(){this.is_empty(this.help.load("token",!0))||this.$store.dispatch("save",{token:this.help.load("token",!0)})},mounted:function(){var i=this,e=t.createSelectorQuery().select(".home_animation");e.boundingClientRect(function(t){i.content_height=t.height,i.temp_content_height=t.height}).exec(),this.get_wendu(a.default[String(this.currentDistrict).replace("市","").replace("区","")])},onPageScroll:function(t){t.scrollTop>100?this.small_header_Y=-50:this.small_header_Y=0;var i=1;i=1-1*t.scrollTop/550,this.opacity=i,this.opacity<=0?(this.opacity=0,this.home_animation_top=-130,this.temp_content_height=this.content_height-130):(this.home_animation_top=0,this.temp_content_height=this.content_height)},watch:{currentCity:{handler:function(t,i){this.get_wendu(a.default[String(this.currentDistrict).replace("市","").replace("区","")])},deep:!0}},computed:c({},(0,o.mapState)(["is_ios","userPoint","currentCity","currentDistrict","token"])),methods:{link_login:function(){t.navigateTo({url:"/pages/auth/login/login",success:function(t){},fail:function(){},complete:function(){}})},open_list:function(i){t.navigateTo({url:"../goods_list/goods_list?title="+i,success:function(t){},fail:function(){},complete:function(){}})},link_search:function(){t.navigateTo({url:"../search/search",animationType:"slide-in-bottom",animationDuration:250,success:function(t){},fail:function(){},complete:function(){}})},link_scan:function(){t.navigateTo({url:"../scan/scan",success:function(t){},fail:function(){},complete:function(){}})},get_wendu:function(i){var e=this;t.request({url:"http://t.weather.sojson.com/api/weather/city/"+i,type:"GET",success:function(t){console.log(n(t.data.data," at pages\\index\\index.vue:647")),e.wendu=t.data.data.wendu},fail:function(t){console.log(n("http_post_error:"+params.api," at pages\\index\\index.vue:652")),console.log(n(t," at pages\\index\\index.vue:653"))}})},jump:function(i){t.navigateTo({url:"../detail/goodsinfo?itemid="+i})},changedot:function(t){this.currentdot=t.detail.current},my_fix:function(i){t.navigateTo({url:"../myfix/myfix?title="+i})}}};i.default=r}).call(this,e("6e42")["default"],e("0de9")["default"])},c6b7:function(t,i,e){"use strict";e.r(i);var n=e("5816"),o=e("f334");for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);e("d674");var s=e("2877"),c=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"5d101fad",null);i["default"]=c.exports},d674:function(t,i,e){"use strict";var n=e("3572"),o=e.n(n);o.a},f334:function(t,i,e){"use strict";e.r(i);var n=e("9000"),o=e.n(n);for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);i["default"]=o.a},fe07:function(t,i,e){"use strict";(function(t){e("0947"),e("921b");n(e("66fd"));var i=n(e("c6b7"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("6e42")["createPage"])}},[["fe07","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cart/cart.js';

define('pages/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"0a5b":function(t,s,o){"use strict";o.r(s);var e=o("e94e"),i=o.n(e);for(var l in e)"default"!==l&&function(t){o.d(s,t,function(){return e[t]})}(l);s["default"]=i.a},"0bfa":function(t,s,o){"use strict";var e=o("3bda"),i=o.n(e);i.a},"3bda":function(t,s,o){},"5b2c":function(t,s,o){"use strict";o.r(s);var e=o("70ca"),i=o("0a5b");for(var l in i)"default"!==l&&function(t){o.d(s,t,function(){return i[t]})}(l);o("0bfa");var n=o("2877"),h=Object(n["a"])(i["default"],e["a"],e["b"],!1,null,"7faee2e3",null);s["default"]=h.exports},"70ca":function(t,s,o){"use strict";var e=function(){var t=this,s=t.$createElement;t._self._c},i=[];o.d(s,"a",function(){return e}),o.d(s,"b",function(){return i})},b44b:function(t,s,o){"use strict";(function(t){o("0947"),o("921b");e(o("66fd"));var s=e(o("5b2c"));function e(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,o("6e42")["createPage"])},e94e:function(t,s,o){"use strict";(function(t,e){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=o("2f62");function l(t){for(var s=1;s<arguments.length;s++){var o=null!=arguments[s]?arguments[s]:{},e=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(s){n(t,s,o[s])})}return t}function n(t,s,o){return s in t?Object.defineProperty(t,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[s]=o,t}var h=function(){return o.e("components/guess-like/guess-like").then(o.bind(null,"a9e2"))},r={components:{GuessLike:h},data:function(){return{is_edit:!1,select_index:0,total_box_margin:!1,shop_goods_list:[],goods:{like:[{good_id:2,img:"/static/img/goods/shopImg.jpg",title:"实木床1.8米现代简约双人床",price:"1200",payment:"12",add:"广州",supply:"供货商"},{good_id:4,img:"/static/img/goods/shopImg.jpg",title:"实木床1.8米现代简约双人床",price:"2200",payment:"8",add:"深圳",supply:"供货商"},{good_id:5,img:"/static/img/goods/shopImg.jpg",title:"实木床1.8米现代简约双人床",price:"3200",payment:"5",add:"湖北",supply:"供货商"}]}}},onLoad:function(){},onShow:function(){this.shop_goods_list=this.help.load("userCart")},onHide:function(){},onNavigationBarButtonTap:function(t){var s=this.$mp.page.$getAppWebview();0==t.index&&(this.is_edit?(this.is_edit=!1,s.setTitleNViewButtonStyle(0,{text:"编辑"})):(this.is_edit=!0,s.setTitleNViewButtonStyle(0,{text:"完成"})))},watch:{},computed:l({},(0,i.mapState)(["is_ios","userPoint"]),{shop_total_price:function(){for(var t=[],s=0;s<this.shop_goods_list.length;s++){for(var o=0,e=0;e<this.shop_goods_list[s].goods_list.length;e++)this.shop_goods_list[s].goods_list[e].checked&&(o+=Number(this.shop_goods_list[s].goods_list[e].price)*Number(this.shop_goods_list[s].goods_list[e].good_num));o>0&&(o+=Number(this.shop_goods_list[s].freight)),t.push(o)}return t},all_total_price:function(){for(var t=0,s=0;s<this.shop_total_price.length;s++)t+=this.shop_total_price[s];return t},select_number:function(){for(var t=0,s=0;s<this.shop_goods_list.length;s++)for(var o=0;o<this.shop_goods_list[s].goods_list.length;o++)this.shop_goods_list[s].goods_list[o].checked&&t++;return t},shop_select_all:function(){for(var t=[],s=0;s<this.shop_goods_list.length;s++){for(var o=!0,e=0;e<this.shop_goods_list[s].goods_list.length;e++)this.shop_goods_list[s].goods_list[e].checked||(o=!1);t.push(o)}return t},total_all_select:function(){for(var t=!0,s=0;s<this.shop_select_all.length;s++)this.shop_select_all[s]||(t=!1);return t}}),methods:{link_order:function(){t.navigateTo({url:"/pages/confirmationOrder/confirmationOrder",success:function(t){},fail:function(){},complete:function(){}})},add_flower:function(){},delete_fun:function(){var t=this,s=this.select_number,o="确认将"+s+"个商品删除？";this.help.confirm(o,function(){for(var s=t.shop_goods_list.length-1;s>=0;s--)if(t.shop_select_all[s])t.shop_goods_list.splice(s,1);else for(var o=t.shop_goods_list[s].goods_list.length-1;o>=0;o--)t.shop_goods_list[s].goods_list[o].checked&&t.shop_goods_list[s].goods_list.splice(o,1);t.help.save("userCart",t.shop_goods_list)},"提示",["确认","我再想想"])},select_goods:function(t){console.log(e(t," at pages\\cart\\cart.vue:255"))},checkboxChange:function(t,s){for(var o=!1,e=this.shop_goods_list,i=t.detail.value,l=e[s],n=0;n<l.goods_list.length;n++)i.includes(s+"_"+n)?this.$set(l.goods_list[n],"checked",!0):this.$set(l.goods_list[n],"checked",!1),l.goods_list[n].checked&&(o=!0);this.$set(l,"haschecked",o),this.help.save("userCart",this.shop_goods_list)},all_checkboxChange:function(t,s){console.log(e(this.shop_select_all[s]," at pages\\cart\\cart.vue:277"));var o=this.shop_goods_list,i=o[s];if(this.shop_select_all[s])for(var l=0;l<i.goods_list.length;l++)this.$set(i.goods_list[l],"checked",!1),this.$set(i,"haschecked",!1);else for(var n=0;n<i.goods_list.length;n++)this.$set(i.goods_list[n],"checked",!0),this.$set(i,"haschecked",!0);this.help.save("userCart",this.shop_goods_list)},total_all_checkboxChange:function(t){for(var s=!0,o=this.shop_goods_list,e=0;e<o.length;e++)this.shop_select_all[e]||(s=!1);if(s)for(var i=0;i<o.length;i++)for(var l=o[i],n=0;n<l.goods_list.length;n++)this.$set(l.goods_list[n],"checked",!1),this.$set(l,"haschecked",!1);else for(var h=0;h<o.length;h++)for(var r=o[h],a=0;a<r.goods_list.length;a++)this.$set(r.goods_list[a],"checked",!0),this.$set(r,"haschecked",!0);this.help.save("userCart",this.shop_goods_list)},reduce:function(t,s){var o=this.shop_goods_list[t].goods_list[s].good_num;o>1&&(o--,this.shop_goods_list[t].goods_list[s].good_num=o,this.$set(this.shop_goods_list[t].goods_list[s],"good_num",o),this.help.save("userCart",this.shop_goods_list))},add:function(t,s){var o=this.shop_goods_list[t].goods_list[s].good_num;o++,this.shop_goods_list[t].goods_list[s].good_num=o,this.$set(this.shop_goods_list[t].goods_list[s],"good_num",o),this.help.save("userCart",this.shop_goods_list)}}};s.default=r}).call(this,o("6e42")["default"],o("0de9")["default"])}},[["b44b","common/runtime","common/vendor"]]]);
});
require('pages/cart/cart.js');
__wxRoute = 'pages/send/send';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/send/send.js';

define('pages/send/send.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/send/send"],{"05e5":function(e,n,t){"use strict";t.r(n);var u=t("1783"),a=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);n["default"]=a.a},1783:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},"6ba5":function(e,n,t){"use strict";var u=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return u}),t.d(n,"b",function(){return a})},"6bad":function(e,n,t){"use strict";(function(e){t("0947"),t("921b");u(t("66fd"));var n=u(t("ef97"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},ef97:function(e,n,t){"use strict";t.r(n);var u=t("6ba5"),a=t("05e5");for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);var o=t("2877"),f=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=f.exports}},[["6bad","common/runtime","common/vendor"]]]);
});
require('pages/send/send.js');
__wxRoute = 'pages/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chat.js';

define('pages/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/chat"],{"23b0":function(i,g,t){"use strict";var f=t("306d"),l=t.n(f);l.a},"2c20":function(i,g,t){"use strict";(function(i,f){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0,t("2598");var l={data:function(){return{textMsg:"",scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,RECORDER:i.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:i.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,showEmji:"",emojiList:[[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]],onlineEmoji:{"100.gif":"AbNQgA.gif","101.gif":"AbN3ut.gif","102.gif":"AbNM3d.gif","103.gif":"AbN8DP.gif","104.gif":"AbNljI.gif","105.gif":"AbNtUS.gif","106.gif":"AbNGHf.gif","107.gif":"AbNYE8.gif","108.gif":"AbNaCQ.gif","109.gif":"AbNN4g.gif","110.gif":"AbN0vn.gif","111.gif":"AbNd3j.gif","112.gif":"AbNsbV.gif","113.gif":"AbNwgs.gif","114.gif":"AbNrD0.gif","115.gif":"AbNDuq.gif","116.gif":"AbNg5F.gif","117.gif":"AbN6ET.gif","118.gif":"AbNcUU.gif","119.gif":"AbNRC4.gif","120.gif":"AbNhvR.gif","121.gif":"AbNf29.gif","122.gif":"AbNW8J.gif","123.gif":"AbNob6.gif","124.gif":"AbN5K1.gif","125.gif":"AbNHUO.gif","126.gif":"AbNIDx.gif","127.gif":"AbN7VK.gif","128.gif":"AbNb5D.gif","129.gif":"AbNX2d.gif","130.gif":"AbNLPe.gif","131.gif":"AbNjxA.gif","132.gif":"AbNO8H.gif","133.gif":"AbNxKI.gif","134.gif":"AbNzrt.gif","135.gif":"AbU9Vf.gif","136.gif":"AbUSqP.gif","137.gif":"AbUCa8.gif","138.gif":"AbUkGQ.gif","139.gif":"AbUFPg.gif","140.gif":"AbUPIS.gif","141.gif":"AbUZMn.gif","142.gif":"AbUExs.gif","143.gif":"AbUA2j.gif","144.gif":"AbUMIU.gif","145.gif":"AbUerq.gif","146.gif":"AbUKaT.gif","147.gif":"AbUmq0.gif","148.gif":"AbUuZV.gif","149.gif":"AbUliF.gif","150.gif":"AbU1G4.gif","151.gif":"AbU8z9.gif","152.gif":"AbU3RJ.gif","153.gif":"AbUYs1.gif","154.gif":"AbUJMR.gif","155.gif":"AbUadK.gif","156.gif":"AbUtqx.gif","157.gif":"AbUUZ6.gif","158.gif":"AbUBJe.gif","159.gif":"AbUdIO.gif","160.gif":"AbU0iD.gif","161.gif":"AbUrzd.gif","162.gif":"AbUDRH.gif","163.gif":"AbUyQA.gif","164.gif":"AbUWo8.gif","165.gif":"AbU6sI.gif","166.gif":"AbU2eP.gif","167.gif":"AbUcLt.gif","168.gif":"AbU4Jg.gif","169.gif":"AbURdf.gif","170.gif":"AbUhFS.gif","171.gif":"AbU5WQ.gif","172.gif":"AbULwV.gif","173.gif":"AbUIzj.gif","174.gif":"AbUTQs.gif","175.gif":"AbU7yn.gif","176.gif":"AbUqe0.gif","177.gif":"AbUHLq.gif","178.gif":"AbUOoT.gif","179.gif":"AbUvYF.gif","180.gif":"AbUjFU.gif","181.gif":"AbaSSJ.gif","182.gif":"AbUxW4.gif","183.gif":"AbaCO1.gif","184.gif":"Abapl9.gif","185.gif":"Aba9yR.gif","186.gif":"AbaFw6.gif","187.gif":"Abaiex.gif","188.gif":"AbakTK.gif","189.gif":"AbaZfe.png","190.gif":"AbaEFO.gif","191.gif":"AbaVYD.gif","192.gif":"AbamSH.gif","193.gif":"AbaKOI.gif","194.gif":"Abanld.gif","195.gif":"Abau6A.gif","196.gif":"AbaQmt.gif","197.gif":"Abal0P.gif","198.gif":"AbatpQ.gif","199.gif":"Aba1Tf.gif","200.png":"Aba8k8.png","201.png":"AbaGtS.png","202.png":"AbaJfg.png","203.png":"AbaNlj.png","204.png":"Abawmq.png","205.png":"AbaU6s.png","206.png":"AbaaXn.png","207.png":"Aba000.png","208.png":"AbarkT.png","209.png":"AbastU.png","210.png":"AbaB7V.png","211.png":"Abafn1.png","212.png":"Abacp4.png","213.png":"AbayhF.png","214.png":"Abag1J.png","215.png":"Aba2c9.png","216.png":"AbaRXR.png","217.png":"Aba476.png","218.png":"Abah0x.png","219.png":"Abdg58.png"}}},onLoad:function(g){var t=this;i.setNavigationBarTitle({title:g.title}),this.getMsgList(),this.AUDIO.onEnded(function(i){t.playMsgid=null}),this.RECORDER.onStart(function(i){t.recordBegin(i)}),this.RECORDER.onStop(function(i){t.recordEnd(i)})},methods:{getFocus:function(i){var g=document.getElementById("textMsg");g.scrollIntoView()},getMsgList:function(){for(var i=[{id:0,uid:0,username:"大黑哥",face:"/static/img/message/toux.png",time:"12:56",type:"text",msg:{content:"为什么没有可口可乐？"}},{id:1,uid:1,username:"售后客服008",face:"/static/img/message/touxiang.png",time:"12:57",type:"text",msg:{content:"因为青椒炒饭比较好吃"}}],g=0;g<i.length;g++)"img"==i[g].type&&(i[g]=this.setPicSize(i[g]),console.log(f("list[i]: "+JSON.stringify(i[g])," at pages\\chat\\chat.vue:191")),this.msgImgList.push(i[g].msg.url));this.msgList=i,this.$nextTick(function(){this.scrollTop=9999,this.scrollAnimation=!0})},setPicSize:function(g){var t=i.upx2px(350),f=i.upx2px(350);if(g.msg.w>t||g.msg.h>f){var l=g.msg.w/g.msg.h;g.msg.w>g.msg.h?(g.msg.w=t,g.msg.h=g.msg.w/l):(g.msg.h=f,g.msg.w=g.msg.h*l)}return g},screenMsg:function(g){switch(g.uid!=this.myuid&&i.vibrateLong(),g.type){case"text":this.addTextMsg(g);break;case"voice":this.addVoiceMsg(g);break;case"img":this.addImgMsg(g);break}this.$nextTick(function(){this.scrollToView="msg"+g.id})},chooseEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":"showEmoji"},hideEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":""},addEmoji:function(i){this.textMsg+=i.alt},sendText:function(){if(this.hideEmoji(),this.textMsg){var i=this.replaceEmoji(this.textMsg),g={content:i};this.sendMsg(g,"text"),this.textMsg=""}},replaceEmoji:function(i){var g=this,t=i.replace(/\[([^(\]|\[)]*)\]/g,function(i,t){console.log(f("item: "+i," at pages\\chat\\chat.vue:265"));for(var l=0;l<g.emojiList.length;l++)for(var e=g.emojiList[l],a=0;a<e.length;a++){var n=e[a];if(n.alt==i){var s="https://s2.ax1x.com/2019/04/12/",r='<img src="'+s+g.onlineEmoji[n.url]+'">';return console.log(f("imgstr: "+r," at pages\\chat\\chat.vue:274")),r}}});return'<div style="display: flex;align-items: center;">'+t+"</div>"},chooseImage:function(){var g=this;this.hideEmoji(),i.chooseImage({sizeType:["original","compressed"],success:function(t){for(var l=function(l){i.getImageInfo({src:t.tempFilePaths[l],success:function(i){console.log(f(i.width," at pages\\chat\\chat.vue:292")),console.log(f(i.height," at pages\\chat\\chat.vue:293"));var e={url:t.tempFilePaths[l],w:i.width,h:i.height};g.sendMsg(e,"img")}})},e=0;e<t.tempFilePaths.length;e++)l(e)}})},sendMsg:function(i,g){var t=this,f=new Date,l=this.msgList[this.msgList.length-1].id;l++;var e={id:l,uid:0,username:"大黑哥",face:"/static/img/message/toux.png",time:f.getHours()+":"+f.getMinutes(),type:g,msg:i};this.screenMsg(e),setTimeout(function(){l=t.msgList[t.msgList.length-1].id,l++,e={id:l,uid:1,username:"售后客服008",face:"/static/img/message/touxiang.png",time:f.getHours()+":"+f.getMinutes(),type:g,msg:i},t.screenMsg(e)},3e3)},addTextMsg:function(i){this.msgList.push(i)},addVoiceMsg:function(i){this.msgList.push(i)},addImgMsg:function(i){i=this.setPicSize(i),this.msgImgList.push(i.msg.url),this.msgList.push(i)},showPic:function(g){i.previewImage({indicator:"none",current:g.msg.url,urls:this.msgImgList})},playVoice:function(i){this.playMsgid=i.id,this.AUDIO.src=i.msg.url,console.log(f("msg.msg.url: "+i.msg.url," at pages\\chat\\chat.vue:345")),this.AUDIO.play()},voiceBegin:function(i){i.touches.length>1||(this.initPoint.Y=i.touches[0].clientY,this.initPoint.identifier=i.touches[0].identifier,this.RECORDER.start({format:"aac"}))},recordBegin:function(i){var g=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval(function(){g.recordLength++},1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(g){if(this.recording){var t=g.touches[0];this.initPoint.Y-t.clientY>=i.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(i){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(i){if(clearInterval(this.recordTimer),this.willStop)console.log(f("取消发送录音"," at pages\\chat\\chat.vue:424"));else{plus.io.resolveLocalFileSystemURL(i.tempFilePath,function(i){i.file(function(i){console.log(f(i.size+"--"+i.name," at pages\\chat\\chat.vue:407"))})},function(i){alert("Resolve file URL failed: "+i.message)}),console.log(f("e: "+JSON.stringify(i)," at pages\\chat\\chat.vue:412"));var g={length:0,url:i.tempFilePath},t=parseInt(this.recordLength/60),l=this.recordLength%60;t=t<10?"0"+t:t,l=l<10?"0"+l:l,g.length=t+":"+l,this.sendMsg(g,"voice")}this.willStop=!1},switchVoice:function(){this.hideEmoji(),this.isVoice=!this.isVoice},discard:function(){}}};g.default=l}).call(this,t("6e42")["default"],t("0de9")["default"])},"306d":function(i,g,t){},"3fd2":function(i,g,t){"use strict";t.r(g);var f=t("64d2"),l=t("8aeb");for(var e in l)"default"!==e&&function(i){t.d(g,i,function(){return l[i]})}(e);t("23b0");var a=t("2877"),n=Object(a["a"])(l["default"],f["a"],f["b"],!1,null,null,null);g["default"]=n.exports},"64d2":function(i,g,t){"use strict";var f=function(){var i=this,g=i.$createElement;i._self._c},l=[];t.d(g,"a",function(){return f}),t.d(g,"b",function(){return l})},"8aeb":function(i,g,t){"use strict";t.r(g);var f=t("2c20"),l=t.n(f);for(var e in f)"default"!==e&&function(i){t.d(g,i,function(){return f[i]})}(e);g["default"]=l.a},aed5:function(i,g,t){"use strict";(function(i){t("0947"),t("921b");f(t("66fd"));var g=f(t("3fd2"));function f(i){return i&&i.__esModule?i:{default:i}}i(g.default)}).call(this,t("6e42")["createPage"])}},[["aed5","common/runtime","common/vendor"]]]);
});
require('pages/chat/chat.js');
__wxRoute = 'pages/message/message';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/message/message.js';

define('pages/message/message.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/message"],{"0284":function(t,e,n){"use strict";n.r(e);var u=n("f876"),a=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,function(){return u[t]})}(c);e["default"]=a.a},"095b":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"6b01":function(t,e,n){"use strict";(function(t){n("0947"),n("921b");u(n("66fd"));var e=u(n("a648"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a648:function(t,e,n){"use strict";n.r(e);var u=n("095b"),a=n("0284");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("e408");var o=n("2877"),r=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,"0d4c9019",null);e["default"]=r.exports},e408:function(t,e,n){"use strict";var u=n("f8cc"),a=n.n(u);a.a},f876:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("1b42");var u={data:function(){return{}},methods:{to1:function(e){t.navigateTo({url:"./systemMessage/index?title="+e})},to2:function(e){t.navigateTo({url:"../chat/chat?title="+e})}}};e.default=u}).call(this,n("6e42")["default"])},f8cc:function(t,e,n){}},[["6b01","common/runtime","common/vendor"]]]);
});
require('pages/message/message.js');
__wxRoute = 'pages/goods_list/goods_list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goods_list/goods_list.js';

define('pages/goods_list/goods_list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_list/goods_list"],{"0c77":function(t,i,e){"use strict";e.r(i);var n=e("0d84"),o=e("29a3");for(var s in o)"default"!==s&&function(t){e.d(i,t,function(){return o[t]})}(s);e("6d04");var u=e("2877"),r=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,"4ae552a4",null);i["default"]=r.exports},"0d84":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},o=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return o})},1710:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;e("2f62");var n=function(){return e.e("components/goods-list/goods-list").then(e.bind(null,"e455"))},o={components:{goodsList:n},data:function(){return{is_h5:!1,tab_num:1,tag_list:[{title:"家具",list:["个性化定制","床","柜子","沙发","椅子","吧台","电脑台","梳妆台","床垫","屏风","茶几","餐桌"]},{title:"摆件",list:["座地装饰柱","工艺摆件","收藏摆件","装饰画","全部"]}],goods_list:[{url:"/static/img/list_img1.jpg",goods_id:"1",title:"实木床1.8米现代简约双人床",price:1899,buy_num:9,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"}]}},onLoad:function(i){t.setNavigationBarTitle({title:i.title})},onNavigationBarButtonTap:function(i){0==i.index&&t.navigateTo({url:"../search/search",animationType:"slide-in-bottom",animationDuration:250,success:function(t){},fail:function(){},complete:function(){}})},methods:{}};i.default=o}).call(this,e("6e42")["default"])},"29a3":function(t,i,e){"use strict";e.r(i);var n=e("1710"),o=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=o.a},"45b6":function(t,i,e){},"5a2e":function(t,i,e){"use strict";(function(t){e("0947"),e("921b");n(e("66fd"));var i=n(e("0c77"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("6e42")["createPage"])},"6d04":function(t,i,e){"use strict";var n=e("45b6"),o=e.n(n);o.a}},[["5a2e","common/runtime","common/vendor"]]]);
});
require('pages/goods_list/goods_list.js');
__wxRoute = 'pages/scan/scan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/scan/scan.js';

define('pages/scan/scan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/scan/scan"],{"310e":function(e,t,n){"use strict";n.r(t);var a=n("9c58"),c=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=c.a},"9c58":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{barcode:null,currentWebview:null}},onLoad:function(){var t=plus.runtime.appid;console.log(e("应用的 appid 为："+t," at pages\\scan\\scan.vue:16")),this.currentWebview=this.$mp.page.$getAppWebview()},onShow:function(){this.createBarcode()},onHide:function(){this.barcode=null,this.currentWebview=null},methods:{onmarked:function(t,n){var a="未知: ";switch(t){case plus.barcode.QR:a="QR: ";break;case plus.barcode.EAN13:a="EAN13: ";break;case plus.barcode.EAN8:a="EAN8: ";break}console.log(e(a+n," at pages\\scan\\scan.vue:45")),plus.runtime.openWeb(n)},createBarcode:function(){this.barcode||(this.barcode=plus.barcode.create("barcode",[plus.barcode.QR],{top:"0",left:"0px",width:"100%",height:"100%",position:"static"}),this.barcode.onmarked=this.onmarked,this.currentWebview.append(this.barcode)),this.barcode.start()}}};t.default=n}).call(this,n("0de9")["default"])},a640:function(e,t,n){"use strict";(function(e){n("0947"),n("921b");a(n("66fd"));var t=a(n("e5c3"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c4ff:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return c})},e5c3:function(e,t,n){"use strict";n.r(t);var a=n("c4ff"),c=n("310e");for(var r in c)"default"!==r&&function(e){n.d(t,e,function(){return c[e]})}(r);var o=n("2877"),u=Object(o["a"])(c["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports}},[["a640","common/runtime","common/vendor"]]]);
});
require('pages/scan/scan.js');
__wxRoute = 'pages/auth/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/auth/login/login.js';

define('pages/auth/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/auth/login/login"],{"0787":function(t,i,s){"use strict";s.r(i);var n=s("79a8"),e=s("3d95");for(var a in e)"default"!==a&&function(t){s.d(i,t,function(){return e[t]})}(a);s("0cbc");var o=s("2877"),u=Object(o["a"])(e["default"],n["a"],n["b"],!1,null,"6bf52a88",null);i["default"]=u.exports},"0cbc":function(t,i,s){"use strict";var n=s("48c6"),e=s.n(n);e.a},"3d95":function(t,i,s){"use strict";s.r(i);var n=s("935e"),e=s.n(n);for(var a in n)"default"!==a&&function(t){s.d(i,t,function(){return n[t]})}(a);i["default"]=e.a},"48c6":function(t,i,s){},"79a8":function(t,i,s){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},e=[];s.d(i,"a",function(){return n}),s.d(i,"b",function(){return e})},"935e":function(t,i,s){"use strict";(function(t,s){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{account:"",code:"",settPass:"",againPass:"",isRegister:!1,veriTxt:"获取验证码",status:!1,nextTime:60,password:"",isType:!0,isSettPass:!0,isAgainPass:!0,translator:!0}},methods:{reg:function(){t.hideKeyboard(),this.translator=!1},phoneCode:function(){t.hideKeyboard(),this.translator=!0},pwd:function(){t.hideKeyboard(),t.navigateTo({url:"../pwd/pwd"})},judge:function(){var t=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;return this.account?t.test(this.account)?void(this.isRegister=!1):(this.uniToast("手机号不正确"),!1):(this.uniToast("手机号不能为空"),!1)},obtain:function(){if(t.hideKeyboard(),this.isRegister){if(this.status)return!1;if(this.status=!0,this.veriTxt="发送中",this.curr){var i=Date.parse(new Date)/1e3,s=i-i;this.countDown(s)}else this.veriTxt="获取验证码",this.status=!1}},countDown:function(t){t=t||this.nextTime,this.clearTimer();var i=this;this.timer=setInterval(function(){if(t<=0)return i.veriTxt="再次发送",i.status=!1,i.clearTimer(),!1;i.veriTxt=t+"s",t--},1e3)},clearTimer:function(){this.timer&&clearInterval(this.timer)},wxlogin:function(){t.hideKeyboard();t.login({provider:"weixin",success:function(i){t.getUserInfo({provider:"weixin",success:function(t){console.log(s(JSON.stringify(t.userInfo)," at pages\\auth\\login\\login.vue:158"));t.userInfo.nickName,t.userInfo.gender,t.userInfo.openId,t.userInfo.unionId,t.userInfo.avatarUrl}})},fail:function(t){console.log(s(t," at pages\\auth\\login\\login.vue:171"))}})},seeing:function(){this.isType=!this.isType},setSee:function(){this.isSettPass=!this.isSettPass},againSee:function(){this.isAgainPass=!this.isAgainPass},login:function(){if(t.hideKeyboard(),this.translator){if(!this.account)return this.uniToast("手机号不能为空"),!1;if(!this.code)return this.uniToast("验证码不能为空"),!1}else{if(!this.account)return this.uniToast("手机号不能为空"),!1;if(!this.password)return this.uniToast("密码不能为空"),!1}this.$store.dispatch("save",{token:"dkdfdjflkdjfkldjfkjdfkljd"}),this.help.save("token","dkdfdjflkdjfkldjfkjdfkljd"),t.navigateBack()},submission:function(){t.hideKeyboard();var i="^[0-9a-zA-Z]{6,12}$",s=new RegExp(i);return this.account?this.settPass?this.againPass?this.code?s.test(this.settPass)&&s.test(this.againPass)?this.settPass!=this.againPass?(this.uniToast("两次密码输入不一致"),!1):void 0:(this.uniToast("密码由6-12位数字和字母组成"),!1):(this.uniToast("验证码不能为空"),!1):(this.uniToast("重新输入密码不能为空"),!1):(this.uniToast("设置密码不能为空"),!1):(this.uniToast("手机号不能为空"),!1)},uniToast:function(i){t.showToast({title:i,icon:"none",duration:1e3})}}};i.default=n}).call(this,s("6e42")["default"],s("0de9")["default"])},c510:function(t,i,s){"use strict";(function(t){s("0947"),s("921b");n(s("66fd"));var i=n(s("0787"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,s("6e42")["createPage"])}},[["c510","common/runtime","common/vendor"]]]);
});
require('pages/auth/login/login.js');
__wxRoute = 'pages/auth/pwd/pwd';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/auth/pwd/pwd.js';

define('pages/auth/pwd/pwd.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/auth/pwd/pwd"],{"18c0":function(t,n,i){"use strict";var s=function(){var t=this,n=t.$createElement;t._self._c},e=[];i.d(n,"a",function(){return s}),i.d(n,"b",function(){return e})},"44f4":function(t,n,i){"use strict";var s=i("eb05"),e=i.n(s);e.a},"518d":function(t,n,i){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{account:"",code:"",newpassword:"",againpassword:"",veriTxt:"获取验证码",status:!1,nextTime:60,curr:!0,newpass:!0,againpass:!0}},methods:{noBack:function(){t.hideKeyboard(),t.navigateBack()},seeing:function(){this.newpass=!this.newpass},againsee:function(){this.againpass=!this.againpass},obtain:function(){var t=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;if(!this.account)return this.uniToast("手机号不能为空"),!1;if(!t.test(this.account))return this.uniToast("手机号不正确"),!1;if(this.status)return!1;if(this.status=!0,this.veriTxt="发送中",this.curr){var n=Date.parse(new Date)/1e3,i=n-n;this.countDown(i)}else this.veriTxt="获取验证码",this.status=!1},countDown:function(t){t=t||this.nextTime,this.clearTimer();var n=this;this.timer=setInterval(function(){if(t<=0)return n.veriTxt="再次发送",n.status=!1,n.clearTimer(),!1;n.veriTxt=t+"s",t--},1e3)},clearTimer:function(){this.timer&&clearInterval(this.timer)},submission:function(){if(!this.account)return this.uniToast("手机号不能为空"),!1;if(!this.code)return this.uniToast("验证码不能为空"),!1;if(!this.newpassword)return this.uniToast("设置新密码不能为空"),!1;if(!this.againpassword)return this.uniToast("重新设置密码不能为空"),!1;var t="^[0-9a-zA-Z]{6,12}$",n=new RegExp(t);return n(this.newpassword)&&n(this.againpassword)?this.newpassword!=this.againpassword?(this.uniToast("两次输入的密码不一致"),!1):void 0:(this.uniToast("密码由6-12位数字和字母组成"),!1)},uniToast:function(n){t.showToast({title:n,icon:"none",duration:1e3})}}};n.default=i}).call(this,i("6e42")["default"])},"6c4d":function(t,n,i){"use strict";(function(t){i("0947"),i("921b");s(i("66fd"));var n=s(i("f753"));function s(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("6e42")["createPage"])},"8b43":function(t,n,i){"use strict";i.r(n);var s=i("518d"),e=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(n,t,function(){return s[t]})}(a);n["default"]=e.a},eb05:function(t,n,i){},f753:function(t,n,i){"use strict";i.r(n);var s=i("18c0"),e=i("8b43");for(var a in e)"default"!==a&&function(t){i.d(n,t,function(){return e[t]})}(a);i("44f4");var r=i("2877"),u=Object(r["a"])(e["default"],s["a"],s["b"],!1,null,"911b503a",null);n["default"]=u.exports}},[["6c4d","common/runtime","common/vendor"]]]);
});
require('pages/auth/pwd/pwd.js');
__wxRoute = 'pages/detail/goodsinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/detail/goodsinfo.js';

define('pages/detail/goodsinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/goodsinfo"],{"3cc9":function(t,o,e){},"5b28":function(t,o,e){"use strict";e.r(o);var i=e("68f9"),s=e("c7a3");for(var n in s)"default"!==n&&function(t){e.d(o,t,function(){return s[t]})}(n);e("b0fc");var a=e("2877"),c=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,"2d4eabf8",null);o["default"]=c.exports},"68f9":function(t,o,e){"use strict";var i=function(){var t=this,o=t.$createElement;t._self._c},s=[];e.d(o,"a",function(){return i}),e.d(o,"b",function(){return s})},b0fc:function(t,o,e){"use strict";var i=e("3cc9"),s=e.n(i);s.a},c7a3:function(t,o,e){"use strict";e.r(o);var i=e("f758"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(o,t,function(){return i[t]})}(n);o["default"]=s.a},eba2:function(t,o,e){"use strict";(function(t){e("0947"),e("921b");i(e("66fd"));var o=i(e("5b28"));function i(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,e("6e42")["createPage"])},f758:function(t,o,e){"use strict";(function(t,i){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=e("2f62");function n(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(o){a(t,o,e[o])})}return t}function a(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}var c=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"3087"))},r=function(){return e.e("components/guess-like/guess-like").then(e.bind(null,"a9e2"))},l={components:{uniPopup:c,GuessLike:r},data:function(){return{buy_now:!1,loadGoods:!1,itemid:"",warp:!1,isSelect:"false",currentTab:-1,number:1,stock:"2000",insufficient:!1,iscollection:!1,parameter_arr:[],shopName:"谁谁的店",shop_id:"2",goods:{id:"1",picture:["/static/img/goods/detail.jpg","/static/img/goods/detail.1.jpg","/static/img/goods/detail.2.jpg","/static/img/goods/detail.3.jpg"],name:"现代简约双人床",title:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",price:715,choice:{title:"选择",cation:"颜色分类",imgTotal:["/static/img/goods/colir.png","/static/img/goods/colir.1.png","/static/img/goods/colir.2.png","/static/img/goods/colir.3.png"],total:"共有4种颜色选择"},parameter:{title:"参数",describe:"饰面材料 人造板饰面工艺饰面材料 人造板饰面工艺人造板饰面工艺人造板饰面工艺人造板饰面工艺"},goodsinfo:["/static/img/goods/detail.jpg","/static/img/goods/detail.1.jpg","/static/img/goods/detail.2.jpg","/static/img/goods/detail.3.jpg"],goodsPara:{title:"产品参数",list:[{title:"品牌",miao:"XXXXXX"},{title:"品牌品牌",miao:"人造板饰面工艺饰面材料"},{title:"饰面材料",miao:"人造板饰面工艺饰面材料"}]},goods_parameter:[{title:"颜色",list:[{type:"白色",stock:456},{type:"蓝色",stock:789},{type:"红色",stock:987},{type:"灰色",stock:423},{type:"黄色",stock:369},{type:"玫红",stock:365}]},{title:"尺寸",list:[{type:"1.2米",stock:100},{type:"1.5米",stock:200},{type:"1.8米",stock:300},{type:"2米",stock:400}]}],repercussion:[{title:"好设计",num:52},{title:"质量很好",num:152},{title:"服务不错",num:352},{title:"版型不错",num:522}],like:[{good_id:2,img:"/static/img/goods/shopImg.jpg",title:"实木床1.8米现代简约双人床",price:"1200",payment:"12",add:"广州",supply:"供货商"},{good_id:4,img:"/static/img/goods/shopImg.jpg",title:"实木床1.8米现代简约双人床",price:"2200",payment:"8",add:"深圳",supply:"供货商"},{good_id:5,img:"/static/img/goods/shopImg.jpg",title:"实木床1.8米现代简约双人床",price:"3200",payment:"5",add:"湖北",supply:"供货商"}]}}},onLoad:function(t){t.itemid?(this.itemid=t.itemid,this.loadGoods=!0,this.loadGoodsInfo()):this.onBack()},computed:n({},(0,s.mapState)(["collections","buy_now_obj"])),onNavigationBarButtonTap:function(o){"back"===o.type?this.onBack():"share"===o.type&&console.log(t("分享"," at pages\\detail\\goodsinfo.vue:237"))},methods:{buy_now_fun:function(t,o,e,i,s,n,a){},addToCart:function(o,e,s,n,c,r,l){var d,u=-1,g=-1;console.log(t(r," at pages\\detail\\goodsinfo.vue:247"));var p=0,f=!0;r.length<this.goods.goods_parameter.length&&this.goods.goods_parameter.length>0&&(f=!1);for(var h=0;h<this.goods.goods_parameter.length;h++)if(void 0==r[h]){f=!1,p=h;break}if(f){var m=0,b=this.help.load("userCart");this.is_empty(b)&&(b=[]);for(var _=o,v={},y=0;y<this.goods.goods_parameter.length;y++)v[this.goods.goods_parameter[y].title]=this.goods.goods_parameter[y].list[r[y]].type;for(var k in v)_+=v[k];var j={};for(var w in b)if(b[w].shop_id==this.shop_id){u=w;break}if(u>-1&&(j=b[u]),console.log(t(j," at pages\\detail\\goodsinfo.vue:295")),this.buy_now&&(j={}),this.is_empty(j))j={},j["shop_id"]=this.shop_id,j["shopname"]=this.shopName,j["freight"]="10.00",j["haschecked"]=!0,j["goods_list"]=[],m=l,g=0;else{for(var O in console.log(t("111"," at pages\\detail\\goodsinfo.vue:310")),j["goods_list"])if(j["goods_list"][O]._id==_){console.log(t("吻合"," at pages\\detail\\goodsinfo.vue:313")),g=O;break}console.log(t(g," at pages\\detail\\goodsinfo.vue:318")),console.log(t(j["goods_list"].length," at pages\\detail\\goodsinfo.vue:323")),console.log(t(g," at pages\\detail\\goodsinfo.vue:324")),this.is_empty(j["goods_list"][g])?m=l:(m=Number(j["goods_list"][g].good_num),m+=l)}var P=(d={_id:_,checked:!0,goods_id:o,good_num:m,img:e,name:s,title:n,price:c},a(d,"checked",!0),a(d,"parameter",v),d);g>-1?j["goods_list"][g]=P:j["goods_list"].unshift(P),u>-1?b[u]=j:b.unshift(j),this.show_price_parameter=!1,this.buy_now?(b=[],b[0]=j,this.$store.dispatch("save",{buy_now_obj:b}),i.navigateTo({url:"../confirmationOrder/confirmationOrder?buy_now=true"})):(this.help.save("userCart",b),this.userCart=this.help.load("userCart"),console.log(t(JSON.stringify(this.help.load("userCart"))," at pages\\detail\\goodsinfo.vue:369")),this.join_success())}else this.help.toast("请选择"+this.goods.goods_parameter[p].title)},select_parameter:function(t,o){this.$set(this.parameter_arr,t,o)},loadGoodsInfo:function(){this.loadGoods=!0},onBack:function(){i.navigateBack()},togglePopup:function(t,o){"choice"===t?this.isSelect=!1:"parameter"===t&&(this.isSelect=!0),this.warp=1==o,this.$refs.popup.open()},close:function(){this.$refs.popup.close()},joinCat:function(){this.warp=!0,this.buy_now=!1,this.togglePopup("choice",1)},change:function(t){},reduce:function(){if(this.number<2)return!1;this.number--},add:function(){if(this.number>=this.stock)return!1;this.number++},check:function(t,o){return this.currentTab!=t&&(this.currentTab=t,""==o?(this.stock=0,this.insufficient=!0,this.number=0,!1):(this.insufficient=!1,this.stock=o,void(this.number=1)))},join_success:function(){this.$refs.popup.close(),i.showToast({title:"添加购物车成功",image:"/static/img/goods/success.png",duration:2e3})},evaluate:function(){i.navigateTo({url:"../comment/comment?itemid=5"})},buyImmediately:function(){this.warp=!0,this.buy_now=!0,this.togglePopup("choice",1)},jumpUri:function(t){i.navigateTo({url:"goodsinfo?itemid="+t})},collection:function(t,o,e){var i={goodsId:this.itemid,title:t,img:o,price:e},s=[];if(this.iscollection){for(var n=0;n<this.collections.length;n++)i.goodsId==this.collections[n].goodsId&&this.collections.splice(n,1);this.$store.dispatch("save",{collections:this.collections})}else s=this.collections.concat(i),this.$store.dispatch("save",{collections:s});this.iscollection=!this.iscollection}}};o.default=l}).call(this,e("0de9")["default"],e("6e42")["default"])}},[["eba2","common/runtime","common/vendor"]]]);
});
require('pages/detail/goodsinfo.js');
__wxRoute = 'pages/comment/comment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/comment/comment.js';

define('pages/comment/comment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/comment/comment"],{"2e59":function(t,n,e){"use strict";(function(t){e("0947"),e("921b");i(e("66fd"));var n=i(e("def6"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"58e9":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,o=function(){return e.e("components/uni-load-more/uni-load-more").then(e.bind(null,"0eb7"))},m=null,a={components:{uniLoadMore:o},data:function(){return{commentLists:!1,currentTab:0,itemid:"",commentList:{list:[{headImg:"/static/img/comment/comment-header.png",name:"张三",time:"2019-08-18",content:"根据需求定做的柜子和榻榻米，最大限度利用了空间，9平米的房间做出了超大空间感。必须好评!",saitu:["/static/img/comment/comment-img.jpg","/static/img/comment/comment-img.jpg","/static/img/comment/comment-img.jpg","/static/img/comment/comment-img.jpg"],browse:120,pin:12,zan:21,ifZan:0},{headImg:"/static/img/comment/comment-header.png",name:"张三",time:"2019-08-18",content:"根据需求定做的柜子和榻榻米，最大限度利用了空间，9平米的房间做出了超大空间感。必须好评!",saitu:["/static/img/comment/comment-img.jpg","/static/img/comment/comment-img.jpg","/static/img/comment/comment-img.jpg","/static/img/comment/comment-img.jpg"],browse:120,pin:12,zan:36,ifZan:1}],category:[{title:"全部",number:""},{title:"设计好",number:52},{title:"质量很好",number:132},{title:"服务不错",number:232},{title:"一般",number:12},{title:"差评",number:12},{title:"好评",number:22},{title:"实惠",number:15}]},loadingText:"加载中...",loadingType:0,contentText:{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"},is_loadingType:!1}},onLoad:function(t){t.itemid?(this.itemid=t.itemid,this.commentLists=!0,i=this,this.getnewsList()):this.onBack()},onPullDownRefresh:function(){this.getnewsList()},onReachBottom:function(){null!=m&&clearTimeout(m),m=setTimeout(function(){i.getmorenews()},200)},methods:{onBack:function(){t.navigateBack()},getnewsList:function(){1,this.loadingType=0,t.showNavigationBarLoading(),this.commentLists=!0,0,i.commentList=i.commentList,t.hideNavigationBarLoading(),t.stopPullDownRefresh()},getmorenews:function(){if(0!==i.loadingType)return!1;i.loadingType=1,t.showNavigationBarLoading(),0,i.commentList=i.commentList.concat(res.data),i.loadingType=0,t.hideNavigationBarLoading()},check:function(t){if(this.currentTab==t)return!1;this.currentTab=t,this.getnewsList()},zan:function(t,n,e){var i=this.commentList.list[t];n?(e--,this.$set(i,"ifZan",!1),this.$set(i,"zan",e)):(e++,this.$set(i,"ifZan",!0),this.$set(i,"zan",e))},commDetail:function(){t.navigateTo({url:"commentDetail?itemid="+this.itemid})}}};n.default=a}).call(this,e("6e42")["default"])},"5bb0":function(t,n,e){"use strict";e.r(n);var i=e("58e9"),o=e.n(i);for(var m in i)"default"!==m&&function(t){e.d(n,t,function(){return i[t]})}(m);n["default"]=o.a},"7abc":function(t,n,e){},"93b4":function(t,n,e){"use strict";var i=e("7abc"),o=e.n(i);o.a},de45:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},def6:function(t,n,e){"use strict";e.r(n);var i=e("de45"),o=e("5bb0");for(var m in o)"default"!==m&&function(t){e.d(n,t,function(){return o[t]})}(m);e("93b4");var a=e("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);n["default"]=c.exports}},[["2e59","common/runtime","common/vendor"]]]);
});
require('pages/comment/comment.js');
__wxRoute = 'pages/comment/commentDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/comment/commentDetail.js';

define('pages/comment/commentDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/comment/commentDetail"],{"17cc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c})},"40b2":function(t,e,n){"use strict";(function(t){n("0947"),n("921b");i(n("66fd"));var e=i(n("c7af"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4ee9":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{detail:!1,itemid:"",scrollHeight:0,commemtDetail:{isZan:!0}}},onReady:function(){var t=this;setTimeout(function(){t.calculateScrollViewHeight()},100)},onLoad:function(e){e.itemid?(this.itemid=e.itemid,this.detail=!0):t.navigateBack()},methods:{calculateScrollViewHeight:function(){var e=this,n=t.createSelectorQuery().in(this);n.select("#masks").boundingClientRect(),n.exec(function(n){var i=n[0].height,c=t.getSystemInfoSync().windowHeight-i;e.scrollHeight=c})}}};e.default=n}).call(this,n("6e42")["default"])},"59ce":function(t,e,n){},"84e5":function(t,e,n){"use strict";n.r(e);var i=n("4ee9"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=c.a},"88e6":function(t,e,n){"use strict";var i=n("59ce"),c=n.n(i);c.a},c7af:function(t,e,n){"use strict";n.r(e);var i=n("17cc"),c=n("84e5");for(var a in c)"default"!==a&&function(t){n.d(e,t,function(){return c[t]})}(a);n("88e6");var u=n("2877"),o=Object(u["a"])(c["default"],i["a"],i["b"],!1,null,"73f6c205",null);e["default"]=o.exports}},[["40b2","common/runtime","common/vendor"]]]);
});
require('pages/comment/commentDetail.js');
__wxRoute = 'pages/search/search';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/search/search.js';

define('pages/search/search.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search"],{"03d7":function(t,e,i){"use strict";i.r(e);var n=i("7a7a"),s=i("3f5e");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("1217");var r=i("2877"),c=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,"c5a731d4",null);e["default"]=c.exports},1217:function(t,e,i){"use strict";var n=i("eb0c"),s=i.n(n);s.a},"3f5e":function(t,e,i){"use strict";i.r(e);var n=i("62e9"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},"46af":function(t,e,i){"use strict";(function(t){i("0947"),i("921b");n(i("66fd"));var e=n(i("03d7"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("6e42")["createPage"])},"62e9":function(t,e,i){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=c(i("a34a")),o=i("2f62"),r=c(i("3e50"));function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e,i,n,s,o,r){try{var c=t[o](r),a=c.value}catch(u){return void i(u)}c.done?e(a):Promise.resolve(a).then(n,s)}function u(t){return function(){var e=this,i=arguments;return new Promise(function(n,s){var o=t.apply(e,i);function r(t){a(o,n,s,r,c,"next",t)}function c(t){a(o,n,s,r,c,"throw",t)}r(void 0)})}}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){h(t,e,i[e])})}return t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var g=function(){return i.e("components/uni-popup/uni-popup").then(i.bind(null,"3087"))},m=function(){return i.e("components/goods-list/goods-list").then(i.bind(null,"e455"))},p={components:{uniPopup:g,goodsList:m},data:function(){return{show_result:!1,tab_num:1,store_img_list:["../../static/img/home/store_img1.png","../../static/img/home/store_img2.png","../../static/img/home/store_img3.png","../../static/img/home/store_img4.png"],swiper_list:["../../static/img/home/swiper_img1.png","../../static/img/home/swiper_img1.png","../../static/img/home/swiper_img1.png"],suit_img_list:["../../static/img/home/suit_img1.png","../../static/img/home/suit_img2.png","../../static/img/home/suit_img3.png"],search_txt:"",association_list:["联想1","联想2","联想3","联想4","联想5"],show_search_guide:!0,goodList:[],history_list_arr:this.help.load("history_list",!0),history_list:[],relevant_list:[{img:"../../static/img/home/store_img3.png",title:"电视机"},{img:"../../static/img/home/store_img4.png",title:"洗衣机"},{img:"../../static/img/home/store_img3.png",title:"电视机"},{img:"../../static/img/home/store_img4.png",title:"洗衣机"},{img:"../../static/img/home/store_img3.png",title:"电视机"},{img:"../../static/img/home/store_img4.png",title:"洗衣机"},{img:"../../static/img/home/store_img3.png",title:"电视机"},{img:"../../static/img/home/store_img4.png",title:"洗衣机"}],say_voice:!1,show_voice_btn:!0,voice_title:"请说，我正在聆听",voice_content:"",interval1:null,voice_height_list:[],saying:!1,no_distinguish_txt:"未能识别，请点击麦克风重试",currentWebview:null,result_list:[{url:"/static/img/list_img1.jpg",goods_id:"1",title:"实木床1.8米现代简约双人床",price:1899,buy_num:9,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"},{url:"/static/img/list_img2.jpg",goods_id:"2",title:"书架书柜简易时代白色",price:799,buy_num:12,address:"广州",from:"供应商"}]}},onLoad:function(){console.log(t("onLoad"," at pages\\search\\search.vue:215")),this.is_empty(this.history_list_arr)||(this.history_list=this.history_list_arr.split(",")),this.init_voice_height_list(),this.currentWebview=this.$mp.page.$getAppWebview()},onUnload:function(){clearInterval(this.interval1)},onNavigationBarSearchInputConfirmed:function(e){console.log(t(e," at pages\\search\\search.vue:229")),e.text&&(n.hideKeyboard(),this.search_fun(e.text))},onNavigationBarSearchInputChanged:function(t){this.search_txt=t.text},onNavigationBarButtonTap:function(t){this.search_txt&&0==t.index&&(n.hideKeyboard(),this.search_fun(this.search_txt))},onResize:function(t){Number(t.size.windowHeight)-Number(this.screen_height)<-200&&(this.show_search_guide=!0,this.show_result=!1)},computed:l({},(0,o.mapState)(["is_ios","userPoint","currentCity","screen_height"])),methods:{init_voice_height_list:function(){var t=this;this.interval1=setInterval(function(){for(var e=0;e<12;e++)t.$set(t.voice_height_list,e,Math.floor(45*Math.random())+"px")},200)},change:function(e){var i=this;console.log(t(e.show," at pages\\search\\search.vue:267")),e.show||(this.show_voice_btn=!0,setTimeout(function(){i.voice_content=""},500))},close:function(){var t=this;this.$refs.popup.close(),setTimeout(function(){t.voice_content=""},500)},startRecognize:function(){var e=u(s.default.mark(function e(){var i,n,o,r=this;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.checkPermission();case 2:if(i=e.sent,1===i){e.next=5;break}return e.abrupt("return");case 5:this.show_voice_btn=!1,this.$refs.popup.open(),n={userInterface:!1},this,n.engine="baidu",this.voice_content="",this.saying=!0,o=null,plus.speech.startRecognize(n,function(e){console.log(t(e," at pages\\search\\search.vue:301")),r.voice_content+=e,r.voice_content=r.voice_content.replace("。",""),r.voice_content=r.voice_content.replace("？",""),clearTimeout(o),o=setTimeout(function(){plus.speech.stopRecognize(),r.show_search_guide=!0,r.search_txt=r.voice_content,r.currentWebview.setTitleNViewSearchInputText(r.voice_content),r.$refs.popup.close(),setTimeout(function(){r.voice_content=""},500)},1e3)},function(e){console.log(t("语音识别失败："+e.message," at pages\\search\\search.vue:320")),r.voice_content=r.no_distinguish_txt});case 14:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),startRecognizeEnglish:function(){var e=u(s.default.mark(function e(){var i,n,o;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.checkPermission();case 2:if(i=e.sent,1===i){e.next=5;break}return e.abrupt("return");case 5:n={},o=this,n.engine="baidu",n.lang="en-us",o.value="",plus.speech.startRecognize(n,function(e){console.log(t(e," at pages\\search\\search.vue:340")),o.value+=e},function(e){console.log(t("语音识别失败："+e.message," at pages\\search\\search.vue:343"))});case 11:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),checkPermission:function(){var t=u(s.default.mark(function t(){var e;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!r.default.isIOS){t.next=6;break}return t.next=3,r.default.requestIOS("record");case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,r.default.requestAndroid("android.permission.RECORD_AUDIO");case 8:t.t0=t.sent;case 9:return e=t.t0,null===e||1===e?e=1:2===e?n.showModal({content:"系统麦克风已关闭",confirmText:"设置",success:function(t){t.confirm&&r.default.gotoiOSSetting()}}):n.showModal({content:"需要麦克风权限",confirmText:"设置",success:function(t){t.confirm&&r.default.gotoAppSetting()}}),t.abrupt("return",e);case 12:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),search_fun:function(e){this.currentWebview.setTitleNViewSearchInputText(e),this.show_result=!0,this.show_search_guide=!1;var i=this.help.load("history_list",!0),n=[];this.is_empty(i)||(n=i.split(","));for(var s=0;s<n.length;s++)if(n[s]==e)return!1;n.unshift(e),n.length>10&&n.pop(),console.log(t(n," at pages\\search\\search.vue:399")),this.history_list=n,this.help.save("history_list",n.toString(),!0)},clear_history:function(){var t=this;this.help.confirm("确定清空历史搜索？",function(){t.help.remove("history_list"),t.history_list=[]})}}};e.default=p}).call(this,i("0de9")["default"],i("6e42")["default"])},"7a7a":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},eb0c:function(t,e,i){}},[["46af","common/runtime","common/vendor"]]]);
});
require('pages/search/search.js');
__wxRoute = 'pages/confirmationOrder/confirmationOrder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/confirmationOrder/confirmationOrder.js';

define('pages/confirmationOrder/confirmationOrder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/confirmationOrder/confirmationOrder"],{4023:function(t,e,n){"use strict";var o=n("f27e"),i=n.n(o);i.a},6285:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"77b5":function(t,e,n){"use strict";n.r(e);var o=n("6285"),i=n("b228");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("4023");var u=n("2877"),a=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,"581ce2bc",null);e["default"]=a.exports},"80d2":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"3087"))},a=function(){return Promise.all([n.e("common/vendor"),n.e("components/request-payment/request-payment")]).then(n.bind(null,"1375"))},c={components:{uniPopup:u,requestPayment:a},data:function(){return{scrollHeight:0,login:!0,payment:!0,address:!1,userCart:{},buy_now:!1}},onReady:function(){var t=this;setTimeout(function(){t.calculateScrollViewHeight()},100)},onLoad:function(t){t.buy_now&&(this.buy_now=t.buy_now),this.userCart=this.help.load("userCart")},onHide:function(){this.$store.dispatch("save",{buy_now_obj:{}})},mounted:function(){this.buy_now&&(this.userCart=this.buy_now_obj)},computed:i({},(0,o.mapState)(["buy_now_obj"]),{shop_total_price:function(){for(var t=[],e=0;e<this.userCart.length;e++){for(var n=0,o=0;o<this.userCart[e].goods_list.length;o++)this.userCart[e].goods_list[o].checked&&(n+=Number(this.userCart[e].goods_list[o].price)*Number(this.userCart[e].goods_list[o].good_num));n>0&&(n+=Number(this.userCart[e].freight)+100),t.push(n)}return t},all_total_price:function(){for(var t=0,e=0;e<this.shop_total_price.length;e++)t+=this.shop_total_price[e];return t}}),methods:{alipay:function(){this.$refs.requestpayment.pay_func("支付宝")},wxpay:function(){this.$refs.requestpayment.pay_func("微信")},calculateScrollViewHeight:function(){var e=this,n=t.createSelectorQuery().in(this);n.select("#orderSubmit").boundingClientRect(),n.exec(function(n){var o=n[0].height,i=t.getSystemInfoSync().windowHeight-o;e.scrollHeight=i})},submitOrder:function(){this.is_empty(this.login)?t.navigateTo({url:"/pages/auth/login/login"}):(t.showToast({title:"订单正在提交中，请稍等...",icon:"none",duration:1e3}),this.is_empty(this.payment)?(t.hideToast(),t.showToast({title:"订单提交失败，请重新提交",icon:"none",duration:1e3})):this.pay())},pay:function(){this.$refs.popup.open()},change:function(t){},close:function(){this.$refs.popup.close()},invoice:function(){t.navigateTo({url:"../invoice/invoice"})},receiving:function(){},addto:function(){t.navigateTo({url:"../address/newlyAdded?type=add"})}}};e.default=c}).call(this,n("6e42")["default"])},b228:function(t,e,n){"use strict";n.r(e);var o=n("80d2"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a},c741:function(t,e,n){"use strict";(function(t){n("0947"),n("921b");o(n("66fd"));var e=o(n("77b5"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f27e:function(t,e,n){}},[["c741","common/runtime","common/vendor"]]]);
});
require('pages/confirmationOrder/confirmationOrder.js');
__wxRoute = 'pages/invoice/invoice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/invoice/invoice.js';

define('pages/invoice/invoice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/invoice/invoice"],{"117a":function(n,t,e){"use strict";var i=e("1787"),o=e.n(i);o.a},1787:function(n,t,e){},"70e4":function(n,t,e){"use strict";e.r(t);var i=e("8eba"),o=e("f927");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("117a");var u=e("2877"),a=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports},"8eba":function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o})},b843:function(n,t,e){"use strict";(function(n){e("0947"),e("921b");i(e("66fd"));var t=i(e("70e4"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},e516:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"3087"))},o={components:{uniPopup:i},data:function(){return{isinvoice:!1,invoiceType:[{txt:"电子发票",type:"1"},{txt:"不开发票",type:"2"}],invoiceCategory:[{txt:"个人",type:"1"},{txt:"公司",type:"2"}],currentTab:1,current:0,rise:"",phone:"",identification:"",mail:"",InvoiceInformation:!1,billTypx:"商品明细",contentInfo:!1}},computed:{exitsVal:function(){return Boolean(this.rise)&&Boolean(this.phone)&&Boolean(this.identification)&&Boolean(this.mail)}},onLoad:function(){},methods:{check:function(n){if(this.currentTab==n)return!1;this.currentTab=n,this.isinvoice=!this.isinvoice},radioChange:function(n){for(var t=0;t<this.invoiceCategory.length;t++)if(this.invoiceCategory[t].type===n.target.value){this.current=t,this.InvoiceInformation=!this.InvoiceInformation;break}},billType:function(){this.contentInfo=!0,this.$refs.popup.open()},shopDetail:function(){this.billTypx="商品明细",this.cancel()},shopType:function(){this.billTypx="商品种类",this.cancel()},cancel:function(){this.$refs.popup.close()},tip:function(){this.contentInfo=!1,this.$refs.popup.open()},sure:function(){n.navigateBack()},uniToast:function(t){n.showToast({title:t,icon:"none",duration:1e3})}}};t.default=o}).call(this,e("6e42")["default"])},f927:function(n,t,e){"use strict";e.r(t);var i=e("e516"),o=e.n(i);for(var c in i)"default"!==c&&function(n){e.d(t,n,function(){return i[n]})}(c);t["default"]=o.a}},[["b843","common/runtime","common/vendor"]]]);
});
require('pages/invoice/invoice.js');
__wxRoute = 'pages/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/address.js';

define('pages/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"0375":function(e,t,n){"use strict";var d=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return d}),n.d(t,"b",function(){return a})},"0dea":function(e,t,n){},"16a7":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},d=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),d.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{address:[{address_id:0,name:"张三",phone:"13049632587",city:"北京市-市辖区-西城区",addDetail:"天安科技园",default:!0,address_code:[0,0,1]},{address_id:1,name:"张三",phone:"13049632587",city:"辽宁省-沈阳市-沈河区",addDetail:"天安科技园",default:!1,address_code:[5,0,2]},{address_id:2,name:"张三",phone:"13049632587",city:"黑龙江省-鸡西市-滴道区",addDetail:"天安科技园",default:!1,address_code:[7,2,2]},{address_id:3,name:"张三",phone:"13049632587",city:"福建省-三明市-梅列区",addDetail:"天安科技园",default:!1,address_code:[12,3,0]}]}},computed:a({},(0,d.mapState)(["editAddress"])),methods:{addAddress:function(){e.navigateTo({url:"newlyAdded"})},edit:function(t){this.$store.dispatch("save",{editAddress:t}),e.navigateTo({url:"newlyAdded?type=add&&addressid="+t.address_id})}}};t.default=u}).call(this,n("6e42")["default"])},"7e54":function(e,t,n){"use strict";n.r(t);var d=n("16a7"),a=n.n(d);for(var r in d)"default"!==r&&function(e){n.d(t,e,function(){return d[e]})}(r);t["default"]=a.a},8790:function(e,t,n){"use strict";(function(e){n("0947"),n("921b");d(n("66fd"));var t=d(n("9229"));function d(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},9229:function(e,t,n){"use strict";n.r(t);var d=n("0375"),a=n("7e54");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("afc1");var u=n("2877"),i=Object(u["a"])(a["default"],d["a"],d["b"],!1,null,null,null);t["default"]=i.exports},afc1:function(e,t,n){"use strict";var d=n("0dea"),a=n.n(d);a.a}},[["8790","common/runtime","common/vendor"]]]);
});
require('pages/address/address.js');
__wxRoute = 'pages/address/newlyAdded';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/newlyAdded.js';

define('pages/address/newlyAdded.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/newlyAdded"],{"24e2":function(e,t,n){},"278f":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s})},4456:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=function(){return Promise.all([n.e("common/vendor"),n.e("components/mpvue-citypicker/mpvueCityPicker")]).then(n.bind(null,"0e3c"))},d={components:{mpvueCityPicker:r},data:function(){return{themeColor:"#007AFF",addressInfo:{city:"",default:!1,name:"",phone:"",addDetail:"",address_code:[0,0,0]},address_id:-1,deleteAdd:!1}},onBackPress:function(t){var n=this;return"navigateBack"!==t.from&&(-1==this.address_id?this.exitsVal?(e.showModal({title:"提示",content:"是否保存本次编辑结果？",cancelText:"不保存",confirmText:"保存",confirmColor:"#f00",success:function(t){t.confirm?n.preservation():t.cancel&&e.navigateBack()}}),!0):(e.navigateBack(),!0):void 0)},onLoad:function(t){"add"==t.type?(e.setNavigationBarTitle({title:"添加收货地址"}),this.deleteAdd=!1):"edit"==t.type&&(e.setNavigationBarTitle({title:"修改收货地址"}),this.deleteAdd=!0,this.address_id=t.addressid,this.addressInfo=this.editAddress)},computed:a({exitsVal:function(){return Boolean(this.addressInfo.city)||Boolean(this.addressInfo.phone)||Boolean(this.addressInfo.addDetail)||Boolean(this.addressInfo.name)||Boolean(this.addressInfo.isDefault)}},(0,s.mapState)(["editAddress"])),methods:{address:function(){e.hideKeyboard(),this.$refs.mpvueCityPicker.show()},onConfirm:function(e){console.log(o(e," at pages\\address\\newlyAdded.vue:112")),this.addressInfo.city=e.label,this.cityPickerValueDefault=e.value},switchChange:function(e){this.addressInfo.isDefault=e.target.value},preservation:function(){if(e.hideKeyboard(),!this.addressInfo.name)return this.uniToast("收件人姓名不能为空"),!1;if(!this.addressInfo.phone)return this.uniToast("收件人电话不能为空"),!1;var t=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;if(!t.test(this.addressInfo.phone))return this.uniToast("收件人电话不正确"),!1;if(!this.addressInfo.city)return this.uniToast("收件人所在地区不能为空"),!1;if(!this.addressInfo.addDetail)return this.uniToast("收件人详细地区地区不能为空"),!1;e.showLoading({title:"地址正在提交中...",mask:!0}),console.log(o(this.addressInfo," at pages\\address\\newlyAdded.vue:148"));this.addressInfo},delAdd:function(){e.showModal({content:"确定要删除该地址吗？",cancelText:"取消",confirmText:"删除",confirmColor:"#f00",success:function(e){e.confirm?console.log(o("删除"," at pages\\address\\newlyAdded.vue:159")):e.cancel&&console.log(o("取消"," at pages\\address\\newlyAdded.vue:161"))}})},uniToast:function(t){e.showToast({title:t,icon:"none",duration:1e3})}}};t.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},5662:function(e,t,n){"use strict";var o=n("24e2"),s=n.n(o);s.a},bcf1:function(e,t,n){"use strict";n.r(t);var o=n("4456"),s=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=s.a},e1ba:function(e,t,n){"use strict";(function(e){n("0947"),n("921b");o(n("66fd"));var t=o(n("f924"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f924:function(e,t,n){"use strict";n.r(t);var o=n("278f"),s=n("bcf1");for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);n("5662");var i=n("2877"),r=Object(i["a"])(s["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports}},[["e1ba","common/runtime","common/vendor"]]]);
});
require('pages/address/newlyAdded.js');
__wxRoute = 'pages/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/address.js';

define('pages/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"0375":function(e,t,n){"use strict";var d=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return d}),n.d(t,"b",function(){return a})},"0dea":function(e,t,n){},"16a7":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},d=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),d.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{address:[{address_id:0,name:"张三",phone:"13049632587",city:"北京市-市辖区-西城区",addDetail:"天安科技园",default:!0,address_code:[0,0,1]},{address_id:1,name:"张三",phone:"13049632587",city:"辽宁省-沈阳市-沈河区",addDetail:"天安科技园",default:!1,address_code:[5,0,2]},{address_id:2,name:"张三",phone:"13049632587",city:"黑龙江省-鸡西市-滴道区",addDetail:"天安科技园",default:!1,address_code:[7,2,2]},{address_id:3,name:"张三",phone:"13049632587",city:"福建省-三明市-梅列区",addDetail:"天安科技园",default:!1,address_code:[12,3,0]}]}},computed:a({},(0,d.mapState)(["editAddress"])),methods:{addAddress:function(){e.navigateTo({url:"newlyAdded"})},edit:function(t){this.$store.dispatch("save",{editAddress:t}),e.navigateTo({url:"newlyAdded?type=add&&addressid="+t.address_id})}}};t.default=u}).call(this,n("6e42")["default"])},"7e54":function(e,t,n){"use strict";n.r(t);var d=n("16a7"),a=n.n(d);for(var r in d)"default"!==r&&function(e){n.d(t,e,function(){return d[e]})}(r);t["default"]=a.a},8790:function(e,t,n){"use strict";(function(e){n("0947"),n("921b");d(n("66fd"));var t=d(n("9229"));function d(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},9229:function(e,t,n){"use strict";n.r(t);var d=n("0375"),a=n("7e54");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("afc1");var u=n("2877"),i=Object(u["a"])(a["default"],d["a"],d["b"],!1,null,null,null);t["default"]=i.exports},afc1:function(e,t,n){"use strict";var d=n("0dea"),a=n.n(d);a.a}},[["8790","common/runtime","common/vendor"]]]);
});
require('pages/address/address.js');
__wxRoute = 'pages/myself/myself';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myself/myself.js';

define('pages/myself/myself.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myself/myself"],{"388c":function(e,t,n){"use strict";var a=n("74f8"),r=n.n(a);r.a},"429a":function(e,t,n){"use strict";(function(e){n("0947"),n("921b");a(n("66fd"));var t=a(n("7ed0"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"74f8":function(e,t,n){},"7ed0":function(e,t,n){"use strict";n.r(t);var a=n("9fe2"),r=n("f7e5");for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);n("388c");var f=n("2877"),s=Object(f["a"])(r["default"],a["a"],a["b"],!1,null,"e66e8d0c",null);t["default"]=s.exports},"9fe2":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},b365:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{pages:{address:"../address/address",myorder:"../myorder/myorder",aftersalelist:"../after_sale/after_sale_list"}}},methods:{submenu:function(t){var n=t.currentTarget.dataset.uri;e.navigateTo({url:this.pages[n]})}}};t.default=n}).call(this,n("6e42")["default"])},f7e5:function(e,t,n){"use strict";n.r(t);var a=n("b365"),r=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=r.a}},[["429a","common/runtime","common/vendor"]]]);
});
require('pages/myself/myself.js');
__wxRoute = 'pages/myorder/myorder';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myorder/myorder.js';

define('pages/myorder/myorder.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myorder/myorder"],{1219:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,o,i,r,c){try{var m=t[r](c),a=m.value}catch(s){return void n(s)}m.done?e(a):Promise.resolve(a).then(o,i)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var c=t.apply(e,n);function m(t){r(c,o,i,m,a,"next",t)}function a(t){r(c,o,i,m,a,"throw",t)}m(void 0)})}}var m=function(){return Promise.all([n.e("common/vendor"),n.e("components/order-list/order-list")]).then(n.bind(null,"2bc5"))},a=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"3087"))},s=function(){return Promise.all([n.e("common/vendor"),n.e("components/request-payment/request-payment")]).then(n.bind(null,"1375"))},u={components:{orderList:m,uniPopup:a,requestPayment:s},data:function(){return{menuTabs:[{name:"全部"},{name:"待付款"},{name:"待发货"},{name:"待收货"},{name:"待评价"}],current:0,refundOrder_id:0,refundIndex:0,reasonlist:[{txt:"买错了",type:"1"},{txt:"不想要了",type:"2"},{txt:"先不买",type:"3"},{txt:"其他",type:"4"}],currentTab:0,orders:[{order_id:0,orderCode:"123456796354",paymentState:0,shopName:"店铺名称",commodityImg:"/static/img/comment/comment-img.jpg",commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",commodityAttr:"红色，S码",commodityPrice:799,commodityNum:1,distributionMode:"上门安装",invoice:"商品明细",remarks:"无",installationCost:"100",total:1,money:899},{order_id:1,orderCode:"123456796354",paymentState:1,shopName:"店铺名称",commodityImg:"/static/img/comment/comment-img.jpg",commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",commodityAttr:"红色，S码",commodityPrice:799,commodityNum:1,distributionMode:"上门安装",invoice:"商品明细",remarks:"无",installationCost:"100",total:1,money:899}],paymentsItem:[{order_id:2,orderCode:"123456796354",paymentState:0,shopName:"店铺名称",commodityImg:"/static/img/comment/comment-img.jpg",commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",commodityAttr:"红色，S码",commodityPrice:799,commodityNum:1,distributionMode:"上门安装",invoice:"商品明细",remarks:"无",installationCost:"100",total:1,money:899}],receiptsItem:[{order_id:3,orderCode:"123456796354",paymentState:1,shopName:"店铺名称",commodityImg:"/static/img/comment/comment-img.jpg",commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",commodityAttr:"红色，S码",commodityPrice:799,commodityNum:1,distributionMode:"上门安装",invoice:"商品明细",remarks:"无",installationCost:"100",total:1,money:899}],returnsItem:[{order_id:4,orderCode:"123456796354",paymentState:2,shopName:"店铺名称",commodityImg:"/static/img/comment/comment-img.jpg",commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",commodityAttr:"红色，S码",commodityPrice:799,commodityNum:1,distributionMode:"上门安装",invoice:"商品明细",remarks:"无",installationCost:"100",total:1,money:899}],completesItem:[{order_id:5,orderCode:"123456796354",paymentState:3,shopName:"店铺名称",commodityImg:"/static/img/comment/comment-img.jpg",commoditytitle:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",commodityAttr:"红色，S码",commodityPrice:799,commodityNum:1,distributionMode:"上门安装",invoice:"商品明细",remarks:"无",installationCost:"100",total:1,money:899}]}},onLoad:function(){},computed:{},methods:{onNavigationBarButtonTap:function(){t.navigateTo({url:"../invoice/invoice"})},swichMenu:function(){var t=c(o.default.mark(function t(e){return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.currentTab!=e){t.next=4;break}return t.abrupt("return",!1);case 4:this.currentTab=e;case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),swiperChange:function(){var t=c(o.default.mark(function t(e){var n;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=e.target.current,this.currentTab=n;case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),rightOff:function(t){if(this.$refs.popup.open(),0==this.currentTab){var e=this.orders[t.index];this.$set(e,"paymentState",1)}else this.paymentsItem.splice(t.index,1)},returngoods:function(t){this.refundOrder_id=t.order_id,this.refundIndex=t.index,this.$refs.refund.open()},radioChange:function(t){for(var e=0;e<this.reasonlist.length;e++)if(this.reasonlist[e].type===t.target.value){this.current=e;break}},subOrder:function(){0==this.currentTab?this.orders.splice(this.refundIndex,1):this.receiptsItem.splice(this.refundIndex,1),this.refundClose(),t.navigateTo({url:"refundSuccess?orderId="+this.refundOrder_id})},logistic:function(){this.$refs.logistics.open()},confirm:function(e){var n=this;t.showModal({content:"确认收货该笔订单吗？",cancelText:"取消",confirmText:"确定",confirmColor:"#f00",success:function(t){if(t.confirm)if(0==n.currentTab){var o=n.orders[e.index];n.$set(o,"paymentState",3)}else 2==n.currentTab?n.receiptsItem.splice(e.index,1):n.returnsItem.splice(e.index,1)}})},evaluate:function(e){t.navigateTo({url:"evaluate?orderId="+e})},loadMore:function(t){},close:function(){this.$refs.popup.close()},refundClose:function(){this.$refs.refund.close()},logisticlose:function(){this.$refs.logistics.close()},jump:function(){t.navigateTo({url:"orderDetail"})}}};e.default=u}).call(this,n("6e42")["default"])},"456d":function(t,e,n){},5176:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"7c5b":function(t,e,n){"use strict";n.r(e);var o=n("5176"),i=n("c6a5");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("8e78");var c=n("2877"),m=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=m.exports},"840e":function(t,e,n){"use strict";(function(t){n("0947"),n("921b");o(n("66fd"));var e=o(n("7c5b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8e78":function(t,e,n){"use strict";var o=n("456d"),i=n.n(o);i.a},c6a5:function(t,e,n){"use strict";n.r(e);var o=n("1219"),i=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=i.a}},[["840e","common/runtime","common/vendor"]]]);
});
require('pages/myorder/myorder.js');
__wxRoute = 'pages/after_sale/after_sale_list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/after_sale/after_sale_list.js';

define('pages/after_sale/after_sale_list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/after_sale/after_sale_list"],{"098d":function(t,e,a){"use strict";a.r(e);var n=a("9788"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},"23b5":function(t,e,a){},2864:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"33ae":function(t,e,a){"use strict";a.r(e);var n=a("2864"),i=a("098d");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("f515");var r=a("2877"),o=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"7c26c1de",null);e["default"]=o.exports},9788:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{pages:{address:"../address/address"},list:[{shop_name:"店铺1",img:"/static/img/list_img1.jpg",goods_id:"1",good_num:1,name:"现代简约双人床",title:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",price:715,real_paice:725,parameter:{"颜色":"红色","尺寸":"1.8米"},state:"1",tips_txt:"退款成功",btn_list:["查看详情"]},{shop_name:"店铺2",img:"/static/img/list_img2.jpg",goods_id:"1",good_num:2,name:"现代简约双人床",title:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",price:715,real_paice:725,parameter:{"颜色":"红色","尺寸":"1.8米"},state:"3",tips_txt:"拒绝退货",btn_list:["投诉","申请售后","查看详情"]},{shop_name:"店铺2",img:"/static/img/list_img2.jpg",goods_id:"1",good_num:2,name:"现代简约双人床",title:"床 现代简约双人床 实木北欧小户型榻榻米床1.8米",price:715,real_paice:725,parameter:{"颜色":"红色","尺寸":"1.8米"},state:"2",tips_txt:"待处理",btn_list:["查看详情"]}]}},onLoad:function(){},methods:{link:function(e){switch(e){case"投诉":console.log(t("1"," at pages\\after_sale\\after_sale_list.vue:100"));break;case"申请售后":console.log(t("2"," at pages\\after_sale\\after_sale_list.vue:104"));break;case"查看详情":a.navigateTo({url:"/pages/myorder/refundDetail?orderId=3"});break}}}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},d926:function(t,e,a){"use strict";(function(t){a("0947"),a("921b");n(a("66fd"));var e=n(a("33ae"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},f515:function(t,e,a){"use strict";var n=a("23b5"),i=a.n(n);i.a}},[["d926","common/runtime","common/vendor"]]]);
});
require('pages/after_sale/after_sale_list.js');
__wxRoute = 'pages/myorder/refundSuccess';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myorder/refundSuccess.js';

define('pages/myorder/refundSuccess.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myorder/refundSuccess"],{"287a":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})},"3fa1":function(e,t,n){"use strict";(function(e){n("0947"),n("921b");r(n("66fd"));var t=r(n("94db"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"8e7e":function(e,t,n){"use strict";var r=n("ec6e"),u=n.n(r);u.a},"94db":function(e,t,n){"use strict";n.r(t);var r=n("287a"),u=n("f7dc");for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);n("8e7e");var o=n("2877"),c=Object(o["a"])(u["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},c1d4:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{order_id:0}},onLoad:function(t){t.orderId?this.order_id=t.orderId:e.navigateBack()},methods:{seedetails:function(){e.navigateTo({url:"refundDetail?orderId="+this.order_id})}}};t.default=n}).call(this,n("6e42")["default"])},ec6e:function(e,t,n){},f7dc:function(e,t,n){"use strict";n.r(t);var r=n("c1d4"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=u.a}},[["3fa1","common/runtime","common/vendor"]]]);
});
require('pages/myorder/refundSuccess.js');
__wxRoute = 'pages/myorder/refundDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myorder/refundDetail.js';

define('pages/myorder/refundDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myorder/refundDetail"],{"192d":function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return a})},"4d63":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{phoneNumber:"13049365984"}},methods:{phoneCall:function(){var e=this;n.showModal({content:"拨打"+this.phoneNumber,success:function(t){t.confirm?n.makePhoneCall({phoneNumber:e.phoneNumber}):t.cancel}})}}};e.default=t}).call(this,t("6e42")["default"])},a492:function(n,e,t){"use strict";t.r(e);var u=t("192d"),a=t("fca7");for(var c in a)"default"!==c&&function(n){t.d(e,n,function(){return a[n]})}(c);t("dc3d");var o=t("2877"),r=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=r.exports},b93d:function(n,e,t){"use strict";(function(n){t("0947"),t("921b");u(t("66fd"));var e=u(t("a492"));function u(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},dc3d:function(n,e,t){"use strict";var u=t("fdc1"),a=t.n(u);a.a},fca7:function(n,e,t){"use strict";t.r(e);var u=t("4d63"),a=t.n(u);for(var c in u)"default"!==c&&function(n){t.d(e,n,function(){return u[n]})}(c);e["default"]=a.a},fdc1:function(n,e,t){}},[["b93d","common/runtime","common/vendor"]]]);
});
require('pages/myorder/refundDetail.js');
__wxRoute = 'pages/myorder/evaluate';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myorder/evaluate.js';

define('pages/myorder/evaluate.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myorder/evaluate"],{"06f8":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return n.e("components/evaluate-star/evaluate-star").then(n.bind(null,"e61b"))},a=function(){return n.e("components/uni-upload-image/uni-upload-image").then(n.bind(null,"a871"))},r={components:{evaluateStar:o,uniUploadImage:a},data:function(){return{order_id:0,evaluateArray:[{title:"商品评价",score:0},{title:"服务态度",score:0},{title:"物流",score:0}],score:0,scores:0,scored:0,fileList:[],url:"http://",name:"file",isanonymous:!0,textareaTxt:""}},onLoad:function(t){t.orderId?this.order_id=t.orderId:e.navigateBack()},methods:{starsNum:function(e){var t=this.evaluateArray[e.index];this.$set(t,"score",parseInt(e.i+1)),0==e.index?this.score=parseInt(e.i+1):1==e.index?this.scores=parseInt(e.i+1):2==e.index&&(this.scored=parseInt(e.i+1))},onSuccess:function(e){0===e.code&&this.fileList.push(e.data.image_url)},onError:function(){console.log(i(err," at pages\\myorder\\evaluate.vue:85"))},onRemove:function(){this.fileList.splice(index,1)},chooseVideo:function(){var t=this;e.hideKeyboard(),e.chooseVideo({count:1,sourceType:["camera","album"],success:function(e){t.src=e.tempFilePath}})},switchChange:function(t){e.hideKeyboard(),this.isanonymous=t.target.value},release:function(){return e.hideKeyboard(),0==this.score?(this.uniToast("请您对商品评分",""),!1):0==this.scores?(this.uniToast("请您对服务态度评分",""),!1):0==this.scored?(this.uniToast("请您对物流评分",""),!1):""==this.textareaTxt?(this.uniToast("请您对该商品文字描述",""),!1):(this.uniToast("提交评论成功","/static/img/myorder/anonymous.png"),void setTimeout(function(){e.navigateBack()},2e3))},uniToast:function(t,n){e.showToast({title:t,icon:"none",image:n,duration:2e3})}}};t.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},"0b31":function(e,t,n){"use strict";n.r(t);var i=n("06f8"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},"4c2f":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"519f":function(e,t,n){"use strict";n.r(t);var i=n("4c2f"),o=n("0b31");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("89dd");var r=n("2877"),s=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"3237e03c",null);t["default"]=s.exports},"89dd":function(e,t,n){"use strict";var i=n("8cdd"),o=n.n(i);o.a},"8cdd":function(e,t,n){},c758:function(e,t,n){"use strict";(function(e){n("0947"),n("921b");i(n("66fd"));var t=i(n("519f"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["c758","common/runtime","common/vendor"]]]);
});
require('pages/myorder/evaluate.js');
__wxRoute = 'pages/myorder/orderDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myorder/orderDetail.js';

define('pages/myorder/orderDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myorder/orderDetail"],{5025:function(t,n,e){"use strict";var u=e("fc21"),a=e.n(u);a.a},8412:function(t,n,e){"use strict";(function(t){e("0947"),e("921b");u(e("66fd"));var n=u(e("9a4b"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"8a0a":function(t,n,e){"use strict";e.r(n);var u=e("bf77"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},"9a4b":function(t,n,e){"use strict";e.r(n);var u=e("f9cd"),a=e("8a0a");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("5025");var c=e("2877"),f=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,"6bac9d25",null);n["default"]=f.exports},bf77:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},f9cd:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},fc21:function(t,n,e){}},[["8412","common/runtime","common/vendor"]]]);
});
require('pages/myorder/orderDetail.js');
__wxRoute = 'pages/message/systemMessage/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/message/systemMessage/index.js';

define('pages/message/systemMessage/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/message/systemMessage/index"],{5053:function(t,e,n){"use strict";n.r(e);var i=n("8f3d"),a=n("b79d");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("acff");var s=n("2877"),u=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"c37d8e38",null);e["default"]=u.exports},"57a3":function(t,e,n){"use strict";(function(t){n("0947"),n("921b");i(n("66fd"));var e=i(n("5053"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},8843:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/loading-show/loading-show").then(n.bind(null,"2325"))},o={components:{loading:a},onLoad:function(e){var n=this;this.title=e.title,t.setNavigationBarTitle({title:e.title}),this.show_loading=!0,"系统通知"==e.title&&setTimeout(function(){n.show_loading=!1,n.show_404=!0},4e3),"互动消息"==e.title&&(this.showImg=!0,setTimeout(function(){n.show_loading=!1,n.newsList=[{pid:"0",img:"../../../static/img/message/toux.png",title:"张三评论了您的留言",date:"17:00"},{pid:"1",img:"../../../static/img/message/touxiang.png",title:"李四点赞了你的评论",date:"昨天"},{pid:"2",img:"../../../static/img/message/toux.png",title:"王二评论了你的评论",date:"14:20"}]},2e3)),"客服小白"==e.title&&setTimeout(function(){n.show_loading=!1},2e3)},data:function(){return{newsList:"",showImg:!1,show_404:!1,show_loading:!1,title:""}},methods:{to_detail:function(t){console.log(i("查看了标识为"+t+"的新闻详情"," at pages\\message\\systemMessage\\index.vue:129"))},reDate:function(e){t.redirectTo({url:"/pages/message/systemMessage/index?title="+e})}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},"8f3d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},acff:function(t,e,n){"use strict";var i=n("baf6"),a=n.n(i);a.a},b79d:function(t,e,n){"use strict";n.r(e);var i=n("8843"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},baf6:function(t,e,n){}},[["57a3","common/runtime","common/vendor"]]]);
});
require('pages/message/systemMessage/index.js');
__wxRoute = 'pages/myfix/myfix';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/myfix/myfix.js';

define('pages/myfix/myfix.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myfix/myfix"],{"2d19":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("node-modules/@dcloudio/uni-ui/lib/uni-load-more/uni-load-more").then(n.bind(null,"3f0f"))},a={components:{UniLoadMore:i},data:function(){return{showList:!1,showList1:!1,showList2:!0,showList3:!0,showbtn:"展开",status:"more",items:[{value:"USA",name:"欧式"},{value:"CHN",name:"美式",checked:"true"},{value:"BRA",name:"中式"}],current:0,items1:[{value:"USA",name:"全包"},{value:"CHN",name:"半包",checked:"true"},{value:"BRA",name:"自购"}],current1:0,items2:[{value:"USA",name:"需要"},{value:"CHN",name:"不需要",checked:"true"}],current2:0,items3:[{value:"USA",name:"一万"},{value:"q",name:"十万"},{value:"t",name:"其他"}],current3:0,ic_xuan:"180deg",testlist:[]}},onLoad:function(e){var n=this;t.setNavigationBarTitle({title:e.title}),t.request({url:"http://www.baidu.com/api1",success:function(t){n.testlist=t.data.list}})},onReachBottom:function(){var t=this;null==e&&clearTimeout(e);var e=setTimeout(function(){t.getMoreNewList()},1e3)},onNavigationBarButtonTap:function(e){0==e.index&&t.navigateTo({url:"../search/search",animationType:"slide-in-bottom",animationDuration:250,success:function(t){},fail:function(){},complete:function(){}})},methods:{getMoreNewList:function(){var e=this;this.status="loading",setTimeout(function(){t.request({url:"http://www.baidu.com/api1",success:function(t){t.data?(e.testlist=e.testlist.concat(t.data.list),e.status="more"):e.status="noMore"}})},500)},isshow:function(){this.showList=!this.showList,"收起"==this.showbtn?(this.showbtn="展开",this.showList1=!1,this.showList2=!0,this.showList3=!0):(this.showbtn="收起",this.showList1=!0,this.showList2=!1,this.showList3=!1)},ischecked:function(){this.xuanzhong=!this.xuanzhong},ischecked1:function(){this.xuanzhong1=!this.xuanzhong1},ischecked2:function(){this.xuanzhong2=!this.xuanzhong2},radioChange:function(t){for(var e=0;e<this.items.length;e++)if(this.items[e].value===t.target.value){this.current=e;break}},radioChange1:function(t){for(var e=0;e<this.items1.length;e++)if(this.items1[e].value===t.target.value){this.current1=e;break}},radioChange2:function(t){for(var e=0;e<this.items2.length;e++)if(this.items2[e].value===t.target.value){this.current2=e;break}},radioChange3:function(t){for(var e=0;e<this.items3.length;e++)if(this.items3[e].value===t.target.value){this.current3=e;break}}}};e.default=a}).call(this,n("6e42")["default"])},a45c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},aa5b:function(t,e,n){"use strict";n.r(e);var i=n("2d19"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},f052:function(t,e,n){},f1d1:function(t,e,n){"use strict";(function(t){n("0947"),n("921b");i(n("66fd"));var e=i(n("f98d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f40f:function(t,e,n){"use strict";var i=n("f052"),a=n.n(i);a.a},f98d:function(t,e,n){"use strict";n.r(e);var i=n("a45c"),a=n("aa5b");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("f40f");var u=n("2877"),o=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"ea6e0f40",null);e["default"]=o.exports}},[["f1d1","common/runtime","common/vendor"]]]);
});
require('pages/myfix/myfix.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

