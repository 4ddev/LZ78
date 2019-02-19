/**
 *	Copyright 2018 Kevin Heim
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 *	and associated documentation files (the "Software"), to deal in the Software without 
 *	restriction, including without limitation the rights to use, copy, modify, merge, publish, 
 *	distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the 
 *	Software is furnished to do so, subject to the following conditions:

 *	The above copyright notice and this permission notice shall be included in 
 *	all copies or substantial portions of the Software.

 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 *	INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 *	PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
 *	FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 *	ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
class BiMap{
   constructor(attr,inmap,outmap){
	  this.attr = attr ? attr: [];
      this.inmap = inmap ? inmap : [];
	  this.outmap = outmap ? outmap : [];
   }
   /**
    @param o: Key
	@param v: Value 
	*/
   push( o, v ){
	    this.attr[o] = 1;
		this.inmap[o] = v;
		this.outmap[v] = o;
		return v;
   }
   /**
    @param o: Object get the Value stored in this map - if there is no such key - it will return false
    @return false: No Key stored in this map
	        null: Key has value of null
			o:   Value of this key 		
   */
   getValue( o ){
	  return this.inmap[o];
   }
   
   getKey( v ){
	  return this.outmap[v];
   }
   
   containsKey( o ){
		if( BiMap.isFunction( this.attr[o] ) ) return false;
		else if( this.attr[o] != 1 ) return false;
		else return true;
   }
   
   // WRAPPED FOR CHROME - COULD BE THAT A NORMAL STRING IS INTERPRETED AS FUNCTION 
   static isFunction(functionToCheck) {
		return !(functionToCheck==null) && {}.toString.call(functionToCheck) === '[object Function]';
	}
   
   
}