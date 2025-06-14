# [Images](https://kubernetes.io/docs/concepts/containers/images/)

- A container image represents binary data that encapsulates an application and all its software dependencies.
- You typically create a container image of your application and push it to a registry before referring to it in a Pod.
- The imagePullPolicy and the tag of the image affects how the kubelet attempts to pull (download) the specified image.
    - `IfNotPresent`: The kubelet will not pull the image if it already exists.
    - `Always`: The kubelet will pull the image from the specified registry.
    - `Never`: The kubelet will not pull the image from the registry.
