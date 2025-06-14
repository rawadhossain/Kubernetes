## [Secret](https://kubernetes.io/docs/concepts/configuration/secret/)

- A `Secret` is an object that contains a small amount of sensitive data.
- `Secrets` are similar to `ConfigMaps` but are specifically intended to hold confidential data.
- By default, they are stored unencrypted.
- `Opaque` is the default `Secret` type if you don't explicitly specify a type in its manifest.

```yaml
apiVersion: v1
kind: Secret
metadata:
  name:
  labels:
type: Opaque
data:
```
