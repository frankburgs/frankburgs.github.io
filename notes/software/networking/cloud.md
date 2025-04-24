
[Types](#types)  
[Storage](#storage)  
[Services](#services)  
[Definitions](#definitions)  


- Providers will have cloud regions named like US South or NA East, also named availability zones (AZ).
- Public (several customers), private (one), hybrid.
- IaaS, can access networking, storage, and networking space without having to operate or manage.
- PaaS, can access the specific tools on the platform.
- SaaS, software licensing and delivery model on subscription basis.
- Virtual desktop infrastructure (VDI) used to access their enterprise apps.
- Community cloud is used by group(s) who want to share secrets.
- DaaS allows users to access desktops and apps from anywhere.
- DaaS is implemented using VDI.
- Linux based containers, Kubernetes, Istio, multicluster management tools, message queues, brokers.

# Network
- Interfaces need IP addresses, subnets, security groups, ACL's, VLAN's, VPC's, & VPN's.
- Firewalls, load balancers, gateways, and traffic analyzers can be virtualized.
- CDN's are also used.

# Virtualization
- You can replatform an application to make it cloud native to eliminate need for virtualization.

## Hypervisors
- Type 1 installed directly on top of the physical server (bare-metal hypervisors, most frequently used, most secure, lower latency)
- Type 2 there is a layer of host OS between it and the server (hosted, end-user virtualization)

## VM's
- ie virtual servers (instances).
- Specify region, OS, multi or single-tenant, hourly or monthly billing.
- Pre-defined config, virtual cores, memory.
- Compute or memory-intensive, or high-performance I/O.
- Dedicated hosts offer single-tenant isolation.

# Types of storage
- Information can consist of files, code, documents, images, videos, backups, snapshots, and databases.
- Bare-metal servers and virtual servers are provisioned with default storage in local drives.
## Object Storage
- Object supports large backups, uses metadata for fast keyword search, is AI scalable, & stores log files.
## Block storage
- Block is fast, reliable, across environments, and updates large data amounts frequenty and supports email servers.
## File Storage
- has familiar interface, subfolder management, supports ZIP and USB transfers, low scalability.
- File gateway is a file server in the cloud, S3, NFS, SMB.
- File storage appliances can provide encryption in transit.
- Is mounted to computer nodes via ethernet cables.
- Speeds vary under load.
- Can be mounted onto 1 or more compute nodes at a time.

# Services
- Infrastructure is the physical resources, as well as the virtualization (hypervisor) layer.
- Platform is more like operating system (runtime environments), high level of abstraction, middleware, includes databases, API's.
- Software is like Netsuite etc, multitenant.


# Definitions
- Bare metal server : single-tenant, dedicated, physical server, dedicated to a single customer. Server physically mounted in a data center. Cloud provider manages server up to the operating system.

- Business Process Management (BPM).

- Cloud computing : Shared pool of computing resources (networks, servers, storage, applications, services).
- Input/Output Operations per Second (IOPS) : Speed at which disks can read & write data.
- Network attached storage (NAS) : Local file server.

- Serverless computing resources are an abstraction on top of virtual machines.
- Software-defined networking (SDN) : 
- Storage area network (SAN) : Combines servers, storage systems, switches, software, services to provide secure, robust, data transfer.

- Tape gateway : Tape cloud backups, S3, glacier, glacier deep archive.

- Total cost of ownership (TCO).
- Virtual Server Instances (VSI's) :
- Virtual switch interface (VSI) : protocol allowing a network control application to manage a switch. Useful for networking applications like multiprotocol label switching (MPLS) and private network-to-network interface (PNNI) routing.

- Volume gateway : Data transfers between cloud and on-premises, iSCSI, cached (frequently used only) or stored (everything).