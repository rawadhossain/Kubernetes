# [Ingress Controllers](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)

- In order for the Ingress resource to work, the cluster must have an ingress controller running.
- Ingress controllers are not started automatically with a cluster.
- Kubernetes as a project supports and maintains AWS, GCE, and nginx ingress controllers.
- Deploy any number of ingress controllers using ingress class within a cluster.
- When creating an ingress the `ingressClassName` field has to be specified to indicate which ingress controller should be used.
- If not specified, the default ingress controller will be used.
