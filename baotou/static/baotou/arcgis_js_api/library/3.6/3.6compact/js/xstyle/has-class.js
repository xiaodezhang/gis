//>>built
define("xstyle/has-class",["dojo/has"],function(_1){var _2={};return function(){var _3,_4=arguments;for(var i=0;i<_4.length;i++){var _3=_4[i];if(!_2[_3]){_2[_3]=true;var _5=_3.match(/^(no-)?(.+?)((-[\d\.]+)(-[\d\.]+)?)?$/),_6=_1(_5[2]),_7=-_5[4];if((_7>0?_7<=_6&&(-_5[5]||_7)>=_6:!!_6)==!_5[1]){document.documentElement.className+=" has-"+_3;}}}};});