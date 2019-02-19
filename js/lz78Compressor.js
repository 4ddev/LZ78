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

class LZ78Compressor{
	static serialize( dom,bimap,deli ){
	   let d = 0;
	   let res = "";

	   var tempOffset = 0;
	   
	   for(let i = 0;i<dom.length; i++ ){
		 if( deli[dom.charAt( i )] != null  ){
			
			if ( i != tempOffset && i != tempOffset+1 ){
				var elem = dom.substring( tempOffset+1, i );

				if( !bimap.containsKey(elem ) ){
				   bimap.push( elem, d );
				   res += d;
				   d++;
				}else{
				   res += bimap.getValue(elem+"");
				}
			}
			res += dom.charAt(i );
			tempOffset = i;
		}
	   }
	   return res;
	}

	static deserialize(dom,bimap,deli){
		if( dom == null || bimap == null || deli == null ) return null;
		var tempOffset = 0;

		var res ="";
		for( let i = 0;i<dom.length; i++ ){
		 
		 if( deli[dom.charAt( i )] != null  ){
			if ( i != tempOffset && i != tempOffset+1 ){
				var elem = dom.substring( tempOffset+1, i );
				res += bimap.getKey(elem);
			}
			res += dom.charAt(i );
			tempOffset = i;
		}
	   }
	   return res;
	}
}