# [Daemon Sets](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)

- A `DaemonSet` ensures that all (or some) `Nodes` run a copy of a `Pod`.
- Deleting a `DaemonSet` will clean up the `Pods` it created.
- Some typical uses of a `DaemonSet` are:
    - Running a cluster storage daemon on every node.
    - Running a logs collection daemon on every node.
    - Running a node monitoring daemon on every node.
- A `DaemonSet` needs `apiVersion`, `kind`, and `metadata` fields.
- The `DaemonSet controller` creates a Pod for each eligible node.
- `DaemonSets` are similar to `Deployments` in that they both create `Pods`.
    - Those `Pods` have processes which are not expected to terminate. 
    - Use a `Deployment` for stateless services.
    - Use a `DaemonSet` when it is important that a copy of a `Pod` always run on all or certain hosts.

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name:
  labels:
spec:
    selector:
        matchLabels:
          app:
```
