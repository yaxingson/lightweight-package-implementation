import assume from 'assume'
import parse from '..'

describe('url-parse', ()=>{
	it('exposes parse as a function', ()=>{
		assume(parse).is.a('function')

	})

})
