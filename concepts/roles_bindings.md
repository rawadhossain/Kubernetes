## [Role Binding](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding)

- A role binding grants the permissions defined in a role to a user or set of users. 
- It holds a list of subjects (users, groups, or service accounts), and a reference to the role being granted.
- A `RoleBinding` grants permissions within a specific namespace. 
- A `RoleBinding` may reference any `Role` in the same namespace.
- There are 3 `kind` of subjects can be groups, users or ServiceAccounts.
- Groups, like users, are represented as strings.
- ServiceAccounts have names prefixed with `system:serviceaccount:`.

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  namespace:
  name: 
  labels:
roleRef:
subjects:
```

