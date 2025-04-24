# sync or async
- RAM, ns, sync.
- Disk, 1 ms, async/sync.
- Network, 100 ms - 2 sec, async.

# Notes
- Pinging an IP address with no port specified defaults to port 80 ❔

Obtain an IP address automatically: When a device is configured to obtain an IP address automatically, it will use the Dynamic Host Configuration Protocol (DHCP) to obtain an IP address from a DHCP server on the network.  

The DHCP server will assign an IP address to the device, along with other network settings, such as the subnet mask and default gateway. This can simplify network management and reduce the likelihood of address conflicts.  

Obtain a DNS server address automatically: When a device is configured to obtain a DNS server address automatically, it will use the DHCP protocol to obtain the address of a DNS server on the network.  
The DNS server address will be provided by the same DHCP server that assigns the IP address to the device. This can simplify network management by automatically providing the DNS server address to devices on the network  

Primary DNS server address: The IP address of the first DNS server that a device will use to resolve domain names to IP addresses. When a device receives a request to resolve a domain name, it will first send the request to the primary DNS server.  

Secondary DNS server address: The the IP address of a backup DNS server that a device can use if the primary DNS server is unavailable. If the primary DNS server is unable to resolve a domain name, the device will then send the request to the secondary DNS server.
# Active directory domain services (ADDS)
- Microsoft tech manages domain structure, network access (auth, encr), connects to external domains, can be remotely managed.

``` shell
ipconfig
ping
nslookup
tracert

```
# Bureaucracies
- De-jure or formal standards have gone through a formal process to obtain consensus.
- Examples are HTTP, HTML, IP, ethernet 802.3d, publicly available documentation.
- De- facto standards are accepted in practice i.e. MS windows or qwerty keyboard.
- ISO set OSI, ITU set international telecom and fair use in radio frequency, DARPA did TCP/IP,  
- A device can have up to 65,536 ports.
# Networking
- There are thousands of network protocols, but they all do the same 3 things:
- Security, encryption, authentication, transportation,
- Communication: same
- Network management: connection, link aggregation, troubleshooting.
- Lower Ghz better over longer distance for wifi.
- There exists traditional and cloud IT infrastructures (not in one spot).
- Secure access service edge (SASE).
- Older internet is dial up, integrated services digital network (ISDN), digital subscriber line (DSL).
- Newer internet is cable, fiber optic, satellite, and cellular 🗼.
- Wireless internet service providers (WISP, cellphone companies).
- Topology defines a network's structure.
- Logical topology describes data flow across physical connections.
- A device that accesses the server is known as a client.
- A node that accesses the server to get on the network is known as a client.
- All devices that can send, receive, & create info on a network are nodes.
## Mobile
- Product release instruction (PRI) device network configuration settings.
- Preferred roaming list (PRL) sets which cell towers to use whilst roaming.
- Radio firmware is softwre that manages wireless connections.
- E-mail on mobile is POP3 (removes downloaded emails from server) or IMAP4 (saves emails on server).
- Use SSL or S/MIME to encrypt emails for security & authentication.
- International Mobile Equipment Identity (IMEI, unique # for phones on GSM, UMTS, LTE, and iDEN networks) and international mobile subscriber identity (IMSI, stored on device's sim card) are used to identify cell devices and users.
## Encryption
- Requires password, multiple encryption types available (WPA2 is strongest and most common).
- Captive portal is a web page pop-up used to authenticate new users to a wifi. Not a secure connection.
- Service set identifier (SSID) is name of a wireless network.
- 2.4 GHz band modes are 802.11 b,g,n.
- 5 GHz band modes are 802.11 a,n,ac.
- Wired equivalent privacy (WEP) was the first protocol security developed and is retired.
- Wireless protected access (WPA) stronger than WEP.
## Small office home office (SOHO) network
- LAN with less than 10 computers for a small physical space.
- Typically includes a router with software based firewall, switch with 4-8 LAN ethernet ports, printer, several desktops or laptops.
- Switch acts as network hub but is substituted for router when internet is desired.
- 100 m max run for ethernet cable.
- Servers and hardware have built-in DHCP and NAT actions.
- DHCP servers use IP addresses to provide network hosts.
- 
- NAT maps a public IPv4 address to private IP addresses.
## Socket
- Made up of a source IP address, a protocol, a port #, a desination IP address.

## Transmission control protocol (TCP)
- Guarantees data gets sent to intended recipient.
- Slower and requires more resources.
- FTP, web browsing, e-mail.
## User datagram protocol (UDP)
- Fast, fewer resources, does not guarantee every packet arrives (calls, live streaming).
## Bitcoin protocol
- P2p network operating ona cryptogrpahic protocol used for bitcoin transactions and internet transactions.
## Blockchain protocol
- Open, distributed ledger
## Model
- Describes architecture, components, and design of communication.
- Open system interconnection (OCI) is a conceptual framework to describe functions of a networking system.
- TCP/IP (based on OSI)
### Layer OSI
- Application, users interacting with an app.
- Presentation, where encryption occurs, ensure data is in a usable format.
- session, authentication and reconnections, ensure communication between devices.
- transport, manages delivery and error checking of packets. (TCP)
- network, interpreting addresses, determining path.
- data link, defines data format on the network, corrects errors.
- physical, electrically transfers data over a physical medium.
### Layer TCP IP
- Application, transport, network, data link, physical.

## Subnet
- Subnetting is the process of taking a large, single network and splitting it up into many individual smaller subnetworks (subnets).
- A subnet masks identify the boundary between the IP network and the IP host.
- A subnet is like an IP address but for only internal network usage.
- Routers use subnet masks to route data to the right place.
## Automatic private IP addressing (APIPA)
- OS feature like Windows that lets computers self-configure an IP address and subnet mas automatically when the DHCP server isn't available (use ipconfig in the prompt if this causes no connectivity)
## Network address translation (NAT)
- Maps multiple local private addresses to a public one before transferring information.
- Organizations that want their traffic to originate from a single IP address use NAT as do most home routers.
## Dynamic host configuration protocol (DHCP)
- Easiest broadband type to use but others available.
- Most common boradband type, used in cable modem connections.
- Automates configuration of IP network devices.
- Uses a pool of reserved IP addresses to automatically assign dynamic IP addresses or allocate a permanent IP address to a device.
- In static allocation the server uses a manually assigned "permanent" IP address for a device.
- Static IP is more common in business.
- Dynamic allocation the server chooses which IP address to assign a device each time it connects to the network.
- Automatic allocation is the server assigning a "permanent" IP address for a device automatically.
## IP packets transmission modes
- Packets are also called frames, blocks, cells, or segments.
### Unicast
- Transmissioh to a single destination, this is most internet traffic (HTTP, FTP).
### Anycast
- Transmission to any of the closest multiple nodes that has the correct unicast address.
### Multicast
- Transmission to all nodes that have subscribed to the multicast group or address.
- Limited to UDP protocol.
### Broadcast
- Transmission to all other nodes on the subnet.
- i.e. to find a DHCPv4 server broadcast transmission is limited to UDP protocol over IPv4 only.

## Data transmission flow
### Simplex
- Unidirectional communication between two devices, one can only send and the other only receive.
### Half-duplex
- Both stations can transmit and receive asynchronously.
### Full-duplex
- Both stations can transmit and receive simultaneously.
## Routers
- Connect to modems.
- Interconnect different networks or subnetworks.
- Manage traffic between networks by forwarding data packets.
- Allow multiple devices to use the same internet connection.
- Reads a packet's header to determine path.
- Uses internal routing table which is a list of paths to various network destinations.
- Forwards the packet to the next network in the path.
## Modem
- Modulator-demodulator, converts data into an easily network-transmittable format.
- When data arrives @ destination the receiving modem converts it back to original form.
- Cable and DSL are most common modems in use today.
- (Point to point protocol over ethernet) PPPoE used in DSL connections in areas that don't have newer options.
## Bridge
- Joins two separate networks so they can work as a single network.
- Wireless bridges can support wifi to wifi, wifi to ethernet, and bluetooth to wifi.
## Gateway
- Hardware or software that allows data to flow from one network to another.
- Gateways can use multiple protocols to connect multiple networks.
## Repeater
- Receives & retransmits a signal.
- Used to extend a wireless signal (past brick, metal, or concrete).
- Connect to wireless routers.
## Wireless access point (WAP)
- Allows wifi devices to connect to a wired network.
- Usually connects to a wired router as a standalone device.
- Acts as central wireless connection point for computers equipped with wireless network adapters.
- Plugged into a wired network switch.
- Reads each computers MAC address and forwards to wired switch.
- If wired network is connected to router with internet access, the wireless network will also have internet access.
## Network interface card (NIC)
- Connect device to a network.
- Can be wired or wireless, most computers have built-in wireless NICs.
- Most include ports for network cables.
## Client-server
- File transfer protocol (FTP) sites.
- Web servers & web browsers.
## Peer-to-peer
- File sharing sites, discussion forums, media streaming, and VoIP.
## Hub
- When hub receives data it broadcasts it to all connected devices.
- A switch is similar to a hub except it keeps a table of MAC addresses, and when it receives data it sends to specific address(es ?), which makes them more efficient than hubs.
- Switches and hubs connect to modems.
- If a switch or a hub fails it brings the entire network down.
## Physical topology
### Star
- Features a central computer that acts as a hub.
### ring
- All devices are connected in a circle where data only flows clockwise 🤔
### bus
- Connect all devices with a single cable or transmission line.
- Mainly suited for small networks such as lan.
### tree
- Combines bus & star, all devices connected in a hierarchical fashion.
- Example is a university campus with each building has it's own star network and all central computers are linked in a campus-wide system.
### mesh
- Connect all devices together, using dynamic routing, used in WAN, not in LAN.
- The internet is mesh.

## Wireless Personal area network (WPAN)
- USB, Firewire, Infrared, ZigBee, Bluetooth
- RFID uses electromagnetic or electrostatic coupling.
- Near field communication (NFC)
- Infrared data association (IrDA) provides LOS connectivity.
- Range from a few cm to m.

## Wireless Local area network (WLAN)
- Standards 802.11 a/b/g/n/ac
- ac is Wi-Fi5 introduced in 2013.
- Wifi6 (Standard 802.11 ax)
- Single site or building.
- Requires cables, switches, and routers to communicate to other LANs.
## Wireless Metropolitan area network (WMAN)
- Also Campus area network (CAN).
- Spans a city, campus or small region.
- Formed by connecting multiple LANs.
- Cable TV, telephone, public wifi or TV.
- Example is a vendor-specific with proprietary standards & equipment.
- IEEE 802.16, OFDM, quality of service.
- Worldwide interoperability for microwave access (WIMAX)
## Wireless Wide area network (WWAN)
- Long Term evolution (LTE) a converged 4G standard supported by GSM & CDMA network providers, theoretical max downlink of 150 Mbps.
- Leased telecommunications circuits often.
- Used by businesses, schools, and governments.
- The internet is a WAN.
- LoRaWaN is a standard network that balances low power with low-range communication requirements.
## Cellular (4G/5G)
- Provides consistent speeds, reliability, and efficiency.
## Wireless LAN (WLAN)
- Links 2 or more devices via wireless communication.
- Can provide connection to the wider internet through a gateway device.
## Virtual private network (VPN)
- Software based, control and direct communication across existing physical networks.
- Make network administration easier, increase efficiency, and improve security.
- A VPN is a private (or protected) network connection across a public connection.
- VPN's encrypt traffic, disguise identity, and safeguard data.
## VLAN 
- Network made up of locations from other networks.
- Separate networks into smaller groups, users can be located anywhere.
- When you want to share data securely.

# Domain name system (DNS)
- Phonebook of the internet.
- DNS cache is a record of all the queries made to a DNS server by a browser.


# Protocols
## IP addresses
- Static are manually assigned.
- Network servers or devices that have specific protocol settings often use static.
- Dynamic are automatically assigned.
- Public is used to communicate publicly, it connects to the internet.
- Private is uesd to connect securely to an internal private network.
- Loopback is the range of IP addresses reserved for the local host.
- Reserved have been reserved by the IETF and the IANA.
## IPv4
- Core protocol for the internet.
- Developed to provide identification for every network device.
- Only allows ~4.3B IP addresses.
- IP addresses are 32 bit (4 bytes) binary value, separated into 4 8-character binary values called octets. Each octet has a value between 0 and 255. An octet with a value over 255 does not constitute a valid IP address.
## IPv6
- Newest internet protocol version.
- Allows for 340UD IP addressses.
- 128-bit binary value broken into 8 fields each separated by a colon.