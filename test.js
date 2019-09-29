var test = require('tape')
var scopes = require('.')

test('canonicalize', function(t) {
  var allScopes = 'device local private public'.split(' ')
  t.deepEqual(
    allScopes.map(scopes.canonicalize), 
    'device private private public'.split(' ')
  )
  t.end()
})

test('throw if scope is invalid', function(t) {
  t.throws(function() {
    scopes.canonicalize('this')
  })
  t.end()
})

test('host("device") returns ipv4 or ipv6 representation of localhost', function(t) {
  t.equal(scopes.host('device'), '127.0.0.1')
  t.equal(scopes.host('device', {ipv6: true}), '::1')
  t.equal(scopes.host('device', {ipv6: false}), '127.0.0.1')
  t.end()
})
