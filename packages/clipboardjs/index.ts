import Emitter from './tiny-emitter'
import listen from './good-listener'

class Clipboard extends Emitter {
	static copy() {}
	static cut() {}
	static isSupported() {}
}

export default Clipboard
