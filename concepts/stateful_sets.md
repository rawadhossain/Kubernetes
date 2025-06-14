## [Stateful Set](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)

- `StatefulSet` manage stateful applications.
- Unlike a `Deployment`, a `StatefulSet` maintains a sticky identity for each of its `Pods`.
- The pods are created from the same spec, but are not interchangeable.
    - Each has a persistent identifier that it maintains across any rescheduling.
- StatefulSets are valuable for applications that require one or more of the following:
    - Stable, unique network identifiers.
    - Stable, persistent storage.
    - Ordered, graceful deployment and scaling.
    - Ordered, automated rolling updates.

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name:
  labels:
spec:
```
