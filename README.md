# Kubernetes notes

## Terminology

- `Node`: A worker machine in Kubernetes, part of a cluster.
- `Cluster`: A set of Nodes that run containerized applications managed by Kubernetes. 
    - For this example, and in most common Kubernetes deployments, nodes in the cluster are not part of the public internet.
- `Edge router`: A router that enforces the firewall policy for your cluster.
    - This could be a gateway managed by a cloud provider or a physical piece of hardware.
- `Cluster network`: A set of links, logical or physical, that facilitate communication within a cluster according to the Kubernetes networking model.
- `Service`: A Kubernetes Service that identifies a set of Pods using label selectors.
    - Unless mentioned otherwise, Services are assumed to have virtual IPs only routable within the cluster network.



## Concepts

- [Config Maps](concepts/config_maps.md)
- [Containers](concepts/containers.md)
- [Deployments](concepts/deployments.md)
- [Daemon Sets](concepts/daemon_sets.md)
- [Images](concepts/images.md)
- [Ingress](concepts/ingress/main.md)
    - [Classes](concepts/ingress/classes.md)
    - [Controllers](concepts/ingress/controllers.md)
- [Jobs](concepts/jobs.md)
- [Cron Jobs](concepts/cron_jobs.md)
- [Namespaces](concepts/namespaces.md)
- [Nodes](concepts/nodes.md)
- [Pods](concepts/pods.md)
- [Probes](concepts/probes.md)
- [Roles](concepts/roles.md)
- [Roles Bindings](concepts/roles_bindings.md)
- [Secrets](concepts/secrets.md)
- [Services Accounts](concepts/service_accounts.md)
- [Services](concepts/services.md)
- [Stateful Sets](concepts/stateful_sets.md)
- [Volumes](concepts/volumes.md)

<br>

## Permanent alias kubectl in PowerShell
In PowerShell, type the following command:
```
notepad $PROFILE
```
Open notepad and save this command:
```
Set-Alias -Name k -Value kubectl
```

Now can use "k" as kubectl


# Commands

### Create Deloyment
```
kubectl create -f deployment.yml
```
### Get Deloyment
```
k get deployments
```
### Update Deloyment
```
k set image deployment/fitness-app mysql=mysql:8.0
```
### Status of Deloyment
```
k rollout status deployment/fitness-app
```
```
k rollout history deployment/fitness-app
```
### Rollback Deloyment
```
k rollout undo deployment/fitness-app
```
### Kubernetes Commands

### kubectl
Kubectl is a Command line tool for communicating with a Kubernetes cluster.

### Kubernetes version running on nodes

```bash
k version
```
### Number of nodes

```bash
k get nodes
```
### Command to create a pod and deploy docker container in PODs

```bash
k run mysql --image mysql
```
### List of PODS in Cluster

```bash
k get pods
```
### Get information about POD

```bash
k describe pod mysql
```
### Additional Information about POD

```bash
k get pods -o wide
```
### Create POD using pod-definition.yml file

```bash
k create -f pod-definition.yml
```
### Delete Pod

```bash
k delete pod pod-name
```
### Edit Pod

```bash
k edit pod pod-name
```

### pod-definition.yml

Kubernetes uses yml file as an input to create pods, replicas, deployments, services and so on,

The yml files contain four top level fields-

- apiVersion:  Depending on what we need to create use apiVersion, for creating pods use version v1
- kind: Type of object we want to create such as Pod
- metadata: Data about the object like name, labels and app.
- spec: Specification 

### Create replica sets

```
k create -f replicaset.yml
```
### Get replica sets

```
k get replicaset
```
### Delete replica sets

```
k delete replicaset replicaset-name
```
### Replace replica sets

```
k replace -f replicaset.yml
```
### Scale replica sets

```
k scale -replicas=6 -f replicaset.yml
```