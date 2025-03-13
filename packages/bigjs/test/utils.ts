function write(str:string, end='\n') {
	const text = `${str}${end}`

	if(typeof window !== 'undefined') {
		document.body.innerHTML += text.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')
	} else {
		process.stdout.write(text)
	}
}

class TestAssert {
	static count = 0
	static passed = 0

	static isTrue(actual:unknown) {
		TestAssert.count++
		if(actual === true) {
			TestAssert.passed++
		} else {
			TestAssert.fail(TestAssert.count, 'true', actual)
		}
	}

	static isPositiveZero(actual:unknown) {}
	static isNegativeZero(actual:unknown) {}
	static isException(actual:unknown) {}
	static areEqual(expected:unknown, actual:unknown) {}

	static fail(count:number, expected:unknown, actual:unknown) {

	}
}

export class TestRunner {
	static test(name:string, func:(assert:typeof TestAssert)=>unknown) {
		write(`================= Testing ${name} =================`)
		func(TestAssert)
	}
}
