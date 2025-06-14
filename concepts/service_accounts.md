## [Service Account](https://kubernetes.io/docs/concepts/security/service-accounts/)

- A service account is a type of non-human account that provides a distinct identity in a Kubernetes cluster.
- Service accounts exist as `ServiceAccount` objects.
- Each service account is bound to a Kubernetes namespace.
- Service accounts exist in the cluster.
- Kubernetes automatically creates a ServiceAccount object named `default` for every namespace in your cluster.

```yaml
apiVersion: v1
kind: ServiceAccount
automountServiceAccountToken: true
metadata:
```
