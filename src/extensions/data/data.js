// Extensions

// keep this wrapper around the ones you use!
//>>excludeStart("exclude", pragmas.exclude);
define([ "shoestring" ], function(){
//>>excludeEnd("exclude");
	shoestring.fn.data = function( name, val ){
		if( name !== undefined ){
			if( val !== undefined ){
				return this.each(function(){
					if( !this.shoestringData ){
						this.shoestringData = {};
					}
					this.shoestringData[ name ] = val;
				});
			}
			else {
				return this.length && this[ 0 ].shoestringData ? this[ 0 ].shoestringData[ name ] : undefined;
			}
		}
		else {
			return this.length ? this[ 0 ].shoestringData || {} : undefined;
		}
	};
//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");