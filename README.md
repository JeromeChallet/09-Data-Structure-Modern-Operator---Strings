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
type {propName1:newName1=[], propName2:newName2=[], propName3:newName3=[]} = objName;
Nested Destructuring Objects\
type {propNamel1:{propNamel2, propNamel2}} = nestedObjName;\
Pass all the parameters of a function inside an object\
funcName: function ({param1, param2, param3}){use of params};\
objName.funcName({param1: "x", param2: "y", param3: 5});\
spread operator...\
type arrName2 = [...arrName1];\
const objNameCopy = {...objName};\
rest pattern\
type [a,b, ...others] = [1,2,3,4,5];\
Short Circuiting\
obj.funcName && obj.funcName('param1', 'param2')\
Nullish Coaliscing Operator ??\
nullish: null and undefined (not 0 or '')\
const varName = obj.param ?? 10;
Logical Assignment Operator ||= &&= ??=\
obj.param1 ||= 10;\
obj.param1 &&= '<ANONYMOUS>';\
for of loop\
item element\
for (type item of arrayName) console.log(item);
for (const item of arrayName.entries()) {\
console.log(item);//each of the is an array}\
array iterator: [...arrayName.entries()]\
Enhanced Object Literals\
compute property name: [arrayName[3]]\
funcName(){}\
Optional Chaning\
restaurant?.openingHours?.mon?.open\
objName.objPropName[varName]\
objName.objMethodName?.(arg1, arg2) ?? result\
