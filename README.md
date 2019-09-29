multiserver-scopes
---

Currently a simple wrapper around non-private-ip.
The idea is that this is the canonical place to get a default host for a connection given a scope. The scenario is: there is a scope but no host specified for an incoming connection and sbot must pick a host.

This module should become the definition of what scopes mean in ssb.

## API

## `canonicalize(scope)`

There are two names used in the scuttlebutt codebase for the LAN scope: `local` and `private`.
`canonocalize()` deals with this (and possible other aliases) by mapping both names to 'private'.

The complete mapping is:

```
- device  -> device
- local   -> private
- private -> private
- public  -> public
```
## `host(scope, opts)`
 
returns default host for a given scope. Returns an IPv4 address unless opts.ipv6 is truthy.

- `device` -> 'localhost'
- `local` -> private/non-routable IP (e.g. 192.168 ...)
- `private` -> same as local
- `public` -> public IP (routable IP)

# more ideas

`compare(scope_a, scope_b)` for use with `sort`. Sort scopes in ascending order of size: device < local <= private < public. Unknown scopes sort before everyting (because they include nothing)
