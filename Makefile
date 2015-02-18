
test:
	@./node_modules/.bin/mocha -A

test-cov:
	@NODE_ENV=test node \
		node_modules/.bin/istanbul cover \
		./node_modules/.bin/_mocha \
		-- -u exports \
		-A

open-cov:
	open coverage/lcov-report/index.html

test-travis:
	@NODE_ENV=test node \
		node_modules/.bin/istanbul cover \
		./node_modules/.bin/_mocha \
		--report lcovonly \
		-- -u exports \
		--bail \
		-A

.PHONY: test test-cov open-cov test-travis
