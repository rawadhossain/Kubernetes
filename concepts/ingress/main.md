## [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)

- An API object that manages external access to the services in a cluster, typically HTTP.
- Ingress may provide load balancing, SSL termination and name-based virtual hosting.
- Ingress exposes HTTP and HTTPS routes from outside the cluster to `services` within the cluster.
- An Ingress controller is responsible for fulfilling the Ingress, usually with a load balancer.
- An Ingress does not expose arbitrary ports or protocols.
- There must have to be an Ingress controller to satisfy an Ingress.
    - Only creating an Ingress resource has no effect.
- An Ingress needs `apiVersion`, `kind`, `metadata` and `spec` fields.
- The Ingress spec has all the information needed to configure a load balancer or proxy server.
    - Most importantly, it contains a list of `rules` matched against all incoming requests.
- Each HTTP `rule` contains the following information:
    - An optional `host`.
    - A list of paths.
    - A backend is a combination of Service and port names.
- If the `ingressClassName` is omitted, a default Ingress class should be defined.
- Ingresses can be implemented by different controllers.
- Before Kubernetes 1.18, Ingress classes were specified with a `kubernetes.io/ingress.class` annotation on the Ingress.
    - The newer `ingressClassName` field on Ingresses is a replacement for that annotation.
- Ingress resource only supports rules for directing HTTP(S) traffic.
- Each HTTP `rule` contains the following information:
    - An optional `host`.
    - A list of `paths`, each of which has an associated `backend` defined with:
        - `service.name`.
        - `service.port.name` or `service.port.number`.
        - A `backend` is a combination of `Service` and `port` names.
        - Each `path` in an `Ingress` is required to have a corresponding `path type`.
            - `ImplementationSpecific`, `Exact` or `Prefix`.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name:
  labels:
  annotations:
spec:
  rules:
    - host:
      http:
        paths:
        - pathType:
          path:
          backend:
            service:
            name:
            port:
              number:
```
