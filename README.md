Destructuring Arrays\
type [x,y,z] = arrName;\
type [x,y,z] = objName.keyName;\
switching variables\
[arrEl1, arrEl2] = [arrEl2, arrEl1]\
nested destructuring\
type [x,y,z] = arrName;\
type [x,y,[a,b]] = arrName;\
const [x=1,y=1,z=1] = [8,9];\
Destructuring Objects\
type {propName1=newName1=[], propName2=newName2=[], propName3=newName3=[]} = objName;
Nested Destructuring Objects\
type {propNamel1:{propNamel2, propNamel2}} = nestedObjName;\
Pass all the parameters of a function inside an object\
funcName: function ({param1, param2, param3}){use of params};\
objName.funcName({param1: "x", param2: "y", param3: 5});\
