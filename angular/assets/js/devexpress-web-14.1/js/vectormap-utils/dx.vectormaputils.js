﻿/*! 
* DevExtreme (Vector Map)
* Version: 15.1.6
* Build date: Aug 14, 2015
*
* Copyright (c) 2012 - 2015 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
(function(n){function e(){}function l(n){return n}function u(n){return typeof n=="function"}function o(n){var i=ct(n),t=0,r;return r={pos:function(){return t},skip:function(n){return t+=n,r},ui8arr:function(n){var t=0,i=[];for(i.length=n;t<n;++t)i[t]=r.ui8();return i},ui8:function(){var n=lt(i,t);return t+=1,n},ui16le:function(){var n=at(i,t);return t+=2,n},ui32le:function(){var n=vt(i,t);return t+=4,n},ui32be:function(){var n=yt(i,t);return t+=4,n},f64le:function(){var n=pt(i,t);return t+=8,n}}}function a(n,t,i){var r=n[0]?k(o(n[0]),i):{},f=n[1]?rt(o(n[1]),i):{},u=v(r.shapes||[],f.records||[],t);return u.length?{type:"FeatureCollection",bbox:r.bbox,features:u}:null}function v(n,t,i){for(var f=[],e=f.length=e=Math.max(n.length,t.length),u,r=0;r<e;++r)u=n[r]||{},f[r]={type:"Feature",geometry:{type:u.type||null,coordinates:u.coordinates?i(u.coordinates):null},properties:t[r]||null};return f}function y(n){function r(n){return Math.round(n*t)/t}function i(n){return n.map(n[0].length?i:r)}var t=Number("1E"+n);return i}function p(n){return n=n||{},["shp","dbf"].map(function(t){return function(i){n.substr?(t="."+t,wt(n+(n.substr(-t.length).toLowerCase()===t?"":t),function(n,t){i(n,t)})):i(null,n[t]||null)}})}function w(n,t,i){var r;return b(p(n),function(n,f){i=u(t)&&t||u(i)&&i||e,t=!u(t)&&t||{};var o=[];n.forEach(function(n){n&&o.push(n)}),r=a(f,t.precision>=0?y(t.precision):l,o),i(r,o.length?o:null)}),r}function b(n,t){function e(){--i,i!==0||f||t(r,u)}var r=[],u=[],i=1,f=!0;n.forEach(function(n,t){++i,n(function(n,i){r[t]=n,u[t]=i,e()})}),f=!1,e()}function k(n,t){var u,f,i,e=[],r;try{u=new Date,i=d(n)}catch(o){t.push("shp: header parsing error: "+o.message+" / "+o.description);return}i.fileCode!==9994&&t.push("shp: file code: "+i.fileCode+" / expected: 9994"),i.version!==1e3&&t.push("shp: file version: "+i.version+" / expected: 1000");try{while(n.pos()<i.fileLength)if(r=it(n,i.shapeType,t),r)e.push(r);else break;n.pos()!==i.fileLength&&t.push("shp: file length: "+i.fileLength+" / actual: "+n.pos()),f=new Date}catch(o){t.push("shp: records parsing error: "+o.message+" / "+o.description)}finally{return{bbox:i.bbox_xy,type:i.shapeType,shapes:e,errors:t,time:f-u}}}function d(n){var t={};return t.fileCode=n.ui32be(),n.skip(20),t.fileLength=n.ui32be()<<1,t.version=n.ui32le(),t.shapeType=s[n.ui32le()],t.bbox_xy=f(n),t.bbox_zm=i(n,2),t}function f(n){return[n.f64le(),n.f64le(),n.f64le(),n.f64le()]}function i(n,t){var r=[],i;for(r.length=t,i=0;i<t;++i)r[i]=[n.f64le(),n.f64le()];return r}function g(n,t){t.coordinates=i(n,1)[0]}function h(n,t){var c=f(n),e=n.ui32le(),s=n.ui32le(),u=[],h,r,o=[];for(u.length=o.length=e,r=0;r<e;++r)u[r]=n.ui32le();for(h=i(n,s),r=0;r<e;++r)o[r]=h.slice(u[r],u[r+1]||s);t.bbox=c,t.coordinates=o}function nt(n,t){t.bbox=f(n),t.coordinates=i(n,n.ui32le())}function it(n,t,i){var r={number:n.ui32be()},e=n.ui32be()<<1,u=n.pos(),f=n.ui32le();return r.type=s[f],r.type?(r.type!==t&&i.push("shp: shape #"+r.number+" type: "+r.type+" / expected: "+t),tt[f](n,r),u=n.pos()-u,u!==e&&i.push("shp: shape #"+r.number+" length: "+e+" / actual: "+u)):(i.push("shp: shape #"+r.number+" type: "+f+" / unknown"),r=null),r}function rt(n,t){var r,u,i,f,e;try{r=new Date,i=ut(n,t),f=st(i,t),e=ht(n,i.numberOfRecords,i.recordLength,f,t),u=new Date}catch(o){t.push("dbf: parsing error: "+o.message+" / "+o.description)}finally{return{records:e,errors:t,time:u-r}}}function ut(n,t){var i,r={versionNumber:n.ui8(),lastUpdate:new Date(1900+n.ui8(),n.ui8()-1,n.ui8()),numberOfRecords:n.ui32le(),headerLength:n.ui16le(),recordLength:n.ui16le(),fields:[]},u;for(n.skip(20),i=(r.headerLength-n.pos()-1)/32;i>0;--i)r.fields.push(ft(n));return u=n.ui8(),u!==13&&t.push("dbf: header terminator: "+u+" / expected: 13"),r}function r(n,t){return c.apply(null,n.ui8arr(t))}function ft(n){var t={name:r(n,11).replace(/\0*$/gi,""),type:c(n.ui8()),length:n.skip(4).ui8(),count:n.ui8()};return n.skip(14),t}function ot(n,t){return n.skip(t),null}function st(n,t){for(var e=[],u=0,o=n.fields.length,r,i,f=0,u=0;u<o;++u)i=n.fields[u],r={name:i.name,parser:et[i.type],length:i.length},r.parser||(r.parser=ot,t.push("dbf: field "+i.name+" type: "+i.type+" / unknown")),f+=i.length,e.push(r);return f+1!==n.recordLength&&t.push("dbf: record length: "+n.recordLength+" / actual: "+(f+1)),e}function ht(n,t,i,r,u){for(var e,l=r.length,f,c=[],h,o,s=0;s<t;++s){for(h={},f=n.pos(),n.skip(1),e=0;e<l;++e)o=r[e],h[o.name]=o.parser(n,o.length);f=n.pos()-f,f!==i&&u.push("dbf: record #"+(s+1)+" length: "+i+" / actual: "+f),c.push(h)}return c}function ct(n){return new DataView(n)}function lt(n,t){return n.getUint8(t)}function at(n,t){return n.getUint16(t,!0)}function vt(n,t){return n.getUint32(t,!0)}function yt(n,t){return n.getUint32(t,!1)}function pt(n,t){return n.getFloat64(t,!0)}function wt(n,t){var i=new XMLHttpRequest;i.onreadystatechange=function(){this.readyState===4&&(this.statusText==="OK"?t(null,this.response):t(this.statusText,null))},i.open("GET",n),i.responseType="arraybuffer",i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(null)}var s={0:"Null",1:"Point",3:"PolyLine",5:"Polygon",8:"MultiPoint"},tt={0:e,1:g,3:h,5:h,8:nt},c=String.fromCharCode,et={C:function(n,t){var i=r(n,t);return i.trim()},N:function(n,t){var i=r(n,t);return parseFloat(i,10)},D:function(n,t){var i=r(n,t);return new Date(i.substring(0,4),i.substring(4,6)-1,i.substring(6,8))}};(function(n){n=n.DevExpress=n.DevExpress||{},n=n.viz=n.viz||{},n.vectormaputils={parse:w}})(n)})(window);