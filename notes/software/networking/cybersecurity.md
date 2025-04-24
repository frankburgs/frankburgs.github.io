[Procedures](#procedures)  
[General](#General)  
[Hardening](#hardening)   
[Attack Vectors](#attack-vectors)  
[Definitions](#definitions)  

- ACL's serve as subnet-level firewall, within the subnet one creates security group.
- VPC's can be segmented into subnets.
- Web access (public gateway instance), application tier, and back-end database VSI's.

# Procedures

- Setup & config, training & policy development, audits & updates.

# Threat intelligence lifecycle

- Determining requirements, collection, analysis, findings dissemination, feedback.
- Scanning networks, hosts, applications, databases, and wireless assets.
- Identify, classify, prioritize.
- Strategic asks "what" and "who" questions.
- Tactical asks "what" questions, identifying indicators of comprimise (IOCs)
- Operational asks "how" and "where" questions.

# Vulnerability assessment

- Nmap
- Fuzz testing (or fuzzing) : Injecting random code into software to elicit crashes.
- Identification : manual testing or with automated vulnerability scanning tool, use an asset management system, consult threat intel sources, vulnerability databases, threat intel feeds.
- Analysis : Identify root cause of each vulnerability, analyze publicly available info.
- Prioritization
- Remediation : Apply patches, install security controls.
- How easily can attackers exploit it?
- Do any available patches address it?
- What type of data does it expose?
- How many systems does it impact?
- Each question has a severity rating of 1 to 3 (lo to hi).
- Summary, findings, recommendations, conclusion.


# Structured Threat Information Expression (STIX)

- An open-source programming language (OSPL) that standardizes threat intelligence sharing.
- Each object has a type, name, description.


# Server maintenance

- Keep 18-25 deg C (65-75 F) and 40-60% humidity.
- Create hot & cold aisles to ensure airflow.
- Schedule fire risk assessment, implement fire suppression system, clean regularly, monitor & control room temp, inspect room & equipment regularly.
- Electromagnetic interference (EMI) is typically caused by other electronic devices, some manufacturers provide shielding.
- Have a backup generator.
- Pods, racks, servers, storage, networking equipment.


# Types of physical defense

- Deterrence (signs, lighting, fencing, security cameras).
- Denial (security guards, biometrics, door access control, mantraps)
- Detection (alarms, cameras, ground radar, motion, ultrasonic & microwave sensors)
- Delay (barriers, gates, roadblocks, receptionist delaying suspicious person)
- Defense (door, cabinet & device locks)

# Security meetings & training sessions policy

- Phishing attacks, unauthorized access by former employees, ransomware, theft, etc.

# Security rule of HIPAA

- Maintain reasonable and appropriate administrative, technical, and physical controls for protecting e-PHI.
- Ensure CIA of e PHI. (No employees taking portable hard-disks home, additionally such hard-disks are not encrypted)
- Identify & protect against reasonably anticipated threats to the security or integrity of the information. (Not compliant)
- Ensure workforce compliance. (compliant)
- Protect against reasonably anticipated, impermissible uses and disclosures. (compliant)

# General

- Most security software is open source so other security professionals can quickly contribute ❔
- Sandboxing is giving an application its own block of memory that other programs cannot access (on its own VM).
- Non-malicious threats include hardware failures, software downtime, network bandwidth issues.
- Data analytics leads to information leads to insight.
- Active malware in computer's memory, all files and running programs on hard disk, Windows Registry entries commonly used by malware to execute upon start-up, common malware locations (Windows directory, temp files).

- Policies, standards & guidelines, procedures.
- HIPAA, PCI DSS, FERPA.
- Training, job rotation, mandatory vacation.
- Logging in involves:  
1. Access control (limiting or granting, role of least privelege (ROLP), role-based access control (RBAC) follows an org chart.
2. Authorization (giving permission).
3. Authentication factors are something you know, have, or are (biometrics). SFA, 2FA, MFA, or SSO (lets you log into multiple locations).

- Disable unused features & ports, built-in accounts, change all default passwords, check documentation for default, backdoor, hidden accounts.
- VPN (encrypts traffic), IDS/IPS.
- Use whois lookup tool.

- In Google Cloud Platform (GCP), infrastructure primitives are any atomic unit of capacity (VM, persisten disk (PD), storage bucket, etc.)

# Hardening

- Traffic can be approved or denied based on IP addresses, ports, domain names, and even specific words and phrases.
- The NIST risk management framework (RMF) says to prepare, categorize, select, implement, assess, authorize, monitor.
- Lock when not in use, use antivirus & VPN, HTTPS traffic only, proper passwords & MFA, physically secure, automatic updates enabled.

# Internet protocol security (IPsec) 

- A suite of network standards & protocols that use cryptography to protect data traveling over the internet.
- Authentication header (AH) protocol authenticates senders & IP addresses.
- Encapsulating security payload (ESP) protocol encrypts data and authenticates data & senders.
- In tunnel mode each packet is rewrapped in a new layer with a new header and encrypted, common in site-site VPN.
- In transport mode the IP header of original data packet is left unencrypted, only the content is encrypted. common in host-host VPN.
- Security associations (SA) defines which types of hashing & encryption are used.
- Internet key exchange (IKE) secure exchange of cryptographic, keys.
- Encryption & hashing algorithms.
- Anti-replay protection.

## Security sockets layer (SSL)
- Authenticate a website's identity and enable an encrypted connection between a browser and a server.
- SSL certificates come from root certificate stores (Apple, Microsoft, Mozilla, Google, et al.)or CA's.
- Provide HTTPS URL, prevent fake sites, verify ownership.

## Encryption
- Advanced encryption standard (AES) is symmetric encryption.
- Cipher (substitutional, columnar transposition) is an algorithm that converts plain text into ciphertext.
- Diffie-Helman key exchange.
- Key unlocks the cipher.
- Rivest–Shamir–Adleman (RSA) encryption is a public-key cryptographic algorithm (asymmetric encryption).
- Modern encryption standards replaced Data Encryption Standard (DES), they authenticate a message to verify origin, options are digital certificates, passwords, or biometrics. They check integrity (Message Authentication Codes (MAC)). They confirm non-repudiation, where sender sends proof of delivery and receiver receives proof of sender's identity.

## Authentication
- What you know (security key, etc.)
- What you have, physical token (lock and key, phone for MFA, passphrase, etc.)
- What you are (biometric)
- Multifactor authentication (MFA) is a combo of web app, e-mail etc.

## Permissions or Access Control List (ACL)
- Describes what access each user has for every file, folder, and program on a computer.
- Read, write, and execute (files).
- Can read down, but cannot write down to reduce risk of something top secret finding its way down (Bell-LaPadula model, others are Chinese Wall and Biba models).

## Firewall
- Controls incoming and outgoing network traffic.
- Typically forms a barrier between a trusted internal network and an untrusted external network (like the internet).
- Can be either software or hardware.
- Wireless routers and OS's often have built in firewalls.

## Proxy server
- Acts as an intermediary between a LAN and the internet.
- Evaluates client requests and forwards them to appropriate server if they meet security requirements.
- Hide IP addresses.
- Save bandwidth by downloading files or updates for the first user then storing them for any future users who needs them.

## Passwords
- Cracking (unauthorized getting of correct password) by brute force, dictionary attacks, rainbow attacks.
- Minimum length 12 characters, mix of letters, numbers, special characters, unique password for every account & device, mandatory change every 6 - 12 months, employee training for cyber attacks and training including notification that the company will never ask for passwords.
- Avoid names, places, dictionary words, PII, use upper & lower case, avoid 'leet', add a passphrase (12 or more random words).

# Attack vectors

- Buffer is a block of memory for storing data. Always test length of input before copying it into a buffer (bounds checking). Programs also randomly use memory locations so hackers dont know what memory they are writing to. Spaces in memory after password buffers that are monitored for intrusion are known as "canaries".
- Code injections, control what characters can be accepted.
- NAND mirroring, attaching wires to a device's memory chip and perfectly copying all its contents. Then trying passwords until the device makes you wait, and you reflash the memory with the copy you made and keep trying.
- Eavesdropping (packet-sniffing), occurs on wireless, wired, & phone connections. Packet sniffer can view anything sent on an unencrypted network. On an encrypted network it can only see origin and destination.
- Man in the middle (MITM), can be physical (nearby, same wifi network) or logical (emails or texts with fake links and malware-infected websites). Also spoofing, hijacking, and theft of browser cookies. Also on-path attacks.
- Replay attack is type of MITM which intercepts & retransmits, requires trusted entities with an access token (obtained after verification), by sniffing network traffic between trusted entities and hijack a session and get a token and impersonate an entity.
- Cross-site scripting (XSS), attacker attaches malicious code onto a trusted site. To prevent, validate inputs, set cookie rules, apply web application firewall (WAF) rules.
- SQLi (injection) to bypass security protections, returns syntax error if doesn't work. Parameterize queries, use an allowlist, store procedures ❔, escape user input.
- Buffer overflow, a site gets more internet traffic than it can handle, ICMP flood, diagnostic pings are sent to every computer on a network causing a crash, SYN flood, rapid series of incomplete connection requests floods a site until server crash.

# Definitions

- AICPA : American Institute of Certified Public Accountants.

- CCI : Company confidential information, plans, employee knowledge, etc.

- Confidential : Proprietary, source code, private customer records, employee records, purchase history, personally identifiable information (PII), protected health information (PHI). Both PII and PHI are private as well.

- FIM : File integrity monitoring, ensures activity is authorized.

- GAPP : Generally Accepted Privacy Principles, developed by AICP A & CICA.  
Management, compliance specialist.  
Notice, informing people.  
Choice & consent, updates, statistics.  
Collection, obtaining the required transactional data and no extra.  
Use, retention, & disposal, by consent, laws & regs.  
Access, provide people with access to their personal info upon request.  
Third party disclosure.  
Security.  
Quality, complete, accurate, valid, correctly formatted.  
Monitoring & enforcement.  

- GDPR : General Data Protection Regulation, EU digital privacy regulations.

- Intrusion detection system (IDS) : Monitors network traffic & reports malicious activity.
- Intrusion protection system (IPS) : Inspects network traffic and removes, details or redirects malicious items.

- Proxy firewall : Intermediary between requesting system and the internet.

- Public key infrastructure (PKI) : when a user is validated with a digital certificate by a Certificate Authority (CA).

- Security kernel (trusted computing base) : is a minimal set of operating system software that's close to provably secure.

- Stateful inspection (dynamic filtering) : monitors active network connections.

- Trusted Platform Module (TPM) chips store & manage encryption keys, won't start or unencrypt if tampering detected.

- Unified extensible firmware interface (UEFI) is newer boot firmware than BIOS.