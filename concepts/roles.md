## [Roles](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)

- Role-based access control (RBAC) is a method of regulating access to computer or network resources based on the roles of individual users within your organization.
- The RBAC API declares four kinds of Kubernetes object:
    - `Role`.
    - `ClusterRole`
    - `RoleBinding`
    - `ClusterRoleBinding`.
- An RBAC `Role` contains rules that represent a set of permissions.
    - Permissions are purely additive (there are no "deny" rules).
- A Role always sets permissions within a particular namespace.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name:
  namespace:
  labels:
rules:
```
