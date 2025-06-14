# [Nodes](https://kubernetes.io/docs/concepts/architecture/nodes/)

- Kubernetes runs your workload by placing containers into `Pods` to run on `Nodes`.
- Each node is managed by the control plane and contains the services necessary to run `Pods`.
- The components on a node include the `kubelet`, a `container runtime`, and the `kube-proxy`.
- Two `Nodes` cannot have the same name at the same time.
- A Node's status contains the following information:
    - `Addresses`.
    - `Conditions`.
    - `Capacity`.
    - `Allocatable`.
    - `Info`.

