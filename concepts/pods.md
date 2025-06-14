# [Pods](https://kubernetes.io/docs/concepts/workloads/pods)

- `Pods` are the smallest deployable units of computing that you can create and manage in Kubernetes.
- A `Pod` is a group of one or more containers, with shared storage and network resources.
- Use workload resources to create and manage multiple Pods.
    - `Deployment`.
    - `StatefulSet`.
    - `DaemonSet`.
- Controllers for workload resources create Pods from a pod `template`.

```yaml
apiVersion: v1
kind: Pod
metadata:
spec:
  containers:
```
