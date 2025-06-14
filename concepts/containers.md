# [Container](https://kubernetes.io/docs/concepts/containers/)

- Are the technology for packaging an application along with its runtime dependencies.
- Containers decouple applications from the underlying host infrastructure.
- Each node in a Kubernetes cluster runs the containers that form the Pods assigned to that node.
- A container image is a ready-to-run software package containing everything needed to run an application.
- Containers are intended to be stateless and immutable.
- They belong to a Pod, which is the smallest deployable object in Kubernetes.

```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```
