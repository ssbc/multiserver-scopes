var ip = require('non-private-ip')

function canonicalize(scope) {
  var canonicalized = {
    device: 'device',
    local: 'private',
    private: 'private',
    public: 'public'
  }[scope]
  if (!canonicalized) throw new Error('invalid scope: ' + scope)
  return canonicalized
}

function host(scope, opts) {
  opts = opts || {}
  var family = opts.ipv6 ? 'v6' : 'v4'
  return {
    device: {v4: '127.0.0.1', v6: '::1'}[family],
    private: ip.private[family],
    public: ip[family]
  }[canonicalize(scope)]
}

module.exports.canonicalize = canonicalize
module.exports.host = host
