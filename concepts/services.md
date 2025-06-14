## [Services](https://kubernetes.io/docs/concepts/services-networking/service/)

- A `Service` is a method for exposing a network application that is running as one or more Pods in your cluster.
- A `Service` makes set of Pods available on the network.
- The `Service` API is an abstraction to help you expose groups of Pods over a network.
- The set of Pods targeted by a `Service` is usually determined by a selector that you define.
- The controller for that `Service` continuously scans for Pods that match its selector.
- Port definitions in `Pods` have names, and you can reference these names in the `targetPort` attribute of a `Service`.
- The available type values and their behaviors are:
    - `ClusterIP`: Exposes the Service on a cluster-internal IP, it's the default one.
    - `NodePort`: Exposes the Service on each Node's IP at a static port.
    - `LoadBalancer`: Exposes the Service externally using a cloud provider's load balancer.
    - `ExternalName`: Maps a Service to a DNS name.

```yaml
apiVersion: v1
kind: Service
metadata:
  name:
  labels:
spec:
```
