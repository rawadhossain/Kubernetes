# [Ingress Class](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class)

- Ingresses can be implemented by different controllers, often with different configuration.
- Each Ingress should specify a class.
- A reference to an `IngressClass` resource that contains additional configuration including the name of the controller that should implement the class
- The newer `ingressClassName` field on `Ingresses` is a replacement for `kubernetes.io/ingress.class` annotation.
- There are some ingress controllers, that work without the definition of a default `IngressClass`.

```yaml
apiVersion: networking.k8s.io/v1
kind: IngressClass
metadata:
spec:
  controller:
  parameters:
    apiGroup:
    kind: 
    name:
```
