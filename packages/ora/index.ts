class Ora {
	start() {}
	stop() {}
	succeed() {}
	fail() {}
	warn() {}
}

export default function ora() {
	return new Ora()
}
