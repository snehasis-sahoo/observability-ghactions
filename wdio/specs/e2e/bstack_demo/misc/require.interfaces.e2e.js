var testCase = require('mocha').describe;
var pre = require('mocha').before;
var preEach = require('mocha').beforeEach;
var post = require('mocha').after;
var postEach = require('mocha').afterEach;
var assertions = require('mocha').it;
var assert = require('chai').assert;

testCase('Require - Interface - Suite', function () {
  pre(function () {
    console.log('pre - beforeAll - Require Interface')
  });

  preEach(function () {
    console.log('preEach - beforeAll - Require Interface')
  });

  postEach(function () {
    console.log('postEach - beforeAll - Require Interface')
  });

  post(function () {
    console.log('post - beforeAll - Require Interface')
  });

  testCase('TestCase - Describe -  Require Interface', function () {
    assertions('Assertions - it - should return -1 when not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    assertions('Assertions - it - should return -1 when not present - Fail', function () {
      assert.equal([1, 2, 3].indexOf(4), 0);
    });

  });
});
