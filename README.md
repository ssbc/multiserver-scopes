ssb-scopes
---

simple wrapper around non-private-ip that.
The idea is that this is the canonical place to get a default host for a connection gicen scope.

## API

## `host(scope)`

returns default host for a given scope

- 'device' -> 'localhost'
- 'local' -> private/non-routable IP (e.g. 192.168 ...)
- 'private' -> same as local
- 'public' -> public IP (routable IP)

