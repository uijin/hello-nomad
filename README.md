# hello-nomad

Hello world with Hashicorp Nomad


## Prerequesites
You should have installed Docker and NodeJS.

## Installation of tools
```
# go to your download folder, then..

# (for Linux users)
wget https://releases.hashicorp.com/consul/1.0.5/consul_1.0.5_linux_amd64.zip
wget https://releases.hashicorp.com/nomad/0.7.1/nomad_0.7.1_linux_amd64-lxc.zip
unzip consul_1.0.5_linux_amd64.zip
unzip nomad_0.7.1_linux_amd64-lxc.zip

# (for Mac users)
wget https://releases.hashicorp.com/consul/1.0.5/consul_1.0.5_darwin_amd64.zip
wget https://releases.hashicorp.com/nomad/0.7.1/nomad_0.7.1_darwin_amd64.zip
unzip consul_1.0.5_darwin_amd64.zip
unzip nomad_0.7.1_darwin_amd64.zip

mv consul ~/.local/bin/
mv nomad ~/.local/bin/
```

## Build and run your container
```
# run the agents
consul agent -dev 
nomad agent -dev -config=nomad/nomad.conf
# let them run in dedicated terminals...

# (optional) If you want to push the image in your own registry
docker build -t <your_id>/hello-nomad -f node-app/Dockerfile node-app/.
docker login # you need a Docker Hub account
docker push <your_id>/hello-nomad
# then you have to change the path in the nomad job description..

# run it
nomad run nomad/hello-nomad.hcl
```

## Access to the UIs
```
http://localhost:4646/ui/jobs
http://localhost:8500/ui/#/dc1/services
```

## Basic commands
```
# Show Consul agents
consul members

# Show Nomad servers
nomad server-members

# Show Nomad nodes
nomad node-status
nomad node-status -stats <node_id>

# Show Nomad jobs
nomad status

# Handle a job
nomad status <job_name>
nomad logs -f <alloc_id>
nomad logs -f -stderr <alloc_id> # to see the error logs
nomad stop <job_name>
```
