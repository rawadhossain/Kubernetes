## [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)

- A Deployment provides declarative updates to Pods and ReplicaSets.
- A Deployment's rollout is triggered if and only if the Deployment's Pod template (that is, `.spec.template`) is changed.
- A Deployment enters various states during its lifecycle.
    - It can be `progressing` while rolling out a new ReplicaSet, it can be `complete`, or it can `fail` to progress.
- A Deployment needs `.apiVersion`, `.kind`, and `.metadata` fields.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name:
  labels:
spec:
```

