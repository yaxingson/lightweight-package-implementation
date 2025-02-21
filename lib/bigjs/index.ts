const P: any = {}

function _Big_() {
	function Big() {}

	Big.prototype = P

	return Big
}

P.abs = function() {}
P.cmp = function() {}
P.div = function() {}
P.eq = function() {}
P.gt = function() {}

export const Big = _Big_()
export default Big
